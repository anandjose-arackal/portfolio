/* ────────────────────────────────────────────────────────────
   Career — rendered as a deployment history.
   Each role (incl. promotions within one company) is a deploy.
   Source of truth: Anand's profile (external-facing edition).
   All metrics are real — do not embellish them.
   Lessons Learned are reflective drafts; edit freely.
   ──────────────────────────────────────────────────────────── */

export type Deployment = {
  version: string;
  role: string;
  company: string;
  period: string;
  current: boolean;
  summary: string;
  log: string[];
  responsibilities: string[];
  deliveries: string[];
  impact: string[];
  tech: string[];
  lessons: string[];
};

export const deployments: Deployment[] = [
  {
    version: "v4.0",
    role: "Software Engineer",
    company: "Sage AR Automation (SARA)",
    period: "2025 — Present",
    current: true,
    summary:
      "Building AI skills and agents for Sage AR Automation, and preparing the product for new markets worldwide through full UI localisation.",
    log: [
      "checkout release/sara",
      "loading domain context: accounts-receivable …",
      "build passed — ai skills + agents suite green",
      "i18n: react ui → 5 languages ✓",
      "shipping: sara → new markets",
    ],
    responsibilities: [
      "Build and refine AI skills and agents that automate accounts-receivable workflows.",
      "Own internationalisation of SARA's React UI to support global market expansion.",
      "Maintain and harden payment integrations and financial calculation logic.",
    ],
    deliveries: [
      "AI skills and agents shipped into the SARA product.",
      "UI localisation across 5 languages for SARA's React front end.",
      "Local-time handling for early-payment discount calculation.",
      "Payment functionality fixes in the Fortis payment integration.",
    ],
    impact: [
      "Helped introduce SARA to new markets across the globe.",
      "Early-payment discounts now evaluate correctly across every time zone.",
      "Restored reliable payment functionality in the Fortis integration.",
    ],
    tech: ["React", ".NET (C#)", "AI Agents", "Localisation"],
    lessons: [
      "Localisation is a product decision, not a string-replacement task — dates, currencies and time zones all have opinions.",
      "Anything that touches money and time deserves explicit time-zone handling, never the server default.",
    ],
  },
  {
    version: "v3.0",
    role: "Solution Engineer",
    company: "Lockstep AP (Sage)",
    period: "Oct 2021 — 2025",
    current: false,
    summary:
      "Solution engineering on Lockstep AP — owning customer escalations, migrating production MySQL to Azure, and keeping the platform stable while delivering large-scale customer data migrations.",
    log: [
      "checkout release/solution-engineer",
      "migrate: mysql → azure mysql flexible server (master-replica) …",
      "cutover complete — downtime ~3h ✓",
      "export: customer data → azure · gcp · aws · drive api · atp",
      "status: platform stable ✓",
    ],
    responsibilities: [
      "Resolved customer support escalations quickly and end to end.",
      "Planned and executed the production MySQL migration to Azure.",
      "Maintained platform stability and reliability — from production fixes to VM operations.",
      "Engineered tailored data-export and cloud-to-cloud migrations for customers.",
    ],
    deliveries: [
      "MySQL → Azure MySQL Flexible Server migration using a master-replica plan.",
      "Tailored data-export and cloud-to-cloud migrations across 5 platforms: Azure, GCP, AWS, Drive API and ATP.",
    ],
    impact: [
      "Moved the production database to Azure with only ~3 hours of downtime.",
      "Improved overall customer experience through fast issue resolution.",
      "Kept the platform stable and reliable throughout large-scale customer data migrations.",
    ],
    tech: ["Azure", "MySQL", "AWS", "GCP", "Ruby", "Shell"],
    lessons: [
      "A master-replica plan turns a risky cutover into a rehearsed, reversible one.",
      "Reliability work is invisible when it's done right — which is exactly the point.",
    ],
  },
  {
    version: "v2.0",
    role: "Product Development Engineer",
    company: "Finly.io (now Lockstep AP)",
    period: "Oct 2018 — Oct 2021",
    current: false,
    summary:
      "Built the product foundations of an AP automation platform — a configurable ETL engine for ERP integrations, customer onboarding tooling, data audit trails, and high-volume payment integrations with leading Indian banks.",
    log: [
      "checkout release/product-development",
      "build: etl engine (ruby sandbox) + erp connectors …",
      "build passed — onboarding + audit-trail suite green",
      "load: 40,000+ bulk payments → minutes ✓",
      "impact: onboarding 1 week → 1–2 days ✓",
    ],
    responsibilities: [
      "Designed a configurable ETL platform, running in a Ruby sandbox, for ERP integrations.",
      "Built customer onboarding tooling covering data import and master-file setup.",
      "Optimised the platform for high traffic and large data volumes.",
      "Built and managed payment integrations with leading Indian banks.",
    ],
    deliveries: [
      "ETL platform that makes even the most complex ERP integration as simple as snapping together Lego blocks.",
      "Version management for data objects with full audit trails — the old value, the new value, and exactly when it changed.",
      "ELK Stack error handling that catches customer data issues before import.",
      "Payment integrations with 3 leading Indian banks, including collection wallet and BBPS APIs.",
    ],
    impact: [
      "Cut customer onboarding time from over a week to 1–2 days.",
      "Processed 40,000+ bulk payments within minutes.",
      "Handled 200,000+ API payments a month for a single client.",
    ],
    tech: ["Ruby", "MySQL", "ELK Stack", "React", "AWS", "Shell"],
    lessons: [
      "Make integrations configurable, not custom — the tenth ERP should cost a fraction of the first.",
      "Catch bad data at the door; every issue fixed before import is one that never reaches a customer's books.",
    ],
  },
  {
    version: "v1.0",
    role: "Associate Software Engineer",
    company: "Trivand Technologies Pvt Ltd",
    period: "Feb 2016 — Sep 2018",
    current: false,
    summary:
      "First engineering role — designed and built multi-client insurance management software for a leading insurance brokerage, from role-based claims workflows to bulk invoicing.",
    log: [
      "init commit — first production role",
      "building insurance platform for multi-client tenancy …",
      "build passed — claims + invoicing suite green",
      "deploy: claim-assignment + bulk-invoicing → production",
      "impact: resource utilisation +15% ✓",
    ],
    responsibilities: [
      "Designed and developed a multi-client insurance management platform for a leading insurance brokerage.",
      "Established operational specifications and formulated software requirements with stakeholders.",
      "Wrote maintainable, extensible code in a collaborative team environment.",
      "Partnered with the design team to elevate the client-side experience.",
    ],
    deliveries: [
      "Role-based claim assignment algorithm tailored to different user roles.",
      "Bulk claim and invoicing features to recover large volumes of claims in a short time span.",
      "Responsive customer-support workflows that opened an additional revenue stream.",
    ],
    impact: [
      "Increased resource utilisation by 15% through role-based claim assignment.",
      "Accelerated large-scale claim recovery via bulk processing and invoicing.",
      "Generated additional revenue for the company through responsive customer support.",
    ],
    tech: ["Ruby on Rails", "MongoDB", "Redis", "jQuery", "REST", "AWS"],
    lessons: [
      "Building for multiple clients teaches you where software must be configurable — and where it must not.",
      "Clear requirements up front save more time than clever code ever will.",
    ],
  },
];
