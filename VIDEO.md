# VIDEO — the narrated video of this deck

The video of pages 1–6 is made by the diagram-builder skill's video pipeline,
vendored under `tools/video/` and run as `npm run video:<step>`. The script
format and each step's internals are documented in the skill's `video.md`;
this file records what is specific to this deck. What each page shows is in
[STORYBOARD.md](STORYBOARD.md).

## Inputs and outputs

- **Script:** `video/script.json` — per page, the sentences said and, per
  sentence or per word (`cues`), what is shown, which chip is lit and what is
  typed.
- **Audio:** the per-page WAV the script declares, kept out of git
  (`video/audio/`). The file numbers do not follow the page order:

  | Page | File          |
  |------|---------------|
  | 1    | `audio/1.wav` |
  | 2    | `audio/2.wav` |
  | 3    | `audio/5.wav` |
  | 4    | `audio/7.wav` |
  | 5    | `audio/4.wav` |
  | 6    | `audio/6.wav` |

- **Timing:** `video/align.json`, written by `npm run video:align` and
  committed.
- **Renders:** `out/video/` (ignored). The delivered cut is copied to
  `video/final/deck-final-1440p.mp4`, also ignored.

## Pipeline

```
video:script   export each page's text to out/video/script/
  -> video:voice    voice it into the declared WAVs (Chatterbox by default)
  -> video:align    time every sentence on its WAV -> video/align.json
  -> video:plan     print the timeline (page slots, every show/chip/type cue)
  -> video:check    load the deck in a browser and fail if a cue names
                    something the rendered page does not have
  -> video:capture  take every frame and mux the narration -> out/video/*.mp4
  -> video:split    optional: cut the capture into one file per page
```

Every step takes `-- --pages id,id` to work on some pages only. The delivered
cut is:

```
npm run video:capture -- --quality 1440p --out deck-final-1440p.mp4
```

Qualities (`QUALITIES` in `tools/video/timeline.mjs`): `preview` 1280×720 at
30 fps, `default`, `1440p` 2560×1440 at 60 fps, `2160p` 3840×2160 at 60 fps;
the last two render at 2× device pixels. Each page's narration is normalized
to −16 LUFS integrated, −1.5 dBTP (`LOUDNESS` in the same file). The 1440p cut
runs 848.5 s (≈ 14:09).

Capture keeps its frames under `out/video/frames/` (several GB at 1440p).

## Voice

Chatterbox (`ResembleAI/chatterbox`, English) with exaggeration 0.5,
cfg_weight 0.5 and seed 42 (`CHATTERBOX_SETTINGS` in `tools/video/voice.mjs`),
cloning `~/.local/share/gaia-tts/chatterbox/reference.wav` (sha256
`d15d9b74…5438`). That clip is Kokoro `am_michael` at speed 1.10 saying "Gaia
is a layer that sits between you and your AI agents. It talks with you and
coordinates the work, but it never makes the changes itself." Kokoro renders
it slightly differently each run, so keep the file rather than re-rendering
it: a new clip changes the voice and invalidates every cached sentence in
`~/.local/share/gaia-tts/chatterbox/cache/`. `--provider kokoro` voices with
Kokoro `am_michael` at 1.10 instead.
