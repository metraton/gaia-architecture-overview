# GAIA deck — storyboard for the talk to Gerry

Status: **revision 6, the six-page deck Jorge approved.** `PRESENTATION.md`
still describes revision 5 and has to be rewritten against this one.

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
| 3 | **It checks before telling you.** It reports from that record and from what it opens itself, not from what the specialist says it did. It separates what it saw, assumed and judged. | page 4 (the engine validates) and page 5 (verification, verdict) |
| 4 | **You sign what changes something.** A push, an apply or a delete waits until you approve it, after you have seen exactly what will happen. | page 3 · its APPROVALS band |
| 5 | **Memory outlives the session:** your rules, your preferences, and what is pending per project. | page 5 · What Gaia keeps |

Why it is built this way: so that every result has evidence and an owner, and
nothing that changes your systems happens without your permission.

The deeper pages run in the order of one turn's life (points 1 and 4 together,
then 2, then 3 and 5 together). Each opens with a rail, kicker or title that
names its box on the map (THE ORCHESTRATOR with its APPROVALS, CONTRACTS, and
the four memories Gaia keeps, which include PLANS & TASKS), so the reader can
always answer "which part of the first picture am I inside?". Each point's
page is its box's pointer on the map.

## Language and labels: the rules every page follows

These rules come from the `technical-explanation` skill (altitude, register,
one term per concept, one mode per section) and the `diagram-builder`
doctrine and glossary (slots, rails, separators, chips, the hole that speaks).

| Rule | What it means on this deck |
|---|---|
| **Register per altitude** | Level-1 pages (1, 2, 6) use common nouns and the plain register; agent names appear only in a detail (page 2's THE SPECIALIST). Real identifiers (hook names, state names, CLI commands, field names) start at level 3 (page 3). Function names appear only in a box's detail or on the backup code page. |
| **One term per concept** | **agent contract**: the form an agent is born with, fills during its turn and answers in; Gaia stores it and judges it by rule. On every page but 4 a bare **contract** means the agent contract. **project contract**: what Gaia knows about one project, in named sections (`project_identity`, `stack`, `application_services`, …); each agent may read some (`can_read`) and write others (`can_write`). It replaces the earlier name "context permissions". Page 4 names both kinds explicitly. Never "handoff", "record", "row", "envelope" or "report" in front of the audience. **approval**: your yes to one exact command; never "grant" or "consent token". "Sign" is allowed only as the plain verb for giving an approval, as the orchestrator's answer says it (pages 2, 3, 6). **turn**: one specialist's life, from dispatch to close. **event**: one of the four fixed moments of a turn (before any tool, handed its context, each tool call, at the close); the hook that fires at it is its technical name. **request**: what you ask, one prompt. **specialist**: one of the 8 agents that do the work; never "subagent" (except Claude Code's feature name and the hook names). **agent**: the orchestrator or a specialist. **orchestrator**: the one agent you talk to; on the level-1 map it is a box inside GAIA, which names the whole orchestration layer. **gate**: a task's pass/fail check in a plan, and only that. **episode**: the automatic trace of one turn. **curated memory**: what the orchestrator writes on purpose and Gaia reads back. **project context**: the plain name, on pages 2 and 4, for what the project contract holds. **The four memories** (page 5 only, each named with its question): **operational memory**, what is in flight and still open (briefs, plans, tasks, gates); **episodic memory**, what happened and when (events, episodes, sessions), recorded by the engine; **project memory**, what Gaia knows about the project and about you (the project contract's sections, plus the curated rules, preferences, decisions and anchors); **execution memory**, what was executed and what it produced (contracts, evidence, verdicts, approvals). Project memory is the one place where project context is called memory, because page 5 names all four side by side. **hook**: code the host runs at a fixed moment. **skill**: written instructions an agent loads. **deterministic**: decided by a rule in code, the same answer every time, no model involved. **semantic**: done by a model following instructions. |
| **Kicker** | A verb or a step marker ("HOLDS", "1 · SENDS"), or a short component name ("1 · PreToolUse"). Never the thing itself; that is the title's job. |
| **Title** | The thing, in 2–4 words. |
| **Description** | One line, few words: what it does or why it matters. |
| **Detail** | The mechanics, identifiers, function names and evidence, shown on click. |
| **Rail** | A title-only band that names a layer, a map position ("POINT 2 · CONTRACTS") or a group, or one key of a staircase. Carries no chip and no detail. A vertical rail labels a stack beside it. |
| **Separator** | A relation or a rule, stated in the line's text. On the map it stands for a labelled arrow. |
| **Centered box** | The `centered` treatment, for what a page turns around (the map's actors, page 5's four question boxes), or for a row of equal small headers. |
| **Colour** | The four categorical box colours (`gold`, `violet`, `blue`, `clay`) mean only "which memory", and only on page 5, where each question box spells its colour out. They never mean good or bad. |
| **Word box** | Page 5 only: a box with a title and nothing else, one real Gaia word. The one deliberate exception to the kicker/title/description slots; what does not fit the ring goes in the question box's detail. |
| **Chip vs order vs width vs empty cell** | A **chip** lights a relation that crosses sections, and needs at least 2 members on the page. **Order** carries a sequence inside one section. **Width** carries "belongs to", reach or importance. An **empty cell** states an absence, and it must caption itself: a separator with text, never a bare `spacer`. |
| **Chip labels** | Phrased as the question or relation they answer, the same wording on every page where the key repeats. |
| **One mode per section** | Concept, procedure, reference or decision, never blended. Every section is concept except page 6's numbers (reference) and install (procedure). |

Chip keys and labels, fixed for the whole deck. Page 6's column is what
revision 5 recorded for the page that was then page 8; its rewrite owns it.

| Key | Label | Pages |
|---|---|---|
| `the-human` | who decides? | 1–6 |
| `nothing-self-declared` | is it really done? | 1–6 |
| `memory` | what do we remember? | 1–3, 6 (absent on 4: one honest member; absent on 5: every box would be a member) |
| `deterministic` | a rule decides | 2–4, 6 |
| `semantic` | a model follows instructions | 2, 4, 6 |
| `the-contract` | one contract, out and back | 2, 4 |
| `one-turn` | one turn | 2, 3 |
| `one-command` | one command | 3 |
| `project-contract` | what may it read and write? | 4 |
| `next-move` | what happens next? | 4 |
| `one-task` | one task | 5 |
| `what-comes-back` | what comes back? | 5 |
| `the-judge` (was `el-juez`) | the judge | backup |
| `ruteo`, `porton`, `despacho`, `entrega`, `contabilidad`, `sesion-abre` | unchanged from today's deck | backup |

## The story in one breath

A team that works with AI agents needs five shared things (page 1). Gaia's
own answer to "what are you?" is the map: it converses with you and
coordinates the work, but never makes the changes itself. It is hooks that
decide by rule and skills and agents that a model follows, joined by its CLI
(page 2). Then one point of the map per page:
- it holds the conversation, through the four events of one turn, and before
  any tool a rule sorts every command: it runs, it waits for your yes, or it
  never runs (page 3);
- every agent answers with a contract, and its agent contract names what of
  the project contract it may read and write (page 4);
- what Gaia keeps: four memories, each answering one question, joined where
  one piece of work leaves a trace in all four (page 5).

The talk closes on how to install it and what to ask it first (page 6).

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

In the sketches, a line with `── … ──` is a separator with its text, "(red)"
marks a box in the red variant, a word centered in its cell marks a centered
box, and a narrow column of stacked words beside a stack is a vertical rail.

## Altitude scale

| Level | What the reader sees | Pages |
|---|---|---|
| 1 · the idea | why a team needs this; what Gaia is; how to start | 1, 2, 6 |
| 3 · the real components | the events of a turn and their hooks, CLI groups, the approvals rule, by their real names | 3 |
| 4 · the mechanisms | how one point of the map works from start to end; what Gaia keeps, in its own words | 4, 5 |
| 5 · the code | modules and functions | backup |

Level 2 (roles and agents) no longer has a page: page 2's map names the roles,
and the agent names are in THE SPECIALIST's detail.

## Timing

**The talk, about 15 minutes.** The depth time goes to pages 3, 4 and 5, 11 of
the 15 minutes; the level-1 pages around them stay short.

| # | Page | Marker | Level | Form | Minutes |
|---|---|---|---|---|---|
| 1 | Why a team needs this | — | 1 | dashboard | 1.5 |
| 2 | What Gaia is | the map | 1 | mindmap, vertical | 1.5 |
| 3 | The life of a request | THE ORCHESTRATOR · HOLDS THE CONVERSATION, with APPROVALS | 3 | dashboard | 4 |
| 4 | Contracts | POINT 2 · CONTRACTS · EVERY AGENT ANSWERS WITH A CONTRACT | 4 | dashboard, flow then structure | 3.5 |
| 5 | What Gaia keeps | the four memories, each with its question | 4 | dashboard of four suns | 3.5 |
| 6 | Install it, ask it | — (owned by its rewrite) | 1 | — (owned by its rewrite) | 1 |
| backup | Down to the code | — | 5 | dashboard | 0 (questions only) |
| | | | | | **15** |

**The video, at most 4:30.** This is the base architecture video; videos and
articles on each part come later. The map on page 2 anchors it: it opens the
video right after page 1.

| # | Page | Seconds |
|---|---|---|
| 1 | Why | 20 |
| 2 | The map (the anchor) | 40 |
| 3 | The life of a request, and its approvals | 60 |
| 4 | Contracts | 45 |
| 5 | What Gaia keeps | 50 |
| 6 | Install it, ask it | 30 |
| | **Total** | **245 s (4:05)** |

The backup page is not in the video.

## Facts that come from the code, not the README

| Fact | Source |
|---|---|
| **Approvals are decided by a hook, by rule.** Every command gets a tier from a fixed classifier: T0 read, T1 validate, T2 dry run, T3 change. The classifier matches patterns and verbs in code; no model is consulted. | `hooks/modules/security/tiers.py:29-35` (`SecurityTier`), `:78` (`_classify_command_tier_cached`) |
| The never list is a separate, fixed pattern check; its refusal has nothing to approve. | `hooks/modules/security/blocked_commands.py:678` (`is_blocked_command`) |
| An approval is single-use and must match the approved command byte for byte; the window is 30 minutes. | `approval_grants.py:193`, `:523`; `writer.py:86` |
| **Facts table only, not on a slide:** reading or listing a credential path (`.ssh`, `.aws`, `.env`, `*.pem`, `/etc/shadow`, …) is refused by the same kind of fixed rule, with nothing to approve, in Bash and in the file tools. | `sensitive_paths.py:25-42`; `sensitive_read_guard.py:1-16`, `:113`, `:121`; denial text `sensitive_paths.py:229-237` |
| SubagentStop reads only the turn's stored contract, never the reply text. A missing or unfinalized contract sends the turn back (exit 2). | `hooks/adapters/claude_code.py:905-907` |
| A turn ends in one of six states; only COMPLETE is final. | `validator.py:908` |
| A contract never finalized stays marked with a `cut_reason`. | `gaia contract list --cut` |
| 12 hook events are registered, including PostToolUseFailure for Bash. | `hooks/hooks.json` |
| The workflow auditor has about twenty checks; the compliance score has six factors. | `workflow_auditor.py:445-661`; `transcript_analyzer.py:471-531` |
| Only the orchestrator and gaia-operator write curated memory; SubagentStop writes episodes. | `subagent_memory_write_guard.py:60-67`; `subagent_stop.py:263` |
| **Page 2's WHAT A SPECIALIST CARRIES, item 1 · identity:** each agent is one definition file whose frontmatter names it, says what it is for, lists its tools and its surface. | `agents/developer.md:2-5` (`name`, `description`, `tools`), `:12-13` (`routing.surface`) |
| **Item 2 · skills:** the skills a specialist loads are listed in its own frontmatter. | `agents/developer.md:21-28` (`skills:`) |
| **Item 3 · project context:** the sections it may read and write come from its frontmatter and are rendered into its contract block at birth. | `agents/developer.md:9-11` (`project_context_contracts`); `hooks/modules/context/kernel_builder.py:214-215`, `:243-244` (`can_read`, `can_write`) |
| **Item 4 · memory about you:** the executor-facing user preferences are injected with their full body. | `kernel_builder.py:56` (`MEMORY_HEADING = "# How the user works"`), `:388` (`build_memory_block`; `memory.type='user' AND audience='executor'`) |
| **Item 5 · its contract:** every specialist is born with its contract open: contract id, agent id, goal, role, surface. | `kernel_builder.py:54` (`KERNEL_HEADING = "# Your Contract"`), `:193-251` (`build_dispatch_kernel`) |
| All three blocks (contract, CLI, memory) are injected at SubagentStart, once the dispatch row is claimed. | `hooks/modules/agents/dispatch_lifecycle.py:88` (`build_kernel_context`); `kernel_builder.py:407-427` |
| **Dropped from the carried set:** its own copy of the repo. It is not injected at birth; a specialist creates it on demand when it writes (`gaia worktree create`). | agent-protocol skill, principle 12 |
| **Page 2 · the orchestrator never edits** (its box's description; page 3 of revision 5 drew it). | `agents/gaia-orchestrator.md:6` (`disallowedTools: [Glob, Grep, Edit, Write, NotebookEdit, …]`); `hooks/modules/orchestrator/delegate_mode.py:81` (`ORCHESTRATOR_ALLOWED_TOOLS`), `:367` (`check_delegate_mode`) |
| Planning objects and the approval hash chain. | `schema.sql:442-700`, `:1578-1600` |
| Contract kinds (not on a slide): `verifier`, `task_execution`, `investigation`, `memory`. A kind is a label; it does not change the form. | `hooks/modules/agents/dispatch_binding.py:96`, `:105-106`, `:509-543` |
| **Page 4 · "adapted to its specialty", in the code's terms:** the agent contract is adapted per agent in its data, not its form: its surface, its role (`primary` or `verifier`), and `can_read` / `can_write` from its own permission rows. The form it answers in is the same for every agent. | `tools/context/context_provider.py:191` (`build_kernel_sections`), `:244-249`; `hooks/modules/context/kernel_builder.py:193` (`build_dispatch_kernel`), `:214-215`, `:243-244` |
| **Page 4 · the project contract:** named sections per project, stored as `project_context_contracts`; each agent declares the sections it reads and writes in its own definition. | `project_context_contracts` (`contracts_loader.py`); `agents/developer.md:9-11` and the other agents' `project_context_contracts` frontmatter |
| **Page 4 · relation 1:** the agent contract names the sections; it does not carry their contents. The agent reads a section on demand, and no check against `can_read` was found on that read. | `bin/cli/context.py:366` (`_cmd_get_contract`) |
| **Page 4 · relations 2 and 3:** the agent contract can carry `update_contracts`; at the close each entry is checked against the agent's write permission before it is saved, and a rejected one is named. | `hooks/subagent_stop.py:176`; `hooks/modules/context/context_writer.py:376` (`process_update_contracts`), `:436`, `:127` (`validate_permission`) |
| **Numbers for page 6** (if its rewrite keeps them): approvals 583 approved, 52 rejected, 218 expired; commands 423 of 450 read-only (T0), 94.0%. | contract `a237b55dcc2f80ef4.3bea760ea6ba` (`gaia approvals stats`, `gaia metrics`) |
| rc.3 is released. Main's README says the plugin install alone is enough for Claude Code, with no npm step. | Gaia commit `aa6a3f6` (per the coordinator) |
| **Page 2 · 9 agents:** the orchestrator and 8 specialists, one definition file each. | `agents/*.md` in the Gaia repo: cloud-troubleshooter, developer, gaia-operator, gaia-orchestrator, gaia-planner, gaia-system, gaia-verifier, gitops-operator, platform-architect |
| **Page 5 · operational words.** Brief statuses draft, open, in-progress (drawn "in progress"), closed, archived; acceptance criteria and milestones pending, done, blocked; plans draft, active, closed, with a pause and its reason; managed plan changes and plan versions; tasks with `depends_on` and the criteria they cover; gates pending, pass, fail. | `gaia/store/schema.sql:442-615` (`briefs`, `acceptance_criteria`, `milestones`, `plans.paused_at`, `plan_versions`, `plan_changes`, `tasks`, `task_gates`), `:624-640` (`task_acceptance_criteria`, `task_dependencies`); `gaia plan --help` (`pause`, `resume`, `change`, `history`); `gaia task --help` (`cover`, `depend`, `gate`); `gaia schedule`, `gaia notifications` |
| **Page 5 · carry forward, open threads, anchors:** the three sections `gaia memory get-relevant --sections` reads back. | `gaia memory get-relevant --sections carry_forward\|anchor\|thread_open`; `gaia/store/reader.py:156` |
| **Page 5 · episodic words.** Events are `harness_events`; one episode per turn; the next session gets "Recent Session Events (last 24h)"; a turn never finalized keeps a `cut_reason`; `gaia history`, `gaia defects`; memory links `supersedes` and `graduated_to`; a timeline per curated row's lineage. | `hooks/modules/session/session_event_injector.py:114`; `gaia/store/schema.sql:936` (link kinds); `bin/cli/memory_story.py:6` (lineage, timeline); `gaia/contract/drafts.py:182` (backstop) |
| **Page 5 · project words.** Curated memory types are project, user, feedback, atom, decision, negative: "your rules" and "preferences" are the plain names for `user` rows, handed in at birth as "How the user works". | `gaia/store/schema.sql:851`; `hooks/modules/context/kernel_builder.py:56` |
| **Page 5 · execution words.** The six states; evidence fields `commands_run`, `key_outputs`, `open_gaps`; verification pass or fail; tiers T0–T3 and the never list; the approval hash chain; `compliance_score`; the workflow auditor. | `gaia/store/schema.sql:754` (states), `:1560` (approval statuses); `gaia/contract/drafts.py:497-501`; `hooks/modules/security/tiers.py:33-35`; `blocked_commands.py` (`is_blocked_command`); `gaia/store/reader.py:728` |
| **Page 5 · dropped words** (not in the code as a Gaia concept): "idea" (one prose hit), "owner" (only a workspace owner), "dead ends" (the curated type is `negative`, and the words never name it; the detail says "what did not work"). | scratch probe over `gaia/`, `bin/`, `hooks/`, `tools/` (`*.py`, `*.sql`, `*.json`), contract `af580a9b3c8da9e74.0ced47a78015` |
| **The palette:** four categorical box variants, `gold`, `violet`, `blue`, `clay`, one per memory on page 5 (operational, episodic, project, execution). Each is a border, a 10–16% tint and a kicker colour, defined in every palette block for light and dark. All 64 new pairs clear AA (title and description 4.5:1, kicker 4.5:1, border 3:1) in every palette and theme. | `index.html` tokens `--hue-*` and `.box.blue/.violet/.gold/.clay`; `engine/engine.js` `COMPONENT_VARIANT`; `engine/build-data.mjs` `COMPONENT_VARIANTS`; `tools/contrast-audit.cjs` `PAIRS`; `npm run contrast` |

---

## Page 1 · Why a team needs this (kept)

- **Altitude:** 1 · the idea.
- **Leave with:** "An AI-assisted team needs to share five things, the same way
  it shares a codebase."

```
┌──────────────────────────────────────────────────────────────────────────┐
│ THESIS · An AI-oriented way of working.                                  │
├─────────────────────────────┬──────────────┬─────────────────────────────┤
│ Every agent works its own   │ The session  │ You get a story, not a      │
│ way                         │ forgets      │ record, and changes nobody  │
│                             │              │ asked for                   │
├──────────────┬──────────────┼──────────────┼──────────────┬──────────────┤
│ WORKFLOWS    │ STANDARDS    │ KNOWLEDGE    │ OBSERVABILITY│ AUDIT        │
├──────────────┼──────────────┼──────────────┼──────────────┼──────────────┤
│ Routing      │ Skills       │ Context      │ Brief        │ Approvals    │
│ Structure    │ Outputs      │ Long memory  │ Plan         │ Evidence     │
│ Protocol     │ Conventions  │ Work left    │ Task         │ Compliance   │
│ Hooks        │ Tools        │ Episodic     │ Verification │ Anomalies    │
├──────────────┴──────────────┴──────────────┴──────────────┴──────────────┤
│ ── legend: width = the pillars that answer the pain ──                   │
└──────────────────────────────────────────────────────────────────────────┘
```
Chips lit: `the-human` → third pain, Hooks, Approvals. `memory` → second
pain, Conventions, Context, Long memory, Work left, Episodic.
`nothing-self-declared` → third pain, Work left, Task, Verification,
Evidence, Compliance. `double-reader` and `security` are unchanged.

- **Motion beat (20 s):** the thesis appears, then the three pains widen to
  the pillars that answer them. `memory`, `the-human`,
  `nothing-self-declared` light in turn. The legend separator is the
  transition to the map.
- **Form: dashboard.** The idea stands and diverges into five peers.
- **The layout move:** width is "which pillars answer this pain": 2 + 1 + 2.
- **Language notes:** "a story, not a record" uses "record" in its everyday
  sense; it is not a synonym for "contract".
- **Hands off to page 2:** the pains. What Gaia is, as its own answer, is the
  map on page 2.

## Page 2 · What Gaia is (the map)

- **Altitude:** 1 · the idea. The deck's map.
- **Leave with** (the orchestrator's own answer): "Gaia converses with you and
  coordinates the work, but never makes the changes itself. It hands them to
  specialists, checks what they deliver, and tells you the result. Anything
  that changes something real needs your signature."

```
┌───────────────────────────────────────────────────────────────────────┐
│                                  YOU                                  │
│                    ask in your own words · → p3                       │
├───────────────────────────────────────────────────────────────────────┤
│             ── ▼ converse · ▲ sign what changes something ──          │
├┄ GAIA · the orchestration layer · it converses with you and ┄┄┄┄┄┄┄┄┄┄┤
┆   coordinates the work, but never makes the changes itself            ┆
┆ ┌┄ THE ORCHESTRATOR ┄┄┄┄┄┄┐ ┌┄ WHAT GAIA MANAGES · its own CLI ┄┄┄┄┄┄┐ ┆
┆ ┆ one per session         ┆ ┆ Memory  │ Plans &  │ Contracts│Approv-┆ ┆
┆ ┆   Decides the WHAT      ┆ ┆  → p5   │ tasks →p5│   → p4   │als →p3┆ ┆
┆ ┆   never edits · → p3    ┆ ┆         │          │          │       ┆ ┆
┆ └┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘ └┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘ ┆
┆             ── ▼ delegates · ▲ returns a contract ──                  ┆
┆ ┌┄ THE SPECIALIST ┄┄┄┄┄┄┄┄┐ ┌┄ WHAT A SPECIALIST CARRIES ┄┄┄┄┄┄┄┄┄┄┄┄┐ ┆
┆ ┆ one per piece of work,  ┆ ┆ Iden- │Skills │Project│Memory │ Its   ┆ ┆
┆ ┆ 8 today                 ┆ ┆ tity  │       │context│about  │con-   ┆ ┆
┆ ┆   Does the HOW · → p3   ┆ ┆       │       │ → p4  │you →p5│tract→4┆ ┆
┆ └┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘ └┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘ ┆
└┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘
   ── hooks decide by rule · skills and agents follow · the CLI joins ──
```
Chips lit: `the-human` → YOU, Approvals. `memory` → THE ORCHESTRATOR,
Memory, Memory about you. `nothing-self-declared` → Plans & tasks,
Contracts, THE SPECIALIST, Its contract. `the-contract` → Contracts, THE
SPECIALIST, Its contract. `one-turn` → THE ORCHESTRATOR, THE SPECIALIST.
`deterministic` (the hooks) → Approvals, Contracts (a hook judges each
contract). `semantic` (a model) → THE ORCHESTRATOR, THE SPECIALIST,
Identity, Skills.

- **Motion beat (40 s, the video's anchor):**
  - YOU appears alone, outside Gaia, then the "converse · sign" separator
    draws.
  - The GAIA envelope draws around the rest, with the orchestrator's own line
    as its subtitle; hold for a full breath.
  - THE ORCHESTRATOR appears: it decides the WHAT.
  - WHAT GAIA MANAGES fills left to right, each box with its page: Memory,
    Plans & tasks, Contracts, Approvals.
  - The "delegates · returns a contract" separator draws; THE SPECIALIST
    appears: it does the HOW. WHAT A SPECIALIST CARRIES fills left to right,
    the same way WHAT GAIA MANAGES did: Identity, Skills, Project context,
    Memory about you, Its contract. The picture is complete; hold.
  - `deterministic` lights Approvals and Contracts, then `semantic` lights the
    orchestrator and the specialists.
  - The closing separator holds last. The camera closes on THE ORCHESTRATOR:
    the transition to page 3, the life of a request.
- **Form: mindmap, vertical.** The idea stands and converges on GAIA. The
  engine draws no arrows, so each labelled arrow of the orchestrator's
  picture is a separator with its text, between the rows it joins.
- **Sections and components:**
  - YOU, a full-width **centered** box, then its separator: outside GAIA.
  - GAIA, an **envelope** section. Its title is "GAIA"; its subtitle is "the
    orchestration layer" plus the orchestrator's own line. No thesis box.
    - A row of two envelopes: THE ORCHESTRATOR (one third, one **centered**
      box) and WHAT GAIA MANAGES (two thirds, four small boxes, each with its
      page in the kicker; its subtitle says it is managed through Gaia's own
      CLI).
    - The "delegates · returns a contract" separator.
    - A second row with the same shape: THE SPECIALIST (one third, one
      **centered** box, "Does the HOW") and WHAT A SPECIALIST CARRIES (two
      thirds, five small boxes, each with its page in the kicker; its
      subtitle says they are handed over the moment it is born). The five
      are what the dispatch hands a specialist at birth, each checked in the
      Gaia source (facts table). Its own copy of the repo is left out: a
      specialist makes it on demand, it is not born with it. Identity and
      Skills carry no pointer: no later page goes deeper into them since
      "What an agent is" was removed.
    - THE SPECIALIST's detail carries the agent line that page had: "9
      agents today: the orchestrator, and 8 specialists: developer ·
      platform-architect · gitops-operator · cloud-troubleshooter ·
      gaia-planner · gaia-verifier · gaia-operator · gaia-system. You can add
      your own." It is in the detail, not a separator, so the page keeps its
      height and still fits the first screen at 1920×1080.
  - Closing separator: "hooks decide by rule · skills and agents follow · the
    CLI joins". It replaces the three-halves row; the `deterministic` and
    `semantic` chips still light what is rule and what is model.
- **The layout move: the envelope is the boundary.** You are outside it;
  everything Gaia is sits inside. Inside, the two halves rhyme: each is an
  actor in one third beside the set it holds in two thirds, the orchestrator
  with what Gaia manages above the separator, the specialist with what it
  carries below it. Same box style, same kicker-as-page treatment, so the
  eye reads the two rows as one comparison. Navigation lives in the boxes
  (→ p3 … p5), not in a separate row. Project context points to page 4,
  where the project contract is drawn; Memory, Plans & tasks and Memory
  about you point to page 5, where the four memories are. At 1920×1080 the whole page fits the
  first screen; below 1440px the engine stacks each actor above its set.
- **Language notes:** the GAIA subtitle keeps the orchestrator's own words.
  "sign" is its verb; later pages say "approval" for the noun. The
  specialists return "a contract", the deck's one term, from this page on.
  The orchestrator decides the WHAT and the specialists do the HOW: the two
  capitalised words are the page's one contrast. "the CLI" is named in
  plain words, never as a command. The carried set says "Project context",
  never "memory", and "Memory about you" for the rules and preferences
  handed in; no heading, hook or field name reaches the face or the detail.
- **Hands off to page 3:** THE ORCHESTRATOR. Its life, one request, is
  page 3.

## Page 3 · THE ORCHESTRATOR · The life of a request, and its approvals (Jorge's favourite)

- **Altitude:** 3 · the real components.
- **Leave with:** "One turn has four events, the same every time: before any
  tool, handed its context, each tool call, at the close. Only the tool calls
  repeat. The turn can stop at two of them. Before any tool, a rule sorts
  every command, with no model involved: it runs, it waits for your yes, or it
  never runs."

```
┌─────────────────────────────────────────────────────────────────────────┐
│                THE ORCHESTRATOR · HOLDS THE CONVERSATION                │
├─────────────────────┬──────┬──────────┬──────────┬───────────┬──────────┤
│ SESSIONSTART        │      │1·PreTool │2·Subagent│3·PostTool │4·Subagent│
│ System context      │ USER │ Before   │ Handed   │ Each tool │ At the   │
│ Projects map        │PROMPT│ any tool │ its      │ call      │ close    │
│ Memory about you    │      │ (red)    │ context  │           │ (red)    │
│ Open threads        │      │          │          │           │          │
├─────────────────────┤      ├──────────┴──────────┼───────────┼──────────┤
│ ORCHESTRATION TOOLS │      │ ── once only ──     │ ↻ each    │ ── once  │
│ Memory management   │      │                     │ tool call │ only ──  │
│ Project context     ├──────┴─────────────────────┴───────────┴──────────┤
│ Briefs and plans    │ APPROVALS · inside "before any tool"              │
│ Contracts           ├────────────┬────────────┬────────────┬────────────┤
│ Approvals           │ A RULE     │ READ-ONLY  │ CHANGES    │ NEVER      │
│ Schedules           │ Sorts every│ Runs       │ Waits for  │ Never runs │
│                     │ command    │            │ your yes   │            │
├─────────────────────┴────────────┴────────────┴────────────┴────────────┤
│ ── red marks the only two events the turn can stop ──                   │
│ ── footnote: 12 hook events in total; this page draws 5 ──              │
└─────────────────────────────────────────────────────────────────────────┘
```
Chips lit: `deterministic` → the four events, Sorts every command, Runs,
Never runs. `one-turn` → the four events. `one-command` → Before any tool and
the four approval boxes. `the-human` → Before any tool, Waits for your yes.
`nothing-self-declared` → Before any tool, At the close. `memory` → Handed
its context, At the close, Waits for your yes (the approval chain).

- **Motion beat (60 s):** the orchestrator's rail appears, full width. The
  rails drop in, then the tall USER PROMPT rail. `one-turn` lights the four
  events in order, and the voice names them as the events of one turn. "↻ each
  tool call" draws under "Each tool call", with "once only" on either side.
  `deterministic` lights the row: every event is a hook. Then APPROVALS draws
  under the events; `one-command` lights "Before any tool" and "Sorts every
  command" together, and the three outcomes appear left to right in rising
  risk. `the-human` lights "Waits for your yes": one standard approval message,
  every time. The red "At the close" box is the transition to page 4.
- **Form, sections, layout move:** the top band of `s-arquitectura`, kept
  whole where Jorge likes it: the left column of Gaia's own layer, the tall
  USER PROMPT rail, the red marking of the two stop events, and the "once only
  · ↻ each tool call · once only" row. The changes of revision 5:
  - the four boxes are titled as events ("Before any tool", "Handed its
    context", "Each tool call", "At the close"); the hook names ride the
    kickers ("1 · PreToolUse" … "4 · SubagentStop") and the details;
  - the Human-in-the-loop / BashValidator band became APPROVALS, titled as
    what "before any tool" decides, with four boxes: the rule, and its three
    outcomes. It carries page "You sign"'s story; the tiers, the never list,
    the single-use 30-minute window and the approval chain are in the boxes'
    details with the facts-table sources;
  - the approval message is named ("one standard approval message") and not
    detailed on the face.
- **Language notes:** the title keeps "request", because the page starts at
  your prompt. "event" is the plain name; hook names are the level-3
  identifiers, in kickers and details. T0–T3 are only in detail.
- **Hands off to page 4:** At the close / SubagentStop. What it judges is the
  agent contract: page 4, CONTRACTS.

## Page 4 · CONTRACTS · Every agent answers with a contract

Revision 6: this page was rewritten in a parallel change (the staircases),
and the section below is still revision 5's. At integration the six status
values were laid out two across instead of one per rail (three across made
NEEDS_VERIFICATION touch its rail edge). The page is still about 1600px tall:
the flow and the relations row are above the fold at 1920, the staircases
below it.

- **Altitude:** 4 · a mechanism.
- **Leave with:** "The orchestrator sends the work; Gaia's engine injects an
  agent contract with this agent's own permissions; the agent does the work
  and answers in it; the engine validates it by rule, never the prose; the
  orchestrator keeps going from it. The agent contract names what of the
  project contract the agent may read and write, and its updates are checked
  before they are saved."

```
┌─ POINT 2 · CONTRACTS · EVERY AGENT ANSWERS WITH A CONTRACT ───────────┐
│ THE ORCHESTRATOR     │ GAIA'S ENGINE          │ THE AGENT             │
│ 1 · SENDS            │ 2 · INJECTS ►          │ 3 · RECEIVES          │
│ The work             │ A contract for this    │ Does the work         │
│                      │ agent                  │                       │
│ 6 · READS            │ ◄ 5 · VALIDATES        │ ◄ 4 · ANSWERS         │
│ Keeps orchestrating  │ By rule, not the prose │ In a structured form  │
├──────────────────────┴────────────────────────┴───────────────────────┤
│ TWO KINDS OF CONTRACT                                                 │
│ 1 · AT DISPATCH      │ 2 · IN ITS ANSWER      │ 3 · AT THE CLOSE      │
│ Names what it may use│ Carries updates        │ Checked, then saved   │
├──────────────────────────────────┬────────────────────────────────────┤
│ PROJECT CONTRACT                 │ AGENT CONTRACT                     │
│ ┆ EACH PROJECT                   │ ┆ STATUS                           │
│ ┆ ┆ project_identity · stack     │ ┆ ┆ COMPLETE · NEEDS_VERIFICATION  │
│ ┆ ┆ environment · git            │ ┆ ┆ APPROVAL_REQUEST · NEEDS_INPUT │
│ ┆ ┆ architecture_overview        │ ┆ ┆ BLOCKED · IN_PROGRESS          │
│ ┆ ┆ application_services         │ ┆ EVIDENCE                         │
│ ┆ ┆ infrastructure · …topology   │ ┆ ┆ seen · done                    │
│ ┆ ┆ gitops_configuration         │ ┆ VERIFICATION · OPEN GAPS · REACH │
│ ┆ ┆ cluster_details              │ ┆ APPROVAL · PROJECT UPDATES       │
└──────────────────────────────────┴────────────────────────────────────┘
```
Each `┆` is one nested envelope, the staircase's indent; the sketch folds
the rails in pairs to fit 80 columns, and the page draws one rail per key.
Chips lit: `the-contract` → INJECTS, RECEIVES, ANSWERS, VALIDATES, READS.
`semantic` → SENDS, READS, RECEIVES, ANSWERS. `deterministic` → INJECTS,
VALIDATES, AT DISPATCH, AT THE CLOSE. `project-contract` → INJECTS and the
three relation boxes. `nothing-self-declared` → VALIDATES, READS, AT THE
CLOSE. `next-move` → ANSWERS, READS. `the-human` → ANSWERS, READS (an answer
can be an approval request).

- **Motion beat (30 s):** the POINT 2 rail appears. The three actors draw left
  to right and the flow plays by its kicker numbers, 1 to 6: sends, injects ►,
  receives, ◄ answers, ◄ validates, reads. `deterministic` lights the engine
  column; focus holds on "the reply text is never read". The relation row
  appears, then the two staircases unfold, level by level. `project-contract`
  lights the relations. The transition to page 5 is "is it really done?":
  where the verification and its verdict are kept.
- **Form: dashboard, read top-down.** A flow across three actors, then the two
  structures the flow moves.
- **Sections and components:**
  - The POINT 2 rail.
  - Three envelopes, THE ORCHESTRATOR, GAIA'S ENGINE, THE AGENT, two boxes
    each, aligned in two rows so the first row runs left to right and the
    second back.
  - TWO KINDS OF CONTRACT: the three relations in one row, so they stay above
    the fold, then the two staircases side by side. Each staircase is a top
    rail and nested envelopes of rails, one level per envelope; keys only, no
    raw values. The six states are the possible values of `status`.
  - Rails carry no detail, so each key's one-line meaning is in a box's
    detail: agent-contract keys in VALIDATES, project-contract sections in
    AT DISPATCH.
  - The per-agent stack, THE FORM, THE STATE and the separate JUDGE box of
    revision 4 are gone: the six states live in the staircase, JUDGE lives in
    the engine column.
- **The layout move: flow, then shape.** What happens across three actors,
  then the two things that happen to it, drawn as the shape of real contracts.
- **Language notes:** "agent contract" and "project contract" are the two
  named kinds on this page. The engine column is titled "GAIA'S ENGINE", not
  "deterministic"; the `deterministic` chip lights it. "Adapted to its
  specialty" is said the way the code does it: its surface, its role, and what
  it may read and write (facts table). The project sections are real names
  from the agents' definitions, a representative ten.
- **Hands off to page 5:** VALIDATES and READS, "is it really done?": where
  the verification is kept.

## Page 5 · What Gaia keeps (NEW in revision 6)

- **Altitude:** 4 · the mechanisms, said in Gaia's own words.
- **Leave with:** "Gaia keeps four memories, each answering one question:
  what are we doing and what is still open, what happened and when, what we
  know about the project and about you, and what we executed and what it
  produced. One piece of work leaves a trace in all four. You decide what is
  curated; the engine records the rest."

```
┌───────────────────────────────────┬───────────────────────────────────┐
│ brief │ accept. │ plan  │ plan    │ sessions│ turns │ hooks │ events  │
│       │ criteria│       │ change  │         │       │       │         │
├───────┼─────────┴───────┼─────────┼─────────┼───────┴───────┼─────────┤
│ pause │ MEMORY 1 OF 4   │ CARRY   │ LAST 24H│ MEMORY 2 OF 4 │ timeline│
│       │ Operational mem.│ FORWARD │         │ Episodic mem. │         │
│       │ What are we ... │         │         │ What happened?│         │
├───────┼─────────┬───────┼─────────┼─────────┼───────┬───────┼─────────┤
│blocked│ GATES   │PENDING│ TASKS   │ EPISODES│LINEAGE│ cut   │anomalies│
│       │         │       │         │         │       │ turns │         │
├───────┼─────────┼───────┼─────────┼─────────┼───────┼───────┼─────────┤
│ANCHORS│DECISIONS│ prefs │ SECTIONS│CONTRACTS│VERDICT│ PASS  │ evidence│
├───────┼─────────┴───────┼─────────┼─────────┼───────┴───────┼─────────┤
│ work- │ MEMORY 3 OF 4   │ YOUR    │APPROVALS│ MEMORY 4 OF 4 │ open    │
│ space │ Project memory  │ RULES   │         │ Execution mem.│ gaps    │
├───────┼─────────┬───────┼─────────┼─────────┼───────┬───────┼─────────┤
│ scan  │ repos   │can rd │can write│ T3      │COMPL. │BLOCKED│audit tr.│
├───────┴─────────┴───────┴─────────┴─────────┴───────┴───────┴─────────┤
│      ── you decide what is curated · the engine records the rest ──   │
└───────────────────────────────────────────────────────────────────────┘
```
Words in CAPITALS are chip members, each on the edge that faces the sun it
connects to. The four `one-task` members sit in the four corners that face
the page centre.

The four word lists, 10 each, in reading order (top row, the two sides of
the middle row, bottom row). No word is longer than 11 characters, what a
word cell holds at 1920 (`check` TEXT, tightest: "preferences", 11 of 11):

| Sun (colour) | Top | Left · Right | Bottom |
|---|---|---|---|
| Operational (gold) | brief · acceptance criteria · plan · plan change | pause · carry forward | blocked · gates · pending · tasks |
| Episodic (violet) | sessions · turns · hooks · events | last 24h · timeline | episodes · lineage · cut turns · anomalies |
| Project (blue) | anchors · decisions · preferences · sections | workspace · your rules | scan · repos · can read · can write |
| Execution (clay) | contracts · verdict · pass · evidence | approvals · open gaps | T3 · COMPLETE · BLOCKED · audit trail |

The rest, in the question box's detail: operational milestones, draft, open,
in progress, open threads, dependencies, covers, schedules, notifications,
next action; episodic SessionStart, SubagentStart, PostToolUse, SubagentStop
(each longer than a cell), transcript, defects, history, backstop,
compaction, supersedes, graduated; project stack, git, architecture,
services, project identity, environment, infrastructure, context at
dispatch, feedback, and "what did not work" (type negative); execution
verification and APPROVAL_REQUEST (both longer than a cell), NEEDS_*,
IN_PROGRESS, commands run, key outputs, approval chain, T0–T2, never,
compliance score, metrics, worktree.

Chips lit:
- `one-task` "one task" → tasks, contracts, episodes, sections.
- `the-human` "who decides?" → gates, approvals, T3, your rules, decisions.
- `nothing-self-declared` "is it really done?" → pending, verdict, pass,
  lineage. "verification" was the fourth member; at 12 characters it breaks
  in its cell, so "pass", the gate result it produces, stands in.
- `what-comes-back` "what comes back?" → carry forward, anchors, last 24h.

`memory` is not used: every box on the page would be a member, so it would
light everything and say nothing.

- **Motion beat (50 s):** the four question boxes appear one by one, in their
  colours, each read aloud as its question. The rings fill around them.
  `one-task` lights the four inner corners at once: one piece of work, four
  traces. Then `the-human`, `nothing-self-declared` and `what-comes-back`
  light in turn, each crossing the edge between two suns. The separator draws
  last, and it is the transition to page 6.
- **Form: dashboard of four suns.** The idea stands and has four peers; each
  peer converges on its question. The engine cannot radiate, so each sun is
  a 4×3 grid whose middle row holds the question box merged 2×1.
- **Sections and components:**
  - Four plain sections of 4 columns and 3 rows. Each holds one question box
    (span 2 in the middle row, **centered**, kicker "MEMORY n OF 4", title
    the memory's name, description its question, and the page's only
    details) and 10 word boxes in the memory's colour. With two suns per row
    the plane has 8 cells across, each 153px wide at 1920.
  - One full-width separator: "you decide what is curated · the engine
    records the rest".
- **The layout move: the edge is the relation.** A word that another memory
  also answers sits on the edge that faces that memory, so a lit chip reads
  as a bridge between two suns.
- **Language notes:** the word boxes are title-only, the one deliberate
  exception to the slot rules: each is one real Gaia word, checked in the
  code (facts table), and the question box says what they mean together.
  The words are Gaia's own identifiers, so hook and state names appear on the
  face at this level-4 page. "Project memory" is the one place project
  context is called memory (glossary). "your rules" and "preferences" are the
  plain names for curated `user` rows. The colours mean only "which memory";
  each question box names its colour's memory.
- **Fit:** the first sketch (5×5 suns, 16 words) needed 10 rows of 130px and
  8-character cells, so Jorge chose 4×3 suns. Measured at 1920×1080: six rows
  and the separator fit the first screen, and every word fits its cell. Below
  1440px the engine stacks the four suns, so at 1440×900 the first sun and
  half of the second are above the fold.
- **Hands off to page 6:** "you decide". Page 6 is how to start.

## Page 6 · Install it, ask it

Revision 6: this page was rewritten in a parallel change (install, what it
grows into, a skeptic's questions); the section below is still revision 5's
page 8. At integration START HERE and the database row were fixed to close
as rectangles. The page is about 1210px tall: START HERE, the prompt and the
numbers are above the fold at 1920, the growth bars and the objections run
below it.

- **Altitude:** back to 1.
- **Leave with:** "On my machine: 583 yes, 52 no, and 94% of commands only
  read. Installing it is one plugin, and the first thing to ask is what it
  is."

```
┌───────────────────────────────────────────────────────────────────────┐
│                            BACK TO THE MAP                            │
│           Gaia converses with you and coordinates the work,           │
│                  but never makes the changes itself.                  │
├─────────────────┬─────────────────┬─────────────────┬─────────────────┤
│       YOU       │      GAIA       │WHAT GAIA MANAGES│ THE SPECIALISTS │
│    you sign     │ decides the what│ memory, plans,  │ do the how, a   │
│                 │                 │ contracts, appr.│ contract each   │
│     page 4      │     page 4      │   pages 4–7     │   pages 3, 5    │
├─────────────────┴─────────────────┼─────────────────┴─────────────────┤
│ gaia approvals stats              │ gaia metrics                      │
│ 583 yes · 52 no · 218 expired     │ 94% read-only                     │
│ you said yes or no                │ most commands only read           │
├───────────────────────────────────┴───────────────────────────────────┤
│ INSTALL · /plugin marketplace add metraton/gaia                       │
│           /plugin install gaia@gaia-marketplace                       │
│ FIRST PROMPT · what is Gaia, and what can you do for me?              │
├───────────────────────────────────────────────────────────────────────┤
│   ── hooks decide by rule · skills and agents follow · CLI joins ──   │
└───────────────────────────────────────────────────────────────────────┘
```
Chips lit: `the-human` → YOU, approvals number. `memory` → WHAT GAIA
MANAGES, GAIA. `nothing-self-declared` → THE SPECIALISTS, approvals number.
`deterministic` → YOU (your signature is enforced by a hook), read-only
number. `semantic` → GAIA, THE SPECIALISTS.

- **Motion beat (35 s):**
  - The BACK TO THE MAP rail and the thesis appear, the same words as page 2.
  - The four map boxes appear in one row, each with the page that opened it.
    The three thread chips light across them one last time.
  - The two numbers appear, big.
  - The INSTALL band appears, then the FIRST PROMPT line.
  - The closing separator names Gaia's halves. `deterministic` and `semantic`
    light in turn.
  - The final frame holds on the FIRST PROMPT.
- **Form: comparison.** The map again, now measured, then how to start.
- **Sections and components:**
  - The rail and the thesis, **centered**.
  - The map in one row: four **centered** small boxes, page 2's YOU, GAIA,
    WHAT GAIA MANAGES and THE SPECIALISTS, each with its page.
  - The numbers (**reference** mode): two boxes. The kicker is the command,
    the title is the number, and the description has 6 words or fewer:
    - `gaia approvals stats` · 583 yes · 52 no · 218 expired · "you said yes
      or no";
    - `gaia metrics` · 94% read-only · "most commands only read".

    The turn counts are dropped: the double hook registration before rc.3
    inflated them.
  - Install (**procedure** mode):
    - `/plugin marketplace add metraton/gaia`, then `/plugin install
      gaia@gaia-marketplace`, for Claude Code;
    - OpenCode is the second host;
    - rc.3 is released and main's README says so: the plugin install alone is
      enough, with no npm step;
    - then the first prompt.
  - The closing separator: "hooks decide by rule · skills and agents follow ·
    CLI joins".
- **The layout move: the map folded into one row.** The same four parts as
  page 2's map, now side by side, each pointing to the page that explained it. The
  deck ends where it began, with the numbers under it.
- **Language notes:** commands appear on this level-1 page in the numbers and
  install bands, which are reference and procedure, where the command is the
  content. "you sign" keeps the map's verb. The FIRST PROMPT box is a
  deliberate exception to the 2–4-word title rule: its title is the prompt
  itself, verbatim, "what is Gaia, and what can you do for me?", because it is
  the final frame and the step Gerry takes.
- **The close:** the live install, then the first prompt. Gaia explains itself
  live.

## Backup · Down to the code (after page 6, for questions only)

- **Altitude:** 5 · the code. Not in the video.
- **Leave with:** "Every moment of the turn is a hook, and every hook is
  ordinary code you can read."

```
┌───────────┬───────────┬───────────┬───────────┬───────────┬───────────┐
│ ON DEMAND │ SESSION   │ BORN      │ RECEIVES  │ WORKS     │ CONTRACT  │
│ the CLI   │ START     │PreToolUse │SubagtStart│PostToolUse│SubagtStop │
├───────────┼───────────┼───────────┼───────────┼───────────┼───────────┤
│ memory    │ build_    │ Routing   │ validate_ │ one line  │ evaluate_ │
│ contract  │ context_  │ Delegate  │ permission│ per run   │ contract_ │
│ brief     │ payload   │ mode      │           │           │ gate      │
│ plan, task│ build_    │ expected_ │           │           │ compute_  │
│ approvals │ session_  │ skill_for_│           │           │ compliance│
│ schedule  │ events    │ path      │           │           │ _score    │
│ context   │           │           │           │           │           │
├───────────┴───────────┴───────────┴───────────┴───────────┴───────────┤
│ AUDIT · hashed chain · event stream · workflow_auditor: about         │
│ twenty checks · Stop sweeper                                          │
└───────────────────────────────────────────────────────────────────────┘
```
Chips lit: `deterministic` → every module box and the AUDIT band; the per-hook
chips and `the-judge` as in revision 3.

- **Form, density, names, counts:** as in revision 3.
- **Language notes:** the one page where function names sit on the face of
  the boxes. The per-hook chip `porton` is labelled "the checkpoint", because
  "gate" belongs to planning only. Its column headers keep the revision-4
  moment names (BORN … CONTRACT); page 4 now names the same moments as events.
- **Code corrections found at build** (the sketch above predates them; the
  page follows the code):
  - `build_session_events` runs at dispatch (`tool_policy.py:472`), not in
    SessionStart.
  - SessionStart runs `build_session_context` (`session_manifest.py:1218`),
    not `build_context_payload`.
  - `validate_permission` runs at close (`subagent_stop.py:176`), not in
    SubagentStart.
  - The "Routing" box is `build_kernel_sections`, because no hook calls
    `classify_surfaces`.

---

## Pages removed

| Page | Decision | Where its useful content goes |
|---|---|---|
| Backup · The vision (`s0-vision`) | at build: remove the entry from `document.yaml` and delete its file | Covered by page 1; the two hosts go to page 8. |
| Backup · Visibility (`s1-visibilidad`) | removed | Page 4's approval details, page 6's PASSES ON, page 7. |
| Backup · Standards (`s2-estandares`) | removed | Page 3's box details. |
| It explains itself (`s5-se-explica`, hidden) | removed | Page 2 is the self-explanation; page 8's first prompt shows it live. |
| 5 · You sign (`p5-you-sign`) | revision 5: merged into page 4 and its file deleted | Page 4's APPROVALS band: the rule, its three outcomes, the approval message named; tiers, never list, 30-minute window and approval chain in the details. |
| 3 · What an agent is (`p3-whos-who`) | revision 6: removed, file deleted | Page 2's symmetric map carries the anatomy; the agent names are in THE SPECIALIST's detail. |
| 6 · It checks (`p7-it-checks`) | revision 6: removed, file deleted | Page 5's operational memory (brief, plan, tasks, gates) and execution memory (verification, verdict); the cross-check stays on page 4's VALIDATES. |
| 7 · Memory (`p8-memory`) | revision 6: removed, file deleted | Page 5, which splits its two kinds into four memories and keeps its closing line as "you decide what is curated · the engine records the rest". |

## Engine limits this design respects

- No edges: every relation is a chip or `order`. The map's labelled arrows are
  separators with text. Grid only; page 5's suns are 5×5 grids with a merged
  centre, not a radial burst.
- Chips need at least 2 members per page; every chip above lists them. Where
  a chip has a single member on a page (`semantic` on 3, `memory` and
  `the-judge` on 4), it is left off and the Language notes say so; `memory`
  is left off page 5 for the opposite reason, every box would be a member.
- Rails carry no chips and no detail. Page 4's staircase keys are rails, so
  their meanings live in the details of the boxes that handle them. For the
  same reason page 5's words are boxes, not rails: they carry chips.
- A spacer indent in a leaf grid leaves an interior hole once the grid
  collapses to 2 tracks (900px), so page 4's staircase indents by nesting
  envelopes instead. Page 5's suns show the same effect at 900px: the model
  counts 19 of 20 cells (a declared taper, not a failure).
- `rowspan` works only on a level made only of components, so page 3's USER
  PROMPT rail and page 5's four question boxes each sit in a components-only
  section.
- Text caps: kicker tokens must fit the cell; descriptions clamp at 3 visual
  lines. A rail title is one unbreakable token when it is a snake_case name:
  it must fit its rail's width, and no gate checks that yet.
- Revision 6's one engine change: four categorical component variants,
  `blue`, `violet`, `gold`, `clay` (tokens `--hue-*` in every palette block,
  classes `.box.<hue>` in `index.html`, `COMPONENT_VARIANT` in
  `engine/engine.js`, `COMPONENT_VARIANTS` in `engine/build-data.mjs`, 16
  pairs per palette and theme in `tools/contrast-audit.cjs`). It is not in the
  diagram-builder seed yet; the drift stays tracked in memory row
  `project_deck_gate_ahead_of_seed_unported`.
- Rows are a fixed `--cell-h` (130px), asserted uniform by both gates, so a
  page cannot make its rows denser: a 1920×1080 screen holds six rows plus a
  separator. That is why page 5's suns are 4×3.
- A leaf grid's columns are clamped to what its content can fill (single
  cells, or the widest span), so a grid of only wide merges collapses: page
  6's START HERE was authored at 8 columns with spans of 3 and rendered at 3
  tracks, with a hole beside the prompt. It is now 3 columns of half-slot
  pairs with the prompt at rowspan 2.

## Claims still to check before the build

- Page 4's "what happens next" for each state follows the
  `agent-contract-handoff` and `agent-protocol` skills, not a code line.
- Page 5's words were matched by name in the code (facts table); the probe
  counted identifiers, it did not read what each one does. "timeline" is the
  memory story's timeline, and "backstop" is the close of a cut turn, both
  read at their first hit only.
- `PRESENTATION.md` is still revision 5.
