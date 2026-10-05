# STORYBOARD — the six pages of the GAIA deck

The deck is six pages, declared in `data/document.yaml` (name, order,
visibility) and drawn from one YAML file each under `data/pages/`. The narration
and the reveal order of every page live in `video/script.json`; the video
pipeline that turns them into a film is described in [VIDEO.md](VIDEO.md).

The page files keep their original ids, so the number the audience sees comes
only from `name` in the manifest:

| # | Visible name                                          | Page file                     | Audio         |
|---|-------------------------------------------------------|-------------------------------|---------------|
| 1 | Becoming AI-first                                     | `s-shared-semantics.yaml`     | `audio/1.wav` |
| 2 | What is Gaia                                          | `p2-the-map.yaml`             | `audio/2.wav` |
| 3 | What Gaia knows                                       | `p5-what-gaia-keeps.yaml`     | `audio/5.wav` |
| 4 | Nothing that matters runs without you seeing it       | `p-pilot-your-yes.yaml`       | `audio/7.wav` |
| 5 | Contracts                                             | `p6-contracts.yaml`           | `audio/4.wav` |
| 6 | Install it, ask it                                    | `p9-back-to-the-map.yaml`     | `audio/6.wav` |

## The story, page by page

```
1 why a team shares five things -> 2 what Gaia is -> 3 what it knows
  -> 4 one request, start to result -> 5 the report every turn ends with
  -> 6 how to start
```

1. **Becoming AI-first.** Everyone uses an AI assistant on their own; a team
   that wants to work with AI together shares five pillars: workflow,
   standards, knowledge, observability and audit. Each pillar opens its items
   in turn (`w-*`, `s-*`, `k-*`, `o-*`, `a-*`) under chips `pillar-workflows`
   … `pillar-audit`, and the page closes on "Now, let's see how it does it."
2. **What is Gaia.** Opens on the typed prompt "what is Gaia?". Gaia is the
   layer between you and your agents: one orchestrator per session that never
   edits a file, eight specialists it delegates to, the five things each
   specialist receives at start (`sc-identity`, `sc-skills`, `sc-context`,
   `sc-memory`, `sc-contract`), the rules in code that keep watch
   (`mg-approvals`, `mg-contracts`), what outlives the session (`mg-memory`,
   `mg-plans`) and the CLI everything runs through (`mg-cli`). Chips:
   `p2-ask`, `p2-delegate`, `p2-ready`, `p2-rules`, `p2-remember`.
3. **What Gaia knows.** Prompt "What do you know about my work?". Four
   memories, each a sun with three bands read the same way — how it fills,
   what you find in it, who writes it: project and user (`pr-*`), operational
   work (`op-*`), execution contracts (`ex-*`) and episodes (`ep-*`). Chips:
   `p5-knows`, `p5-open`, `p5-done`, `p5-happened`, `p5-one-task` (one task
   leaves a trace in all four).
4. **Nothing that matters runs without you seeing it.** One request traced
   across four actors — you, the orchestrator, the specialist, Gaia's engine —
   in six moments: ask, work, stop, asked, decide, run (chips `moment-*`,
   cells `s7-y*`, `s7-o*`, `s7-s*`, `s7-e*`). The push stops, the approval
   question is typed in (`s7-question`), the grant is single-use, and the
   orchestrator reports only after the engine checks the specialist's report.
5. **Contracts.** Prompt "How do your agents report back?". The agent
   contract as a section tree: closing status (six states), evidence,
   verification, open gaps, reach and approval (`ac-*`); who uses it — engine
   validation, the orchestrator, the verifier (`p6-*`); the project contract
   and its sections (`pc-*`); every contract is kept. Chips: `c-reports`,
   `c-evidence`, `c-checked`, `c-updates`, `c-kept`.
6. **Install it, ask it.** Two install routes (Claude Code plugin, npm for
   OpenCode) with their remove commands, the growth staircase (install, ask,
   scan, describe, work), what stays yours (local database, open source, both
   hosts), four short objections, and the closing prompt "So, what could Gaia
   do for you?". Chips: `install`, `first-question`, `it-grows`,
   `it-is-yours`, `people-ask`.

Every page ends on chip `all`, which lights the whole page before the bridge
sentence to the next one.

## Rules every page follows

- The audience-facing text is English, and it names roles, never people.
- Every page, section and chip `video/script.json` names must be on the
  rendered page, and no box may be revealed before the section that holds it;
  `npm run video:check` fails otherwise.
- After editing `data/`, run `npm run build` (regenerates
  `data/data.generated.js` and `data/breakpoints.generated.css`), then
  `node tools/check-layout.mjs`, `node tools/contrast-audit.cjs` and `npm test`.
