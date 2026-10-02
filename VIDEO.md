# VIDEO — the narrated video of this deck

The video of pages 1–6 is made by the diagram-builder skill's video pipeline,
vendored under `tools/video/` and run as `npm run video:<step> --prefix <deck>`.
The steps, the script format and what each step needs are documented in the
skill's `video.md`; this file only records what is specific to this deck.

- **Script:** `video/script.json` — what each page says and, per sentence or
  per word, what it shows and which chips it lights.
- **Audio:** `video/audio/1.wav` … `6.wav`, the paths the script declares.
  They are kept out of git (`.gitignore`), so a fresh clone cannot align or
  capture until they are put back.
- **Timing:** `video/align.json`, written by `npm run video:align`.
- **Voice:** Chatterbox (`ResembleAI/chatterbox`, English), the default
  provider of `npm run video:voice`, with exaggeration 0.5, cfg_weight 0.5
  and torch seed 42 + sentence number, cloning
  `~/.local/share/gaia-tts/chatterbox/reference.wav` (sha256 `d15d9b74…5438`).
  That clip is Kokoro `am_michael` at speed 1.10 saying "Gaia is a layer that
  sits between you and your AI agents. It talks with you and coordinates the
  work, but it never makes the changes itself." Kokoro renders it slightly
  differently each run, so keep the file rather than re-rendering it: a new
  clip changes the voice and invalidates every cached sentence in
  `~/.local/share/gaia-tts/chatterbox/cache/`. `--provider kokoro` still voices
  with Kokoro `am_michael` at 1.10 (decision D110).

`N.wav` is the page whose visible name starts with `N ·`; the page files do
not match those numbers (page 3 is `p4-…yaml`, page 4 is `p6-…yaml`, page 6 is
`p9-…yaml`).

## Measured with the old pipeline

Both tables were measured before the deck adopted the skill's pipeline. The
new `video:align` and `video:plan` reproduce the same durations and slots.

| File    | Page (manifest `order`)                               | Duration | Rate     | Ch | Bits |
|---------|-------------------------------------------------------|---------:|---------:|---:|-----:|
| `1.wav` | 1 · Why (`s-shared-semantics`, 0)                     | 21.520 s | 24000 Hz | 1  | 16   |
| `2.wav` | 2 · What Gaia is (`p2-the-map`, 1)                    | 35.600 s | 24000 Hz | 1  | 16   |
| `3.wav` | 3 · The life of a request (`p4-life-of-a-request`, 2) | 41.720 s | 24000 Hz | 1  | 16   |
| `4.wav` | 4 · Contracts (`p6-contracts`, 3)                     | 34.600 s | 24000 Hz | 1  | 16   |
| `5.wav` | 5 · What Gaia keeps (`p5-what-gaia-keeps`, 4)         | 37.440 s | 24000 Hz | 1  | 16   |
| `6.wav` | 6 · Install it, ask it (`p9-back-to-the-map`, 5)      | 26.200 s | 24000 Hz | 1  | 16   |
|         | **Total narration**                                   | **197.080 s** |     |    |      |

Each page slot is `lead 0.8 s + WAV + tail 1.2 s`:

| Page | Slot start | Voice at | Slot length |
|------|-----------:|---------:|------------:|
| 1 | 0.00 | 0.80 | 23.52 |
| 2 | 23.52 | 24.32 | 37.60 |
| 3 | 61.12 | 61.92 | 43.72 |
| 4 | 104.84 | 105.64 | 36.60 |
| 5 | 141.44 | 142.24 | 39.44 |
| 6 | 180.88 | 181.68 | 28.20 |
| end | 209.08 | | |

Length: 209.08 s ≈ 3:29.
