// GENERATED FILE — do not edit by hand.
// Produced by build-data.mjs from data/document.yaml + data/pages/*.yaml.
window.__DOC__ = {
  "title": "GAIA",
  "subtitle": "Generative AI Interface for Agents",
  "version": "0.1.0",
  "palette": "neutral",
  "tokens": {
    "row": {
      "cell_h": 130,
      "sep_h": 40,
      "zone_min_h": 180,
      "compact_h": 74
    },
    "space": {
      "base": 8,
      "scale": [
        0.5,
        1,
        2,
        3,
        4,
        6,
        8
      ]
    },
    "frame": {
      "v": 28,
      "h": 40,
      "top": 35,
      "narrow": 8
    },
    "plane_max": 1280,
    "cell_min_w": 120,
    "type": {
      "title": {
        "min_px": 15,
        "vw": 1,
        "max_px": 17,
        "lines": 2
      },
      "desc": {
        "px": 12,
        "lh": 1.4,
        "lines": 3
      },
      "kicker": {
        "px": 10.5,
        "track_em": 0.09
      },
      "section_title": {
        "min_px": 13,
        "vw": 0.85,
        "max_px": 14.5,
        "track_em": 0.1,
        "lines": 2
      },
      "section_sub": {
        "px": 12,
        "lines": 3
      },
      "rail": {
        "px": 13,
        "track_em": 0.09
      },
      "rail_hue": {
        "px": 10.5,
        "track_em": 0,
        "pad_y": 10
      },
      "panel": {
        "title_px": 19,
        "summary_px": 15,
        "kicker_px": 13,
        "kicker_track_em": 0.08
      }
    },
    "indent_step": 32,
    "dim": {
      "box": 0.18,
      "label": 0.34
    },
    "panel": {
      "dock": "bottom-left",
      "inset": 24,
      "width_cols": 2
    },
    "breakpoints": {
      "stack": 1440,
      "two": 1000,
      "one": 640
    },
    "viewport": {
      "w": 1920,
      "h": 1080
    },
    "default_columns": 2
  },
  "css_vars": {
    "--cell-h": "130px",
    "--sep-row-h": "40px",
    "--zone-min-h": "180px",
    "--frame-v": "28px",
    "--frame-h": "40px",
    "--frame-top": "35px",
    "--frame-narrow": "8px",
    "--plane-max": "1280px",
    "--cell-min-w": "120px",
    "--title-min": "15px",
    "--title-vw": "1vw",
    "--title-max": "17px",
    "--title-lines": "2",
    "--desc-px": "12px",
    "--desc-lh": "1.4",
    "--desc-lines": "3",
    "--kicker-px": "10.5px",
    "--kicker-track": "0.09em",
    "--ztitle-min": "13px",
    "--ztitle-vw": "0.85vw",
    "--ztitle-max": "14.5px",
    "--ztitle-track": "0.1em",
    "--ztitle-lines": "2",
    "--zsub-px": "12px",
    "--zsub-lines": "3",
    "--rail-px": "13px",
    "--rail-track": "0.09em",
    "--rail-hue-px": "10.5px",
    "--rail-hue-track": "0em",
    "--rail-hue-pad-y": "10px",
    "--panel-title-px": "19px",
    "--panel-summary-px": "15px",
    "--panel-kicker-px": "13px",
    "--panel-kicker-track": "0.08em",
    "--indent-step": "32px",
    "--dim-box": "0.18",
    "--dim-label": "0.34",
    "--panel-inset": "24px",
    "--s-1": "4px",
    "--s-2": "8px",
    "--s-3": "16px",
    "--s-4": "24px",
    "--s-5": "32px",
    "--s-6": "48px",
    "--s-7": "64px",
    "--panel-left": "24px",
    "--panel-right": "auto",
    "--panel-top": "auto",
    "--panel-bottom": "24px"
  },
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
          "key": "nothing-self-declared",
          "label": "is it really done?",
          "steps": [
            "Only when someone else says so, and only when nothing is left hanging. TASK says how a step will be checked, VERIFICATION says who may check it — never whoever did the work — EVIDENCE is the trail left behind, and COMPLIANCE is the grade computed from it. CARRY-FORWARD is the rest of the answer: what is still open is carried explicitly into the next session, so nothing pending is lost. Without that, «done» can mean «quietly abandoned»."
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
          "key": "deterministic",
          "label": "what does a rule decide?",
          "steps": [
            "Whatever must give the same answer every time is left to rules in code, not to a model: HOOKS keep the course, CONTEXT is scanned the same way each time, EPISODIC is written by the machine, APPROVALS grades each act by risk and keeps a record nobody can edit, COMPLIANCE is computed by six mechanical checks, and ANOMALIES are flagged mechanically."
          ]
        },
        {
          "key": "semantic",
          "label": "what does a model follow?",
          "steps": [
            "Written instructions, the same ones for everyone: ROUTING sends each request to its owner, STRUCTURE defines what an agent is, PROTOCOL is the form agents hand each other, SKILLS are the written procedures, a BRIEF is what a plan is built from, a PLAN is what the steps come from, and VERIFICATION is a checker working from the evidence."
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
          "key": "security",
          "label": "who can touch what?",
          "steps": [
            "Each agent, only its own area, and only with the consent its act deserves: STRUCTURE says what an agent may touch, APPROVALS asks for more explicit consent the riskier the act is, ANOMALIES flags whoever steps outside their scope, and TOOLS says who may change the toolchain: anyone on the team, not a small group."
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
              "kicker": "THE THESIS",
              "title": "An AI-oriented way of working.",
              "description": [
                "how does an organization break the isolation of agentic work?"
              ],
              "detail": "Agentic work is lonely by default: one person, one agent, one session. Nothing is shared between them, so what one turn learns is lost for the next, no two people work alike, and a model only knows what it can read. Sharing five things turns lonely work into team work: how the work is shaped, how the output is shaped, what is remembered, what can be seen while it happens, and what can be checked afterwards.",
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
                  "filters": [
                    "semantic"
                  ],
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
                    "semantic",
                    "security"
                  ]
                },
                {
                  "id": "w-protocol",
                  "order": 3,
                  "kicker": "PROTOCOL",
                  "filters": [
                    "semantic"
                  ],
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
                    "the-human",
                    "deterministic"
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
                  "filters": [
                    "semantic"
                  ],
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
                  "filters": [
                    "security"
                  ],
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
                    "memory",
                    "deterministic"
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
                    "memory",
                    "deterministic"
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
                  "filters": [
                    "semantic"
                  ],
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
                  "filters": [
                    "semantic"
                  ],
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
                    "nothing-self-declared",
                    "semantic"
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
                    "security",
                    "deterministic"
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
                    "nothing-self-declared",
                    "deterministic"
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
                    "security",
                    "deterministic"
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
            "Your rules, your preferences, what is pending per project and what Gaia knows about each project: the orchestrator reads it and writes it, and it outlives the session."
          ]
        },
        {
          "key": "deterministic",
          "label": "what does a rule decide?",
          "steps": [
            "The hooks decide by a rule in code, the same answer every time, with no model involved: whether a command waits for your approval, and whether a specialist's contract is accepted."
          ]
        },
        {
          "key": "semantic",
          "label": "what does a model follow?",
          "steps": [
            "The skills and the agents are written instructions a model follows: the orchestrator decides the what, the specialists do the how."
          ]
        },
        {
          "key": "one-turn",
          "label": "what happens in one turn?",
          "steps": [
            "The orchestrator hands one piece of work to one specialist, and the specialist comes back with it: one turn."
          ]
        },
        {
          "key": "the-contract",
          "label": "what travels in a contract?",
          "steps": [
            "Every specialist ends its work with a contract: what was done, and with what evidence."
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
              "kicker": "→ PAGE 3",
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
                      "kicker": "→ PAGE 3",
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
                      "order": 3,
                      "kicker": "→ PAGE 5",
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
                      "order": 4,
                      "kicker": "→ PAGE 5",
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
                      "order": 2,
                      "kicker": "→ PAGE 4",
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
                      "order": 1,
                      "kicker": "→ PAGE 3",
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
                      "detail": "Specialists do the work, each in its field: application code, infrastructure, the cluster, live systems, Gaia itself. Each one is born clean for one piece of work, owns that one task, and ends with a contract: what was done, and with what evidence. 9 agents today: the orchestrator, and 8 specialists: developer · platform-architect · gitops-operator · cloud-troubleshooter · gaia-planner · gaia-verifier · gaia-operator · gaia-system. You can add your own.",
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
                      "kicker": "→ PAGE 4",
                      "title": "Project context",
                      "description": [
                        "what it may read and write"
                      ],
                      "detail": "What Gaia knows about your workspace, split into sections. The specialist is told which sections it may read and which it may write, and pulls the ones it needs.",
                      "filters": [
                        "memory"
                      ]
                    },
                    {
                      "id": "sc-memory",
                      "order": 4,
                      "kicker": "→ PAGE 5",
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
                      "kicker": "→ PAGE 4",
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
      "id": "p4-life-of-a-request",
      "layout": "grid",
      "form": "dashboard",
      "columns": 1,
      "filters": [
        {
          "key": "the-human",
          "label": "who decides?",
          "steps": [
            "You do: your prompt starts the request, and a command that changes something waits before it executes, until you have seen the exact command and said yes."
          ]
        },
        {
          "key": "nothing-self-declared",
          "label": "is it really done?",
          "steps": [
            "The turn can stop at two events: before any execution, and at contract validation, when the contract comes back and is judged."
          ]
        },
        {
          "key": "memory",
          "label": "what do we remember?",
          "steps": [
            "The session opens with the projects map, the memory about you and the open threads; the orchestration tools read and write what Gaia keeps; the specialist is handed memory with its context, the close writes the episode of its turn, and your yes or no is kept in the approval chain."
          ]
        },
        {
          "key": "deterministic",
          "label": "what does a rule decide?",
          "steps": [
            "Every event is a hook: code the host runs at a fixed moment, deciding by a rule, with no model involved. So is the session's opening context, and so is the rule that sorts every command into runs, waits for your yes, or never runs."
          ]
        },
        {
          "key": "one-command",
          "label": "what happens to one command?",
          "steps": [
            "Before any execution, one command meets one rule, and one of three things happens: it runs, it waits for your yes, or it never runs."
          ]
        },
        {
          "key": "one-turn",
          "label": "what happens in one turn?",
          "steps": [
            "One specialist's life, from dispatch to close: four events, the same every time."
          ]
        }
      ],
      "sections": [
        {
          "id": "p4-head",
          "treatment": [
            "plain"
          ],
          "order": 1,
          "span": 1,
          "columns": 1,
          "children": [
            {
              "id": "p4-title",
              "order": 1,
              "kicker": "THE ORCHESTRATOR",
              "title": "The life of a request",
              "description": [
                "one turn, four events, the same every time"
              ],
              "detail": "One turn has four events, the same every time. The left column is Gaia's own layer: what it pushes when the session opens and what it answers on demand. From the user prompt on, someone is in the loop.",
              "treatment": [
                "centered"
              ]
            }
          ]
        },
        {
          "id": "turn",
          "treatment": [
            "plain"
          ],
          "order": 2,
          "span": 1,
          "columns": 10,
          "children": [
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
                      "title": "System context",
                      "filters": [
                        "deterministic"
                      ]
                    },
                    {
                      "id": "sp-contracts",
                      "type": "rail",
                      "order": 2,
                      "span": 2,
                      "title": "Projects map",
                      "filters": [
                        "memory",
                        "deterministic"
                      ]
                    },
                    {
                      "id": "sp-anchors",
                      "type": "rail",
                      "order": 3,
                      "span": 2,
                      "title": "Memory about you",
                      "filters": [
                        "memory",
                        "deterministic"
                      ]
                    },
                    {
                      "id": "sp-worklist",
                      "type": "rail",
                      "order": 4,
                      "span": 2,
                      "title": "Open threads",
                      "filters": [
                        "memory",
                        "deterministic"
                      ]
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
                      "title": "Memory management",
                      "filters": [
                        "memory"
                      ]
                    },
                    {
                      "id": "pl-context",
                      "type": "rail",
                      "order": 2,
                      "span": 1,
                      "title": "Project context",
                      "filters": [
                        "memory"
                      ]
                    },
                    {
                      "id": "pl-plan",
                      "type": "rail",
                      "order": 3,
                      "span": 1,
                      "title": "Briefs and plans",
                      "filters": [
                        "memory"
                      ]
                    },
                    {
                      "id": "pl-contract",
                      "type": "rail",
                      "order": 4,
                      "span": 1,
                      "title": "Contracts",
                      "filters": [
                        "memory"
                      ]
                    },
                    {
                      "id": "pl-approvals",
                      "type": "rail",
                      "order": 5,
                      "span": 1,
                      "title": "Approvals",
                      "filters": [
                        "memory",
                        "the-human"
                      ]
                    },
                    {
                      "id": "pl-schedule",
                      "type": "rail",
                      "order": 6,
                      "span": 1,
                      "title": "Schedules",
                      "filters": [
                        "memory"
                      ]
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
                      "title": "USER PROMPT",
                      "filters": [
                        "the-human"
                      ]
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
                      "id": "lf-receives",
                      "order": 1,
                      "kicker": "SubagentStart",
                      "title": "Injected context",
                      "description": [
                        "contract · context · memory"
                      ],
                      "detail": "<b>SubagentStart</b> — the first instant the specialist exists. It is handed three blocks: its contract, opened for it, naming the project context it may read and write, its surface and role; the CLI it may use; and the memory about you. The context was built and cached when the orchestrator dispatched it. Its ANCHORS — the identifiers it was handed — are written down here, so the close can measure which fraction of that context it actually touched. What it does NOT receive from Gaia is its skills: the host injects those from the agent's own definition.<br><br>Source: <code>hooks/modules/agents/dispatch_lifecycle.py</code> (<code>build_kernel_context</code>); <code>hooks/modules/context/kernel_builder.py:407-427</code>.",
                      "filters": [
                        "deterministic",
                        "one-turn",
                        "memory"
                      ]
                    },
                    {
                      "id": "lf-born",
                      "order": 2,
                      "kicker": "PreToolUse",
                      "title": "Before any execution",
                      "description": [
                        "checked and sorted by rule · can stop here"
                      ],
                      "detail": "<b>PreToolUse</b> — the hook the host runs before every tool call the specialist makes, and one of the two places a turn can stop. On every command it applies the approvals rule below. A block here is <code>exit 2</code> — the command never runs. The same hook also ran at the dispatch, on the orchestrator's call: it decided whether the orchestrator may use the tool at all or must delegate, built the specialist's context, and opened the turn's contract carrying the <code>plan_task_id</code> that will later forbid the specialist from declaring its own work done.",
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
                      "id": "lf-works",
                      "order": 3,
                      "kicker": "PostToolUse",
                      "title": "Execution validation",
                      "description": [
                        "each result recorded"
                      ],
                      "detail": "<b>PostToolUse</b> — every tool call the specialist makes is checked before it runs and recorded after, so this event repeats with the one before it, once per tool call. It never stops the turn. It logs the execution, seals EXECUTED or FAILED onto the hashed approval chain and, when you answer an approval question, activates that approval so the byte-identical retry finds it. A failed Bash call comes back through <b>PostToolUseFailure</b> instead.<br><br>Source: <code>hooks/adapters/claude_code.py</code> (<code>adapt_post_tool_use</code>).",
                      "filters": [
                        "deterministic",
                        "one-turn"
                      ]
                    },
                    {
                      "id": "lf-contract",
                      "order": 4,
                      "kicker": "SubagentStop",
                      "title": "Contract validation",
                      "description": [
                        "judged by rule, never the reply"
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
                      "span": 1,
                      "text": "once only"
                    },
                    {
                      "id": "lf-loop",
                      "order": 6,
                      "type": "separator",
                      "span": 2,
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
                  "title": "Approvals · inside “before any execution”",
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
                      "kicker": "BEFORE ANY EXECUTION",
                      "title": "Sorts every command",
                      "description": [
                        "a rule in code, no model involved"
                      ],
                      "detail": "Before any command runs, a fixed classifier gives every command a tier: <b>T0</b> read, <b>T1</b> validate, <b>T2</b> dry run, <b>T3</b> change. It matches patterns and verbs in code; no model is consulted, so the same command gets the same answer every time. Before that, a separate fixed pattern check holds the never list.<br><br>Sources: <code>hooks/modules/security/tiers.py:29-35</code> (<code>SecurityTier</code>), <code>:78</code> (<code>_classify_command_tier_cached</code>); <code>hooks/modules/security/blocked_commands.py:678</code> (<code>is_blocked_command</code>).",
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
                        "memory",
                        "deterministic"
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
          "order": 3,
          "span": 1,
          "columns": 1,
          "children": [
            {
              "id": "ch-legend",
              "type": "separator",
              "style": "dotted",
              "order": 1,
              "span": 1,
              "text": "red marks the only two events the turn can stop — before any execution and contract validation"
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
      "name": "3 · The life of a request",
      "order": 2
    },
    {
      "id": "p6-contracts",
      "layout": "grid",
      "form": "dashboard",
      "columns": 1,
      "filters": [
        {
          "key": "the-human",
          "label": "who decides?",
          "steps": [
            "An answer can be an approval request: the orchestrator brings the exact command to you."
          ]
        },
        {
          "key": "nothing-self-declared",
          "label": "is it really done?",
          "steps": [
            "Nothing is taken on the agent's word: the contract is validated by rule, its verification says how the result was checked, and the orchestrator checks it before telling you."
          ]
        },
        {
          "key": "memory",
          "label": "what do we remember?",
          "steps": [
            "The project contract: what Gaia knows about each project, kept section by section across every session and every agent."
          ]
        },
        {
          "key": "deterministic",
          "label": "what does a rule decide?",
          "steps": [
            "The engine decides by rule: what each agent may read and write, whether the answer is valid, and whether an update may be saved."
          ]
        },
        {
          "key": "semantic",
          "label": "what does a model follow?",
          "steps": [
            "The orchestrator and the agent are models working from their instructions; the engine between them is not."
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
          "key": "next-move",
          "label": "what happens next?",
          "steps": [
            "The state the agent answers with decides the orchestrator's next move."
          ]
        },
        {
          "key": "the-contract",
          "label": "what travels in a contract?",
          "steps": [
            "The engine injects the agent contract, the agent fills it and answers in it, the engine validates it, and the orchestrator reads it: its status, its evidence, its verification, its open gaps, its reach, an approval request and its project updates."
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
              "id": "p6-title",
              "order": 1,
              "kicker": "CONTRACTS",
              "title": "Everything travels as a contract",
              "description": [
                "the orchestrator and the agents talk only through contracts"
              ],
              "detail": "The orchestrator sends the work; Gaia's engine injects an agent contract with this agent's own permissions; the agent does the work and answers in it; the engine validates it by rule, never the prose; the orchestrator keeps going from it.",
              "treatment": [
                "centered"
              ]
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
                  "kicker": "SENDS",
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
                  "kicker": "READS",
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
                  "kicker": "INJECTS ►",
                  "title": "A contract for this agent",
                  "description": [
                    "its surface, role, what it may read and write"
                  ],
                  "detail": "At dispatch the engine opens the agent contract and injects it as <code># Your Contract</code>. What is adapted to the agent is its own data, not the form: its <b>surface</b>, its <b>role</b> (<code>primary</code> or <code>verifier</code>), and the project-contract sections it may read (<code>can_read</code>) and write (<code>can_write</code>), taken from its own permission rows. The form it must answer in is the same for every agent.<br><br>How the two kinds meet, in the order of one turn:<br><b>At dispatch</b> — the agent contract names the sections this agent may read and write, declared in its definition (<code>project_context_contracts</code>). It hands over the names, not the contents: the agent reads a section on demand with <code>gaia context get-contract --section</code>.<br><b>In its answer</b> — the agent contract can carry <code>update_contracts</code>, each a change to one section. An agent proposes them; it cannot write the project contract directly.<br><b>At the close</b> — SubagentStop checks each update against the agent's write permission, one by one, before it is saved; a rejected one is named, and the rest still apply.<br><br>What each project-contract section holds:<br><b>project_identity</b> — the project's name, path, remote and type.<br><b>stack</b> — its languages and tools.<br><b>environment</b> — where it runs.<br><b>git</b> — its repository conventions.<br><b>architecture_overview</b> — how its parts fit.<br><b>application_services</b> — its services (developer writes it).<br><b>infrastructure</b>, <b>infrastructure_topology</b> — its cloud (platform-architect writes them).<br><b>gitops_configuration</b> — its desired cluster state (gitops-operator).<br><b>cluster_details</b> — the live cluster (cloud-troubleshooter).<br><b>workspace_repos</b> — the repositories of the workspace.<br><b>operational_guidelines</b>, <b>releases</b> — read for planning.<br><br>Sources: <code>tools/context/context_provider.py:191</code> (<code>build_kernel_sections</code>), <code>:244-249</code>; <code>hooks/modules/context/kernel_builder.py:193</code> (<code>build_dispatch_kernel</code>), <code>:214-215</code>, <code>:243-244</code>; <code>agents/*.md</code> (<code>project_context_contracts</code>); <code>bin/cli/context.py:366</code>; <code>hooks/subagent_stop.py:176</code>, <code>hooks/modules/context/context_writer.py:376</code> (<code>process_update_contracts</code>), <code>:127</code> (<code>validate_permission</code>).",
                  "filters": [
                    "the-contract",
                    "deterministic",
                    "project-contract"
                  ]
                },
                {
                  "id": "p6-validates",
                  "order": 2,
                  "kicker": "◄ VALIDATES",
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
                  "kicker": "RECEIVES",
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
                  "kicker": "◄ ANSWERS",
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
          "title": "The contracts",
          "subtitle": "one for each turn · one for each project",
          "treatment": [
            "envelope"
          ],
          "order": 3,
          "span": 1,
          "columns": 2,
          "children": [
            {
              "id": "p6-agent-contract",
              "title": "Agent contract",
              "treatment": [
                "envelope"
              ],
              "order": 1,
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "ac-status",
                  "type": "rail",
                  "order": 2,
                  "indent": 1,
                  "title": "status",
                  "filters": [
                    "the-contract",
                    "next-move"
                  ]
                },
                {
                  "id": "ac-states",
                  "treatment": [
                    "plain"
                  ],
                  "order": 3,
                  "span": 1,
                  "columns": 1,
                  "children": [
                    {
                      "id": "ac-complete",
                      "type": "rail",
                      "order": 1,
                      "indent": 2,
                      "title": "COMPLETE",
                      "filters": [
                        "the-contract",
                        "next-move"
                      ]
                    },
                    {
                      "id": "ac-needs-verification",
                      "type": "rail",
                      "order": 2,
                      "indent": 2,
                      "title": "NEEDS_VERIFICATION",
                      "filters": [
                        "the-contract",
                        "next-move"
                      ]
                    },
                    {
                      "id": "ac-approval-request",
                      "type": "rail",
                      "order": 3,
                      "indent": 2,
                      "title": "APPROVAL_REQUEST",
                      "filters": [
                        "the-contract",
                        "next-move"
                      ]
                    },
                    {
                      "id": "ac-needs-input",
                      "type": "rail",
                      "order": 4,
                      "indent": 2,
                      "title": "NEEDS_INPUT",
                      "filters": [
                        "the-contract",
                        "next-move"
                      ]
                    },
                    {
                      "id": "ac-blocked",
                      "type": "rail",
                      "order": 5,
                      "indent": 2,
                      "title": "BLOCKED",
                      "filters": [
                        "the-contract",
                        "next-move"
                      ]
                    },
                    {
                      "id": "ac-in-progress",
                      "type": "rail",
                      "order": 6,
                      "indent": 2,
                      "title": "IN_PROGRESS",
                      "filters": [
                        "the-contract",
                        "next-move"
                      ]
                    }
                  ]
                },
                {
                  "id": "ac-evidence",
                  "type": "rail",
                  "order": 4,
                  "indent": 1,
                  "title": "evidence",
                  "filters": [
                    "the-contract"
                  ]
                },
                {
                  "id": "ac-parts",
                  "treatment": [
                    "plain"
                  ],
                  "order": 5,
                  "span": 1,
                  "columns": 1,
                  "children": [
                    {
                      "id": "ac-files",
                      "type": "rail",
                      "order": 1,
                      "indent": 2,
                      "title": "files_checked",
                      "filters": [
                        "the-contract"
                      ]
                    },
                    {
                      "id": "ac-patterns",
                      "type": "rail",
                      "order": 2,
                      "indent": 2,
                      "title": "patterns_checked",
                      "filters": [
                        "the-contract"
                      ]
                    },
                    {
                      "id": "ac-commands",
                      "type": "rail",
                      "order": 3,
                      "indent": 2,
                      "title": "commands_run",
                      "filters": [
                        "the-contract"
                      ]
                    },
                    {
                      "id": "ac-key-outputs",
                      "type": "rail",
                      "order": 4,
                      "indent": 2,
                      "title": "key_outputs",
                      "filters": [
                        "the-contract"
                      ]
                    },
                    {
                      "id": "ac-verbatim",
                      "type": "rail",
                      "order": 5,
                      "indent": 2,
                      "title": "verbatim_outputs",
                      "filters": [
                        "the-contract"
                      ]
                    }
                  ]
                },
                {
                  "id": "ac-verification",
                  "type": "rail",
                  "order": 6,
                  "indent": 1,
                  "title": "verification",
                  "filters": [
                    "the-contract",
                    "nothing-self-declared"
                  ]
                },
                {
                  "id": "ac-gaps",
                  "type": "rail",
                  "order": 7,
                  "indent": 1,
                  "title": "open gaps",
                  "filters": [
                    "the-contract"
                  ]
                },
                {
                  "id": "ac-reach",
                  "type": "rail",
                  "order": 8,
                  "indent": 1,
                  "title": "reach",
                  "filters": [
                    "the-contract"
                  ]
                },
                {
                  "id": "ac-approval",
                  "type": "rail",
                  "order": 9,
                  "indent": 1,
                  "title": "approval",
                  "filters": [
                    "the-contract",
                    "the-human"
                  ]
                },
                {
                  "id": "ac-updates",
                  "type": "rail",
                  "order": 10,
                  "indent": 1,
                  "title": "project updates",
                  "filters": [
                    "the-contract",
                    "project-contract"
                  ]
                }
              ]
            },
            {
              "id": "p6-project",
              "title": "Project contract",
              "treatment": [
                "envelope"
              ],
              "order": 2,
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "pc-identity",
                  "type": "rail",
                  "order": 2,
                  "indent": 1,
                  "title": "project_identity",
                  "filters": [
                    "memory",
                    "project-contract"
                  ]
                },
                {
                  "id": "pc-stack",
                  "type": "rail",
                  "order": 3,
                  "indent": 1,
                  "title": "stack",
                  "filters": [
                    "memory",
                    "project-contract"
                  ]
                },
                {
                  "id": "pc-env",
                  "type": "rail",
                  "order": 4,
                  "indent": 1,
                  "title": "environment",
                  "filters": [
                    "memory",
                    "project-contract"
                  ]
                },
                {
                  "id": "pc-git",
                  "type": "rail",
                  "order": 5,
                  "indent": 1,
                  "title": "git",
                  "filters": [
                    "memory",
                    "project-contract"
                  ]
                },
                {
                  "id": "pc-arch",
                  "type": "rail",
                  "order": 6,
                  "indent": 1,
                  "title": "architecture_overview",
                  "filters": [
                    "memory",
                    "project-contract"
                  ]
                },
                {
                  "id": "pc-workspace",
                  "type": "rail",
                  "order": 7,
                  "indent": 1,
                  "title": "workspace_repos",
                  "filters": [
                    "memory",
                    "project-contract"
                  ]
                },
                {
                  "id": "pc-services",
                  "type": "rail",
                  "order": 8,
                  "indent": 1,
                  "title": "application_services",
                  "filters": [
                    "memory",
                    "project-contract"
                  ]
                },
                {
                  "id": "pc-infra",
                  "type": "rail",
                  "order": 9,
                  "indent": 1,
                  "title": "infrastructure",
                  "filters": [
                    "memory",
                    "project-contract"
                  ]
                },
                {
                  "id": "pc-topology",
                  "type": "rail",
                  "order": 10,
                  "indent": 1,
                  "title": "infrastructure_topology",
                  "filters": [
                    "memory",
                    "project-contract"
                  ]
                },
                {
                  "id": "pc-gitops",
                  "type": "rail",
                  "order": 11,
                  "indent": 1,
                  "title": "gitops_configuration",
                  "filters": [
                    "memory",
                    "project-contract"
                  ]
                },
                {
                  "id": "pc-cluster",
                  "type": "rail",
                  "order": 12,
                  "indent": 1,
                  "title": "cluster_details",
                  "filters": [
                    "memory",
                    "project-contract"
                  ]
                },
                {
                  "id": "pc-guidelines",
                  "type": "rail",
                  "order": 13,
                  "indent": 1,
                  "title": "operational_guidelines",
                  "filters": [
                    "memory",
                    "project-contract"
                  ]
                },
                {
                  "id": "pc-releases",
                  "type": "rail",
                  "order": 14,
                  "indent": 1,
                  "title": "releases",
                  "filters": [
                    "memory",
                    "project-contract"
                  ]
                }
              ]
            }
          ]
        }
      ],
      "name": "4 · Contracts",
      "order": 3
    },
    {
      "id": "p5-what-gaia-keeps",
      "layout": "grid",
      "form": "dashboard",
      "columns": 2,
      "filters": [
        {
          "key": "the-human",
          "label": "who decides?",
          "steps": [
            "You do, and it is kept: the gates a plan must pass, the decisions and rules you set, and every approval a T3 command waited for."
          ]
        },
        {
          "key": "nothing-self-declared",
          "label": "is it really done?",
          "steps": [
            "Not because a turn says so: a task stays pending until a gate's verdict is pass, and the lineage says where each fact came from."
          ]
        },
        {
          "key": "deterministic",
          "label": "what does a rule decide?",
          "steps": [
            "What the engine records by itself or decides by rule: every session, turn, hook event, anomaly, episode and cut turn; the scan of your workspace and what each agent may read and write; a command's tier, a contract's verdict and the audit trail; a task's pending or blocked status."
          ]
        },
        {
          "key": "semantic",
          "label": "what does a model follow?",
          "steps": [
            "What a model writes on purpose, following its instructions: the brief, its acceptance criteria, the plan, its tasks and changes; the contract, its evidence, open gaps and final state; and the decisions, anchors, rules and preferences the orchestrator curates."
          ]
        },
        {
          "key": "what-comes-back",
          "label": "what comes back next session?",
          "steps": [
            "What the next session starts from: what was carried forward, the anchors of each project, and the events of the last 24 hours."
          ]
        },
        {
          "key": "one-task",
          "label": "where does one task leave a trace?",
          "steps": [
            "In all four memories: the task itself in operational memory, the contract that answered it in execution memory, the episode of its turn in episodic memory, and the sections of the project it read and wrote in project memory."
          ]
        }
      ],
      "sections": [
        {
          "id": "sun-project",
          "treatment": [
            "envelope"
          ],
          "order": 1,
          "span": 1,
          "columns": 4,
          "children": [
            {
              "id": "pr-scan",
              "type": "rail",
              "order": 1,
              "variant": "blue",
              "treatment": [
                "centered"
              ],
              "title": "scan →",
              "filters": [
                "deterministic"
              ]
            },
            {
              "id": "pr-workspace",
              "type": "rail",
              "order": 2,
              "variant": "blue",
              "treatment": [
                "centered"
              ],
              "title": "workspace →",
              "filters": [
                "deterministic"
              ]
            },
            {
              "id": "pr-repos",
              "type": "rail",
              "order": 3,
              "variant": "blue",
              "treatment": [
                "centered"
              ],
              "title": "repos →",
              "filters": [
                "deterministic"
              ]
            },
            {
              "id": "pr-sections",
              "type": "rail",
              "order": 4,
              "variant": "blue",
              "treatment": [
                "centered"
              ],
              "title": "sections ↓",
              "filters": [
                "one-task"
              ]
            },
            {
              "id": "pr-preferences",
              "type": "rail",
              "order": 5,
              "variant": "blue",
              "treatment": [
                "centered"
              ],
              "title": "↑ preferences",
              "filters": [
                "semantic"
              ]
            },
            {
              "id": "pr-core",
              "order": 6,
              "span": 2,
              "variant": "blue",
              "treatment": [
                "centered"
              ],
              "title": "PROJECT MEMORY",
              "filters": [
                "one-task"
              ],
              "detail": "<b>What do we know about the project, and about you?</b><br><br>What Gaia knows about the project, and about you. gaia scan maps the workspace and its repos; what it finds is kept in named sections of the project contract: project identity, stack, git, architecture, services, environment, infrastructure. Each agent may read some sections and write others, and its context at dispatch names them. About you: your rules and preferences, handed to every specialist at birth, and the decisions and anchors the orchestrator curated. Also kept here: feedback on how work went, and what did not work, as curated rows of type negative. Commands: gaia scan, gaia context, gaia memory."
            },
            {
              "id": "pr-can-read",
              "type": "rail",
              "order": 7,
              "variant": "blue",
              "treatment": [
                "centered"
              ],
              "title": "can read ↓",
              "filters": [
                "deterministic"
              ]
            },
            {
              "id": "pr-your-rules",
              "type": "rail",
              "order": 8,
              "variant": "blue",
              "treatment": [
                "centered"
              ],
              "title": "↑ your rules",
              "filters": [
                "the-human",
                "semantic"
              ]
            },
            {
              "id": "pr-anchors",
              "type": "rail",
              "order": 9,
              "variant": "blue",
              "treatment": [
                "centered"
              ],
              "title": "← anchors",
              "filters": [
                "what-comes-back",
                "semantic"
              ]
            },
            {
              "id": "pr-decisions",
              "type": "rail",
              "order": 10,
              "variant": "blue",
              "treatment": [
                "centered"
              ],
              "title": "← decisions",
              "filters": [
                "the-human",
                "semantic"
              ]
            },
            {
              "id": "pr-can-write",
              "type": "rail",
              "order": 11,
              "variant": "blue",
              "treatment": [
                "centered"
              ],
              "title": "← can write",
              "filters": [
                "deterministic"
              ]
            }
          ]
        },
        {
          "id": "sun-operational",
          "treatment": [
            "envelope"
          ],
          "order": 2,
          "span": 1,
          "columns": 4,
          "children": [
            {
              "id": "op-brief",
              "type": "rail",
              "order": 1,
              "variant": "gold",
              "treatment": [
                "centered"
              ],
              "title": "brief →",
              "filters": [
                "semantic"
              ]
            },
            {
              "id": "op-ac",
              "type": "rail",
              "order": 2,
              "variant": "gold",
              "treatment": [
                "centered"
              ],
              "title": "acceptance criteria →",
              "filters": [
                "semantic"
              ]
            },
            {
              "id": "op-plan",
              "type": "rail",
              "order": 3,
              "variant": "gold",
              "treatment": [
                "centered"
              ],
              "title": "plan →",
              "filters": [
                "semantic"
              ]
            },
            {
              "id": "op-tasks",
              "type": "rail",
              "order": 4,
              "variant": "gold",
              "treatment": [
                "centered"
              ],
              "title": "tasks ↓",
              "filters": [
                "one-task",
                "semantic"
              ]
            },
            {
              "id": "op-carry-forward",
              "type": "rail",
              "order": 5,
              "variant": "gold",
              "treatment": [
                "centered"
              ],
              "title": "↑ carry forward",
              "filters": [
                "what-comes-back",
                "semantic"
              ]
            },
            {
              "id": "op-core",
              "order": 6,
              "span": 2,
              "variant": "gold",
              "treatment": [
                "centered"
              ],
              "title": "OPERATIONAL MEMORY",
              "filters": [
                "one-task"
              ],
              "detail": "<b>What are we doing, and what is still open?</b><br><br>What is in flight and what is still open. A brief carries acceptance criteria and milestones; it gets one plan of tasks. Each task can depend on others, says which criteria it covers, and carries gates that someone who did not do the work checks. A plan can be paused, resumed, or changed through a managed plan change that keeps every earlier version. Also kept here: the statuses draft, open and in progress; open threads; schedules for recurring work and the notifications they leave; and each turn's next action. Commands: gaia brief, gaia ac, gaia milestone, gaia plan, gaia task, gaia schedule, gaia notifications."
            },
            {
              "id": "op-gates",
              "type": "rail",
              "order": 7,
              "variant": "gold",
              "treatment": [
                "centered"
              ],
              "title": "gates ↓",
              "filters": [
                "the-human"
              ]
            },
            {
              "id": "op-plan-change",
              "type": "rail",
              "order": 8,
              "variant": "gold",
              "treatment": [
                "centered"
              ],
              "title": "↑ plan change",
              "filters": [
                "semantic"
              ]
            },
            {
              "id": "op-pause",
              "type": "rail",
              "order": 9,
              "variant": "gold",
              "treatment": [
                "centered"
              ],
              "title": "← pause",
              "filters": [
                "semantic"
              ]
            },
            {
              "id": "op-blocked",
              "type": "rail",
              "order": 10,
              "variant": "gold",
              "treatment": [
                "centered"
              ],
              "title": "← blocked",
              "filters": [
                "deterministic"
              ]
            },
            {
              "id": "op-pending",
              "type": "rail",
              "order": 11,
              "variant": "gold",
              "treatment": [
                "centered"
              ],
              "title": "← pending",
              "filters": [
                "nothing-self-declared",
                "deterministic"
              ]
            }
          ]
        },
        {
          "id": "sun-execution",
          "treatment": [
            "envelope"
          ],
          "order": 3,
          "span": 1,
          "columns": 4,
          "children": [
            {
              "id": "ex-contracts",
              "type": "rail",
              "order": 1,
              "variant": "clay",
              "treatment": [
                "centered"
              ],
              "title": "contracts →",
              "filters": [
                "one-task",
                "semantic"
              ]
            },
            {
              "id": "ex-t3",
              "type": "rail",
              "order": 2,
              "variant": "clay",
              "treatment": [
                "centered"
              ],
              "title": "T3 →",
              "filters": [
                "the-human",
                "deterministic"
              ]
            },
            {
              "id": "ex-approvals",
              "type": "rail",
              "order": 3,
              "variant": "clay",
              "treatment": [
                "centered"
              ],
              "title": "approvals →",
              "filters": [
                "the-human"
              ]
            },
            {
              "id": "ex-evidence",
              "type": "rail",
              "order": 4,
              "variant": "clay",
              "treatment": [
                "centered"
              ],
              "title": "evidence ↓",
              "filters": [
                "semantic"
              ]
            },
            {
              "id": "ex-audit-trail",
              "type": "rail",
              "order": 5,
              "variant": "clay",
              "treatment": [
                "centered"
              ],
              "title": "↑ audit trail",
              "filters": [
                "deterministic"
              ]
            },
            {
              "id": "ex-core",
              "order": 6,
              "span": 2,
              "variant": "clay",
              "treatment": [
                "centered"
              ],
              "title": "EXECUTION MEMORY",
              "filters": [
                "one-task"
              ],
              "detail": "<b>What did we execute, and what did it produce?</b><br><br>What was executed, and what it produced. Every turn answers in its agent contract: its state (COMPLETE, BLOCKED, APPROVAL_REQUEST, NEEDS_VERIFICATION, NEEDS_INPUT, IN_PROGRESS), its evidence (commands run, key outputs, open gaps) and its verification, pass or fail. A gate's verdict is kept with its task. Every approval is kept in a hashed approval chain; every command's tier is decided by a rule: T0 read, T1 validate, T2 dry run, T3 change, or never. A compliance score and an audit trail are computed from all of it. Also kept here: metrics, and the worktree of each turn that wrote. Commands: gaia contract, gaia approvals, gaia evidence, gaia metrics."
            },
            {
              "id": "ex-open-gaps",
              "type": "rail",
              "order": 7,
              "variant": "clay",
              "treatment": [
                "centered"
              ],
              "title": "open gaps ↓",
              "filters": [
                "semantic"
              ]
            },
            {
              "id": "ex-blocked",
              "type": "rail",
              "order": 8,
              "variant": "clay",
              "treatment": [
                "centered"
              ],
              "title": "↑ BLOCKED",
              "filters": [
                "semantic"
              ]
            },
            {
              "id": "ex-complete",
              "type": "rail",
              "order": 9,
              "variant": "clay",
              "treatment": [
                "centered"
              ],
              "title": "← COMPLETE",
              "filters": [
                "semantic"
              ]
            },
            {
              "id": "ex-pass",
              "type": "rail",
              "order": 10,
              "variant": "clay",
              "treatment": [
                "centered"
              ],
              "title": "← pass",
              "filters": [
                "nothing-self-declared"
              ]
            },
            {
              "id": "ex-verdict",
              "type": "rail",
              "order": 11,
              "variant": "clay",
              "treatment": [
                "centered"
              ],
              "title": "← verdict",
              "filters": [
                "nothing-self-declared",
                "deterministic"
              ]
            }
          ]
        },
        {
          "id": "sun-episodic",
          "treatment": [
            "envelope"
          ],
          "order": 4,
          "span": 1,
          "columns": 4,
          "children": [
            {
              "id": "ep-sessions",
              "type": "rail",
              "order": 1,
              "variant": "violet",
              "treatment": [
                "centered"
              ],
              "title": "sessions →",
              "filters": [
                "deterministic"
              ]
            },
            {
              "id": "ep-turns",
              "type": "rail",
              "order": 2,
              "variant": "violet",
              "treatment": [
                "centered"
              ],
              "title": "turns →",
              "filters": [
                "deterministic"
              ]
            },
            {
              "id": "ep-hooks",
              "type": "rail",
              "order": 3,
              "variant": "violet",
              "treatment": [
                "centered"
              ],
              "title": "hooks →",
              "filters": [
                "deterministic"
              ]
            },
            {
              "id": "ep-events",
              "type": "rail",
              "order": 4,
              "variant": "violet",
              "treatment": [
                "centered"
              ],
              "title": "events ↓",
              "filters": [
                "deterministic"
              ]
            },
            {
              "id": "ep-last-24h",
              "type": "rail",
              "order": 5,
              "variant": "violet",
              "treatment": [
                "centered"
              ],
              "title": "↑ last 24h",
              "filters": [
                "what-comes-back",
                "deterministic"
              ]
            },
            {
              "id": "ep-core",
              "order": 6,
              "span": 2,
              "variant": "violet",
              "treatment": [
                "centered"
              ],
              "title": "EPISODIC MEMORY",
              "filters": [
                "one-task"
              ],
              "detail": "<b>What happened, and when?</b><br><br>What happened and when, recorded by the engine, never written by hand. Every hook that fires leaves an event: SessionStart, SubagentStart, PostToolUse, SubagentStop and the rest. Every turn leaves one episode; sessions group them, and a timeline puts them in order. The next session starts with the last 24 hours. A turn that never closed stays as a cut turn, with its reason; anomalies and defects are listed one by one for triage. Also kept here: the transcript, the history of recent sessions, the backstop that closes a cut turn, the compaction of a long session, and the links between curated rows (supersedes, graduated). Commands: gaia query, gaia history, gaia defects, gaia memory search."
            },
            {
              "id": "ep-anomalies",
              "type": "rail",
              "order": 7,
              "variant": "violet",
              "treatment": [
                "centered"
              ],
              "title": "anomalies ↓",
              "filters": [
                "deterministic"
              ]
            },
            {
              "id": "ep-lineage",
              "type": "rail",
              "order": 8,
              "variant": "violet",
              "treatment": [
                "centered"
              ],
              "title": "↑ lineage",
              "filters": [
                "nothing-self-declared",
                "deterministic"
              ]
            },
            {
              "id": "ep-timeline",
              "type": "rail",
              "order": 9,
              "variant": "violet",
              "treatment": [
                "centered"
              ],
              "title": "← timeline",
              "filters": [
                "deterministic"
              ]
            },
            {
              "id": "ep-cut-turns",
              "type": "rail",
              "order": 10,
              "variant": "violet",
              "treatment": [
                "centered"
              ],
              "title": "← cut turns",
              "filters": [
                "deterministic"
              ]
            },
            {
              "id": "ep-episodes",
              "type": "rail",
              "order": 11,
              "variant": "violet",
              "treatment": [
                "centered"
              ],
              "title": "← episodes",
              "filters": [
                "one-task",
                "deterministic"
              ]
            }
          ]
        },
        {
          "id": "keeps-close",
          "treatment": [
            "plain"
          ],
          "order": 5,
          "span": 2,
          "columns": 1,
          "children": [
            {
              "id": "keeps-close-line",
              "type": "separator",
              "order": 1,
              "text": "you decide what is curated · the engine records the rest"
            }
          ]
        }
      ],
      "name": "5 · What Gaia keeps",
      "order": 4
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
            "You sign what changes something: on one machine you said yes 583 times and no 52 times, and every change waited for that answer."
          ]
        },
        {
          "key": "nothing-self-declared",
          "label": "is it really done?",
          "steps": [
            "The numbers on this page are counted by Gaia's own records on one machine, not claimed by an agent."
          ]
        },
        {
          "key": "memory",
          "label": "what do we remember?",
          "steps": [
            "Everything Gaia learns lives in one local database, the same for every install and every project, and uninstalling never deletes it."
          ]
        },
        {
          "key": "deterministic",
          "label": "what does a rule decide?",
          "steps": [
            "A rule, not a model, sorts every command and maps your repos: 94% of commands only read, and the scan infers nothing."
          ]
        },
        {
          "key": "semantic",
          "label": "what does a model follow?",
          "steps": [
            "Gaia is a model following written instructions, which is why you ask it instead of learning it, and why you can write your own agents and skills."
          ]
        },
        {
          "key": "yours",
          "label": "what is really yours?",
          "steps": [
            "The database with everything it learned, the open-source code with your own agents and skills, the projects it reaches at the scope you pick, and your way of working. Removing Gaia removes the plugin or the package, never the database."
          ]
        }
      ],
      "sections": [
        {
          "id": "p9-start",
          "title": "Start here",
          "subtitle": "two routes · pick one per Claude Code workspace: both together register every hook twice",
          "treatment": [
            "envelope"
          ],
          "order": 1,
          "span": 1,
          "columns": 3,
          "children": [
            {
              "id": "p9-route-plugin",
              "title": "Claude Code installation",
              "subtitle": "installs Gaia in plugin mode",
              "treatment": [
                "envelope"
              ],
              "order": 1,
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "p9-plugin-add",
                  "order": 1,
                  "kicker": "RECOMMENDED",
                  "title": "/plugin marketplace add metraton/gaia",
                  "copy": true,
                  "filters": [
                    "the-human"
                  ],
                  "detail": "The recommended route, in Claude Code. <code>/plugin marketplace add metraton/gaia</code> adds the gaia-marketplace; the host clones the repository at the tag of the current release. Source: the Gaia README, <i>How it is used</i>."
                },
                {
                  "id": "p9-plugin-install",
                  "order": 2,
                  "kicker": "ONE PLUGIN, NO NPM STEP",
                  "title": "/plugin install gaia@gaia-marketplace",
                  "copy": true,
                  "filters": [
                    "the-human",
                    "yours"
                  ],
                  "detail": "<code>/plugin install gaia@gaia-marketplace</code>, or from a terminal <code>claude plugin install gaia@gaia-marketplace</code>. The README: <i>For Claude Code that is the whole install; no npm step is needed.</i> Claude Code asks for a scope: for you in every project, for everyone in this repository, or for you in this repository only."
                },
                {
                  "id": "p9-plugin-reload",
                  "order": 3,
                  "treatment": [
                    "half"
                  ],
                  "kicker": "FIRST SESSION",
                  "title": "/reload-plugins",
                  "copy": true,
                  "filters": [
                    "the-human"
                  ],
                  "detail": "On the first session Gaia merges its permission set into <code>.claude/settings.local.json</code> and asks you to run <code>/reload-plugins</code>, or restart, to activate it. Source: the Gaia README."
                },
                {
                  "id": "p9-plugin-remove",
                  "order": 4,
                  "treatment": [
                    "half"
                  ],
                  "kicker": "TO REMOVE",
                  "title": "/plugin uninstall",
                  "copy": true,
                  "filters": [
                    "yours"
                  ],
                  "detail": "Claude Code's own command: <code>/plugin uninstall</code> opens the plugin panel on the uninstall action; from a shell, <code>claude plugin uninstall gaia@gaia-marketplace</code> with <code>--scope</code> for the scope you installed at. Source: Claude Code's plugin documentation. Gaia's database lives outside the plugin, in <code>~/.gaia/</code>, so removing the plugin does not remove it.",
                  "variant": "muted"
                }
              ]
            },
            {
              "id": "p9-route-npm",
              "title": "Gaia agnostic installation",
              "subtitle": "installs Gaia as a plugin in Claude Code and OpenCode (beta)",
              "treatment": [
                "envelope"
              ],
              "order": 2,
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "p9-npm-install",
                  "order": 1,
                  "treatment": [
                    "half"
                  ],
                  "kicker": "THE PACKAGE",
                  "title": "npm install @jaguilar87/gaia",
                  "copy": true,
                  "filters": [
                    "the-human"
                  ],
                  "detail": "The npm route: the one for OpenCode, and the alternative for Claude Code when you want <code>gaia</code> on your own terminal. <code>npm install @jaguilar87/gaia</code>, or <code>pnpm add @jaguilar87/gaia</code>. Source: the Gaia README."
                },
                {
                  "id": "p9-npm-wire",
                  "order": 2,
                  "treatment": [
                    "half"
                  ],
                  "kicker": "WIRES THE WORKSPACE",
                  "title": "gaia install",
                  "copy": true,
                  "filters": [
                    "the-human",
                    "yours"
                  ],
                  "detail": "<code>gaia install</code> for Claude Code, or <code>--host opencode</code> / <code>--host all</code>. It bootstraps <code>~/.gaia/gaia.db</code> and wires the workspace; <code>gaia doctor</code> checks it. Pick one route per Claude Code workspace: the plugin and <code>gaia install</code> together register every hook twice."
                },
                {
                  "id": "p9-npm-remove",
                  "order": 3,
                  "treatment": [
                    "half"
                  ],
                  "kicker": "TO REMOVE",
                  "title": "gaia uninstall",
                  "copy": true,
                  "filters": [
                    "yours"
                  ],
                  "detail": "<code>gaia uninstall</code> disconnects Gaia from the workspace. Its own help: <i>Disconnect Gaia from this workspace (cleanup; DB is never deleted)</i>. It writes a gzip snapshot of <code>~/.gaia/gaia.db</code> first, by default, and no flag removes the database.",
                  "variant": "muted"
                },
                {
                  "id": "p9-npm-remove-pkg",
                  "order": 4,
                  "treatment": [
                    "half"
                  ],
                  "kicker": "THEN THE PACKAGE",
                  "title": "npm uninstall @jaguilar87/gaia",
                  "copy": true,
                  "filters": [
                    "yours"
                  ],
                  "detail": "Then remove the package: <code>npm uninstall @jaguilar87/gaia</code>, as INSTALL.md's manual uninstall step says. Memory, episodes and every persisted state survive <code>npm uninstall</code>.",
                  "variant": "muted"
                }
              ]
            },
            {
              "id": "p9-ask",
              "treatment": [
                "plain"
              ],
              "order": 3,
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "p9-first-prompt",
                  "order": 1,
                  "rowspan": 2,
                  "kicker": "THEN ASK",
                  "title": "what is Gaia, and what can you do for me?",
                  "description": [
                    "Gaia explains itself, live"
                  ],
                  "detail": "The first thing to ask, on either route: <i>what is Gaia, and what can you do for me?</i> Gaia explains itself live, and its answer is the map this deck opened with.",
                  "variant": "accent",
                  "treatment": [
                    "centered"
                  ],
                  "filters": [
                    "semantic"
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "p9-yours-row",
          "treatment": [
            "plain"
          ],
          "order": 2,
          "span": 1,
          "columns": 5,
          "children": [
            {
              "id": "p9-yours",
              "treatment": [
                "plain"
              ],
              "order": 1,
              "span": 3,
              "columns": 2,
              "children": [
                {
                  "id": "p9-db",
                  "order": 1,
                  "kicker": "ONE DATABASE · ALL IT KNOWS · YOURS",
                  "title": "~/.gaia/gaia.db",
                  "description": [
                    "every install, every project, the same knowledge",
                    "uninstalling never deletes it"
                  ],
                  "detail": "Plugin or npm, one project or many, Gaia reads and writes one local database: <code>~/.gaia/gaia.db</code>, the default of <code>data_dir()</code> in <code>gaia/paths/resolver.py</code> (moved only if you set <code>GAIA_DATA_DIR</code> or <code>GAIA_DB</code>). Memory, contracts, plans and approvals all live there, on your machine. <code>gaia uninstall</code> never deletes it: <i>there is no flag that removes it</i>.",
                  "variant": "good",
                  "filters": [
                    "memory",
                    "yours"
                  ]
                },
                {
                  "id": "p9-oss",
                  "order": 2,
                  "kicker": "OPEN SOURCE · MIT",
                  "title": "your agents, your skills",
                  "description": [
                    "github.com/metraton/gaia"
                  ],
                  "detail": "Gaia is MIT-licensed (<code>LICENSE</code>, <code>package.json</code>) at <code>github.com/metraton/gaia</code>. Agents and skills are written instructions, and Gaia ships a skill for writing each: <code>agent-creation</code> for a new specialist agent, <code>skill-creation</code> for a new skill.",
                  "filters": [
                    "semantic",
                    "yours"
                  ]
                }
              ]
            },
            {
              "id": "p9-numbers",
              "treatment": [
                "plain"
              ],
              "order": 2,
              "span": 2,
              "columns": 2,
              "children": [
                {
                  "id": "p9-approvals",
                  "order": 1,
                  "kicker": "ON MY MACHINE · APPROVALS",
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
                  "kicker": "ON MY MACHINE · COMMANDS",
                  "title": "94% only read",
                  "description": [
                    "most commands never ask"
                  ],
                  "detail": "From <code>gaia metrics</code> on one machine: 423 of 450 commands were T0, read-only, 94.0%. A fixed rule classified each one; only changes asked for your approval.",
                  "filters": [
                    "nothing-self-declared",
                    "deterministic"
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "p9-grow-row",
          "treatment": [
            "plain"
          ],
          "order": 3,
          "span": 1,
          "columns": 5,
          "children": [
            {
              "id": "p9-grow",
              "title": "It grows with you",
              "subtitle": "you ask; it learns everything else",
              "treatment": [
                "envelope",
                "compact"
              ],
              "order": 1,
              "span": 3,
              "columns": 5,
              "children": [
                {
                  "id": "p9-floor-1",
                  "type": "spacer",
                  "order": 1
                },
                {
                  "id": "p9-floor-2",
                  "type": "spacer",
                  "order": 2
                },
                {
                  "id": "p9-floor-3",
                  "type": "spacer",
                  "order": 3
                },
                {
                  "id": "p9-floor-4",
                  "type": "spacer",
                  "order": 4
                },
                {
                  "id": "p9-step-work",
                  "order": 5,
                  "rowspan": 5,
                  "kicker": "YOU",
                  "title": "work with agents",
                  "description": [
                    "it plans, delegates, and asks before it changes anything"
                  ],
                  "detail": "For larger work the orchestrator writes a brief and a plan of tasks, hands each task to the specialist that owns it, and has the result checked by someone who did not do the work. Anything that changes something real waits until you approve the exact command, and every approval is kept.",
                  "variant": "accent",
                  "filters": [
                    "semantic",
                    "the-human"
                  ]
                },
                {
                  "id": "p9-floor-5",
                  "type": "spacer",
                  "order": 6
                },
                {
                  "id": "p9-floor-6",
                  "type": "spacer",
                  "order": 7
                },
                {
                  "id": "p9-floor-7",
                  "type": "spacer",
                  "order": 8
                },
                {
                  "id": "p9-step-describe",
                  "order": 9,
                  "rowspan": 4,
                  "kicker": "YOU",
                  "title": "state the problem",
                  "description": [
                    "it finds the project and the right specialist"
                  ],
                  "detail": "You describe the problem in your own words. The orchestrator finds the project in the one database and routes the work to the specialist that owns that surface; it never edits files itself.",
                  "filters": [
                    "semantic"
                  ]
                },
                {
                  "id": "p9-floor-8",
                  "type": "spacer",
                  "order": 10
                },
                {
                  "id": "p9-floor-9",
                  "type": "spacer",
                  "order": 11
                },
                {
                  "id": "p9-step-scan",
                  "order": 12,
                  "rowspan": 3,
                  "kicker": "YOU",
                  "title": "scan your repos",
                  "description": [
                    "one scan, from wherever you are"
                  ],
                  "detail": "<code>gaia scan --workspace &lt;name&gt;</code> walks a folder for git repos and records each as a (workspace, project) row in the one database, <code>~/.gaia/gaia.db</code>, promoting the facts it can read into the project's identity. Its help says it: <i>Deterministic: no inference</i>. From then on every session opens with a <i>Projects I can reach</i> block: the projects the database knows, grouped by workspace, each with its path.",
                  "filters": [
                    "deterministic",
                    "yours"
                  ]
                },
                {
                  "id": "p9-floor-10",
                  "type": "spacer",
                  "order": 13
                },
                {
                  "id": "p9-step-ask",
                  "order": 14,
                  "rowspan": 2,
                  "kicker": "YOU",
                  "title": "ask",
                  "description": [
                    "\"what is Gaia?\""
                  ],
                  "detail": "Then you ask, in plain words. The one you talk to is Gaia's orchestrator, and it answers with the map this deck opened with.",
                  "filters": [
                    "the-human",
                    "semantic"
                  ]
                },
                {
                  "id": "p9-step-install",
                  "order": 15,
                  "kicker": "YOU",
                  "title": "install",
                  "description": [
                    "one command"
                  ],
                  "detail": "One plugin install in Claude Code, or one npm package plus <code>gaia install</code>.",
                  "filters": [
                    "the-human"
                  ]
                }
              ],
              "tokens": {
                "row": {
                  "cell_h": 74
                }
              },
              "css_vars": {
                "--cell-h": "74px"
              }
            },
            {
              "id": "p9-objections",
              "title": "What a skeptic asks",
              "treatment": [
                "envelope"
              ],
              "order": 2,
              "span": 2,
              "columns": 1,
              "children": [
                {
                  "id": "p9-obj-a-lot",
                  "order": 1,
                  "treatment": [
                    "half"
                  ],
                  "kicker": "“It sounds like a lot.”",
                  "title": "You don't learn it. You ask it.",
                  "detail": "You don't study Gaia before using it: you ask it what it is and what it can do, and it answers. The one who answers is a model following written instructions.",
                  "filters": [
                    "semantic"
                  ]
                },
                {
                  "id": "p9-obj-how-i-work",
                  "order": 2,
                  "treatment": [
                    "half"
                  ],
                  "kicker": "“Do I have to change how I work?”",
                  "title": "No. You keep talking to Claude Code.",
                  "filters": [
                    "yours"
                  ],
                  "detail": "Gaia's <code>settings.json</code> sets <code>\"agent\": \"gaia-orchestrator\"</code>: the orchestrator is the identity of your own Claude Code session, so the conversation stays where it was."
                },
                {
                  "id": "p9-obj-one-project",
                  "order": 3,
                  "treatment": [
                    "half"
                  ],
                  "kicker": "“Only one project?”",
                  "title": "One or many: it reaches all you scan.",
                  "filters": [
                    "yours"
                  ],
                  "detail": "Every session opens with a <i>Projects I can reach</i> block: the projects the database knows, grouped by workspace, each with its path, and a pointer to <code>gaia context project &lt;name&gt;</code>."
                },
                {
                  "id": "p9-obj-repos",
                  "order": 4,
                  "treatment": [
                    "half"
                  ],
                  "kicker": "“How does it know my repos?”",
                  "title": "One scan maps them, in broad strokes.",
                  "detail": "<code>gaia scan</code> records each git repo as a (workspace, project) row and promotes what it can read into the project's identity. By rule, with no inference: it does not read your code to understand it.",
                  "filters": [
                    "deterministic"
                  ]
                },
                {
                  "id": "p9-obj-safe",
                  "order": 5,
                  "treatment": [
                    "half"
                  ],
                  "kicker": "“Is it safe?”",
                  "title": "Reads run. Changes wait for your yes.",
                  "detail": "A rule sorts every command before it runs: reads, checks and dry-runs go ahead; a change stops until you approve that exact command; a few commands never run at all.",
                  "filters": [
                    "the-human",
                    "deterministic"
                  ]
                },
                {
                  "id": "p9-obj-uninstall",
                  "order": 6,
                  "treatment": [
                    "half"
                  ],
                  "kicker": "“What happens to what it learned if I uninstall?”",
                  "title": "Nothing. It stays in your database.",
                  "detail": "What Gaia learns is in <code>~/.gaia/gaia.db</code>. <code>gaia uninstall</code> never deletes it and snapshots it first; the plugin lives in Claude Code's plugin folder, apart from <code>~/.gaia/</code>.",
                  "filters": [
                    "memory",
                    "yours"
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "p9-close",
          "treatment": [
            "plain"
          ],
          "order": 4,
          "span": 1,
          "columns": 1,
          "children": [
            {
              "id": "p9-halves",
              "type": "separator",
              "text": "hooks decide by rule · skills and agents follow · the CLI joins"
            }
          ]
        }
      ],
      "name": "6 · Install it, ask it",
      "order": 5
    },
    {
      "id": "backup-code",
      "layout": "grid",
      "form": "dashboard",
      "columns": 6,
      "filters": [
        {
          "key": "deterministic",
          "label": "what does a rule decide?",
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
              "description": "reads it, re-scans repos",
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
              "description": "adopts the born contract",
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
              "description": "stored, never the reply",
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
      "order": 6
    }
  ]
};
if (typeof document !== 'undefined' && document.documentElement)
  document.documentElement.setAttribute('data-palette', window.__DOC__.palette || 'neutral');
