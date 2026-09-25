// Cuts a rendered video into one clip per page, at the page boundaries of the
// same plan capture.mjs rendered from.
//
//   node tools/video/split.mjs [--pages id,id,...] [--in out/gaia.mp4] [--outdir out/pages]
//
// Pass the same --pages the capture used, so the plan (and every boundary) is
// the same. Each clip is re-encoded, not stream-copied: capture.mjs encodes with
// x264's default keyframe spacing (up to 250 frames, ~4 s at 60 fps), and a
// stream copy can only cut on a keyframe, so its cuts would land seconds away
// from the page boundary. Boundaries fall on the faded-out frame between pages.
import { spawnSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { ROOT, argValue, buildPlan, readJson, selectedPages } from './plan.mjs';

const timeline = readJson('timeline.json');
const align = readJson('align.json');
const input = resolve(ROOT, argValue('--in', 'out/gaia.mp4'));
const outdir = resolve(ROOT, argValue('--outdir', 'out/pages'));
const plan = buildPlan(timeline, align, {}, selectedPages(timeline));

mkdirSync(outdir, { recursive: true });
plan.pages.forEach((p, i) => {
  const clip = join(outdir, `${String(i + 1).padStart(2, '0')}-${p.page}.mp4`);
  const args = ['-hide_banner', '-nostats', '-loglevel', 'error', '-y', '-i', input,
    '-ss', p.start.toFixed(3), '-to', p.end.toFixed(3),
    '-c:v', 'libx264', '-preset', 'slow', '-tune', 'animation', '-crf', '10', '-pix_fmt', 'yuv420p', '-r', String(timeline.fps),
    '-c:a', 'aac', '-b:a', '192k', '-ar', '48000', '-ac', '2', '-movflags', '+faststart', clip];
  const r = spawnSync('ffmpeg', args, { stdio: 'inherit' });
  if (r.status !== 0) throw new Error(`ffmpeg failed on ${p.page} (exit ${r.status})`);
  console.log(`[split] ${clip}: ${p.start.toFixed(3)}-${p.end.toFixed(3)} s (${(p.end - p.start).toFixed(2)} s)`);
});
