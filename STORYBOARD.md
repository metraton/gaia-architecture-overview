# GAIA deck — storyboard for the talk to Gerry

Status: **revision 4, on the page structure Jorge approved.** No page YAML
changes until this storyboard is approved. `PRESENTATION.md` is rewritten
against it.

History in one line each:
- Revision 2 applied a code-checked review (contract
  `a041a86a42d7aa708.a51d61b0bc5b`).
- Revision 3 made the language rules explicit and audited every page.
- Revision 4 builds the nine-page structure Jorge approved. It opens on the
  orchestrator's own answer as a level-1 map (page 2), zooms into the cast
  (page 3), and then goes one point of the map deeper per page (pages 4–8).
  It closes by returning to the map (page 9).
  - The blocks are simpler and more varied: centered boxes, stacks, nested
    sections and rails.
  - Gaia's two halves are named once, on the map: **deterministic** hooks and
    **semantic** skills and agents, joined by **the CLI**.

## Level-1 source text: the orchestrator's own answer

The session began with Jorge asking the orchestrator "what are you and what
do you do?". Its answer, translated to English, is the deck's level-1 source.
Page 2 carries it as close to verbatim as the slots allow, and pages 4–8 each
go one level deeper into one of its five points.

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
| 1 | **It holds the conversation.** It understands what you want, decides the route, shows it to you before starting, and is the only one that keeps the thread end to end. It does not edit files, by design. | page 4 · The life of a request |
| 2 | **Specialists do the work**, each in its field. Each dispatch is born clean, owns one task, and ends with a contract: a record of what was done and with what evidence. | page 6 · Contracts |
| 3 | **It checks before telling you.** It reports from that record and from what it opens itself, not from what the specialist says it did. It separates what it saw, assumed and judged. | page 7 · It checks |
| 4 | **You sign what changes something.** A push, an apply or a delete waits until you approve it, after you have seen exactly what will happen. | page 5 · You sign |
| 5 | **Memory outlives the session:** your rules, your preferences, and what is pending per project. | page 8 · Memory |

Why it is built this way: so that every result has evidence and an owner, and
nothing that changes your systems happens without your permission.

The deeper pages run in the order of one turn's life (points 1, 4, 2, 3, 5).
Each opens with a rail "POINT n · …" that names its box on the map, so the
reader can always answer "which part of the first picture am I inside?".
Page 3 is a zoom into two of the map's boxes, and its rail says "ZOOM".

## Language and labels: the rules every page follows

These rules come from the `technical-explanation` skill (altitude, register,
one term per concept, one mode per section) and the `diagram-builder`
doctrine and glossary (slots, rails, separators, chips, the hole that speaks).

| Rule | What it means on this deck |
|---|---|
| **Register per altitude** | Level-1 pages (1, 2, 9) use common nouns and the plain register; page 3 (level 2) names roles and agents. Real identifiers (hook names, state names, CLI commands, field names) start at level 3. Function names appear only in a box's detail or on the backup code page. |
| **One term per concept** | **contract**: the form a specialist fills and Gaia stores. Never "handoff", "record", "row", "envelope" or "report" in front of the audience; the one exception is page 2, which quotes the orchestrator's "verifiable report". **approval**: your yes to one exact command; never "grant" or "consent token". "Sign" is allowed only as the plain verb for giving an approval, as the orchestrator's answer says it (pages 2, 5, 9). **turn**: one specialist's life, from dispatch to close. **request**: what you ask, one prompt. **specialist**: one of the 8 agents that do the work; never "subagent" (except Claude Code's feature name and the hook names). **agent**: the orchestrator or a specialist. **orchestrator**: the one agent you talk to; on the level-1 map it is simply "Gaia". **gate**: a task's pass/fail check in a plan, and only that. **episode**: the automatic trace of one turn. **curated memory**: what the orchestrator writes on purpose and Gaia reads back. **project context**: what Gaia knows about your workspace, from `gaia scan`, handed to each specialist at dispatch; never called "memory". **hook**: code the host runs at a fixed moment. **skill**: written instructions an agent loads. **deterministic**: decided by a rule in code, the same answer every time, no model involved. **semantic**: done by a model following instructions. |
| **Kicker** | A verb or a step marker ("HOLDS", "1 · YOU"), or a short component name ("PreToolUse"). Never the thing itself; that is the title's job. |
| **Title** | The thing, in 2–4 words. |
| **Description** | One line, few words: what it does or why it matters. |
| **Detail** | The mechanics, identifiers, function names and evidence, shown on click. |
| **Rail** | A title-only band that names a layer, a map position ("POINT 4 · YOU SIGN") or a group. Carries no chip and no detail. A vertical rail labels a stack beside it. |
| **Separator** | A relation or a rule, stated in the line's text. On the map it stands for a labelled arrow. |
| **Centered box** | The `centered` treatment, for what a page turns around (the map's actors, page 5's hook, page 8's MEMORY), or for a row of equal small headers. |
| **Chip vs order vs width vs empty cell** | A **chip** lights a relation that crosses sections, and needs at least 2 members on the page. **Order** carries a sequence inside one section. **Width** carries "belongs to", reach or importance. An **empty cell** states an absence, and it must caption itself: a separator with text, never a bare `spacer`. |
| **Chip labels** | Phrased as the question or relation they answer, the same wording on every page where the key repeats. |
| **One mode per section** | Concept, procedure, reference or decision, never blended. Every section is concept except page 9's numbers (reference) and install (procedure). |

Chip keys and labels, fixed for the whole deck:

| Key | Label | Pages |
|---|---|---|
| `the-human` | who decides? | 1–9 |
| `nothing-self-declared` | is it really done? | 1–9 |
| `memory` | what do we remember? | 1–9 |
| `deterministic` | a rule decides | 2–9 |
| `semantic` | a model follows instructions | 2, 3, 6, 7, 9 |
| `the-contract` | one contract, out and back | 2, 3, 6, 7 |
| `one-turn` | one turn | 2, 3, 4 |
| `one-command` | one command | 5 |
| `next-move` | what happens next? | 6 |
| `one-task` | one task | 7 |
| `the-judge` (was `el-juez`) | the judge | 6, backup |
| `changes-things`, `plans-and-checks`, `looks-after-gaia` | who changes things? / who plans and checks? / who looks after Gaia? | 3 |
| `ruteo`, `porton`, `despacho`, `entrega`, `contabilidad`, `sesion-abre` | unchanged from today's deck | backup |

## The story in one breath

A team that works with AI agents needs five shared things (page 1). Gaia's
own answer to "what are you?" is the map: it converses with you and
coordinates the work, but never makes the changes itself. It is hooks that
decide by rule and skills and agents that a model follows, joined by its CLI
(page 2). Zooming into the map shows the cast: one orchestrator, 8
specialists (page 3). Then one point of the map per page:
- it holds the conversation, through one turn's fixed life (page 4);
- you sign what changes something, and a hook decides by rule before anything
  runs (page 5);
- every specialist answers with its own contract (page 6);
- it checks before telling you: planning, cross-checks, and what travels
  between steps (page 7);
- memory outlives the session, in two kinds (page 8).

The talk closes back on the map, with two real numbers, the install and the
first prompt (page 9).

Each page is where the next one is stored: page N always has one box that
page N+1 opens up. That box is named in each page below as **"Hands off to"**.

The deck as one strip, nine pages plus the backup, each with its altitude:

```
┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐
│p1    │►│p2    │►│p3    │►│p4    │►│p5    │►│p6    │►│p7    │►│p8    │►│p9    │
│Why   │ │Map   │ │Who   │ │Life  │ │Sign  │ │Record│ │Checks│ │Memory│ │Start │
│lvl 1 │ │lvl 1 │ │lvl 2 │ │lvl 3 │ │lvl 4 │ │lvl 4 │ │lvl 4 │ │lvl 4 │ │lvl 1 │
└──────┘ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘
                                                  backup, after p9:
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
| 1 · the idea | why a team needs this; what Gaia is; how to start | 1, 2, 9 |
| 2 · the picture | who does what; roles and agents, no file names | 3 |
| 3 · the real components | hooks, agents, CLI groups, by their real names | 4 |
| 4 · the mechanisms | how one point of the map works from start to end | 5, 6, 7, 8 |
| 5 · the code | modules and functions | backup |

## Timing

**The talk, about 15 minutes.** Pages 2 and 3 get about a minute each; the
depth time goes to pages 4–8.

| # | Page | Marker | Level | Form | Minutes |
|---|---|---|---|---|---|
| 1 | Why a team needs this | — | 1 | dashboard | 1.5 |
| 2 | What Gaia is | the map | 1 | mindmap, vertical | 1 |
| 3 | Who's who | ZOOM · GAIA AND THE SPECIALISTS | 2 | comparison, two groups | 1 |
| 4 | The life of a request | POINT 1 · HOLDS THE CONVERSATION | 3 | dashboard (kept) | 2.5 |
| 5 | You sign | POINT 4 · YOU SIGN | 4 | flow, left to right | 2 |
| 6 | Contracts | POINT 2 · EVERY AGENT ANSWERS WITH A CONTRACT | 4 | dashboard, top-down | 2 |
| 7 | It checks | POINT 3 · IT CHECKS BEFORE TELLING YOU | 4 | flow, phases as sections | 2 |
| 8 | Memory | POINT 5 · MEMORY OUTLIVES THE SESSION | 4 | mindmap (star) | 1.5 |
| 9 | Install it, ask it | BACK TO THE MAP | 1 | comparison | 1.5 |
| backup | Down to the code | — | 5 | dashboard | 0 (questions only) |
| | | | | | **15** |

**The video, at most 4:30.** This is the base architecture video; videos and
articles on each part come later. The map on page 2 anchors it: it opens the
video right after page 1, and page 9 returns to it.

| # | Page | Seconds |
|---|---|---|
| 1 | Why | 20 |
| 2 | The map (the anchor) | 40 |
| 3 | Who's who | 20 |
| 4 | The life of a request | 40 |
| 5 | You sign | 25 |
| 6 | Contracts | 30 |
| 7 | It checks | 30 |
| 8 | Memory | 20 |
| 9 | Back to the map | 35 |
| | **Total** | **260 s (4:20)** |

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
| Planning objects and the approval hash chain. | `schema.sql:442-700`, `:1578-1600` |
| Contract kinds (not on a slide): `verifier`, `task_execution`, `investigation`, `memory`. | `hooks/modules/agents/dispatch_binding.py:96`, `:105-106`, `:509-543` |
| **Numbers for page 9:** approvals 583 approved, 52 rejected, 218 expired; commands 423 of 450 read-only (T0), 94.0%. | contract `a237b55dcc2f80ef4.3bea760ea6ba` (`gaia approvals stats`, `gaia metrics`) |
| rc.3 is released. Main's README says the plugin install alone is enough for Claude Code, with no npm step. | Gaia commit `aa6a3f6` (per the coordinator) |

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
│           Gaia converses with you and coordinates the work,           │
│                  but never makes the changes itself.                  │
├───────────────────────────────────────────────────────────────────────┤
│                                  YOU                                  │
│            ── ▼ converse · ▲ sign what changes something ──           │
├───────────────────────────────────────────────┬───────────────────────┤
│                      GAIA                     │ MEMORY                │
│      holds the conversation, never edits      │ Gaia reads and        │
│                                               │ writes it             │
├───────────────────────────────────────────────┴───────────────────────┤
│           ── ▼ delegates · ▲ returns a verifiable report ──           │
├───────────────────────────────────────────────┬───────────────────────┤
│                   SPECIALIST                  │ YOUR SYSTEMS          │
│            8 of them, one per field           │ the specialist        │
│                                               │ acts on them          │
├───────────────────────────────────────────────┴───────────────────────┤
│ HOW IT WORKS · five points, each one a later page                     │
├─────────────┬─────────────┬─────────────┬──────────────┬──────────────┤
│ POINT 1     │ POINT 2     │ POINT 3     │ POINT 4      │ POINT 5      │
│ Holds the   │ Specialists │ Checks      │ You sign what│ Memory       │
│ conversation│ do the work │ before      │ changes      │ outlives the │
│             │             │ telling you │              │ session      │
│ → page 4    │ → page 6    │ → page 7    │ → page 5     │ → page 8     │
├─────────────┴─────────┬───┴─────────────┴─────┬────────┴──────────────┤
│ HOOKS                 │ THE CLI               │ SKILLS AND AGENTS     │
│ A rule decides        │ The bridge            │ A model follows       │
│ sign, judge, record   │ memory, contracts,    │ identities, skills,   │
│                       │ plans, approvals      │ protocols             │
├───────────────────────┴───────────────────────┴───────────────────────┤
│ ── so every result has evidence and an owner, and nothing changes     │
│    your systems without your permission ──                            │
└───────────────────────────────────────────────────────────────────────┘
```
Chips lit: `the-human` → YOU, POINT 4. `memory` → MEMORY, POINT 5.
`nothing-self-declared` → SPECIALIST, POINT 3. `the-contract` → SPECIALIST,
POINT 2. `one-turn` → GAIA, SPECIALIST, POINT 1. `deterministic` → HOOKS,
POINT 3, POINT 4. `semantic` → SKILLS AND AGENTS, POINT 1, POINT 2.

- **Motion beat (40 s, the video's anchor):**
  - The thesis appears alone, centered, and holds for a full breath.
  - YOU appears, then the "converse · sign" separator draws.
  - GAIA appears, centered and wide, with MEMORY beside it.
  - The "delegates · returns a verifiable report" separator draws; SPECIALIST
    appears, with YOUR SYSTEMS beside it. The picture is complete; hold.
  - The five points appear left to right, each with its page number. Each
    point briefly lights the map box it belongs to: POINT 1 with GAIA, POINT 2
    with SPECIALIST, POINT 3 with SPECIALIST, POINT 4 with YOU, POINT 5 with
    MEMORY.
  - The three halves appear; `deterministic` lights HOOKS, POINT 3 and POINT
    4, then `semantic` lights SKILLS AND AGENTS, POINT 1 and POINT 2.
  - The "evidence and an owner" separator holds last. The camera closes on
    GAIA and SPECIALIST: the transition to page 3's zoom.
- **Form: mindmap, vertical.** The idea stands and converges on GAIA. The
  engine draws no arrows, so each labelled arrow of the orchestrator's
  picture is a separator with its text, between the rows it joins.
- **Sections and components:**
  - Thesis band, **centered**.
  - The picture:
    - YOU, a full-width **centered** box;
    - GAIA and SPECIALIST, **centered** and two thirds wide;
    - MEMORY and YOUR SYSTEMS beside them, one third wide;
    - two separators for the labelled arrows.
  - HOW IT WORKS: a rail, then five small boxes, one per point, each with its
    page. Each point's detail holds the orchestrator's full sentence.
  - The three halves of Gaia, introduced here and only here: HOOKS · A rule
    decides; THE CLI · The bridge; SKILLS AND AGENTS · A model follows.
  - Closing separator: the "why" sentence.
- **The layout move: width is importance.** GAIA and SPECIALIST are centered
  and two thirds wide; MEMORY and YOUR SYSTEMS are one third, to the side,
  because they are what the two actors act on.
- **Language notes:** the thesis and the five points keep the orchestrator's
  own words. "sign" is its verb; later pages say "approval" for the noun.
  "a verifiable report" is its wording; from page 6 on it is a contract.
  On this page the orchestrator is simply "Gaia".
- **Hands off to page 3:** GAIA and SPECIALIST. Page 3 zooms into both.

## Page 3 · Who's who (ZOOM · GAIA AND THE SPECIALISTS)

- **Altitude:** 2 · the picture.
- **Leave with:** "Gaia is one orchestrator that holds the conversation and
  never edits your files, plus 8 specialists that each do one piece of work
  and come back with a contract."

```
┌───────────────────────────────────────────────────────────────────────┐
│                    ZOOM · GAIA AND THE SPECIALISTS                    │
├───────────────────────────────────────────────────────────────────────┤
│ YOU · ask in your own words                                           │
├───────────────────────────────────┬───────────────────────────────────┤
│ ORCHESTRATOR · one per session    │ SPECIALIST · one per piece of work│
├─────────────────┬─────────────────┼─────────────────┬─────────────────┤
│ HOLDS           │ HOLDS           │ LIVES           │ WORKS ON        │
│ The conversation│ Memory          │ One turn        │ Its own field   │
│ you talk only   │ reads it, and   │ born for this   │ code, cloud, a  │
│ to it           │ curates it      │ piece of work   │ cluster, a live │
│                 │                 │                 │ system          │
├─────────────────┼─────────────────┼─────────────────┼─────────────────┤
│ HOLDS           │ RUNS            │ LOADS           │ WORKS IN        │
│ The plan        │ Gaia's own CLI  │ Its skills      │ Its own copy    │
│ briefs, plans,  │ its only        │ how the work    │ of your repo,   │
│ tasks           │ commands        │ is done         │ apart from yours│
├─────────────────┴─────────────────┼─────────────────┴─────────────────┤
│ NEVER                             │ RETURNS                           │
│ Edits your files                  │ A contract                        │
│ no editing tools, by design       │ a form the orchestrator reads     │
├───────────────────────────────────┴───────────────────────────────────┤
│ AGENTS · 9 agents: the orchestrator and 8 specialists                 │
├───────┬───────┬───────┬───────┬───────┬───────┬───────┬───────┬───────┤
│orchest│operatr│planner│develop│platfrm│gitops │cloud  │system │verifir│
│talks  │Gaia   │plans  │app    │IaC    │desired│live   │Gaia   │checks │
├───────┴───────┴───────┴───────┴───────┴───────┴───────┴───────┴───────┤
│ WHAT GAIA ADDS TO CLAUDE CODE · a plugin on its hooks, subagents      │
│ and skills + a database, contracts, approvals that show the exact     │
│ command, and memory that outlives the session                         │
└───────────────────────────────────────────────────────────────────────┘
```
Agent names are shortened only in this sketch; the page uses the full names.
Chips lit: `one-turn` → The plan, Gaia's own CLI, One turn, A contract.
`the-contract` → A contract, verifir. `changes-things` → develop, platfrm,
gitops, cloud. `plans-and-checks` → planner, verifir. `looks-after-gaia` →
operatr, system. `deterministic` → NEVER, Gaia's own CLI. `semantic` → Its
skills, One turn. `memory` → Memory, WHAT GAIA ADDS. `the-human` → YOU,
NEVER. `nothing-self-declared` → A contract, verifir.

- **Motion beat (20 s):** the ZOOM rail appears first, as if the camera had
  gone into the map's GAIA and SPECIALIST boxes. The two groups fill in pairs,
  row by row; NEVER and RETURNS appear last, on the same row. The agent row
  fills and its three chips light in order. The WHAT GAIA ADDS band closes
  the page and is the transition to page 4.
- **Form: comparison, two groups side by side.** Two roles and one
  difference.
- **Sections and components:** Jorge's revision-3 page 2, restored as its own
  page, with a new top rail "ZOOM · GAIA AND THE SPECIALISTS". The ORCHESTRATOR
  group zooms into the map's GAIA box, and the SPECIALIST group into the
  map's SPECIALIST box.
- **The layout move: the last row is the difference.** Both groups have the
  same shape; NEVER · Edits your files and RETURNS · A contract share a row.
- **Language notes:** agent names are real identifiers on a level-2 page,
  each with a plain description. "subagents" in the base band is Claude
  Code's feature name. "Its own copy of your repo" is plain; "git worktree"
  is only in the detail.
- **Hands off to page 4:** One turn. Its life is POINT 1 on the map.

## Page 4 · POINT 1 · The life of a request (Jorge's favourite)

- **Altitude:** 3 · the real components.
- **Leave with:** "One turn has a fixed life of four moments. Only the work
  repeats, once per tool call. It can stop at two moments, and a person is in
  the loop from the prompt on."

```
┌─────────────────────────────────────────────────────────────────────────┐
│     POINT 1 · HOLDS THE CONVERSATION · GAIA, the orchestration layer    │
├─────────────────────┬──────┬──────────┬──────────┬───────────┬──────────┤
│ SESSIONSTART        │      │ BORN     │ RECEIVES │ WORKS     │ CONTRACT │
│ System context      │ USER │PreToolUse│SubagtStrt│PostToolUse│SubagtStop│
│ Projects map        │PROMPT│ (red)    │          │           │ (red)    │
│ Memory about you    │      │ checked  │ context, │ calls     │ reads the│
│ Open threads        │      │ recorded │ memory   │ tools     │ contract │
├─────────────────────┤      ├──────────┴──────────┼───────────┼──────────┤
│ ORCHESTRATION TOOLS │      │ ── once only ──     │ ↻ each    │ ── once  │
│ Memory management   │      │                     │ tool call │ only ──  │
│ Project context     │      ├─────────────────────┴───────────┴──────────┤
│ Briefs and plans    │      │ HUMAN IN THE LOOP · BashValidator          │
│ Contracts           │      │ the exact command, scope, risk             │
│ Approvals           │      │                                            │
│ Schedules           │      │                                            │
├─────────────────────┴──────┴────────────────────────────────────────────┤
│ ── footnote: 12 hook events in total; this page draws 5 ──              │
└─────────────────────────────────────────────────────────────────────────┘
```
Chips lit: `deterministic` → BORN, RECEIVES, WORKS, CONTRACT, HUMAN IN THE
LOOP (every box on the row is a hook). `one-turn` → the same five.
`the-human` → BORN, HUMAN IN THE LOOP. `nothing-self-declared` → BORN,
CONTRACT. `memory` → RECEIVES, CONTRACT.

- **Motion beat (40 s):** the POINT 1 rail appears, full width. The rails
  drop in, then the tall USER PROMPT rail. `one-turn` lights BORN → RECEIVES
  → WORKS → CONTRACT. "↻ each tool call" draws under WORKS, with "once only"
  on either side. HUMAN IN THE LOOP appears last. Then `deterministic` lights
  the whole row: every moment of the turn is a hook. The red BORN box is the
  transition to page 5.
- **Form, sections, layout move:** the top band of `s-arquitectura`, kept
  whole, with the review's corrections:
  - the repeat separator sits under WORKS only;
  - "once only" separators on either side of it;
  - CONTRACT reads the contract, never the reply text;
  - failed Bash calls return through PostToolUseFailure;
  - the 12-events footnote.

  Its top rail now starts with "POINT 1 · HOLDS THE CONVERSATION".
- **Language notes:** the title keeps "request", because the page starts at
  your prompt. Hook names are the level-3 identifiers this page introduces.
- **Hands off:** BORN / PreToolUse → page 5 (POINT 4). CONTRACT / SubagentStop
  → page 6 (POINT 2).

## Page 5 · POINT 4 · You sign

- **Altitude:** 4 · a mechanism.
- **Leave with:** "Before any command runs, a hook sorts it by rule: the same
  answer every time, with no model involved. It runs, it waits for your yes,
  or it is refused."

```
┌───────────────────────────────────────────────────────────────────────┐
│   POINT 4 · YOU SIGN · A HOOK DECIDES, BY RULE, BEFORE ANYTHING RUNS  │
├─────────────┬─────────────┬───────────────────┬───────────────────────┤
│ 1 · YOU     │ 2 · AN AGENT│                   │ READ-ONLY             │
│ Ask         │ Wants to    │   3 · PreToolUse  │ Runs                  │
│ in your own │ run a       │      Sorts it     │ nobody is asked       │
│ words       │ command     │                   ├───────────────────────┤
│             │             │  a rule, in code  │ CHANGES SOMETHING     │
│             │             │    same answer    │ Waits for your yes    │
│             │             │     every time    │ you see the command   │
│             │             │ no model involved ├───────────────────────┤
│             │             │                   │ NEVER                 │
│             │             │                   │ Refused               │
│             │             │                   │ the never list:       │
│             │             │                   │ irreversible commands │
├─────────────┴─────────────┴───────────────────┴───────────────────────┤
│              Every decision is kept · the approval chain              │
└───────────────────────────────────────────────────────────────────────┘
```
Chips lit: `one-command` → YOU, AN AGENT, PreToolUse, each outcome in turn.
`deterministic` → PreToolUse, the three outcomes. `the-human` → YOU, Waits
for your yes. `memory` → Waits for your yes, the approval chain.
`nothing-self-declared` → PreToolUse, the approval chain.

- **Motion beat (25 s):** the POINT 4 rail appears. YOU, then AN AGENT,
  appear left to right. The tall centered PreToolUse box appears and holds on
  "a rule, in code". `deterministic` lights it, and the three outcomes drop in
  top to bottom. `the-human` lights YOU and "Waits for your yes" together.
  The approval chain band draws last, and it is the transition to page 6.
- **Form: flow, left to right.** You ask, an agent wants a command, a hook
  sorts it, one of three things happens: one path, one decision point.
- **Sections and components:**
  - YOU and AN AGENT: two tall boxes.
  - PreToolUse: one tall **centered** box. Its detail names the tiers, the
    classifier and the never list.
  - A **stack** of three outcomes: READ-ONLY · Runs; CHANGES SOMETHING ·
    Waits for your yes; NEVER · Refused (red). The second one's detail
    covers the dialog, the single use and the 30-minute window.
  - A base band: the approval chain.
- **The layout move: three tall boxes lead into one stack of three.** One path
  in, one rule, three ways out; the stack order reads as rising risk.
- **Language notes:**
  - "PreToolUse" is the one hook name on the page; T0–T3 are only in detail.
  - The semantic side is one box, the agent that asked, so the `semantic`
    chip is not used on this page.
  - Credential reads are also refused by rule, but they stay in the facts
    table only.
- **Hands off to page 6:** the approval chain. What else each turn leaves is
  its contract: page 6, POINT 2.

## Page 6 · POINT 2 · Contracts

- **Altitude:** 4 · a mechanism.
- **Leave with:** "Every agent answers with a contract of its own, on the same
  form. Gaia reads the form by rule, never the reply."

```
┌───────────────────────────────────────────────────────────────────────┐
│             POINT 2 · EVERY AGENT ANSWERS WITH A CONTRACT             │
│        a form that lets the orchestrator evaluate the response        │
├─────────┬──────────────────────────────┬──────────────────────────────┤
│ ORCHES- │ developer                    │ Its own contract             │
│ TRATOR  │ one turn                     │ same form, its own answers   │
│ sends   ├──────────────────────────────┼──────────────────────────────┤
│ one     │ gitops-operator              │ Its own contract             │
│ turn    │ one turn                     │ same form, its own answers   │
│ each    ├──────────────────────────────┼──────────────────────────────┤
│         │ gaia-verifier                │ Its own contract             │
│         │ one turn                     │ same form, its own answers   │
├─────────┴──────────────────────────────┴──────────────────────────────┤
│ THE FORM · the same sections for every agent                          │
├───────────┬───────────┬───────────┬───────────┬───────────┬───────────┤
│ STATUS    │ EVIDENCE  │ VERIFY    │ OPEN GAPS │ REACH     │ APPROVAL  │
│ How it    │ What it   │ How it    │ What      │ What else │ What it   │
│ ended     │ saw, did  │ checked   │ stayed    │ it touched│ asks to   │
│           │           │           │ open      │           │ run       │
├───────────┴───────────┴───────────┴───────────┴───────────┴───────────┤
│ THE STATE · what the orchestrator does next                           │
├───────────┬───────────┬───────────┬───────────┬───────────┬───────────┤
│ COMPLETE  │ NEEDS_    │ APPROVAL_ │ NEEDS_    │ BLOCKED   │ IN_       │
│           │ VERIFI-   │ REQUEST   │ INPUT     │           │ PROGRESS  │
│           │ CATION    │           │           │           │           │
│ Answer you│ Send a    │ Show the  │ Ask you   │ Route the │ Keep      │
│           │ verifier  │ command   │           │ obstacle  │ working   │
├───────────────────────────────────┬───────────────────────────────────┤
│ JUDGE · at SubagentStop           │ ── the reply text is never        │
│ Reads the contract                │    read ──                        │
│ no valid contract: sent back      │                                   │
└───────────────────────────────────┴───────────────────────────────────┘
```
State names wrap only in this sketch. The narrow left column is a vertical
rail spanning the stack.
Chips lit: `the-contract` → the three "Its own contract" boxes, the six form
boxes. `semantic` → developer, gitops-operator, gaia-verifier.
`deterministic` → JUDGE, STATUS. `next-move` → STATUS and the six states.
`nothing-self-declared` → VERIFY, NEEDS_VERIFICATION. `the-human` →
APPROVAL, APPROVAL_REQUEST. `memory` → JUDGE, one "Its own contract".
`the-judge` → STATUS, JUDGE.

- **Motion beat (30 s):** the POINT 2 thesis appears, centered. The vertical
  rail draws, and the three agents stack in one by one, each with its own
  contract. `the-contract` lights the three contracts, then the six form
  boxes: the same form each time. `next-move` lights STATUS, then each state.
  JUDGE fills and `deterministic` lights it; focus holds on "the reply text
  is never read". The transition to page 7 is NEEDS_VERIFICATION with
  `nothing-self-declared`: "who confirms?".
- **Form: dashboard, read top-down.** Whose contract, what form, what state,
  who judges.
- **Sections and components:**
  - The thesis, **centered**.
  - The per-agent **stack**: a vertical rail "ORCHESTRATOR · sends one turn
    each" beside three rows. Each row pairs an agent box with its contract
    box.
  - THE FORM and THE STATE, as in revision 3.
  - JUDGE and its separator.
  - The kind band is **dropped**.
- **The layout move: a stack of the same form.** Three agents, three
  contracts, one form under them: only the answers change.
- **Language notes:** agent names are kickers, as on page 3. State names stay
  on the face, because the audience sees them in Gaia; the field names are
  in detail.
- **Hands off to page 7:** NEEDS_VERIFICATION, "who confirms?": POINT 3.

## Page 7 · POINT 3 · It checks

- **Altitude:** 4 · a mechanism.
- **Leave with:** "An idea becomes a brief, a plan, and tasks. A specialist
  takes each task with a blank contract and brings it back answered, and a
  separate verifier confirms it."

```
┌───────────────────────────────────────────────────────────────────────┐
│                 POINT 3 · IT CHECKS BEFORE TELLING YOU                │
├─────────────┬─────────────┬─────────────┬──────────────┬──────────────┤
│   1 · IDEA  │  2 · BRIEF  │   3 · PLAN  │  4 · TASKS   │  5 · AGENTS  │
├─────────────┼─────────────┼─────────────┼──────────────┼──────────────┤
│ YOU         │ gaia brief  │ gaia plan   │ PLANNER      │ EXECUTE      │
│ A thought   │ The idea    │ Steps to    │ Tasks        │ One each     │
│ in your     │ written down│ get there   │ each with    │ a specialist │
│ words       │ + criteria  │             │ a gate       │ per task     │
├─────────────┴─────────────┴─────────────┼──────────────┼──────────────┤
│ ── no contract yet ──                   │ CARRIES      │ RETURNS      │
│                                         │ A blank      │ It answered  │
│                                         │ contract     │ contract     │
├─────────────────────────────────────────┴──────────────┴──────────────┤
│                          THE MANAGEMENT LAYER                         │
├───────────────────────┬───────────────────────┬───────────────────────┤
│ CROSS-CHECK           │ PASSES ON             │ CHECKS                │
│ A separate verifier   │ Each step's output    │ Only where needed     │
│ confirms the task     │ contract → task →     │ a gate per task,      │
│                       │ gate → evidence       │ your yes per change   │
├───────────────────────┴───────────────────────┴───────────────────────┤
│ ── enforced: a specialist can't mark its own planned work done ──     │
└───────────────────────────────────────────────────────────────────────┘
```
Chips lit: `one-task` → the five phase headers. `the-contract` → CARRIES,
RETURNS, PASSES ON. `semantic` → PLANNER, EXECUTE, CROSS-CHECK.
`deterministic` → CHECKS, PASSES ON. `nothing-self-declared` → CROSS-CHECK,
RETURNS. `the-human` → YOU, CHECKS. `memory` → gaia brief, PASSES ON.

- **Motion beat (30 s):**
  - The POINT 3 rail appears. The five phase headers appear left to right as
    `one-task` lights them.
  - Their content fills in. "no contract yet" draws under the first three
    phases.
  - CARRIES · A blank contract appears, then RETURNS · It answered, as
    `the-contract` crosses between them.
  - The management rail draws and its three boxes appear together. `semantic`
    lights CROSS-CHECK, then `deterministic` lights CHECKS.
  - The enforced separator holds last, and it is the transition to page 8.
- **Form: flow, phases as sections.** Idea → brief → plan → tasks → agents
  execute, in time, with the management layer standing beneath it.
- **Sections and components:**
  - Five phase-sections, each a **centered** header and one content box.
  - The contract row: the captioned absence "no contract yet", then CARRIES
    and RETURNS.
  - THE MANAGEMENT LAYER: a rail and three boxes.
  - The caveat separator. The "not enforced" half (who sets a gate's result)
    is in its detail.
- **The layout move: the contract appears late.** For three phases there is
  nothing to carry; it shows up only where a specialist is sent.
- **Language notes:** `gaia brief` and `gaia plan` are CLI names shown as
  kickers. PLANNER is a role. "gate" is used only in its planning sense.
- **Hands off to page 8:** PASSES ON. What is kept is POINT 5, memory.

## Page 8 · POINT 5 · Memory

- **Altitude:** 4 · a mechanism.
- **Leave with:** "Gaia keeps two kinds of memory: what it knows about your
  project, and what the turns learned. You decide what gets curated."

```
┌───────────────────────────────────────────────────────────────────────┐
│           POINT 5 · MEMORY OUTLIVES THE SESSION · two kinds           │
├─────────────────────┬───────────────────────────┬─────────────────────┤
│ PROJECT CONTEXT     │                           │ REAL MEMORY         │
│ what Gaia knows     │                           │ what the turns left │
├─────────────────────┤                           ├─────────────────────┤
│ gaia scan           │                           │ CURATED             │
│ Your repos, mapped  │           MEMORY          │ Kept on purpose     │
│ the shape of your   │                           │ read back at the    │
│ workspace           │       what the next       │ start               │
├─────────────────────┤    session starts from    ├─────────────────────┤
│ AT DISPATCH         │                           │ AUTOMATIC           │
│ Context handed in   │                           │ Events and episodes │
│ each specialist gets│                           │ one trace per turn  │
│ its slice           │                           │                     │
├─────────────────────┴───────────────────────────┴─────────────────────┤
│      ── you decide what is curated; the orchestrator writes it ──     │
└───────────────────────────────────────────────────────────────────────┘
```
Chips lit: `memory` → MEMORY, CURATED, AUTOMATIC. `deterministic` → AT
DISPATCH, AUTOMATIC. `the-human` → CURATED, MEMORY. `nothing-self-declared`
→ AUTOMATIC, gaia scan.

- **Motion beat (20 s):** the centered MEMORY box appears alone and holds.
  The two side headers appear together, then the four small boxes, two on
  each side. `memory` lights the center and the right wing. The separator
  "you decide what is curated" draws last, and it is the transition to page 9.
- **Form: mindmap.** The idea converges on one center with two symmetric
  wings. The engine cannot draw radially, so this is a center band with
  symmetric sections, as in the skill's mindmap skeleton.
- **Sections and components:**
  - The POINT 5 rail.
  - Left wing, PROJECT CONTEXT: `gaia scan` · Your repos, mapped; AT
    DISPATCH · Context handed in.
  - Center: MEMORY, **centered** and tall.
  - Right wing, REAL MEMORY: CURATED · Kept on purpose; AUTOMATIC · Events
    and episodes.
  - One separator.

  The lifecycle, lineage, ownership and machinery details move into CURATED
  and the separator.
- **The layout move: a star made of a grid.** One centered box, two wings of
  two, one line under it.
- **Language notes:** "project context" is never called memory on the page;
  it is one of the two wings under its own name. `semantic` has one natural
  member here (the orchestrator curating), so the chip is not used; the
  separator says it in words. At build, each wing's header became a box
  (kicker "KIND 1 OF 2" and "KIND 2 OF 2", titles PROJECT CONTEXT and REAL
  MEMORY) instead of a section title, so both wings are three cells tall and
  the centered MEMORY box, three cells tall, ends level with them. The center
  box's title is simply "MEMORY", the same exception to the 2–4-word rule as
  the map's one-word actors.
- **Hands off to page 9:** "you decide". Page 9 goes back to the map's YOU.

## Page 9 · Install it, ask it (BACK TO THE MAP)

- **Altitude:** back to 1.
- **Leave with:** "On my machine: 583 yes, 52 no, and 94% of commands only
  read. Installing it is one plugin, and the first thing to ask is what it
  is."

```
┌───────────────────────────────────────────────────────────────────────┐
│                            BACK TO THE MAP                            │
│           Gaia converses with you and coordinates the work,           │
│                  but never makes the changes itself.                  │
├─────────────┬─────────────┬─────────────┬──────────────┬──────────────┤
│     YOU     │     GAIA    │  SPECIALIST │    MEMORY    │ YOUR SYSTEMS │
│   you sign  │ conversation│   contract  │  two kinds   │  only after  │
│    page 5   │    page 4   │  pages 6, 7 │    page 8    │   your yes   │
├─────────────┴─────────────┴───────┬─────┴──────────────┴──────────────┤
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
Chips lit: `the-human` → YOU, approvals number. `memory` → MEMORY, GAIA.
`nothing-self-declared` → SPECIALIST, approvals number. `deterministic` →
YOU (your signature is enforced by a hook), read-only number. `semantic` →
GAIA, SPECIALIST.

- **Motion beat (35 s):**
  - The BACK TO THE MAP rail and the thesis appear, the same words as page 2.
  - The five map boxes appear in one row, each with the page that opened it.
    The three thread chips light across them one last time.
  - The two numbers appear, big.
  - The INSTALL band appears, then the FIRST PROMPT line.
  - The closing separator names Gaia's halves. `deterministic` and `semantic`
    light in turn.
  - The final frame holds on the FIRST PROMPT.
- **Form: comparison.** The map again, now measured, then how to start.
- **Sections and components:**
  - The rail and the thesis, **centered**.
  - The map in one row: five **centered** small boxes, each with its page.
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
- **The layout move: the map folded into one row.** The same five actors as
  page 2, now side by side, each pointing to the page that explained it. The
  deck ends where it began, with the numbers under it.
- **Language notes:** commands appear on this level-1 page in the numbers and
  install bands, which are reference and procedure, where the command is the
  content. "you sign" keeps the map's verb. The FIRST PROMPT box is a
  deliberate exception to the 2–4-word title rule: its title is the prompt
  itself, verbatim, "what is Gaia, and what can you do for me?", because it is
  the final frame and the step Gerry takes.
- **The close:** the live install, then the first prompt. Gaia explains itself
  live.

## Backup · Down to the code (after page 9, for questions only)

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
  "gate" belongs to planning only.
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
| Backup · The vision (`s0-vision`) | at build: remove the entry from `document.yaml` and delete its file | Covered by page 1; the two hosts go to page 9. |
| Backup · Visibility (`s1-visibilidad`) | removed | Page 5's approval chain, page 7's PASSES ON, page 8. |
| Backup · Standards (`s2-estandares`) | removed | Page 3's box details. |
| It explains itself (`s5-se-explica`, hidden) | removed | Page 2 is the self-explanation; page 9's first prompt shows it live. |

## Engine limits this design respects

- No edges: every relation is a chip or `order`. The map's labelled arrows are
  separators with text. Grid only; page 8's star is a center band with
  symmetric wings.
- Chips need at least 2 members per page; every chip above lists them. Where
  `semantic` has a single member on a page (5 and 8), it is left off and the
  Language notes say so.
- Rails carry no chips and no detail. Page 6's vertical rail uses the
  `vertical` treatment with a `rowspan` covering the stack.
- `rowspan` works only on a level made only of components, so page 5's tall
  boxes and stack and page 8's tall center each sit in a components-only
  section.
- Text caps: kicker tokens must fit the cell; descriptions clamp at 3 visual
  lines.
- No engine changes. The drift against the diagram-builder seed stays tracked
  in memory row `project_deck_gate_ahead_of_seed_unported`.

## Claims still to check before the build

- Page 6's "next move" for each state follows the `agent-contract-handoff`
  and `agent-protocol` skills, not a code line.
- Page 8's "each specialist gets its slice" follows the `agent-contract-handoff`
  skill; the hook that injects it was not re-read.
