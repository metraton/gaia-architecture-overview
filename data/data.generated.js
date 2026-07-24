// GENERATED FILE — do not edit by hand.
// Produced by build-data.mjs from data/document.yaml + data/pages/*.yaml.
window.__DOC__ = {
  "title": "GAIA",
  "subtitle": "Generative AI Architecture",
  "version": "0.1.0",
  "pages": [
    {
      "id": "s0-vision",
      "layout": "grid",
      "form": "dashboard",
      "columns": 2,
      "sections": [
        {
          "id": "shared",
          "title": "A shared way of working",
          "variant": "safe",
          "order": 1,
          "span": 2,
          "columns": 3,
          "children": [
            {
              "id": "sh-flujos",
              "status": "SHARED",
              "title": "Same flows",
              "description": [
                "the same way to move work forward"
              ],
              "variant": "ok"
            },
            {
              "id": "sh-tools",
              "status": "SHARED",
              "title": "Same tools",
              "description": [
                "the same instruments for everyone"
              ],
              "variant": "ok"
            },
            {
              "id": "sh-skills",
              "status": "SHARED",
              "title": "Same skills",
              "description": [
                "the same techniques, loaded on demand"
              ],
              "variant": "ok"
            }
          ]
        },
        {
          "id": "contrast",
          "variant": "plain",
          "order": 2,
          "span": 2,
          "columns": 2,
          "children": [
            {
              "id": "flujos",
              "title": "Workflows",
              "subtitle": "what matters",
              "variant": "normal",
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "f-state",
                  "status": "STATES",
                  "title": "State Machine",
                  "description": [
                    "legal turn states; no one self-declares \"done\""
                  ],
                  "detail": "The state machine lives in <code>hooks/modules/agents/state_tracker.py</code>: <code>_LEGAL_TRANSITIONS</code> defines the valid transitions, with a cap of 2 retries. <code>NEEDS_VERIFICATION</code> can only be promoted by a blind verifier — no one self-declares \"done\".",
                  "variant": "strong"
                },
                {
                  "id": "f-security",
                  "status": "SECURITY",
                  "title": "Security Tiers + Approvals",
                  "description": [
                    "classifies T0-T3 and asks for your consent before mutating"
                  ],
                  "detail": "Every operation is classified T0-T3 in <code>hooks/modules/security/tiers.py</code>; a T3 mutation requires your explicit consent, managed by <code>approval_grants.py</code>, before it runs.",
                  "variant": "strong"
                },
                {
                  "id": "f-routing",
                  "status": "ROUTING",
                  "title": "Surface Routing",
                  "description": [
                    "maps intent to the right agent"
                  ],
                  "detail": "The router maps the prompt's intent to the surface and the specialist who owns it. Per-surface scoring lives in <code>tools/context/surface_router.py</code> (<code>_score_surface</code>).",
                  "variant": "strong"
                },
                {
                  "id": "f-planning",
                  "status": "PLANNING",
                  "title": "Planning",
                  "description": [
                    "breaks down and persists the work beyond the turn"
                  ],
                  "detail": "Work is broken down and persisted outside the turn: <code>gaia/state/transitions.py</code> and the <code>task_gates</code> table, where each gate carries a <code>verification_type</code> from the enum <code>command | code | semantic | self_review</code>.",
                  "variant": "strong"
                },
                {
                  "id": "f-verify",
                  "status": "VERIFY",
                  "title": "Verification",
                  "description": [
                    "independent verification — no one validates their own work"
                  ],
                  "detail": "Every gate in <code>task_gates</code> carries a <code>verification_type</code> from the enum <code>command | code | semantic | self_review</code>. The gate is bound to the <code>plan_task_id</code>, not the role (<code>_blind_verification_required</code>).",
                  "variant": "strong"
                }
              ]
            },
            {
              "id": "tools",
              "title": "Tools · it does not matter",
              "subtitle": "interchangeable",
              "variant": "envelope",
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "t-claude",
                  "title": "Claude Code",
                  "variant": "ext"
                },
                {
                  "id": "t-codex",
                  "title": "Codex",
                  "variant": "ext"
                },
                {
                  "id": "t-cursor",
                  "title": "Cursor",
                  "variant": "ext"
                },
                {
                  "id": "t-opencode",
                  "title": "OpenCode",
                  "variant": "ext"
                },
                {
                  "id": "t-aider",
                  "title": "Aider",
                  "variant": "ext"
                }
              ]
            }
          ]
        },
        {
          "id": "payoff",
          "variant": "plain",
          "order": 3,
          "span": 2,
          "columns": 1,
          "children": [
            {
              "id": "p-line",
              "type": "separator",
              "style": "dotted",
              "span": 1,
              "text": "more and better products · safer and more robust"
            }
          ]
        }
      ],
      "name": "0 · The vision",
      "order": 1
    },
    {
      "id": "s1-visibilidad",
      "layout": "grid",
      "form": "dashboard",
      "columns": 3,
      "filters": [
        {
          "key": "pc-flow",
          "label": "the cycle",
          "steps": [
            "project context is a contract per agent: it is injected at dispatch and updated at close"
          ]
        },
        {
          "key": "audit-flow",
          "label": "the trail",
          "steps": [
            "three immutable trails: approvals, history, handoffs"
          ]
        },
        {
          "key": "mem-flow",
          "label": "horizons",
          "steps": [
            "three classes of memory: anchor, thread, log"
          ]
        },
        {
          "key": "cierre",
          "label": "turn close",
          "steps": [
            "at turn close these are written in order: context, audit, and memory"
          ]
        },
        {
          "key": "apertura",
          "label": "what gets read at open",
          "steps": [
            "at session open: context is injected at dispatch and durable and short-term memory reappear"
          ]
        }
      ],
      "sections": [
        {
          "id": "harness",
          "title": "A harness gives visibility",
          "subtitle": "of the team · of the sprint · of the goals",
          "variant": "safe",
          "order": 1,
          "span": 3,
          "columns": 3,
          "children": [
            {
              "id": "h-ideas",
              "status": "= BRIEFS",
              "title": "Ideas",
              "description": [
                "the captured idea —",
                "the requirement, turned into a persistent unit"
              ],
              "detail": "Ideas are captured as <b>briefs</b>: the requirement stops being a loose chat message and becomes a unit that persists outside the session. Anchor: <code>bin/cli/brief.py</code>.",
              "variant": "strong"
            },
            {
              "id": "h-criterios",
              "status": "= ACs / GOALS",
              "title": "Criteria",
              "description": [
                "what defines \"done\" —",
                "the brief's acceptance criteria"
              ],
              "detail": "The criteria are the brief's <b>acceptance criteria</b>: they define what counts as \"done\". Each AC has its own lifecycle (pending → done, with blocked and descoped). Anchor: <code>gaia/state/transitions.py</code> (AC lifecycle).",
              "variant": "strong"
            },
            {
              "id": "h-tareas",
              "status": "= THE PLAN",
              "title": "Tasks",
              "description": [
                "the broken-down plan —",
                "the idea comes down to verifiable steps"
              ],
              "detail": "Tasks are the broken-down <b>plan</b>: the idea comes down to concrete, verifiable steps that persist in the database. Anchors: <code>bin/cli/plan.py</code>, <code>bin/cli/task.py</code>.",
              "variant": "strong"
            }
          ]
        },
        {
          "id": "compartido",
          "title": "What makes it shared",
          "subtitle": "it is not your board: it belongs to everyone",
          "variant": "envelope",
          "order": 2,
          "span": 3,
          "columns": 3,
          "children": [
            {
              "id": "pc",
              "title": "Project Context",
              "subtitle": "a contract per agent — injected at dispatch, updated at close",
              "variant": "envelope",
              "span": 3,
              "columns": 3,
              "children": [
                {
                  "id": "pc-read",
                  "order": 1,
                  "status": "project_context_contracts",
                  "title": "Contracts per agent",
                  "description": "project context is a contract per agent",
                  "variant": "strong",
                  "filters": [
                    "pc-flow"
                  ]
                },
                {
                  "id": "pc-inject",
                  "order": 2,
                  "status": "build_project_context",
                  "title": "Injected at dispatch",
                  "description": "at startup, the subagent receives its contract",
                  "filters": [
                    "pc-flow",
                    "apertura"
                  ]
                },
                {
                  "id": "pc-write",
                  "order": 3,
                  "status": "update_contracts",
                  "title": "Updated at close",
                  "description": "the subagent writes its update at close",
                  "variant": "strong",
                  "filters": [
                    "pc-flow",
                    "cierre"
                  ]
                }
              ]
            },
            {
              "id": "comp2",
              "variant": "plain",
              "span": 3,
              "columns": 2,
              "children": [
                {
                  "id": "audit",
                  "title": "Audit",
                  "subtitle": "three trails, all immutable",
                  "variant": "envelope",
                  "span": 1,
                  "columns": 1,
                  "children": [
                    {
                      "id": "au-aprob",
                      "order": 1,
                      "status": "approval_events",
                      "title": "Approvals of mutative runs",
                      "description": "every approved T3 as an event — single and batch (command_set)",
                      "variant": "strong",
                      "filters": [
                        "audit-flow"
                      ]
                    },
                    {
                      "id": "au-hist",
                      "order": 2,
                      "status": "*_history",
                      "title": "Immutable history",
                      "description": "context, memory, and project, append-only: never deleted",
                      "filters": [
                        "audit-flow"
                      ]
                    },
                    {
                      "id": "au-handoff",
                      "order": 3,
                      "status": "agent_contract_handoff",
                      "title": "Handoff log",
                      "description": "every handoff persisted at turn close",
                      "variant": "strong",
                      "filters": [
                        "audit-flow",
                        "cierre"
                      ]
                    }
                  ]
                },
                {
                  "id": "mem",
                  "title": "Memory",
                  "subtitle": "three horizons — read at open, written at close",
                  "variant": "envelope",
                  "span": 1,
                  "columns": 1,
                  "children": [
                    {
                      "id": "mem-durable",
                      "order": 1,
                      "status": "anchor",
                      "title": "Durable",
                      "description": "stable knowledge, across sessions and per project",
                      "filters": [
                        "mem-flow",
                        "apertura"
                      ]
                    },
                    {
                      "id": "mem-corto",
                      "order": 2,
                      "status": "thread",
                      "title": "Short-term",
                      "description": "pending items for later sessions: a saved state",
                      "filters": [
                        "mem-flow",
                        "apertura"
                      ]
                    },
                    {
                      "id": "mem-log",
                      "order": 3,
                      "status": "log",
                      "title": "Episodic",
                      "description": "the turn's episodes, deterministic: visible in the metrics",
                      "variant": "strong",
                      "filters": [
                        "mem-flow",
                        "cierre"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "name": "1 · Visibility",
      "order": 2
    },
    {
      "id": "s2-estandares",
      "layout": "grid",
      "form": "dashboard",
      "columns": 3,
      "filters": [
        {
          "key": "a-demanda",
          "label": "loaded by description",
          "steps": [
            "Each skill loads when its description matches the intent — not all at once, but on demand."
          ]
        },
        {
          "key": "protocolos",
          "label": "governed by protocols",
          "steps": [
            "Contract, Workflow, and Scope/Delegation in the agent's identity, plus the Protocols category in Skills, share the same axis: they are governed by protocols."
          ]
        },
        {
          "key": "crea-identidad",
          "label": "creation → identity",
          "steps": [
            "the creation template produces the agent's identity: Agent template, in the Creation category, is what gives rise to the six components of Agent Identity."
          ]
        }
      ],
      "sections": [
        {
          "id": "identidad",
          "title": "Agent identity",
          "variant": "envelope",
          "order": 1,
          "span": 3,
          "columns": 6,
          "children": [
            {
              "id": "id-contrato",
              "title": "Contract",
              "description": [
                "what it can read and write"
              ],
              "variant": "ok",
              "filters": [
                "protocolos",
                "crea-identidad"
              ]
            },
            {
              "id": "id-frontmatter",
              "title": "Frontmatter",
              "description": [
                "declares routing, permissions, and surface"
              ],
              "variant": "ok",
              "filters": [
                "crea-identidad"
              ]
            },
            {
              "id": "id-identidad",
              "title": "Identity",
              "description": [
                "its essence and its own subset"
              ],
              "variant": "ok",
              "filters": [
                "crea-identidad"
              ]
            },
            {
              "id": "id-workflow",
              "title": "Workflow",
              "description": [
                "the steps to produce its work"
              ],
              "variant": "ok",
              "filters": [
                "protocolos",
                "crea-identidad"
              ]
            },
            {
              "id": "id-scope",
              "title": "Scope / Delegation",
              "description": [
                "what it does and what it delegates to others"
              ],
              "variant": "ok",
              "filters": [
                "protocolos",
                "crea-identidad"
              ]
            },
            {
              "id": "id-errors",
              "title": "Domain Errors",
              "description": [
                "how it handles failures in its domain"
              ],
              "variant": "ok",
              "filters": [
                "crea-identidad"
              ]
            }
          ]
        },
        {
          "id": "skills",
          "title": "Skills",
          "subtitle": "The standard is the output",
          "variant": "envelope",
          "order": 2,
          "span": 3,
          "columns": 6,
          "children": [
            {
              "id": "cat-protocolos",
              "title": "Protocols",
              "variant": "envelope",
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "pro-1",
                  "title": "Response",
                  "variant": "store",
                  "filters": [
                    "a-demanda",
                    "protocolos"
                  ]
                },
                {
                  "id": "pro-2",
                  "title": "Approval",
                  "variant": "store"
                },
                {
                  "id": "pro-3",
                  "title": "Execution",
                  "variant": "store"
                },
                {
                  "id": "pro-4",
                  "title": "Investigation",
                  "variant": "store"
                }
              ]
            },
            {
              "id": "cat-codigo",
              "title": "Code",
              "variant": "envelope",
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "cod-1",
                  "title": "Patterns",
                  "variant": "store",
                  "filters": [
                    "a-demanda"
                  ]
                },
                {
                  "id": "cod-2",
                  "title": "Naming",
                  "variant": "store"
                },
                {
                  "id": "cod-3",
                  "title": "Comments",
                  "variant": "store"
                },
                {
                  "id": "cod-4",
                  "title": "Error handling",
                  "variant": "store"
                }
              ]
            },
            {
              "id": "cat-conv",
              "title": "Conventions",
              "variant": "envelope",
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "conv-1",
                  "title": "Commits",
                  "variant": "store",
                  "filters": [
                    "a-demanda"
                  ]
                },
                {
                  "id": "conv-2",
                  "title": "Pull requests",
                  "variant": "store"
                },
                {
                  "id": "conv-3",
                  "title": "Branches",
                  "variant": "store"
                },
                {
                  "id": "conv-4",
                  "title": "Versioning",
                  "variant": "store"
                }
              ]
            },
            {
              "id": "cat-doc",
              "title": "Documentation",
              "variant": "envelope",
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "doc-1",
                  "title": "README",
                  "variant": "store",
                  "filters": [
                    "a-demanda"
                  ]
                },
                {
                  "id": "doc-2",
                  "title": "Wiki",
                  "variant": "store"
                },
                {
                  "id": "doc-3",
                  "title": "Reference",
                  "variant": "store"
                },
                {
                  "id": "doc-4",
                  "title": "Changelog",
                  "variant": "store"
                }
              ]
            },
            {
              "id": "cat-leng",
              "title": "Language",
              "variant": "envelope",
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "len-1",
                  "title": "Tickets",
                  "variant": "store",
                  "filters": [
                    "a-demanda"
                  ]
                },
                {
                  "id": "len-2",
                  "title": "Tone",
                  "variant": "store"
                },
                {
                  "id": "len-3",
                  "title": "Writing",
                  "variant": "store"
                }
              ]
            },
            {
              "id": "cat-crea",
              "title": "Creation",
              "variant": "envelope",
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "cre-1",
                  "title": "Skill template",
                  "variant": "store",
                  "filters": [
                    "a-demanda"
                  ]
                },
                {
                  "id": "cre-2",
                  "title": "Agent template",
                  "variant": "store",
                  "filters": [
                    "crea-identidad"
                  ]
                },
                {
                  "id": "cre-3",
                  "title": "Structure",
                  "variant": "store"
                },
                {
                  "id": "cre-4",
                  "title": "Triggers",
                  "variant": "store"
                }
              ]
            }
          ]
        }
      ],
      "name": "2 · Standards",
      "order": 3
    },
    {
      "id": "s3-auditable",
      "layout": "grid",
      "form": "timeline",
      "columns": 6,
      "filters": [
        {
          "key": "loop",
          "label": "the T3 cycle",
          "steps": [
            "A mutation (T3) is classified, decided, approved, executed, and audited — the human in the loop."
          ]
        },
        {
          "key": "cadena",
          "label": "immutable chain",
          "steps": [
            "The append-only nodes: REQUESTED (genesis) and EXECUTED/FAILED (close) — the hash chain no one rewrites."
          ]
        },
        {
          "key": "el-humano",
          "label": "the human",
          "steps": [
            "the human decides only where it matters: only the Approval step and its dialog light up — the rest of the cycle runs without them."
          ]
        }
      ],
      "sections": [
        {
          "id": "principio",
          "title": "The human decides only when something mutates or a live state changes",
          "variant": "envelope",
          "order": 1,
          "span": 6,
          "columns": 1,
          "children": [
            {
              "id": "ciclo",
              "title": "The T3 cycle",
              "subtitle": "click \"the T3 cycle\" to trace it",
              "variant": "envelope",
              "order": 1,
              "span": 1,
              "columns": 6,
              "children": [
                {
                  "id": "t-mutacion",
                  "order": 1,
                  "status": "command",
                  "title": "Mutation",
                  "description": [
                    "a command mutates state (e.g. git push)"
                  ],
                  "detail": "A command mutates live state — for example <code>git push</code>. It is the starting point of the cycle: something is about to change outside the session. Detected in <code>hooks/modules/security/mutative_verbs.py</code>.",
                  "filters": [
                    "loop"
                  ]
                },
                {
                  "id": "t-clasifica",
                  "order": 2,
                  "status": "tiers",
                  "title": "Classify",
                  "description": [
                    "the hook measures the command's risk (T0-T3)"
                  ],
                  "detail": "The hook measures the operation's risk and classifies it by tier: T0 read, T1 validation, T2 dry-run, T3 sensitive mutation. Anchor: <code>hooks/modules/security/tiers.py</code>.",
                  "filters": [
                    "loop"
                  ]
                },
                {
                  "id": "t-decision",
                  "order": 3,
                  "status": "REQUESTED",
                  "title": "Decision",
                  "description": [
                    "evaluates and breaks it down; if T3, emits REQUESTED"
                  ],
                  "detail": "The operation is evaluated and broken down; if it turns out to be T3 it is blocked and the <code>REQUESTED</code> event is emitted — the genesis of the chain. The fork by origin: a subagent receives <code>deny(approval_id)</code>; the orchestrator receives an <code>ask</code>.",
                  "variant": "strong",
                  "filters": [
                    "loop",
                    "cadena"
                  ]
                },
                {
                  "id": "t-aprueba",
                  "order": 4,
                  "status": "SHOWN · APPROVED",
                  "title": "Approval",
                  "description": [
                    "the human sees the exact values and decides"
                  ],
                  "detail": "The human sees the exact values of the operation (the sealed payload) and decides: <code>SHOWN</code> → <code>APPROVED</code>. The grant is single-use, with a short TTL.",
                  "filters": [
                    "loop",
                    "el-humano"
                  ]
                },
                {
                  "id": "t-ejecuta",
                  "order": 5,
                  "status": "EXECUTED",
                  "title": "Execution",
                  "description": [
                    "byte-for-byte retry; the single-use grant is consumed"
                  ],
                  "detail": "The command is retried byte-for-byte; the single-use grant is consumed when it matches the command's exact signature. The result is marked <code>EXECUTED</code>.",
                  "filters": [
                    "loop"
                  ]
                },
                {
                  "id": "t-audita",
                  "order": 6,
                  "status": "append-only",
                  "title": "Audit",
                  "description": [
                    "EXECUTED/FAILED in the immutable hash chain"
                  ],
                  "detail": "The outcome is recorded as <code>EXECUTED</code> or <code>FAILED</code> in the append-only hash chain — the immutable trail no one rewrites. Substrate: <code>approval_events</code>.",
                  "variant": "strong",
                  "filters": [
                    "loop",
                    "cadena"
                  ]
                }
              ]
            },
            {
              "id": "zoom",
              "variant": "plain",
              "order": 2,
              "span": 1,
              "columns": 2,
              "children": [
                {
                  "id": "clasifica",
                  "title": "Classify · the risk",
                  "subtitle": "the tier measures how much the command risks",
                  "variant": "envelope",
                  "span": 1,
                  "columns": 1,
                  "children": [
                    {
                      "id": "z-t0",
                      "status": "free",
                      "title": "T0 · read",
                      "description": [
                        "reads: run free"
                      ],
                      "detail": "T0 · read: observes state without changing anything (get, list, describe, status). Runs free, with no friction and no consent needed.",
                      "variant": "ok"
                    },
                    {
                      "id": "z-t1",
                      "status": "local",
                      "title": "T1 · validate",
                      "description": [
                        "local validation, never touches remote"
                      ],
                      "detail": "T1 · local validation: checks without remote calls or state changes (validate, lint, fmt, check). Needs no consent."
                    },
                    {
                      "id": "z-t2",
                      "status": "dry-run",
                      "title": "T2 · simulate",
                      "description": [
                        "dry-run: reads remote, never writes"
                      ],
                      "detail": "T2 · simulation / dry-run: may read remote state, but never writes (plan, diff, template). Needs no consent.",
                      "variant": "warn"
                    },
                    {
                      "id": "z-t3",
                      "status": "gate",
                      "title": "T3 · gate",
                      "description": [
                        "mutates: opens an approval gate"
                      ],
                      "detail": "T3 · sensitive or irreversible mutation: creates, updates, or destroys live state (apply, create, delete, push, deploy). Not a blind block: at the point of change it opens an approval GATE — it alerts that something is about to mutate and demands the human's consent; once approved, it proceeds.",
                      "variant": "crit"
                    }
                  ]
                },
                {
                  "id": "aprobacion",
                  "title": "Approval · the dialog",
                  "subtitle": "the human sees the exact values and decides",
                  "variant": "envelope",
                  "span": 1,
                  "columns": 1,
                  "children": [
                    {
                      "id": "ap-campos",
                      "variant": "plain",
                      "span": 1,
                      "columns": 1,
                      "children": [
                        {
                          "id": "ap-op",
                          "title": "Operation",
                          "description": [
                            "what is about to run"
                          ],
                          "detail": "<code>operation</code> — the named operation that is about to run.",
                          "variant": "store",
                          "filters": [
                            "el-humano"
                          ]
                        },
                        {
                          "id": "ap-content",
                          "title": "exact_content",
                          "description": [
                            "the command's exact bytes"
                          ],
                          "detail": "<code>exact_content</code> — the exact, byte-for-byte content that will run. What gets approved is what runs: no surprises.",
                          "variant": "store",
                          "filters": [
                            "el-humano"
                          ]
                        },
                        {
                          "id": "ap-scope",
                          "title": "scope · risk · rollback",
                          "description": [
                            "scope, tier, and how to roll back"
                          ],
                          "detail": "<code>scope</code>, <code>risk_level</code>, and <code>rollback_hint</code> — the operation's scope, its risk tier, and the hint for rolling it back.",
                          "variant": "store",
                          "filters": [
                            "el-humano"
                          ]
                        }
                      ]
                    },
                    {
                      "id": "ap-decision",
                      "variant": "plain",
                      "span": 1,
                      "columns": 2,
                      "children": [
                        {
                          "id": "ap-approve",
                          "status": "yes",
                          "title": "Approve",
                          "description": [
                            "consents: it runs"
                          ],
                          "detail": "The human consents: the grant is issued and the command runs byte-for-byte.",
                          "variant": "ok",
                          "span": 1,
                          "filters": [
                            "el-humano"
                          ]
                        },
                        {
                          "id": "ap-reject",
                          "status": "no",
                          "title": "Reject",
                          "description": [
                            "rejects: nothing happens"
                          ],
                          "detail": "The human rejects: no grant is issued and the mutation does not happen.",
                          "variant": "crit",
                          "span": 1,
                          "filters": [
                            "el-humano"
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "name": "3 · Human in the loop",
      "order": 4
    },
    {
      "id": "s4-esto-es-gaia",
      "layout": "grid",
      "form": "flow",
      "columns": 4,
      "filters": [
        {
          "key": "f-idea",
          "label": "expose the idea",
          "steps": [
            "Exposing the idea produces the Brief. The orchestrator receives it and delegates; gaia-operator persists it as a unit outside the session."
          ]
        },
        {
          "key": "f-plan",
          "label": "plan",
          "steps": [
            "Planning brings the idea down to steps: gaia-planner explores the Brief and generates the Plan of verifiable tasks."
          ]
        },
        {
          "key": "f-ejecuta",
          "label": "execute",
          "steps": [
            "Executing turns the Plan into Tasks: developer, platform-architect, gitops-operator, cloud-troubleshooter, and gaia-system act, each owning its surface."
          ]
        },
        {
          "key": "f-verifica",
          "label": "verify",
          "steps": [
            "Verifying closes each task at its Gate: gaia-verifier confirms under blind verification — the gate is bound to the task, not the role, so no one validates their own work."
          ]
        }
      ],
      "sections": [
        {
          "id": "hero",
          "variant": "plain",
          "order": 1,
          "span": 4,
          "columns": 1,
          "children": [
            {
              "id": "s4-name",
              "title": "GAIA — Generative AI Architecture",
              "variant": "strong",
              "variant_extra": [
                "centered"
              ]
            }
          ]
        },
        {
          "id": "recorrido",
          "title": "The natural-language journey",
          "subtitle": "click \"from idea to task\"",
          "variant": "envelope",
          "order": 2,
          "span": 4,
          "columns": 4,
          "children": [
            {
              "id": "r-brief",
              "order": 1,
              "status": "expose an idea",
              "title": "Brief",
              "description": [
                "the requirement, turned into a persistent unit"
              ],
              "detail": "A <b>brief</b> captures the idea expressed in natural language: the requirement stops being a loose message and becomes a unit that persists outside the session.",
              "filters": [
                "f-idea"
              ]
            },
            {
              "id": "r-plan",
              "order": 2,
              "status": "explore → generate a plan",
              "title": "Plan",
              "description": [
                "the explored idea comes down to steps"
              ],
              "detail": "The idea is explored and a <b>plan</b> is generated: the breakdown of the requirement into concrete, verifiable tasks.",
              "filters": [
                "f-plan"
              ]
            },
            {
              "id": "r-tareas",
              "order": 3,
              "status": "execute",
              "title": "Tasks",
              "description": [
                "verifiable steps that persist"
              ],
              "detail": "<b>Tasks</b> are the executed plan: concrete steps that persist in the database and survive the session closing.",
              "filters": [
                "f-ejecuta"
              ]
            },
            {
              "id": "r-gates",
              "order": 4,
              "status": "verify",
              "title": "Gates",
              "description": [
                "every task carries its gate"
              ],
              "detail": "Every task carries a verification <b>gate</b> (<code>task_gates</code>). The gate is bound to the <code>plan_task_id</code>, not the role: that is why whoever produces the work does not validate it.",
              "variant": "strong",
              "filters": [
                "f-verifica"
              ]
            }
          ]
        },
        {
          "id": "motor",
          "title": "Who runs it",
          "variant": "envelope",
          "order": 3,
          "span": 4,
          "columns": 1,
          "children": [
            {
              "id": "orq-wrap",
              "variant": "plain",
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "s4-orq",
                  "title": "Orchestrator",
                  "description": [
                    "an agent that only manages resources — delegation (surfacing), parallelization, pedagogy — with no execution tools"
                  ],
                  "detail": "The orchestrator is an agent that <b>only manages resources</b>: delegation (surfacing), task parallelization, and pedagogy. It carries no execution tools — that is why it calls the specialists for everything that mutates or produces.",
                  "variant": "strong",
                  "variant_extra": [
                    "centered"
                  ]
                }
              ]
            },
            {
              "id": "instancias",
              "title": "Agents",
              "subtitle": "9 specialists · you can create more",
              "variant": "envelope",
              "span": 1,
              "columns": 9,
              "children": [
                {
                  "id": "ag-orch",
                  "title": "orchestrator",
                  "variant": "store",
                  "filters": [
                    "f-idea"
                  ]
                },
                {
                  "id": "ag-op",
                  "title": "gaia-operator",
                  "variant": "store",
                  "filters": [
                    "f-idea"
                  ]
                },
                {
                  "id": "ag-plan",
                  "title": "gaia-planner",
                  "variant": "store",
                  "filters": [
                    "f-plan"
                  ]
                },
                {
                  "id": "ag-dev",
                  "title": "developer",
                  "variant": "store",
                  "filters": [
                    "f-ejecuta"
                  ]
                },
                {
                  "id": "ag-plat",
                  "title": "platform-architect",
                  "variant": "store",
                  "filters": [
                    "f-ejecuta"
                  ]
                },
                {
                  "id": "ag-git",
                  "title": "gitops-operator",
                  "variant": "store",
                  "filters": [
                    "f-ejecuta"
                  ]
                },
                {
                  "id": "ag-cloud",
                  "title": "cloud-troubleshooter",
                  "variant": "store",
                  "filters": [
                    "f-ejecuta"
                  ]
                },
                {
                  "id": "ag-sys",
                  "title": "gaia-system",
                  "variant": "store",
                  "filters": [
                    "f-ejecuta"
                  ]
                },
                {
                  "id": "ag-verif",
                  "title": "gaia-verifier",
                  "variant": "store",
                  "filters": [
                    "f-verifica"
                  ]
                }
              ]
            },
            {
              "id": "anatomia",
              "title": "Anatomy of an agent",
              "variant": "envelope",
              "span": 1,
              "columns": 5,
              "children": [
                {
                  "id": "an-tools",
                  "title": "Execution tools",
                  "variant": "store"
                },
                {
                  "id": "an-skills",
                  "title": "Skills",
                  "variant": "store"
                },
                {
                  "id": "an-identidad",
                  "title": "Identity",
                  "variant": "store"
                },
                {
                  "id": "an-contexto",
                  "title": "Injected context",
                  "variant": "store"
                },
                {
                  "id": "an-handoff",
                  "title": "Contract handoff",
                  "variant": "store"
                }
              ]
            }
          ]
        },
        {
          "id": "leyes",
          "title": "What makes it GAIA",
          "subtitle": "the laws that govern everything",
          "variant": "envelope",
          "order": 4,
          "span": 4,
          "columns": 4,
          "children": [
            {
              "id": "ley-contrato",
              "status": "shape",
              "title": "Contract",
              "description": [
                "the shape of the output"
              ],
              "detail": "The <b>contract</b> (agent_contract_handoff) fixes the shape of every agent's output: the same schema for everyone, so the orchestrator can route on what they return."
            },
            {
              "id": "ley-state",
              "status": "states",
              "title": "State Machine",
              "description": [
                "the turn's legal states"
              ],
              "detail": "The <b>state machine</b> defines the turn's legal transitions (INVESTIGATE → … → COMPLETE); the runtime blocks the illegal ones."
            },
            {
              "id": "ley-aprob",
              "status": "T3",
              "title": "Approvals (T3)",
              "description": [
                "human consent"
              ],
              "detail": "<b>T3 approvals</b> require the human's consent before executing any mutation of live state."
            },
            {
              "id": "ley-verif",
              "status": "blind",
              "title": "Blind verification",
              "description": [
                "no one validates their own work"
              ],
              "detail": "<b>Blind verification</b>: the gate is bound to the task, not the role, so whoever produces the work cannot promote their own work to COMPLETE — an independent verifier confirms it.",
              "variant": "strong",
              "filters": [
                "f-verifica"
              ]
            }
          ]
        }
      ],
      "name": "4 · This is GAIA",
      "order": 5
    }
  ]
};
