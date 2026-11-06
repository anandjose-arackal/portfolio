/* ────────────────────────────────────────────────────────────
   Projects — repository-style cards.
   Open-source entries come from Anand's public GitHub; the
   enterprise entries are real work from his profile (private
   code, so no links). Metrics are real — do not embellish.
   Buttons only render for links that exist.
   ──────────────────────────────────────────────────────────── */

export const projectCategories = [
  "Enterprise",
  "Open Source",
  "AI",
  "Cloud",
  "Automation",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type Project = {
  name: string;
  visibility: "public" | "private";
  /** Upstream contribution rather than an own project. */
  contribution?: boolean;
  categories: ProjectCategory[];
  architecture: string;
  description: string;
  problem: string;
  impact: string;
  tech: string[];
  links: { github?: string; demo?: string; docs?: string };
  featured: boolean;
};

export const projects: Project[] = [
  {
    name: "erp-integration-platform",
    visibility: "private",
    categories: ["Enterprise", "Automation"],
    architecture: "Configurable ETL · Ruby sandbox · ELK Stack error handling",
    description:
      "A configurable ETL platform for ERP integrations at Lockstep AP, paired with customer onboarding tooling for data import and master-file setup.",
    problem:
      "Each new customer meant a bespoke ERP integration and more than a week of onboarding.",
    impact:
      "Onboarding cut from over a week to 1–2 days; even the most complex ERP integration now snaps together like Lego blocks.",
    tech: ["Ruby", "MySQL", "ELK Stack", "Shell"],
    links: {},
    featured: true,
  },
  {
    name: "fest_hub",
    visibility: "public",
    categories: ["Open Source"],
    architecture: "Next.js · Supabase (Postgres + RLS) · Vercel",
    description:
      "Feast Hub — a multi-organisation festival competition platform: public registration and results portal, an admin back-office, and a big-screen live results display.",
    problem:
      "Running competitions across a multi-level organisation hierarchy, with age categories, solo and team entries, points, standings and certificates.",
    impact:
      "One platform from registration to live results and certificates — built end to end and actively used.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Vercel"],
    links: {
      github: "https://github.com/anandjose-arackal/fest_hub",
      demo: "https://missionhub-five.vercel.app",
    },
    featured: true,
  },
  {
    name: "food-portal",
    visibility: "private",
    categories: ["Automation"],
    architecture: "Next.js 16 · Supabase (Postgres + RLS + Realtime) · Razorpay · Firebase OTP",
    description:
      "Food pre-order and counter app for Nazrani Fest 2026: guests order and pay online and get a QR pickup token; staff run counter billing, live order handover and a payments dashboard.",
    problem:
      "Festival food stalls mean long queues, cash handling and no clear record of who has paid for what.",
    impact:
      "Online and counter payments through Razorpay (UPI, GPay, cards), confirmed automatically by webhook; every order line priced server-side in one atomic database call.",
    tech: ["Next.js", "TypeScript", "Supabase", "Razorpay", "Firebase", "Vercel"],
    links: { demo: "https://www.nasrani.in" },
    featured: false,
  },
  {
    name: "padheyam",
    visibility: "public",
    categories: ["Open Source"],
    architecture: "Next.js 16 · Supabase · Google Maps · TanStack Query",
    description:
      "A mobile-first Catholic Mass finder: nearby churches with upcoming Mass, Adoration and Confession times, a map-first home screen and a live next-Mass countdown.",
    problem:
      "Mass, Adoration and Confession times are scattered across individual parishes, with no single place to find the next one nearby.",
    impact:
      "Location-aware schedules in one tap — fully anonymous by design, with no accounts, no sign-in and no personal data stored.",
    tech: ["Next.js", "React 19", "TypeScript", "Supabase", "Google Maps"],
    links: {
      github: "https://github.com/anandjose-arackal/padheyam",
      demo: "https://padheyam.vercel.app",
    },
    featured: false,
  },
  {
    name: "bank-payment-integrations",
    visibility: "private",
    categories: ["Enterprise"],
    architecture: "Bank APIs · collection wallet · BBPS · bulk + API payment rails",
    description:
      "Payment integrations with 3 leading Indian banks, including collection wallet and BBPS APIs, tuned for high-volume bulk and API payments.",
    problem:
      "Supplier payments had to move through bank rails reliably, at high volume and high traffic.",
    impact:
      "40,000+ bulk payments processed within minutes; 200,000+ API payments a month for a single client.",
    tech: ["Ruby", "MySQL", "REST", "AWS"],
    links: {},
    featured: false,
  },
  {
    name: "cloud-data-migrations",
    visibility: "private",
    categories: ["Cloud", "Enterprise"],
    architecture: "Master-replica cutover · Azure MySQL Flexible Server · multi-cloud export",
    description:
      "Production MySQL migrated to Azure MySQL Flexible Server, plus tailored customer data exports and cloud-to-cloud migrations.",
    problem:
      "Moving a live production database — and customers' data — without long downtime or loss of trust.",
    impact:
      "Database cutover with only ~3 hours of downtime; customer data delivered across 5 platforms: Azure, GCP, AWS, Drive API and ATP.",
    tech: ["MySQL", "Azure", "GCP", "AWS", "Shell"],
    links: {},
    featured: false,
  },
  {
    name: "sara-ai-agents",
    visibility: "private",
    categories: ["AI", "Enterprise"],
    architecture: "AI skills + agents · React · .NET",
    description:
      "AI skills and agents for Sage AR Automation, alongside full localisation of the product's React UI.",
    problem:
      "Automating accounts-receivable work with AI, and making the product ready for markets beyond English.",
    impact:
      "UI localised into 5 languages, helping introduce SARA to new markets across the globe.",
    tech: ["React", ".NET (C#)", "AI Agents"],
    links: {},
    featured: false,
  },
  {
    name: "data-versioning-audit-trail",
    visibility: "private",
    categories: ["Enterprise"],
    architecture: "Versioned data objects · generated audit trails",
    description:
      "Version management for data objects, with audit trails generated for every change.",
    problem:
      "Finance users need to trace exactly how and when a record changed.",
    impact:
      "Every change is traceable — the old value, the new value, and exactly when it changed.",
    tech: ["Ruby", "MySQL"],
    links: {},
    featured: false,
  },
  {
    name: "openSUSE/osem",
    visibility: "public",
    contribution: true,
    categories: ["Open Source"],
    architecture: "Ruby on Rails · maintained by the openSUSE project",
    description:
      "Open Source Event Manager — openSUSE's event management tool for free and open-source software conferences.",
    problem:
      "Issue #1092: handling of empty proposal abstracts.",
    impact:
      "Contributed a fix during an openSUSE bugathon (PR #1166, August 2016).",
    tech: ["Ruby on Rails", "Ruby"],
    links: { github: "https://github.com/openSUSE/osem/pull/1166" },
    featured: false,
  },
];
