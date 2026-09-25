// Renders the narrated video frame by frame and encodes it with its narration.
//
//   node tools/video/capture.mjs [--pages id,id,...] [--out out/name.mp4]
//
// Inputs: timeline.json (cues by sentence), narration.json (sentences and WAV
// per page), align.json (sentence times, written by align.mjs). The whole
// timeline is validated against the rendered deck before any frame is taken;
// only the selected pages (default: all) are captured, laid end to end from t=0.
// Frames are PNG screenshots piped straight into ffmpeg, so none touch disk.
//
// Frames are supersampled: the page is laid out at width×height CSS px (so the
// deck's breakpoints do not move) and rendered at `supersample` device pixels per
// CSS px, then downscaled with lanczos. At 1× a page scaled below 1 (page 4 is
// ~0.66) draws its 1px borders as faint sub-pixel lines and its text with colour
// fringes that yuv420p then smears; at 2× both are drawn whole before the
// downscale.
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { HERE, ROOT, argValue, buildPlan, readJson, selectedPages } from './plan.mjs';

async function launchBrowser() {
  try { return await chromium.launch(); } catch (err) {
    const cache = join(homedir(), '.cache', 'ms-playwright');
    const builds = existsSync(cache) ? readdirSync(cache).filter(d => /^chromium-\d+$/.test(d)).sort().reverse() : [];
    for (const b of builds) {
      const exe = join(cache, b, 'chrome-linux64', 'chrome');
      if (existsSync(exe)) { console.log(`[capture] default Chromium unavailable; using ${exe}`); return chromium.launch({ executablePath: exe }); }
    }
    throw err;
  }
}

function encoder(plan, timeline, out) {
  const args = ['-hide_banner', '-nostats', '-y', '-f', 'image2pipe', '-framerate', String(timeline.fps), '-i', '-'];
  plan.pages.forEach(p => args.push('-i', join(ROOT, p.audio)));
  const video = `[0:v]scale=${timeline.width}:${timeline.height}:flags=lanczos[vout]`;
  const delayed = plan.pages.map((p, i) => `[${i + 1}:a]adelay=${Math.round(p.voiceAt * 1000)}:all=1[a${i}]`);
  const mix = plan.pages.length === 1
    ? '[a0]apad[aout]'
    : plan.pages.map((_, i) => `[a${i}]`).join('') + `amix=inputs=${plan.pages.length}:normalize=0,apad[aout]`;
  args.push('-filter_complex', [video, ...delayed, mix].join(';'), '-map', '[vout]', '-map', '[aout]',
    '-c:v', 'libx264', '-preset', 'slow', '-tune', 'animation', '-crf', '10', '-pix_fmt', 'yuv420p', '-r', String(timeline.fps),
    '-c:a', 'aac', '-b:a', '192k', '-ar', '48000', '-ac', '2', '-shortest', '-movflags', '+faststart', out);
  return spawn('ffmpeg', args, { stdio: ['pipe', 'inherit', 'inherit'] });
}

const timeline = readJson('timeline.json');
const align = readJson('align.json');
const allIds = timeline.pages.map(p => p.page);
const pageIds = selectedPages(timeline);
const out = resolve(ROOT, argValue('--out', 'out/gaia.mp4'));

const browser = await launchBrowser();
const context = await browser.newContext({
  viewport: { width: timeline.width, height: timeline.height }, deviceScaleFactor: timeline.supersample, colorScheme: timeline.theme
});
await context.addInitScript(theme => {
  localStorage.setItem('theme', theme);
  localStorage.setItem('help-seen', '1');
}, timeline.theme);
const page = await context.newPage();
await page.goto(pathToFileURL(join(ROOT, 'index.html')).href + '?video');
await page.addScriptTag({ path: join(HERE, 'driver.js') });
const filtersByPage = await page.evaluate(() =>
  Object.fromEntries(window.__deck.acts.map(a => [a.dataset.pageId, [...a.querySelectorAll('.chip[data-flow]')].map(c => c.dataset.flow)])));

const errors = await page.evaluate(plan => window.__videoLoad(plan), buildPlan(timeline, align, filtersByPage, allIds));
if (errors.length) { console.error('[capture] timeline does not fit the deck:\n  ' + errors.join('\n  ')); process.exit(1); }
console.log(`[capture] timeline valid for all ${allIds.length} pages`);
for (const [id, f] of Object.entries(await page.evaluate(() => window.__videoFraming))) {
  console.log(`[capture] frame ${id}: content ${f.width}x${f.height}px, scale ${f.scale} (${f.binds} binds)`);
}

const plan = buildPlan(timeline, align, filtersByPage, pageIds);
await page.evaluate(p => window.__videoLoad(p), plan);
mkdirSync(dirname(out), { recursive: true });
const ffmpeg = encoder(plan, timeline, out);
const done = new Promise((ok, fail) => ffmpeg.on('close', code => (code === 0 ? ok() : fail(new Error(`ffmpeg exited ${code}`)))));

const frames = Math.round(plan.duration * timeline.fps);
const started = Date.now();
for (let f = 0; f < frames; f++) {
  await page.evaluate(t => window.__seek(t), f / timeline.fps);
  const png = await page.screenshot({ type: 'png' });
  if (!ffmpeg.stdin.write(png)) await new Promise(r => ffmpeg.stdin.once('drain', r));
}
ffmpeg.stdin.end();
await done;
await browser.close();

const wall = (Date.now() - started) / 1000;
const full = buildPlan(timeline, align, filtersByPage, allIds);
const fullFrames = Math.round(full.duration * timeline.fps);
console.log(`[capture] ${out}: ${frames} frames (${plan.duration.toFixed(2)} s of video) in ${wall.toFixed(1)} s wall, ` +
  `${(1000 * wall / frames).toFixed(1)} ms/frame`);
console.log(`[capture] full timeline: ${full.duration.toFixed(2)} s, ${fullFrames} frames, estimated ${(wall / frames * fullFrames / 60).toFixed(1)} min at this rate`);
