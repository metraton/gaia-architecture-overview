# GAIA deck — storyboard for the talk to Gerry

Status: **revision 7, the six-page deck as it stands in `data/pages/*.yaml`.**
`PRESENTATION.md` still describes revision 5 and has to be rewritten against
this one.

History in one line each:
- Revision 2 applied a code-checked review (contract
  `a041a86a42d7aa708.a51d61b0bc5b`).
- Revision 3 made the language rules explicit and audited every page.
- Revision 4 built the nine-page structure Jorge approved. It opens on the
  orchestrator's own answer as a level-1 map (page 2), zooms into the cast
  (page 3), and then goes one point of the map deeper per page. It closes by
  returning to the map.
  - The blocks are simpler and more varied: centered boxes, stacks, nested
    sections and rails.
  - Gaia's two halves are named once, on the map: **deterministic** hooks and
    **semantic** skills and agents, joined by **the CLI**.
- Revision 5 goes from nine pages to eight. "You sign" is merged into page 4,
  which now names the four events of one turn and carries APPROVALS under
  "Before any tool". Contracts (now page 5) is redrawn as one flow across
  three actors, then the two kinds of contract, the **agent contract** and the
  **project contract**, as staircases of rails.
- Revision 6 goes from eight pages to six. "What an agent is" is removed: page
  2's symmetric map already carries it, and its agent names move into THE
  SPECIALIST's detail. "It checks" and "Memory" are replaced by one new page 5,
  **What Gaia keeps**: four memories as four suns, each in its own colour. The
  engine gains four categorical box colours for it.
- Revision 7 re-reads the deck from its YAML: centred heading boxes, no step
  numbers in kickers, page 3's events in the order of a turn, page 4 as two
  indented rail trees, page 5 as four framed lifecycle rings of coloured rails,
  page 6 rebuilt (two install routes, copy buttons, a compact staircase), a
  per-page chip table under the harmony rule, and the narrated video.

## Level-1 source text: the orchestrator's own answer

The session began with Jorge asking the orchestrator "what are you and what
do you do?". Its answer, translated to English, is the deck's level-1 source.
Page 2 carries its first sentence as the GAIA subtitle, and pages 3–5 go one
level deeper into its five points, which on the map are the orchestrator and
the four things Gaia manages.

> In short: Gaia converses with you and coordinates the work, but never makes
> the changes itself. It hands them to specialists, checks what they deliver,
> and tells you the result. Anything that changes something real needs your
> signature.

```
        ┌──────────────┐
        │     You      │
        └──────┬───────┘
     converse  │  ▲ sign what changes something
               ▼  │
        ┌──────────────┐  reads and writes  ┌──────────────┐
        │     Gaia     │───────────────────►│    Memory    │
        └──────┬───────┘                    └──────────────┘
     delegates │  ▲ returns a verifiable report
               ▼  │
        ┌──────────────┐     acts on        ┌──────────────┐
        │  Specialist  │───────────────────►│ Your systems │
        └──────────────┘                    └──────────────┘
```

| Point | The orchestrator's words | The page that goes deeper |
|---|---|---|
| 1 | **It holds the conversation.** It understands what you want, decides the route, shows it to you before starting, and is the only one that keeps the thread end to end. It does not edit files, by design. | page 3 · The life of a request |
| 2 | **Specialists do the work**, each in its field. Each dispatch is born clean, owns one task, and ends with a contract: a record of what was done and with what evidence. | page 4 · Contracts |
| 3 | **It checks before telling you.** It reports from that record and from what it opens itself, not from what the specialist says it did. It separates what it saw, assumed and judged. | page 4 (VALIDATES, READS) and page 5 (execution memory: verdict, pass) |
| 4 | **You sign what changes something.** A push, an apply or a delete waits until you approve it, after you have seen exactly what will happen. | page 3 · its Approvals band |
| 5 | **Memory outlives the session:** your rules, your preferences, and what is pending per project. | page 5 · What Gaia keeps |

Why it is built this way: so that every result has evidence and an owner, and
nothing that changes your systems happens without your permission.

The deeper pages run in the order of one turn's life (points 1 and 4 together,
then 2, then 3 and 5 together). Pages 3 and 4 open with a heading box whose
kicker names their box on the map (THE ORCHESTRATOR, CONTRACTS); page 5 has no
heading box, and its four uppercase name boxes (PROJECT, OPERATIONAL,
EXECUTION, EPISODIC MEMORY) name what page 2 calls Memory and Plans & tasks.
So the reader can always answer "which part of the first picture am I
inside?".

## Language and labels: the rules every page follows

These rules come from the `technical-explanation` skill (altitude, register,
one term per concept, one mode per section) and the `diagram-builder`
doctrine and glossary (slots, rails, separators, chips, the hole that speaks).

| Rule | What it means on this deck |
|---|---|
| **Register per altitude** | Level-1 pages (1, 2, 6) use common nouns and the plain register; agent names appear only in a detail (page 2's "Does the HOW"). Real identifiers (hook names, state names, CLI commands, field names) start at level 3 (page 3), where hook names are the event kickers. Page 6 shows commands on its face because install is procedure and the command is the content. Function names appear only in a box's detail or on the backup code page. |
| **One term per concept** | **agent contract**: the form an agent is born with, fills during its turn and answers in; Gaia stores it and judges it by rule. On every page but 4 a bare **contract** means the agent contract. **project contract**: what Gaia knows about one project, in named sections (`project_identity`, `stack`, `application_services`, …); each agent may read some (`can_read`) and write others (`can_write`). Page 4 names both kinds, as the sub-sections "Agent contract" and "Project contract". Never "handoff", "record", "row", "envelope" or "report" in front of the audience. **approval**: your yes to one exact command; never "grant" or "consent token". "Sign" is allowed only as the plain verb for giving an approval, as the orchestrator's answer says it (pages 2 and 6). **turn**: one specialist's life, from dispatch to close. **event**: one of the four fixed moments of a turn, in order: injected context, before any execution, execution validation, contract validation; the hook that fires at it (SubagentStart, PreToolUse, PostToolUse, SubagentStop) is its kicker. **request**: what you ask, one prompt. **specialist**: one of the 8 agents that do the work; never "subagent" (except Claude Code's feature name and the hook names). Page 4 titles its envelope "The agent", subtitle "a model · one specialist". **agent**: the orchestrator or a specialist. **orchestrator**: the one agent you talk to; on the level-1 map it is a box inside GAIA, which names the whole orchestration layer. **gate**: a task's pass/fail check in a plan, and only that. **episode**: the automatic trace of one turn. **curated memory**: what the orchestrator writes on purpose and Gaia reads back. **project context**: the plain name, on page 2, for what the project contract holds. **The four memories** (page 5 only, each name box's detail opening with its question), in page order: **project memory**, what do we know about the project, and about you? **operational memory**, what are we doing, and what is still open? **execution memory**, what did we execute, and what did it produce? **episodic memory**, what happened, and when? Project memory is the one place where project context is called memory, because page 5 names all four side by side. **hook**: code the host runs at a fixed moment. **skill**: written instructions an agent loads. **deterministic**: decided by a rule in code, the same answer every time, no model involved. **semantic**: done by a model following instructions. |
| **Kicker** | A verb, a role, or a short component name, never a step number: "SENDS", "◄ VALIDATES", "PreToolUse", "READ-ONLY", "RECOMMENDED", "THE THESIS". Page 2's kickers are page pointers ("→ PAGE 3"), its navigation. Never the thing itself; that is the title's job. |
| **Title** | The thing, in 2–4 words. Exceptions, each the content itself: page 6's commands, the first prompt, and the objections' answers. |
| **Description** | One line, few words: what it does or why it matters. |
| **Detail** | The mechanics, identifiers, function names and evidence, shown on click. |
| **Rail** | A title-only band that names a layer or a group, or one key of a tree. A rail carries **chips** (`filters`), a **colour** (one of the four hues, page 5 only) and an **indent** (0–3, page 4's trees), and nothing else: no kicker, no description, no detail, so the one-line meaning of a rail lives in the detail of the box that handles it. A vertical rail labels a stack beside it (page 3's USER PROMPT). |
| **Separator** | A relation or a rule, stated in the line's text. On the map it stands for a labelled arrow. A separator carries no chip. |
| **Heading box** | One neutral centred box in a frameless first section, the deck's one title style (page 2's `mp-you`): pages 1, 3 and 4. It is the only box a page may leave out of every chip (see the harmony rule). Pages 5 and 6 have none. |
| **Centered box** | The `centered` treatment, for what a page turns around: the heading boxes, the map's actors, page 5's name boxes and ring rails, page 6's first prompt. |
| **Half box** | The `half` treatment: two boxes share one cell, for page 6's install and remove commands and the skeptic's questions. |
| **Copy** | `copy: true` puts a copy button (⧉) on a box that copies its title byte for byte. Page 6's eight install and remove commands carry it; the first prompt does not. |
| **Compact** | The `compact` section treatment gives one leaf grid a shorter row, so a staircase can end level with a shorter neighbour. Only page 6's "It grows with you" uses it. |
| **Colour** | Box variants carry meaning: `bad` (red) marks page 3's two stop events, `warn` (amber) page 1's VERIFICATION, which the page's closing line declares; `good` page 6's database; `accent` page 6's first prompt and "work agentically"; `muted` page 6's remove commands. The four categorical hues (`blue`, `violet`, `gold`, `clay`) mean only "which memory", only on page 5, on a name box and every rail of its ring; they never mean good or bad. |
| **Chip vs order vs width vs empty cell** | A **chip** lights a relation that crosses sections, and needs at least 2 members on the page. **Order** carries a sequence inside one section (page 5's ring arrows, page 6's staircase). **Width** carries "belongs to", reach or importance. An **empty cell** states an absence: a separator with text, or a declared `spacer` (page 6's staircase floor), never an undeclared hole. |
| **Chip labels** | Phrased as the question the chip answers, the same wording on every page where the key repeats. |
| **One mode per section** | Concept, procedure, reference or decision, never blended. Every section is concept except page 6's START HERE (procedure) and numbers (reference). |

## The chip system

**The five core chips**, declared first on every page 1–6, in this fixed order
and with these labels. No gate checks the order; it is the authoring
convention every page YAML follows.

| # | Key | Label |
|---|---|---|
| 1 | `the-human` | who decides? |
| 2 | `nothing-self-declared` | is it really done? |
| 3 | `memory` | what do we remember? |
| 4 | `deterministic` | what does a rule decide? |
| 5 | `semantic` | what does a model follow? |

**The page chips**, declared after the core five:

| Page | Key | Label |
|---|---|---|
| 1 | `double-reader` | can we trust it? |
| 1 | `security` | who can touch what? |
| 2 | `one-turn` | what happens in one turn? |
| 2, 4 | `the-contract` | what travels in a contract? |
| 3 | `one-command` | what happens to one command? |
| 3 | `one-turn` | what happens in one turn? |
| 4 | `project-contract` | what may it read and write? |
| 4 | `next-move` | what happens next? |
| 5 | `what-comes-back` | what comes back next session? |
| 5 | `one-task` | where does one task leave a trace? |
| 6 | `yours` | what is really yours? |
| backup | `deterministic` | a rule decides (the backup's own label) |
| backup | `sesion-abre`, `ruteo`, `porton`, `despacho`, `entrega`, `contabilidad`, `the-judge` | the session opens · where does this belong? · the checkpoint · the dispatch · the handover · the bookkeeping · the judge |

**The harmony rule.** Every box and every rail on a page belongs to at least
one chip, so no component is left out of every question the page answers
(`HARMONY`, `tools/check-layout.mjs`). Separators and spacers are exempt, and
so is the page's heading box: the one centred box of a frameless first root
section that holds nothing else. A chip needs at least two members, a chip no
component names fails, and a key a component names must be declared (`CHIP`);
a `filters` on a separator or spacer fails, because those never light (`LIT`).

**Omissions, and why:**
- `semantic` is not declared on page 3: nothing on it is done by a model (hooks,
  the approvals rule, the CLI rails), so the chip would have no member and fail
  `CHIP`.
- `memory` is not declared on page 5: every box and rail on it is memory, so
  it would light everything and say nothing (the page YAML's own comment).
- Page 1's `the-human` has exactly the two members the arity rule allows
  (HOOKS, APPROVALS).
- The backup page carries only `deterministic` of the core five: every box on
  it is code, so the others would have no honest member.

The per-page member tables are in each page section below, under **Chips lit**.

## The story in one breath

A team that works with AI agents needs five shared things (page 1). Gaia's
own answer to "what are you?" is the map: it converses with you and
coordinates the work, but never makes the changes itself. It is hooks that
decide by rule and skills and agents that a model follows, joined by its CLI
(page 2). Then one point of the map per page:
- it holds the conversation, through the four events of one turn: the context
  is injected, a rule sorts every command before it executes (it runs, it
  waits for your yes, or it never runs), each result is recorded, and the
  contract is validated (page 3);
- everything travels as a contract: the agent contract, which names what of
  the project contract the agent may read and write (page 4);
- what Gaia keeps: four memories, each a ring that follows its lifecycle in
  the code, joined where one task leaves a trace in all four (page 5).

The talk closes on how to install it, what it grows into and what a skeptic
asks (page 6).

Each page is where the next one is stored: page N always has one box that
page N+1 opens up. That box is named in each page below as **"Hands off to"**.

The deck as one strip, six pages plus the backup, each with its altitude:

```
┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐
│p1    │►│p2    │►│p3    │►│p4    │►│p5    │►│p6    │
│Why   │ │Map   │ │Life +│ │Con-  │ │What  │ │Start │
│      │ │      │ │sign  │ │tracts│ │Gaia  │ │      │
│      │ │      │ │      │ │      │ │keeps │ │      │
│lvl 1 │ │lvl 1 │ │lvl 3 │ │lvl 4 │ │lvl 4 │ │lvl 1 │
└──────┘ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘
                           backup, after p6:
                           ┌──────────────┐
                           │Code · level 5│
                           └──────────────┘
```

In the sketches, `┆ ┄` draw an envelope (a framed section), `│ ─` draw boxes, a
line with `── … ──` is a separator with its text, `▭` is a rail, "(red)",
"(amber)", "(accent)", "(good)", "(muted)" mark a box variant, and a word
centred in its cell marks a centred box. Long words are abbreviated in the
sketches only; the tables give the real titles.

## Altitude scale

| Level | What the reader sees | Pages |
|---|---|---|
| 1 · the idea | why a team needs this; what Gaia is; how to start | 1, 2, 6 |
| 3 · the real components | the events of a turn and their hooks, CLI groups, the approvals rule, by their real names | 3 |
| 4 · the mechanisms | how one point of the map works from start to end; what Gaia keeps, in its own words | 4, 5 |
| 5 · the code | modules and functions | backup |

Level 2 (roles and agents) has no page: page 2's map names the roles, and the
agent names are in "Does the HOW"'s detail.

## The talk

About 15 minutes, with the depth time on pages 3, 4 and 5. The per-page
minutes of revision 6 (1.5 · 1.5 · 4 · 3.5 · 3.5 · 1) are a plan, not a
measurement, and are **unverified** against the rebuilt pages 4–6.

## The video

The narrated video is pages 1–6 captured from the real `index.html` at
1920×1080, 60 fps, light theme, each page laid in a slot of 0.8 s lead + its WAV
+ 1.2 s tail. The backup page is not in it. `VIDEO.md` is the design; the
files under `tools/video/` are what runs, and where the two differ the files
win (see "Claims still to check").

| Page | WAV | Duration | Slot | Sentences aligned by |
|---|---|---:|---:|---|
| 1 · Why | `1.wav` | 21.52 s | 23.52 s | silencedetect |
| 2 · What Gaia is | `2.wav` | 35.60 s | 37.60 s | silencedetect |
| 3 · The life of a request | `3.wav` | 41.72 s | 43.72 s | silencedetect |
| 4 · Contracts | `4.wav` | 34.60 s | 36.60 s | silencedetect |
| 5 · What Gaia keeps | `5.wav` | 37.44 s | 39.44 s | silencedetect |
| 6 · Install it, ask it | `6.wav` | 26.20 s | 28.20 s | silencedetect |
| | **narration 197.08 s** | | **209.08 s ≈ 3:29** | |

Durations and methods are `tools/video/align.json`; the sentences are
`tools/video/narration.json`; the cues are `tools/video/timeline.json`.

**The pipeline**, three node scripts, in this order:
1. `tools/video/align.mjs` writes `align.json`: every sentence's start time
   inside its WAV.
2. `tools/video/capture.mjs [--pages id,…] [--out out/gaia.mp4]` validates the
   whole timeline against the rendered deck, then screenshots every frame
   after `__seek(t)` and pipes the PNGs into ffmpeg with the six WAVs mixed at
   their slot offsets.
3. `tools/video/split.mjs [--pages id,…] [--in out/gaia.mp4] [--outdir out/pages]`
   cuts one re-encoded clip per page at the plan's page boundaries.

**Jorge runs these node scripts himself.** Gaia rc.3's approval flow cannot
sign `node <script>`: the hook blocks it as T3 with no phrases, and
`gaia approvals request-set` rejects it as interactive (memory row
`feedback_request_set_rejects_node_script_as_interactive`).

**Video-mode framing** (`index.html?video` plus `tools/video/driver.js`): the
engine exposes `window.__deck` only under `?video`. The driver hides every
piece of deck chrome except the page's chip bar (and hides the `all` reset
chip in it), switches every transition off, and scales each page separately:
the content plane keeps its 1920px layout and is scaled by one transform so
the chip bar, a 28px gap and the page fit inside a 6% margin on every side,
centred. Pages fade 0.4 s in and out; a reveal takes 0.7 s and rises 10px
(page 6's steps rise 24px); page 5's ring rails appear clockwise from 12
o'clock, 0.15 s apart. The chip cues per page are listed under each page's
**Motion beat**; the cue format and the validator rules are in `VIDEO.md` §6.

## Facts that come from the code, not the README

Line references are the ones recorded in revision 6 and in the contracts
named here; revision 7 did not re-read the Gaia source.

| Fact | Source |
|---|---|
| **Approvals are decided by a hook, by rule** (page 3, Sorts every command · Runs). Every command gets a tier from a fixed classifier: T0 read, T1 validate, T2 dry run, T3 change. The classifier matches patterns and verbs in code; no model is consulted. | `hooks/modules/security/tiers.py:29-35` (`SecurityTier`), `:78` (`_classify_command_tier_cached`) |
| The never list is a separate, fixed pattern check; its refusal has nothing to approve (page 3, Never runs). | `hooks/modules/security/blocked_commands.py:678` (`is_blocked_command`) |
| An approval is single-use and must match the approved command byte for byte; the window is 30 minutes (page 3, Waits for your yes). | `approval_grants.py:193`, `:523`; `writer.py:86` |
| **Background, not on a slide:** reading or listing a credential path (`.ssh`, `.aws`, `.env`, `*.pem`, `/etc/shadow`, …) is refused by the same kind of fixed rule, with nothing to approve, in Bash and in the file tools. | `sensitive_paths.py:25-42`; `sensitive_read_guard.py:1-16`, `:113`, `:121`; denial text `sensitive_paths.py:229-237` |
| SubagentStop reads only the turn's stored contract, never the reply text. A missing or unfinalized contract sends the turn back (exit 2) (page 3, Contract validation; page 4, VALIDATES). | `hooks/adapters/claude_code.py:905-907` |
| A turn ends in one of six states; only COMPLETE is final (page 4's status tree). | `validator.py:908` |
| Execution validation logs the run, seals EXECUTED or FAILED onto the approval chain and activates an answered approval (page 3). | `hooks/adapters/claude_code.py` (`adapt_post_tool_use`), as cited in the box's detail |
| A contract never finalized stays marked with a `cut_reason` (page 5, cut turns). | `gaia contract list --cut`; `gaia/store/schema.sql:1380` |
| 12 hook events are registered, including PostToolUseFailure for Bash (page 3's footnote). | `hooks/hooks.json` |
| The workflow auditor has about twenty checks; the compliance score has six factors (page 1 COMPLIANCE, backup). | `workflow_auditor.py:445-661`; `transcript_analyzer.py:471-531` |
| Only the orchestrator and gaia-operator write curated memory; SubagentStop writes episodes (backup). | `subagent_memory_write_guard.py:60-67`; `subagent_stop.py:263` |
| **Page 2's What a specialist carries, Identity:** each agent is one definition file whose frontmatter names it, says what it is for, lists its tools and its surface. | `agents/developer.md:2-5` (`name`, `description`, `tools`), `:12-13` (`routing.surface`) |
| **Skills:** the skills a specialist loads are listed in its own frontmatter. | `agents/developer.md:21-28` (`skills:`) |
| **Project context:** the sections it may read and write come from its frontmatter and are rendered into its contract block at birth. | `agents/developer.md:9-11` (`project_context_contracts`); `hooks/modules/context/kernel_builder.py:214-215`, `:243-244` (`can_read`, `can_write`) |
| **Memory about you:** the executor-facing user preferences are injected with their full body. | `kernel_builder.py:56` (`MEMORY_HEADING = "# How the user works"`), `:388` (`build_memory_block`; `memory.type='user' AND audience='executor'`) |
| **Its contract:** every specialist is born with its contract open: contract id, agent id, goal, role, surface. | `kernel_builder.py:54` (`KERNEL_HEADING = "# Your Contract"`), `:193-251` (`build_dispatch_kernel`) |
| All three blocks (contract, CLI, memory) are injected at SubagentStart, once the dispatch row is claimed (page 3, Injected context). | `hooks/modules/agents/dispatch_lifecycle.py:88` (`build_kernel_context`); `kernel_builder.py:407-427` |
| **Dropped from the carried set:** its own copy of the repo. It is not injected at birth; a specialist creates it on demand when it writes (`gaia worktree create`). | agent-protocol skill, principle 12 |
| **Page 2 · the orchestrator never edits** ("holds the conversation, never edits"). | `agents/gaia-orchestrator.md:6` (`disallowedTools: [Glob, Grep, Edit, Write, NotebookEdit, …]`); `hooks/modules/orchestrator/delegate_mode.py:81` (`ORCHESTRATOR_ALLOWED_TOOLS`), `:367` (`check_delegate_mode`) |
| Planning objects and the approval hash chain (page 3 Waits for your yes; backup). | `schema.sql:442-700`, `:1578-1600` |
| **Background, not on a slide:** contract kinds `verifier`, `task_execution`, `investigation`, `memory`. A kind is a label; it does not change the form. | `hooks/modules/agents/dispatch_binding.py:96`, `:105-106`, `:509-543` |
| **Page 4 · INJECTS, adapted per agent:** the agent contract is adapted in its data, not its form: its surface, its role (`primary` or `verifier`), and `can_read` / `can_write` from its own permission rows. | `tools/context/context_provider.py:191` (`build_kernel_sections`), `:244-249`; `hooks/modules/context/kernel_builder.py:193` (`build_dispatch_kernel`), `:214-215`, `:243-244` |
| **Page 4 · the project contract:** 13 named sections, the union of what the nine agent files declare; there is no fixed registry. | `project_context_contracts` in `agents/*.md` (per the page YAML's header); `contracts_loader.py` |
| **Page 4 · INJECTS, "at dispatch":** the agent contract names the sections; it does not carry their contents. The agent reads a section on demand, and no check against `can_read` was found on that read. | `bin/cli/context.py:366` (`_cmd_get_contract`) |
| **Page 4 · INJECTS, "in its answer" and "at the close":** the agent contract can carry `update_contracts`; at the close each entry is checked against the agent's write permission before it is saved, and a rejected one is named. | `hooks/subagent_stop.py:176`; `hooks/modules/context/context_writer.py:376` (`process_update_contracts`), `:436`, `:127` (`validate_permission`) |
| **Page 6 numbers:** approvals 583 approved, 52 rejected, 218 expired; commands 423 of 450 read-only (T0), 94.0%. | contract `a237b55dcc2f80ef4.3bea760ea6ba` (`gaia approvals stats`, `gaia metrics`) |
| rc.3 is released; main's README says the plugin install alone is enough for Claude Code, with no npm step (page 6, ONE PLUGIN, NO NPM STEP). | Gaia commit `aa6a3f6` (per the coordinator; **unverified** here) |
| **Page 6 · the one database:** `~/.gaia/gaia.db` is the default data dir, moved only by `GAIA_DATA_DIR` or `GAIA_DB`; `gaia uninstall` never deletes it and snapshots it first. | `gaia/paths/resolver.py` (`data_dir()`); `gaia uninstall --help`, as cited in the boxes' details |
| **Page 6 · the scan:** `gaia scan` records each git repo as a (workspace, project) row, "Deterministic: no inference". | `gaia scan --help`, as cited in the box's detail |
| **Page 6 · open source:** MIT; `agent-creation` and `skill-creation` skills. The orchestrator is the session's identity (`"agent": "gaia-orchestrator"`). | `LICENSE`, `package.json`; Gaia `settings.json`, as cited in the boxes' details |
| **Page 2 · 9 agents:** the orchestrator and 8 specialists, one definition file each. | `agents/*.md` in the Gaia repo: cloud-troubleshooter, developer, gaia-operator, gaia-orchestrator, gaia-planner, gaia-system, gaia-verifier, gitops-operator, platform-architect |
| **Page 5 · the operational ring**, clockwise: brief, acceptance criteria, plan, tasks, gates, pending, blocked, pause, plan change, carry forward. | `gaia/store/schema.sql:442` (`briefs`), `:465-467` (`acceptance_criteria.brief_id`), `:505-506` (`plans.brief_id` UNIQUE), `:561-563` (`tasks.plan_id`), `:598-600` (`task_gates.task_id`), `:607` (gate status pending, pass, fail), `:474` (criteria status pending, done, blocked, descoped), `:515-516` (`plans.paused_at`, `pause_reason`), `:538-543` (`plan_changes` requested → proposed → approved → applied); carry forward `gaia/store/reader.py:156` (contract `ad2be3c13eab41dba.30b58f7d52a3`) |
| **Page 5 · the episodic ring**, clockwise: sessions, turns, hooks, events, anomalies, episodes, cut turns, timeline, lineage, last 24h. | `gaia/store/schema.sql:1116` (`harness_events`), `:731` (`episodes.session_id`), `:1380` (`cut_reason`); `hooks/subagent_stop.py:94` (anomalies, episodes), `:263` (`write_episode`); `hooks/modules/session/session_event_injector.py:114` ("Recent Session Events (last 24h)"); timeline and lineage `bin/cli/memory_story.py` (contract `ad2be3c13eab41dba.30b58f7d52a3`) |
| **Page 5 · the project ring**, clockwise: scan, workspace, repos, sections, can read, can write, decisions, anchors, your rules, preferences. | `tools/scan/orchestrator.py:371` (`collect_scanner_sections`), `:407`; `gaia/identity_shape.py:27` (`workspace_repos`); `hooks/modules/context/kernel_builder.py:214-215`, `:243-244`; curated types `gaia/store/schema.sql:851`; `kernel_builder.py:56` (contract `ad2be3c13eab41dba.30b58f7d52a3`) |
| **Page 5 · the execution ring**, clockwise: contracts, T3, approvals, evidence, open gaps, verdict, pass, COMPLETE, BLOCKED, audit trail. | `dispatch_lifecycle.py` (`build_kernel_context`); `tiers.py:29-35`; `gaia/store/schema.sql:1555-1560` (approvals pending → approved, rejected, revoked, expired); `gaia/contract/drafts.py:497-501`; `hooks/adapters/claude_code.py:905-907`; `validator.py:908` (contract `ad2be3c13eab41dba.30b58f7d52a3`) |
| **Page 5 · where the code has no sequence** (placed by reading, flagged in that contract): carry forward closes the operational ring; timeline and lineage belong to curated-row history, not to a turn; decisions, anchors, your rules and preferences have no order between them; pending and blocked, COMPLETE and BLOCKED, and episodes and cut turns are alternatives placed side by side. | contract `ad2be3c13eab41dba.30b58f7d52a3`, `open_gaps` |
| **Page 5 · the name boxes' details:** brief statuses, milestones, open threads, schedules and notifications (operational); SessionStart and the other hook events, transcript, history, defects, backstop, compaction, supersedes, graduated (episodic); project sections, feedback, "what did not work" (type `negative`) (project); the six states, evidence fields, the hashed approval chain, compliance score, metrics, worktree (execution). | `gaia/store/schema.sql:442-640`, `:754`, `:851`, `:936`, `:1560`; `gaia plan --help`, `gaia task --help`; `bin/cli/memory_story.py:6`; `gaia/contract/drafts.py:182`, `:497-501`; `gaia/store/reader.py:728` |
| **Page 5 · dropped words** (not in the code as a Gaia concept): "idea" (one prose hit), "owner" (only a workspace owner), "dead ends" (the curated type is `negative`; the detail says "what did not work"). | contract `af580a9b3c8da9e74.0ced47a78015` |
| **The palette:** four categorical hues, `blue`, `violet`, `gold`, `clay`, one per memory on page 5 (project, episodic, operational, execution), on boxes and on rails. Revision 6 recorded all 64 box pairs clearing AA in every palette and theme; the rail pairs and a re-run are **unverified** in revision 7. | `index.html` tokens `--hue-*`, `.box.<hue>`, `.rail.<hue>` (`index.html:910-917`); `engine/engine.js` `COMPONENT_VARIANT`; `engine/build-data.mjs` `COMPONENT_VARIANTS`, `RAIL_VARIANTS`; `tools/contrast-audit.cjs` `PAIRS`; `npm run contrast` |

---

## Page 1 · Why a team needs this

- **Altitude:** 1 · the idea.
- **Leave with:** "An AI-assisted team needs to share five things, the same way
  it shares a codebase."

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                THE THESIS                                │
│                      An AI-oriented way of working.                      │
│      how does an organization break the isolation of agentic work?       │
└──────────────────────────────────────────────────────────────────────────┘
┌┄ An organization should share… ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┐
┆┌┄ WORKFLOWS ┄┄┐┌┄ STANDARDS ┄┄┐┌┄ KNOWLEDGE ┄┄┐┌┄ OBSERVAB. ┄┄┐┌┄ AUDIT ┄┄┄┄┄┄┐┆
┆┆ the shape of ┆┆ the shape of ┆┆ project mem.,┆┆ a value that ┆┆ who answers  ┆┆
┆┆ the work     ┆┆ the output   ┆┆ never person.┆┆ can change   ┆┆ for what hap.┆┆
┆┆┌────────────┐┆┆┌────────────┐┆┆┌────────────┐┆┆┌────────────┐┆┆┌────────────┐┆┆
┆┆│ROUTING     │┆┆│SKILLS      │┆┆│CONTEXT     │┆┆│BRIEF       │┆┆│APPROVALS   │┆┆
┆┆├────────────┤┆┆├────────────┤┆┆├────────────┤┆┆├────────────┤┆┆├────────────┤┆┆
┆┆│STRUCTURE   │┆┆│OUTPUTS     │┆┆│DURABLE     │┆┆│PLAN        │┆┆│EVIDENCE    │┆┆
┆┆├────────────┤┆┆├────────────┤┆┆├────────────┤┆┆├────────────┤┆┆├────────────┤┆┆
┆┆│PROTOCOL    │┆┆│CONVENTIONS │┆┆│CARRY-FWD   │┆┆│TASK        │┆┆│COMPLIANCE  │┆┆
┆┆├────────────┤┆┆├────────────┤┆┆├────────────┤┆┆├────────────┤┆┆├────────────┤┆┆
┆┆│HOOKS       │┆┆│TOOLS       │┆┆│EPISODIC    │┆┆│VERIFICATION│┆┆│ANOMALIES   │┆┆
┆┆│            │┆┆│            │┆┆│            │┆┆│ (amber)    │┆┆│            │┆┆
┆┆└────────────┘┆┆└────────────┘┆┆└────────────┘┆┆└────────────┘┆┆└────────────┘┆┆
┆└┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘└┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘└┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘└┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘└┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘┆
└┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘
   ── amber = named here, not instrumented yet · exactly one box carries it:
      VERIFICATION, in Observability ──                          (dotted)
```
The sketch shows the kickers; each box's title is in the table below.

**Chips lit** (from `s-shared-semantics.yaml`; the heading box THE THESIS is
exempt):

| Chip | Members |
|---|---|
| `the-human` · who decides? | HOOKS, APPROVALS |
| `nothing-self-declared` · is it really done? | CARRY-FORWARD, TASK, VERIFICATION, EVIDENCE, COMPLIANCE |
| `memory` · what do we remember? | CONVENTIONS, CONTEXT, DURABLE, CARRY-FORWARD, EPISODIC |
| `deterministic` · what does a rule decide? | HOOKS, CONTEXT, EPISODIC, APPROVALS, COMPLIANCE, ANOMALIES |
| `semantic` · what does a model follow? | ROUTING, STRUCTURE, PROTOCOL, SKILLS, BRIEF, PLAN, VERIFICATION |
| `double-reader` · can we trust it? | OUTPUTS, EVIDENCE, COMPLIANCE |
| `security` · who can touch what? | STRUCTURE, TOOLS, APPROVALS, ANOMALIES |

Box titles, by pillar: WORKFLOWS "Agentic orchestration", "What an agent is",
"How agents talk", "What keeps the course"; STANDARDS "How the work is done",
"The standard is the output", "Commits, PRs, docs", "Tools the team
provides"; KNOWLEDGE "Project context", "Long memory", "Work left open",
"Recorded by the machine"; OBSERVABILITY "Where ideas are kept", "From idea to
solution", "Atomic, checkable steps", "Blind by design"; AUDIT "A person owns
every change", "The work leaves a trail", "Every turn is graded", "Bad
discipline is flagged".

- **Motion beat (23.52 s slot):** s1 "Today, most people work with AI alone."
  reveals the thesis; s2–s3 hold. s4 reveals the container, then each pillar on
  its clause: "how the work" WORKFLOWS, "how the output" STANDARDS, "what is
  remembered" KNOWLEDGE with chip `memory`, "what can be seen" OBSERVABILITY
  (clear), "what can be checked" AUDIT with chip `double-reader`; at the end of
  s4 the amber line appears and the chips clear.
- **Form: dashboard.** The idea stands and diverges into five peers.
- **Sections:** a frameless band with the heading box; one envelope, "An
  organization should share…", holding the five pillars as envelopes of four
  boxes each, one column per pillar; a frameless band with the dotted
  separator that declares the amber channel.
- **The layout move: nesting is the claim.** The five pillars sit inside one
  container because they are the five members of one answer; the thesis asks
  from outside it. Every pillar holds exactly four boxes, so the row closes as
  a rectangle. The five columns appear above the 1440px stage tier.
- **Language notes:** the chip labels are the questions the audience arrives
  with. Amber is declared on the page by its closing line, and exactly one box
  carries it.
- **Hands off to page 2:** "an organization should share…": what Gaia is, in
  its own answer, is the map on page 2.

## Page 2 · What Gaia is (the map)

- **Altitude:** 1 · the idea. The deck's map.
- **Leave with** (the orchestrator's own answer): "Gaia converses with you and
  coordinates the work, but never makes the changes itself. It hands them to
  specialists, checks what they deliver, and tells you the result. Anything
  that changes something real needs your signature."

```
┌───────────────────────────────────────────────────────────────────────────┐
│                                 → PAGE 3                                  │
│                                    You                                    │
│               ask in your own words, approve what changes                 │
└───────────────────────────────────────────────────────────────────────────┘
               ── ▼ converse · ▲ sign what changes something ──
┌┄ GAIA · the orchestration layer · it converses with you and coordinates ┄┄┐
┆        the work, but never makes the changes itself                       ┆
┆ ┌┄ The orchestrator ┄┄┄┄┄┐ ┌┄ What Gaia manages · through its own CLI ┄┄┄┐ ┆
┆ ┆ one per session, you   ┆ ┆ → PAGE 3  │ → PAGE 4  │ → PAGE 5  │→ PAGE 5 ┆ ┆
┆ ┆ talk only to it        ┆ ┆ Approvals │ Contracts │ Memory    │ Plans & ┆ ┆
┆ ┆       → PAGE 3         ┆ ┆ your yes  │ every     │ rules,    │ tasks   ┆ ┆
┆ ┆   Decides the WHAT     ┆ ┆ to one    │ specialist│ prefer-   │ a brief ┆ ┆
┆ ┆ holds the conversation,┆ ┆ exact     │ returns   │ ences,    │ becomes ┆ ┆
┆ ┆      never edits       ┆ ┆ command   │ one       │ pending   │ checked ┆ ┆
┆ └┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘ └┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘ ┆
┆               ── ▼ delegates · ▲ returns a contract ──                    ┆
┆ ┌┄ The specialist ┄┄┄┄┄┄┄┐ ┌┄ What a specialist carries · handed to it ┄┄┐ ┆
┆ ┆ one per piece of work, ┆ ┆                      the moment it is born  ┆ ┆
┆ ┆ 8 today                ┆ ┆ Identity│ Skills │→ PAGE 4│→ PAGE 5│→ PAGE 4┆ ┆
┆ ┆       → PAGE 3         ┆ ┆         │        │Project │Memory  │Its     ┆ ┆
┆ ┆     Does the HOW       ┆ ┆         │        │context │about   │contract┆ ┆
┆ ┆ born clean for one     ┆ ┆         │        │        │you     │        ┆ ┆
┆ ┆ piece of work          ┆ ┆         │        │        │        │        ┆ ┆
┆ └┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘ └┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘ ┆
└┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘
     ── hooks decide by rule · skills and agents follow · the CLI joins ──
```

**Chips lit** (from `p2-the-map.yaml`; `mp-you` shares its section with the
separator, so it is not the exempt heading box and carries a chip):

| Chip | Members |
|---|---|
| `the-human` · who decides? | You, Approvals |
| `nothing-self-declared` · is it really done? | Plans & tasks, Contracts, Does the HOW, Its contract |
| `memory` · what do we remember? | Decides the WHAT, Memory, Project context, Memory about you |
| `deterministic` · what does a rule decide? | Contracts, Approvals |
| `semantic` · what does a model follow? | Decides the WHAT, Does the HOW, Identity, Skills |
| `one-turn` · what happens in one turn? | Decides the WHAT, Does the HOW |
| `the-contract` · what travels in a contract? | Contracts, Does the HOW, Its contract |

- **Motion beat (37.60 s slot, the video's anchor):** s1 "This is Gaia."
  reveals You and the GAIA envelope; s2 "the orchestrator" its envelope; s3
  "never makes" chip `the-human`; s4 chip `one-turn`, the "delegates" separator
  and the specialist, "born clean" the carried set, "returning a contract"
  chip `the-contract`, "with what evidence" chip `nothing-self-declared`, then
  clear; s5 the managed set, box by box as the voice names them: approvals,
  contracts, memory, plans; s6 the closing line; s7 chip `deterministic`; s8
  chip `semantic`; s9 clear.
- **Form: mindmap, vertical.** The idea stands and converges on GAIA. The
  engine draws no arrows, so each labelled arrow of the orchestrator's picture
  is a separator with its text, between the rows it joins.
- **Sections and components:**
  - You, a full-width **centered** box, then its separator: outside GAIA.
  - GAIA, an **envelope**. Its subtitle is "the orchestration layer" plus the
    orchestrator's own line.
    - A row of two envelopes: The orchestrator (one third, one centred box)
      and What Gaia manages (two thirds, four boxes in the order Approvals,
      Contracts, Memory, Plans & tasks, each with its page in the kicker).
    - The "delegates · returns a contract" separator.
    - A second row with the same shape: The specialist (one third, one centred
      box) and What a specialist carries (two thirds, five boxes). Identity and
      Skills carry no kicker: no later page goes deeper into them. Its own
      copy of the repo is left out: a specialist makes it on demand.
    - "Does the HOW"'s detail carries the agent line: "9 agents today: the
      orchestrator, and 8 specialists: developer · platform-architect ·
      gitops-operator · cloud-troubleshooter · gaia-planner · gaia-verifier ·
      gaia-operator · gaia-system. You can add your own."
  - Closing separator: "hooks decide by rule · skills and agents follow · the
    CLI joins".
- **The layout move: the envelope is the boundary.** You are outside it;
  everything Gaia is sits inside. Inside, the two halves rhyme: an actor in
  one third beside the set it holds in two thirds. Navigation lives in the
  kickers (→ PAGE 3 … 5), not in a separate row.
- **Language notes:** the GAIA subtitle keeps the orchestrator's own words.
  "sign" is its verb; later pages say "approval" for the noun. The
  orchestrator decides the WHAT and the specialists do the HOW: the page's one
  contrast. "the CLI" is named in plain words, never as a command. The carried
  set says "Project context" and "Memory about you"; no hook or field name
  reaches the face or the detail.
- **Hands off to page 3:** "Decides the WHAT". Its life, one request, is
  page 3.

## Page 3 · The life of a request, and its approvals

- **Altitude:** 3 · the real components.
- **Leave with:** "One turn has four events, the same every time: the context
  is injected, a rule checks every command before it executes, each result is
  recorded, and the contract is validated. Only the middle two repeat, once
  per tool call. The turn can stop at two of them. Before any execution, a
  rule sorts every command, with no model involved: it runs, it waits for your
  yes, or it never runs."

```
                ┌─────────────────────────────────────────────┐
                │              THE ORCHESTRATOR               │
                │            The life of a request            │
                │ one turn, four events, the same every time  │
                └─────────────────────────────────────────────┘
┌┄ SessionStart ┄┄┄┄┄┄┄┄┄┄┐┌──┐┌┄ The events of one turn ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┐
┆ Deterministic context   ┆│U │┆ from dispatch to close · at each one the host runs a hook       ┆
┆ injection               ┆│S │┆ SubagentStart│ PreToolUse    │ PostToolUse   │ SubagentStop    ┆
┆ ▭ System context        ┆│E │┆ Injected     │ Before any    │ Execution     │ Contract        ┆
┆ ▭ Projects map          ┆│R │┆ context      │ execution     │ validation    │ validation      ┆
┆ ▭ Memory about you      ┆│  │┆              │ (red)         │               │ (red)           ┆
┆ ▭ Open threads          ┆│P │┆ ─ once only ─│─────── ↻ each tool call ──────│─ once only ─    ┆
├┄ Orchestration tools ┄┄┄┤│R │└┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘
┆ gaia CLI · the orches-  ┆└──┘
┆ trator's only commands  ┆┌┄ Approvals · inside "before any execution" ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┐
┆ ▭ Memory management     ┆┆ what the first event decides, for every command                       ┆
┆ ▭ Project context       ┆┆ BEFORE ANY     │ READ-ONLY      │ CHANGES         │ NEVER            ┆
┆ ▭ Briefs and plans      ┆┆ EXECUTION      │                │ SOMETHING       │                  ┆
┆ ▭ Contracts             ┆┆ Sorts every    │ Runs           │ Waits for       │ Never runs       ┆
┆ ▭ Approvals             ┆┆ command        │                │ your yes        │                  ┆
┆ ▭ Schedules             ┆└┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘
└┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘
  ── red marks the only two events the turn can stop — before any execution and contract validation ──
  ── 12 hook events in total; this page draws 5 ──                                        (dotted)
```
The left column is three tenths of the row and stacks its two envelopes; the
right seven tenths hold the USER PROMPT vertical rail (rowspan 2) beside the
events, and Approvals below both. The sketch does not claim the two sides'
row heights line up.

**Chips lit** (from `p4-life-of-a-request.yaml`; the heading box is exempt):

| Chip | Members |
|---|---|
| `the-human` · who decides? | ▭ Approvals, ▭ USER PROMPT, Before any execution, Waits for your yes |
| `nothing-self-declared` · is it really done? | Before any execution, Contract validation |
| `memory` · what do we remember? | ▭ Projects map, ▭ Memory about you, ▭ Open threads, the six orchestration-tool rails, Injected context, Contract validation, Waits for your yes |
| `deterministic` · what does a rule decide? | the four SessionStart rails, the four events, Sorts every command, Runs, Waits for your yes, Never runs |
| `one-command` · what happens to one command? | Before any execution, Sorts every command, Runs, Waits for your yes, Never runs |
| `one-turn` · what happens in one turn? | the four events |

`semantic` is not declared (see "Omissions").

- **Motion beat (43.72 s slot):** the heading is visible from the first frame.
  s1 reveals the turn; s2 Injected context, with chip `memory` on "what Gaia
  remembers", clear at the end; s3 Before any execution, the Approvals band and
  Sorts every command, chip `deterministic` on "a rule"; s4 Runs; s5 Waits for
  your yes, chip `the-human`; s6 Never runs, chip `deterministic`; s7 chip
  `one-command` and Execution validation, clear; s8 Contract validation, chip
  `nothing-self-declared` on "judged"; s9 chip `one-turn`, then clear and the
  footnotes.
- **Form: dashboard.** Gaia's own layer on the left, the turn on the right.
- **Sections and components:**
  - The heading box: kicker THE ORCHESTRATOR (its box on the map), title "The
    life of a request". There is no orchestrator rail.
  - SessionStart, "Deterministic context injection": four rails.
  - Orchestration tools, "gaia CLI · the orchestrator's only commands": six
    rails.
  - USER PROMPT, a vertical rail: from here on someone is in the loop.
  - The events of one turn, in the order of the specialist's life: Injected
    context (SubagentStart), Before any execution (PreToolUse, red),
    Execution validation (PostToolUse), Contract validation (SubagentStop,
    red); under them "once only" · "↻ each tool call" (across the middle two)
    · "once only".
  - Approvals · inside "before any execution": the rule and its three
    outcomes in rising risk. Tiers, the never list, the single-use 30-minute
    approval and the approval chain are in the details, with sources.
  - Two dotted footnotes.
- **The layout move: the repeat is drawn.** The two middle events run on every
  tool call and the separators under them say so; red marks the only two
  places the turn can stop.
- **Language notes:** the title keeps "request", because the page starts at
  your prompt. Events are titled as what happens; hook names are the level-3
  kickers, without numbers. T0–T3 are only in the details. The approval
  message is named ("one standard approval message") and described only in
  the detail.
- **Hands off to page 4:** Contract validation. What it judges is the agent
  contract: page 4.

## Page 4 · Contracts

- **Altitude:** 4 · a mechanism.
- **Leave with:** "Everything travels as a contract. The orchestrator sends
  the work; Gaia's engine injects an agent contract with this agent's own
  permissions; the agent does the work and answers in it; the engine
  validates it by rule, never the prose; the orchestrator keeps going from it.
  The agent contract names what of the project contract the agent may read
  and write, and its updates are checked before they are saved."

```
               ┌──────────────────────────────────────────────────────┐
               │                      CONTRACTS                       │
               │           Everything travels as a contract           │
               │  the orchestrator and the agents talk only through   │
               │                      contracts                       │
               └──────────────────────────────────────────────────────┘
┌┄ The orchestrator ┄┄┄┄┄┄┄┄┐ ┌┄ Gaia's engine ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┐ ┌┄ The agent ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┐
┆ a model · holds the conv. ┆ ┆ code · decides by rule       ┆ ┆ a model · one specialist  ┆
┆ SENDS                     ┆ ┆ INJECTS ►                    ┆ ┆ RECEIVES                  ┆
┆ The work                  ┆ ┆ A contract for this agent    ┆ ┆ Does the work             ┆
┆ READS                     ┆ ┆ ◄ VALIDATES                  ┆ ┆ ◄ ANSWERS                 ┆
┆ Keeps orchestrating       ┆ ┆ By rule, not the prose       ┆ ┆ In a structured form      ┆
└┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘ └┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘ └┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘
┌┄ The contracts · one for each turn · one for each project ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┐
┆ ┌┄ Agent contract ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┐ ┌┄ Project contract ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┐ ┆
┆ ┆  ▭ status                             ┆ ┆  ▭ project_identity                      ┆ ┆
┆ ┆      ▭ COMPLETE                       ┆ ┆  ▭ stack                                 ┆ ┆
┆ ┆      ▭ NEEDS_VERIFICATION             ┆ ┆  ▭ environment                           ┆ ┆
┆ ┆      ▭ APPROVAL_REQUEST               ┆ ┆  ▭ git                                   ┆ ┆
┆ ┆      ▭ NEEDS_INPUT                    ┆ ┆  ▭ architecture_overview                 ┆ ┆
┆ ┆      ▭ BLOCKED                        ┆ ┆  ▭ workspace_repos                       ┆ ┆
┆ ┆      ▭ IN_PROGRESS                    ┆ ┆  ▭ application_services                  ┆ ┆
┆ ┆  ▭ evidence                           ┆ ┆  ▭ infrastructure                        ┆ ┆
┆ ┆      ▭ files_checked                  ┆ ┆  ▭ infrastructure_topology               ┆ ┆
┆ ┆      ▭ patterns_checked               ┆ ┆  ▭ gitops_configuration                  ┆ ┆
┆ ┆      ▭ commands_run                   ┆ ┆  ▭ cluster_details                       ┆ ┆
┆ ┆      ▭ key_outputs                    ┆ ┆  ▭ operational_guidelines                ┆ ┆
┆ ┆      ▭ verbatim_outputs               ┆ ┆  ▭ releases                              ┆ ┆
┆ ┆  ▭ verification                       ┆ ┆                                          ┆ ┆
┆ ┆  ▭ open gaps                          ┆ ┆                                          ┆ ┆
┆ ┆  ▭ reach                              ┆ ┆                                          ┆ ┆
┆ ┆  ▭ approval                           ┆ ┆                                          ┆ ┆
┆ ┆  ▭ project updates                    ┆ ┆                                          ┆ ┆
┆ └┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘ └┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘ ┆
└┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘
```
Indentation is the rail `indent` field: keys at 1, a key's values at 2, one
rail per row. An indented rail draws a frame sized to its word, so the levels
read as a staircase. The agent tree is 18 rails, the project tree 13.

**Chips lit** (from `p6-contracts.yaml`; the heading box is exempt):

| Chip | Members |
|---|---|
| `the-human` · who decides? | Keeps orchestrating, In a structured form, ▭ approval |
| `nothing-self-declared` · is it really done? | Keeps orchestrating, By rule, not the prose, ▭ verification |
| `memory` · what do we remember? | the 13 project-contract rails |
| `deterministic` · what does a rule decide? | A contract for this agent, By rule, not the prose |
| `semantic` · what does a model follow? | The work, Keeps orchestrating, Does the work, In a structured form |
| `project-contract` · what may it read and write? | A contract for this agent, ▭ project updates, the 13 project-contract rails |
| `next-move` · what happens next? | Keeps orchestrating, In a structured form, ▭ status and its six states |
| `the-contract` · what travels in a contract? | Keeps orchestrating, A contract for this agent, By rule, not the prose, Does the work, In a structured form, all 18 agent-contract rails |

- **Motion beat (36.60 s slot):** s1 "Everything travels as a contract."
  reveals the heading, chip `the-contract` on "contract"; s2 clear, the flow and
  SENDS; s3 the engine and INJECTS, the agent and RECEIVES on "specialist a
  contract", chip `the-contract` on "a contract made", chip `project-contract`
  on "which parts", clear; s4 ANSWERS, chip `nothing-self-declared` on "its
  status", clear; s5 VALIDATES with chip `deterministic`, READS on
  "orchestrator read", chip `next-move` on "what's next"; s6 clear, The
  contracts, then the agent contract with chip `the-contract` and the project
  contract with chip `project-contract`, clear at the end.
- **Form: dashboard, read top-down.** A flow across three actors, then the two
  structures the flow moves.
- **Sections and components:**
  - The heading box: kicker CONTRACTS (its box on the map), title "Everything
    travels as a contract".
  - Three envelopes, The orchestrator, Gaia's engine, The agent, two boxes
    each, so the first row runs left to right (SENDS, INJECTS ►, RECEIVES) and
    the second back (◄ ANSWERS, ◄ VALIDATES, READS). No kicker carries a
    number.
  - The contracts, "one for each turn · one for each project": two titled
    sub-sections, Agent contract and Project contract, each a tree of rails.
    In the real schema verification, open gaps and reach sit inside the
    evidence report; the tree lifts them beside evidence so evidence's
    children are the five lists of what the agent saw and did.
  - Rails carry no detail, so each key's one-line meaning lives in a box's
    detail: agent-contract keys in VALIDATES; the 13 project-contract sections
    and how the two kinds meet (at dispatch, in its answer, at the close) in
    INJECTS.
- **The layout move: flow, then shape.** What happens across three actors,
  then the two things that travel, drawn as the shape of real contracts.
- **Language notes:** "agent contract" and "project contract" are the two
  named kinds on this page. The engine column is titled "Gaia's engine",
  subtitle "code · decides by rule"; the `deterministic` chip lights it.
  "Adapted to the agent" is said the way the code does it: its surface, its
  role, and what it may read and write (facts table). The 13 project
  sections are every section the nine agent files declare.
- **Hands off to page 5:** VALIDATES and READS, "is it really done?": where
  the verdict is kept.

## Page 5 · What Gaia keeps

- **Altitude:** 4 · the mechanisms, said in Gaia's own words.
- **Leave with:** "Gaia keeps four memories, each answering one question:
  what we know about the project and about you, what we are doing and what is
  still open, what we executed and what it produced, and what happened and
  when. Each follows its lifecycle in the code. One task leaves a trace in all
  four. You decide what is curated; the engine records the rest."

```
┌┄ (blue) ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┐ ┌┄ (gold) ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┐
┆ scan →     │ workspace →│ repos →    │ sections ↓  ┆ ┆ brief →    │ acc. crit.→│ plan →     │ tasks ↓     ┆
┆────────────┼────────────┴────────────┼─────────────┆ ┆────────────┼────────────┴────────────┼─────────────┆
┆ ↑ preferen.│      PROJECT MEMORY     │ can read ↓  ┆ ┆ ↑ carry fwd│   OPERATIONAL MEMORY    │ gates ↓     ┆
┆────────────┼────────────┬────────────┼─────────────┆ ┆────────────┼────────────┬────────────┼─────────────┆
┆ ↑ your     │ ← anchors  │ ← decisions│ ← can write ┆ ┆ ↑ plan chg.│ ← pause    │ ← blocked  │ ← pending   ┆
┆   rules    │            │            │             ┆ ┆            │            │            │             ┆
└┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘ └┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘
┌┄ (clay) ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┐ ┌┄ (violet) ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┐
┆ contracts →│ T3 →       │ approvals →│ evidence ↓  ┆ ┆ sessions → │ turns →    │ hooks →    │ events ↓    ┆
┆────────────┼────────────┴────────────┼─────────────┆ ┆────────────┼────────────┴────────────┼─────────────┆
┆ ↑ audit tr.│     EXECUTION MEMORY    │ open gaps ↓ ┆ ┆ ↑ last 24h │     EPISODIC MEMORY     │ anomalies ↓ ┆
┆────────────┼────────────┬────────────┼─────────────┆ ┆────────────┼────────────┬────────────┼─────────────┆
┆ ↑ BLOCKED  │ ← COMPLETE │ ← pass     │ ← verdict   ┆ ┆ ↑ lineage  │ ← timeline │ ← cut turns│ ← episodes  ┆
└┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘ └┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘
            ── you decide what is curated · the engine records the rest ──
```
Each sun is one untitled envelope (the frame) holding a 4×3 grid: the name box
spans the two middle cells and ten rails ring it. Every rail reads clockwise
from the top-left: `→` after the word across the top, `↓` after it down the
right side, `←` before it across the bottom, `↑` before it up the left side.
The sketch abbreviates "acceptance criteria", "preferences", "carry forward",
"plan change" and "audit trail".

The four rings, in flow order (from the YAML; the code sources are in the
facts table):

| Memory (hue) | Clockwise from top-left |
|---|---|
| PROJECT MEMORY (blue) | scan · workspace · repos · sections · can read · can write · decisions · anchors · your rules · preferences |
| OPERATIONAL MEMORY (gold) | brief · acceptance criteria · plan · tasks · gates · pending · blocked · pause · plan change · carry forward |
| EXECUTION MEMORY (clay) | contracts · T3 · approvals · evidence · open gaps · verdict · pass · COMPLETE · BLOCKED · audit trail |
| EPISODIC MEMORY (violet) | sessions · turns · hooks · events · anomalies · episodes · cut turns · timeline · lineage · last 24h |

**Chips lit** (from `p5-what-gaia-keeps.yaml`):

| Chip | Members |
|---|---|
| `the-human` · who decides? | your rules, decisions, gates, T3, approvals |
| `nothing-self-declared` · is it really done? | pending, pass, verdict, lineage |
| `deterministic` · what does a rule decide? | scan, workspace, repos, can read, can write, blocked, pending, T3, audit trail, verdict, and all ten episodic rails |
| `semantic` · what does a model follow? | preferences, your rules, anchors, decisions, brief, acceptance criteria, plan, tasks, carry forward, plan change, pause, contracts, evidence, open gaps, BLOCKED, COMPLETE |
| `what-comes-back` · what comes back next session? | anchors, carry forward, last 24h |
| `one-task` · where does one task leave a trace? | the four name boxes, sections, tasks, contracts, episodes |

`memory` is not declared (see "Omissions"). `deterministic` and `semantic`
split the words: what the engine records or a rule decides, against what a
model writes on purpose; every rail but sections, gates, approvals and pass
carries one of the two, and those four carry `one-task`, `the-human` or
`nothing-self-declared`.

- **Motion beat (39.44 s slot):** s1 chip `what-comes-back` on "Gaia
  remembers", clear; s2 the project sun and its name box, its ring 0.3 s later;
  s3 the operational sun, then its ring; s4 chip `nothing-self-declared`,
  clear; s5 the execution sun, then its ring; s6 the episodic sun, then its
  ring; s7 chip `deterministic`; s8 chip `the-human`; s9 clear and the closing
  line. The four spoken questions are the name boxes' own questions (their
  details), not chip labels.
- **Form: dashboard of four suns.** The idea stands and has four peers; each
  peer converges on its name. The engine cannot radiate, so each sun is a 4×3
  grid whose middle row holds the name box merged 2×1.
- **Sections and components:**
  - Four envelopes in a 2×2, in the order work flows, left to right then top
    to bottom: project (what Gaia knows before any work), operational (the
    work planned), execution (the work done), episodic (what it all left
    behind). No heading box.
  - Each holds one name box (span 2, **centered**, title only, the memory's
    name in capitals, the memory's hue; its detail opens with its question in
    bold, then the words the ring leaves out and the commands) and ten
    **centered** rails in the same hue, in their authored case: lowercase
    words, with T3, COMPLETE and BLOCKED in the code's case.
  - One full-width separator: "you decide what is curated · the engine
    records the rest".
- **The layout move: the ring is the lifecycle.** Each ring follows its
  memory's sequence in the Gaia code, clockwise, and the arrow on each rail
  points to the next cell. Where the code has no sequence (facts table),
  alternatives sit side by side. `order` is packing order, not flow order: the
  bottom row is authored left to right, so its flow runs from order 11 back to
  order 8, and the left cell (order 5) closes the ring.
- **Language notes:** the words are Gaia's own identifiers, checked in the
  code (facts table), so state names appear on the face at this level-4 page.
  The ring words are rails, title-only by definition; a hue rail is set at
  10.5px with no tracking so "acceptance criteria" (21 characters) holds one
  line in one cell at 1920. "Project memory" is the one place project context
  is called memory (glossary). "your rules" and "preferences" are the plain
  names for curated `user` rows. The hues mean only "which memory".
- **Hands off to page 6:** "you decide". Page 6 is how to start.

## Page 6 · Install it, ask it

- **Altitude:** back to 1.
- **Leave with:** "Installing it is one plugin, or one package plus one
  command, and the first thing to ask is what it is. It grows with you from
  there. On my machine: 583 yes, 52 no, and 94% of commands only read.
  Everything it learns stays in one database on your machine."

```
┌┄ Start here · two routes · pick one per Claude Code workspace: both together register every hook twice ┄┄┄┄┐
┆ ┌┄ Claude Code installation ┄┄┄┄┄┄┄┄┄┐ ┌┄ Gaia agnostic installation ┄┄┄┄┄┄┐ ┌─────────────────────────────┐ ┆
┆ ┆ installs Gaia in plugin mode       ┆ ┆ installs Gaia as a plugin in      ┆ │ THEN ASK           (accent) │ ┆
┆ ┆ RECOMMENDED                      ⧉ ┆ ┆ Claude Code and OpenCode (beta)   ┆ │                             │ ┆
┆ ┆ /plugin marketplace add            ┆ ┆ THE PACKAGE                     ⧉ ┆ │ what is Gaia, and what can  │ ┆
┆ ┆   metraton/gaia                    ┆ ┆ npm install @jaguilar87/gaia      ┆ │ you do for me?              │ ┆
┆ ┆ ONE PLUGIN, NO NPM STEP          ⧉ ┆ ┆ WIRES THE WORKSPACE             ⧉ ┆ │                             │ ┆
┆ ┆ /plugin install gaia@gaia-marketpl.┆ ┆ gaia install                      ┆ │ Gaia explains itself, live  │ ┆
┆ ┆ FIRST SESSION                    ⧉ ┆ ┆ TO REMOVE (muted)               ⧉ ┆ │                             │ ┆
┆ ┆ /reload-plugins                    ┆ ┆ gaia uninstall                    ┆ │                             │ ┆
┆ ┆ TO REMOVE (muted)                ⧉ ┆ ┆ THEN THE PACKAGE (muted)        ⧉ ┆ │                             │ ┆
┆ ┆ /plugin uninstall                  ┆ ┆ npm uninstall @jaguilar87/gaia    ┆ │                             │ ┆
┆ └┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘ └┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘ └─────────────────────────────┘ ┆
└┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘
┌────────────────────────────────┬──────────────────────────────┬────────────────────┬────────────────────┐
│ ONE DATABASE · ALL IT KNOWS ·  │ OPEN SOURCE · MIT            │ ON MY MACHINE ·    │ ON MY MACHINE ·    │
│ YOURS                   (good) │ your agents, your skills     │ APPROVALS          │ COMMANDS           │
│ ~/.gaia/gaia.db                │ github.com/metraton/gaia     │ 583 yes · 52 no ·  │ 94% only read      │
│ every install, every project,  │                              │ 218 expired        │ most commands      │
│ the same knowledge · uninstall-│                              │ you said yes or no │ never ask          │
│ ing never deletes it           │                              │                    │                    │
└────────────────────────────────┴──────────────────────────────┴────────────────────┴────────────────────┘
┌┄ It grows with you · you ask; it learns everything else ┄┄┄┄┄┄┄┄┄┄┐ ┌┄ What a skeptic asks ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┐
┆                                                     ┌───────────┐ ┆ ┆ "It sounds like a lot."               ┆
┆                                        ┌──────────┐ │ YOU       │ ┆ ┆ You don't learn it. You ask it.       ┆
┆                           ┌──────────┐ │ YOU      │ │ work      │ ┆ ┆ "Do I have to change how I work?"     ┆
┆              ┌──────────┐ │ YOU      │ │ describe │ │ agentic-  │ ┆ ┆ No. You keep talking to Claude Code.  ┆
┆ ┌──────────┐ │ YOU      │ │ point it │ │ the      │ │ ally      │ ┆ ┆ "Only one project?"                   ┆
┆ │ YOU      │ │ ask      │ │ at your  │ │ problem  │ │ (accent)  │ ┆ ┆ One, or many. It reaches every one…   ┆
┆ │ install  │ │          │ │ repos    │ │          │ │           │ ┆ ┆ "How does it know my repos?"          ┆
┆ │ one cmd  │ │          │ │          │ │          │ │           │ ┆ ┆ One scan maps them, in broad strokes. ┆
┆ └──────────┘ └──────────┘ └──────────┘ └──────────┘ └───────────┘ ┆ ┆ "Is it safe?" · Reads run. Changes    ┆
┆                                                    (compact rows) ┆ ┆ wait for your yes. · "What happens…?" ┆
└┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘ └┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘
      ── hooks decide by rule · skills and agents follow · the CLI joins ──
```
⧉ is the copy button. Each route holds four half boxes, two cells tall; the
first prompt stands beside them at rowspan 2. The staircase is five steps of
rowspan 1 to 5 standing on one floor of 10 declared spacers, in a `compact`
grid (74px rows, 4px gaps) so its five rows end level with the six half-box
objections' three rows. The page is taller than 1080; Jorge chose one page
over splitting it.

**Chips lit** (from `p9-back-to-the-map.yaml`; there is no heading box):

| Chip | Members |
|---|---|
| `the-human` · who decides? | /plugin marketplace add, /plugin install, /reload-plugins, npm install, gaia install, 583 yes, work agentically, ask, install, "Is it safe?" |
| `nothing-self-declared` · is it really done? | 583 yes, 94% only read |
| `memory` · what do we remember? | ~/.gaia/gaia.db, "What happens to what it learned if I uninstall?" |
| `deterministic` · what does a rule decide? | 94% only read, point it at your repos, "How does it know my repos?", "Is it safe?" |
| `semantic` · what does a model follow? | the first prompt, your agents, your skills, work agentically, describe the problem, ask, "It sounds like a lot." |
| `yours` · what is really yours? | /plugin install, /plugin uninstall, gaia install, gaia uninstall, npm uninstall, ~/.gaia/gaia.db, your agents, your skills, point it at your repos, "Do I have to change how I work?", "Only one project?", "What happens to what it learned if I uninstall?" |

- **Motion beat (28.20 s slot):** s1 reveals the last row with the staircase
  frame; s2–s6 raise one step per sentence, install, ask, scan, describe,
  work, and s2's "one command" reveals START HERE with both routes; s7 the
  objections, chip `the-human` on "asks before"; s8 the database and numbers
  row, chip `memory`, then `yours` on "on your machine"; s9 clear, the first
  prompt, then the closing line on "what can you do".
- **Form: comparison.** Two routes side by side, then what is yours and what it
  measured, then what it grows into beside what a skeptic asks.
- **Sections and components:**
  - Start here (**procedure** mode): Claude Code installation (plugin mode:
    marketplace add, install, reload, uninstall) and Gaia agnostic
    installation (npm package, `gaia install`, `gaia uninstall`, `npm
    uninstall`), every command a title with a copy button, the remove commands
    muted; beside them THEN ASK, the first prompt, accent, centred, rowspan 2.
  - One row of four: the database (good) and open source, then the numbers
    (**reference** mode): the kicker names the source ("ON MY MACHINE ·
    APPROVALS", "ON MY MACHINE · COMMANDS"), the title is the number. The
    turn counts are left out: before rc.3 the hooks were registered twice,
    which inflated them.
  - It grows with you (`compact`), five steps, each kicker YOU: install, ask,
    point it at your repos, describe the problem, work agentically (accent);
    beside it What a skeptic asks, six half boxes, the question as the kicker
    and the answer as the title.
  - The closing separator: "hooks decide by rule · skills and agents follow ·
    the CLI joins".
- **The layout move: the staircase is the growth.** Each step is one row
  taller than the one before and all stand on the same floor, so the page
  shows what you do first and what it grows into, read left to right.
- **Language notes:** commands appear on this level-1 page because install is
  procedure and the command is the content. "you sign" keeps the map's verb
  (the `the-human` step). The first prompt, the commands and the objections'
  answers are deliberate exceptions to the 2–4-word title rule. "on one
  machine" frames every number.
- **The close:** the live install, then the first prompt. Gaia explains itself
  live.

## Backup · Down to the code (after page 6, for questions only)

- **Altitude:** 5 · the code. Not in the video.
- **Leave with:** "Every moment of the turn is a hook, and every hook is
  ordinary code you can read."

```
┌┄ ON DEMAND · the CLI ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┐
┆ gaia     │ gaia     │ gaia     │ gaia plan│ gaia     │ gaia     │ gaia context┆
┆ memory   │ contract │ brief    │ · task   │ approvals│ schedule │ · scan      ┆
┆ Curated  │ Contracts│ Briefs   │ Plans and│ Approvals│ Schedules│ Project     ┆
┆ memory   │          │          │ tasks    │          │          │ context     ┆
└┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘
┌┄ SESSION START ┄┐┌┄ BORN · PreToolUse ┄┄┄┄┄┄┄┐┌┄ RECEIVES ┄┄┐┌┄ WORKS ┄┄┄┄┐┌┄ CONTRACT ┄┄┐
┆ SessionStart    ┆┆ Use it or   │ Tier T0    ┆┆ SubagentStart┆┆ PostToolUse┆┆ SubagentStop┆
┆ Eight calls,    ┆┆ delegate    │ to T3      ┆┆ Recent events┆┆ One line   ┆┆ Reads the   ┆
┆ in order        ┆┆ File to     │ Routing    ┆┆ Claims its   ┆┆ per run    ┆┆ contract    ┆
┆ Where you are   ┆┆ skill       │            ┆┆ contract     ┆┆            ┆┆ May it write┆
┆ What is open    ┆┆ The contract is born     ┆┆              ┆┆            ┆┆ here?       ┆
┆ What I know     ┆┆                          ┆┆              ┆┆            ┆┆ Six factors,┆
┆ about you       ┆┆                          ┆┆              ┆┆            ┆┆ a grade     ┆
┆                 ┆┆                          ┆┆              ┆┆            ┆┆ Writes the  ┆
┆                 ┆┆                          ┆┆              ┆┆            ┆┆ episode     ┆
└┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘└┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘└┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘└┄┄┄┄┄┄┄┄┄┄┄┄┘└┄┄┄┄┄┄┄┄┄┄┄┄┄┘
┌┄ AUDIT · runs at every moment above, which is why it is the base and not a column ┄┄┄┄┄┄┐
┆ The hashed chain   │ The event stream   │ About twenty checks  │ The closing sweeper    ┆
└┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘
```
Kickers on this page are function or command names (`check_delegate_mode`,
`classify_tier (short)`, `validate_permission`, `record_event`, …). RECEIVES
and WORKS each hold one more leaf (`rc-none`, `wk-repeat`) that carries no
chip; its type was not re-read in revision 7.

**Chips lit** (from `backup-code.yaml`):

| Chip | Members |
|---|---|
| `deterministic` · a rule decides | every box |
| `sesion-abre` · the session opens | the four SESSION START boxes |
| `ruteo` · where does this belong? | Use it or delegate, Routing |
| `porton` · the checkpoint | gaia approvals, Use it or delegate, Tier T0 to T3, File to skill |
| `despacho` · the dispatch | Routing, The contract is born, Recent events |
| `entrega` · the handover | Recent events, Claims its contract |
| `contabilidad` · the bookkeeping | One line per run, The hashed chain, The event stream, The closing sweeper |
| `the-judge` · the judge | gaia contract, the four CONTRACT boxes, About twenty checks |

- **Form:** dashboard, six columns: the CLI as a full-width band on top, the
  five hook columns in the order of a session, AUDIT as the base.
- **Language notes:** the one page where function names sit on the face. The
  per-hook chip `porton` is labelled "the checkpoint", because "gate" belongs
  to planning only. Its column headers keep the revision-4 moment names (BORN
  … CONTRACT); page 3 names the same moments as events.
- **Code corrections the page follows** (recorded at the revision-6 build):
  `build_session_events` runs at dispatch (`tool_policy.py:472`), not in
  SessionStart; SessionStart runs `build_session_context`
  (`session_manifest.py:1218`); `validate_permission` runs at close
  (`subagent_stop.py:176`); the "Routing" box is `build_kernel_sections`,
  because no hook calls `classify_surfaces`.

---

## Pages removed

Page numbers in this table are those of the revision that removed each page.

| Page | Decision | Where its useful content goes |
|---|---|---|
| Backup · The vision (`s0-vision`) | removed | Covered by page 1. |
| Backup · Visibility (`s1-visibilidad`) | removed | Page 3's approval details; page 5's execution memory. |
| Backup · Standards (`s2-estandares`) | removed | Page 1's STANDARDS pillar. |
| It explains itself (`s5-se-explica`, hidden) | removed | Page 2 is the self-explanation; page 6's first prompt shows it live. |
| 5 · You sign (`p5-you-sign`) | revision 5: merged, file deleted | Page 3's Approvals band. |
| 3 · What an agent is (`p3-whos-who`) | revision 6: removed, file deleted | Page 2's symmetric map; the agent names in "Does the HOW"'s detail. |
| 6 · It checks (`p7-it-checks`) | revision 6: removed, file deleted | Page 5's operational memory (brief, plan, tasks, gates) and execution memory (verdict, pass); the cross-check stays on page 4's VALIDATES. |
| 7 · Memory (`p8-memory`) | revision 6: removed, file deleted | Page 5, which splits its two kinds into four memories and keeps its closing line. |

## Engine limits this design respects

- **No edges, grid only.** Every relation is a chip or `order`. The map's
  labelled arrows are separators with text; page 5's suns are 4×3 grids with a
  merged centre, not a radial burst.
- **Chips** (`tools/check-layout.mjs`): a declared chip needs at least two
  members; every referenced key must be declared (`CHIP`); `filters` on a
  separator or spacer fails, because only boxes and rails light (`LIT`); every
  box and rail belongs to at least one chip, except the heading box
  (`HARMONY`).
- **Fields are closed** (`engine/build-data.mjs`): an unknown field or value
  fails the build with a suggestion. Box fields: `id type variant
  variant_extra treatment kicker title description detail note order span
  rowspan filters style text copy`. Section fields: `id title subtitle variant
  treatment order span rowspan columns children`.
- **Rails** keep only `id type order span rowspan title treatment variant
  filters indent`. `variant` is one of the four hues; `indent` is an integer
  0–3, one `--indent-step` (32px) per level, insetting the drawn frame while
  the cell still fills its track. A spacer indent in a leaf grid was rejected
  for page 4: it left an interior hole on every row once the tracks collapsed
  at the 900px tier.
- **Spacers** keep only `id type order span rowspan`: a declared hole, never an
  empty card.
- **`copy`** is `true` (copies the title, so the box needs one) or a non-empty
  string, and only on a box. The button stops its click, so it never opens the
  detail card.
- **Section treatments** are `plain`, `envelope`, `middle` and `compact`;
  component treatments are `centered`, `half`, `vertical` and `outside`.
  `middle` centres a section's grid vertically inside its compound row; the
  deck does not use it. `compact` shortens one leaf grid's row to 74px with a
  4px gap and unclamps its descriptions; its children must all be components,
  and it is the only way a grid may leave the uniform-row gate
  (`tools/validate-layout.cjs`, check U).
- **Variants:** boxes take `neutral good warn bad accent muted` plus the four
  hues; sections take `neutral good bad`.
- **Rows** are a fixed `--cell-h` (130px), separator rows 40px, so a
  1920×1080 screen holds about six rows plus a separator. That is why page 5's
  suns are 4×3 and why page 6 needed `compact`.
- **Leaf grids clamp** their columns to what their content can fill, so a grid
  of only wide merges collapses; the gate reports it (`BAND`, advisory).
- **Rail titles** hold at most two lines, and a hue rail one line at 1920
  (`RAILT`).
- **`rowspan`** is used only in components-only sections (page 3's USER
  PROMPT, page 6's first prompt and staircase); revision 6 recorded that it
  works only there, **unverified** in revision 7.
- **Video mode:** `window.__deck` exists only under `?video`
  (`engine/engine.js`); rails and separators are addressed by `data-cid`.
- **Seed drift:** the hues, rail colour and indent, `copy` and `compact` are
  deck-side; whether they are in the diagram-builder seed was not checked in
  revision 7 (memory row `project_deck_gate_ahead_of_seed_unported`).

## Claims still to check

- Page 4's "what happens next" for each state follows the
  `agent-contract-handoff` and `agent-protocol` skills, not a code line.
- Page 5's words were matched by name in the code (facts table); the probe
  counted identifiers, it did not read what each one does. Where the code has
  no sequence, the ring order is a reading (facts table).
- The Gaia source line references in the facts table were not re-read in
  revision 7.
- `VIDEO.md` was rewritten against `tools/video/` as it stands (stagger
  0.15 s, page 1 without chips, `split.mjs`, chip-bar framing, anticipation
  0.3 s, dim 0.6, the chip-visibility guard, supersample 2×, encode
  settings). The files still win where the two drift again.
- `PRESENTATION.md` is still revision 5.
