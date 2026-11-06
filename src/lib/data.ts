import {
  Bot,
  Boxes,
  Cloud,
  FlaskConical,
  FolderGit2,
  LayoutGrid,
  Network,
  NotebookPen,
  Rocket,
  Send,
  Server,
  Workflow,
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
  // Headline from the profile PDF — final wording still open.
  role: "Software & AI Architect",
  specialties: ["Full-Stack", "Integrations", "AI Architecture"],
  company: "Sage AR Automation",
  location: "Kerala, India",
  timezone: "Asia/Kolkata",
  status: "Available",
  email: "anandjose.live@gmail.com",
  github: "https://github.com/anandjose-arackal",
  linkedin: "https://www.linkedin.com/in/anand-jose-arackal",
  resume: "/resume.pdf",
  // Vercel sets this to the production domain; set NEXT_PUBLIC_SITE_URL to override.
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  tagline: "Currently building enterprise finance software at Sage AR Automation.",
  summary:
    "Ten years spanning the full software development lifecycle — from requirements and architecture through delivery, systems integration, and the cloud infrastructure that runs it at scale. My focus is solution engineering and system reliability: turning complex business problems into software that stays up, scales cleanly, and keeps earning its keep in production. Today I work as an AI architect: designing agent systems end to end — how LLMs, tools and enterprise data connect, where guardrails sit, and how agents are evaluated — so AI moves from demo to dependable production software.",
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
  { label: "Career", href: "/career", icon: Rocket, ready: true },
  { label: "Systems", href: "/systems", icon: Boxes, ready: true },
  { label: "Projects", href: "/projects", icon: FolderGit2, ready: true },
  { label: "Engineering Notes", href: "/notes", icon: NotebookPen, ready: true },
  { label: "Lab", href: "/lab", icon: FlaskConical, ready: true },
  { label: "Contact", href: "/contact", icon: Send, ready: true },
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
  { label: "Projects", value: "10+", detail: "shipped to enterprise" },
  { label: "Enterprise Domains", value: "Finance", detail: "AP & AR automation" },
  { label: "Cloud Platforms", value: "Azure · AWS", detail: "multi-tenant scale" },
  { label: "Current Mission", value: "AI Architecture", detail: "at Sage" },
];

/* ────────────────────────────────────────────────────────────
   Home — current focus widgets
   ──────────────────────────────────────────────────────────── */

export type FocusStatus = "active" | "exploring" | "ongoing";

export type FocusArea = {
  title: string;
  status: FocusStatus;
  icon: LucideIcon;
  meta: string;
};

export const focusAreas: FocusArea[] = [
  {
    title: "Enterprise Automation",
    status: "active",
    icon: Workflow,
    meta: "Finance · AP · Workflows",
  },
  {
    title: "Cloud Architecture",
    status: "active",
    icon: Cloud,
    meta: "Azure · AWS · Migrations",
  },
  {
    title: "AI Assisted Engineering",
    status: "exploring",
    icon: Bot,
    meta: "LLMs · MCP · Automation",
  },
  {
    title: "System Design",
    status: "ongoing",
    icon: Network,
    meta: "Scalable · Secure · Reliable",
  },
  {
    title: "Backend Engineering",
    status: "active",
    icon: Server,
    meta: "SQL · Queues · APIs",
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

