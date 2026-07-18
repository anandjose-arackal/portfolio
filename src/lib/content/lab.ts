/* ────────────────────────────────────────────────────────────
   Lab — current experiments.
   TODO(anand): update statuses, notes and repo links.
   ──────────────────────────────────────────────────────────── */

export type ExperimentStatus = "active" | "exploring" | "paused" | "shipped";

export type Experiment = {
  name: string;
  status: ExperimentStatus;
  description: string;
  progress: string;
  github?: string;
  notes: string;
};

export const experimentStatusMeta: Record<
  ExperimentStatus,
  { label: string; color: string }
> = {
  active: { label: "Active", color: "var(--color-ok)" },
  exploring: { label: "Exploring", color: "var(--color-info)" },
  paused: { label: "Paused", color: "var(--color-faint)" },
  shipped: { label: "Shipped", color: "var(--color-accent)" },
};

export const experiments: Experiment[] = [
  {
    name: "Claude Code",
    status: "active",
    description:
      "Agentic coding as a daily workflow — repo-aware refactoring, migration tooling and review automation.",
    progress: "Integrated into daily engineering work; measuring where it compounds.",
    notes:
      "The interesting question isn't 'can it code' — it's which loops it can own end-to-end.",
  },
  {
    name: "MCP",
    status: "active",
    description:
      "Model Context Protocol servers exposing internal systems to agents with scoped, auditable access.",
    progress: "Toolkit of small servers in daily use; hardening auth patterns.",
    github: "https://github.com/anandjosearackal", // TODO(anand)
    notes: "Context is the moat. MCP is the plumbing for it.",
  },
  {
    name: "Agentic AI",
    status: "exploring",
    description:
      "Multi-step agents for engineering chores: dependency upgrades, log triage, migration rehearsal.",
    progress: "Prototypes for two internal workflows; evaluating reliability.",
    notes: "Agents fail politely or fail loudly — designing for the second.",
  },
  {
    name: "Prompt Engineering",
    status: "active",
    description:
      "Systematic prompt design for extraction and classification in finance documents.",
    progress: "Eval harness with versioned prompts; regression-testing prompt changes.",
    notes: "Prompts are code. Version them, test them, review them.",
  },
  {
    name: "OpenAI",
    status: "exploring",
    description:
      "Structured outputs and tool-calling patterns for document-heavy enterprise pipelines.",
    progress: "Comparative evals against Claude for extraction accuracy.",
    notes: "Model choice is a per-workload decision, not a religion.",
  },
  {
    name: "Gemini",
    status: "exploring",
    description:
      "Long-context document processing and multimodal invoice understanding.",
    progress: "Early benchmarks on large document batches.",
    notes: "Long context changes chunking strategy — sometimes to 'don't'.",
  },
  {
    name: "VEO",
    status: "paused",
    description:
      "Generative video for internal demos and product walkthroughs.",
    progress: "Proof-of-concept renders; parked until a real use case earns it.",
    notes: "Cool ≠ useful. Parked honestly.",
  },
  {
    name: "Automation",
    status: "active",
    description:
      "Small scripts that erase recurring toil — release notes, environment checks, data fixes.",
    progress: "Growing internal toolbox; each tool saves minutes daily.",
    notes: "The best automation is boring and runs forever.",
  },
];
