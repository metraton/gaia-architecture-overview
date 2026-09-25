// Frame-exact renderer for the narrated video, injected by capture.mjs into
// index.html?video. Every visual property it sets is a pure function of the
// time passed to window.__seek(t), and CSS transitions are switched off, so a
// screenshot after __seek depends on t alone and never on the wall clock.
//
// Reveals use `filter: opacity()` and `translate`, not `opacity`/`transform`,
// so the deck's own `.stage.flowing` dimming (an `opacity` rule) keeps working
// on revealed boxes.
(function () {
  'use strict';

  const deck = window.__deck;
  if (!deck) throw new Error('driver.js: window.__deck is missing; load index.html?video');

  // The frame shows the page's chip bar and its content on the day background.
  // All other deck chrome is hidden, and the canvas stops being a padded scroll
  // box. The chip bar keeps the deck's chip style; frame() places it. The "all"
  // reset chip is hidden: at rest it is the only highlighted pill, so it would
  // read as a lit chip whenever nothing is lit.
  // Opacity of a chip's non-members in video mode (the deck uses 0.18 for boxes):
  // light enough that the page stays readable, dark enough that the lit
  // members still stand out.
  const VIDEO_DIM = 0.6;
  const css = document.createElement('style');
  css.textContent =
    '*,*::before,*::after{transition:none!important;animation:none!important;caret-color:transparent!important}' +
    '.panel,.bar,.help-modal,[data-help-backdrop],.actbar .bar-spacer,.actbar .chip[data-flow="all"]{display:none!important}' +
    'html,body,.deck,.act,.stage,.canvas,.actbar{background:var(--bg)!important;border:0!important;box-shadow:none!important}' +
    '.canvas{inset:0!important;padding:0!important;overflow:hidden!important;scrollbar-width:none!important;cursor:default!important}' +
    '.actbar{position:absolute!important;left:0;right:0;z-index:1;padding:0!important;justify-content:center!important}' +
    '.actbar .chips{justify-content:center}' +
    // A lit chip dims non-members less than the interactive deck does, and never
    // dims section titles or the chip-less heading box.
    `.stage.flowing .box:not(.lit),.stage.flowing .rail:not(.lit){opacity:${VIDEO_DIM}!important}` +
    '.stage.flowing .box:not([data-filters]),.stage.flowing .canvas .zone-header{opacity:1!important}' +
    '::-webkit-scrollbar{display:none!important}';
  document.head.appendChild(css);

  // Fraction of the frame kept free on each side around chip bar plus content.
  const FRAME_MARGIN = 0.06;
  // Space between the chip bar and the content, in frame pixels.
  const BAR_GAP = 28;

  const ID_SELECTOR = id => `[data-k="${id}"],[data-zone="${id}"],[data-cid="${id}"]`;
  const ID_ATTRS = '[data-k],[data-zone],[data-cid]';
  const idOf = n => n.dataset.k || n.dataset.zone || n.dataset.cid;
  const clamp01 = x => (x < 0 ? 0 : x > 1 ? 1 : x);
  const easeOutCubic = x => 1 - Math.pow(1 - x, 3);

  let video = null;
  let shownIndex = -1;
  let appliedChip = 'all';

  // Rails of a ring, ordered clockwise from 12 o'clock around the core centre.
  function ringOrder(zone, core) {
    const c = core.getBoundingClientRect();
    const cx = c.left + c.width / 2, cy = c.top + c.height / 2;
    const angle = n => {
      const r = n.getBoundingClientRect();
      const a = Math.atan2(r.left + r.width / 2 - cx, cy - (r.top + r.height / 2));
      return a < 0 ? a + 2 * Math.PI : a;
    };
    return [...zone.querySelectorAll('[data-cid]')].filter(n => n.classList.contains('rail'))
      .sort((a, b) => angle(a) - angle(b));
  }

  // Stacks the chip bar (at its native size) above the content plane, scales the
  // plane so bar + gap + content fit inside FRAME_MARGIN, and centres the stack.
  // The plane keeps the width and tier it was laid out at, so the scale is a
  // transform over the deck's own 1920px layout, not a relayout; a static
  // transform is rasterised at its final size, so text stays crisp.
  function frame(act) {
    const plane = act.querySelector('.sec-plane');
    const bar = act.querySelector('.actbar');
    plane.style.cssText = '';
    const w = plane.offsetWidth, h = plane.offsetHeight, barH = bar.offsetHeight;
    const W = window.innerWidth, H = window.innerHeight;
    const byWidth = (W * (1 - 2 * FRAME_MARGIN)) / w;
    const byHeight = (H * (1 - 2 * FRAME_MARGIN) - barH - BAR_GAP) / h;
    const scale = Math.min(byWidth, byHeight);
    const top = (H - (barH + BAR_GAP + h * scale)) / 2;
    const x = (W - w * scale) / 2, y = top + barH + BAR_GAP;
    bar.style.top = `${top}px`;
    plane.style.cssText = `position:absolute;left:0;top:0;margin:0;max-width:none;width:${w}px;` +
      `transform-origin:0 0;transform:translate(${x}px,${y}px) scale(${scale})`;
    return { width: w, height: h, bar: barH, scale: Math.round(scale * 1000) / 1000, binds: scale === byWidth ? 'width' : 'height' };
  }

  // plan: { fade, reveal:{duration,rise,anticipation}, ring:{stagger},
  //         pages:[{ page, start, end, base:[id], filters:[key],
  //                  cues:[{ t, reveal?:[id], rise?, chip?, ring?, around? }] }] }
  // `t` is the anchor time. Every motion cue (reveal, ring, a lit chip)
  // fires reveal.anticipation seconds before it, but never before the page's fade-in
  // has finished; a clear (chip "all") fires on its anchor. Chips are ordered by
  // anchor, so an anticipated chip is never cancelled by an earlier-anchored clear.
  // Returns the list of problems; an empty list means every cue can render.
  function load(plan) {
    const errors = [];
    const framing = {};
    window.__videoFraming = framing;
    const pages = plan.pages.map(p => {
      const index = deck.acts.findIndex(a => a.dataset.pageId === p.page);
      if (index < 0) { errors.push(`${p.page}: no rendered page with this id`); return null; }
      const act = deck.acts[index];
      deck.show(index);
      framing[p.page] = frame(act);
      const lead = plan.reveal.anticipation || 0;
      const early = t => Math.max(p.start + plan.fade, t - lead);
      const at = new Map();
      const reveals = [];
      const chips = [];
      const find = (id, where) => {
        const n = act.querySelector(ID_SELECTOR(id));
        if (!n) errors.push(`${p.page}: ${where} names "${id}", which is not on the page`);
        return n;
      };
      const addReveal = (n, t, rise) => {
        if (!n) return;
        reveals.push({ el: n, t, rise });
        at.set(n, Math.min(at.has(n) ? at.get(n) : Infinity, t));
      };
      for (const cue of p.cues) {
        const fire = early(cue.t);
        if (cue.reveal) for (const id of cue.reveal) addReveal(find(id, 'reveal'), fire, cue.rise ?? plan.reveal.rise);
        if (cue.chip !== undefined) {
          if (cue.chip !== 'all' && !p.filters.includes(cue.chip)) errors.push(`${p.page}: chip "${cue.chip}" is not a filter of the page`);
          chips.push({ anchor: cue.t, t: cue.chip === 'all' ? cue.t : fire, key: cue.chip });
        }
        if (cue.ring) {
          const zone = find(cue.ring, 'ring'), core = find(cue.around, 'ring core');
          if (zone && core) ringOrder(zone, core).forEach((n, i) => addReveal(n, fire + i * plan.ring.stagger, plan.reveal.rise));
        }
      }
      for (const id of p.base) find(id, 'base');

      // An element is on screen once it and every cued ancestor have been revealed.
      const visibleAt = n => {
        let t = -Infinity;
        for (let a = n; a && act.contains(a); a = a.parentElement && a.parentElement.closest(ID_ATTRS)) {
          if (at.has(a)) t = Math.max(t, at.get(a));
        }
        return t;
      };
      const round = x => x.toFixed(2);
      for (const c of chips) {
        if (c.key === 'all') continue;
        const members = [...act.querySelectorAll('[data-filters]')]
          .filter(m => m.getAttribute('data-filters').split(/\s+/).includes(c.key));
        const first = Math.min(...members.map(visibleAt));
        if (!(first <= c.t)) errors.push(`${p.page}: chip "${c.key}" fires at ${round(c.t - p.voiceAt)} s but no member is revealed before ${round(first - p.voiceAt)} s`);
      }

      const roots = [...act.querySelectorAll(ID_ATTRS)].filter(n => !n.parentElement.closest(ID_ATTRS));
      for (const r of roots) {
        const id = idOf(r);
        if (!p.base.includes(id) && !at.has(r)) errors.push(`${p.page}: top-level "${id}" is neither in base nor cued`);
      }
      for (const [n, t] of at) {
        for (let a = n.parentElement.closest(ID_ATTRS); a && act.contains(a); a = a.parentElement.closest(ID_ATTRS)) {
          if (at.has(a) && at.get(a) > t) errors.push(`${p.page}: "${idOf(n)}" is cued before its ancestor "${idOf(a)}"`);
        }
      }
      chips.sort((a, b) => a.anchor - b.anchor);
      return { ...p, index, act, reveals, chips };
    }).filter(Boolean);
    video = { ...plan, pages };
    shownIndex = -1;
    return errors;
  }

  function seek(t) {
    const pages = video.pages;
    const pg = pages.find(p => t < p.end) || pages[pages.length - 1];
    if (pg.index !== shownIndex) {
      if (shownIndex >= 0 && appliedChip !== 'all') deck.setFlow(shownIndex, 'all');
      deck.show(pg.index);
      shownIndex = pg.index;
      appliedChip = 'all';
    }
    pg.act.style.opacity = String(clamp01((t - pg.start) / video.fade) * clamp01((pg.end - t) / video.fade));

    for (const r of pg.reveals) {
      const e = easeOutCubic(clamp01((t - r.t) / video.reveal.duration));
      r.el.style.filter = e >= 1 ? '' : `opacity(${e})`;
      r.el.style.translate = e >= 1 ? '' : `0 ${(1 - e) * r.rise}px`;
    }

    let key = 'all';
    for (const c of pg.chips) if (c.t <= t) key = c.key;
    if (key !== appliedChip) {
      deck.setFlow(pg.index, key);
      deck.closePanel(pg.index);
      appliedChip = key;
    }
  }

  window.__videoLoad = load;
  window.__seek = seek;
})();
