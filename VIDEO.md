# VIDEO — narrated capture of the deck

A ≤4:30 video of pages 1–6 of this deck, captured frame by frame from the real
`index.html` at 1920×1080 / 60 fps and animated in sync with six narration
WAVs. Everything described here exists under `tools/video/`; where this file
and those files disagree, the files win.

## 1. Inputs

| File    | Page (manifest `order`)                               | Duration | Rate     | Ch | Bits |
|---------|-------------------------------------------------------|---------:|---------:|---:|-----:|
| `1.wav` | 1 · Why (`s-shared-semantics`, 0)                     | 21.520 s | 24000 Hz | 1  | 16   |
| `2.wav` | 2 · What Gaia is (`p2-the-map`, 1)                    | 35.600 s | 24000 Hz | 1  | 16   |
| `3.wav` | 3 · The life of a request (`p4-life-of-a-request`, 2) | 41.720 s | 24000 Hz | 1  | 16   |
| `4.wav` | 4 · Contracts (`p6-contracts`, 3)                     | 34.600 s | 24000 Hz | 1  | 16   |
| `5.wav` | 5 · What Gaia keeps (`p5-what-gaia-keeps`, 4)         | 37.440 s | 24000 Hz | 1  | 16   |
| `6.wav` | 6 · Install it, ask it (`p9-back-to-the-map`, 5)      | 26.200 s | 24000 Hz | 1  | 16   |
|         | **Total narration**                                   | **197.080 s** |     |    |      |

**Narration WAVs are kept outside git.** The six files sit at the repository
root, untracked, and the pipeline reads them from there (`narration.json`
and `align.json` name the WAV per page). A fresh clone cannot render the video until they are
put back.

`N.wav` is the page whose visible name starts with `N ·`. The page *file*
names do not match (page 3 is `p4-…yaml`, page 4 is `p6-…yaml`, page 6 is
`p9-…yaml`), so every video file addresses pages by manifest `id`.
`backup-code` (order 6) is not in the video.

## 2. Requirements

- Node (v24 used) and the `playwright` devDependency with its Chromium;
  `capture.mjs` falls back to the newest `~/.cache/ms-playwright/chromium-*`
  when the default launch fails.
- A full `ffmpeg` and `ffprobe` on PATH (H.264, AAC, WAV input,
  `silencedetect`). Playwright's bundled ffmpeg is not enough.

## 3. The pipeline

```
1.wav … 6.wav + narration.json
  -> align.mjs    -> align.json      (sentence start/end inside each WAV)
timeline.json + align.json
  -> plan.mjs     (page slots and cue times in seconds; shared module)
  -> capture.mjs  -> out/gaia.mp4    (validate, then frame-by-frame capture)
  -> split.mjs    -> out/pages/NN-<page>.mp4
```

1. `node tools/video/align.mjs` writes `align.json`. Per page it spreads the
   sentences over the speech span in proportion to their length, then lets
   `silencedetect=noise=-35dB:d=0.15` propose pauses and matches sentence
   boundaries to them monotonically. The match is kept only when every
   matched pause lies within 2.0 s of its estimate; otherwise the page keeps
   the character estimate. All six pages currently align by silencedetect.
2. `node tools/video/capture.mjs [--pages id,…] [--out out/gaia.mp4]`
   validates the whole timeline against the rendered deck (§5) and refuses to
   capture on any error, then renders only the selected pages, laid end to
   end from t=0.
3. `node tools/video/split.mjs [--pages id,…] [--in out/gaia.mp4] [--outdir out/pages]`
   cuts one clip per page at the plan's page boundaries. Pass the same
   `--pages` the capture used. Clips are re-encoded, not stream-copied: a
   stream copy cuts only on a keyframe, which x264 spaces up to ~4 s apart.

`out/` is in `.gitignore`: rendered output is large and regenerable.

Jorge runs these node scripts himself: Gaia's approval flow cannot sign
`node <script>` (the hook blocks it as T3 and `gaia approvals request-set`
rejects it as interactive).

## 4. Capture and encode

Every animated property is a pure function of `t`, and CSS transitions and
animations are off in video mode, so a screenshot after `__seek(t)` depends on
`t` alone. Frames are PNG screenshots piped into ffmpeg; none touch disk.

- **Supersample 2×.** The page is laid out at 1920×1080 CSS px (so the deck's
  breakpoints do not move) with `deviceScaleFactor: 2`, then downscaled with
  lanczos. At 1× a page scaled below 1 (page 4 is ~0.66) draws its 1px borders
  as faint sub-pixel lines and its text with colour fringes that yuv420p smears.
- **Audio.** Each page's WAV is delayed to its "voice at" offset (`adelay`),
  the six are mixed with `amix … normalize=0`, and the mix is padded.
- **Encode** (`capture.mjs`; `split.mjs` uses the same settings without
  `-shortest`):

```
-c:v libx264 -preset slow -tune animation -crf 10 -pix_fmt yuv420p -r 60
-c:a aac -b:a 192k -ar 48000 -ac 2 -shortest -movflags +faststart
```

## 5. Deck hooks and the driver

`engine/engine.js` stamps `data-cid="<id>"` on rails and separators that have
an id, and exposes `window.__deck` only when the URL carries `?video`; the
interactive deck is otherwise unchanged. `tools/video/driver.js` is injected
by `capture.mjs` and never loaded by `index.html`.

**Framing.** The driver hides every piece of deck chrome except the page's
chip bar, and hides the `all` reset chip in it (at rest it is the only
highlighted pill, so it would read as a lit chip). The content plane keeps its
1920px layout and is scaled by one transform so that the chip bar, a 28px gap
and the page fit inside a 6% margin on every side, centred.

**Motion**, all values from `timeline.json` unless named otherwise:

- Page fade: `fade` 0.4 s in and out, through the page background.
- Reveal: `reveal.duration` 0.7 s, easeOutCubic, rising `reveal.rise` 10px; a
  cue may set its own `rise` (page 6's steps use 24px). Reveals set `filter:
  opacity()` and `translate`, so the deck's own dimming keeps working.
- Anticipation: every motion cue (reveal, ring, a lit chip) fires
  `reveal.anticipation` 0.3 s before its anchor, never before the page's
  fade-in has finished. A clear (`"chip": "all"`) fires on its anchor.
- Rings (page 5): a `ring` cue reveals the zone's rails clockwise from 12
  o'clock around the `around` core, `ring.stagger` 0.15 s apart.
- Chips: the lit chip is the last chip cue at or before `t`. Non-members dim
  to a soft 0.6 opacity (`VIDEO_DIM` in `driver.js`; the interactive deck uses
  0.18); section titles and chip-less boxes never dim. The RELATION panel is
  closed after every chip change.

## 6. Timeline format and validation

`tools/video/timeline.json` holds the global settings (`fps`, `width`,
`height`, `theme`, `supersample`, `fade`, `reveal`, `ring`) and, per page,
`lead` 0.8 s, `tail` 1.2 s, `base` (visible from the first frame) and `cues`.

- `at` is a sentence anchor `{ "s": n }` (1-based), optionally with
  `"word"` (resolved by its character position inside the sentence),
  `"end": true` (the sentence's end instead of its start) and `"offset"`
  seconds.
- A cue carries `reveal: [id…]` (optional `rise`), `chip: key` (`"all"`
  clears), or `ring: zone` with `around: core`.

`load()` in `driver.js` rejects the timeline when:

- an id is not on the page as `data-k`, `data-zone` or `data-cid`;
- a top-level element is neither in `base` nor cued;
- a child is cued before its ancestor;
- a chip key is not one of the page's filters;
- **chip-visibility guard:** a chip fires before at least one of its members
  (and every cued ancestor of that member) has been revealed.

The cues themselves live in `timeline.json`; each page's intent is its
**Motion beat** in `STORYBOARD.md`. Page 1 lights no chips.

## 7. Length

Each page slot is `lead 0.8 s + WAV + tail 1.2 s`; the fades sit inside lead
and tail, so the voice never plays over a fade.

| Page | Slot start | Voice at | Slot length |
|------|-----------:|---------:|------------:|
| 1 | 0.00 | 0.80 | 23.52 |
| 2 | 23.52 | 24.32 | 37.60 |
| 3 | 61.12 | 61.92 | 43.72 |
| 4 | 104.84 | 105.64 | 36.60 |
| 5 | 141.44 | 142.24 | 39.44 |
| 6 | 180.88 | 181.68 | 28.20 |
| end | 209.08 | | |

**Length: 209.08 s ≈ 3:29** (12,545 frames at 60 fps), 61 s under the 4:30
ceiling. Padding changes go in `lead`/`tail` alone; everything else is derived
by `plan.mjs`.
