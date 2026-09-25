# GAIA — speaker's script

A script for walking Gerry through this deck and installing Gaia live. About
12–15 minutes, then questions. Open `index.html` in a browser before you start.

How to read the blocks below: **Say** is spoken, in short sentences. **Point
at** names the section, box or chip exactly as it appears on screen. **Leave
them with** is the one sentence the page exists to plant.

Timing at a glance:

| Part | Minutes |
|---|---|
| Opening | 1 |
| 1 · Shared semantics | 2 |
| 2 · The real architecture | 4 |
| 3 · Human in the loop | 2 |
| 4 · Memory | 2 |
| 5 · This is GAIA | 1.5 |
| Live install | 2.5 |
| **Total** | **about 15** |

The three `Backup ·` pages sit after the recap. Open them only if a question
calls for them.

---

## 1. Opening (about 1 minute)

**Say:**

> GAIA stands for Generative AI Interface for Agents.
>
> You already use Claude Code. So you know the good part: one agent, one
> session, real work gets done.
>
> You also know what happens next. The session ends and the agent forgets.
> It tells you what it did in prose, and you take its word for it. And it can
> change things you care about unless you watch every step.
>
> Gaia is a plugin for Claude Code that fixes those three things. The
> conversation stays with one agent. The work goes to specialists. Each
> specialist leaves a record, not a story. And anything that changes state
> waits for your yes.
>
> Let me show you how it's built, then install it in front of you.

**Leave them with:** Gaia turns one forgetful agent into a team that remembers,
reports in records, and asks before it changes anything.

---

## 2. The walkthrough

### Page 1 · Shared semantics — the why (about 2 minutes)

**Say:**

> Start with the problem, not the tool.
>
> Agentic work is lonely by default. One person, one agent, one session.
> What one turn learns is lost for the next. No two people work alike.
>
> So the question on top is: how does a team break that isolation?
>
> The answer is five things a team should share. How the work is shaped. How
> the output is shaped. What is remembered. What can be seen while it happens.
> And what can be checked afterwards.

**Point at:**

- The top box, **"An AI-oriented way of working."**
- The band **"An organization should share…"** and its five columns, left to
  right: **WORKFLOWS**, **STANDARDS**, **KNOWLEDGE**, **OBSERVABILITY**,
  **AUDIT**.
- Click the chip **"who decides?"** — the boxes about hooks and approvals
  light up. Then **"is it really done?"** — the task, verification, evidence
  and compliance boxes light up. Say: "Chips are how this deck draws
  relations. There are no arrows."
- If asked about agents, open **"What an agent is"**: nine agents exist
  today, the orchestrator and eight specialists.

**Leave them with:** A team gets value from agents only when it shares the
same flows, outputs, memory, visibility and audit.

### Page 2 · The real architecture — the how (about 4 minutes)

This is the heart of the talk. Walk the seven chips in order, left to right
in the chip bar.

**Say:**

> This is what actually happens when you type a request.
>
> Everything hangs from Gaia — that's the band across the top. The left
> column is Gaia's own layer. The right side is the life of one request.

**Point at** the section **"The life of a request"**, then the band
**"GAIA · the orchestration layer"**. Then click each chip:

1. **"the session opens"** — lights **SessionStart**. Say: "Before you ask
   anything, Gaia loads what it knows: the system, your projects, memory about
   you, and the open threads."
2. **"where does this belong?"** — lights the **USER PROMPT** bar. Say: "Your
   prompt is scored against every area. The result is a recommendation. It
   never blocks you."
3. **"the gate"** — lights **PreToolUse**. Say: "Before any tool runs, Gaia
   asks two questions. May this agent hold this tool? And does this command
   need your consent?"
4. **"the dispatch"** — Say: "When the tool is a dispatch, Gaia builds the
   specialist's context and opens its contract."
5. **"the handover"** — lights **SubagentStart**. Say: "This is the first
   instant the specialist exists. It gets its contract and its context."
6. **"the bookkeeping"** — lights **PostToolUse**. Say: "Everything that ran
   is written down."
7. **"the judge"** — lights **SubagentStop**. Say: "When the specialist
   finishes, Gaia reads its contract, judges it, and records the turn."

Then point at **"Human in the loop"** and its box **BashValidator**: "A
mutating command becomes an exact, auditable request before it runs. Approved
once, for that command only."

Scroll down only if there is time: **"The modules"**, **"The orchestrator's
CLI"**, **"Audit and metrics"**. Say: "Each box here is real code. Click any
of them for the detail."

**Leave them with:** Every request follows the same seven steps, and the
specialist can't close its turn without a contract Gaia checks.

### Page 3 · Human in the loop (about 2 minutes)

**Say:**

> Here is the safety model in one line. The human decides only when something
> mutates, or a live state changes.
>
> Every command is classified before it runs. Reads run free. Local
> validation runs free. Dry-runs run free. Only a real change stops and asks.
>
> When it asks, you see the exact command, its scope, its risk, and how to
> roll it back. You say yes or no. If you say no, nothing happens.

**Point at:**

- The section title **"The human decides only when something mutates or a
  live state changes"**.
- Click the chip **"the T3 cycle"** and read the boxes in order: **Mutation →
  Classify → Decision → Approval → Execution → Audit**.
- In **"Classify · the risk"**: **T0 · read**, **T1 · validate**,
  **T2 · simulate**, **T3 · gate**.
- In **"Approval · the dialog"**: **Operation**, **exact_content**,
  **scope · risk · rollback**, then **Approve** and **Reject**.
- Click **"the human"**: only the approval step lights up. Say: "The rest of
  the cycle runs without you."

**Leave them with:** You are asked only when something would change, and you
see exactly what you are approving.

### Page 4 · Memory (about 2 minutes)

**Say:**

> Claude Code forgets when the session ends. Gaia does not.
>
> What a turn learns goes into a database on your machine. The next session
> starts from what the last one found, instead of from zero.
>
> But memory is not a dump. Some of it is automatic and expires. Only the
> curated part lasts, and it has a lifecycle.

**Point at:**

- The legend band first: **"Width is reach"**, **"Chips light relations"**,
  **"A click opens detail"**. One sentence: "This page reads left to right,
  and wider means more lasting."
- **AUTOMATIC**: **Events** and **Episodes** — "evidence, not knowledge".
- **CURATED MEMORY** → **THE THREE ROLES**: **Durable knowledge**, **One open
  concern**, **Append-only record**.
- **CARRY-FORWARD**, left to right: **Does it have a home?** → **It becomes a
  thread** → **It gathers evidence** → **Attention returns** → **Knowledge
  survives**.
- Click **"what comes back next session"**. Then **"who may write it"** —
  lights **OWNERSHIP**. Say: "You are the authority for durable knowledge.
  Agents only propose."

**Leave them with:** Gaia remembers what matters between sessions, and you
stay in charge of what it keeps.

### Page 5 · This is GAIA — the recap (about 1.5 minutes)

**Say:**

> So, GAIA. Generative AI Interface for Agents.
>
> An idea becomes a brief. The brief becomes a plan. The plan becomes tasks.
> Every task carries a gate.
>
> One orchestrator runs it. It has no execution tools. It only delegates.
> Nine agents today: the orchestrator and eight specialists. You can create
> more.
>
> And four laws hold it together: a contract for every output, a state machine
> for every turn, approvals for every change, and blind verification — no one
> validates their own work.

**Point at:**

- The hero box **"GAIA — Generative AI Interface for Agents"**.
- **"The natural-language journey"**: **Brief**, **Plan**, **Tasks**,
  **Gates**. Click **"execute"** — the executing agents light up in the
  **Agents** row.
- **"Who runs it"**: the **Orchestrator** box, then the **Agents** row.
- **"What makes it GAIA"**: **Contract**, **State Machine**,
  **Approvals (T3)**, **Blind verification**.

**Leave them with:** GAIA is the name for everything you just saw: specialists,
contracts, memory and a consent gate, run by one orchestrator.

### Backup pages (only if asked)

- **Backup · The vision** — the shared way of working as an idea. Caution:
  its **"Tools · it does not matter"** column lists Codex, Cursor and Aider.
  Gaia today runs on Claude Code and OpenCode only. Say so if you open it.
- **Backup · Visibility** — ideas, criteria and tasks as a harness; project
  context, audit and memory as what makes work shared.
- **Backup · Standards** — agent identity and the skills catalogue.

---

## 3. The live install (2–3 minutes)

Rehearse this once tonight on the same machine.

**Before the talk (not live):** the hooks need `python3` 3.12 or later on
`PATH`, and Claude Code 2.1.0 or later.

**Live, inside Claude Code:**

```
/plugin marketplace add metraton/gaia
/plugin install gaia@gaia-marketplace
/reload-plugins
```

- The first two lines are taken literally from Gaia's README.
- `/reload-plugins` is **unconfirmed**: the README does not mention it. It is
  the Claude Code command to load a newly installed plugin without
  restarting. If it does not work, restart `claude` instead.
- The terminal equivalent of the install line, per the README:
  `claude plugin install gaia@gaia-marketplace`.

**Say while it installs:**

> The plugin route loads Gaia's agents, skills and hooks. The `gaia` command
> line tool comes from npm. That's one more step, and I've already done it on
> this machine.

The CLI step, from the README (run beforehand, show only if asked):

```bash
npm install @jaguilar87/gaia
gaia install
gaia doctor
```

**First prompt, from the README:**

```
what is Gaia, and what can you do for me?
```

The orchestrator answers with its picture of Gaia and a table of what it can
do.

**Demo prompt — a specialist plus an approval gate, touching nothing real:**

```
In a new folder /tmp/gaia-demo, create a git repository with one README
commit, then push it to origin.
```

What should happen: the orchestrator sends the work to the `developer`
specialist. Creating the folder and committing are local, so they run. The
push is a T3 change, so it stops and shows the approval dialog. Click
**Reject**. Nothing happens. Even if someone clicks Approve, the repository
has no remote, so the push fails harmlessly.

This demo's behavior is **unconfirmed** until rehearsed. The README confirms
that a T3 command stops with an approval you answer in the host's dialog; it
does not describe this exact prompt.

---

## 4. Likely questions from Gerry

**Is it safe?**
Every command any agent runs is classified first. Reads, local validation
and dry-runs run freely. A change stops and waits for your yes. A short list
of irreversible commands never runs, and there is nothing to approve.

**What leaves the machine?**
Gaia's own data does not. The database, evidence and logs live in `~/.gaia/`
on your machine. Your prompts still go to the model through Claude Code,
exactly as they do today; Gaia doesn't add a service of its own. *(The last
sentence is not stated in the README — see the report.)*

**What does it cost in tokens?**
There's no figure in the README, and Jorge should say so rather than guess.
What the deck does show: every turn's usage is measured and recorded (Audit
and metrics → **"How much was used"**). Gaia injects context at session start
and at each dispatch, so there is some overhead. Give a real number from
`gaia` metrics only if it has been measured beforehand.

**How is this different from plain Claude Code, or its subagents?**
Gaia is built on Claude Code's own subagents and hooks. What it adds: an
orchestrator that never edits anything itself, specialists that each own one
area, a contract every specialist must close, memory that survives the
session, and a consent gate on every change.

**Does it work with Claude Code and OpenCode?**
Yes, both. Claude Code 2.1.0 or later, as a plugin or through npm. OpenCode
through npm, with `gaia install --host opencode`.

**How would a team roll it out?**
Each person installs the plugin and the npm package, then runs `gaia install`
and `gaia doctor` in the workspace. `gaia scan` indexes the repositories so
every dispatch knows the project. Today the memory database is per machine;
the shared-semantics page is the direction, not a shipped team server. *(This
last point is an inference from the README's "a database on your machine" —
confirm before saying it.)*

---

## Appendix: Video script seed

Beats only; the full script is later work. Target: under 4 minutes of
narration. Calm, even pace, launch-explainer tone. It stands alone. Written
for exact-text text-to-speech: numbers and symbols are spelled out as they
should be spoken.

| Beat | Time | Narration idea | On screen |
|---|---|---|---|
| 1. The quiet problem | 0:00–0:25 | You already work with an AI agent. It is good. And every evening, it forgets everything. | A terminal session closing. |
| 2. The name | 0:25–0:40 | This is Gaia. Generative A I Interface for Agents. | The title card from page five. |
| 3. One voice, many hands | 0:40–1:10 | You talk to one agent. It never touches your code itself. It sends a specialist, one for each area of work. | "Who runs it": the orchestrator, then the agents row. |
| 4. The record, not the story | 1:10–1:40 | Every specialist closes its turn with a contract. What it looked at. What it changed. How it checked. How it ended. | Page two, the judge chip lighting SubagentStop. |
| 5. Your yes | 1:40–2:15 | Reading is free. Checking is free. Changing is not. Before anything changes, you see the exact command, and you decide. | Page three, the T three cycle, then the approval dialog. |
| 6. It remembers | 2:15–2:50 | What a session learns stays on your machine. Tomorrow starts where today ended. And you decide what is worth keeping. | Page four, carry forward, left to right. |
| 7. From one person to a team | 2:50–3:25 | Shared flows. Shared standards. Shared memory. Work anyone can see and anyone can check. | Page one, the five columns. |
| 8. Close | 3:25–3:50 | Gaia. For Claude Code and OpenCode. Install it as a plugin, and start with one question: what can you do for me? | The two plugin commands, then the title card. |
