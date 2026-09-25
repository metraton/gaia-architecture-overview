// The video plan: page slots and cue times in seconds, resolved from
// timeline.json (cues by sentence) and align.json (sentence times). capture.mjs
// renders from it and split.mjs cuts at its page boundaries, so both agree on
// where every page starts and ends.
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

export const HERE = dirname(fileURLToPath(import.meta.url));
export const ROOT = join(HERE, '..', '..');
export const readJson = name => JSON.parse(readFileSync(join(HERE, name), 'utf8'));

export function argValue(flag, fallback) {
  const i = process.argv.indexOf(flag);
  return i > 0 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}

// `--pages id,id,...` → the selected page ids, in timeline order. An id that is
// not in the timeline is an error rather than a silently shorter video.
export function selectedPages(timeline) {
  const all = timeline.pages.map(p => p.page);
  const asked = argValue('--pages', all.join(',')).split(',').map(s => s.trim()).filter(Boolean);
  const unknown = asked.filter(id => !all.includes(id));
  if (unknown.length) throw new Error(`--pages: not in timeline.json: ${unknown.join(', ')} (known: ${all.join(', ')})`);
  return all.filter(id => asked.includes(id));
}

// A sentence anchor { s, word?, end?, offset? } → seconds inside the page's WAV.
// A `word` resolves by its character position inside the sentence's time span.
function anchorTime(at, sentences, where) {
  const s = sentences[at.s - 1];
  if (!s) throw new Error(`${where}: sentence ${at.s} does not exist`);
  let t = at.end ? s.end : s.start;
  if (at.word) {
    const i = s.text.indexOf(at.word);
    if (i < 0) throw new Error(`${where}: "${at.word}" is not in sentence ${at.s}: "${s.text}"`);
    t = s.start + (i / s.text.length) * (s.end - s.start);
  }
  return t + (at.offset || 0);
}

// Selected pages laid end to end from t=0: each slot is lead + WAV + tail.
export function buildPlan(timeline, align, filtersByPage, pageIds) {
  let clock = 0;
  const pages = timeline.pages.filter(p => pageIds.includes(p.page)).map(p => {
    const a = align.pages.find(x => x.page === p.page);
    if (!a) throw new Error(`${p.page}: missing from align.json; run align.mjs`);
    const start = clock, voiceAt = start + p.lead, end = voiceAt + a.duration + p.tail;
    clock = end;
    const cues = p.cues.map((c, i) => ({ ...c, t: voiceAt + anchorTime(c.at, a.sentences, `${p.page} cue ${i + 1}`) }));
    return { page: p.page, audio: a.audio, start, voiceAt, end, base: p.base, cues, filters: filtersByPage[p.page] || [] };
  });
  return { fade: timeline.fade, reveal: timeline.reveal, ring: timeline.ring, duration: clock, pages };
}
