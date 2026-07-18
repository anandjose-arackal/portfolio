import {
  Boxes,
  FlaskConical,
  FolderGit2,
  LayoutGrid,
  NotebookPen,
  Rocket,
  Send,
  type LucideIcon,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────
   Profile
   TODO(anand): replace placeholder URLs with real profiles and
   drop resume.pdf into /public.
   ──────────────────────────────────────────────────────────── */

export const profile = {
  name: "Anand Jose Arackal",
  initials: "AJA",
  role: "Senior Software Engineer",
  company: "Sage AP Automation",
  location: "Kerala, India",
  timezone: "Asia/Kolkata",
  status: "Available",
  email: "anandjose.live@gmail.com",
  github: "https://github.com/anandjosearackal",
  linkedin: "https://www.linkedin.com/in/anandjosearackal",
  resume: "/resume.pdf",
  tagline: "Currently building enterprise finance software at Sage AP Automation.",
  summary:
    "Over the past decade I have designed, developed and maintained enterprise software that automates complex business workflows, scales cloud infrastructure and improves engineering productivity.",
};

/* ────────────────────────────────────────────────────────────
   Navigation
   ──────────────────────────────────────────────────────────── */

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  ready: boolean;
};

export const nav: NavItem[] = [
  { label: "Overview", href: "/", icon: LayoutGrid, ready: true },
  { label: "Career", href: "/career", icon: Rocket, ready: false },
  { label: "Systems", href: "/systems", icon: Boxes, ready: false },
  { label: "Projects", href: "/projects", icon: FolderGit2, ready: false },
  { label: "Engineering Notes", href: "/notes", icon: NotebookPen, ready: false },
  { label: "Lab", href: "/lab", icon: FlaskConical, ready: false },
  { label: "Contact", href: "/contact", icon: Send, ready: false },
];

/* ────────────────────────────────────────────────────────────
   Home — stats row
   ──────────────────────────────────────────────────────────── */

export type Stat = {
  label: string;
  value: string;
  detail: string;
};

export const stats: Stat[] = [
  { label: "Experience", value: "10+", detail: "years in production" },
  { label: "Projects", value: "20+", detail: "shipped to enterprise" },
  { label: "Enterprise Domains", value: "Finance", detail: "AP automation" },
  { label: "Cloud Platforms", value: "Azure · AWS", detail: "multi-tenant scale" },
  { label: "Current Mission", value: "Enterprise Automation", detail: "at Sage" },
];

/* ────────────────────────────────────────────────────────────
   Home — current focus widgets
   ──────────────────────────────────────────────────────────── */

export type FocusStatus = "active" | "exploring" | "ongoing";

export type FocusArea = {
  title: string;
  status: FocusStatus;
  description: string;
  focus: string;
  tech: string[];
};

export const focusAreas: FocusArea[] = [
  {
    title: "Enterprise Automation",
    status: "active",
    description:
      "Designing AP automation that removes manual invoice-to-payment work for finance teams — approval routing, matching and exception handling at scale.",
    focus: "Workflow orchestration and approval pipelines",
    tech: ["Ruby on Rails", ".NET", "SQL Server", "Azure"],
  },
  {
    title: "Cloud Architecture",
    status: "active",
    description:
      "Running multi-tenant workloads on Azure with reliability, cost and observability treated as first-class requirements, not afterthoughts.",
    focus: "Azure database migrations and infra as code",
    tech: ["Azure", "AWS", "Docker", "Kubernetes"],
  },
  {
    title: "AI Assisted Engineering",
    status: "exploring",
    description:
      "Embedding LLMs into the engineering workflow — code review, migration tooling and internal agents that shorten the path from idea to production.",
    focus: "MCP servers and agentic workflows",
    tech: ["Claude", "OpenAI", "LangChain", "MCP"],
  },
  {
    title: "System Design",
    status: "ongoing",
    description:
      "Decomposing monoliths where it pays and keeping them where it doesn't. Boundaries drawn from the domain, not from fashion.",
    focus: "Event-driven boundaries in finance workflows",
    tech: ["REST", "Event Driven", "DDD", "Microservices"],
  },
  {
    title: "Backend Engineering",
    status: "active",
    description:
      "Query plans, background job throughput and API reliability — the unglamorous work that decides whether software survives real load.",
    focus: "SQL performance and job queue throughput",
    tech: ["Rails", "Node.js", "PostgreSQL", "Redis"],
  },
];

export const focusStatusMeta: Record<
  FocusStatus,
  { label: string; color: string }
> = {
  active: { label: "Active", color: "var(--color-ok)" },
  exploring: { label: "Exploring", color: "var(--color-info)" },
  ongoing: { label: "Ongoing", color: "var(--color-accent)" },
};

/* ────────────────────────────────────────────────────────────
   Home — today.json
   ──────────────────────────────────────────────────────────── */

export const todayJson = {
  role: "Senior Software Engineer",
  company: "Sage AP Automation",
  experience: "10+ Years",
  currently_building: ["Enterprise Finance", "Cloud Systems", "AI Engineering"],
  learning: ["MCP", "Agentic AI", "LLMs"],
};
