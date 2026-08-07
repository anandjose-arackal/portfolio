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
    "Ten years spanning the full software development lifecycle — from requirements and architecture through delivery, systems integration, and the cloud infrastructure that runs it at scale. My focus is solution engineering and system reliability: turning complex business problems into software that stays up, scales cleanly, and keeps earning its keep in production.",
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

