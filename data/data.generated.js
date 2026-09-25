// GENERATED FILE — do not edit by hand.
// Produced by build-data.mjs from data/document.yaml + data/pages/*.yaml.
window.__DOC__ = {
  "title": "GAIA",
  "subtitle": "Generative AI Interface for Agents",
  "version": "0.1.0",
  "palette": "neutral",
  "pages": [
    {
      "id": "s-shared-semantics",
      "layout": "grid",
      "form": "dashboard",
      "columns": 5,
      "filters": [
        {
          "key": "the-human",
          "label": "who decides?",
          "steps": [
            "A person does, and the machine stops to let them: HOOKS halts the turn exactly where a decision is needed, and APPROVALS keeps the record of who said yes. The record names every actor that touched it — what belongs to a person, and only to a person, is the yes."
          ]
        },
        {
          "key": "double-reader",
          "label": "can we trust it?",
          "steps": [
            "Because the output always has the same shape, and that shape is checked, not believed: OUTPUTS is the shape, EVIDENCE is the trail read out of it, COMPLIANCE is the grade given to it. A machine and a person can both read it without taking anyone's word."
          ]
        },
        {
          "key": "memory",
          "label": "what do we remember?",
          "steps": [
            "The project's current facts (CONTEXT), what was already settled (DURABLE), what actually happened turn by turn (EPISODIC), and what is still open (CARRY-FORWARD) — and also the history itself (CONVENTIONS), because one shared way of writing commits and docs is what lets someone who was not there follow it. Memory is more than a memory store."
          ]
        },
        {
          "key": "nothing-self-declared",
          "label": "is it really done?",
          "steps": [
            "Only when someone else says so, and only when nothing is left hanging. TASK says how a step will be checked, VERIFICATION says who may check it — never whoever did the work — EVIDENCE is the trail left behind, and COMPLIANCE is the grade computed from it. CARRY-FORWARD is the rest of the answer: what is still open is carried explicitly into the next session, so nothing pending is lost. Without that, «done» can mean «quietly abandoned»."
          ]
        },
        {
          "key": "security",
          "label": "who can touch what?",
          "steps": [
            "Each agent, only its own area, and only with the consent its act deserves: STRUCTURE says what an agent may touch, APPROVALS asks for more explicit consent the riskier the act is, and ANOMALIES flags whoever steps outside their scope."
          ]
        }
      ],
      "sections": [
        {
          "id": "thesis",
          "treatment": [
            "plain"
          ],
          "order": 1,
          "span": 5,
          "columns": 1,
          "children": [
            {
              "id": "th-claim",
              "title": "An AI-oriented way of working.",
              "description": [
                "how does an organization break the isolation of agentic work?"
              ],
              "detail": "Agentic work is lonely by default: one person, one agent, one session. Nothing is shared between them, so what one turn learns is lost for the next, no two people work alike, and a model only knows what it can read. Sharing five things turns lonely work into team work: how the work is shaped, how the output is shaped, what is remembered, what can be seen while it happens, and what can be checked afterwards.",
              "variant": "accent",
              "treatment": [
                "centered"
              ]
            }
          ]
        },
        {
          "id": "pillars",
          "title": "An organization should share…",
          "treatment": [
            "envelope"
          ],
          "order": 2,
          "span": 5,
          "columns": 5,
          "children": [
            {
              "id": "workflows",
              "title": "WORKFLOWS",
              "subtitle": "the shape of the work",
              "treatment": [
                "envelope"
              ],
              "order": 1,
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "w-routing",
                  "order": 1,
                  "kicker": "ROUTING",
                  "title": "Agentic orchestration",
                  "description": [
                    "every request goes to whoever owns it"
                  ],
                  "detail": "Orchestration is a way of working, not a list of roles. One coordinator does no work itself: it reads a request, sends it to whoever owns that area, and reads the answer back. Because the route follows ownership, the work moves the same way no matter who asked for it."
                },
                {
                  "id": "w-structure",
                  "order": 2,
                  "kicker": "STRUCTURE",
                  "title": "What an agent is",
                  "description": [
                    "a contract, an identity, a scope, and known errors"
                  ],
                  "detail": "An agent is more than a prompt: a contract for what it must return, an identity for how it works, a scope for what it may touch, and the errors it knows how to handle. Every agent has those same four parts, and every agent owns one area — nine agents exist today, the orchestrator and eight specialists, and more can be added. That is what lets one agent read another one's work.",
                  "filters": [
                    "security"
                  ]
                },
                {
                  "id": "w-protocol",
                  "order": 3,
                  "kicker": "PROTOCOL",
                  "title": "How agents talk",
                  "description": [
                    "one fixed form, never loose prose"
                  ],
                  "detail": "Agents hand each other one fixed form, never free text. It always carries the same fields: what was done, what was run, what was checked, what is still open. Whoever reads it already knows its shape, so nobody has to read a story to work out what happened."
                },
                {
                  "id": "w-hooks",
                  "order": 4,
                  "kicker": "HOOKS",
                  "title": "What keeps the course",
                  "description": [
                    "the rules live outside the agent — and stop for a person"
                  ],
                  "detail": "The rules of a turn live outside the agent, in a layer the agent cannot rewrite. That layer says which steps are allowed, stops the retries after two, and halts the turn when an action would change something real. So staying on course does not depend on the agent's good will, and a person decides before anything real changes.",
                  "filters": [
                    "the-human"
                  ]
                }
              ]
            },
            {
              "id": "standards",
              "title": "STANDARDS",
              "subtitle": "the shape of the output",
              "treatment": [
                "envelope"
              ],
              "order": 2,
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "s-skills",
                  "order": 1,
                  "kicker": "SKILLS",
                  "title": "How the work is done",
                  "description": [
                    "written procedures: how to act, how to answer, even the tone"
                  ],
                  "detail": "A skill is a written procedure: how to work on something, how to answer, even which tone to hold. The base discipline every agent must hold travels with it from its first word — on purpose; everything else is picked up only when it is needed, because the task matches what the skill is for or because an agent asks for it by name. So the way of working is written down once for everyone, and loaded at the moment it earns its place."
                },
                {
                  "id": "s-outputs",
                  "order": 2,
                  "kicker": "OUTPUTS",
                  "title": "The standard is the output",
                  "description": [
                    "one shape, read by the next agent and by a person"
                  ],
                  "detail": "The output has one fixed shape. The next agent can use the work without reading it again, and a person can check it without having to interpret it. One shape, two readers — drop the shape and both of them are back to reading prose.",
                  "filters": [
                    "double-reader"
                  ]
                },
                {
                  "id": "s-conventions",
                  "order": 3,
                  "kicker": "CONVENTIONS",
                  "title": "Commits, PRs, docs",
                  "description": [
                    "one way of writing the history, for everyone"
                  ],
                  "detail": "One shared way of writing the project's history: how a commit message is written, what a pull request has to explain, how a README is laid out. When everyone writes the same way, the history stays readable for someone who was not there. That makes it memory too, even though it does not live in a memory store — and it is what makes the past usable months later.",
                  "filters": [
                    "memory"
                  ]
                },
                {
                  "id": "s-tools",
                  "order": 4,
                  "kicker": "TOOLS",
                  "title": "Tools the team provides",
                  "description": [
                    "provided from inside, shared outside, improved by anyone"
                  ],
                  "detail": "Any tool can be used; what matters is who provides it. The organization should provide its own internal tools, the whole team should work with the same external ones, and the setup around them should be something anyone can improve. So nobody builds the same thing twice, the work looks the same wherever it happens, and no small group owns the toolchain."
                }
              ]
            },
            {
              "id": "knowledge",
              "title": "KNOWLEDGE",
              "subtitle": "project memory, never personal",
              "treatment": [
                "envelope"
              ],
              "order": 3,
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "k-context",
                  "order": 1,
                  "kicker": "CONTEXT",
                  "title": "Project context",
                  "description": [
                    "scanned, not remembered — and it grows with the project"
                  ],
                  "detail": "Project context is a process, not a file. The facts are found by scanning the project the same way every time, every turn adds what it learned, and each agent receives only the slice its role needs. Because it is measured rather than remembered, it is the most current picture available.",
                  "filters": [
                    "memory"
                  ]
                },
                {
                  "id": "k-durable",
                  "order": 2,
                  "kicker": "DURABLE",
                  "title": "Long memory",
                  "description": [
                    "decisions and facts about the project — not rules for the tool"
                  ],
                  "detail": "Long memory keeps what stays true after the session that produced it is closed: decisions already taken, stable facts, dead ends worth not walking again. It holds facts about the project — not rules for the tool, not a record of how anyone behaves. So a new session starts knowing what the project already settled, instead of deciding it again.",
                  "filters": [
                    "memory"
                  ]
                },
                {
                  "id": "k-carry",
                  "order": 3,
                  "kicker": "CARRY-FORWARD",
                  "title": "Work left open",
                  "description": [
                    "what the next session has to pick up"
                  ],
                  "detail": "Some work is left open on purpose, and this is where it waits. A pending item does not die with the chat that raised it: it comes back at the start of the next session. That is what makes stopping safe — nothing pending is lost, and «done» can never mean «quietly abandoned».",
                  "filters": [
                    "memory",
                    "nothing-self-declared"
                  ]
                },
                {
                  "id": "k-episodic",
                  "order": 4,
                  "kicker": "EPISODIC",
                  "title": "Recorded by the machine",
                  "description": [
                    "every turn is written down, not the agent's version of it"
                  ],
                  "detail": "The record of a turn is written by the machine when the turn closes. It captures what was asked, how risky it was, what came out, what it cost and what looked odd — every time, whether the agent cooperates or not. Nobody narrates their own turn into it, so what the turn actually was can be trusted.",
                  "filters": [
                    "memory"
                  ]
                }
              ]
            },
            {
              "id": "observability",
              "title": "OBSERVABILITY",
              "subtitle": "a value that can change",
              "treatment": [
                "envelope"
              ],
              "order": 4,
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "o-brief",
                  "order": 1,
                  "kicker": "BRIEF",
                  "title": "Where ideas are kept",
                  "description": [
                    "a place to capture an idea, and what «done» will mean"
                  ],
                  "detail": "A brief is one place where an idea is written down and kept, rather than a message in a chat that scrolls away. It captures ideas, puts them in order, turns a request or a proposal into something that can be planned, and carries what «done» will mean next to the idea itself. So an idea can be found again later, and nobody decides afterwards what finished was supposed to mean."
                },
                {
                  "id": "o-plan",
                  "order": 2,
                  "kicker": "PLAN",
                  "title": "From idea to solution",
                  "description": [
                    "research the idea, turn it into a solution, get the tasks"
                  ],
                  "detail": "A plan is where an idea becomes a technical solution. The idea is researched against the real code first — can this be done, and where does it land — and the tasks are what that solution needs. So the steps come out of the research instead of out of a guess, while what «done» means stays with the idea."
                },
                {
                  "id": "o-task",
                  "order": 3,
                  "kicker": "TASK",
                  "title": "Atomic, checkable steps",
                  "description": [
                    "every step says how it will be checked"
                  ],
                  "detail": "A task is a group of steps, and each step carries the check that closes it. The check is decided when the work is planned, not improvised when it is reviewed — a command to run, a piece of code, a judgement, or a review. A step is atomic on purpose: it is either waiting, done or skipped, and the «being worked on» lives in the turn that works it, not in the step. From a planned step, the turn that did the work and the turn that checked it can both be followed — step, work and check stay one thread.",
                  "filters": [
                    "nothing-self-declared"
                  ]
                },
                {
                  "id": "o-verification",
                  "order": 4,
                  "kicker": "VERIFICATION",
                  "title": "Blind by design",
                  "description": [
                    "who may run the check: never whoever did the work"
                  ],
                  "detail": "Verification is who is allowed to run the check. Whoever checks did not do the work and arrives without inheriting the author's context, so the check reads the evidence, not the author's story. The check is tied to the step rather than to a role, so it cannot be handed back to the author: nobody signs off their own. One link is named here before it exists: the checker's verdict closes the check, not yet the step — marking a step done is still a hand-made act that does not have to wait for that verdict.",
                  "variant": "warn",
                  "filters": [
                    "nothing-self-declared"
                  ]
                }
              ]
            },
            {
              "id": "audit",
              "title": "AUDIT",
              "subtitle": "who answers for what happened",
              "treatment": [
                "envelope"
              ],
              "order": 5,
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "a-approvals",
                  "order": 1,
                  "kicker": "APPROVALS",
                  "title": "A person owns every change",
                  "description": [
                    "the riskier the act, the more explicit the consent"
                  ],
                  "detail": "Acts are graded by risk. Reading changes nothing and needs no permission; changing something real needs a person to say yes, explicitly. The record of that yes cannot be edited afterwards: every moment of an approval — asked, shown, approved, executed — is hashed onto the moment before it, so the record breaks if a single step is altered, and the database itself refuses to change or delete an entry. The record is protected by the engine, not by a promise.",
                  "filters": [
                    "the-human",
                    "security"
                  ]
                },
                {
                  "id": "a-evidence",
                  "order": 2,
                  "kicker": "EVIDENCE",
                  "title": "The work leaves a trail",
                  "description": [
                    "what was run, what was touched, what was checked"
                  ],
                  "detail": "Every turn leaves a trail inside its own answer. It records what was run, what was touched, what was checked and what is still open — a filled-in form, not a story. So it can be read without having to trust whoever wrote it.",
                  "filters": [
                    "double-reader",
                    "nothing-self-declared"
                  ]
                },
                {
                  "id": "a-compliance",
                  "order": 3,
                  "kicker": "COMPLIANCE",
                  "title": "Every turn is graded",
                  "description": [
                    "six mechanical checks on its own record"
                  ],
                  "detail": "Every turn is graded by six mechanical checks on its own record. They ask whether the answer was well formed, whether it looked before it changed anything, whether it used the context it was given, whether it ran its commands cleanly, whether it repeated itself, and whether it wrote outside what it owns — and the grade comes out as a score and a letter. Nobody is asked to rate their own turn: the grade is computed from what the turn actually did.",
                  "filters": [
                    "double-reader",
                    "nothing-self-declared"
                  ]
                },
                {
                  "id": "a-anomalies",
                  "order": 4,
                  "kicker": "ANOMALIES",
                  "title": "Bad discipline is flagged",
                  "description": [
                    "skipped checks, missing evidence, work outside scope"
                  ],
                  "detail": "Bad discipline is flagged on its own, apart from cost. One side names skipped looking, missing or empty evidence, a skipped check, work outside what someone owns; the other names how much it cost, how long it took, how often it called out. Keeping the two apart is the point: bad discipline is a finding by itself, not a footnote at the end of a cost report.",
                  "filters": [
                    "security"
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "channel",
          "treatment": [
            "plain"
          ],
          "order": 3,
          "span": 5,
          "columns": 1,
          "children": [
            {
              "id": "ch-legend",
              "type": "separator",
              "style": "dotted",
              "span": 1,
              "text": "amber = named here, not instrumented yet · exactly one box carries it: VERIFICATION, in Observability"
            }
          ]
        }
      ],
      "name": "1 · Why",
      "order": 0
    },
    {
      "id": "p2-the-map",
      "layout": "grid",
      "form": "mindmap",
      "columns": 1,
      "filters": [
        {
          "key": "the-human",
          "label": "who decides?",
          "steps": [
            "You do. You talk to the orchestrator, and anything that changes something real waits for your approval."
          ]
        },
        {
          "key": "nothing-self-declared",
          "label": "is it really done?",
          "steps": [
            "Not because the specialist says so: its contract is read, and planned tasks are checked, before you are told."
          ]
        },
        {
          "key": "memory",
          "label": "what do we remember?",
          "steps": [
            "Your rules, your preferences and what is pending per project: the orchestrator reads it and writes it, and it outlives the session."
          ]
        },
        {
          "key": "deterministic",
          "label": "a rule decides",
          "steps": [
            "The hooks decide by a rule in code, the same answer every time, with no model involved: whether a command waits for your approval, and whether a specialist's contract is accepted."
          ]
        },
        {
          "key": "semantic",
          "label": "a model follows instructions",
          "steps": [
            "The skills and the agents are written instructions a model follows: the orchestrator decides the what, the specialists do the how."
          ]
        },
        {
          "key": "the-contract",
          "label": "one contract, out and back",
          "steps": [
            "Every specialist ends its work with a contract: what was done, and with what evidence."
          ]
        },
        {
          "key": "one-turn",
          "label": "one turn",
          "steps": [
            "The orchestrator hands one piece of work to one specialist, and the specialist comes back with it: one turn."
          ]
        }
      ],
      "sections": [
        {
          "id": "you",
          "treatment": [
            "plain"
          ],
          "order": 1,
          "span": 1,
          "columns": 1,
          "children": [
            {
              "id": "mp-you",
              "order": 1,
              "kicker": "→ PAGE 5",
              "title": "You",
              "description": [
                "ask in your own words, approve what changes"
              ],
              "detail": "You talk only to the orchestrator, in your own words. Anything that changes something real — a push, an apply, a delete — waits until you approve it, after you have seen exactly what will happen.",
              "treatment": [
                "centered"
              ],
              "filters": [
                "the-human"
              ]
            },
            {
              "id": "mp-you-rel",
              "type": "separator",
              "order": 2,
              "text": "▼ converse · ▲ sign what changes something"
            }
          ]
        },
        {
          "id": "gaia",
          "title": "GAIA",
          "subtitle": "the orchestration layer · it converses with you and coordinates the work, but never makes the changes itself",
          "treatment": [
            "envelope"
          ],
          "order": 2,
          "span": 1,
          "columns": 1,
          "children": [
            {
              "id": "gaia-top",
              "treatment": [
                "plain"
              ],
              "order": 1,
              "span": 1,
              "columns": 3,
              "children": [
                {
                  "id": "gaia-orch",
                  "title": "The orchestrator",
                  "subtitle": "one per session, you talk only to it",
                  "treatment": [
                    "envelope"
                  ],
                  "order": 1,
                  "span": 1,
                  "columns": 1,
                  "children": [
                    {
                      "id": "mp-orchestrator",
                      "order": 1,
                      "kicker": "→ PAGE 4",
                      "title": "Decides the WHAT",
                      "description": [
                        "holds the conversation, never edits"
                      ],
                      "detail": "The orchestrator is the one agent you talk to. It understands what you want, decides the route, shows it to you before starting, and keeps the thread end to end. It reads memory to remember what came before. It does not edit files, by design: it hands the work to a specialist.",
                      "treatment": [
                        "centered"
                      ],
                      "filters": [
                        "one-turn",
                        "semantic",
                        "memory"
                      ]
                    }
                  ]
                },
                {
                  "id": "gaia-manages",
                  "title": "What Gaia manages",
                  "subtitle": "through its own CLI",
                  "treatment": [
                    "envelope"
                  ],
                  "order": 2,
                  "span": 2,
                  "columns": 4,
                  "children": [
                    {
                      "id": "mg-memory",
                      "order": 1,
                      "kicker": "→ PAGE 8",
                      "title": "Memory",
                      "description": [
                        "rules, preferences, pending"
                      ],
                      "detail": "Memory outlives the session: your rules, your preferences, and what is pending per project. The orchestrator reads it at the start and writes to it on purpose, through Gaia's own command line.",
                      "filters": [
                        "memory"
                      ]
                    },
                    {
                      "id": "mg-plans",
                      "order": 2,
                      "kicker": "→ PAGE 7",
                      "title": "Plans & tasks",
                      "description": [
                        "a brief becomes checked tasks"
                      ],
                      "detail": "A brief becomes a plan of tasks, and each task's work is checked by someone who did not do it. Gaia keeps them and moves them from one status to the next through its own command line.",
                      "filters": [
                        "nothing-self-declared"
                      ]
                    },
                    {
                      "id": "mg-contracts",
                      "order": 3,
                      "kicker": "→ PAGE 6",
                      "title": "Contracts",
                      "description": [
                        "every specialist returns one"
                      ],
                      "detail": "A contract says what was asked, what was found, what changed, and with what evidence. Gaia stores it, and a hook judges it by rule before the turn may close. The orchestrator reads it through Gaia's own command line.",
                      "filters": [
                        "the-contract",
                        "nothing-self-declared",
                        "deterministic"
                      ]
                    },
                    {
                      "id": "mg-approvals",
                      "order": 4,
                      "kicker": "→ PAGE 5",
                      "title": "Approvals",
                      "description": [
                        "your yes to one exact command"
                      ],
                      "detail": "A hook decides by rule which commands change something real, and holds each one until you approve it. Gaia keeps every approval, and the orchestrator can see the ones waiting for you through its own command line; it can never approve one itself.",
                      "filters": [
                        "the-human",
                        "deterministic"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "id": "gaia-rel",
              "treatment": [
                "plain"
              ],
              "order": 2,
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "mp-gaia-rel",
                  "type": "separator",
                  "order": 1,
                  "text": "▼ delegates · ▲ returns a contract"
                }
              ]
            },
            {
              "id": "gaia-specialists",
              "title": "The specialists",
              "subtitle": "8 of them, one per field",
              "treatment": [
                "envelope"
              ],
              "order": 3,
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "mp-specialists",
                  "order": 1,
                  "kicker": "→ PAGE 3",
                  "title": "Do the HOW",
                  "description": [
                    "each born clean for one piece of work, ends with a contract"
                  ],
                  "detail": "Specialists do the work, each in its field: application code, infrastructure, the cluster, live systems, Gaia itself. Each one is born clean for one piece of work, owns that one task, and ends with a contract: what was done, and with what evidence.",
                  "treatment": [
                    "centered"
                  ],
                  "filters": [
                    "one-turn",
                    "semantic",
                    "the-contract",
                    "nothing-self-declared"
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "halves",
          "treatment": [
            "plain"
          ],
          "order": 3,
          "span": 1,
          "columns": 1,
          "children": [
            {
              "id": "halves-line",
              "type": "separator",
              "order": 1,
              "text": "hooks decide by rule · skills and agents follow · the CLI joins"
            }
          ]
        }
      ],
      "name": "2 · What Gaia is",
      "order": 1
    },
    {
      "id": "p3-whos-who",
      "layout": "grid",
      "form": "comparison",
      "columns": 2,
      "filters": [
        {
          "key": "one-turn",
          "label": "one turn",
          "steps": [
            "The orchestrator holds the plan and calls Gaia's own CLI; a specialist lives one turn, from its dispatch to its close, and that turn ends with a contract."
          ]
        },
        {
          "key": "the-contract",
          "label": "one contract, out and back",
          "steps": [
            "A specialist goes out with a task and comes back with a contract; gaia-verifier checks the work of a task against it."
          ]
        },
        {
          "key": "the-human",
          "label": "who decides?",
          "steps": [
            "You ask, and you decide what changes. The orchestrator cannot edit your files, so every change goes through a specialist and, when it changes something real, through your approval."
          ]
        },
        {
          "key": "memory",
          "label": "what do we remember?",
          "steps": [
            "The orchestrator reads memory and curates it, and memory that outlives the session is one of the things Gaia adds to Claude Code."
          ]
        },
        {
          "key": "deterministic",
          "label": "a rule decides",
          "steps": [
            "Two of the orchestrator's limits are decided by rule in code, not by a model: it holds no editing tools, and its only commands are Gaia's own CLI."
          ]
        },
        {
          "key": "semantic",
          "label": "a model follows instructions",
          "steps": [
            "A specialist's turn is a model at work, following the skills it loads for that kind of work."
          ]
        },
        {
          "key": "nothing-self-declared",
          "label": "is it really done?",
          "steps": [
            "A specialist does not say it is done: its contract is read, and gaia-verifier checks the work of a planned task."
          ]
        },
        {
          "key": "changes-things",
          "label": "who changes things?",
          "steps": [
            "Four specialists change things in your systems: application code, infrastructure code, the cluster's desired state, and live cloud diagnosis."
          ]
        },
        {
          "key": "plans-and-checks",
          "label": "who plans and checks?",
          "steps": [
            "gaia-planner turns a brief into a plan of tasks; gaia-verifier checks each task's work, and is never the one that did it."
          ]
        },
        {
          "key": "looks-after-gaia",
          "label": "who looks after Gaia?",
          "steps": [
            "Two specialists work on Gaia itself: gaia-operator runs its day-to-day operations, gaia-system changes its own code."
          ]
        }
      ],
      "sections": [
        {
          "id": "zoom",
          "treatment": [
            "plain"
          ],
          "order": 1,
          "span": 2,
          "columns": 1,
          "children": [
            {
              "id": "zoom-rail",
              "type": "rail",
              "treatment": [
                "centered"
              ],
              "title": "ZOOM · GAIA AND THE SPECIALISTS"
            }
          ]
        },
        {
          "id": "you",
          "treatment": [
            "plain"
          ],
          "order": 2,
          "span": 2,
          "columns": 1,
          "children": [
            {
              "id": "you-box",
              "kicker": "YOU",
              "title": "Ask in your words",
              "description": [
                "one request in plain language, to the orchestrator only"
              ],
              "detail": "A <b>request</b> is one prompt, in your own words. You talk only to the orchestrator: specialists never speak to you directly, and anything they need from you comes back through it.",
              "filters": [
                "the-human"
              ]
            }
          ]
        },
        {
          "id": "orchestrator",
          "treatment": [
            "envelope"
          ],
          "order": 3,
          "span": 1,
          "columns": 2,
          "children": [
            {
              "id": "orch-rail",
              "type": "rail",
              "order": 1,
              "span": 2,
              "title": "ORCHESTRATOR · one per session"
            },
            {
              "id": "orch-conversation",
              "order": 2,
              "kicker": "HOLDS",
              "title": "The conversation",
              "description": [
                "you talk only to it"
              ],
              "detail": "The orchestrator is the only agent that keeps the thread from your request to the answer. It decides the route, shows it to you before starting, and tells you the result from what the specialists delivered."
            },
            {
              "id": "orch-memory",
              "order": 3,
              "kicker": "HOLDS",
              "title": "Curated memory",
              "description": [
                "reads it, and curates it"
              ],
              "detail": "It reads curated memory at the start of the session and writes it on purpose. Only the orchestrator and gaia-operator write curated memory; the rule is <code>subagent_memory_write_guard</code>. Episodes, the automatic trace of each turn, are written at the turn's close by the SubagentStop hook.",
              "filters": [
                "memory"
              ]
            },
            {
              "id": "orch-plan",
              "order": 4,
              "kicker": "HOLDS",
              "title": "The plan",
              "description": [
                "briefs, plans, tasks"
              ],
              "detail": "It writes the <b>brief</b> and moves briefs, plans and tasks from one status to the next (<code>gaia brief new|edit</code>, <code>set-status</code>). Breaking a plan into tasks belongs to gaia-planner, and closing a task after its check belongs to gaia-verifier.",
              "filters": [
                "one-turn"
              ]
            },
            {
              "id": "orch-cli",
              "order": 5,
              "kicker": "RUNS",
              "title": "Gaia's own CLI",
              "description": [
                "its only commands"
              ],
              "detail": "Its commands are <code>gaia</code> verbs: <code>memory</code>, <code>contract view|list</code>, <code>brief</code>, <code>approvals list|show</code>, <code>context</code>. It can see the approvals waiting for you; it can never approve one.",
              "filters": [
                "one-turn",
                "deterministic"
              ]
            },
            {
              "id": "orch-never",
              "order": 6,
              "span": 2,
              "kicker": "NEVER",
              "title": "Edits your files",
              "description": [
                "no editing tools, by design"
              ],
              "detail": "Before any tool runs, the PreToolUse hook asks whether the orchestrator may hold it at all (<code>check_delegate_mode</code> against <code>ORCHESTRATOR_ALLOWED_TOOLS</code>). Editing is not in that set, so every change is handed to a specialist. A rule in code decides this, not the model.",
              "filters": [
                "deterministic",
                "the-human"
              ]
            }
          ]
        },
        {
          "id": "specialist",
          "treatment": [
            "envelope"
          ],
          "order": 4,
          "span": 1,
          "columns": 2,
          "children": [
            {
              "id": "spec-rail",
              "type": "rail",
              "order": 1,
              "span": 2,
              "title": "SPECIALIST · one per piece of work"
            },
            {
              "id": "spec-turn",
              "order": 2,
              "kicker": "LIVES",
              "title": "One turn",
              "description": [
                "born for this piece of work"
              ],
              "detail": "A <b>turn</b> is one specialist's life, from dispatch to close. It is born clean at the dispatch, with the project context it may read, owns one task, and ends in one of six states; only COMPLETE is final.",
              "filters": [
                "one-turn",
                "semantic"
              ]
            },
            {
              "id": "spec-field",
              "order": 3,
              "kicker": "WORKS ON",
              "title": "Its own field",
              "description": [
                "code, cloud, a cluster, a live system"
              ],
              "detail": "Each specialist owns one surface: application code, infrastructure code, the cluster's desired state, live cloud state, or Gaia itself. The request is routed to the one that owns it (<code>surface_routing</code>)."
            },
            {
              "id": "spec-skills",
              "order": 4,
              "kicker": "LOADS",
              "title": "Its skills",
              "description": [
                "how the work is done"
              ],
              "detail": "A <b>skill</b> is written instructions an agent loads. Claude Code injects a specialist's skills from its own definition file; Gaia reminds it when a file it touches is governed by one, and checks afterwards that it was loaded.",
              "filters": [
                "semantic"
              ]
            },
            {
              "id": "spec-copy",
              "order": 5,
              "kicker": "WORKS IN",
              "title": "Its own copy",
              "description": [
                "of your repo, apart from yours"
              ],
              "detail": "A specialist that writes to a repository works in its own copy of it, a <code>git worktree</code> created with <code>gaia worktree create</code> on its own branch, so two turns never share one working tree."
            },
            {
              "id": "spec-contract",
              "order": 6,
              "span": 2,
              "kicker": "RETURNS",
              "title": "A contract",
              "description": [
                "a form the orchestrator reads"
              ],
              "detail": "The <b>contract</b> says what was asked, what was found, what changed, with what evidence, and the state it ends in. The SubagentStop hook reads only the stored contract, never the reply text; a missing or unfinished contract sends the turn back (<code>exit 2</code>).",
              "filters": [
                "one-turn",
                "the-contract",
                "nothing-self-declared"
              ]
            }
          ]
        },
        {
          "id": "agents",
          "title": "Agents",
          "subtitle": "9 agents: the orchestrator and 8 specialists",
          "treatment": [
            "envelope"
          ],
          "order": 5,
          "span": 2,
          "columns": 5,
          "children": [
            {
              "id": "ag-orchestrator",
              "order": 1,
              "span": 2,
              "kicker": "orchestrator",
              "title": "Talks with you",
              "description": [
                "routes, then tells you"
              ],
              "detail": "<code>orchestrator</code>: the one agent you talk to. It holds the conversation and hands every change to a specialist."
            },
            {
              "id": "ag-operator",
              "order": 2,
              "kicker": "gaia-operator",
              "title": "Runs Gaia",
              "description": [
                "memory, schedules"
              ],
              "detail": "<code>gaia-operator</code>: Gaia's day-to-day operations, such as curated memory and scheduled tasks (<code>gaia schedule register|sync</code>).",
              "filters": [
                "looks-after-gaia"
              ]
            },
            {
              "id": "ag-planner",
              "order": 3,
              "kicker": "gaia-planner",
              "title": "Plans the work",
              "description": [
                "brief into tasks"
              ],
              "detail": "<code>gaia-planner</code>: turns a brief into a plan of tasks, each with its gate (<code>plan save</code>, <code>task add</code>).",
              "filters": [
                "plans-and-checks"
              ]
            },
            {
              "id": "ag-developer",
              "order": 4,
              "kicker": "developer",
              "title": "App code",
              "description": [
                "writes and tests it"
              ],
              "detail": "<code>developer</code>: application code, its build and its tests.",
              "filters": [
                "changes-things"
              ]
            },
            {
              "id": "ag-platform",
              "order": 5,
              "kicker": "platform-architect",
              "title": "Infra code",
              "description": [
                "cloud as code"
              ],
              "detail": "<code>platform-architect</code>: infrastructure as code, such as Terraform.",
              "filters": [
                "changes-things"
              ]
            },
            {
              "id": "ag-gitops",
              "order": 6,
              "kicker": "gitops-operator",
              "title": "Cluster config",
              "description": [
                "desired state"
              ],
              "detail": "<code>gitops-operator</code>: the desired state of Kubernetes, its manifests and Flux configuration.",
              "filters": [
                "changes-things"
              ]
            },
            {
              "id": "ag-cloud",
              "order": 7,
              "kicker": "cloud-troubleshooter",
              "title": "Live systems",
              "description": [
                "diagnoses live state"
              ],
              "detail": "<code>cloud-troubleshooter</code>: diagnoses live cloud state and its drift from the desired state.",
              "filters": [
                "changes-things"
              ]
            },
            {
              "id": "ag-system",
              "order": 8,
              "kicker": "gaia-system",
              "title": "Gaia's code",
              "description": [
                "agents, skills, hooks"
              ],
              "detail": "<code>gaia-system</code>: changes Gaia itself, its agents, skills, hooks and CLI.",
              "filters": [
                "looks-after-gaia"
              ]
            },
            {
              "id": "ag-verifier",
              "order": 9,
              "kicker": "gaia-verifier",
              "title": "Checks the work",
              "description": [
                "never its own"
              ],
              "detail": "<code>gaia-verifier</code>: checks a planned task's work against its gate. The check is bound to the task, not the role, so whoever did the work cannot close it.",
              "filters": [
                "plans-and-checks",
                "the-contract",
                "nothing-self-declared"
              ]
            }
          ]
        },
        {
          "id": "adds",
          "treatment": [
            "plain"
          ],
          "order": 6,
          "span": 2,
          "columns": 1,
          "children": [
            {
              "id": "adds-box",
              "kicker": "WHAT GAIA ADDS",
              "title": "On Claude Code",
              "description": [
                "a plugin on its hooks, subagents and skills",
                "+ a database, contracts, approvals that show the exact command, and memory that outlives the session"
              ],
              "detail": "Gaia is a Claude Code plugin: it registers 12 hook events and ships its agents and skills through Claude Code's own subagents and skills. On top it adds a database (<code>gaia.db</code>), contracts, approvals that show you the exact command before it runs, and memory that outlives the session.",
              "filters": [
                "memory"
              ]
            }
          ]
        }
      ],
      "name": "3 · Who's who",
      "order": 2
    },
    {
      "id": "p4-life-of-a-request",
      "layout": "grid",
      "form": "dashboard",
      "columns": 1,
      "filters": [
        {
          "key": "deterministic",
          "label": "a rule decides",
          "steps": [
            "Every moment of the turn is a hook: code the host runs at a fixed moment, deciding by a rule, with no model involved."
          ]
        },
        {
          "key": "one-turn",
          "label": "one turn",
          "steps": [
            "One specialist's life, from dispatch to close: born, given its context, working, and handing back its contract."
          ]
        },
        {
          "key": "the-human",
          "label": "who decides?",
          "steps": [
            "PreToolUse holds any command that changes something, and the person sees the exact command before saying yes."
          ]
        },
        {
          "key": "nothing-self-declared",
          "label": "is it really done?",
          "steps": [
            "The turn can stop at two moments: before a command runs, and when the contract comes back and is judged."
          ]
        },
        {
          "key": "memory",
          "label": "what do we remember?",
          "steps": [
            "The specialist receives memory when it is born, and the close writes the episode of its turn."
          ]
        }
      ],
      "sections": [
        {
          "id": "turn",
          "title": "The life of a request",
          "subtitle": "Everything here hangs from Gaia. The left column is Gaia's own layer — what it pushes at open and what it answers on demand; from the user prompt on, someone is in the loop.",
          "treatment": [
            "envelope"
          ],
          "order": 1,
          "span": 1,
          "columns": 10,
          "children": [
            {
              "id": "hdr-gaia",
              "type": "rail",
              "order": 1,
              "span": 10,
              "treatment": [
                "centered"
              ],
              "title": "THE ORCHESTRATOR · HOLDS THE CONVERSATION · GAIA, the orchestration layer"
            },
            {
              "id": "s-open",
              "treatment": [
                "plain"
              ],
              "order": 2,
              "span": 3,
              "columns": 1,
              "children": [
                {
                  "id": "ss-push",
                  "title": "SessionStart",
                  "subtitle": "Deterministic context injection",
                  "treatment": [
                    "envelope"
                  ],
                  "order": 1,
                  "span": 1,
                  "columns": 2,
                  "children": [
                    {
                      "id": "sp-env",
                      "type": "rail",
                      "order": 1,
                      "span": 2,
                      "title": "System context"
                    },
                    {
                      "id": "sp-contracts",
                      "type": "rail",
                      "order": 2,
                      "span": 2,
                      "title": "Projects map"
                    },
                    {
                      "id": "sp-anchors",
                      "type": "rail",
                      "order": 3,
                      "span": 2,
                      "title": "Memory about you"
                    },
                    {
                      "id": "sp-worklist",
                      "type": "rail",
                      "order": 4,
                      "span": 2,
                      "title": "Open threads"
                    }
                  ]
                },
                {
                  "id": "ss-pull",
                  "title": "Orchestration tools",
                  "subtitle": "gaia CLI · the orchestrator's only commands",
                  "treatment": [
                    "envelope"
                  ],
                  "order": 2,
                  "span": 1,
                  "columns": 1,
                  "children": [
                    {
                      "id": "pl-memory",
                      "type": "rail",
                      "order": 1,
                      "span": 1,
                      "title": "Memory management"
                    },
                    {
                      "id": "pl-context",
                      "type": "rail",
                      "order": 2,
                      "span": 1,
                      "title": "Project context"
                    },
                    {
                      "id": "pl-plan",
                      "type": "rail",
                      "order": 3,
                      "span": 1,
                      "title": "Briefs and plans"
                    },
                    {
                      "id": "pl-contract",
                      "type": "rail",
                      "order": 4,
                      "span": 1,
                      "title": "Contracts"
                    },
                    {
                      "id": "pl-approvals",
                      "type": "rail",
                      "order": 5,
                      "span": 1,
                      "title": "Approvals"
                    },
                    {
                      "id": "pl-schedule",
                      "type": "rail",
                      "order": 6,
                      "span": 1,
                      "title": "Schedules"
                    }
                  ]
                }
              ]
            },
            {
              "id": "human-side",
              "treatment": [
                "plain"
              ],
              "order": 3,
              "span": 7,
              "columns": 7,
              "children": [
                {
                  "id": "s-prompt",
                  "treatment": [
                    "plain"
                  ],
                  "order": 1,
                  "span": 1,
                  "columns": 1,
                  "children": [
                    {
                      "id": "op-prompt",
                      "type": "rail",
                      "order": 1,
                      "rowspan": 2,
                      "treatment": [
                        "vertical"
                      ],
                      "title": "USER PROMPT"
                    }
                  ]
                },
                {
                  "id": "lifetime",
                  "title": "The turn's lifetime",
                  "subtitle": "from dispatch to close",
                  "treatment": [
                    "envelope"
                  ],
                  "order": 2,
                  "span": 6,
                  "columns": 4,
                  "children": [
                    {
                      "id": "lf-born",
                      "order": 1,
                      "kicker": "BORN",
                      "title": "PreToolUse",
                      "description": [
                        "checked, given a context, recorded"
                      ],
                      "detail": "<b>PreToolUse</b> — the gate, and one of the two places a turn can stop. In order: it decides whether the orchestrator may use the tool at all or must delegate; it sorts the command by tier, T0 to T3, refuses the never list outright and holds a T3 command for your approval; and, when the tool is a dispatch, it builds the specialist's context, caches it, and opens the turn's contract carrying the <code>plan_task_id</code> that will later forbid the specialist from declaring its own work done. A block here is <code>exit 2</code> — the command never runs. Nothing of the specialist existed before this cell.",
                      "variant": "bad",
                      "filters": [
                        "deterministic",
                        "one-turn",
                        "the-human",
                        "nothing-self-declared"
                      ]
                    },
                    {
                      "id": "lf-receives",
                      "order": 2,
                      "kicker": "RECEIVES",
                      "title": "SubagentStart",
                      "description": [
                        "context, routing, contract, memory"
                      ],
                      "detail": "<b>SubagentStart</b> — the first instant the specialist exists. It receives the context PreToolUse already built and cached: project context, surface routing, its contract form, its contract permissions, the memory index and the recent session events. Its ANCHORS — the identifiers it was handed — are written down here, so the close can measure which fraction of that context it actually touched. What it does NOT receive from Gaia is its skills: the host injects those from the agent's own definition.",
                      "filters": [
                        "deterministic",
                        "one-turn",
                        "memory"
                      ]
                    },
                    {
                      "id": "lf-works",
                      "order": 3,
                      "kicker": "WORKS",
                      "title": "PostToolUse",
                      "description": [
                        "calls tools and produces its work"
                      ],
                      "detail": "<b>PostToolUse</b> — the specialist works, and every tool it calls passes the same gate again: PreToolUse checks the call before it runs, PostToolUse records it after. That is why this is the only moment that repeats, once per tool call. PostToolUse logs the execution, seals EXECUTED or FAILED onto the hashed approval chain and, when you answer an approval question, activates that approval so the byte-identical retry finds it. A failed Bash call comes back through <b>PostToolUseFailure</b> instead.",
                      "filters": [
                        "deterministic",
                        "one-turn"
                      ]
                    },
                    {
                      "id": "lf-contract",
                      "order": 4,
                      "kicker": "CONTRACT",
                      "title": "SubagentStop",
                      "description": [
                        "reads the contract, never the reply text"
                      ],
                      "detail": "<b>SubagentStop</b> — the judge, and the other place a turn can stop. It reads the turn's stored contract, the one the specialist filled during its turn, and never the reply text. A missing or unfinalized contract sends the turn back (<code>exit 2</code>) and the specialist repairs it. A turn ends in one of six states, and only COMPLETE is final; a turn bound to a plan task cannot declare itself COMPLETE, so a separate verifier has to confirm it. The close also measures the turn from the transcript, computes the compliance score and writes the episode.",
                      "variant": "bad",
                      "filters": [
                        "deterministic",
                        "one-turn",
                        "nothing-self-declared",
                        "memory"
                      ]
                    },
                    {
                      "id": "lf-once-start",
                      "order": 5,
                      "type": "separator",
                      "span": 2,
                      "text": "once only"
                    },
                    {
                      "id": "lf-loop",
                      "order": 6,
                      "type": "separator",
                      "span": 1,
                      "text": "↻ each tool call"
                    },
                    {
                      "id": "lf-once-end",
                      "order": 7,
                      "type": "separator",
                      "span": 1,
                      "text": "once only"
                    }
                  ]
                },
                {
                  "id": "human-loop",
                  "title": "Human in the loop",
                  "subtitle": "a name behind every change",
                  "treatment": [
                    "envelope"
                  ],
                  "order": 3,
                  "span": 7,
                  "columns": 1,
                  "children": [
                    {
                      "id": "hl-bash",
                      "order": 1,
                      "kicker": "REVIEW",
                      "title": "BashValidator",
                      "description": [
                        "the exact command, scope, risk"
                      ],
                      "detail": "The detour has four beats. <b>1 · Held at the gate.</b> The command is sorted and, if it changes live state, it is blocked with an <code>approval_id</code> — <code>exit 2</code>, it never runs. <b>2 · The turn goes up.</b> A specialist has NO channel to the person: this is the fact nobody guesses, and it is why the approval is not resolved where the block happens. The specialist returns <code>APPROVAL_REQUEST</code> carrying the id, and the orchestrator is the one that can speak to you. <b>3 · You see the values and say yes.</b> The exact command verbatim, what it touches, what it risks, how to undo it. <b>4 · Retried byte for byte.</b> The approval matches the whole command string, so a reworded retry never matches; it is single-use and lasts 30 minutes. The ladder: <b>T0</b> read-only, <b>T1</b> local validation, <b>T2</b> dry run — all free. <b>T3</b> changes live state, and only a person can let it through. Above the ladder sits the never list: commands that cannot be approved at all.",
                      "filters": [
                        "deterministic",
                        "one-turn",
                        "the-human"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "footnotes",
          "treatment": [
            "plain"
          ],
          "order": 2,
          "span": 1,
          "columns": 1,
          "children": [
            {
              "id": "ch-legend",
              "type": "separator",
              "style": "dotted",
              "order": 1,
              "span": 1,
              "text": "red marks the only two moments the turn can stop — PreToolUse and SubagentStop"
            },
            {
              "id": "hk-count",
              "type": "separator",
              "style": "dotted",
              "order": 2,
              "span": 1,
              "text": "12 hook events in total; this page draws 5"
            }
          ]
        }
      ],
      "name": "4 · The life of a request",
      "order": 3
    },
    {
      "id": "p5-you-sign",
      "layout": "grid",
      "form": "flow",
      "columns": 1,
      "filters": [
        {
          "key": "one-command",
          "label": "one command",
          "steps": [
            "One command from your request to its outcome: you ask, an agent wants it, the hook sorts it, one of three things happens."
          ]
        },
        {
          "key": "deterministic",
          "label": "a rule decides",
          "steps": [
            "The hook and its three outcomes are decided by a rule in code: the same answer every time, no model involved."
          ]
        },
        {
          "key": "the-human",
          "label": "who decides?",
          "steps": [
            "You decide twice: when you ask, and when a command would change something."
          ]
        },
        {
          "key": "memory",
          "label": "what do we remember?",
          "steps": [
            "Your yes or no is kept, in the approval chain."
          ]
        },
        {
          "key": "nothing-self-declared",
          "label": "is it really done?",
          "steps": [
            "Nothing is taken on an agent's word: the hook sorts the command, and the chain records what really ran."
          ]
        }
      ],
      "sections": [
        {
          "id": "p5-flow",
          "treatment": [
            "plain"
          ],
          "order": 1,
          "span": 1,
          "columns": 4,
          "children": [
            {
              "id": "p5-rail",
              "type": "rail",
              "order": 1,
              "span": 4,
              "title": "APPROVALS · YOU SIGN · A HOOK DECIDES, BY RULE, BEFORE ANYTHING RUNS"
            },
            {
              "id": "p5-you",
              "order": 2,
              "rowspan": 3,
              "kicker": "1 · YOU",
              "title": "Ask for something",
              "description": [
                "in your own words, one request"
              ],
              "detail": "Your request is one prompt, in your own words. After that you are asked again only when a command would change something, and then you see the exact command before you answer.",
              "filters": [
                "one-command",
                "the-human"
              ]
            },
            {
              "id": "p5-agent",
              "order": 3,
              "rowspan": 3,
              "kicker": "2 · AN AGENT",
              "title": "Wants a command",
              "description": [
                "to do the work you asked for"
              ],
              "detail": "The orchestrator or a specialist, working on your request, reaches for a command. The agent is the only part of this page run by a model; everything after it is decided by a rule.",
              "filters": [
                "one-command"
              ]
            },
            {
              "id": "p5-pretooluse",
              "order": 4,
              "rowspan": 3,
              "treatment": [
                "centered"
              ],
              "kicker": "3 · PreToolUse",
              "title": "Sorts it",
              "description": [
                "a rule, in code",
                "same answer every time",
                "no model involved"
              ],
              "detail": "PreToolUse is the hook the host runs before every tool call. It hands each command to a fixed classifier that gives it a tier: <b>T0</b> read, <b>T1</b> validate, <b>T2</b> dry run, <b>T3</b> change. The classifier matches patterns and verbs in code; no model is consulted. Before that, a separate fixed pattern check holds the never list.<br><br>Sources: <code>hooks/modules/security/tiers.py:29-35</code> (<code>SecurityTier</code>), <code>:78</code> (<code>_classify_command_tier_cached</code>); <code>hooks/modules/security/blocked_commands.py:678</code> (<code>is_blocked_command</code>).",
              "filters": [
                "one-command",
                "deterministic",
                "nothing-self-declared"
              ]
            },
            {
              "id": "p5-read-only",
              "order": 5,
              "kicker": "READ-ONLY",
              "title": "Runs right away",
              "description": [
                "nobody is asked"
              ],
              "detail": "Tiers <b>T0</b> read, <b>T1</b> validate and <b>T2</b> dry run change nothing, so the command runs and nobody is asked.<br><br>Source: <code>hooks/modules/security/tiers.py:29-35</code> (<code>SecurityTier</code>).",
              "filters": [
                "one-command",
                "deterministic"
              ]
            },
            {
              "id": "p5-changes",
              "order": 6,
              "kicker": "CHANGES SOMETHING",
              "title": "Waits for your yes",
              "description": [
                "you see the exact command"
              ],
              "detail": "A <b>T3</b> command, one that changes something, is stopped and you are asked. The dialog shows what is about to run (<code>operation</code>), its exact bytes (<code>exact_content</code>), and its <code>scope</code>, <code>risk_level</code> and <code>rollback_hint</code>. You approve, and it runs; you reject, and nothing happens.<br><br>An approval is single-use: the command must match what you approved byte for byte, and the window is 30 minutes.<br><br>Sources: <code>approval_grants.py:193</code>, <code>:523</code>; <code>writer.py:86</code>.",
              "filters": [
                "one-command",
                "deterministic",
                "the-human",
                "memory"
              ]
            },
            {
              "id": "p5-never",
              "order": 7,
              "variant": "bad",
              "kicker": "NEVER",
              "title": "Always refused",
              "description": [
                "the never list: irreversible commands"
              ],
              "detail": "Irreversible commands are on the never list, a separate fixed pattern check. Its refusal has nothing to approve: no dialog, and no approval can let the command through.<br><br>Source: <code>hooks/modules/security/blocked_commands.py:678</code> (<code>is_blocked_command</code>).",
              "filters": [
                "one-command",
                "deterministic"
              ]
            }
          ]
        },
        {
          "id": "p5-chain",
          "treatment": [
            "plain"
          ],
          "order": 2,
          "span": 1,
          "columns": 1,
          "children": [
            {
              "id": "p5-approval-chain",
              "order": 1,
              "kicker": "KEEPS",
              "title": "The approval chain",
              "description": [
                "every decision is kept"
              ],
              "detail": "Every step of an approval is appended to a hash chain that nobody rewrites: asked (<code>REQUESTED</code>), shown (<code>SHOWN</code>), your answer (<code>APPROVED</code> or rejected), and what really happened (<code>EXECUTED</code> or <code>FAILED</code>).<br><br>Source: <code>schema.sql:1578-1600</code>. What else each turn leaves is its contract: page 6.",
              "filters": [
                "memory",
                "nothing-self-declared"
              ]
            }
          ]
        }
      ],
      "name": "5 · You sign",
      "order": 4
    },
    {
      "id": "p6-contracts",
      "layout": "grid",
      "form": "dashboard",
      "columns": 6,
      "filters": [
        {
          "key": "the-contract",
          "label": "one contract, out and back",
          "steps": [
            "Three agents, three contracts, one form: only the answers change."
          ]
        },
        {
          "key": "semantic",
          "label": "a model follows instructions",
          "steps": [
            "Each specialist is a model working from its instructions and skills."
          ]
        },
        {
          "key": "deterministic",
          "label": "a rule decides",
          "steps": [
            "The state is a fixed word, and the judge checks the stored contract by rule."
          ]
        },
        {
          "key": "next-move",
          "label": "what happens next?",
          "steps": [
            "The state a contract ends in decides the orchestrator's next move."
          ]
        },
        {
          "key": "nothing-self-declared",
          "label": "is it really done?",
          "steps": [
            "A contract says how it was checked; a plan task waits for an independent verifier."
          ]
        },
        {
          "key": "the-human",
          "label": "who decides?",
          "steps": [
            "A command that changes something comes back to you as an approval to give."
          ]
        },
        {
          "key": "the-judge",
          "label": "the judge",
          "steps": [
            "At SubagentStop the stored contract is judged; its state decides the verdict."
          ]
        }
      ],
      "sections": [
        {
          "id": "p6-thesis",
          "treatment": [
            "plain"
          ],
          "order": 1,
          "span": 6,
          "columns": 1,
          "children": [
            {
              "id": "p6-point",
              "order": 1,
              "kicker": "ON THE MAP · CONTRACTS",
              "title": "One contract per agent",
              "description": [
                "a form that lets the orchestrator evaluate the response"
              ],
              "detail": "Every agent answers with a contract of its own, on the same form. Gaia reads the form by rule, never the reply.",
              "treatment": [
                "centered"
              ]
            }
          ]
        },
        {
          "id": "p6-stack",
          "treatment": [
            "envelope"
          ],
          "order": 2,
          "span": 6,
          "columns": 5,
          "children": [
            {
              "id": "p6-rail-col",
              "treatment": [
                "plain"
              ],
              "order": 1,
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "p6-orchestrator",
                  "type": "rail",
                  "order": 1,
                  "rowspan": 2,
                  "treatment": [
                    "vertical"
                  ],
                  "title": "ORCHESTRATOR · sends one turn each"
                }
              ]
            },
            {
              "id": "p6-rows",
              "treatment": [
                "plain"
              ],
              "order": 2,
              "span": 4,
              "columns": 3,
              "children": [
                {
                  "id": "p6-developer",
                  "order": 1,
                  "kicker": "developer",
                  "title": "One turn",
                  "description": [
                    "writes and tests application code"
                  ],
                  "detail": "The orchestrator dispatches <b>developer</b> for one turn. The turn is born with its contract already open, named <code>&lt;agent_id&gt;.&lt;token&gt;</code>; the specialist adopts it with <code>gaia contract set/add/fill --draft-id</code> and never creates another.",
                  "filters": [
                    "semantic"
                  ]
                },
                {
                  "id": "p6-developer-contract",
                  "order": 4,
                  "kicker": "ANSWERS",
                  "title": "Its own contract",
                  "description": [
                    "same form, its own answers"
                  ],
                  "detail": "For example: the change is written, tests pass, and the contract closes <code>COMPLETE</code> with <code>pending_steps: []</code>, <code>next_action: done</code> and <code>evidence_report.verification.result: pass</code>. <code>gaia contract finalize</code> is the only clean close.",
                  "filters": [
                    "the-contract"
                  ]
                },
                {
                  "id": "p6-gitops",
                  "order": 2,
                  "kicker": "gitops-operator",
                  "title": "One turn",
                  "description": [
                    "changes the cluster's desired state"
                  ],
                  "detail": "The orchestrator dispatches <b>gitops-operator</b> for its own turn, with its own contract. Nothing it learns is shared with developer's contract: each turn answers for itself.",
                  "filters": [
                    "semantic"
                  ]
                },
                {
                  "id": "p6-gitops-contract",
                  "order": 5,
                  "kicker": "ANSWERS",
                  "title": "Its own contract",
                  "description": [
                    "same form, its own answers"
                  ],
                  "detail": "For example: the manifest is ready but pushing changes something, so the contract closes <code>APPROVAL_REQUEST</code> with <code>approval_request.exact_content</code> and the <code>approval_id</code> the request printed.",
                  "filters": [
                    "the-contract"
                  ]
                },
                {
                  "id": "p6-verifier",
                  "order": 3,
                  "kicker": "gaia-verifier",
                  "title": "One turn",
                  "description": [
                    "checks another agent's work"
                  ],
                  "detail": "The orchestrator dispatches <b>gaia-verifier</b> when a plan task's producer closed <code>NEEDS_VERIFICATION</code>. It is bound to that producer's contract through <code>parent_handoff_id</code>.",
                  "filters": [
                    "semantic"
                  ]
                },
                {
                  "id": "p6-verifier-contract",
                  "order": 6,
                  "kicker": "ANSWERS",
                  "title": "Its own contract",
                  "description": [
                    "same form, its own answers"
                  ],
                  "detail": "For example: the verifier re-runs the task's check and records the verdict in <code>evidence_report.verification</code> (<code>type</code>, <code>method</code>, <code>result</code>). Same form as the producer's; different answers.",
                  "filters": [
                    "the-contract"
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "p6-form",
          "title": "THE FORM",
          "subtitle": "the same sections for every agent",
          "treatment": [
            "envelope"
          ],
          "order": 3,
          "span": 6,
          "columns": 6,
          "children": [
            {
              "id": "p6-status",
              "order": 1,
              "kicker": "STATUS",
              "title": "How it ended",
              "description": [
                "one of six fixed states"
              ],
              "detail": "<code>agent_status.agent_state</code>, <code>agent_status.agent_id</code>, <code>pending_steps</code>, <code>next_action</code>. Any state outside the six is rejected (<code>PLAN_STATUS</code>), and <code>gaia contract finalize</code> refuses <code>IN_PROGRESS</code>.",
              "filters": [
                "the-contract",
                "deterministic",
                "next-move",
                "the-judge"
              ]
            },
            {
              "id": "p6-evidence",
              "order": 2,
              "kicker": "EVIDENCE",
              "title": "Seen and done",
              "description": [
                "what it read, ran and found"
              ],
              "detail": "<code>evidence_report.files_checked</code>, <code>patterns_checked</code>, <code>commands_run</code>, <code>key_outputs</code>, <code>verbatim_outputs</code>. Written during the turn, not composed at the close.",
              "filters": [
                "the-contract"
              ]
            },
            {
              "id": "p6-verify",
              "order": 3,
              "kicker": "VERIFY",
              "title": "How it checked",
              "description": [
                "the proof, not the claim"
              ],
              "detail": "<code>evidence_report.verification</code>: <code>type</code>, <code>method</code>, <code>result</code>. <code>COMPLETE</code> needs <code>result: pass</code> (<code>VERIFICATION_RESULT</code>); a declared type must carry its evidence (<code>VERIFICATION_SHAPE</code>).",
              "filters": [
                "the-contract",
                "nothing-self-declared"
              ]
            },
            {
              "id": "p6-gaps",
              "order": 4,
              "kicker": "OPEN GAPS",
              "title": "What stayed open",
              "description": [
                "what it could not do or check"
              ],
              "detail": "<code>evidence_report.open_gaps</code>. A gap declared gets routed; a gap hidden surfaces later.",
              "filters": [
                "the-contract"
              ]
            },
            {
              "id": "p6-reach",
              "order": 5,
              "kicker": "REACH",
              "title": "What else it touched",
              "description": [
                "impact beyond its own files"
              ],
              "detail": "<code>evidence_report.cross_layer_impacts</code>: what the change reached outside the file it was sent to, flagged for the agent that owns it.",
              "filters": [
                "the-contract"
              ]
            },
            {
              "id": "p6-approval",
              "order": 6,
              "kicker": "APPROVAL",
              "title": "Asks to run",
              "description": [
                "the exact command, for your yes"
              ],
              "detail": "<code>approval_request</code>: <code>operation</code>, <code>exact_content</code>, <code>scope</code>, <code>risk_level</code>, <code>rollback</code>, <code>verification</code>, <code>approval_id</code>. Required and non-blank when the state is <code>APPROVAL_REQUEST</code>.",
              "filters": [
                "the-contract",
                "the-human"
              ]
            }
          ]
        },
        {
          "id": "p6-state",
          "title": "THE STATE",
          "subtitle": "what the orchestrator does next",
          "treatment": [
            "envelope"
          ],
          "order": 4,
          "span": 6,
          "columns": 6,
          "children": [
            {
              "id": "p6-complete",
              "order": 1,
              "kicker": "COMPLETE",
              "title": "Answer you",
              "description": [
                "the only final state"
              ],
              "detail": "<code>COMPLETE</code> is the one terminal state: <code>pending_steps</code> empty, <code>next_action: done</code>, verification <code>pass</code>. The orchestrator reports the result to you.",
              "filters": [
                "next-move"
              ]
            },
            {
              "id": "p6-needs-verification",
              "order": 2,
              "kicker": "NEEDS_VERIFICATION",
              "title": "Send a verifier",
              "description": [
                "the producer cannot seal its own work"
              ],
              "detail": "A plan-task-bound turn cannot close itself <code>COMPLETE</code>. The orchestrator dispatches an independent verifier, bound through <code>parent_handoff_id</code>. Who confirms? That is page 7.",
              "filters": [
                "next-move",
                "nothing-self-declared"
              ]
            },
            {
              "id": "p6-approval-request",
              "order": 3,
              "kicker": "APPROVAL_REQUEST",
              "title": "Show the command",
              "description": [
                "you approve or reject it"
              ],
              "detail": "The orchestrator presents the exact command from <code>approval_request.exact_content</code>. Your yes approves that one command; the specialist then retries it byte for byte.",
              "filters": [
                "next-move",
                "the-human"
              ]
            },
            {
              "id": "p6-needs-input",
              "order": 4,
              "kicker": "NEEDS_INPUT",
              "title": "Ask you",
              "description": [
                "a choice only you can make"
              ],
              "detail": "<code>NEEDS_INPUT</code> names the concrete options. Your answer comes back to the same contract, which is not reset.",
              "filters": [
                "next-move"
              ]
            },
            {
              "id": "p6-blocked",
              "order": 5,
              "kicker": "BLOCKED",
              "title": "Route the obstacle",
              "description": [
                "to whoever owns it"
              ],
              "detail": "<code>BLOCKED</code> is the costliest close: the orchestrator routes the obstacle to the agent that owns it.",
              "filters": [
                "next-move"
              ]
            },
            {
              "id": "p6-in-progress",
              "order": 6,
              "kicker": "IN_PROGRESS",
              "title": "Keep working",
              "description": [
                "the turn is not done"
              ],
              "detail": "<code>IN_PROGRESS</code> is not a close: <code>gaia contract finalize</code> refuses it, and the orchestrator resumes the turn.",
              "filters": [
                "next-move"
              ]
            }
          ]
        },
        {
          "id": "p6-judge",
          "treatment": [
            "plain"
          ],
          "order": 5,
          "span": 6,
          "columns": 2,
          "children": [
            {
              "id": "p6-judge-box",
              "order": 1,
              "span": 2,
              "kicker": "JUDGE · SubagentStop",
              "title": "Reads the contract",
              "description": [
                "no valid contract: sent back"
              ],
              "detail": "<b>SubagentStop</b> is the judge. It locates the turn's own stored contract and validates it (<code>_resolve_subagent_stop_gate_full</code>, <code>hooks/adapters/claude_code.py</code>); nothing in the reply text is read. A missing or unfinalized contract sends the turn back with <code>exit 2</code>, and one never finalized stays marked with a <code>cut_reason</code>. A plan-task-bound turn is forced to blind verification. At the same moment SubagentStop writes the turn's episode (<code>subagent_stop.py</code>).",
              "filters": [
                "deterministic",
                "the-judge"
              ]
            },
            {
              "id": "p6-never-read",
              "type": "separator",
              "order": 2,
              "span": 2,
              "text": "the reply text is never read"
            }
          ]
        }
      ],
      "name": "6 · Contracts",
      "order": 5
    },
    {
      "id": "p7-it-checks",
      "layout": "grid",
      "form": "flow",
      "columns": 1,
      "filters": [
        {
          "key": "one-task",
          "label": "one task",
          "steps": [
            "One piece of work, followed from start to finish: an idea becomes a brief, the brief a plan, the plan tasks, and each task goes to a specialist."
          ]
        },
        {
          "key": "the-contract",
          "label": "one contract, out and back",
          "steps": [
            "The contract goes out blank with the specialist and comes back answered, and what it records is passed on to the next step."
          ]
        },
        {
          "key": "semantic",
          "label": "a model follows instructions",
          "steps": [
            "Planning, doing the work and cross-checking it are done by models following written instructions."
          ]
        },
        {
          "key": "deterministic",
          "label": "a rule decides",
          "steps": [
            "Where a check must not depend on a model, a rule in code decides: the same answer every time."
          ]
        },
        {
          "key": "nothing-self-declared",
          "label": "is it really done?",
          "steps": [
            "The specialist returns its answer, but a separate verifier confirms the task before it counts as done."
          ]
        },
        {
          "key": "the-human",
          "label": "who decides?",
          "steps": [
            "You start it with your idea, and you give your yes to each change before it runs."
          ]
        },
        {
          "key": "memory",
          "label": "what do we remember?",
          "steps": [
            "The brief and what each step produces are stored, so the work survives the session."
          ]
        }
      ],
      "sections": [
        {
          "id": "p7-point",
          "treatment": [
            "plain"
          ],
          "order": 1,
          "span": 1,
          "columns": 1,
          "children": [
            {
              "id": "p7-rail-point",
              "type": "rail",
              "title": "PLANS & TASKS · IT CHECKS BEFORE TELLING YOU"
            }
          ]
        },
        {
          "id": "recorrido",
          "treatment": [
            "plain"
          ],
          "order": 2,
          "span": 1,
          "columns": 5,
          "children": [
            {
              "id": "p7-ph-idea",
              "order": 1,
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "p7-h-idea",
                  "order": 1,
                  "kicker": "1 OF 5",
                  "title": "The idea",
                  "description": [
                    "where every request starts"
                  ],
                  "treatment": [
                    "centered"
                  ],
                  "filters": [
                    "one-task"
                  ]
                },
                {
                  "id": "p7-idea",
                  "order": 2,
                  "kicker": "YOU",
                  "title": "A thought",
                  "description": [
                    "said in your own words"
                  ],
                  "detail": "You say what you want in plain words, talking to the orchestrator. Nothing is stored yet: it is one request.",
                  "filters": [
                    "the-human"
                  ]
                }
              ]
            },
            {
              "id": "p7-ph-brief",
              "order": 2,
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "p7-h-brief",
                  "order": 1,
                  "kicker": "2 OF 5",
                  "title": "The brief",
                  "description": [
                    "the idea made to last"
                  ],
                  "treatment": [
                    "centered"
                  ],
                  "filters": [
                    "one-task"
                  ]
                },
                {
                  "id": "r-brief",
                  "order": 2,
                  "kicker": "gaia brief",
                  "title": "The idea, written down",
                  "description": [
                    "with criteria for done"
                  ],
                  "detail": "The idea is written down as a <b>brief</b> stored in Gaia's database, with acceptance criteria that say what done looks like. It persists outside the session.<br>CLI: <code>gaia brief new</code> · <code>gaia brief ac</code> (add a criterion) · <code>gaia brief show</code>.",
                  "filters": [
                    "memory"
                  ]
                }
              ]
            },
            {
              "id": "p7-ph-plan",
              "order": 3,
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "p7-h-plan",
                  "order": 1,
                  "kicker": "3 OF 5",
                  "title": "The plan",
                  "description": [
                    "the brief broken down"
                  ],
                  "treatment": [
                    "centered"
                  ],
                  "filters": [
                    "one-task"
                  ]
                },
                {
                  "id": "r-plan",
                  "order": 2,
                  "kicker": "gaia plan",
                  "title": "Steps to get there",
                  "description": [
                    "one plan per brief"
                  ],
                  "detail": "The brief is explored and a <b>plan</b> is saved against it: one plan per brief.<br>CLI: <code>gaia plan save</code> · <code>gaia plan show</code> · <code>gaia plan set-status</code>; later edits go through <code>gaia plan change</code>."
                }
              ]
            },
            {
              "id": "p7-ph-tasks",
              "order": 4,
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "p7-h-tasks",
                  "order": 1,
                  "kicker": "4 OF 5",
                  "title": "The tasks",
                  "description": [
                    "the plan made checkable"
                  ],
                  "treatment": [
                    "centered"
                  ],
                  "filters": [
                    "one-task"
                  ]
                },
                {
                  "id": "r-tareas",
                  "order": 2,
                  "kicker": "PLANNER",
                  "title": "Tasks with gates",
                  "description": [
                    "each task has a gate"
                  ],
                  "detail": "The planner (<code>gaia-planner</code>, a specialist following written instructions) breaks the plan into <b>tasks</b>. Each task carries a <b>gate</b>: the pass/fail check that says the task is done. Stored as plan tasks and <code>task_gates</code> (<code>schema.sql:442-700</code>).",
                  "filters": [
                    "semantic"
                  ]
                }
              ]
            },
            {
              "id": "p7-ph-agents",
              "order": 5,
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "p7-h-agents",
                  "order": 1,
                  "kicker": "5 OF 5",
                  "title": "The agents",
                  "description": [
                    "the tasks put to work"
                  ],
                  "treatment": [
                    "centered"
                  ],
                  "filters": [
                    "one-task"
                  ]
                },
                {
                  "id": "p7-execute",
                  "order": 2,
                  "kicker": "EXECUTE",
                  "title": "One specialist each",
                  "description": [
                    "a specialist per task"
                  ],
                  "detail": "The orchestrator sends one specialist per task. The turn is bound to its task (<code>--plan-task-id</code>, <code>dispatch_binding.py</code>), so the specialist works on that task and nothing else.",
                  "filters": [
                    "semantic"
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "contract-row",
          "treatment": [
            "plain"
          ],
          "order": 3,
          "span": 1,
          "columns": 5,
          "children": [
            {
              "id": "p7-no-contract",
              "type": "separator",
              "order": 1,
              "style": "dotted",
              "text": "no contract yet"
            },
            {
              "id": "p7-no-contract-brief",
              "type": "separator",
              "order": 2,
              "style": "dotted",
              "text": "no contract yet"
            },
            {
              "id": "p7-no-contract-plan",
              "type": "separator",
              "order": 3,
              "style": "dotted",
              "text": "no contract yet"
            },
            {
              "id": "p7-carries",
              "order": 4,
              "kicker": "CARRIES",
              "title": "A blank contract",
              "description": [
                "sent with each task"
              ],
              "detail": "Each specialist is born with a <b>contract</b> already created for its turn: the goal, and what it may read and write. It fills the contract in as it works (<code>gaia contract set</code> · <code>add</code> · <code>fill</code>).",
              "filters": [
                "the-contract"
              ]
            },
            {
              "id": "p7-returns",
              "order": 5,
              "kicker": "RETURNS",
              "title": "The answered contract",
              "description": [
                "filled in and stored"
              ],
              "detail": "The specialist closes by declaring one of six states; only <code>COMPLETE</code> is final (<code>validator.py:908</code>). <code>SubagentStop</code> reads only the stored contract, never the reply text; a missing or unfinalized contract sends the turn back (<code>claude_code.py:905-907</code>). A turn bound to a task cannot mark itself <code>COMPLETE</code>: it returns <code>NEEDS_VERIFICATION</code>.",
              "filters": [
                "the-contract",
                "nothing-self-declared"
              ]
            }
          ]
        },
        {
          "id": "management",
          "treatment": [
            "plain"
          ],
          "order": 4,
          "span": 1,
          "columns": 3,
          "children": [
            {
              "id": "p7-rail-mgmt",
              "type": "rail",
              "order": 1,
              "span": 3,
              "title": "THE MANAGEMENT LAYER"
            },
            {
              "id": "ley-verif",
              "order": 2,
              "kicker": "CROSS-CHECK",
              "title": "A separate verifier",
              "description": [
                "confirms the task was done"
              ],
              "detail": "<code>gaia-verifier</code>, a separate specialist, judges the task against its gate and the evidence and returns its verdict.<br><b>Enforced:</b> a turn bound to a plan task cannot seal itself <code>COMPLETE</code> (<code>_blind_verification_required</code>); it closes <code>NEEDS_VERIFICATION</code> for an independent verifier.<br><b>Not enforced:</b> who records a gate's pass or fail. No rule in code checks that; it rests on the instructions the verifier follows.",
              "variant": "accent",
              "filters": [
                "semantic",
                "nothing-self-declared"
              ]
            },
            {
              "id": "p7-passes-on",
              "order": 3,
              "kicker": "PASSES ON",
              "title": "Each step's output",
              "description": [
                "contract → task → gate → evidence"
              ],
              "detail": "What one step produces is stored and read by the next: the contract names its task, the task its gate, the gate the evidence behind its result. It is kept in Gaia's database (<code>schema.sql:442-700</code>), so it survives the session. What is kept is memory, page 8.",
              "filters": [
                "the-contract",
                "deterministic",
                "memory"
              ]
            },
            {
              "id": "r-gates",
              "order": 4,
              "kicker": "CHECKS",
              "title": "Only where needed",
              "description": [
                "a gate per task, your yes per change"
              ],
              "detail": "Checks sit where they matter, not everywhere: a <b>gate</b> per task decides done, and a hook asks for your yes before each command that changes something (T3). Read-only commands run without asking; the tier comes from a fixed classifier, with no model involved (<code>tiers.py:78</code>, <code>_classify_command_tier_cached</code>).",
              "filters": [
                "deterministic",
                "the-human"
              ]
            }
          ]
        },
        {
          "id": "p7-caveat",
          "treatment": [
            "plain"
          ],
          "order": 5,
          "span": 1,
          "columns": 1,
          "children": [
            {
              "id": "p7-enforced",
              "type": "separator",
              "order": 1,
              "text": "enforced: a specialist can't mark its own planned work done"
            }
          ]
        }
      ],
      "name": "7 · It checks",
      "order": 6
    },
    {
      "id": "p8-memory",
      "layout": "grid",
      "form": "mindmap",
      "columns": 3,
      "filters": [
        {
          "key": "memory",
          "label": "what do we remember?",
          "steps": [
            "What the next session starts from: the curated rows written on purpose and the automatic trace of every turn. Project context sits beside it under its own name."
          ]
        },
        {
          "key": "deterministic",
          "label": "a rule decides",
          "steps": [
            "No model chooses what a specialist is handed or what a turn leaves behind. The context slice follows the contract's readable sections, and the episode is written by a hook when the turn stops."
          ]
        },
        {
          "key": "the-human",
          "label": "who decides?",
          "steps": [
            "You decide what is worth keeping. The orchestrator writes curated memory; a specialist only proposes."
          ]
        },
        {
          "key": "nothing-self-declared",
          "label": "is it really done?",
          "steps": [
            "A specialist cannot close or graduate a thread of curated memory, and its episode is written from the stored contract, not from what it says it did."
          ]
        }
      ],
      "sections": [
        {
          "id": "p8-point",
          "treatment": [
            "plain"
          ],
          "order": 1,
          "span": 3,
          "columns": 1,
          "children": [
            {
              "id": "p8-rail",
              "type": "rail",
              "title": "MEMORY · IT OUTLIVES THE SESSION · two kinds"
            }
          ]
        },
        {
          "id": "p8-context",
          "treatment": [
            "plain"
          ],
          "order": 2,
          "span": 1,
          "columns": 1,
          "children": [
            {
              "id": "p8-context-head",
              "order": 1,
              "kicker": "KIND 1 OF 2",
              "title": "PROJECT CONTEXT",
              "description": "what Gaia knows",
              "detail": "What Gaia knows about your workspace. It is handed to each specialist at dispatch, and it is never called memory.",
              "variant": "muted"
            },
            {
              "id": "p8-scan",
              "order": 2,
              "kicker": "gaia scan",
              "title": "Your repos, mapped",
              "description": "the shape of your workspace",
              "detail": "<code>gaia scan</code> walks the workspace you point it at and records what it finds: each repository, its stack, its git layout, the services it holds. The result is stored as named context sections (<code>project_identity</code>, <code>stack</code>, <code>git</code>, <code>environment</code>, <code>architecture_overview</code>, <code>application_services</code>). It is project context, not memory: it describes your workspace, not what any turn learned."
            },
            {
              "id": "p8-dispatch",
              "order": 3,
              "kicker": "AT DISPATCH",
              "title": "Context handed in",
              "description": "each specialist gets its slice",
              "detail": "When the orchestrator dispatches a specialist, the contract it is born with lists the context sections it may read (<code>can_read</code>) and the ones it may change (<code>can_write</code>). The specialist reads its slice on demand with <code>gaia context get-contract --section &lt;name&gt;</code>. The slice follows the contract, not a model's choice.",
              "filters": [
                "deterministic"
              ]
            }
          ]
        },
        {
          "id": "p8-center",
          "treatment": [
            "plain"
          ],
          "order": 3,
          "span": 1,
          "columns": 1,
          "children": [
            {
              "id": "p8-memory",
              "order": 1,
              "title": "MEMORY",
              "description": "what the next session starts from",
              "detail": "A session ends; what it learned does not. Two kinds of knowledge outlive it: project context on the left, what Gaia knows about your workspace, and real memory on the right, what the turns left behind. Only the right side is memory in the strict sense, and only part of it is curated, by decision.",
              "treatment": [
                "centered"
              ],
              "rowspan": 3,
              "filters": [
                "memory",
                "the-human"
              ]
            }
          ]
        },
        {
          "id": "p8-real",
          "treatment": [
            "plain"
          ],
          "order": 4,
          "span": 1,
          "columns": 1,
          "children": [
            {
              "id": "p8-real-head",
              "order": 1,
              "kicker": "KIND 2 OF 2",
              "title": "REAL MEMORY",
              "description": "what the turns left",
              "detail": "What the turns left behind: the curated rows written on purpose, and the automatic trace of every turn.",
              "variant": "muted"
            },
            {
              "id": "p8-curated",
              "order": 2,
              "kicker": "CURATED",
              "title": "Kept on purpose",
              "description": "read back at the start",
              "detail": "<b>Lifecycle.</b> A candidate first passes a gate: if it already has a home (a brief, a plan, a task, the project context, the code), it is not memory. What passes opens as a live thread with one concern and one status, grows only by appending (a dead end is recorded so nobody pays for it twice), and exits CLOSED (attention returns) or GRADUATED (knowledge survives as an anchor). Neither exit is deletion.<br><b>Lineage.</b> A graduated thread points at the anchor it produced (<code>graduated_to</code>); a wrong row is replaced by a correct one that <code>supersedes</code> it, never edited in place.<br><b>Ownership.</b> You are the authority for what is kept. Only the orchestrator and gaia-operator write curated memory; every specialist only proposes (<code>subagent_memory_write_guard.py:60-67</code>).<br><b>Machinery.</b> Rows are typed <code>project</code>, <code>user</code>, <code>feedback</code>, <code>atom</code>, <code>decision</code> or <code>negative</code>, and read with <code>gaia memory search</code>, <code>gaia memory show</code> and <code>gaia memory get-relevant</code>.",
              "filters": [
                "memory",
                "the-human",
                "nothing-self-declared"
              ]
            },
            {
              "id": "p8-automatic",
              "order": 3,
              "kicker": "AUTOMATIC",
              "title": "Events and episodes",
              "description": "one trace per turn",
              "detail": "Nobody chooses to write these. Hooks record events as a turn runs, and when a specialist stops, the SubagentStop hook writes that turn's episode from its stored contract, never from the reply text (<code>subagent_stop.py:263</code>). They are evidence of what happened, kept for diagnosis; recent events are shown to the next specialist at the start of its turn.",
              "filters": [
                "memory",
                "deterministic",
                "nothing-self-declared"
              ]
            }
          ]
        },
        {
          "id": "p8-close",
          "treatment": [
            "plain"
          ],
          "order": 5,
          "span": 3,
          "columns": 1,
          "children": [
            {
              "id": "p8-sep",
              "type": "separator",
              "text": "you decide what is curated; the orchestrator writes it"
            }
          ]
        }
      ],
      "name": "8 · Memory",
      "order": 7
    },
    {
      "id": "p9-back-to-the-map",
      "layout": "grid",
      "form": "comparison",
      "columns": 1,
      "filters": [
        {
          "key": "the-human",
          "label": "who decides?",
          "steps": [
            "You sign what changes something, and on one machine you said yes 583 times and no 52 times."
          ]
        },
        {
          "key": "nothing-self-declared",
          "label": "is it really done?",
          "steps": [
            "A specialist answers with a contract and gets checked; every change it asked for waited for your yes or no."
          ]
        },
        {
          "key": "memory",
          "label": "what do we remember?",
          "steps": [
            "Gaia reads and writes memory, so what it learns outlives the session."
          ]
        },
        {
          "key": "deterministic",
          "label": "a rule decides",
          "steps": [
            "Your signature is enforced by a hook, by rule, and the same rule is why most commands run without asking: 94% only read."
          ]
        },
        {
          "key": "semantic",
          "label": "a model follows instructions",
          "steps": [
            "Gaia and the specialists are models following written instructions: skills and agents."
          ]
        }
      ],
      "sections": [
        {
          "id": "p9-thesis",
          "treatment": [
            "plain"
          ],
          "order": 1,
          "span": 1,
          "columns": 1,
          "children": [
            {
              "id": "p9-rail",
              "type": "rail",
              "order": 1,
              "title": "BACK TO THE MAP"
            },
            {
              "id": "p9-thesis-box",
              "order": 2,
              "kicker": "WHAT GAIA IS",
              "title": "Gaia converses with you and coordinates the work, but never makes the changes itself.",
              "description": [
                "hands them to specialists, checks what they deliver, tells you"
              ],
              "detail": "The orchestrator's own answer, the same words as page 2: <i>Gaia converses with you and coordinates the work, but never makes the changes itself. It hands them to specialists, checks what they deliver, and tells you the result. Anything that changes something real needs your signature.</i>",
              "variant": "accent",
              "treatment": [
                "centered"
              ]
            }
          ]
        },
        {
          "id": "p9-map",
          "treatment": [
            "plain"
          ],
          "order": 2,
          "span": 1,
          "columns": 4,
          "children": [
            {
              "id": "p9-you",
              "order": 1,
              "kicker": "→ PAGE 5",
              "title": "YOU",
              "description": [
                "you sign what changes something"
              ],
              "detail": "Page 5 · You sign. Anything that changes something real needs your approval, your yes to one exact command, and a hook checks it by rule before anything runs.",
              "treatment": [
                "centered"
              ],
              "filters": [
                "the-human",
                "deterministic"
              ]
            },
            {
              "id": "p9-gaia",
              "order": 2,
              "kicker": "→ PAGE 4",
              "title": "GAIA",
              "description": [
                "the orchestrator decides the what"
              ],
              "detail": "Page 4 · The life of a request. The orchestrator is the one agent you talk to: it holds the conversation, decides the route, hands the work to a specialist, and reads memory to remember what came before. It never edits.",
              "treatment": [
                "centered"
              ],
              "filters": [
                "memory",
                "semantic"
              ]
            },
            {
              "id": "p9-manages",
              "order": 3,
              "kicker": "→ PAGES 5–8",
              "title": "WHAT GAIA MANAGES",
              "description": [
                "memory, plans, contracts, approvals"
              ],
              "detail": "Through its own command line, Gaia keeps memory (page 8), plans and tasks (page 7), contracts (page 6) and approvals (page 5), so what it learns and what it was asked outlives the session.",
              "treatment": [
                "centered"
              ],
              "filters": [
                "memory"
              ]
            },
            {
              "id": "p9-specialist",
              "order": 4,
              "kicker": "→ PAGES 3, 6",
              "title": "THE SPECIALISTS",
              "description": [
                "do the how, answer with a contract"
              ],
              "detail": "Page 3 · Who's who: 8 specialists, one per field. Page 6 · Contracts: every specialist answers with its own contract, and the orchestrator checks what it claims before telling you.",
              "treatment": [
                "centered"
              ],
              "filters": [
                "nothing-self-declared",
                "semantic"
              ]
            }
          ]
        },
        {
          "id": "p9-numbers",
          "title": "On my machine",
          "treatment": [
            "envelope"
          ],
          "order": 3,
          "span": 1,
          "columns": 2,
          "children": [
            {
              "id": "p9-approvals",
              "order": 1,
              "kicker": "gaia approvals stats",
              "title": "583 yes · 52 no · 218 expired",
              "description": [
                "you said yes or no"
              ],
              "detail": "From <code>gaia approvals stats</code> on one machine: 583 approvals granted, 52 rejected, 218 left to expire unanswered. Turn counts are left out: before rc.3 the hooks were registered twice, which inflated them.",
              "filters": [
                "the-human",
                "nothing-self-declared"
              ]
            },
            {
              "id": "p9-readonly",
              "order": 2,
              "kicker": "gaia metrics",
              "title": "94% read-only",
              "description": [
                "most commands only read"
              ],
              "detail": "From <code>gaia metrics</code> on one machine: 423 of 450 commands were T0, read-only, 94.0%. A fixed rule classified each one; only changes asked for your approval.",
              "filters": [
                "deterministic"
              ]
            }
          ]
        },
        {
          "id": "p9-install",
          "title": "Install it, ask it",
          "subtitle": "Claude Code · OpenCode is the second host",
          "treatment": [
            "envelope"
          ],
          "order": 4,
          "span": 1,
          "columns": 2,
          "children": [
            {
              "id": "p9-step-marketplace",
              "order": 1,
              "kicker": "INSTALL · STEP 1 OF 3",
              "title": "Add the marketplace",
              "description": [
                "/plugin marketplace add metraton/gaia"
              ],
              "detail": "In Claude Code, run <code>/plugin marketplace add metraton/gaia</code>. The gaia-marketplace becomes available to install from."
            },
            {
              "id": "p9-step-install",
              "order": 2,
              "kicker": "INSTALL · STEP 2 OF 3",
              "title": "Install the plugin",
              "description": [
                "/plugin install gaia@gaia-marketplace"
              ],
              "detail": "Run <code>/plugin install gaia@gaia-marketplace</code>. rc.3 is released, and main's README says the plugin install alone is enough: no npm step. OpenCode is the second host."
            },
            {
              "id": "p9-first-prompt",
              "order": 3,
              "kicker": "FIRST PROMPT · STEP 3 OF 3",
              "title": "what is Gaia, and what can you do for me?",
              "description": [
                "Gaia explains itself, live"
              ],
              "detail": "The first thing to ask: <i>what is Gaia, and what can you do for me?</i> Gaia explains itself live, and its answer is the map this deck opened with.",
              "variant": "accent",
              "treatment": [
                "centered"
              ],
              "span": 2
            }
          ]
        },
        {
          "id": "p9-close",
          "treatment": [
            "plain"
          ],
          "order": 5,
          "span": 1,
          "columns": 1,
          "children": [
            {
              "id": "p9-halves",
              "type": "separator",
              "text": "hooks decide by rule · skills and agents follow · CLI joins"
            }
          ]
        }
      ],
      "name": "9 · Install it, ask it",
      "order": 8
    },
    {
      "id": "backup-code",
      "layout": "grid",
      "form": "dashboard",
      "columns": 6,
      "filters": [
        {
          "key": "deterministic",
          "label": "a rule decides",
          "steps": [
            "Every box on this page is ordinary code: the same input gets the same answer, and no model is consulted."
          ]
        },
        {
          "key": "sesion-abre",
          "label": "the session opens",
          "steps": [
            "SessionStart runs once, before anyone asks for anything: eight calls in fixed order build what the session starts knowing."
          ]
        },
        {
          "key": "ruteo",
          "label": "where does this belong?",
          "steps": [
            "Two rules answer it: may the orchestrator hold this tool itself, and which surface the dispatched specialist declares as its own. No prompt scoring runs in a hook."
          ]
        },
        {
          "key": "porton",
          "label": "the checkpoint",
          "steps": [
            "Before any tool runs, PreToolUse asks in order: may the orchestrator hold this tool, which tier is this command, and which skill governs this file."
          ]
        },
        {
          "key": "despacho",
          "label": "the dispatch",
          "steps": [
            "When the tool is a dispatch, PreToolUse derives the specialist's kernel, caches the recent events and gives birth to its contract."
          ]
        },
        {
          "key": "entrega",
          "label": "the handover",
          "steps": [
            "SubagentStart is the first instant the specialist exists: it picks up what PreToolUse cached and claims the contract born for it."
          ]
        },
        {
          "key": "contabilidad",
          "label": "the bookkeeping",
          "steps": [
            "Four independent writers note what ran; Stop sweeps up the failed commands PostToolUse never saw."
          ]
        },
        {
          "key": "the-judge",
          "label": "the judge",
          "steps": [
            "SubagentStop reads the stored contract, never the reply text, judges it, measures the turn and writes the episode."
          ]
        }
      ],
      "sections": [
        {
          "id": "col-cli",
          "title": "ON DEMAND",
          "subtitle": "the CLI",
          "treatment": [
            "envelope"
          ],
          "order": 1,
          "span": 6,
          "columns": 7,
          "children": [
            {
              "id": "cli-memory",
              "order": 1,
              "kicker": "gaia memory",
              "title": "Curated memory",
              "description": "written on purpose, read back later",
              "detail": "Read verbs (<code>search</code>, <code>show</code>, <code>list</code>, <code>stats</code>, <code>get-relevant</code>, <code>conflicts</code>, <code>story</code>, <code>episode-show</code>) and write verbs (<code>add</code>, <code>append</code>, <code>reclassify</code>, <code>link</code>, <code>checkpoint</code>). Only the orchestrator and gaia-operator write curated memory (<code>subagent_memory_write_guard.py:60-67</code>).",
              "filters": [
                "deterministic"
              ]
            },
            {
              "id": "cli-contract",
              "order": 2,
              "kicker": "gaia contract",
              "title": "Contracts",
              "description": "the stored contract outranks the message",
              "detail": "The orchestrator reads with <code>contract view | list | validate</code>; <code>gaia contract list --cut</code> names the turns cut before they finalized. The verbs that change a contract (<code>set | add | fill | finalize</code>) belong to the specialist whose turn it is.",
              "filters": [
                "deterministic",
                "the-judge"
              ]
            },
            {
              "id": "cli-brief",
              "order": 3,
              "kicker": "gaia brief",
              "title": "Briefs",
              "description": "what you asked for, with its criteria",
              "detail": "<code>brief new | edit | set-status</code> and the brief's own acceptance criteria, <code>brief ac add | edit | remove</code>.",
              "filters": [
                "deterministic"
              ]
            },
            {
              "id": "cli-plan",
              "order": 4,
              "kicker": "gaia plan · task",
              "title": "Plans and tasks",
              "description": "moves status, never promotes its own task",
              "detail": "The orchestrator moves status with <code>plan set-status</code> and <code>task set-status</code>. Splitting a plan into tasks is gaia-planner's job; promoting a task after verification is gaia-verifier's. Planning objects live in <code>schema.sql:442-700</code>.",
              "filters": [
                "deterministic"
              ]
            },
            {
              "id": "cli-approvals",
              "order": 5,
              "kicker": "gaia approvals",
              "title": "Approvals",
              "description": "sees every approval, gives none",
              "detail": "Read-only for the orchestrator: <code>approvals list | pending | show | history | stats</code>. Approving is yours, not a CLI call. The approval hash chain lives in <code>schema.sql:1578-1600</code>.",
              "filters": [
                "deterministic",
                "porton"
              ]
            },
            {
              "id": "cli-schedule",
              "order": 6,
              "kicker": "gaia schedule",
              "title": "Schedules",
              "description": "sees the drift, cannot fix it",
              "detail": "<code>schedule list | show | status</code> and <code>notifications ack</code>. <code>schedule register | remove | sync</code> belong to gaia-operator, and <code>sync</code> needs your approval.",
              "filters": [
                "deterministic"
              ]
            },
            {
              "id": "cli-context",
              "order": 7,
              "span": 1,
              "kicker": "gaia context · scan",
              "title": "Project context",
              "description": "reads it, and re-scans the workspace",
              "detail": "<code>context show | get | project</code> read the workspace; <code>context get-contract --section &lt;s&gt;</code> reads one project-context section by name; <code>scan</code> and <code>context scan</code> re-index it.",
              "filters": [
                "deterministic"
              ]
            }
          ]
        },
        {
          "id": "col-session",
          "title": "SESSION START",
          "subtitle": "SessionStart",
          "treatment": [
            "envelope"
          ],
          "order": 2,
          "span": 1,
          "columns": 1,
          "children": [
            {
              "id": "ss-build",
              "order": 1,
              "kicker": "session_context (short)",
              "title": "Eight calls, in order",
              "description": "what the session starts knowing",
              "detail": "<code>build_session_context</code> in <code>hooks/modules/session/session_manifest.py:1218</code>, called from <code>hooks/session_start.py:307</code>. Eight builder calls in a fixed order; the three boxes below are its parts.",
              "filters": [
                "deterministic",
                "sesion-abre"
              ]
            },
            {
              "id": "ss-where",
              "order": 2,
              "kicker": "calls 1–3",
              "title": "Where you are",
              "description": "environment, projects, contracts index",
              "detail": "Environment first (workspace, machine, version, cwd, plugin root), then the project index by name only, then which project-context sections each specialist surface is handed at dispatch.",
              "filters": [
                "deterministic",
                "sesion-abre"
              ]
            },
            {
              "id": "ss-open",
              "order": 3,
              "kicker": "calls 4–7",
              "title": "What is open",
              "description": "open threads, and what ran without you",
              "detail": "The live worklist of open threads, then three blocks that stay silent unless something ran without you: unread headless reports, schedule drift, and scheduler suspensions.",
              "filters": [
                "deterministic",
                "sesion-abre"
              ]
            },
            {
              "id": "ss-anchors",
              "order": 4,
              "kicker": "call 8, last",
              "title": "What I know about you",
              "description": "curated memory, injected last",
              "detail": "The standing orders about how to work with you. They come last on purpose, after the operational state they should anchor against.",
              "filters": [
                "deterministic",
                "sesion-abre"
              ]
            }
          ]
        },
        {
          "id": "col-born",
          "title": "BORN",
          "subtitle": "PreToolUse",
          "treatment": [
            "envelope"
          ],
          "order": 3,
          "span": 2,
          "columns": 2,
          "children": [
            {
              "id": "bn-delegate",
              "order": 1,
              "kicker": "check_delegate_mode",
              "title": "Use it or delegate",
              "description": "may the orchestrator hold this tool?",
              "detail": "<code>check_delegate_mode</code> in <code>hooks/modules/orchestrator/delegate_mode.py:367</code>, the first check PreToolUse runs (<code>hooks/adapters/tool_policy.py:267</code>). Outside the orchestrator's allowed set, the work goes to a specialist.",
              "filters": [
                "deterministic",
                "porton",
                "ruteo"
              ]
            },
            {
              "id": "bn-tier",
              "order": 2,
              "kicker": "classify_tier (short)",
              "title": "Tier T0 to T3",
              "description": "a rule, not a model, picks the tier",
              "detail": "<code>_classify_command_tier_cached</code> (<code>hooks/modules/security/tiers.py:78</code>) gives every command one tier of <code>SecurityTier</code> (<code>:29-35</code>): T0 read, T1 validate, T2 dry run, T3 change. The never list is a separate check, <code>is_blocked_command</code> (<code>blocked_commands.py:678</code>), with nothing to approve. A T3 approval is single-use, must match the command byte for byte, and lasts 30 minutes (<code>approval_grants.py:193</code>, <code>:523</code>; <code>writer.py:86</code>).",
              "filters": [
                "deterministic",
                "porton"
              ]
            },
            {
              "id": "bn-skill",
              "order": 3,
              "kicker": "expected_skill (short)",
              "title": "File to skill",
              "description": "one reminder on a Write or an Edit",
              "detail": "<code>expected_skill_for_path</code> in <code>hooks/modules/agents/artifact_skill_map.py:64</code>, called from <code>tool_policy.py:785</code>. It names the skill that governs the file being written; a reminder, never a block.",
              "filters": [
                "deterministic",
                "porton"
              ]
            },
            {
              "id": "bn-routing",
              "order": 4,
              "kicker": "kernel_sections (short)",
              "title": "Routing",
              "description": "the specialist's own surface, no scoring",
              "detail": "<code>build_kernel_sections</code> (<code>tools/context/context_provider.py</code>), called by <code>_kernel_dispatch_facts</code> in <code>tool_policy.py:554</code>. The code's own words: \"no routing\". It reads the specialist's own <code>surface_routing</code> row and its <code>can_read</code> / <code>can_write</code> from <code>agent_contract_permissions</code>. The prompt-scoring router (<code>classify_surfaces</code>) is not called by any hook.",
              "filters": [
                "deterministic",
                "ruteo",
                "despacho"
              ]
            },
            {
              "id": "bn-birth",
              "order": 5,
              "span": 2,
              "kicker": "birth_dispatched_row",
              "title": "The contract is born",
              "description": "before the specialist exists",
              "detail": "<code>birth_dispatched_row</code> in <code>hooks/modules/agents/dispatch_binding.py:338</code>, called from <code>tool_policy.py:675</code>. The contract carries the task id of a plan task, which later stops the specialist from closing its own work. Contract kinds: <code>verifier</code>, <code>task_execution</code>, <code>investigation</code>, <code>memory</code> (<code>dispatch_binding.py:96</code>).",
              "filters": [
                "deterministic",
                "despacho"
              ]
            }
          ]
        },
        {
          "id": "col-receives",
          "title": "RECEIVES",
          "subtitle": "SubagentStart",
          "treatment": [
            "envelope"
          ],
          "order": 4,
          "span": 1,
          "columns": 1,
          "children": [
            {
              "id": "rc-cached",
              "order": 1,
              "kicker": "read_cached (short)",
              "title": "Recent events",
              "description": "what PreToolUse cached for it",
              "detail": "<code>_read_cached_context</code> in <code>hooks/adapters/claude_code.py</code> (<code>adapt_subagent_start</code>, line 3985) forwards the recent-events digest that <code>build_session_events</code> built at the dispatch (<code>tool_policy.py:472</code>).",
              "filters": [
                "deterministic",
                "entrega",
                "despacho"
              ]
            },
            {
              "id": "rc-claim",
              "order": 2,
              "kicker": "claim_kernel (short)",
              "title": "Claims its contract",
              "description": "joins the born contract to this specialist",
              "detail": "<code>_maybe_claim_dispatch_kernel</code> (<code>claude_code.py:3950</code>) claims the contract born at PreToolUse and injects the kernel: Your Contract, Your CLI, how you work. If the claim fails, the specialist starts with no contract block and opens its own.",
              "filters": [
                "deterministic",
                "entrega"
              ]
            },
            {
              "id": "rc-none",
              "order": 3,
              "type": "separator",
              "style": "dotted",
              "text": "context pulled on demand"
            }
          ]
        },
        {
          "id": "col-works",
          "title": "WORKS",
          "subtitle": "PostToolUse",
          "treatment": [
            "envelope"
          ],
          "order": 5,
          "span": 1,
          "columns": 1,
          "children": [
            {
              "id": "wk-log",
              "order": 1,
              "kicker": "log_execution",
              "title": "One line per run",
              "description": "every tool call, appended",
              "detail": "<code>log_execution</code> in <code>hooks/modules/audit/logger.py:221</code>, called from <code>tool_policy.py:922</code>. One JSON line per run; nothing coordinates it with the writers in the audit band. It runs on every tool call; a failed Bash call returns through PostToolUseFailure instead.",
              "filters": [
                "deterministic",
                "contabilidad"
              ]
            },
            {
              "id": "wk-repeat",
              "order": 2,
              "type": "separator",
              "style": "dotted",
              "text": "↻ each tool call"
            }
          ]
        },
        {
          "id": "col-contract",
          "title": "CONTRACT",
          "subtitle": "SubagentStop",
          "treatment": [
            "envelope"
          ],
          "order": 6,
          "span": 1,
          "columns": 1,
          "children": [
            {
              "id": "ct-gate",
              "order": 1,
              "kicker": "contract_gate (short)",
              "title": "Reads the contract",
              "description": "the stored one, never the reply text",
              "detail": "<code>evaluate_contract_gate</code> in <code>hooks/adapters/claude_code.py:648</code>. It reads only the turn's stored contract; a missing or unfinalized one sends the turn back (exit 2, <code>claude_code.py:905-907</code>). Six closing states, only COMPLETE is final (<code>validator.py:908</code>). A plan-task contract cannot close itself COMPLETE.",
              "filters": [
                "deterministic",
                "the-judge"
              ]
            },
            {
              "id": "ct-perm",
              "order": 2,
              "kicker": "validate_permission",
              "title": "May it write here?",
              "description": "project context, section by section",
              "detail": "<code>validate_permission</code> in <code>hooks/modules/context/context_writer.py:127</code>, reached through <code>process_update_contracts</code> from <code>hooks/subagent_stop.py:176</code>. A write outside the specialist's <code>can_write</code> is refused and counted as an anomaly.",
              "filters": [
                "deterministic",
                "the-judge"
              ]
            },
            {
              "id": "ct-score",
              "order": 3,
              "kicker": "compliance_score (short)",
              "title": "Six factors, a grade",
              "description": "nobody grades their own turn",
              "detail": "<code>compute_compliance_score</code> in <code>hooks/modules/agents/transcript_analyzer.py:439</code>, six factors (<code>:471-531</code>) over the real transcript and the auditor's anomalies, giving a score and a letter.",
              "filters": [
                "deterministic",
                "the-judge"
              ]
            },
            {
              "id": "ct-episode",
              "order": 4,
              "kicker": "episode_writer (short)",
              "title": "Writes the episode",
              "description": "the automatic trace of the turn",
              "detail": "<code>episode_writer.write</code> in <code>hooks/modules/memory/episode_writer.py:125</code>: what was asked, what came out, what it cost, what looked odd (<code>subagent_stop.py:263</code>).",
              "filters": [
                "deterministic",
                "the-judge"
              ]
            }
          ]
        },
        {
          "id": "audit",
          "title": "AUDIT",
          "subtitle": "runs at every moment above, which is why it is the base and not a column",
          "treatment": [
            "envelope"
          ],
          "order": 7,
          "span": 6,
          "columns": 4,
          "children": [
            {
              "id": "au-chain",
              "order": 1,
              "kicker": "record_event",
              "title": "The hashed chain",
              "description": "each approval step hashed onto the last",
              "detail": "Appends SHOWN, EXECUTED, FAILED to the approval chain (<code>gaia/approvals/store.py</code>; tables in <code>schema.sql:1578-1600</code>). Change one step and the chain breaks.",
              "filters": [
                "deterministic",
                "contabilidad"
              ]
            },
            {
              "id": "au-events",
              "order": 2,
              "kicker": "write_event",
              "title": "The event stream",
              "description": "one table every hook writes into",
              "detail": "<code>EventWriter().write_event</code> writes into <code>harness_events</code> (<code>hooks/modules/events/event_writer.py</code>), from PreToolUse, PostToolUse and SubagentStop alike.",
              "filters": [
                "deterministic",
                "contabilidad"
              ]
            },
            {
              "id": "au-auditor",
              "order": 3,
              "kicker": "workflow_auditor",
              "title": "About twenty checks",
              "description": "the anomalies of one turn, in order",
              "detail": "<code>workflow_auditor.audit</code> (<code>hooks/modules/audit/workflow_auditor.py:445-661</code>): about twenty checks in strict order, such as skipped investigation, missing evidence, a skill loaded out of order, a write outside scope. Its list feeds the six-factor grade.",
              "filters": [
                "deterministic",
                "the-judge"
              ]
            },
            {
              "id": "au-stop",
              "order": 4,
              "kicker": "Stop",
              "title": "The closing sweeper",
              "description": "closes what PostToolUse never saw",
              "detail": "A non-zero Bash exit does not reach PostToolUse, so an approved command that failed never gets its closing event there. Stop is where the turn is fully done; anything still open is reconciled.",
              "filters": [
                "deterministic",
                "contabilidad"
              ]
            }
          ]
        }
      ],
      "name": "Backup · Down to the code",
      "order": 9
    }
  ]
};
if (typeof document !== 'undefined' && document.documentElement)
  document.documentElement.setAttribute('data-palette', window.__DOC__.palette || 'neutral');
