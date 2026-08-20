// GENERATED FILE — do not edit by hand.
// Produced by build-data.mjs from data/document.yaml + data/pages/*.yaml.
window.__DOC__ = {
  "title": "GAIA",
  "subtitle": "Generative AI Architecture",
  "version": "0.1.0",
  "palette": "neutral",
  "pages": [
    {
      "id": "s-arquitectura",
      "layout": "grid",
      "form": "dashboard",
      "columns": 6,
      "filters": [
        {
          "key": "sesion-abre",
          "label": "the session opens",
          "steps": [
            "SessionStart is the only hook that runs before anyone asks for anything: eight builder calls in fixed order (<code>build_session_context</code>) assemble everything the session starts knowing — the four thin lines on the left column.",
            "First the static setup: where Gaia is installed — workspace, machine, version, cwd — and the index of your projects, names only, because the index announces existence and <code>gaia context project</code> fetches the ficha. The pointer's width is reserved before any trim, so a truncated index can never lie about how many projects exist.",
            "Then the contracts index: which project-context sections each specialist surface will be handed at dispatch — surface to section names, straight from <code>surface_routing</code>.",
            "Then three zero-noise blocks that say nothing unless something ran without you: unread headless reports with a resumable <code>session_id</code>, detect-only schedule drift pointing at the T3 <code>gaia schedule sync</code>, and scheduler suspensions — the lapsed ones first and louder, because they do not clear themselves.",
            "Last, deliberately, the memory: the live worklist — open and carried-forward threads grouped by initiative, recency first, independent of where you stand — injected after the operational state, so the orchestrator reads what is live before the knowledge it anchors against."
          ]
        },
        {
          "key": "ruteo",
          "label": "where does this belong?",
          "steps": [
            "UserPromptSubmit reads the prompt and scores every surface to name the one that owns it — a recommendation, never a block."
          ]
        },
        {
          "key": "porton",
          "label": "the gate",
          "steps": [
            "Before any tool runs, PreToolUse asks two questions in order: may the orchestrator hold this tool at all, and does this command need your consent?"
          ]
        },
        {
          "key": "despacho",
          "label": "the dispatch",
          "steps": [
            "When the tool is a dispatch, PreToolUse builds the subagent's context, caches it, and opens the contract row that will later force a blind verification."
          ]
        },
        {
          "key": "entrega",
          "label": "the handover",
          "steps": [
            "SubagentStart is the first instant the agent exists: it receives the context PreToolUse cached for it, and its anchors are written down so the close can measure what it actually used."
          ]
        },
        {
          "key": "contabilidad",
          "label": "the bookkeeping",
          "steps": [
            "PostToolUse writes down what ran — three independent writers plus the seal on the approval chain — and Stop sweeps up the failed T3 commands PostToolUse never saw."
          ]
        },
        {
          "key": "el-juez",
          "label": "the judge",
          "steps": [
            "SubagentStop is the only other place the turn can stop: it parses the contract out of the text, judges it, measures the turn, and writes the episode."
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
          "span": 6,
          "columns": 10,
          "children": [
            {
              "id": "hdr-gaia",
              "type": "rail",
              "order": 1,
              "span": 10,
              "title": "GAIA · the orchestration layer"
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
                  "subtitle": "what I push at open, before anyone asks",
                  "treatment": [
                    "envelope"
                  ],
                  "order": 1,
                  "span": 1,
                  "columns": 1,
                  "children": [
                    {
                      "id": "sp-env",
                      "type": "separator",
                      "order": 1,
                      "span": 1,
                      "text": "I know my machine, your projects by name"
                    },
                    {
                      "id": "sp-contracts",
                      "type": "separator",
                      "order": 2,
                      "span": 1,
                      "text": "I know what each surface will be handed"
                    },
                    {
                      "id": "sp-notifs",
                      "type": "separator",
                      "order": 3,
                      "span": 1,
                      "text": "I speak only when things ran without you"
                    },
                    {
                      "id": "sp-worklist",
                      "type": "separator",
                      "order": 4,
                      "span": 1,
                      "text": "I carry your live worklist"
                    }
                  ]
                },
                {
                  "id": "ss-pull",
                  "title": "gaia · what I answer on demand",
                  "subtitle": "context project · memory show · approvals",
                  "treatment": [
                    "envelope"
                  ],
                  "order": 2,
                  "span": 1,
                  "columns": 1,
                  "children": [
                    {
                      "id": "pl-ficha",
                      "type": "separator",
                      "order": 1,
                      "span": 1,
                      "text": "ask me for a project's ficha"
                    },
                    {
                      "id": "pl-memory",
                      "type": "separator",
                      "order": 2,
                      "span": 1,
                      "text": "ask me what I remember"
                    },
                    {
                      "id": "pl-approvals",
                      "type": "separator",
                      "order": 3,
                      "span": 1,
                      "text": "ask me what waits for your signature"
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
                      "order": 1,
                      "rowspan": 2,
                      "treatment": [
                        "vertical"
                      ],
                      "kicker": "UserPromptSubmit",
                      "title": "USER PROMPT",
                      "detail": "The person types, and the turn begins. UserPromptSubmit reads the prompt and decides which surface owns it: the routing table is seeded into <code>surface_routing</code> from each agent's own <code>routing:</code> frontmatter, and the match is scored per surface. The result is a RECOMMENDATION injected as context — this hook never blocks a turn. This is where a person enters, and everything to the right of this bar happens because someone asked.",
                      "filters": [
                        "ruteo"
                      ]
                    }
                  ]
                },
                {
                  "id": "lifetime",
                  "title": "The goal's lifetime",
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
                      "detail": "<b>PreToolUse</b> — the gate, and one of the two places a turn can stop. In order: it decides whether the orchestrator may use the tool at all or must delegate; it classifies the command T0–T3, refuses the irreversible outright and demands your consent for T3; and, when the tool is a dispatch, it builds the subagent's context, caches it, and opens the contract row carrying the <code>plan_task_id</code> that will later forbid the agent from declaring itself done. A block here is <code>exit 2</code> — the command never runs. Nothing of the agent existed before this cell.",
                      "variant": "bad",
                      "filters": [
                        "porton",
                        "despacho"
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
                      "detail": "<b>SubagentStart</b> — the first instant the agent exists. It receives the context PreToolUse already built and cached: project context, surface routing, its handoff contract, its contract permissions, the memory index and the recent session events. Its ANCHORS — the identifiers it was handed — are written down here, so the close can measure which fraction of that context it actually touched. What it does NOT receive from Gaia is its skills: the harness injects those from the agent's own frontmatter.",
                      "filters": [
                        "entrega"
                      ]
                    },
                    {
                      "id": "lf-works",
                      "order": 3,
                      "kicker": "WORKS",
                      "title": "PostToolUse",
                      "description": [
                        "it calls tools and produces its work"
                      ],
                      "detail": "<b>PostToolUse</b> — the agent works, and every tool IT invokes re-enters the same gate. The gates are not spent on the dispatch: that is why this stretch runs again for every single call. PostToolUse logs the execution, seals EXECUTED or FAILED onto the hashed approval chain, and — on an <code>AskUserQuestion</code> answer — activates the grant the user just conceded, so the retry of the identical command finds a live permission. It does NOT fire for a non-zero Bash exit in the current host, which is why Stop exists as a sweeper.",
                      "filters": [
                        "contabilidad"
                      ]
                    },
                    {
                      "id": "lf-contract",
                      "order": 4,
                      "kicker": "CONTRACT",
                      "title": "SubagentStop",
                      "description": [
                        "read and judged"
                      ],
                      "detail": "<b>SubagentStop</b> — the judge, and the other place a turn can stop. The agent emits its <code>agent_contract_handoff</code> as a fenced block in its response TEXT; Gaia parses it out of that text (not out of the database), validates its shape, forces a blind verification when the turn is bound to a plan task, measures the turn from the transcript, detects anomalies, computes the compliance score, writes the episode and persists the handoff. A rejection is <code>exit 2</code>: the turn is handed back and the agent repairs it. The repair IS this handoff, read again.",
                      "variant": "bad",
                      "filters": [
                        "el-juez"
                      ]
                    },
                    {
                      "id": "lf-loop",
                      "order": 5,
                      "type": "separator",
                      "span": 3,
                      "text": "↻ once per call — and if it mutates, it stops"
                    },
                    {
                      "id": "lf-gap",
                      "order": 6,
                      "type": "spacer",
                      "span": 1
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
                        "a mutating action becomes a detailed, auditable protocol before it runs: the exact command, its scope, its risk and how to undo it — approved once, for that command only"
                      ],
                      "detail": "The detour has four beats. <b>1 · Held at the gate.</b> The command is classified and, if it mutates live state, it is blocked with an <code>approval_id</code> — <code>exit 2</code>, it never runs. <b>2 · The turn goes up.</b> A subagent has NO channel to the person: this is the fact nobody guesses, and it is why consent is not resolved where the block happens. The subagent returns <code>APPROVAL_REQUEST</code> carrying the id, and the orchestrator is the one that can speak to you. <b>3 · You see the values and consent.</b> The exact command verbatim, what it touches, what it risks, how to undo it. <b>4 · Retried byte for byte.</b> The grant matches on the whole command string, so a reworded retry never matches; the permission is single-use and is consumed on the match. The ladder: <b>T0</b> read-only, free. <b>T1</b> local validation, free. <b>T2</b> simulation — plan, diff, dry-run — free. <b>T3</b> it mutates live state, and only a person can let it through. Above the ladder sit the commands that are never approvable at all.",
                      "filters": [
                        "porton"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "modules",
          "title": "The modules",
          "subtitle": "Left to right and row by row, the modules follow the same clock as the band above — the prompt, then the gate, then the dispatch, then the close. Inside a module the NUMBER on the kicker is the execution step; a kicker with no number is not a step, but a lookup table or a group that runs in parallel.",
          "treatment": [
            "envelope"
          ],
          "order": 2,
          "span": 6,
          "columns": 1,
          "children": [
            {
              "id": "mod-early",
              "treatment": [
                "plain"
              ],
              "order": 1,
              "span": 1,
              "columns": 3,
              "children": [
                {
                  "id": "routing",
                  "title": "Routing",
                  "subtitle": "UserPromptSubmit's only decision",
                  "treatment": [
                    "envelope"
                  ],
                  "order": 1,
                  "span": 1,
                  "columns": 2,
                  "children": [
                    {
                      "id": "rt-load",
                      "order": 1,
                      "span": 2,
                      "kicker": "1 load_surface_routing_config",
                      "title": "Read the surfaces",
                      "detail": "<code>load_surface_routing_config</code> loads the surface table from <code>gaia.db</code>. The source of truth is each agent's own <code>routing:</code> frontmatter block, seeded into the <code>surface_routing</code> table at install time — there is no standalone routing config file. Lives in <code>tools/context/surface_router.py</code>.",
                      "variant": "muted",
                      "filters": [
                        "ruteo"
                      ]
                    },
                    {
                      "id": "rt-score",
                      "order": 2,
                      "kicker": "2 _score_surface",
                      "title": "Score each one",
                      "detail": "Scores the prompt against one surface's declared signals — <code>commands</code> and <code>artifacts</code>. Keywords were retired as a signal source: a legacy <code>keywords</code> key in a signals block is ignored by scoring.",
                      "variant": "muted",
                      "filters": [
                        "ruteo"
                      ]
                    },
                    {
                      "id": "rt-classify",
                      "order": 3,
                      "kicker": "3 classify_surfaces",
                      "title": "Pick the owner",
                      "detail": "Turns the per-surface scores into the ranked answer: which surface owns this intent, and which surfaces sit adjacent to it.",
                      "variant": "muted",
                      "filters": [
                        "ruteo"
                      ]
                    },
                    {
                      "id": "rt-brief",
                      "order": 4,
                      "span": 2,
                      "kicker": "4 build_investigation_brief",
                      "title": "Advise, never block",
                      "detail": "Renders the routing recommendation as context injected into the turn. UserPromptSubmit is advisory end to end — it never returns a block, so a wrong route costs a dispatch, never the turn.",
                      "variant": "muted",
                      "filters": [
                        "ruteo"
                      ]
                    }
                  ]
                },
                {
                  "id": "delegate",
                  "title": "Delegate mode",
                  "subtitle": "PreToolUse's first gate — a chain with no branches, so every step owns its own row",
                  "treatment": [
                    "envelope"
                  ],
                  "order": 2,
                  "span": 1,
                  "columns": 1,
                  "children": [
                    {
                      "id": "dm-role",
                      "order": 1,
                      "kicker": "1 classify_session_role",
                      "title": "Which role?",
                      "detail": "Classifies the caller into one of three session roles. The gate only applies to the orchestrator; a specialist already dispatched is not asked to delegate again. Lives in <code>hooks/modules/orchestrator/delegate_mode.py</code>.",
                      "variant": "muted",
                      "filters": [
                        "porton"
                      ]
                    },
                    {
                      "id": "dm-check",
                      "order": 2,
                      "kicker": "2 check_delegate_mode",
                      "title": "Use it or delegate",
                      "detail": "The first thing <code>adapt_pre_tool_use</code> runs, before any tier classification: may the orchestrator hold this tool itself, or must it hand the work to a specialist? This is what keeps the orchestrator a router rather than a worker.",
                      "variant": "muted",
                      "filters": [
                        "porton"
                      ]
                    },
                    {
                      "id": "dm-allowed",
                      "order": 3,
                      "kicker": "ORCHESTRATOR_ALLOWED_TOOLS",
                      "title": "The allowed set",
                      "detail": "The frozen set of tools the orchestrator may hold on its own. NOT a step — that is why its kicker carries no number. It is the table the check consults; anything outside it is a delegation.",
                      "variant": "muted",
                      "filters": [
                        "porton"
                      ]
                    }
                  ]
                },
                {
                  "id": "approvals",
                  "title": "Approvals",
                  "subtitle": "PreToolUse · five phases",
                  "treatment": [
                    "envelope"
                  ],
                  "order": 3,
                  "span": 1,
                  "columns": 2,
                  "children": [
                    {
                      "id": "ap-guards",
                      "order": 1,
                      "kicker": "1 db·memory·path",
                      "title": "Three flat denials",
                      "detail": "Three categorical guards: the gaia.db write guard, the subagent memory-write guard, and the protected-path guard for anything under <code>.claude/</code>. They are categorical denials — <code>exit 2</code>, never approvable. DESIGN FACT WORTH KEEPING: all three run BEFORE the unwrap, deliberately, so they inspect heredocs and wrappers intact rather than a payload the unwrapper has already taken apart.",
                      "variant": "muted",
                      "filters": [
                        "porton"
                      ]
                    },
                    {
                      "id": "ap-unwrap",
                      "order": 2,
                      "kicker": "2 ShellUnwrapper",
                      "title": "Peel and decompose",
                      "detail": "Peels the wrappers and decomposes the command into stages, so a composed command is judged stage by stage rather than as one opaque string. Nesting past the obfuscation depth limit is itself a block.",
                      "variant": "muted",
                      "filters": [
                        "porton"
                      ]
                    },
                    {
                      "id": "ap-blocked",
                      "order": 3,
                      "kicker": "3 is_blocked_cmd",
                      "title": "Never approvable",
                      "detail": "<code>is_blocked_command</code> pattern-matches the irreversible and denies it permanently — this tier cannot be approved at all. Runs on the command as written AND on the peeled form, so an <code>env FOO=bar</code> prefix cannot walk a blocked command past the floor.",
                      "variant": "muted",
                      "filters": [
                        "porton"
                      ]
                    },
                    {
                      "id": "ap-composition",
                      "order": 4,
                      "kicker": "4 check_composition",
                      "title": "Dangerous pipelines",
                      "detail": "Classifies the pipeline itself: file-read into an exec sink, network into exec, decode into exec. This is where exfiltration and remote-code-execution shapes are caught — each stage is benign, the composition is not.",
                      "variant": "muted",
                      "filters": [
                        "porton"
                      ]
                    },
                    {
                      "id": "ap-verbs",
                      "order": 5,
                      "span": 2,
                      "kicker": "5 detect_mutative_command",
                      "title": "Grant, or ask",
                      "detail": "The mutative-verb classifier. If a matching grant already exists it is consumed; if not, the command is T3 and an <code>approval_id</code> is minted for the user to approve, seeing the command verbatim. A grant is single-use per subagent, or multi-use per verb family for a batch.",
                      "variant": "muted",
                      "filters": [
                        "porton"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "id": "context",
              "title": "Context substrate",
              "subtitle": "injected at dispatch, updated at close — its two halves are the same substrate seen at two moments",
              "treatment": [
                "envelope"
              ],
              "order": 2,
              "span": 1,
              "columns": 2,
              "children": [
                {
                  "id": "project-context",
                  "title": "Project context",
                  "subtitle": "at dispatch",
                  "treatment": [
                    "envelope"
                  ],
                  "order": 1,
                  "span": 1,
                  "columns": 3,
                  "children": [
                    {
                      "id": "pc-payload",
                      "order": 1,
                      "kicker": "1 context_payload",
                      "title": "Assemble the payload",
                      "detail": "<code>build_context_payload</code> assembles the whole context payload for one agent: project identity, stack, routing, permissions, metadata. Lives in <code>tools/context/context_provider.py</code>.",
                      "variant": "muted",
                      "filters": [
                        "despacho"
                      ]
                    },
                    {
                      "id": "pc-render",
                      "order": 2,
                      "kicker": "2 project_context",
                      "title": "Render and extract",
                      "detail": "<code>build_project_context</code> renders the project-context sections the agent is allowed to read, and extracts the ANCHORS out of that render — the identifiers the agent was handed. Lives in <code>hooks/modules/context/context_injector.py</code>.",
                      "variant": "muted",
                      "filters": [
                        "despacho",
                        "sesion-abre"
                      ]
                    },
                    {
                      "id": "pc-events",
                      "order": 3,
                      "kicker": "3 session_events",
                      "title": "Recent events",
                      "detail": "<code>build_session_events</code> adds the recent session events, so a dispatched agent knows what already happened in this session instead of starting blind.",
                      "variant": "muted",
                      "filters": [
                        "despacho"
                      ]
                    },
                    {
                      "id": "pc-memory",
                      "order": 4,
                      "kicker": "4 workspace memory",
                      "title": "Curated memory",
                      "detail": "The curated memory block: atoms, decisions and negative space that survived the session that produced them. It is also what SessionStart injects at the very top of a session.",
                      "variant": "muted",
                      "filters": [
                        "despacho",
                        "sesion-abre"
                      ]
                    },
                    {
                      "id": "pc-anchors",
                      "order": 5,
                      "span": 2,
                      "kicker": "5 save_anchors",
                      "title": "Cache, then anchor",
                      "detail": "The payload is cached for the subagent at dispatch; <code>save_anchors</code> then writes the anchors down — already inside SubagentStart. At the close, <code>compute_anchor_hits</code> measures which fraction of them the agent actually touched. Lives in <code>hooks/modules/context/anchor_tracker.py</code>.",
                      "variant": "muted",
                      "filters": [
                        "despacho",
                        "entrega"
                      ]
                    }
                  ]
                },
                {
                  "id": "project-contracts",
                  "title": "Project contracts",
                  "subtitle": "at close",
                  "treatment": [
                    "envelope"
                  ],
                  "order": 2,
                  "span": 1,
                  "columns": 3,
                  "children": [
                    {
                      "id": "ct-perms",
                      "order": 1,
                      "kicker": "1 contract_perms",
                      "title": "Who may read what",
                      "detail": "<code>agent_contract_permissions</code> is the per-agent, per-contract authorization table in <code>gaia/store/schema.sql</code>: <code>can_read</code> and <code>can_write</code> per section. It is what decides which slice of project context an agent is handed at dispatch, and which sections it may write back at close.",
                      "variant": "muted",
                      "filters": [
                        "despacho"
                      ]
                    },
                    {
                      "id": "ct-process",
                      "order": 2,
                      "kicker": "2 update_contracts",
                      "title": "Read the deltas",
                      "detail": "<code>process_update_contracts</code> reads the <code>update_contracts</code> array out of the agent's contract — the discoveries it wants written into shared project context. Lives in <code>hooks/modules/context/context_writer.py</code>.",
                      "variant": "muted",
                      "filters": [
                        "el-juez"
                      ]
                    },
                    {
                      "id": "ct-validate",
                      "order": 3,
                      "kicker": "3 validate_perm",
                      "title": "May it write here?",
                      "detail": "<code>validate_permission</code> checks the writing agent against the section it is trying to write. A rejection is not silent: it feeds the <code>scope_escalation</code> anomaly, so writing outside your scope is a finding, not a no-op.",
                      "variant": "muted",
                      "filters": [
                        "el-juez"
                      ]
                    },
                    {
                      "id": "ct-merge",
                      "order": 4,
                      "kicker": "4 _merge_section",
                      "title": "Merge, never replace",
                      "detail": "<code>_merge_section_payload</code>: a payload is a DELTA, not a snapshot — it is deep-merged into what is stored, so a partial write cannot wipe the keys it did not mention.",
                      "variant": "muted",
                      "filters": [
                        "el-juez"
                      ]
                    },
                    {
                      "id": "ct-apply",
                      "order": 5,
                      "span": 2,
                      "kicker": "5 apply_update",
                      "title": "Write it down",
                      "detail": "The write itself, against <code>project_context_contracts</code> in <code>gaia.db</code>. This is the «updated at close» half of the substrate.",
                      "variant": "muted",
                      "filters": [
                        "el-juez"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "id": "mod-late",
              "treatment": [
                "plain"
              ],
              "order": 3,
              "span": 1,
              "columns": 2,
              "children": [
                {
                  "id": "lifecycle",
                  "title": "Contract lifecycle",
                  "subtitle": "born at dispatch, judged at close",
                  "treatment": [
                    "envelope"
                  ],
                  "order": 1,
                  "span": 1,
                  "columns": 2,
                  "children": [
                    {
                      "id": "cl-birth",
                      "order": 1,
                      "kicker": "1 birth_dispatched",
                      "title": "Born with a task id",
                      "detail": "<code>birth_dispatched_row</code>: the contract's row is born at the dispatch, inside PreToolUse, carrying the <code>plan_task_id</code> of the task this turn executes. That single field is what later forbids the agent from closing its own work. Lives in <code>hooks/modules/agents/dispatch_binding.py</code>.",
                      "variant": "muted",
                      "filters": [
                        "despacho"
                      ]
                    },
                    {
                      "id": "cl-parse",
                      "order": 2,
                      "kicker": "2 parse_contract",
                      "title": "Parse and resolve",
                      "detail": "At the close, the contract is parsed out of the agent's response TEXT and its declared state is resolved. A finalized database row is not what is read here — a turn that built a perfect draft and emitted no fence is rejected.",
                      "variant": "muted",
                      "filters": [
                        "el-juez"
                      ]
                    },
                    {
                      "id": "cl-gate",
                      "order": 3,
                      "kicker": "3 contract_gate",
                      "title": "The gate",
                      "detail": "<code>evaluate_contract_gate</code> is the verdict. It validates the envelope's shape and forces <code>NEEDS_VERIFICATION</code> whenever the dispatch binding carries a <code>plan_task_id</code> — a plan-task-bound producer may not declare itself COMPLETE, so an independent verifier has to confirm the increment. Keyed on the binding, not on the agent's role.",
                      "variant": "muted",
                      "filters": [
                        "el-juez"
                      ]
                    },
                    {
                      "id": "cl-transition",
                      "order": 4,
                      "kicker": "4 _LEGAL_TRANSITIONS",
                      "title": "Legal move, then saved",
                      "detail": "The state machine allows only the legal transitions and caps consecutive retries at two, so an agent cannot park in IN_PROGRESS to avoid a decision. Once the move is legal the handoff is persisted. Lives in <code>hooks/modules/agents/state_tracker.py</code>.",
                      "variant": "muted",
                      "filters": [
                        "el-juez"
                      ]
                    }
                  ]
                },
                {
                  "id": "skills",
                  "title": "Skills",
                  "subtitle": "Gaia does not inject skills. The harness does, from frontmatter. Gaia reminds and verifies.",
                  "treatment": [
                    "envelope"
                  ],
                  "order": 2,
                  "span": 1,
                  "columns": 2,
                  "children": [
                    {
                      "id": "sk-map",
                      "order": 1,
                      "kicker": "1 expected_skill",
                      "title": "Artifact to skill",
                      "detail": "<code>expected_skill_for_path</code> maps an artifact to the skill that governs it — a Terraform file to the IaC skill, an agent definition to <code>agent-creation</code>. Lives in <code>hooks/modules/agents/artifact_skill_map.py</code>.",
                      "variant": "muted",
                      "filters": [
                        "porton"
                      ]
                    },
                    {
                      "id": "sk-remind",
                      "order": 2,
                      "kicker": "2 Write/Edit",
                      "title": "One reminder only",
                      "detail": "PREVENTION, at PreToolUse. On a Write or an Edit, the agent is reminded ONCE that a skill governs this artifact. One reminder, not a block: Write and Edit are deliberately not T3, because authoring a file is not a change to live state.",
                      "variant": "muted",
                      "filters": [
                        "porton"
                      ]
                    },
                    {
                      "id": "sk-verify",
                      "order": 3,
                      "kicker": "3 verify_injection",
                      "title": "Hunt the footprint",
                      "detail": "<code>verify_skill_injection</code>: DETECTION, post hoc, at SubagentStop. It looks for the skill's footprint in the transcript to see whether the skill was actually loaded. It cannot prevent anything — by the time it runs, the work is done. The two halves of this module never talk to each other, and that is the design.",
                      "variant": "muted",
                      "filters": [
                        "el-juez"
                      ]
                    },
                    {
                      "id": "sk-order",
                      "order": 4,
                      "kicker": "4 _check_skill_order",
                      "title": "Flag it as anomaly",
                      "detail": "One of the workflow auditor's checks: a skill loaded out of order, or after the work it was supposed to govern, is recorded as an anomaly on the turn. Lives in <code>hooks/modules/audit/workflow_auditor.py</code>.",
                      "variant": "muted",
                      "filters": [
                        "el-juez"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "accounting",
          "title": "Audit and metrics",
          "subtitle": "Neither belongs to a single moment of the line above — they run at all of them, which is why they are the floor and not another column. Metrics is numbered: that IS its order. Audit is the exception, and the rule on its second row says where the strict order begins.",
          "treatment": [
            "envelope"
          ],
          "order": 3,
          "span": 6,
          "columns": 2,
          "children": [
            {
              "id": "audit",
              "title": "Audit",
              "subtitle": "the three writers on the first row are independent of one another; from the rule onward it is strict order",
              "treatment": [
                "envelope"
              ],
              "order": 1,
              "span": 1,
              "columns": 3,
              "children": [
                {
                  "id": "au-log",
                  "order": 1,
                  "kicker": "log_execution",
                  "title": "One line per run",
                  "detail": "Appends one JSONL line per execution. Independent of the other two writers — nothing coordinates them, which is why none of the three carries a step number. Lives in <code>hooks/modules/audit/logger.py</code>.",
                  "variant": "muted",
                  "filters": [
                    "contabilidad"
                  ]
                },
                {
                  "id": "au-chain",
                  "order": 2,
                  "kicker": "record_event",
                  "title": "The hashed chain",
                  "detail": "Appends to the approval chain: SHOWN, EXECUTED, FAILED. Each moment is hashed onto the one before it, so the record breaks if a single step is altered. Lives in <code>gaia/approvals/store.py</code>.",
                  "variant": "muted",
                  "filters": [
                    "contabilidad"
                  ]
                },
                {
                  "id": "au-events",
                  "order": 3,
                  "kicker": "write_event",
                  "title": "The event stream",
                  "detail": "Writes into <code>harness_events</code>. The third independent writer: it shares no ordering with the JSONL log or the approval chain. Lives in <code>hooks/modules/events/event_writer.py</code>.",
                  "variant": "muted",
                  "filters": [
                    "contabilidad"
                  ]
                },
                {
                  "id": "au-sep",
                  "order": 4,
                  "type": "separator",
                  "span": 1,
                  "text": "in order →"
                },
                {
                  "id": "au-audit",
                  "order": 5,
                  "kicker": "workflow_auditor",
                  "title": "18 checks, in order",
                  "detail": "<code>workflow_auditor.audit</code>: roughly eighteen checks over the turn, run in strict order, producing the anomaly list — skipped investigation, missing or empty evidence, skill loaded out of order, work written outside the agent's scope. Unlike the three writers on the row above, this interior IS ordered.",
                  "variant": "muted",
                  "filters": [
                    "el-juez"
                  ]
                },
                {
                  "id": "au-stop",
                  "order": 6,
                  "kicker": "Stop",
                  "title": "The closing sweeper",
                  "detail": "PostToolUse does not fire for a non-zero Bash exit in the current host, so an approved T3 command that FAILED never gets its terminal event. Stop is where the turn is fully done, so any keyed state still dangling belongs to a command that never completed — it is reconciled there. The sweeper for what PostToolUse could not see.",
                  "variant": "muted",
                  "filters": [
                    "contabilidad"
                  ]
                }
              ]
            },
            {
              "id": "metrics",
              "title": "Metrics",
              "subtitle": "SubagentStop · strict order, and the numbers say so",
              "treatment": [
                "envelope"
              ],
              "order": 2,
              "span": 1,
              "columns": 3,
              "children": [
                {
                  "id": "mt-analyze",
                  "order": 1,
                  "kicker": "1 analyze",
                  "title": "Read the transcript",
                  "detail": "Reads the real transcript: actual tokens, tool calls, model, duration. Measured, not self-reported. Lives in <code>hooks/modules/agents/transcript_analyzer.py</code>.",
                  "variant": "muted",
                  "filters": [
                    "el-juez"
                  ]
                },
                {
                  "id": "mt-anchors",
                  "order": 2,
                  "kicker": "2 anchor_hits",
                  "title": "How much was used",
                  "detail": "<code>compute_anchor_hits</code> compares the tool calls against the anchors saved at SubagentStart: what fraction of the context it was handed did the agent actually touch?",
                  "variant": "muted",
                  "filters": [
                    "el-juez"
                  ]
                },
                {
                  "id": "mt-record",
                  "order": 3,
                  "kicker": "3 record_workflow",
                  "title": "Record the turn",
                  "detail": "Records the workflow metrics for the turn — the row every later grade is computed from.",
                  "variant": "muted",
                  "filters": [
                    "el-juez"
                  ]
                },
                {
                  "id": "mt-score",
                  "order": 4,
                  "kicker": "4 compliance_score",
                  "title": "Six factors, a grade",
                  "detail": "<code>compute_compliance_score</code>: six mechanical factors over the turn's own record, producing a score and a letter. It runs AFTER <code>workflow_auditor.audit</code> — the step drawn in the module beside this one — because it needs that anomaly list as input. Nobody grades their own turn.",
                  "variant": "muted",
                  "filters": [
                    "el-juez"
                  ]
                },
                {
                  "id": "mt-episode",
                  "order": 5,
                  "span": 2,
                  "kicker": "5 episode_writer",
                  "title": "Write the episode",
                  "detail": "<code>episode_writer.write</code> writes the episode of the turn into <code>gaia.db</code>: what was asked, what came out, what it cost, what looked odd. Written by the machine at the close, not narrated by the agent. Lives in <code>hooks/modules/memory/episode_writer.py</code>.",
                  "variant": "muted",
                  "filters": [
                    "el-juez"
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
          "order": 4,
          "span": 6,
          "columns": 1,
          "children": [
            {
              "id": "ch-legend",
              "type": "separator",
              "style": "dotted",
              "order": 1,
              "span": 1,
              "text": "colour marks the only two moments the turn can stop — PreToolUse and SubagentStop"
            },
            {
              "id": "sc-note",
              "type": "separator",
              "style": "dotted",
              "order": 2,
              "span": 1,
              "text": "the load-bearing path of a turn — not the whole inventory: cut detection, session hygiene and notifications are real and not drawn"
            }
          ]
        }
      ],
      "name": "The real architecture",
      "order": 0
    },
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
                  "detail": "An agent is more than a prompt: a contract for what it must return, an identity for how it works, a scope for what it may touch, and the errors it knows how to handle. Every agent has those same four parts, and every agent owns one area — nine specialists exist today, and more can be added. That is what lets one agent read another one's work.",
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
      "name": "Shared semantics",
      "order": 1
    },
    {
      "id": "s0-vision",
      "layout": "grid",
      "form": "dashboard",
      "columns": 2,
      "sections": [
        {
          "id": "shared",
          "title": "A shared way of working",
          "variant": "good",
          "order": 1,
          "span": 2,
          "columns": 3,
          "children": [
            {
              "id": "sh-flujos",
              "kicker": "SHARED",
              "title": "Same flows",
              "description": [
                "the same way to move work forward"
              ],
              "variant": "good"
            },
            {
              "id": "sh-tools",
              "kicker": "SHARED",
              "title": "Same tools",
              "description": [
                "the same instruments for everyone"
              ],
              "variant": "good"
            },
            {
              "id": "sh-skills",
              "kicker": "SHARED",
              "title": "Same skills",
              "description": [
                "the same techniques, loaded on demand"
              ],
              "variant": "good"
            }
          ]
        },
        {
          "id": "contrast",
          "treatment": [
            "plain"
          ],
          "order": 2,
          "span": 2,
          "columns": 2,
          "children": [
            {
              "id": "flujos",
              "title": "Workflows",
              "subtitle": "what matters",
              "variant": "neutral",
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "f-state",
                  "kicker": "STATES",
                  "title": "State Machine",
                  "description": [
                    "legal turn states; no one self-declares \"done\""
                  ],
                  "detail": "The state machine lives in <code>hooks/modules/agents/state_tracker.py</code>: <code>_LEGAL_TRANSITIONS</code> defines the valid transitions, with a cap of 2 retries. <code>NEEDS_VERIFICATION</code> can only be promoted by a blind verifier — no one self-declares \"done\".",
                  "variant": "accent"
                },
                {
                  "id": "f-security",
                  "kicker": "SECURITY",
                  "title": "Security Tiers + Approvals",
                  "description": [
                    "classifies T0-T3 and asks for your consent before mutating"
                  ],
                  "detail": "Every operation is classified T0-T3 in <code>hooks/modules/security/tiers.py</code>; a T3 mutation requires your explicit consent, managed by <code>approval_grants.py</code>, before it runs.",
                  "variant": "accent"
                },
                {
                  "id": "f-routing",
                  "kicker": "ROUTING",
                  "title": "Surface Routing",
                  "description": [
                    "maps intent to the right agent"
                  ],
                  "detail": "The router maps the prompt's intent to the surface and the specialist who owns it. Per-surface scoring lives in <code>tools/context/surface_router.py</code> (<code>_score_surface</code>).",
                  "variant": "accent"
                },
                {
                  "id": "f-planning",
                  "kicker": "PLANNING",
                  "title": "Planning",
                  "description": [
                    "breaks down and persists the work beyond the turn"
                  ],
                  "detail": "Work is broken down and persisted outside the turn: <code>gaia/state/transitions.py</code> and the <code>task_gates</code> table, where each gate carries a <code>verification_type</code> from the enum <code>command | code | semantic | self_review</code>.",
                  "variant": "accent"
                },
                {
                  "id": "f-verify",
                  "kicker": "VERIFY",
                  "title": "Verification",
                  "description": [
                    "independent verification — no one validates their own work"
                  ],
                  "detail": "Every gate in <code>task_gates</code> carries a <code>verification_type</code> from the enum <code>command | code | semantic | self_review</code>. The gate is bound to the <code>plan_task_id</code>, not the role (<code>_blind_verification_required</code>).",
                  "variant": "accent"
                }
              ]
            },
            {
              "id": "tools",
              "title": "Tools · it does not matter",
              "subtitle": "interchangeable",
              "treatment": [
                "envelope"
              ],
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "t-claude",
                  "title": "Claude Code",
                  "treatment": [
                    "outside"
                  ]
                },
                {
                  "id": "t-codex",
                  "title": "Codex",
                  "treatment": [
                    "outside"
                  ]
                },
                {
                  "id": "t-cursor",
                  "title": "Cursor",
                  "treatment": [
                    "outside"
                  ]
                },
                {
                  "id": "t-opencode",
                  "title": "OpenCode",
                  "treatment": [
                    "outside"
                  ]
                },
                {
                  "id": "t-aider",
                  "title": "Aider",
                  "treatment": [
                    "outside"
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "payoff",
          "treatment": [
            "plain"
          ],
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
      "order": 2
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
          "variant": "good",
          "order": 1,
          "span": 3,
          "columns": 3,
          "children": [
            {
              "id": "h-ideas",
              "kicker": "= BRIEFS",
              "title": "Ideas",
              "description": [
                "the captured idea —",
                "the requirement, turned into a persistent unit"
              ],
              "detail": "Ideas are captured as <b>briefs</b>: the requirement stops being a loose chat message and becomes a unit that persists outside the session. Anchor: <code>bin/cli/brief.py</code>.",
              "variant": "accent"
            },
            {
              "id": "h-criterios",
              "kicker": "= ACs / GOALS",
              "title": "Criteria",
              "description": [
                "what defines \"done\" —",
                "the brief's acceptance criteria"
              ],
              "detail": "The criteria are the brief's <b>acceptance criteria</b>: they define what counts as \"done\". Each AC has its own lifecycle (pending → done, with blocked and descoped). Anchor: <code>gaia/state/transitions.py</code> (AC lifecycle).",
              "variant": "accent"
            },
            {
              "id": "h-tareas",
              "kicker": "= THE PLAN",
              "title": "Tasks",
              "description": [
                "the broken-down plan —",
                "the idea comes down to verifiable steps"
              ],
              "detail": "Tasks are the broken-down <b>plan</b>: the idea comes down to concrete, verifiable steps that persist in the database. Anchors: <code>bin/cli/plan.py</code>, <code>bin/cli/task.py</code>.",
              "variant": "accent"
            }
          ]
        },
        {
          "id": "compartido",
          "title": "What makes it shared",
          "subtitle": "it is not your board: it belongs to everyone",
          "treatment": [
            "envelope"
          ],
          "order": 2,
          "span": 3,
          "columns": 3,
          "children": [
            {
              "id": "pc",
              "title": "Project Context",
              "subtitle": "a contract per agent — injected at dispatch, updated at close",
              "treatment": [
                "envelope"
              ],
              "span": 3,
              "columns": 3,
              "children": [
                {
                  "id": "pc-read",
                  "order": 1,
                  "kicker": "project_context_contracts",
                  "title": "Contracts per agent",
                  "description": "project context is a contract per agent",
                  "variant": "accent",
                  "filters": [
                    "pc-flow"
                  ]
                },
                {
                  "id": "pc-inject",
                  "order": 2,
                  "kicker": "build_project_context",
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
                  "kicker": "update_contracts",
                  "title": "Updated at close",
                  "description": "the subagent writes its update at close",
                  "variant": "accent",
                  "filters": [
                    "pc-flow",
                    "cierre"
                  ]
                }
              ]
            },
            {
              "id": "comp2",
              "treatment": [
                "plain"
              ],
              "span": 3,
              "columns": 2,
              "children": [
                {
                  "id": "audit",
                  "title": "Audit",
                  "subtitle": "three trails, all immutable",
                  "treatment": [
                    "envelope"
                  ],
                  "span": 1,
                  "columns": 1,
                  "children": [
                    {
                      "id": "au-aprob",
                      "order": 1,
                      "kicker": "approval_events",
                      "title": "Approvals of mutative runs",
                      "description": "every approved T3 as an event — single and batch (command_set)",
                      "variant": "accent",
                      "filters": [
                        "audit-flow"
                      ]
                    },
                    {
                      "id": "au-hist",
                      "order": 2,
                      "kicker": "*_history",
                      "title": "Immutable history",
                      "description": "context, memory, and project, append-only: never deleted",
                      "filters": [
                        "audit-flow"
                      ]
                    },
                    {
                      "id": "au-handoff",
                      "order": 3,
                      "kicker": "agent_contract_handoff",
                      "title": "Handoff log",
                      "description": "every handoff persisted at turn close",
                      "variant": "accent",
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
                  "treatment": [
                    "envelope"
                  ],
                  "span": 1,
                  "columns": 1,
                  "children": [
                    {
                      "id": "mem-durable",
                      "order": 1,
                      "kicker": "anchor",
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
                      "kicker": "thread",
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
                      "kicker": "log",
                      "title": "Episodic",
                      "description": "the turn's episodes, deterministic: visible in the metrics",
                      "variant": "accent",
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
      "order": 3
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
          "treatment": [
            "envelope"
          ],
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
              "variant": "good",
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
              "variant": "good",
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
              "variant": "good",
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
              "variant": "good",
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
              "variant": "good",
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
              "variant": "good",
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
          "treatment": [
            "envelope"
          ],
          "order": 2,
          "span": 3,
          "columns": 6,
          "children": [
            {
              "id": "cat-protocolos",
              "title": "Protocols",
              "treatment": [
                "envelope"
              ],
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "pro-1",
                  "title": "Response",
                  "variant": "muted",
                  "filters": [
                    "a-demanda",
                    "protocolos"
                  ]
                },
                {
                  "id": "pro-2",
                  "title": "Approval",
                  "variant": "muted"
                },
                {
                  "id": "pro-3",
                  "title": "Execution",
                  "variant": "muted"
                },
                {
                  "id": "pro-4",
                  "title": "Investigation",
                  "variant": "muted"
                }
              ]
            },
            {
              "id": "cat-codigo",
              "title": "Code",
              "treatment": [
                "envelope"
              ],
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "cod-1",
                  "title": "Patterns",
                  "variant": "muted",
                  "filters": [
                    "a-demanda"
                  ]
                },
                {
                  "id": "cod-2",
                  "title": "Naming",
                  "variant": "muted"
                },
                {
                  "id": "cod-3",
                  "title": "Comments",
                  "variant": "muted"
                },
                {
                  "id": "cod-4",
                  "title": "Error handling",
                  "variant": "muted"
                }
              ]
            },
            {
              "id": "cat-conv",
              "title": "Conventions",
              "treatment": [
                "envelope"
              ],
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "conv-1",
                  "title": "Commits",
                  "variant": "muted",
                  "filters": [
                    "a-demanda"
                  ]
                },
                {
                  "id": "conv-2",
                  "title": "Pull requests",
                  "variant": "muted"
                },
                {
                  "id": "conv-3",
                  "title": "Branches",
                  "variant": "muted"
                },
                {
                  "id": "conv-4",
                  "title": "Versioning",
                  "variant": "muted"
                }
              ]
            },
            {
              "id": "cat-doc",
              "title": "Documentation",
              "treatment": [
                "envelope"
              ],
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "doc-1",
                  "title": "README",
                  "variant": "muted",
                  "filters": [
                    "a-demanda"
                  ]
                },
                {
                  "id": "doc-2",
                  "title": "Wiki",
                  "variant": "muted"
                },
                {
                  "id": "doc-3",
                  "title": "Reference",
                  "variant": "muted"
                },
                {
                  "id": "doc-4",
                  "title": "Changelog",
                  "variant": "muted"
                }
              ]
            },
            {
              "id": "cat-leng",
              "title": "Language",
              "treatment": [
                "envelope"
              ],
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "len-1",
                  "title": "Tickets",
                  "variant": "muted",
                  "filters": [
                    "a-demanda"
                  ]
                },
                {
                  "id": "len-2",
                  "title": "Tone",
                  "variant": "muted"
                },
                {
                  "id": "len-3",
                  "title": "Writing",
                  "variant": "muted"
                }
              ]
            },
            {
              "id": "cat-crea",
              "title": "Creation",
              "treatment": [
                "envelope"
              ],
              "span": 1,
              "columns": 1,
              "children": [
                {
                  "id": "cre-1",
                  "title": "Skill template",
                  "variant": "muted",
                  "filters": [
                    "a-demanda"
                  ]
                },
                {
                  "id": "cre-2",
                  "title": "Agent template",
                  "variant": "muted",
                  "filters": [
                    "crea-identidad"
                  ]
                },
                {
                  "id": "cre-3",
                  "title": "Structure",
                  "variant": "muted"
                },
                {
                  "id": "cre-4",
                  "title": "Triggers",
                  "variant": "muted"
                }
              ]
            }
          ]
        }
      ],
      "name": "2 · Standards",
      "order": 4
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
          "treatment": [
            "envelope"
          ],
          "order": 1,
          "span": 6,
          "columns": 1,
          "children": [
            {
              "id": "ciclo",
              "title": "The T3 cycle",
              "subtitle": "click \"the T3 cycle\" to trace it",
              "treatment": [
                "envelope"
              ],
              "order": 1,
              "span": 1,
              "columns": 6,
              "children": [
                {
                  "id": "t-mutacion",
                  "order": 1,
                  "kicker": "command",
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
                  "kicker": "tiers",
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
                  "kicker": "REQUESTED",
                  "title": "Decision",
                  "description": [
                    "evaluates and breaks it down; if T3, emits REQUESTED"
                  ],
                  "detail": "The operation is evaluated and broken down; if it turns out to be T3 it is blocked and the <code>REQUESTED</code> event is emitted — the genesis of the chain. The fork by origin: a subagent receives <code>deny(approval_id)</code>; the orchestrator receives an <code>ask</code>.",
                  "variant": "accent",
                  "filters": [
                    "loop",
                    "cadena"
                  ]
                },
                {
                  "id": "t-aprueba",
                  "order": 4,
                  "kicker": "SHOWN · APPROVED",
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
                  "kicker": "EXECUTED",
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
                  "kicker": "append-only",
                  "title": "Audit",
                  "description": [
                    "EXECUTED/FAILED in the immutable hash chain"
                  ],
                  "detail": "The outcome is recorded as <code>EXECUTED</code> or <code>FAILED</code> in the append-only hash chain — the immutable trail no one rewrites. Substrate: <code>approval_events</code>.",
                  "variant": "accent",
                  "filters": [
                    "loop",
                    "cadena"
                  ]
                }
              ]
            },
            {
              "id": "zoom",
              "treatment": [
                "plain"
              ],
              "order": 2,
              "span": 1,
              "columns": 2,
              "children": [
                {
                  "id": "clasifica",
                  "title": "Classify · the risk",
                  "subtitle": "the tier measures how much the command risks",
                  "treatment": [
                    "envelope"
                  ],
                  "span": 1,
                  "columns": 1,
                  "children": [
                    {
                      "id": "z-t0",
                      "kicker": "free",
                      "title": "T0 · read",
                      "description": [
                        "reads: run free"
                      ],
                      "detail": "T0 · read: observes state without changing anything (get, list, describe, status). Runs free, with no friction and no consent needed.",
                      "variant": "good"
                    },
                    {
                      "id": "z-t1",
                      "kicker": "local",
                      "title": "T1 · validate",
                      "description": [
                        "local validation, never touches remote"
                      ],
                      "detail": "T1 · local validation: checks without remote calls or state changes (validate, lint, fmt, check). Needs no consent."
                    },
                    {
                      "id": "z-t2",
                      "kicker": "dry-run",
                      "title": "T2 · simulate",
                      "description": [
                        "dry-run: reads remote, never writes"
                      ],
                      "detail": "T2 · simulation / dry-run: may read remote state, but never writes (plan, diff, template). Needs no consent.",
                      "variant": "warn"
                    },
                    {
                      "id": "z-t3",
                      "kicker": "gate",
                      "title": "T3 · gate",
                      "description": [
                        "mutates: opens an approval gate"
                      ],
                      "detail": "T3 · sensitive or irreversible mutation: creates, updates, or destroys live state (apply, create, delete, push, deploy). Not a blind block: at the point of change it opens an approval GATE — it alerts that something is about to mutate and demands the human's consent; once approved, it proceeds.",
                      "variant": "bad"
                    }
                  ]
                },
                {
                  "id": "aprobacion",
                  "title": "Approval · the dialog",
                  "subtitle": "the human sees the exact values and decides",
                  "treatment": [
                    "envelope"
                  ],
                  "span": 1,
                  "columns": 1,
                  "children": [
                    {
                      "id": "ap-campos",
                      "treatment": [
                        "plain"
                      ],
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
                          "variant": "muted",
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
                          "variant": "muted",
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
                          "variant": "muted",
                          "filters": [
                            "el-humano"
                          ]
                        }
                      ]
                    },
                    {
                      "id": "ap-decision",
                      "treatment": [
                        "plain"
                      ],
                      "span": 1,
                      "columns": 2,
                      "children": [
                        {
                          "id": "ap-approve",
                          "kicker": "yes",
                          "title": "Approve",
                          "description": [
                            "consents: it runs"
                          ],
                          "detail": "The human consents: the grant is issued and the command runs byte-for-byte.",
                          "variant": "good",
                          "span": 1,
                          "filters": [
                            "el-humano"
                          ]
                        },
                        {
                          "id": "ap-reject",
                          "kicker": "no",
                          "title": "Reject",
                          "description": [
                            "rejects: nothing happens"
                          ],
                          "detail": "The human rejects: no grant is issued and the mutation does not happen.",
                          "variant": "bad",
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
      "order": 5
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
          "treatment": [
            "plain"
          ],
          "order": 1,
          "span": 4,
          "columns": 1,
          "children": [
            {
              "id": "s4-name",
              "title": "GAIA — Generative AI Architecture",
              "variant": "accent",
              "treatment": [
                "centered"
              ]
            }
          ]
        },
        {
          "id": "recorrido",
          "title": "The natural-language journey",
          "subtitle": "click \"from idea to task\"",
          "treatment": [
            "envelope"
          ],
          "order": 2,
          "span": 4,
          "columns": 4,
          "children": [
            {
              "id": "r-brief",
              "order": 1,
              "kicker": "expose an idea",
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
              "kicker": "explore → generate a plan",
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
              "kicker": "execute",
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
              "kicker": "verify",
              "title": "Gates",
              "description": [
                "every task carries its gate"
              ],
              "detail": "Every task carries a verification <b>gate</b> (<code>task_gates</code>). The gate is bound to the <code>plan_task_id</code>, not the role: that is why whoever produces the work does not validate it.",
              "variant": "accent",
              "filters": [
                "f-verifica"
              ]
            }
          ]
        },
        {
          "id": "motor",
          "title": "Who runs it",
          "treatment": [
            "envelope"
          ],
          "order": 3,
          "span": 4,
          "columns": 1,
          "children": [
            {
              "id": "orq-wrap",
              "treatment": [
                "plain"
              ],
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
                  "variant": "accent",
                  "treatment": [
                    "centered"
                  ]
                }
              ]
            },
            {
              "id": "instancias",
              "title": "Agents",
              "subtitle": "9 specialists · you can create more",
              "treatment": [
                "envelope"
              ],
              "span": 1,
              "columns": 9,
              "children": [
                {
                  "id": "ag-orch",
                  "title": "orchestrator",
                  "variant": "muted",
                  "filters": [
                    "f-idea"
                  ]
                },
                {
                  "id": "ag-op",
                  "title": "gaia-operator",
                  "variant": "muted",
                  "filters": [
                    "f-idea"
                  ]
                },
                {
                  "id": "ag-plan",
                  "title": "gaia-planner",
                  "variant": "muted",
                  "filters": [
                    "f-plan"
                  ]
                },
                {
                  "id": "ag-dev",
                  "title": "developer",
                  "variant": "muted",
                  "filters": [
                    "f-ejecuta"
                  ]
                },
                {
                  "id": "ag-plat",
                  "title": "platform-architect",
                  "variant": "muted",
                  "filters": [
                    "f-ejecuta"
                  ]
                },
                {
                  "id": "ag-git",
                  "title": "gitops-operator",
                  "variant": "muted",
                  "filters": [
                    "f-ejecuta"
                  ]
                },
                {
                  "id": "ag-cloud",
                  "title": "cloud-troubleshooter",
                  "variant": "muted",
                  "filters": [
                    "f-ejecuta"
                  ]
                },
                {
                  "id": "ag-sys",
                  "title": "gaia-system",
                  "variant": "muted",
                  "filters": [
                    "f-ejecuta"
                  ]
                },
                {
                  "id": "ag-verif",
                  "title": "gaia-verifier",
                  "variant": "muted",
                  "filters": [
                    "f-verifica"
                  ]
                }
              ]
            },
            {
              "id": "anatomia",
              "title": "Anatomy of an agent",
              "treatment": [
                "envelope"
              ],
              "span": 1,
              "columns": 5,
              "children": [
                {
                  "id": "an-tools",
                  "title": "Execution tools",
                  "variant": "muted"
                },
                {
                  "id": "an-skills",
                  "title": "Skills",
                  "variant": "muted"
                },
                {
                  "id": "an-identidad",
                  "title": "Identity",
                  "variant": "muted"
                },
                {
                  "id": "an-contexto",
                  "title": "Injected context",
                  "variant": "muted"
                },
                {
                  "id": "an-handoff",
                  "title": "Contract handoff",
                  "variant": "muted"
                }
              ]
            }
          ]
        },
        {
          "id": "leyes",
          "title": "What makes it GAIA",
          "subtitle": "the laws that govern everything",
          "treatment": [
            "envelope"
          ],
          "order": 4,
          "span": 4,
          "columns": 4,
          "children": [
            {
              "id": "ley-contrato",
              "kicker": "shape",
              "title": "Contract",
              "description": [
                "the shape of the output"
              ],
              "detail": "The <b>contract</b> (agent_contract_handoff) fixes the shape of every agent's output: the same schema for everyone, so the orchestrator can route on what they return."
            },
            {
              "id": "ley-state",
              "kicker": "states",
              "title": "State Machine",
              "description": [
                "the turn's legal states"
              ],
              "detail": "The <b>state machine</b> defines the turn's legal transitions (INVESTIGATE → … → COMPLETE); the runtime blocks the illegal ones."
            },
            {
              "id": "ley-aprob",
              "kicker": "T3",
              "title": "Approvals (T3)",
              "description": [
                "human consent"
              ],
              "detail": "<b>T3 approvals</b> require the human's consent before executing any mutation of live state."
            },
            {
              "id": "ley-verif",
              "kicker": "blind",
              "title": "Blind verification",
              "description": [
                "no one validates their own work"
              ],
              "detail": "<b>Blind verification</b>: the gate is bound to the task, not the role, so whoever produces the work cannot promote their own work to COMPLETE — an independent verifier confirms it.",
              "variant": "accent",
              "filters": [
                "f-verifica"
              ]
            }
          ]
        }
      ],
      "name": "4 · This is GAIA",
      "order": 6
    },
    {
      "id": "s-memory",
      "layout": "grid",
      "form": "dashboard",
      "columns": 6,
      "filters": [
        {
          "key": "negatives",
          "label": "the recorded negative",
          "steps": [
            "A dead end is durable value, not noise. ACCUMULATE appends it to the open thread while the work is happening, and ANCHORS keeps the ones that stayed true after the thread closed. Both ends are the same claim: an investigation already paid for is not paid for twice."
          ]
        },
        {
          "key": "carry-forward",
          "label": "what comes back next session",
          "steps": [
            "ANCHORS and LIVE THREADS are reinjected into a dispatch; nothing else on this page is. GATE is why that set stays small enough to be worth reading — anything that already has a canonical home is refused before it can cost attention."
          ]
        },
        {
          "key": "lineage",
          "label": "where a row came from",
          "steps": [
            "GRADUATED leaves a link to the anchor it produced, and LINEAGE is the pair of links that carry it: `graduated_to` for what a closed thread left behind, `supersedes` for a row replaced by a correct one. A wrong row is superseded and reclassified, never rewritten in place."
          ]
        },
        {
          "key": "who-writes",
          "label": "who may write it",
          "steps": [
            "The user is the authority for durable knowledge; the orchestrator searches, adjudicates, presents and verifies. Retiring a thread is a write, which is why EXIT lights with this chip: no specialist closes or graduates anything — every other agent only PROPOSES."
          ]
        }
      ],
      "sections": [
        {
          "id": "legend",
          "treatment": [
            "plain"
          ],
          "order": 1,
          "span": 6,
          "columns": 3,
          "children": [
            {
              "id": "lg-width",
              "order": 1,
              "kicker": "CHANNEL",
              "title": "Width is reach",
              "description": [
                "a wider box reaches further and",
                "carries more authority"
              ],
              "detail": "WIDTH is the only size channel this page claims. The left rail is one column wide because the two floors in it reach nothing durable: they are written automatically and expire on their own. Curated memory is five columns wide because it is the floor that is reinjected, linked and owned. Height carries no claim here — every stage of the lifecycle is deliberately the same height, so the row reads as one path of equal steps.",
              "treatment": [
                "centered"
              ]
            },
            {
              "id": "lg-chip",
              "order": 2,
              "kicker": "CHANNEL",
              "title": "Chips light relations",
              "description": [
                "there are no arrows here —",
                "a chip is the relation"
              ],
              "detail": "A grid cannot draw an edge, so every relation on this page is shared membership in a chip. Click one and it spotlights both of its ends at once, across sections. Four are declared above the canvas, and each one has both ends in different sections on purpose: a relation inside a single box would be a label, not a relation.",
              "treatment": [
                "centered"
              ]
            },
            {
              "id": "lg-click",
              "order": 3,
              "kicker": "CHANNEL",
              "title": "A click opens detail",
              "description": [
                "every card holds an argument",
                "it has no room to show"
              ],
              "detail": "A card is a fixed rectangle: a mark, one loud line and a short gloss. The argument behind it — why the gate refuses a fact that already has a home, why a recorded negative is worth keeping, why the two exits are one mechanism — lives in this panel, which has no bound. Nothing on this page was shortened to fit; it was moved here.",
              "treatment": [
                "centered"
              ]
            }
          ]
        },
        {
          "id": "automatic",
          "title": "AUTOMATIC",
          "subtitle": "written, then expires",
          "order": 2,
          "span": 1,
          "columns": 1,
          "children": [
            {
              "id": "a-events",
              "order": 1,
              "kicker": "EXPIRES FAST",
              "title": "Events",
              "description": [
                "short-lived",
                "evidence, not",
                "knowledge"
              ],
              "detail": "An event is written by the machine as the turn runs, and it is short-lived by design. It is evidence — what happened, in what order — and it is never reinjected into a later dispatch. Nothing has to retire it: it expires on its own, which is exactly why it has no lifecycle in the section to the right."
            },
            {
              "id": "a-episodes",
              "order": 2,
              "kicker": "EXPIRES LATER",
              "title": "Episodes",
              "description": [
                "kept longer, for",
                "diagnosis",
                "still evidence"
              ],
              "detail": "An episode is the record of a turn, also written automatically, and retained longer than an event because diagnosis needs it: what was asked, what ran, what came out. It is still evidence rather than knowledge — nobody curated it, nothing points at it, and it is not reinjected. Retention is a policy, not a lifecycle."
            },
            {
              "id": "a-no-third",
              "type": "spacer",
              "order": 3,
              "span": 1
            }
          ]
        },
        {
          "id": "curated",
          "title": "CURATED MEMORY",
          "subtitle": "the only floor with a lifecycle",
          "treatment": [
            "envelope"
          ],
          "order": 3,
          "span": 5,
          "columns": 5,
          "children": [
            {
              "id": "roles",
              "title": "THE THREE ROLES",
              "subtitle": "what a kept memory is for",
              "treatment": [
                "envelope"
              ],
              "order": 1,
              "span": 5,
              "columns": 3,
              "children": [
                {
                  "id": "r-anchors",
                  "order": 1,
                  "kicker": "ANCHORS",
                  "title": "Durable knowledge",
                  "description": [
                    "stable facts, accepted decisions,",
                    "useful dead ends, preferences",
                    "read at the start of a session"
                  ],
                  "detail": "An anchor holds what stays true after the session that produced it closed: a stable fact, a decision already accepted, a dead end worth not walking again, a stated preference. Anchors are the rows a new dispatch is opened with, which is what makes them expensive to get wrong and cheap to reuse. A useful dead end is an anchor like any other — a negative that stays true is durable knowledge, not a footnote.",
                  "filters": [
                    "negatives",
                    "carry-forward"
                  ]
                },
                {
                  "id": "r-threads",
                  "order": 2,
                  "kicker": "LIVE THREADS",
                  "title": "One open concern",
                  "description": [
                    "one unresolved concern each,",
                    "one status each",
                    "spends attention every session"
                  ],
                  "detail": "A live thread carries exactly one unresolved concern and exactly one status. The cardinality is the discipline: a thread holding two concerns cannot be closed, because half of it is always still open. Every live thread is read at the start of a session, so each one spends attention every session it stays open — which is the real cost the gate exists to control.",
                  "filters": [
                    "carry-forward"
                  ]
                },
                {
                  "id": "r-log",
                  "order": 3,
                  "kicker": "HISTORICAL LOG",
                  "title": "Append-only record",
                  "description": [
                    "written once, for audit",
                    "never read back into work"
                  ],
                  "detail": "The historical log is append-only and exists to be audited, not to be read back into work. Nothing in it is reinjected into a dispatch. Keeping it separate from anchors is what stops the anchor set from growing into a diary: a row worth carrying forward is an anchor, and a row worth keeping only as a record belongs here."
                }
              ]
            },
            {
              "id": "carry",
              "title": "CARRY-FORWARD",
              "subtitle": "the lifecycle of one curated row, read left to right",
              "treatment": [
                "envelope"
              ],
              "order": 2,
              "span": 5,
              "columns": 7,
              "children": [
                {
                  "id": "st-gate",
                  "treatment": [
                    "plain"
                  ],
                  "order": 1,
                  "span": 1,
                  "columns": 1,
                  "children": [
                    {
                      "id": "c-gate",
                      "order": 1,
                      "kicker": "GATE",
                      "title": "Does it have a home?",
                      "description": [
                        "a brief, a plan, a task,",
                        "the code — then not memory"
                      ],
                      "detail": "The first question is not «is this true?» but «does this already have a canonical home?» — a brief, a plan, a task, the project context, the code itself. If it does, it is NOT memory, and copying it here would create a second source of truth that goes stale the moment the first one moves. The gate is what keeps the reinjected set small enough to be worth reading.",
                      "filters": [
                        "carry-forward"
                      ]
                    }
                  ]
                },
                {
                  "id": "sep-gate-open",
                  "type": "separator",
                  "order": 2,
                  "span": 1,
                  "treatment": [
                    "vertical"
                  ]
                },
                {
                  "id": "st-open",
                  "treatment": [
                    "plain"
                  ],
                  "order": 3,
                  "span": 1,
                  "columns": 1,
                  "children": [
                    {
                      "id": "c-open",
                      "order": 1,
                      "kicker": "OPEN",
                      "title": "It becomes a thread",
                      "description": [
                        "one concern, one status",
                        "it costs attention now"
                      ],
                      "detail": "What passes the gate is opened as a live thread with one concern and one status. Opening is not free: from this point the row is read at the start of every session until it exits, so the cost is paid continuously rather than once. That is why the gate is a refusal by default and not a formality."
                    }
                  ]
                },
                {
                  "id": "sep-open-acc",
                  "type": "separator",
                  "order": 4,
                  "span": 1,
                  "treatment": [
                    "vertical"
                  ]
                },
                {
                  "id": "st-accumulate",
                  "treatment": [
                    "plain"
                  ],
                  "order": 5,
                  "span": 1,
                  "columns": 1,
                  "children": [
                    {
                      "id": "c-accumulate",
                      "order": 1,
                      "kicker": "ACCUMULATE",
                      "title": "It gathers evidence",
                      "description": [
                        "a dead end is written down",
                        "so nobody pays for it twice"
                      ],
                      "detail": "While a thread is open it only ever grows by APPEND: what was tried, what failed, what was ruled out. A recorded negative is first-class durable value — it is what stops the same investigation from being paid for twice — so it is written down at the moment it is learned, not at the moment it turns out to matter. Nothing here is rewritten in place; a correction is a new append.",
                      "filters": [
                        "negatives"
                      ]
                    }
                  ]
                },
                {
                  "id": "sep-acc-exit",
                  "type": "separator",
                  "order": 6,
                  "span": 1,
                  "treatment": [
                    "vertical"
                  ]
                },
                {
                  "id": "st-exit",
                  "treatment": [
                    "plain"
                  ],
                  "order": 7,
                  "span": 1,
                  "columns": 1,
                  "children": [
                    {
                      "id": "x-closed",
                      "order": 1,
                      "kicker": "CLOSED",
                      "title": "Attention returns",
                      "treatment": [
                        "half"
                      ],
                      "detail": "A thread is CLOSED when it stopped being relevant: the concern dissolved, the question was answered elsewhere, the context moved. Closing costs the attention back and leaves no link behind, because there was nothing durable to leave. It is not a failure state and it is not deletion — the row stays, reclassified.",
                      "filters": [
                        "who-writes"
                      ]
                    },
                    {
                      "id": "x-graduated",
                      "order": 2,
                      "kicker": "GRADUATED",
                      "title": "Knowledge survives",
                      "treatment": [
                        "half"
                      ],
                      "detail": "A thread GRADUATES when it finished and left knowledge worth holding. It links `graduated_to` the anchor it produced, so the anchor can always be traced back to the work that earned it. Closed and graduated are the two exits of the SAME mechanism — which is why they are two components in one section and not two sections — and neither of them is deletion.",
                      "filters": [
                        "who-writes",
                        "lineage"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "base",
          "treatment": [
            "plain"
          ],
          "order": 4,
          "span": 6,
          "columns": 3,
          "children": [
            {
              "id": "lineage",
              "title": "LINEAGE",
              "subtitle": "a row always points at where it came from",
              "treatment": [
                "envelope"
              ],
              "order": 1,
              "span": 1,
              "columns": 2,
              "children": [
                {
                  "id": "b-graduated-to",
                  "order": 1,
                  "kicker": "THE LINK LEFT",
                  "title": "The exit leaves a link",
                  "description": [
                    "a graduated thread points at",
                    "the anchor it produced"
                  ],
                  "detail": "`graduated_to` is the link a graduating thread leaves behind: from the thread that did the work to the anchor that holds what it learned. It is what makes an anchor auditable — the knowledge can be traced back to the concern that earned it, instead of appearing as a fact with no provenance.",
                  "filters": [
                    "lineage"
                  ]
                },
                {
                  "id": "b-supersedes",
                  "order": 2,
                  "kicker": "REPLACED, NOT EDITED",
                  "title": "Wrong is replaced",
                  "description": [
                    "a correct one replaces it",
                    "and the old one is kept",
                    "as history, not edited"
                  ],
                  "detail": "A row that turns out to be wrong is not edited and not removed. A correct row is written and `supersedes` it, and the old one is reclassified. Editing in place would erase the fact that the system once believed something else, which is the one thing an audit needs most. Neither exit of a thread is deletion either: retirement is a change of class, never a removal.",
                  "filters": [
                    "lineage"
                  ]
                }
              ]
            },
            {
              "id": "sep-base",
              "type": "separator",
              "order": 2,
              "span": 1,
              "treatment": [
                "vertical"
              ]
            },
            {
              "id": "ownership",
              "title": "OWNERSHIP",
              "subtitle": "who may write curated memory",
              "treatment": [
                "envelope"
              ],
              "order": 3,
              "span": 1,
              "columns": 3,
              "children": [
                {
                  "id": "o-user",
                  "order": 1,
                  "kicker": "USER",
                  "title": "The authority",
                  "description": [
                    "durable knowledge",
                    "is the user's call"
                  ],
                  "detail": "The user is the authority for durable knowledge. What becomes an anchor, what is worth carrying between sessions, what was decided and what may be forgotten — none of it is a machine judgement. An agent that promotes its own conclusion into durable memory has substituted itself for the only authority there is.",
                  "filters": [
                    "who-writes"
                  ]
                },
                {
                  "id": "o-orchestrator",
                  "order": 2,
                  "kicker": "ORCHESTRATOR",
                  "title": "Searches, adjudicates",
                  "description": [
                    "presents and verifies",
                    "the only writer"
                  ],
                  "detail": "The orchestrator searches memory, adjudicates between what it finds, presents the result and verifies it. It is also the only role that writes: opening, appending to, closing and graduating a thread all belong to it, because every one of those acts changes what a future session will be handed.",
                  "filters": [
                    "who-writes"
                  ]
                },
                {
                  "id": "o-specialists",
                  "order": 3,
                  "kicker": "SPECIALISTS",
                  "title": "Only propose",
                  "description": [
                    "every other agent proposes",
                    "and never writes"
                  ],
                  "detail": "Every other agent PROPOSES and never writes curated memory. A specialist that wrote directly would put its own turn's conclusion into the set every later dispatch is opened with, without anyone having adjudicated it — and a proposal that is never adjudicated is indistinguishable from a fact. Proposing is not a weaker permission; it is the whole protocol.",
                  "filters": [
                    "who-writes"
                  ]
                }
              ]
            }
          ]
        }
      ],
      "name": "Memory",
      "order": 8
    }
  ]
};
if (typeof document !== 'undefined' && document.documentElement)
  document.documentElement.setAttribute('data-palette', window.__DOC__.palette || 'neutral');
