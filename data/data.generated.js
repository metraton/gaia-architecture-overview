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
          "key": "pillar-workflows",
          "label": "1 · workflows",
          "steps": [
            "The first one is the workflow: the way the work moves. You say what you need, in your own words, to one agent: the orchestrator. It turns that into clear steps, and hands each step to the agent that knows that area best. Every one of those agents is built in the same way, and they all report back in the same form. Around them, a few fixed rules in code make sure nothing goes off course."
          ]
        },
        {
          "key": "pillar-standards",
          "label": "2 · standards",
          "steps": [
            "The second thing to share is standards. When everyone follows the same patterns, the work comes out the same, no matter who asked for it. The results are structured, so the next agent can pick them up right away, and they are also easy for people to read: commits, pull requests, docs. The team even shares the same tools."
          ]
        },
        {
          "key": "pillar-knowledge",
          "label": "3 · knowledge",
          "steps": [
            "Third, knowledge. Gaia starts out knowing nothing about your work. It learns as you go. It scans each project to understand how it is built, it keeps the decisions you have made, it remembers what was left open, and it saves every piece of work in a clear, structured way, so it can be found later."
          ]
        },
        {
          "key": "pillar-observability",
          "label": "4 · observability",
          "steps": [
            "Fourth, being able to see where things stand. Every idea is written down, so it does not get lost in a chat. It becomes a plan, the plan becomes small tasks, and each task comes with its own test. At the end, a different agent checks the result, one that did not do the work."
          ]
        },
        {
          "key": "pillar-audit",
          "label": "5 · audit",
          "steps": [
            "And fifth, audit: knowing who answers for what. When a change really matters, a person is in charge, and has to approve it. Every step leaves a trail you can follow, every piece of work gets a grade, and bad habits are flagged, so they can be fixed."
          ]
        }
      ],
      "sections": [
        {
          "id": "thesis",
          "treatment": [
            "plain",
            "compact"
          ],
          "tokens": {
            "row": {
              "cell_h": 60
            }
          },
          "order": 1,
          "span": 5,
          "columns": 1,
          "children": [
            {
              "id": "th-claim",
              "title": "Becoming AI-first",
              "detail": "Agentic work is lonely by default: one person, one agent, one session. Nothing is shared between them, so what one turn learns is lost for the next, no two people work alike, and a model only knows what it can read. Sharing five things turns lonely work into team work: how the work is shaped, how the output is shaped, what is remembered, what can be seen while it happens, and what can be checked afterwards.",
              "treatment": [
                "centered"
              ]
            }
          ],
          "css_vars": {
            "--cell-h": "60px"
          }
        },
        {
          "id": "pillars",
          "title": "What an organization should share",
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
                  "detail": "Orchestration is a way of working, not a list of roles. One coordinator does no work itself: it reads a request, sends it to whoever owns that area, and reads the answer back. Because the route follows ownership, the work moves the same way no matter who asked for it.",
                  "filters": [
                    "pillar-workflows"
                  ]
                },
                {
                  "id": "w-structure",
                  "order": 2,
                  "kicker": "STRUCTURE",
                  "title": "What an agent is",
                  "description": [
                    "a contract, an identity, a scope, and known errors"
                  ],
                  "detail": "An agent is more than a prompt: a contract for what it must return, an identity for how it works, a scope for what it may touch, and the errors it knows how to handle. Every agent has those same four parts, and every agent owns one area — nine agents exist today, the orchestrator and eight specialists, and more can be added. That is what lets one agent read another one's work.",
                  "filters": [
                    "pillar-workflows"
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
                  "detail": "Agents hand each other one fixed form, never free text. It always carries the same fields: what was done, what was run, what was checked, what is still open. Whoever reads it already knows its shape, so nobody has to read a story to work out what happened.",
                  "filters": [
                    "pillar-workflows"
                  ]
                },
                {
                  "id": "w-hooks",
                  "order": 4,
                  "kicker": "HOOKS",
                  "title": "Guardrails in code",
                  "description": [
                    "the agent cannot skip them"
                  ],
                  "detail": "Some rules live in code, outside the agent, and run at fixed moments: before each action and when a turn ends. The agent cannot rewrite or skip them. When an action would change something real, they stop it for a person.",
                  "filters": [
                    "pillar-workflows"
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
                  "title": "Shared patterns",
                  "description": [
                    "how every agent works and answers"
                  ],
                  "detail": "Skills are written patterns: how to approach a task, how to answer, even the tone. Every agent follows the same ones, so the work behaves the same no matter who asked.",
                  "filters": [
                    "pillar-standards"
                  ]
                },
                {
                  "id": "s-outputs",
                  "order": 2,
                  "kicker": "OUTPUTS",
                  "title": "Made for agents",
                  "description": [
                    "structured, ready to reuse"
                  ],
                  "detail": "Every result has one structured shape. The next agent can use it right away, without reading it again or guessing what happened.",
                  "filters": [
                    "pillar-standards"
                  ]
                },
                {
                  "id": "s-conventions",
                  "order": 3,
                  "kicker": "CONVENTIONS",
                  "title": "Readable by everyone",
                  "description": [
                    "commits, PRs, docs"
                  ],
                  "detail": "Commits, pull requests and docs follow one style. A person who was not there can still understand quickly what changed and why.",
                  "filters": [
                    "pillar-standards"
                  ]
                },
                {
                  "id": "s-tools",
                  "order": 4,
                  "kicker": "TOOLS",
                  "title": "Tools the team provides",
                  "description": [
                    "provided from inside, shared outside, improved by anyone"
                  ],
                  "detail": "Any tool can be used; what matters is who provides it. The organization should provide its own internal tools, the whole team should work with the same external ones, and the setup around them should be something anyone can improve. So nobody builds the same thing twice, the work looks the same wherever it happens, and no small group owns the toolchain.",
                  "filters": [
                    "pillar-standards"
                  ]
                }
              ]
            },
            {
              "id": "knowledge",
              "title": "KNOWLEDGE",
              "subtitle": "what the project learns",
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
                    "scanned each time, and it grows with the project"
                  ],
                  "detail": "Project context is a process, not a file. The facts are found by scanning the project the same way every time, every turn adds what it learned, and each agent receives only the slice its role needs. Because it is measured rather than remembered, it is the most current picture available.",
                  "filters": [
                    "pillar-knowledge"
                  ]
                },
                {
                  "id": "k-durable",
                  "order": 2,
                  "kicker": "DURABLE",
                  "title": "Long memory",
                  "description": [
                    "decisions and facts about the project"
                  ],
                  "detail": "Long memory keeps what stays true after the session that produced it is closed: decisions already taken, stable facts, dead ends worth not walking again. It holds facts about the project — not rules for the tool, not a record of how anyone behaves. So a new session starts knowing what the project already settled, instead of deciding it again.",
                  "filters": [
                    "pillar-knowledge"
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
                    "pillar-knowledge"
                  ]
                },
                {
                  "id": "k-episodic",
                  "order": 4,
                  "kicker": "CONTRACTS",
                  "title": "Structured knowledge",
                  "description": [
                    "every turn is stored as a filled-in form"
                  ],
                  "detail": "Every turn closes with its contract: what was asked, what ran, what it printed and what is still open. Gaia stores it as structured data, next to the record the machine writes of each turn. Later sessions can search what was really done, instead of reading old chats.",
                  "filters": [
                    "pillar-knowledge"
                  ]
                }
              ]
            },
            {
              "id": "observability",
              "title": "OBSERVABILITY",
              "subtitle": "where the work stands",
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
                  "title": "Where ideas are kept",
                  "description": [
                    "a place to capture an idea, and what «done» will mean"
                  ],
                  "detail": "A brief is one place where an idea is written down and kept, rather than a message in a chat that scrolls away. It captures ideas, puts them in order, turns a request or a proposal into something that can be planned, and carries what «done» will mean next to the idea itself. So an idea can be found again later, and nobody decides afterwards what finished was supposed to mean.",
                  "filters": [
                    "pillar-observability"
                  ]
                },
                {
                  "id": "o-plan",
                  "order": 2,
                  "kicker": "PLAN",
                  "title": "From idea to solution",
                  "description": [
                    "research the idea, turn it into a solution, get the tasks"
                  ],
                  "detail": "A plan is where an idea becomes a technical solution. The idea is researched against the real code first — can this be done, and where does it land — and the tasks are what that solution needs. So the steps come out of the research instead of out of a guess, while what «done» means stays with the idea.",
                  "filters": [
                    "pillar-observability"
                  ]
                },
                {
                  "id": "o-task",
                  "order": 3,
                  "kicker": "TASK",
                  "title": "Atomic, checkable steps",
                  "description": [
                    "every step says how it will be checked"
                  ],
                  "detail": "A task is a group of steps, and each step carries the check that closes it. The check is decided when the work is planned, not improvised when it is reviewed — a command to run, a piece of code, a judgement, or a review. A step is atomic on purpose: it is either waiting, done or skipped, and the «being worked on» lives in the turn that works it, not in the step. From a planned step, the turn that did the work and the turn that checked it can both be followed — step, work and check stay one thread.",
                  "filters": [
                    "pillar-observability"
                  ]
                },
                {
                  "id": "o-verification",
                  "order": 4,
                  "kicker": "VERIFICATION",
                  "title": "Validator agents",
                  "description": [
                    "start fresh, test the evidence"
                  ],
                  "detail": "A separate agent checks the work. It starts with no memory of how the work was done, so it can only test what the evidence shows. It never checks its own work.",
                  "filters": [
                    "pillar-observability"
                  ]
                }
              ]
            },
            {
              "id": "audit",
              "title": "AUDIT",
              "subtitle": "who answers for changes",
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
                  "title": "A person in charge",
                  "description": [
                    "of every change that matters"
                  ],
                  "detail": "Reading changes nothing, so it runs on its own. A change that matters stops until a person approves that exact command. The record of each answer cannot be edited later.",
                  "filters": [
                    "pillar-audit"
                  ]
                },
                {
                  "id": "a-evidence",
                  "order": 2,
                  "kicker": "EVIDENCE",
                  "title": "The work leaves a trail",
                  "description": [
                    "what was run, what was touched, what was checked"
                  ],
                  "detail": "Every turn leaves a trail inside its own answer. It records what was run, what was touched, what was checked and what is still open — a filled-in form, not a story. So it can be read without having to trust whoever wrote it.",
                  "filters": [
                    "pillar-audit"
                  ]
                },
                {
                  "id": "a-compliance",
                  "order": 3,
                  "kicker": "COMPLIANCE",
                  "title": "Every turn is graded",
                  "description": [
                    "six mechanical checks on its own record"
                  ],
                  "detail": "Every turn is graded by six mechanical checks on its own record. They ask whether the answer was well formed, whether it looked before it changed anything, whether it used the context it was given, whether it ran its commands cleanly, whether it repeated itself, and whether it wrote outside what it owns — and the grade comes out as a score and a letter. Nobody is asked to rate their own turn: the grade is computed from what the turn actually did.",
                  "filters": [
                    "pillar-audit"
                  ]
                },
                {
                  "id": "a-anomalies",
                  "order": 4,
                  "kicker": "ANOMALIES",
                  "title": "Bad discipline is flagged",
                  "description": [
                    "skipped checks, missing evidence, work outside scope"
                  ],
                  "detail": "Bad discipline is flagged on its own, apart from cost. One side names skipped looking, missing or empty evidence, a skipped check, work outside what someone owns; the other names how much it cost, how long it took, how often it called out. Keeping the two apart is the point: bad discipline is a finding by itself, not a footnote at the end of a cost report.",
                  "filters": [
                    "pillar-audit"
                  ]
                }
              ]
            }
          ]
        }
      ],
      "name": "1 · Becoming AI-first",
      "order": 0
    },
    {
      "id": "p2-the-map",
      "layout": "grid",
      "form": "mindmap",
      "columns": 1,
      "filters": [
        {
          "key": "p2-ask",
          "label": "1 · you ask",
          "steps": [
            "You ask the orchestrator for something, in your own words."
          ]
        },
        {
          "key": "p2-delegate",
          "label": "2 · it delegates",
          "steps": [
            "The orchestrator decides what has to happen and hands the work to a specialist, which starts with its contract open."
          ]
        },
        {
          "key": "p2-ready",
          "label": "3 · the specialist is ready",
          "steps": [
            "The specialist starts with five things: its identity, its skills, the project context, your preferences and its contract."
          ]
        },
        {
          "key": "p2-rules",
          "label": "4 · rules check",
          "steps": [
            "Rules check the work: a change waits for your approval, and every contract is checked before the orchestrator uses it for the next step."
          ]
        },
        {
          "key": "p2-remember",
          "label": "5 · it remembers",
          "steps": [
            "Gaia remembers decisions, plans and your preferences, so the next session starts where this one ended."
          ]
        }
      ],
      "sections": [
        {
          "id": "gaia",
          "title": "GAIA",
          "subtitle": "the orchestration layer: it talks with you and coordinates the work, but never makes the changes itself",
          "treatment": [
            "envelope"
          ],
          "order": 1,
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
                  "subtitle": "one per session, the only one you talk to",
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
                      "title": "Decides the WHAT",
                      "description": [
                        "holds the conversation, never edits"
                      ],
                      "detail": "It is the one agent you talk to. It works out what you want, shows you the route before starting, and keeps the thread from start to end. It never edits files: every change goes to a specialist.",
                      "treatment": [
                        "centered"
                      ],
                      "filters": [
                        "p2-ask",
                        "p2-delegate"
                      ]
                    }
                  ]
                },
                {
                  "id": "gaia-manages",
                  "title": "What Gaia manages",
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
                      "kicker": "KNOWLEDGE",
                      "title": "Memory",
                      "description": [
                        "decisions, lessons, open work, and how you like to work"
                      ],
                      "detail": "Memory keeps what should outlive a session: the decisions made and why, what was learned about each project (including dead ends not worth repeating), the work still open, and your preferences. Each session's work is also recorded on its own. The orchestrator reads it at the start, curates it on purpose, and brings back what is pending.",
                      "filters": [
                        "p2-remember"
                      ]
                    },
                    {
                      "id": "mg-plans",
                      "order": 4,
                      "kicker": "OBSERVABILITY",
                      "title": "Plans & tasks",
                      "description": [
                        "an idea becomes checked tasks"
                      ],
                      "detail": "An idea is written down, turned into a plan and split into tasks, each with its own test. A different agent checks each task before it counts as done.",
                      "filters": [
                        "p2-remember"
                      ]
                    },
                    {
                      "id": "mg-contracts",
                      "order": 2,
                      "kicker": "AUDIT",
                      "title": "Contracts",
                      "description": [
                        "turns structured reports into next steps"
                      ],
                      "detail": "Each specialist reports in a structured form. The orchestrator reads that data and turns it into new context for the next step, or into the result it gives you.",
                      "filters": [
                        "p2-rules"
                      ]
                    },
                    {
                      "id": "mg-approvals",
                      "order": 1,
                      "kicker": "AUDIT",
                      "title": "Approvals",
                      "description": [
                        "shows the command and its impact"
                      ],
                      "detail": "When a specialist needs a change, Gaia shows you the exact command, what it will change and how to undo it, in one clear question. Nothing runs until you answer.",
                      "filters": [
                        "p2-rules"
                      ]
                    },
                    {
                      "id": "mg-cli",
                      "type": "separator",
                      "order": 5,
                      "span": 4,
                      "text": "all of this runs through Gaia's own CLI"
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
                  "subtitle": "one per piece of work, eight today",
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
                      "title": "Does the HOW",
                      "description": [
                        "starts clean for one piece of work"
                      ],
                      "detail": "Eight specialists today: developer (application code and pipelines), platform-architect (infrastructure as code), gitops-operator (what runs in the cluster), cloud-troubleshooter (live systems), gaia-planner (plans), gaia-verifier (independent checks), gaia-operator and gaia-system (Gaia's own workspace and machinery). You can add your own.",
                      "treatment": [
                        "centered"
                      ],
                      "filters": [
                        "p2-delegate"
                      ]
                    }
                  ]
                },
                {
                  "id": "gaia-carries",
                  "title": "What a specialist carries",
                  "subtitle": "given to it the moment it starts",
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
                      "kicker": "WORKFLOWS",
                      "title": "Identity",
                      "description": [
                        "its role and its field"
                      ],
                      "detail": "One file defines each specialist: what it is for, the field it owns, the tools it may use, and the parts of the project it may read and write.",
                      "filters": [
                        "p2-ready"
                      ]
                    },
                    {
                      "id": "sc-skills",
                      "order": 2,
                      "kicker": "STANDARDS",
                      "title": "Skills",
                      "description": [
                        "the team's way of working"
                      ],
                      "detail": "Written patterns for its kind of work. Claude Code loads the ones its file lists when it starts, and it loads others when a task needs them.",
                      "filters": [
                        "p2-ready"
                      ]
                    },
                    {
                      "id": "sc-context",
                      "order": 3,
                      "kicker": "KNOWLEDGE",
                      "title": "Project context",
                      "description": [
                        "what it may read and write"
                      ],
                      "detail": "What Gaia knows about the project, in sections. The specialist is told which ones it may read and which it may write, and reads the ones it needs.",
                      "filters": [
                        "p2-ready"
                      ]
                    },
                    {
                      "id": "sc-memory",
                      "order": 4,
                      "kicker": "KNOWLEDGE",
                      "title": "Memory about you",
                      "description": [
                        "how you like to work"
                      ],
                      "detail": "Your standing rules and preferences arrive with it, so it does not ask you again.",
                      "filters": [
                        "p2-ready",
                        "p2-remember"
                      ]
                    },
                    {
                      "id": "sc-contract",
                      "order": 5,
                      "kicker": "AUDIT",
                      "title": "Its contract",
                      "description": [
                        "the form it must fill in"
                      ],
                      "detail": "It starts with its contract open: the goal, its role, and what it may touch. It fills it in as it works, using Gaia's command line, and its turn cannot close until the form is complete.",
                      "filters": [
                        "p2-ready",
                        "p2-delegate",
                        "p2-rules"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "id": "prompt",
              "treatment": [
                "plain",
                "compact"
              ],
              "tokens": {
                "row": {
                  "cell_h": 60
                }
              },
              "order": 5,
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "p2-prompt",
                  "order": 1,
                  "variant": "accent",
                  "kicker": "PROMPT",
                  "title": "What is Gaia?",
                  "filters": [
                    "p2-ask"
                  ]
                }
              ],
              "css_vars": {
                "--cell-h": "60px"
              }
            }
          ]
        }
      ],
      "name": "2 · What is Gaia",
      "order": 1
    },
    {
      "id": "p5-what-gaia-keeps",
      "layout": "grid",
      "form": "dashboard",
      "columns": 1,
      "filters": [
        {
          "key": "p5-knows",
          "label": "1 · what it knows",
          "steps": [
            "Gaia scans the workspace and its repositories and writes down what it finds, section by section, and keeps your rules, your preferences and your decisions."
          ]
        },
        {
          "key": "p5-open",
          "label": "2 · what is open",
          "steps": [
            "Bigger work starts as a brief, becomes one plan split into tasks with their own gates, and whatever is still open carries forward."
          ]
        },
        {
          "key": "p5-done",
          "label": "3 · what was done",
          "steps": [
            "Every turn ends with its contract and its evidence, every change you approved is kept with your answer, and every check leaves its verdict."
          ]
        },
        {
          "key": "p5-happened",
          "label": "4 · what happened",
          "steps": [
            "Gaia's engine records events, turns and sessions on its own, puts them in a timeline, and flags anything unusual."
          ]
        },
        {
          "key": "p5-one-task",
          "label": "5 · one task, four traces",
          "steps": [
            "A single task leaves a trace in all four: in the project it touched, in the plan it belongs to, in its contract, and in the record of its turn."
          ]
        }
      ],
      "sections": [
        {
          "id": "gaia",
          "title": "GAIA",
          "treatment": [
            "envelope"
          ],
          "order": 1,
          "span": 1,
          "columns": 1,
          "children": [
            {
              "id": "suns-top",
              "treatment": [
                "plain"
              ],
              "order": 1,
              "span": 1,
              "columns": 2,
              "children": [
                {
                  "id": "sun-project",
                  "treatment": [
                    "envelope",
                    "compact"
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
                        "p5-knows"
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
                        "p5-knows"
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
                        "p5-knows"
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
                        "p5-knows",
                        "p5-one-task"
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
                        "p5-knows"
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
                        "p5-knows",
                        "p5-one-task"
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
                      "title": "may read ↓",
                      "filters": [
                        "p5-knows"
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
                        "p5-knows"
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
                        "p5-knows"
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
                        "p5-knows"
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
                      "title": "← may write",
                      "filters": [
                        "p5-knows"
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
                  "id": "sun-operational",
                  "treatment": [
                    "envelope",
                    "compact"
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
                        "p5-open"
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
                      "title": "criteria →",
                      "filters": [
                        "p5-open"
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
                        "p5-open"
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
                        "p5-open",
                        "p5-one-task"
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
                        "p5-open"
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
                        "p5-open",
                        "p5-one-task"
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
                        "p5-open"
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
                        "p5-open"
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
                        "p5-open"
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
                        "p5-open"
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
                        "p5-open"
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
                }
              ]
            },
            {
              "id": "suns-bottom",
              "treatment": [
                "plain"
              ],
              "order": 2,
              "span": 1,
              "columns": 2,
              "children": [
                {
                  "id": "sun-execution",
                  "treatment": [
                    "envelope",
                    "compact"
                  ],
                  "order": 1,
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
                        "p5-done",
                        "p5-one-task"
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
                      "title": "changes →",
                      "filters": [
                        "p5-done"
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
                        "p5-done"
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
                        "p5-done"
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
                        "p5-done"
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
                        "p5-done",
                        "p5-one-task"
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
                        "p5-done"
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
                      "title": "↑ blocked",
                      "filters": [
                        "p5-done"
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
                      "title": "← done",
                      "filters": [
                        "p5-done"
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
                        "p5-done"
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
                        "p5-done"
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
                  "id": "sun-episodic",
                  "treatment": [
                    "envelope",
                    "compact"
                  ],
                  "order": 2,
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
                        "p5-happened"
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
                        "p5-happened"
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
                        "p5-happened"
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
                        "p5-happened"
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
                        "p5-happened"
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
                        "p5-happened",
                        "p5-one-task"
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
                        "p5-happened"
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
                      "title": "↑ history",
                      "filters": [
                        "p5-happened"
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
                        "p5-happened"
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
                        "p5-happened"
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
                        "p5-happened",
                        "p5-one-task"
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
                }
              ]
            },
            {
              "id": "prompt",
              "treatment": [
                "plain",
                "compact"
              ],
              "tokens": {
                "row": {
                  "cell_h": 60
                }
              },
              "order": 4,
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "p5-prompt",
                  "order": 1,
                  "variant": "accent",
                  "kicker": "PROMPT",
                  "title": "What do you know about my work?",
                  "filters": [
                    "p5-knows"
                  ]
                }
              ],
              "css_vars": {
                "--cell-h": "60px"
              }
            }
          ]
        }
      ],
      "name": "3 · What Gaia knows",
      "order": 2
    },
    {
      "id": "p-pilot-your-yes",
      "form": "dashboard",
      "columns": 1,
      "filters": [
        {
          "key": "moment-ask",
          "label": "1 · you ask",
          "steps": [
            "You ask in your own words. The orchestrator sends the goal, and the engine prepares the specialist before it starts."
          ]
        },
        {
          "key": "moment-work",
          "label": "2 · it works",
          "steps": [
            "The specialist reads and edits. Every action is checked by rule; safe ones never reach you."
          ]
        },
        {
          "key": "moment-stop",
          "label": "3 · a change stops",
          "steps": [
            "A command that changes something is stopped. The specialist pauses and its request goes to the orchestrator."
          ]
        },
        {
          "key": "moment-asked",
          "label": "4 · you're asked",
          "steps": [
            "The orchestrator asks you with the question Gaia wrote, checked word for word."
          ]
        },
        {
          "key": "moment-decide",
          "label": "5 · you decide",
          "steps": [
            "Your answer is recorded as a one-time pass, and the same specialist picks up where it stopped."
          ]
        },
        {
          "key": "moment-run",
          "label": "6 · it runs",
          "steps": [
            "The exact command runs once. The report is checked by rule before you hear the result."
          ]
        }
      ],
      "sections": [
        {
          "id": "s7-title",
          "treatment": [
            "plain",
            "compact"
          ],
          "tokens": {
            "row": {
              "cell_h": 60
            }
          },
          "order": 1,
          "span": 1,
          "columns": 1,
          "children": [
            {
              "id": "s7-head",
              "order": 1,
              "title": "Nothing that matters runs without you seeing it.",
              "treatment": [
                "centered"
              ]
            }
          ],
          "css_vars": {
            "--cell-h": "60px"
          }
        },
        {
          "id": "s7-gaia",
          "title": "GAIA",
          "tokens": {
            "row": {
              "cell_h": 76
            }
          },
          "order": 2,
          "span": 1,
          "columns": 4,
          "children": [
            {
              "id": "s7-you",
              "title": "You",
              "subtitle": "the one who approves",
              "treatment": [
                "envelope"
              ],
              "order": 1,
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "s7-y1",
                  "order": 1,
                  "title": "Asks for something",
                  "description": [
                    "add a health check to store-api"
                  ],
                  "detail": "You ask in your own words. The orchestrator works out what you want and which specialist owns it.",
                  "filters": [
                    "moment-ask"
                  ]
                },
                {
                  "id": "s7-y2",
                  "order": 2,
                  "rowspan": 2,
                  "title": "Nothing reaches you",
                  "description": [
                    "safe actions never ask"
                  ],
                  "detail": "Reading is safe, so Gaia never asks you about it.",
                  "filters": [
                    "moment-work"
                  ]
                },
                {
                  "id": "s7-y4",
                  "order": 3,
                  "title": "Sees the details",
                  "description": [
                    "who · what runs · how to undo"
                  ],
                  "detail": "The question names the agent and the exact command. Details adds what it does, its impact, how it is checked and how to roll it back.",
                  "filters": [
                    "moment-asked"
                  ]
                },
                {
                  "id": "s7-y5",
                  "order": 4,
                  "title": "Decides",
                  "description": [
                    "approve · reject · let it expire"
                  ],
                  "detail": "Approve covers this one command, once. Reject means nothing runs. A request nobody answers expires.",
                  "filters": [
                    "moment-decide"
                  ]
                },
                {
                  "id": "s7-y6",
                  "order": 5,
                  "title": "Gets the result",
                  "description": [
                    "what changed, and the proof"
                  ],
                  "detail": "The orchestrator tells you what changed and what it is based on.",
                  "filters": [
                    "moment-run"
                  ]
                }
              ]
            },
            {
              "id": "s7-orch",
              "title": "The orchestrator",
              "subtitle": "the model you talk to",
              "treatment": [
                "envelope"
              ],
              "order": 2,
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "s7-o1",
                  "order": 1,
                  "rowspan": 2,
                  "title": "Sends the goal",
                  "description": [
                    "to the specialist for that field"
                  ],
                  "detail": "The orchestrator never edits files or runs changes itself. It hands the work to a specialist.",
                  "filters": [
                    "moment-ask"
                  ]
                },
                {
                  "id": "s7-o3",
                  "order": 2,
                  "title": "Gets the request",
                  "description": [
                    "from the specialist's report"
                  ],
                  "detail": "The specialist's turn ends with an approval request in its contract. The orchestrator reads it from there.",
                  "filters": [
                    "moment-stop"
                  ]
                },
                {
                  "id": "s7-o4",
                  "order": 3,
                  "kicker": "ASK TOOL",
                  "title": "Asks you",
                  "description": [
                    "with the question Gaia wrote"
                  ],
                  "detail": "The orchestrator asks Gaia for the question and opens it without changing a word.",
                  "filters": [
                    "moment-asked"
                  ]
                },
                {
                  "id": "s7-o5",
                  "order": 4,
                  "title": "Resumes the specialist",
                  "description": [
                    "the same one, where it stopped"
                  ],
                  "detail": "The orchestrator resumes the same specialist. Its context is not injected again.",
                  "filters": [
                    "moment-decide"
                  ]
                },
                {
                  "id": "s7-o6",
                  "order": 5,
                  "title": "Tells you the result",
                  "description": [
                    "from the checked report"
                  ],
                  "detail": "The orchestrator reports from the checked contract and from what it opens itself, not from the specialist's message.",
                  "filters": [
                    "moment-run"
                  ]
                }
              ]
            },
            {
              "id": "s7-engine",
              "title": "Gaia's engine",
              "subtitle": "code, a rule, no model",
              "treatment": [
                "envelope"
              ],
              "order": 3,
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "s7-e1",
                  "order": 1,
                  "kicker": "CONTEXT INJECTION",
                  "title": "Prepares the specialist",
                  "description": [
                    "goal, contract, your rules"
                  ],
                  "detail": "When a specialist starts, a hook (SubagentStart) injects its contract (the goal and the form it fills in), what it may read and write in the project, your standing rules and the commands it can use. Project details are read on demand.",
                  "filters": [
                    "moment-ask"
                  ]
                },
                {
                  "id": "s7-e2",
                  "order": 2,
                  "kicker": "SCAN",
                  "title": "Checks every action",
                  "description": [
                    "reads pass · risky actions stop"
                  ],
                  "detail": "Before each action, a hook (PreToolUse) checks it by rule: commands, file reads and edits, dispatches and questions. Reading a credentials file is refused, and nothing can approve it.",
                  "filters": [
                    "moment-work"
                  ]
                },
                {
                  "id": "s7-e3",
                  "order": 3,
                  "kicker": "HOOK",
                  "title": "Stops the command",
                  "description": [
                    "holds it and keeps the request"
                  ],
                  "detail": "A command that changes something is held and a pending request is stored. When the specialist's turn ends, a hook (SubagentStop) checks its contract and keeps the request alive.",
                  "variant": "warn",
                  "filters": [
                    "moment-stop"
                  ]
                },
                {
                  "id": "s7-e4",
                  "order": 4,
                  "kicker": "ASK CHECK",
                  "title": "Checks the question",
                  "description": [
                    "word for word, or it is refused"
                  ],
                  "detail": "A hook checks the question before it opens. If it differs by one character from what Gaia wrote, it is refused. Each question shown is recorded.",
                  "filters": [
                    "moment-asked"
                  ]
                },
                {
                  "id": "s7-e5",
                  "order": 5,
                  "kicker": "AUDIT TRAIL",
                  "title": "Records your answer",
                  "description": [
                    "one-time pass, this specialist"
                  ],
                  "detail": "Each answer is stamped and linked to the step before, so a changed record shows. An approval becomes a one-time pass bound to this session and this specialist.",
                  "filters": [
                    "moment-decide"
                  ]
                },
                {
                  "id": "s7-e6",
                  "order": 6,
                  "kicker": "VALIDATION",
                  "title": "Matches and validates",
                  "description": [
                    "exact command, report by rule"
                  ],
                  "detail": "The retried command must match the approved one byte for byte. After it runs, a hook (PostToolUse) records executed or failed. At the end, SubagentStop checks the contract; a missing or unfinished one sends the specialist back.",
                  "filters": [
                    "moment-run"
                  ]
                }
              ]
            },
            {
              "id": "s7-spec",
              "title": "The specialist",
              "subtitle": "a model, one field",
              "treatment": [
                "envelope"
              ],
              "order": 4,
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "s7-s1",
                  "order": 1,
                  "title": "Subagent born",
                  "description": [
                    "identity · skills · tools"
                  ],
                  "detail": "Each agent is one file that names it and lists its tools and the skills it needs. Claude Code loads those skills when the agent starts.",
                  "filters": [
                    "moment-ask"
                  ]
                },
                {
                  "id": "s7-s2",
                  "order": 2,
                  "title": "Does the work",
                  "description": [
                    "reads · edits · runs tests"
                  ],
                  "detail": "Most of the work is reading and editing files and running checks.",
                  "filters": [
                    "moment-work"
                  ]
                },
                {
                  "id": "s7-s3",
                  "order": 3,
                  "rowspan": 3,
                  "title": "git push",
                  "description": [
                    "asks for approval and pauses"
                  ],
                  "detail": "git push sends commits to the shared repository, so it changes something other people use.",
                  "filters": [
                    "moment-stop",
                    "moment-asked",
                    "moment-decide"
                  ]
                },
                {
                  "id": "s7-s6",
                  "order": 4,
                  "kicker": "EXECUTION",
                  "title": "Runs it, then reports",
                  "description": [
                    "only the approved command"
                  ],
                  "detail": "The same specialist runs the approved command once, then closes its contract: what changed, the commands, their output and what is still open.",
                  "filters": [
                    "moment-run"
                  ]
                }
              ]
            },
            {
              "id": "s7-prompt",
              "treatment": [
                "plain"
              ],
              "tokens": {
                "row": {
                  "cell_h": 144
                }
              },
              "order": 5,
              "span": 4,
              "columns": 1,
              "children": [
                {
                  "id": "s7-question",
                  "order": 1,
                  "variant": "accent",
                  "kicker": "PROMPT",
                  "title": "SIGNATURE 1/1",
                  "tokens": {
                    "type": {
                      "desc": {
                        "lines": 5
                      }
                    }
                  },
                  "description": [
                    "[ GAIA-SECURITY ] [ AGENT-REQUEST ] [ developer ] [ COMMAND ] [ git push origin feature/health-check ]",
                    "› 1. Approve · authorizes exactly this command",
                    "  2. Reject · nothing runs",
                    "  3. Details · what it does, impact, verification, how to undo it",
                    "  4. Type something"
                  ],
                  "detail": "<code>[ GAIA-SECURITY ] [ DETAILS ] [ developer ] [ COMMAND: git push origin feature/health-check ] [ DOES: pushes the health-check commits to the shared repository ] [ IMPACT: updates the feature/health-check branch; main is not touched ] [ VERIFICATION: CI runs on the branch and must pass ] [ SHARED-STATE: the remote branch feature/health-check ] [ ROLLBACK: push the previous commit back to the branch ]</code>",
                  "filters": [
                    "moment-asked",
                    "moment-decide"
                  ],
                  "css_vars": {
                    "--desc-lines": "5"
                  }
                }
              ],
              "css_vars": {
                "--cell-h": "144px"
              }
            }
          ],
          "css_vars": {
            "--cell-h": "76px"
          }
        }
      ],
      "name": "4 · Nothing that matters runs without you seeing it",
      "order": 3
    },
    {
      "id": "p6-contracts",
      "layout": "grid",
      "form": "dashboard",
      "columns": 1,
      "filters": [
        {
          "key": "c-reports",
          "label": "1 · it reports",
          "steps": [
            "Each turn ends with a contract, the same form for every agent, and it starts with how the turn ended."
          ]
        },
        {
          "key": "c-evidence",
          "label": "2 · with evidence",
          "steps": [
            "Then comes the evidence: the files it read, what it searched, the commands it ran, what it found and the exact output."
          ]
        },
        {
          "key": "c-checked",
          "label": "3 · checked by rule",
          "steps": [
            "The form says how the work was checked and what is still open; Gaia's engine checks it by rule, the orchestrator reads it, and a verifier tests it from the evidence alone."
          ]
        },
        {
          "key": "c-updates",
          "label": "4 · it updates the project",
          "steps": [
            "A report can update the project contract, organized in sections, and each agent may only write the sections of its field."
          ]
        },
        {
          "key": "c-kept",
          "label": "5 · kept for audit",
          "steps": [
            "And every contract is kept, so months later you can still see who did what, how it was checked, and what it was based on."
          ]
        }
      ],
      "sections": [
        {
          "id": "gaia",
          "title": "GAIA",
          "treatment": [
            "envelope"
          ],
          "order": 1,
          "span": 1,
          "columns": 1,
          "children": [
            {
              "id": "p6-kinds",
              "treatment": [
                "plain"
              ],
              "order": 1,
              "span": 1,
              "columns": 3,
              "children": [
                {
                  "id": "p6-agent-contract",
                  "title": "Agent contract",
                  "subtitle": "one per turn",
                  "treatment": [
                    "envelope",
                    "compact"
                  ],
                  "order": 1,
                  "span": 1,
                  "columns": 1,
                  "children": [
                    {
                      "id": "ac-status",
                      "type": "rail",
                      "order": 1,
                      "indent": 1,
                      "title": "how it ended",
                      "filters": [
                        "c-reports"
                      ]
                    },
                    {
                      "id": "ac-complete",
                      "type": "rail",
                      "order": 2,
                      "indent": 2,
                      "title": "done",
                      "filters": [
                        "c-reports"
                      ]
                    },
                    {
                      "id": "ac-needs-verification",
                      "type": "rail",
                      "order": 3,
                      "indent": 2,
                      "title": "needs a check",
                      "filters": [
                        "c-reports"
                      ]
                    },
                    {
                      "id": "ac-approval-request",
                      "type": "rail",
                      "order": 4,
                      "indent": 2,
                      "title": "needs your approval",
                      "filters": [
                        "c-reports"
                      ]
                    },
                    {
                      "id": "ac-needs-input",
                      "type": "rail",
                      "order": 5,
                      "indent": 2,
                      "title": "needs an answer",
                      "filters": [
                        "c-reports"
                      ]
                    },
                    {
                      "id": "ac-blocked",
                      "type": "rail",
                      "order": 6,
                      "indent": 2,
                      "title": "blocked",
                      "filters": [
                        "c-reports"
                      ]
                    },
                    {
                      "id": "ac-in-progress",
                      "type": "rail",
                      "order": 7,
                      "indent": 2,
                      "title": "still working",
                      "filters": [
                        "c-reports"
                      ]
                    },
                    {
                      "id": "ac-evidence",
                      "type": "rail",
                      "order": 8,
                      "indent": 1,
                      "title": "evidence",
                      "filters": [
                        "c-evidence",
                        "c-kept"
                      ]
                    },
                    {
                      "id": "ac-files",
                      "type": "rail",
                      "order": 9,
                      "indent": 2,
                      "title": "files it read",
                      "filters": [
                        "c-evidence"
                      ]
                    },
                    {
                      "id": "ac-patterns",
                      "type": "rail",
                      "order": 10,
                      "indent": 2,
                      "title": "what it searched",
                      "filters": [
                        "c-evidence"
                      ]
                    },
                    {
                      "id": "ac-commands",
                      "type": "rail",
                      "order": 11,
                      "indent": 2,
                      "title": "commands it ran",
                      "filters": [
                        "c-evidence"
                      ]
                    },
                    {
                      "id": "ac-key-outputs",
                      "type": "rail",
                      "order": 12,
                      "indent": 2,
                      "title": "what it found",
                      "filters": [
                        "c-evidence"
                      ]
                    },
                    {
                      "id": "ac-verbatim",
                      "type": "rail",
                      "order": 13,
                      "indent": 2,
                      "title": "exact output",
                      "filters": [
                        "c-evidence"
                      ]
                    },
                    {
                      "id": "ac-verification",
                      "type": "rail",
                      "order": 14,
                      "indent": 1,
                      "title": "how it was checked",
                      "filters": [
                        "c-checked",
                        "c-kept"
                      ]
                    },
                    {
                      "id": "ac-gaps",
                      "type": "rail",
                      "order": 15,
                      "indent": 1,
                      "title": "what is still open",
                      "filters": [
                        "c-checked"
                      ]
                    },
                    {
                      "id": "ac-reach",
                      "type": "rail",
                      "order": 16,
                      "indent": 1,
                      "title": "what else it touched",
                      "filters": [
                        "c-checked"
                      ]
                    },
                    {
                      "id": "ac-approval",
                      "type": "rail",
                      "order": 17,
                      "indent": 1,
                      "title": "the command to approve",
                      "filters": [
                        "c-checked"
                      ]
                    },
                    {
                      "id": "ac-updates",
                      "type": "rail",
                      "order": 18,
                      "indent": 1,
                      "title": "updates to the project",
                      "filters": [
                        "c-updates"
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
                  "id": "p6-project",
                  "title": "Project contract",
                  "subtitle": "one per workspace, by sections",
                  "treatment": [
                    "envelope",
                    "compact"
                  ],
                  "order": 2,
                  "span": 1,
                  "columns": 1,
                  "children": [
                    {
                      "id": "pc-identity",
                      "type": "rail",
                      "order": 1,
                      "indent": 1,
                      "title": "identity",
                      "filters": [
                        "c-updates"
                      ]
                    },
                    {
                      "id": "pc-name",
                      "type": "rail",
                      "order": 2,
                      "indent": 2,
                      "title": "name",
                      "filters": [
                        "c-updates"
                      ]
                    },
                    {
                      "id": "pc-path",
                      "type": "rail",
                      "order": 3,
                      "indent": 2,
                      "title": "path",
                      "filters": [
                        "c-updates"
                      ]
                    },
                    {
                      "id": "pc-repository",
                      "type": "rail",
                      "order": 4,
                      "indent": 2,
                      "title": "repository",
                      "filters": [
                        "c-updates"
                      ]
                    },
                    {
                      "id": "pc-language",
                      "type": "rail",
                      "order": 5,
                      "indent": 2,
                      "title": "language",
                      "filters": [
                        "c-updates"
                      ]
                    },
                    {
                      "id": "pc-type",
                      "type": "rail",
                      "order": 6,
                      "indent": 2,
                      "title": "type",
                      "filters": [
                        "c-updates"
                      ]
                    },
                    {
                      "id": "pc-stack",
                      "type": "rail",
                      "order": 7,
                      "indent": 1,
                      "title": "stack",
                      "filters": [
                        "c-updates"
                      ]
                    },
                    {
                      "id": "pc-languages",
                      "type": "rail",
                      "order": 8,
                      "indent": 2,
                      "title": "languages",
                      "filters": [
                        "c-updates"
                      ]
                    },
                    {
                      "id": "pc-frameworks",
                      "type": "rail",
                      "order": 9,
                      "indent": 2,
                      "title": "frameworks",
                      "filters": [
                        "c-updates"
                      ]
                    },
                    {
                      "id": "pc-build-tools",
                      "type": "rail",
                      "order": 10,
                      "indent": 2,
                      "title": "build tools",
                      "filters": [
                        "c-updates"
                      ]
                    },
                    {
                      "id": "pc-git",
                      "type": "rail",
                      "order": 11,
                      "indent": 1,
                      "title": "git",
                      "filters": [
                        "c-updates"
                      ]
                    },
                    {
                      "id": "pc-remotes",
                      "type": "rail",
                      "order": 12,
                      "indent": 2,
                      "title": "remotes",
                      "filters": [
                        "c-updates"
                      ]
                    },
                    {
                      "id": "pc-default-branch",
                      "type": "rail",
                      "order": 13,
                      "indent": 2,
                      "title": "default branch",
                      "filters": [
                        "c-updates"
                      ]
                    },
                    {
                      "id": "pc-branch-strategy",
                      "type": "rail",
                      "order": 14,
                      "indent": 2,
                      "title": "branch strategy",
                      "filters": [
                        "c-updates"
                      ]
                    },
                    {
                      "id": "pc-more",
                      "type": "rail",
                      "order": 15,
                      "indent": 1,
                      "title": "… and 10 more sections",
                      "filters": [
                        "c-updates"
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
                  "id": "p6-users",
                  "title": "Who uses it",
                  "subtitle": "four readers, in order",
                  "treatment": [
                    "envelope"
                  ],
                  "tokens": {
                    "row": {
                      "cell_h": 160
                    }
                  },
                  "order": 3,
                  "span": 1,
                  "columns": 1,
                  "children": [
                    {
                      "id": "p6-validates",
                      "order": 1,
                      "kicker": "VALIDATION",
                      "title": "1 · The engine checks it",
                      "description": [
                        "by rule, never the reply text"
                      ],
                      "detail": "When the turn ends, a hook (SubagentStop) reads the stored contract and checks it by rule. A missing or unfinished one sends the specialist back, and only 'done' is final. Real field names: status, evidence (files_checked, patterns_checked, commands_run, key_outputs, verbatim_outputs), verification, open gaps, reach (cross_layer_impacts), approval, update_contracts.",
                      "filters": [
                        "c-checked"
                      ]
                    },
                    {
                      "id": "p6-reads",
                      "order": 2,
                      "title": "2 · The orchestrator reads it",
                      "description": [
                        "and decides the next step"
                      ],
                      "detail": "It reads the stored contract, not the message, checks what it claims against what it can open itself, and takes the next step from the status: tell you, send a verifier, show you a command, ask you, or resume the turn.",
                      "filters": [
                        "c-reports",
                        "c-checked"
                      ]
                    },
                    {
                      "id": "p6-verifier",
                      "order": 3,
                      "title": "3 · The verifier tests it",
                      "description": [
                        "from the evidence alone"
                      ],
                      "detail": "A separate agent re-runs the checks from the evidence, without the context of the agent that did the work.",
                      "filters": [
                        "c-evidence",
                        "c-checked"
                      ]
                    },
                    {
                      "id": "p6-kept",
                      "order": 4,
                      "title": "4 · It is kept",
                      "description": [
                        "for the audit trail"
                      ],
                      "detail": "Every contract is stored and can be searched later. Each update to the project was checked against what that agent may write before it was saved. Real section names: project_identity, stack, environment, git, architecture_overview, workspace_repos, application_services, infrastructure, infrastructure_topology, gitops_configuration, cluster_details, operational_guidelines, releases. Each section is a small document of fields: some are filled by the scan, others by the agents allowed to write that section.",
                      "filters": [
                        "c-kept"
                      ]
                    }
                  ],
                  "css_vars": {
                    "--cell-h": "160px"
                  }
                }
              ]
            },
            {
              "id": "prompt",
              "treatment": [
                "plain",
                "compact"
              ],
              "tokens": {
                "row": {
                  "cell_h": 60
                }
              },
              "order": 2,
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "p6-prompt",
                  "order": 1,
                  "variant": "accent",
                  "kicker": "PROMPT",
                  "title": "How do your agents report back?",
                  "filters": [
                    "c-reports"
                  ]
                }
              ],
              "css_vars": {
                "--cell-h": "60px"
              }
            }
          ]
        }
      ],
      "name": "5 · Contracts",
      "order": 4
    },
    {
      "id": "p9-back-to-the-map",
      "layout": "grid",
      "form": "comparison",
      "columns": 1,
      "filters": [
        {
          "key": "install",
          "label": "1 · install",
          "steps": [
            "Install Gaia in Claude Code with one plugin, or with npm for Claude Code or OpenCode."
          ]
        },
        {
          "key": "first-question",
          "label": "2 · first question",
          "steps": [
            "Then you just ask, in your own words: what is Gaia? It explains itself, with everything you just saw."
          ]
        },
        {
          "key": "it-grows",
          "label": "3 · it grows",
          "steps": [
            "From there it grows with you: it maps your repositories, finds the project and the right specialist, and plans and delegates bigger work."
          ]
        },
        {
          "key": "it-is-yours",
          "label": "4 · it is yours",
          "steps": [
            "Everything Gaia learns lives in one database on your machine, the code is open source, and one install reaches all your projects in Claude Code and OpenCode."
          ]
        },
        {
          "key": "people-ask",
          "label": "5 · what people ask",
          "steps": [
            "And the questions people ask first have short answers."
          ]
        }
      ],
      "sections": [
        {
          "id": "p9-start",
          "title": "Start here",
          "subtitle": "two ways to install · use one per workspace",
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
                    "install"
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
                    "install"
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
                    "install"
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
                    "install"
                  ],
                  "detail": "Claude Code's own command: <code>/plugin uninstall</code> opens the plugin panel on the uninstall action; from a shell, <code>claude plugin uninstall gaia@gaia-marketplace</code> with <code>--scope</code> for the scope you installed at. Source: Claude Code's plugin documentation. Gaia's database lives outside the plugin, in <code>~/.gaia/</code>, so removing the plugin does not remove it.",
                  "variant": "muted"
                }
              ]
            },
            {
              "id": "p9-route-npm",
              "title": "With npm",
              "subtitle": "for Claude Code or OpenCode",
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
                    "install"
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
                  "title": "gaia install --channel npm",
                  "copy": true,
                  "filters": [
                    "install"
                  ],
                  "detail": "<code>gaia install --channel npm</code> wires Claude Code; <code>--channel opencode</code> wires OpenCode. Use one route per Claude Code workspace: the plugin and the package both register Gaia's hooks. <code>gaia doctor</code> checks the result."
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
                    "install"
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
                    "install"
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
                  "kicker": "YOUR TURN",
                  "title": "So, what could Gaia do for you?",
                  "description": [
                    "ask it — it will tell you"
                  ],
                  "detail": "Ask Gaia in plain words, on either route. It explains itself, and what it can do in your projects.",
                  "variant": "accent",
                  "treatment": [
                    "centered"
                  ],
                  "filters": [
                    "first-question"
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
                  "title": "Your data stays yours",
                  "description": [
                    "one database on your machine: ~/.gaia/gaia.db",
                    "uninstalling never deletes it"
                  ],
                  "detail": "Plugin or npm, one project or many, Gaia reads and writes one local database: <code>~/.gaia/gaia.db</code>, the default of <code>data_dir()</code> in <code>gaia/paths/resolver.py</code> (moved only if you set <code>GAIA_DATA_DIR</code> or <code>GAIA_DB</code>). Memory, contracts, plans and approvals all live there, on your machine. <code>gaia uninstall</code> never deletes it: <i>there is no flag that removes it</i>.",
                  "variant": "good",
                  "filters": [
                    "it-is-yours"
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
                    "it-is-yours"
                  ]
                }
              ]
            },
            {
              "id": "p9-everywhere",
              "treatment": [
                "plain"
              ],
              "order": 2,
              "span": 2,
              "columns": 2,
              "children": [
                {
                  "id": "p9-hosts",
                  "order": 1,
                  "title": "Two hosts, one Gaia",
                  "description": [
                    "Claude Code and OpenCode"
                  ],
                  "detail": "Gaia runs as a plugin in Claude Code and as a package in OpenCode. The agents, the skills and the database are the same.",
                  "filters": [
                    "it-is-yours"
                  ]
                },
                {
                  "id": "p9-reach",
                  "order": 2,
                  "title": "All your projects",
                  "description": [
                    "one install reaches them all"
                  ],
                  "detail": "All your projects share one database. The first session maps the repositories in the folder, and more folders can be added with <code>gaia scan</code>.",
                  "filters": [
                    "it-is-yours"
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
                    "it-grows"
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
                    "it-grows"
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
                  "kicker": "GAIA",
                  "title": "it maps your repos",
                  "description": [
                    "on the first session, by itself"
                  ],
                  "detail": "On the first session Gaia scans the folder's git repositories in the background and records each one, reading only what it can, with no guessing. More folders can be added with <code>gaia scan</code>.",
                  "filters": [
                    "it-grows"
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
                    "first-question"
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
                    "install"
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
                    "first-question",
                    "people-ask"
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
                    "it-grows",
                    "people-ask"
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
                    "it-grows",
                    "people-ask"
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
                    "it-grows",
                    "people-ask"
                  ]
                },
                {
                  "id": "p9-obj-safe",
                  "order": 5,
                  "treatment": [
                    "half"
                  ],
                  "kicker": "“Is it safe?”",
                  "title": "Reads run. Changes wait for you.",
                  "detail": "A rule sorts every command before it runs: reads, checks and dry-runs go ahead; a change stops until you approve that exact command; a few commands never run at all.",
                  "filters": [
                    "people-ask"
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
                    "it-is-yours",
                    "people-ask"
                  ]
                }
              ]
            }
          ]
        }
      ],
      "name": "6 · Install it, ask it",
      "order": 5
    }
  ]
};
if (typeof document !== 'undefined' && document.documentElement)
  document.documentElement.setAttribute('data-palette', window.__DOC__.palette || 'neutral');
