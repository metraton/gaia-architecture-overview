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
              "kicker": "→ PAGE 4",
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
                      "kicker": "→ PAGE 7",
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
                      "kicker": "→ PAGE 6",
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
                      "kicker": "→ PAGE 5",
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
                      "kicker": "→ PAGE 4",
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
              "id": "gaia-bottom",
              "treatment": [
                "plain"
              ],
              "order": 3,
              "span": 1,
              "columns": 3,
              "children": [
                {
                  "id": "gaia-specialists",
                  "title": "The specialist",
                  "subtitle": "one per piece of work, 8 today",
                  "treatment": [
                    "envelope"
                  ],
                  "order": 1,
                  "span": 1,
                  "columns": 1,
                  "children": [
                    {
                      "id": "mp-specialists",
                      "order": 1,
                      "kicker": "→ PAGE 3",
                      "title": "Does the HOW",
                      "description": [
                        "born clean for one piece of work"
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
                },
                {
                  "id": "gaia-carries",
                  "title": "What a specialist carries",
                  "subtitle": "handed to it the moment it is born",
                  "treatment": [
                    "envelope"
                  ],
                  "order": 2,
                  "span": 2,
                  "columns": 5,
                  "children": [
                    {
                      "id": "sc-identity",
                      "order": 1,
                      "kicker": "→ PAGE 3",
                      "title": "Identity",
                      "description": [
                        "its role and its field"
                      ],
                      "detail": "Each specialist is defined by one file: what it is for, the field it owns, and the tools it may use. The same file decides which part of the project it may read and write.",
                      "filters": [
                        "semantic"
                      ]
                    },
                    {
                      "id": "sc-skills",
                      "order": 2,
                      "kicker": "→ PAGE 3",
                      "title": "Skills",
                      "description": [
                        "how its kind of work is done"
                      ],
                      "detail": "Skills are written instructions: the patterns and procedures for its kind of work. The ones its definition lists are loaded when it is born; others it loads when a task calls for them.",
                      "filters": [
                        "semantic"
                      ]
                    },
                    {
                      "id": "sc-context",
                      "order": 3,
                      "kicker": "→ PAGE 5",
                      "title": "Project context",
                      "description": [
                        "what it may read and write"
                      ],
                      "detail": "What Gaia knows about your workspace, split into sections. The specialist is told which sections it may read and which it may write, and pulls the ones it needs."
                    },
                    {
                      "id": "sc-memory",
                      "order": 4,
                      "kicker": "→ PAGE 7",
                      "title": "Memory about you",
                      "description": [
                        "how you like to work"
                      ],
                      "detail": "The rules and preferences you have given for how work is done are handed in when the specialist is born, so it does not ask again. The rest of memory it can search when it needs it.",
                      "filters": [
                        "memory"
                      ]
                    },
                    {
                      "id": "sc-contract",
                      "order": 5,
                      "kicker": "→ PAGE 5",
                      "title": "Its contract",
                      "description": [
                        "the blank form it must fill"
                      ],
                      "detail": "It is born with its contract already open: who it is, what it was asked, and what it may touch. It fills the form as it works, and its turn cannot close until the form is finished.",
                      "filters": [
                        "the-contract",
                        "nothing-self-declared"
                      ]
                    }
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
      "columns": 1,
      "filters": [
        {
          "key": "one-turn",
          "label": "one turn",
          "steps": [
            "A specialist lives one turn, from its dispatch to its close, and that turn ends with a contract the orchestrator reads."
          ]
        },
        {
          "key": "the-contract",
          "label": "one contract, out and back",
          "steps": [
            "A specialist is born with a blank contract and returns it filled; the orchestrator reads it before telling you anything."
          ]
        },
        {
          "key": "the-human",
          "label": "who decides?",
          "steps": [
            "You talk only to the orchestrator, which holds no editing tools; a specialist's changes to something real wait for your approval."
          ]
        },
        {
          "key": "memory",
          "label": "what do we remember?",
          "steps": [
            "The orchestrator reads and curates memory; a specialist is handed how you like to work at birth, and searches the rest."
          ]
        },
        {
          "key": "deterministic",
          "label": "a rule decides",
          "steps": [
            "Which tools an agent holds is decided by rule in code, not by the model: the orchestrator has no editing tools, and a specialist's commands pass through the approval hook."
          ]
        },
        {
          "key": "semantic",
          "label": "a model follows instructions",
          "steps": [
            "Every agent is a model following its skills: the orchestrator's for routing and reading, a specialist's for its kind of work."
          ]
        },
        {
          "key": "nothing-self-declared",
          "label": "is it really done?",
          "steps": [
            "A specialist does not say it is done: its contract is read, and a planned task is checked by someone who did not do it."
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
          "span": 1,
          "columns": 1,
          "children": [
            {
              "id": "zoom-rail",
              "type": "rail",
              "treatment": [
                "centered"
              ],
              "title": "ZOOM · WHAT AN AGENT IS"
            }
          ]
        },
        {
          "id": "every",
          "title": "Every agent has",
          "subtitle": "the same five parts, whatever its job",
          "treatment": [
            "envelope"
          ],
          "order": 2,
          "span": 1,
          "columns": 5,
          "children": [
            {
              "id": "ev-identity",
              "order": 1,
              "kicker": "IS",
              "title": "An identity",
              "description": [
                "one file: its role, its field"
              ],
              "detail": "An <b>agent</b> is one definition file: what it is for, the surface it owns, the tools it may hold and the skills it loads (<code>agents/&lt;name&gt;.md</code> frontmatter: <code>description</code>, <code>routing.surface</code>, <code>tools</code>, <code>skills</code>).",
              "treatment": [
                "centered"
              ]
            },
            {
              "id": "ev-skills",
              "order": 2,
              "kicker": "KNOWS HOW",
              "title": "Skills",
              "description": [
                "written patterns and procedures"
              ],
              "detail": "A <b>skill</b> is written instructions an agent loads. The ones its file lists are loaded at birth; others it loads when the work calls for them.",
              "treatment": [
                "centered"
              ],
              "filters": [
                "semantic"
              ]
            },
            {
              "id": "ev-context",
              "order": 3,
              "kicker": "KNOWS",
              "title": "Context and memory",
              "description": [
                "about your project, and about you"
              ],
              "detail": "<b>Project context</b> is what Gaia knows about your workspace, in sections. <b>Curated memory</b> is what outlives the session: your rules, your preferences, what is pending.",
              "treatment": [
                "centered"
              ],
              "filters": [
                "memory"
              ]
            },
            {
              "id": "ev-tools",
              "order": 4,
              "kicker": "CAN USE",
              "title": "Its tools",
              "description": [
                "only the ones its file grants"
              ],
              "detail": "Its file lists the tools it may hold, and a hook enforces the list before any tool runs. This is where the orchestrator and a specialist differ most.",
              "treatment": [
                "centered"
              ],
              "filters": [
                "deterministic"
              ]
            },
            {
              "id": "ev-contract",
              "order": 5,
              "kicker": "ANSWERS WITH",
              "title": "A contract",
              "description": [
                "the form Gaia reads, never the reply"
              ],
              "detail": "The <b>contract</b> says what was asked, what was found, what changed, with what evidence, and the state it ends in. Gaia stores it and judges it by rule.",
              "treatment": [
                "centered"
              ],
              "filters": [
                "the-contract"
              ]
            }
          ]
        },
        {
          "id": "orchestrator",
          "title": "The orchestrator keeps",
          "subtitle": "one per session · the WHAT",
          "treatment": [
            "envelope"
          ],
          "order": 3,
          "span": 1,
          "columns": 5,
          "children": [
            {
              "id": "or-identity",
              "order": 1,
              "title": "The one you talk to",
              "description": [
                "keeps the thread, decides the route"
              ],
              "detail": "The orchestrator is the only agent you talk to. It decides the route, shows it to you before starting, and tells you the result from what the specialists delivered.",
              "filters": [
                "the-human"
              ]
            },
            {
              "id": "or-skills",
              "order": 2,
              "title": "Route and read",
              "description": [
                "which specialist, how to show you"
              ],
              "detail": "Its skills are about coordination: routing a request to the specialist that owns it, reading a returned contract, and presenting an approval to you before anything runs.",
              "filters": [
                "semantic"
              ]
            },
            {
              "id": "or-memory",
              "order": 3,
              "title": "Curated memory",
              "description": [
                "reads it, and writes it on purpose"
              ],
              "detail": "It reads curated memory and writes it on purpose. Only the orchestrator and gaia-operator write it; every other specialist is blocked by rule (<code>subagent_memory_write_guard</code>).",
              "filters": [
                "memory"
              ]
            },
            {
              "id": "or-tools",
              "order": 4,
              "kicker": "NEVER",
              "title": "Edits your files",
              "description": [
                "only dispatch and Gaia's own CLI"
              ],
              "detail": "Editing tools are not in its set (<code>disallowedTools</code> in its file; <code>check_delegate_mode</code> against <code>ORCHESTRATOR_ALLOWED_TOOLS</code> at PreToolUse). Every change is handed to a specialist. A rule in code decides this, not the model.",
              "filters": [
                "deterministic",
                "the-human"
              ]
            },
            {
              "id": "or-contract",
              "order": 5,
              "title": "Reads every contract",
              "description": [
                "and the plan, before telling you"
              ],
              "detail": "The orchestrator has no contract of its own to return: it reads the specialists' contracts (<code>gaia contract view</code>) and moves briefs, plans and tasks from one status to the next.",
              "filters": [
                "the-contract",
                "nothing-self-declared",
                "one-turn"
              ]
            }
          ]
        },
        {
          "id": "specialist",
          "title": "A specialist carries",
          "subtitle": "one per piece of work · the HOW",
          "treatment": [
            "envelope"
          ],
          "order": 4,
          "span": 1,
          "columns": 5,
          "children": [
            {
              "id": "sp-identity",
              "order": 1,
              "title": "One field, one task",
              "description": [
                "born clean for this piece of work"
              ],
              "detail": "A specialist owns one surface (application code, infrastructure, the cluster, live systems, Gaia itself) and is born clean for one task. A <b>turn</b> is its whole life, from dispatch to close.",
              "filters": [
                "one-turn"
              ]
            },
            {
              "id": "sp-skills",
              "order": 2,
              "title": "Skills of its trade",
              "description": [
                "listed in its file, loaded at birth"
              ],
              "detail": "Claude Code loads the skills its file lists (<code>skills:</code> frontmatter) when the specialist is born; Gaia reminds it when a file it touches is governed by another one.",
              "filters": [
                "semantic"
              ]
            },
            {
              "id": "sp-context",
              "order": 3,
              "title": "Its slice, and you",
              "description": [
                "the sections it may touch, how you work"
              ],
              "detail": "At SubagentStart the hook injects the sections it may read and write (<code>can_read</code>, <code>can_write</code>) and how you like work done (<code># How the user works</code>). It pulls the rest on demand (<code>gaia context get</code>, <code>gaia memory search</code>).",
              "filters": [
                "memory"
              ]
            },
            {
              "id": "sp-tools",
              "order": 4,
              "kicker": "HAS",
              "title": "Editing tools",
              "description": [
                "and its own copy of the repo"
              ],
              "detail": "It edits files and runs commands; anything that changes something real waits for your approval. When it writes to a repository it works in its own copy (<code>gaia worktree create</code>), so two turns never share one tree.",
              "filters": [
                "deterministic",
                "the-human"
              ]
            },
            {
              "id": "sp-contract",
              "order": 5,
              "title": "Returns its contract",
              "description": [
                "born blank, filled as it works"
              ],
              "detail": "It is born with its contract open (<code># Your Contract</code>) and fills it as it works. SubagentStop reads only the stored contract, never the reply; an unfinished one sends the turn back (<code>exit 2</code>).",
              "filters": [
                "the-contract",
                "nothing-self-declared",
                "one-turn"
              ]
            }
          ]
        },
        {
          "id": "roster",
          "treatment": [
            "plain"
          ],
          "order": 5,
          "span": 1,
          "columns": 1,
          "children": [
            {
              "id": "roster-line",
              "type": "separator",
              "order": 1,
              "text": "9 today: orchestrator · developer · platform-architect · gitops-operator · cloud-troubleshooter"
            },
            {
              "id": "roster-line-2",
              "type": "separator",
              "order": 2,
              "text": "gaia-planner · gaia-verifier · gaia-operator · gaia-system · you can add your own"
            }
          ]
        }
      ],
      "name": "3 · What an agent is",
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
            "Every event of the turn is a hook: code the host runs at a fixed moment, deciding by a rule, with no model involved. So is the rule that sorts every command."
          ]
        },
        {
          "key": "one-turn",
          "label": "one turn",
          "steps": [
            "One specialist's life, from dispatch to close: four events, the same every time."
          ]
        },
        {
          "key": "one-command",
          "label": "one command",
          "steps": [
            "Before any tool, one command meets one rule, and one of three things happens: it runs, it waits for your yes, or it never runs."
          ]
        },
        {
          "key": "the-human",
          "label": "who decides?",
          "steps": [
            "A command that changes something waits before any tool runs, and you see the exact command before you say yes."
          ]
        },
        {
          "key": "nothing-self-declared",
          "label": "is it really done?",
          "steps": [
            "The turn can stop at two events: before any tool, and at the close, when the contract comes back and is judged."
          ]
        },
        {
          "key": "memory",
          "label": "what do we remember?",
          "steps": [
            "The specialist is handed memory with its context, the close writes the episode of its turn, and your yes or no is kept in the approval chain."
          ]
        }
      ],
      "sections": [
        {
          "id": "turn",
          "title": "The life of a request",
          "subtitle": "One turn has four events, the same every time. The left column is Gaia's own layer — what it pushes at open and what it answers on demand; from the user prompt on, someone is in the loop.",
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
                  "title": "The events of one turn",
                  "subtitle": "from dispatch to close · at each one the host runs a hook",
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
                      "kicker": "1 · PreToolUse",
                      "title": "Before any tool",
                      "description": [
                        "checked, sorted, can stop here"
                      ],
                      "detail": "<b>PreToolUse</b> — the hook the host runs before every tool call, and one of the two places a turn can stop. At the dispatch it decides whether the orchestrator may use the tool at all or must delegate, builds the specialist's context, caches it, and opens the turn's contract carrying the <code>plan_task_id</code> that will later forbid the specialist from declaring its own work done. On every command it applies the approvals rule below. A block here is <code>exit 2</code> — the command never runs. Nothing of the specialist existed before this event.",
                      "variant": "bad",
                      "filters": [
                        "deterministic",
                        "one-turn",
                        "one-command",
                        "the-human",
                        "nothing-self-declared"
                      ]
                    },
                    {
                      "id": "lf-receives",
                      "order": 2,
                      "kicker": "2 · SubagentStart",
                      "title": "Handed its context",
                      "description": [
                        "its contract, context and memory"
                      ],
                      "detail": "<b>SubagentStart</b> — the first instant the specialist exists. It receives what PreToolUse already built and cached: its contract, opened for it, naming the project context it may read and write; its surface and role; the memory index and the recent session events. Its ANCHORS — the identifiers it was handed — are written down here, so the close can measure which fraction of that context it actually touched. What it does NOT receive from Gaia is its skills: the host injects those from the agent's own definition.",
                      "filters": [
                        "deterministic",
                        "one-turn",
                        "memory"
                      ]
                    },
                    {
                      "id": "lf-works",
                      "order": 3,
                      "kicker": "3 · PostToolUse",
                      "title": "Each tool call",
                      "description": [
                        "checked before, recorded after"
                      ],
                      "detail": "<b>PostToolUse</b> — the specialist works, and every tool it calls passes the same gate again: PreToolUse checks the call before it runs, PostToolUse records it after. That is why this is the only event that repeats, once per tool call. PostToolUse logs the execution, seals EXECUTED or FAILED onto the hashed approval chain and, when you answer an approval question, activates that approval so the byte-identical retry finds it. A failed Bash call comes back through <b>PostToolUseFailure</b> instead.",
                      "filters": [
                        "deterministic",
                        "one-turn"
                      ]
                    },
                    {
                      "id": "lf-contract",
                      "order": 4,
                      "kicker": "4 · SubagentStop",
                      "title": "At the close",
                      "description": [
                        "the contract is judged, never the reply"
                      ],
                      "detail": "<b>SubagentStop</b> — the judge, and the other place a turn can stop. It reads the turn's stored contract, the one the specialist filled during its turn, and never the reply text. A missing or unfinalized contract sends the turn back (<code>exit 2</code>) and the specialist repairs it. A turn ends in one of six states, and only COMPLETE is final; a turn bound to a plan task cannot declare itself COMPLETE, so a separate verifier has to confirm it. The close also measures the turn from the transcript, computes the compliance score and writes the episode.<br><br>Source: <code>hooks/adapters/claude_code.py:905-907</code>; <code>validator.py:908</code>.",
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
                  "id": "approvals",
                  "title": "Approvals · inside “before any tool”",
                  "subtitle": "what the first event decides, for every command",
                  "treatment": [
                    "envelope"
                  ],
                  "order": 3,
                  "span": 7,
                  "columns": 4,
                  "children": [
                    {
                      "id": "ap-sorts",
                      "order": 1,
                      "kicker": "BEFORE ANY TOOL · A RULE",
                      "title": "Sorts every command",
                      "description": [
                        "in code, no model involved"
                      ],
                      "detail": "Before any tool runs, a fixed classifier gives every command a tier: <b>T0</b> read, <b>T1</b> validate, <b>T2</b> dry run, <b>T3</b> change. It matches patterns and verbs in code; no model is consulted, so the same command gets the same answer every time. Before that, a separate fixed pattern check holds the never list.<br><br>Sources: <code>hooks/modules/security/tiers.py:29-35</code> (<code>SecurityTier</code>), <code>:78</code> (<code>_classify_command_tier_cached</code>); <code>hooks/modules/security/blocked_commands.py:678</code> (<code>is_blocked_command</code>).",
                      "filters": [
                        "deterministic",
                        "one-command"
                      ]
                    },
                    {
                      "id": "ap-runs",
                      "order": 2,
                      "kicker": "READ-ONLY",
                      "title": "Runs",
                      "description": [
                        "nobody is asked"
                      ],
                      "detail": "Tiers <b>T0</b> read, <b>T1</b> validate and <b>T2</b> dry run change nothing, so the command runs and nobody is asked.<br><br>Source: <code>hooks/modules/security/tiers.py:29-35</code> (<code>SecurityTier</code>).",
                      "filters": [
                        "deterministic",
                        "one-command"
                      ]
                    },
                    {
                      "id": "ap-waits",
                      "order": 3,
                      "kicker": "CHANGES SOMETHING",
                      "title": "Waits for your yes",
                      "description": [
                        "one standard approval message"
                      ],
                      "detail": "A <b>T3</b> command, one that changes something, is held with an <code>approval_id</code>. A specialist has no channel to you, so its turn goes up as <code>APPROVAL_REQUEST</code> and the orchestrator brings you the approval message, the same shape every time: what is about to run, its exact bytes, its scope, its risk and how to undo it. You approve, and the specialist retries the command byte for byte; you reject, and nothing happens.<br><br>An approval is single-use, must match the approved command byte for byte, and lasts 30 minutes. Every step is kept in the approval chain.<br><br>Sources: <code>approval_grants.py:193</code>, <code>:523</code>; <code>writer.py:86</code>; <code>schema.sql:1578-1600</code>.",
                      "filters": [
                        "one-command",
                        "the-human",
                        "memory"
                      ]
                    },
                    {
                      "id": "ap-never",
                      "order": 4,
                      "kicker": "NEVER",
                      "title": "Never runs",
                      "description": [
                        "irreversible, nothing to approve"
                      ],
                      "detail": "Irreversible commands are on the never list, a separate fixed pattern check. Its refusal has nothing to approve: no approval message, and no approval can let the command through.<br><br>Source: <code>hooks/modules/security/blocked_commands.py:678</code> (<code>is_blocked_command</code>).",
                      "filters": [
                        "deterministic",
                        "one-command"
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
              "text": "red marks the only two events the turn can stop — before any tool and at the close"
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
      "id": "p6-contracts",
      "layout": "grid",
      "form": "dashboard",
      "columns": 1,
      "filters": [
        {
          "key": "the-contract",
          "label": "one contract, out and back",
          "steps": [
            "The engine injects the agent contract, the agent fills it and answers in it, the engine validates it, and the orchestrator reads it."
          ]
        },
        {
          "key": "semantic",
          "label": "a model follows instructions",
          "steps": [
            "The orchestrator and the agent are models working from their instructions; the engine between them is not."
          ]
        },
        {
          "key": "deterministic",
          "label": "a rule decides",
          "steps": [
            "The engine decides by rule: what each agent may read and write, whether the answer is valid, and whether an update may be saved."
          ]
        },
        {
          "key": "project-contract",
          "label": "what may it read and write?",
          "steps": [
            "Each agent may read some sections of the project contract and write others; its updates are checked against that before they are saved."
          ]
        },
        {
          "key": "nothing-self-declared",
          "label": "is it really done?",
          "steps": [
            "Nothing is taken on the agent's word: the contract is validated by rule, and the orchestrator checks it before telling you."
          ]
        },
        {
          "key": "next-move",
          "label": "what happens next?",
          "steps": [
            "The state the agent answers with decides the orchestrator's next move."
          ]
        },
        {
          "key": "the-human",
          "label": "who decides?",
          "steps": [
            "An answer can be an approval request: the orchestrator brings the exact command to you."
          ]
        }
      ],
      "sections": [
        {
          "id": "p6-head",
          "treatment": [
            "plain"
          ],
          "order": 1,
          "span": 1,
          "columns": 1,
          "children": [
            {
              "id": "p6-rail",
              "type": "rail",
              "order": 1,
              "span": 1,
              "treatment": [
                "centered"
              ],
              "title": "POINT 2 · CONTRACTS · EVERY AGENT ANSWERS WITH A CONTRACT"
            }
          ]
        },
        {
          "id": "p6-flow",
          "treatment": [
            "plain"
          ],
          "order": 2,
          "span": 1,
          "columns": 3,
          "children": [
            {
              "id": "p6-orch",
              "title": "The orchestrator",
              "subtitle": "a model · holds the conversation",
              "treatment": [
                "envelope"
              ],
              "order": 1,
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "p6-sends",
                  "order": 1,
                  "kicker": "1 · SENDS",
                  "title": "The work",
                  "description": [
                    "one goal, to one specialist"
                  ],
                  "detail": "The orchestrator dispatches one specialist for one turn, with one goal. It does not write the specialist's contract; the engine does.",
                  "filters": [
                    "semantic"
                  ]
                },
                {
                  "id": "p6-reads",
                  "order": 2,
                  "kicker": "6 · READS",
                  "title": "Keeps orchestrating",
                  "description": [
                    "reads it, checks it, decides what next"
                  ],
                  "detail": "The orchestrator reads the stored agent contract, not the reply text, checks what it claims against what it can open itself, and takes its next move from the state: answer you, send a verifier, show you a command, ask you, route an obstacle, or resume the turn.",
                  "filters": [
                    "the-contract",
                    "semantic",
                    "nothing-self-declared",
                    "next-move",
                    "the-human"
                  ]
                }
              ]
            },
            {
              "id": "p6-engine",
              "title": "Gaia's engine",
              "subtitle": "code · decides by rule",
              "treatment": [
                "envelope"
              ],
              "order": 2,
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "p6-injects",
                  "order": 1,
                  "kicker": "2 · INJECTS ►",
                  "title": "A contract for this agent",
                  "description": [
                    "its surface, role, what it may read and write"
                  ],
                  "detail": "At dispatch the engine opens the agent contract and injects it as <code># Your Contract</code>. What is adapted to the agent is its own data, not the form: its <b>surface</b>, its <b>role</b> (<code>primary</code> or <code>verifier</code>), and the project-contract sections it may read (<code>can_read</code>) and write (<code>can_write</code>), taken from its own permission rows. The form it must answer in is the same for every agent.<br><br>Sources: <code>tools/context/context_provider.py:191</code> (<code>build_kernel_sections</code>), <code>:244-249</code>; <code>hooks/modules/context/kernel_builder.py:193</code> (<code>build_dispatch_kernel</code>), <code>:214-215</code>, <code>:243-244</code>.",
                  "filters": [
                    "the-contract",
                    "deterministic",
                    "project-contract"
                  ]
                },
                {
                  "id": "p6-validates",
                  "order": 2,
                  "kicker": "◄ 5 · VALIDATES",
                  "title": "By rule, not the prose",
                  "description": [
                    "the reply text is never read"
                  ],
                  "detail": "At the close, <b>SubagentStop</b> finds the turn's stored agent contract and validates it by rule; nothing in the reply text is read. A missing or unfinalized contract sends the turn back (<code>exit 2</code>). Only COMPLETE is final.<br><br>What each key of the agent contract holds:<br><b>status</b> — how the turn ended, one of six states.<br><b>evidence</b> — what it saw (files, searches) and what it did (commands, outputs).<br><b>verification</b> — how the result was checked, and whether it passed.<br><b>open gaps</b> — what it could not do or check.<br><b>reach</b> — what it touched beyond the files it was sent to.<br><b>approval</b> — the exact command it asks you to approve.<br><b>project updates</b> — changes it proposes to the project contract.<br><br>Sources: <code>hooks/adapters/claude_code.py:905-907</code>; <code>validator.py:908</code>.",
                  "filters": [
                    "the-contract",
                    "deterministic",
                    "nothing-self-declared"
                  ]
                }
              ]
            },
            {
              "id": "p6-agent",
              "title": "The agent",
              "subtitle": "a model · one specialist",
              "treatment": [
                "envelope"
              ],
              "order": 3,
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "p6-receives",
                  "order": 1,
                  "kicker": "3 · RECEIVES",
                  "title": "Does the work",
                  "description": [
                    "its contract open from birth"
                  ],
                  "detail": "The specialist is born with its agent contract already open, named <code>&lt;agent_id&gt;.&lt;token&gt;</code>, and adopts it with <code>gaia contract set/add/fill --draft-id</code>. It pulls the project-contract sections it needs, on demand, and writes its evidence as it works.",
                  "filters": [
                    "the-contract",
                    "semantic"
                  ]
                },
                {
                  "id": "p6-answers",
                  "order": 2,
                  "kicker": "◄ 4 · ANSWERS",
                  "title": "In a structured form",
                  "description": [
                    "the agent contract, filled as it goes"
                  ],
                  "detail": "The answer is the stored agent contract, closed with <code>gaia contract finalize</code>; the final message only signals that the turn ended. Its state decides what the orchestrator does next, and an <code>APPROVAL_REQUEST</code> carries the exact command for you.",
                  "filters": [
                    "the-contract",
                    "semantic",
                    "next-move",
                    "the-human"
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "p6-kinds",
          "title": "Two kinds of contract",
          "subtitle": "the project contract is what Gaia knows about your project, in named sections · the agent contract is the form an agent answers in · the top row is how they meet, in the order of one turn",
          "treatment": [
            "envelope"
          ],
          "order": 3,
          "span": 1,
          "columns": 2,
          "children": [
            {
              "id": "p6-project",
              "treatment": [
                "plain"
              ],
              "order": 2,
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "pc-root",
                  "type": "rail",
                  "order": 1,
                  "span": 1,
                  "title": "Project contract"
                },
                {
                  "id": "pc-body",
                  "treatment": [
                    "envelope"
                  ],
                  "order": 2,
                  "span": 1,
                  "columns": 1,
                  "children": [
                    {
                      "id": "pc-each",
                      "type": "rail",
                      "order": 1,
                      "span": 1,
                      "title": "Each project"
                    },
                    {
                      "id": "pc-sections",
                      "treatment": [
                        "envelope"
                      ],
                      "order": 2,
                      "span": 1,
                      "columns": 2,
                      "children": [
                        {
                          "id": "pc-identity",
                          "type": "rail",
                          "order": 1,
                          "title": "project_identity"
                        },
                        {
                          "id": "pc-stack",
                          "type": "rail",
                          "order": 2,
                          "title": "stack"
                        },
                        {
                          "id": "pc-env",
                          "type": "rail",
                          "order": 3,
                          "title": "environment"
                        },
                        {
                          "id": "pc-git",
                          "type": "rail",
                          "order": 4,
                          "title": "git"
                        },
                        {
                          "id": "pc-arch",
                          "type": "rail",
                          "order": 5,
                          "title": "architecture_overview"
                        },
                        {
                          "id": "pc-apps",
                          "type": "rail",
                          "order": 6,
                          "title": "application_services"
                        },
                        {
                          "id": "pc-infra",
                          "type": "rail",
                          "order": 7,
                          "title": "infrastructure"
                        },
                        {
                          "id": "pc-topo",
                          "type": "rail",
                          "order": 8,
                          "title": "infrastructure_topology"
                        },
                        {
                          "id": "pc-gitops",
                          "type": "rail",
                          "order": 9,
                          "title": "gitops_configuration"
                        },
                        {
                          "id": "pc-cluster",
                          "type": "rail",
                          "order": 10,
                          "title": "cluster_details"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "id": "p6-relations",
              "treatment": [
                "plain"
              ],
              "order": 1,
              "span": 2,
              "columns": 3,
              "children": [
                {
                  "id": "p6-rel-read",
                  "order": 1,
                  "kicker": "1 · AT DISPATCH",
                  "title": "Names what it may use",
                  "description": [
                    "can_read and can_write, per agent"
                  ],
                  "detail": "The agent contract names which project-contract sections this agent may read (<code>can_read</code>) and write (<code>can_write</code>), from its own permissions, declared in its definition (<code>project_context_contracts</code>). It hands over the names, not the contents: the agent reads a section on demand with <code>gaia context get-contract --section</code>.<br><br>What each section holds:<br><b>project_identity</b> — the project's name, path, remote and type.<br><b>stack</b> — its languages and tools.<br><b>environment</b> — where it runs.<br><b>git</b> — its repository conventions.<br><b>architecture_overview</b> — how its parts fit.<br><b>application_services</b> — its services (developer writes it).<br><b>infrastructure</b>, <b>infrastructure_topology</b> — its cloud (platform-architect writes them).<br><b>gitops_configuration</b> — its desired cluster state (gitops-operator).<br><b>cluster_details</b> — the live cluster (cloud-troubleshooter).<br><br>Sources: <code>hooks/modules/context/kernel_builder.py:214-215</code>, <code>:243-244</code>; <code>tools/context/context_provider.py:244-249</code>; <code>agents/developer.md:9-11</code>; <code>bin/cli/context.py:366</code>.",
                  "filters": [
                    "deterministic",
                    "project-contract"
                  ]
                },
                {
                  "id": "p6-rel-carry",
                  "order": 2,
                  "kicker": "2 · IN ITS ANSWER",
                  "title": "Carries updates",
                  "description": [
                    "to the sections it may write"
                  ],
                  "detail": "The agent contract can carry <code>update_contracts</code>: a list of <code>{contract, payload}</code> entries, each a change to one project-contract section. An agent proposes them; it cannot write the project contract directly.",
                  "filters": [
                    "project-contract"
                  ]
                },
                {
                  "id": "p6-rel-check",
                  "order": 3,
                  "kicker": "3 · AT THE CLOSE",
                  "title": "Checked, then saved",
                  "description": [
                    "each update against its permission"
                  ],
                  "detail": "At SubagentStop each update is checked against the agent's write permission, one by one, before it is saved; an update to a section it may not write is rejected and named, and the rest still apply.<br><br>Sources: <code>hooks/subagent_stop.py:176</code> calls <code>process_update_contracts</code> (<code>hooks/modules/context/context_writer.py:376</code>), which runs <code>validate_permission</code> (<code>:127</code>) per entry at <code>:436</code>.",
                  "filters": [
                    "deterministic",
                    "project-contract",
                    "nothing-self-declared"
                  ]
                }
              ]
            },
            {
              "id": "p6-agent-contract",
              "treatment": [
                "plain"
              ],
              "order": 3,
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "ac-root",
                  "type": "rail",
                  "order": 1,
                  "span": 1,
                  "title": "Agent contract"
                },
                {
                  "id": "ac-body",
                  "treatment": [
                    "envelope"
                  ],
                  "order": 2,
                  "span": 1,
                  "columns": 1,
                  "children": [
                    {
                      "id": "ac-status",
                      "type": "rail",
                      "order": 1,
                      "span": 1,
                      "title": "status"
                    },
                    {
                      "id": "ac-states",
                      "treatment": [
                        "envelope"
                      ],
                      "order": 2,
                      "span": 1,
                      "columns": 2,
                      "children": [
                        {
                          "id": "ac-complete",
                          "type": "rail",
                          "order": 1,
                          "title": "COMPLETE"
                        },
                        {
                          "id": "ac-needs-verification",
                          "type": "rail",
                          "order": 2,
                          "title": "NEEDS_VERIFICATION"
                        },
                        {
                          "id": "ac-approval-request",
                          "type": "rail",
                          "order": 3,
                          "title": "APPROVAL_REQUEST"
                        },
                        {
                          "id": "ac-needs-input",
                          "type": "rail",
                          "order": 4,
                          "title": "NEEDS_INPUT"
                        },
                        {
                          "id": "ac-blocked",
                          "type": "rail",
                          "order": 5,
                          "title": "BLOCKED"
                        },
                        {
                          "id": "ac-in-progress",
                          "type": "rail",
                          "order": 6,
                          "title": "IN_PROGRESS"
                        }
                      ]
                    },
                    {
                      "id": "ac-evidence",
                      "type": "rail",
                      "order": 3,
                      "span": 1,
                      "title": "evidence"
                    },
                    {
                      "id": "ac-parts",
                      "treatment": [
                        "envelope"
                      ],
                      "order": 4,
                      "span": 1,
                      "columns": 2,
                      "children": [
                        {
                          "id": "ac-seen",
                          "type": "rail",
                          "order": 1,
                          "title": "seen"
                        },
                        {
                          "id": "ac-done",
                          "type": "rail",
                          "order": 2,
                          "title": "done"
                        }
                      ]
                    },
                    {
                      "id": "ac-verification",
                      "type": "rail",
                      "order": 5,
                      "span": 1,
                      "title": "verification"
                    },
                    {
                      "id": "ac-gaps",
                      "type": "rail",
                      "order": 6,
                      "span": 1,
                      "title": "open gaps"
                    },
                    {
                      "id": "ac-reach",
                      "type": "rail",
                      "order": 7,
                      "span": 1,
                      "title": "reach"
                    },
                    {
                      "id": "ac-approval",
                      "type": "rail",
                      "order": 8,
                      "span": 1,
                      "title": "approval"
                    },
                    {
                      "id": "ac-updates",
                      "type": "rail",
                      "order": 9,
                      "span": 1,
                      "title": "project updates"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "name": "5 · Contracts",
      "order": 4
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
              "detail": "What one step produces is stored and read by the next: the contract names its task, the task its gate, the gate the evidence behind its result. It is kept in Gaia's database (<code>schema.sql:442-700</code>), so it survives the session. What is kept is memory, page 7.",
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
      "name": "6 · It checks",
      "order": 5
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
      "name": "7 · Memory",
      "order": 6
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
              "kicker": "→ PAGE 4",
              "title": "YOU",
              "description": [
                "you sign what changes something"
              ],
              "detail": "Page 4 · The life of a request, its approvals. Anything that changes something real needs your approval, your yes to one exact command, and a rule sorts every command before any tool runs.",
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
              "kicker": "→ PAGES 4–7",
              "title": "WHAT GAIA MANAGES",
              "description": [
                "memory, plans, contracts, approvals"
              ],
              "detail": "Through its own command line, Gaia keeps memory (page 7), plans and tasks (page 6), contracts (page 5) and approvals (page 4), so what it learns and what it was asked outlives the session.",
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
              "kicker": "→ PAGES 3, 5",
              "title": "THE SPECIALISTS",
              "description": [
                "do the how, answer with a contract"
              ],
              "detail": "Page 3 · What an agent is: every specialist has the same parts, and there are 8 today, one per field. Page 5 · Contracts: every specialist answers with its own contract, and the orchestrator checks what it claims before telling you.",
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
      "name": "8 · Install it, ask it",
      "order": 7
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
      "order": 8
    }
  ]
};
if (typeof document !== 'undefined' && document.documentElement)
  document.documentElement.setAttribute('data-palette', window.__DOC__.palette || 'neutral');
