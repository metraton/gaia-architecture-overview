# GAIA — speaker script for the talk to Gerry

Revision 7, written against `STORYBOARD.md` revision 7 and the page YAML in
`data/pages/`. It replaces revision 5.

This is what I say, what I click and what I want Gerry to walk away with, page
by page, for a talk of about 15 minutes in English. The deck makes one argument:
a team that works with AI agents needs to share five things, and Gaia
(Generative AI Interface for Agents) is one way to get them. It goes from the
idea (pages 1 and 2) down to how one request lives, how work travels and what
Gaia keeps (pages 3 to 5), and back up to how to start (page 6). It ends with a
live install as a Claude Code plugin, so Gerry sees it answer for itself.

## Run sheet

The minutes are a plan, not a measurement. The depth time is on pages 3, 4 and 5.

| Page | Title | Min | The one idea |
|---|---|---:|---|
| 1 | Why a team needs this | 1 | An AI-assisted team needs to share five things, the same way it shares a codebase. |
| 2 | What Gaia is (the map) | 1.5 | Gaia converses and coordinates, but never makes the changes itself; hooks decide by rule, skills and agents follow, the CLI joins. |
| 3 | The life of a request, and its approvals | 3.5 | One turn has four events, the same every time, and a rule sorts every command: it runs, it waits for your yes, or it never runs. |
| 4 | Contracts | 3 | Everything travels as a contract, and the engine judges it by rule, never the prose. |
| 5 | What Gaia keeps | 3 | Four memories, each answering one question; you decide what is curated, the engine keeps the rest. |
| 6 | Install it, ask it | 1 | One plugin, then ask it what it is; everything it learns stays in one database on your machine. |
| Live | The live install and the first prompt | 2 | Three commands, one question, and Gaia explains itself. |
| | **Total** | **15** | |
| Optional | The narrated video, `out/gaia.mp4` (about 3:29) | +3.5 | **Use it as a closer**, only if there is time left, or as the fallback if the live install fails. Do not open with it: it would tell the whole story before the pages do. |

## Before the talk

- [ ] Open the deck at https://metraton.github.io/gaia-architecture-overview/.
  Be aware: Pages still serves an older version until the branch is merged and
  pushed. If it is not updated yet, open the local `index.html` from this repo
  instead, and check that page 3 is "The life of a request" and page 6 has two
  install routes.
- [ ] Set the light theme.
- [ ] Have a clean Claude Code workspace ready for the live install: an empty
  folder, Gaia not yet installed there by either route.
- [ ] Close other Claude Code and OpenCode sessions.
- [ ] Keep `out/gaia.mp4` open in a player, paused at 0:00.

---

## Page 1 · Why a team needs this

**Say:**

Today, most people work with AI alone. One person, one agent, one session. When
the session closes, what it learned is gone, and no two people work the same way.

So the question I want to start with is on top: how does an organization break
the isolation of agentic work?

My answer is that a team has to share five things, the same way it already
shares a codebase. How the work is shaped. How the output is shaped. What is
remembered. What can be seen while it happens. And what can be checked afterwards.

Each column has four pieces. I won't read them all. What matters is that they
cut across each other. Memory is not just a memory store: the way we write
commits is memory too.

And one honest note. The amber box, VERIFICATION, is named here but not built
yet. I'll come back to it if you ask.

**Point at:**

1. THE THESIS box, "An AI-oriented way of working."
2. The container "An organization should share…", then the five columns left to
   right: WORKFLOWS, STANDARDS, KNOWLEDGE, OBSERVABILITY, AUDIT.
3. Chip "what do we remember?": it lights KNOWLEDGE and reaches CONVENTIONS in
   STANDARDS ("Commits, PRs, docs").
4. Chip "can we trust it?": OUTPUTS, EVIDENCE, COMPLIANCE.
5. Chip "who decides?": HOOKS ("What keeps the course") and APPROVALS ("A person
   owns every change").
6. The amber box VERIFICATION, "Blind by design", and the dotted line under the
   page: "amber = named here, not instrumented yet · exactly one box carries it:
   VERIFICATION, in Observability".

**Leave them with:** An AI-assisted team needs to share five things, the same way
it shares a codebase.

**If Gerry asks:**

- *"Is all of this built?"* No, and the page says so. Exactly one box is amber.
  VERIFICATION means whoever checks a step never did the work. The checker's
  verdict closes the check, but not yet the step: marking a step done is still a
  manual act. This page states what a team needs, not a claim that every box is
  finished.
- *"Why these five?"* Because each one fixes one way lonely work breaks: nobody
  works alike, the output can't be read by the next person, nothing is
  remembered, nobody can see what is happening, and nobody can check it later.

---

## Page 2 · What Gaia is (the map)

**Say:**

This is Gaia. The name stands for Generative AI Interface for Agents. The best
way I found to explain it was to ask it. I asked "what are you and what do you
do?", and this map is its own answer.

You are at the top. You talk to one agent only: the orchestrator. It holds the
conversation and decides what needs to happen. It never makes the change itself.
That is by design.

It hands the work to a specialist. Each one is born clean for one piece of work,
and each comes back with a contract: what was done, and with what evidence.
There are eight specialists today, and you can add your own.

Around them, Gaia keeps four things: approvals, contracts, memory, and plans.
And the whole thing has two halves. Hooks, where a rule in code decides. Skills
and agents, where a model follows written instructions. The CLI joins them.

The next three pages each open one box of this map.

**Point at:**

1. "You", and the line under it: "▼ converse · ▲ sign what changes something".
2. "Decides the WHAT", inside "The orchestrator".
3. Chip "who decides?": it lights "You" and "Approvals".
4. The line "▼ delegates · ▲ returns a contract", then "Does the HOW". Click it
   open to show the eight specialist names.
5. "What a specialist carries": "Identity", "Skills", "Project context", "Memory
   about you", "Its contract". Chip "what travels in a contract?".
6. "What Gaia manages", box by box: "Approvals", "Contracts", "Memory", "Plans &
   tasks".
7. The closing line, "hooks decide by rule · skills and agents follow · the CLI
   joins". Chip "what does a rule decide?", then chip "what does a model follow?".

**Leave them with:** Gaia converses with you and coordinates the work, but never
makes the changes itself. It hands them to specialists, checks what they deliver,
and tells you the result. Anything that changes something real needs your
signature.

**If Gerry asks:**

- *"Why can't the orchestrator just make the change?"* Because it is built not
  to. Its definition takes away the tools that edit files. That way every change
  has one owner, the specialist, and one piece of evidence, its contract.
- *"Who are the specialists?"* developer, platform-architect, gitops-operator,
  cloud-troubleshooter, gaia-planner, gaia-verifier, gaia-operator and
  gaia-system. Each owns one field: application code, infrastructure, the
  cluster, live systems, planning, checking, and Gaia itself.
- *"What does 'born clean' mean?"* Each specialist starts with no history of
  its own. It gets only what it is handed at birth: its identity, its skills,
  the project context it may use, what Gaia knows about how you work, and its
  contract.

---

## Page 3 · The life of a request, and its approvals

**Say:**

This is the box "Decides the WHAT" from the map, opened up: what happens to one
request.

On the left is Gaia's own layer. When a session opens, a fixed step loads the
same context every time: the system, the map of your projects, what it knows
about you, and what is still open. Below that are the orchestrator's only
commands.

On the right is the life of one specialist. We call it a turn. It has four
events, always the same, always in this order. First, it is born and handed its
context. Then, before every command, a check. After every command, the result is
logged. And at the end, its contract is judged. The middle two repeat on every
tool call. The first and the last happen once.

Here is the part I care about most. Before any command runs, a rule sorts it.
A rule in code, not a model. So the same command gets the same answer every time.
Reads run, and nobody is asked. Changes wait for your yes, with the exact command
in front of you. And a few commands never run at all. There is nothing to
approve for those.

Only two places can stop a turn, the two in red: before an execution, and at
the end, when the contract is judged.

**Point at:**

1. The heading box "The life of a request".
2. The "SessionStart" section, "Deterministic context injection", and its four
   rails: "System context", "Projects map", "Memory about you", "Open threads".
3. "Orchestration tools", and its rails from "Memory management" to "Schedules".
4. The vertical rail "USER PROMPT": from here on a person is in the loop.
5. "The events of one turn", left to right: "Injected context", "Before any
   execution", "Execution validation", "Contract validation". Then the lines
   under them: "once only", "↻ each tool call", "once only".
6. Chip "what happens in one turn?".
7. The band "Approvals · inside “before any execution”": "Sorts every command",
   "Runs", "Waits for your yes", "Never runs". Chip "what happens to one
   command?".
8. Click "Waits for your yes" open to show the approval message. Chip "who
   decides?".
9. Chip "is it really done?": the two red events. Then the footnote "red marks
   the only two events the turn can stop — before any execution and contract
   validation".

**Leave them with:** One turn has four events, the same every time: the context
is injected, a rule checks every command before it executes, each result is
logged, and the contract is validated. Before any execution, a rule sorts every
command, with no model involved: it runs, it waits for your yes, or it never runs.

**If Gerry asks:**

- *"How does it know what is a change?"* A fixed classifier gives every command
  a level: read, validate, dry run, or change. Only a change waits for you.
  There is a separate fixed list of commands that never run.
- *"Can I approve once and let it do anything?"* No. An approval is for one exact
  command, byte for byte. It can be used once, and it lasts 30 minutes. The
  orchestrator can show you approvals, but it can never approve one itself.
- *"What if I'm not there to answer?"* Then it waits, and after 30 minutes the
  approval expires and nothing runs. On my machine 218 approvals expired that way.

---

## Page 4 · Contracts

**Say:**

This is the "Contracts" box from the map. Everything in Gaia travels as a contract.

Read the top line left to right. The orchestrator sends the work: one goal, to one
specialist. Gaia's engine, which is code and not a model, hands the specialist a
contract made for it: its role, and which parts of the project it may read and
write. The specialist does the work.

Now read it back, right to left. The specialist answers in that same form, not
in a free-text message. The engine checks it by rule, and it never reads the
prose. Only then does the orchestrator read it and decide what's next.

Underneath are the two kinds. The agent contract, one per turn: its status, its
evidence, how it was verified, what is still open, what else it touched, an
approval request if it needs one, and changes it proposes to the project.

The project contract, one per project: what Gaia knows about that project, in
named sections. Each agent may read some and write others. When a specialist
proposes a change to a section, it is checked against its permission before it
is saved.

**Point at:**

1. The heading box "Everything travels as a contract".
2. Top line, left to right: "The work" (SENDS), "A contract for this agent"
   (INJECTS ►), "Does the work" (RECEIVES).
3. Chip "what may it read and write?".
4. Bottom line, right to left: "In a structured form" (◄ ANSWERS), "By rule, not
   the prose" (◄ VALIDATES), "Keeps orchestrating" (READS).
5. Chip "what happens next?": it lights "status" and its six states, from
   "COMPLETE" to "IN_PROGRESS".
6. "The contracts": first "Agent contract" with chip "what travels in a
   contract?", then "Project contract" with chip "what may it read and write?".

**Leave them with:** Everything travels as a contract: the engine hands each agent
its own, validates the answer by rule and never the prose, and the orchestrator
keeps going from it.

**If Gerry asks:**

- *"What stops a specialist from just saying it's done?"* Three things. The
  engine judges the stored contract, not the message. If it is missing or not
  finished, the turn is sent back. The orchestrator checks the claims against
  what it can open itself. And when a task belongs to a plan, the specialist
  cannot mark it complete: a separate verifier has to.
- *"Can an agent change anything in the project?"* It can only propose changes
  to the sections it may write, and each one is checked before it is saved. One
  honest gap: reading a section is not checked against what it may read yet. The
  contract only names those sections.
- *"How many states can a turn end in?"* Six. Only COMPLETE is final.

---

## Page 5 · What Gaia keeps

**Say:**

This page opens "Memory" and "Plans & tasks" from the map. Gaia keeps four
memories, and each one answers one question.

Project memory: what do we know about the project, and about you? It starts
with a scan of your workspace and ends with your rules and preferences.

Operational memory: what are we doing, and what is still open? From a brief, to a
plan, to tasks and their gates, and what gets carried forward to the next session.

Execution memory: what did we execute, and what did it produce? The contracts,
the approvals, the evidence, and the verdict.

Episodic memory: what happened, and when? The engine writes it down, not the
agent. Nobody narrates their own turn.

Each ring follows its lifecycle in the code, clockwise. And one task leaves a trace in all
four. The line at the bottom is the rule: you decide what is curated, and the
engine keeps the rest.

**Point at:**

1. "PROJECT MEMORY", then its ring clockwise from "scan →" to "↑ preferences".
2. "OPERATIONAL MEMORY", from "brief →" through "tasks ↓" and "gates ↓" to "↑
   carry forward".
3. "EXECUTION MEMORY", from "contracts →" through "← verdict" to "↑ audit trail".
4. "EPISODIC MEMORY", from "sessions →" to "↑ last 24h".
5. Chip "where does one task leave a trace?": all four name boxes light, plus
   "sections ↓", "tasks ↓", "contracts →" and "← episodes".
6. Chip "what comes back next session?": "← anchors", "↑ carry forward", "↑ last
   24h".
7. Chip "what does a rule decide?", then chip "what does a model follow?".
8. Chip "who decides?", and the closing line "you decide what is curated · the
   engine records the rest".

**Leave them with:** Gaia keeps four memories, each answering one question, one
task leaves a trace in all four, and you decide what is curated while the engine
keeps the rest.

**If Gerry asks:**

- *"Who writes the memory?"* Two kinds of writer. What is curated, like your
  rules and decisions, is written on purpose, by the orchestrator. What happened is written by the
  engine itself, on every turn. A specialist cannot write curated memory.
- *"What comes back tomorrow?"* What was carried forward, the anchors of each
  project, and the events of the last 24 hours.
- *"Is that order around each ring real?"* Mostly, yes: it follows the code.
  Where the code has no fixed order, for example between pending and blocked, the
  words sit side by side, and the order is my reading.

---

## Page 6 · Install it, ask it

**Say:**

Starting is simple. There are two routes, and you pick one per workspace.

In Claude Code, the recommended route is the plugin: three commands. There is also
an npm package, for OpenCode, which is in beta, or if you want Gaia on your own
terminal.

Then you ask it what it is. You point it at your repos, you describe a problem,
and you work agentically. It plans, delegates, and asks before it changes anything.

Two numbers, from my own machine. 583 times I said yes, 52 times I said no, and
218 requests expired unanswered. And 94% of commands only read, so they never
asked me anything. That is one machine, one person.

Everything it learns stays in one database on your machine, and uninstalling never
deletes it. Let me show you.

**Point at:**

1. "Start here" and its subtitle: "two routes · pick one per Claude Code
   workspace: both together register every hook twice".
2. "Claude Code installation": "/plugin marketplace add metraton/gaia",
   "/plugin install gaia@gaia-marketplace", "/reload-plugins". Mention the copy
   button.
3. "Gaia agnostic installation": "npm install @jaguilar87/gaia", "gaia install".
4. The accent box "what is Gaia, and what can you do for me?".
5. "It grows with you", step by step: "install", "ask", "point it at your
   repos", "describe the problem", "work agentically".
6. "583 yes · 52 no · 218 expired" and "94% only read".
7. "~/.gaia/gaia.db" and chip "what is really yours?".
8. If there is a skeptical face: "What a skeptic asks", starting with "Reads run.
   Changes wait for your yes."

**Leave them with:** Installing it is one plugin, or one package plus one command,
and the first thing to ask is what it is; it grows with you from there, and
everything it learns stays in one database on your machine.

**If Gerry asks:**

- *"Do I have to change how I work?"* No. You keep talking to Claude Code. The
  orchestrator becomes the identity of your own session.
- *"Only one project?"* One, or many. It reaches every one you scan.
- *"What if I uninstall it?"* Nothing is lost. What it learned stays in
  `~/.gaia/gaia.db`.

---

## The live install

Switch to the clean Claude Code workspace. Say what you type as you type it.

1. **Add the marketplace.**
   ```
   /plugin marketplace add metraton/gaia
   ```
   Claude Code adds the gaia-marketplace, at the tag of the current release.

2. **Install the plugin.**
   ```
   /plugin install gaia@gaia-marketplace
   ```
   Claude Code asks for a scope: for you in every project, for everyone in this
   repository, or for you in this repository only. For the demo, pick "for you
   in this repository only", so nothing else on the machine changes. On Claude
   Code this is meant to be the whole install, with no npm step. The demo is the
   proof.

3. **Activate it.**
   ```
   /reload-plugins
   ```
   On the first session Gaia adds its permission set to the workspace settings
   and asks for a reload (or a restart) to activate it.

4. **Ask the first question.**
   ```
   what is Gaia, and what can you do for me?
   ```
   What to expect: the orchestrator answers in its own words. It is a model, so
   the wording changes every time, but the shape should be page 2. It talks with
   you and coordinates. It never makes changes itself. It hands work to
   specialists and checks what they deliver. Anything that changes something
   real waits for your approval. While it answers, say: "This is the map from
   page 2, and nobody scripted it."

**The alternative route, in one line:** for OpenCode (beta) or for `gaia` on your
own terminal, `npm install @jaguilar87/gaia`, then `gaia install` (add `--host
opencode` or `--host all`).

**Pick one route per workspace.** The plugin and `gaia install` together register
every hook twice.

**To uninstall:** `/plugin uninstall` opens Claude Code's plugin panel on the
uninstall action. From a shell it is `claude plugin uninstall gaia@gaia-marketplace`,
with `--scope` set to the scope you installed at. On the npm route, run `gaia
uninstall`, then `npm uninstall @jaguilar87/gaia`. Either way, `~/.gaia/gaia.db`
is yours. Every install shares it, and uninstalling never deletes it. `gaia
uninstall` even takes a snapshot of it first.

**If something goes wrong live:** don't debug in front of Gerry. Say "Let me show
you what it looks like instead" and play `out/gaia.mp4` (about 3:29), or go back
to the deck's page 6 and walk "It grows with you" and the accent box "what is
Gaia, and what can you do for me?".

---

## Closing

What I want you to keep is page 2's bottom line. Hooks decide by rule: what runs,
what waits for your yes, and whether a contract is accepted. Skills and agents
follow: they are written instructions a model follows, and anyone on the team can
write more. The CLI joins the two, and everything it learns stays yours, on your
machine.

---

## Q&A bank

1. **"What does it cost, and does it slow us down?"**
   I don't have a cost figure to give you. I left my turn counts out because older
   versions registered the hooks twice, which inflated them. What I can say is
   that 94% of my commands only read and never stopped to ask. The checks are
   rules in code, not extra model calls. Gaia also tracks cost and time for each
   turn, separately from discipline.

2. **"Is it safe? What can it do without me?"**
   It can read, validate and dry-run without asking. Anything that changes
   something waits for your yes on that exact command. The approval is single-use,
   byte for byte, and lasts 30 minutes. Some irreversible commands never run at
   all, with nothing to approve. Reading credential files, like SSH keys or `.env`
   files, is refused the same way.

3. **"What data does it keep, and where?"**
   Everything Gaia keeps is in one local file, `~/.gaia/gaia.db`: memory, contracts,
   plans and approvals. It moves only if you configure another location, and
   uninstalling never deletes it. The conversation with the model itself goes
   through Claude Code, the same as it does today.

4. **"Would it work for other teams?"**
   The specialists already cover application code, infrastructure, the cluster,
   live systems and Gaia itself, and you can add your own. It reaches as many
   projects as you scan. To be clear, today the database lives on each person's
   machine. Page 1 is what a team needs to share. It is the direction, not a
   claim that team-wide sharing is finished.

5. **"How is this different from plain Claude Code?"**
   You still talk to Claude Code. Gaia adds three things around it. Rules in code
   that decide what runs and what waits for you. Specialists that each return a
   contract, judged by rule. And memory that outlives the session.

6. **"What do you mean by 'deterministic'?"**
   Decided by a rule in code: the same answer every time, with no model involved.
   Whether a command waits for your approval is deterministic. So is whether a
   contract is accepted. What a specialist writes is not. That part is
   "semantic": a model following instructions.

7. **"What isn't built yet?"**
   The amber box on page 1, VERIFICATION. A checker who did not do the work can
   pass or fail a check, but that verdict doesn't yet close the step by itself.
   Marking the step done is still a manual act. Also, reading a project section
   isn't checked against the agent's read permission yet. Writing is checked.
   And OpenCode support is in beta.

8. **"Does it work outside Claude Code?"**
   Yes, in OpenCode, in beta. You install it through the npm package, then run
   `gaia install --host opencode`.

9. **"Can we add our own agents and skills?"**
   Yes. It's MIT open source. An agent is one definition file that names its role,
   its tools and what it may read and write. A skill is written instructions.
   Gaia even ships a skill for writing each: `agent-creation` and `skill-creation`.

10. **"What do '583 yes · 52 no · 218 expired' and '94% only read' tell me?"**
    They are from one machine, mine, counted from Gaia's own logs, not claimed by an
    agent. 583 times I approved a change, 52 times I rejected one, and 218
    requests expired with no answer, so nothing ran. 423 of 450 commands were
    read-only, which is 94%. Read them as a picture of how one person works
    with it, not as a benchmark.

11. **"What if the model ignores its instructions?"**
    The rules that matter don't live in the model. The command check and the
    contract check are code that the host runs at fixed moments, and the agent
    can't rewrite them. The orchestrator can't approve anything itself.

---

## Appendix · The video narration

Verbatim from `tools/video/narration.json`, one block per page, in the video's
order. The video is pages 1 to 6, about 3:29, light theme.

**Page 1 · Why a team needs this** (`1.wav`)

> Today, most people work with AI alone. One person, one agent, one session.
> Nothing carries over. For a team to work with AI as a team, it has to share
> five things: how the work is shaped, how the output is shaped, what is
> remembered, what can be seen, and what can be checked.

**Page 2 · What Gaia is** (`2.wav`)

> This is Gaia. You talk to one agent: the orchestrator. It holds the
> conversation, decides what needs to happen, and never makes the change itself.
> It hands the work to a specialist, each one born clean for a single piece of
> work, and each returning a contract: what was done, and with what evidence.
> Around them, Gaia keeps approvals, contracts, memory, and plans. And it's built
> from two halves. Hooks, where a rule decides. And skills and agents, where a
> model follows instructions. The CLI joins them.

**Page 3 · The life of a request** (`3.wav`)

> Every request lives the same life. When a specialist is born, it's handed its
> context: its contract, the parts of the project it may touch, and what Gaia
> remembers about you. Then, before any command runs, a rule, not a model, sorts
> it. Reads run. Changes wait for your yes, with the exact command in front of
> you. And a few commands never run at all. After every command, the result is
> recorded. When the specialist finishes, its contract is judged by rule, never
> by what it says in prose. Only two moments can stop a turn: before an
> execution, and at contract validation.

**Page 4 · Contracts** (`4.wav`)

> Everything travels as a contract. The orchestrator sends the work. Gaia's
> engine hands the specialist a contract made for it: what it's for, and which
> parts of the project it may read and write. The specialist answers in that
> same form: its status, its evidence, what's still open. The engine checks it by
> rule, and only then does the orchestrator read it and decide what's next.
> There are two kinds: the agent contract, one per turn, and the project
> contract, one per project.

**Page 5 · What Gaia keeps** (`5.wav`)

> And Gaia remembers, in four memories, each answering one question. Project
> memory: what do we know about the project, and about you? Operational memory:
> what are we doing, and what is still open? From a brief, to a plan, to tasks
> and their gates. Execution memory: what did we execute, and what did it
> produce? Episodic memory: what happened, and when? Recorded by the engine, not
> narrated by the agent. You decide what is curated. The engine records the rest.

**Page 6 · Install it, ask it** (`6.wav`)

> Starting is simple. You install it: one command. You ask it what it is. You
> point it at your repos. You describe the problem. And then, you work
> agentically. It plans, delegates, and asks before it changes anything.
> Everything it learns stays in one database, on your machine. So: what is Gaia,
> and what can you do for me?
