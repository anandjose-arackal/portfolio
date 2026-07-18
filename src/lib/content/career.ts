/* ────────────────────────────────────────────────────────────
   Career — rendered as a deployment history.
   TODO(anand): replace company names, dates and all bullet
   content with your real history.
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
    role: "Senior Software Engineer",
    company: "Sage AP Automation",
    period: "2022 — Present",
    current: true,
    summary:
      "Building enterprise AP automation — invoice capture, approval routing and payment workflows for finance teams at scale.",
    log: [
      "checkout release/senior-engineer",
      "restoring domain context: accounts-payable …",
      "build passed — finance workflows compiled clean",
      "shipping: automation pipeline → production",
      "monitoring: business impact nominal ✓",
    ],
    responsibilities: [
      "Own critical AP workflow services end-to-end — design, delivery and production health.",
      "Lead Azure database migrations and data archiving strategy across tenants.",
      "Drive SQL performance work on high-volume invoice tables.",
      "Mentor engineers on architecture, code review and operational discipline.",
    ],
    deliveries: [
      "Invoice automation pipeline processing high monthly document volume.",
      "Azure flexible-server migration completed with minimal downtime.",
      "Audit-history archiving strategy that cut primary DB growth sharply.",
    ],
    impact: [
      "Reduced manual AP touchpoints for enterprise finance teams.",
      "Cut key query times from seconds to milliseconds on hot paths.",
      "Lowered database storage cost via archiving and index strategy.",
    ],
    tech: ["Ruby on Rails", ".NET", "SQL Server", "PostgreSQL", "Azure", "Redis"],
    lessons: [
      "Boring, observable systems beat clever ones in finance software.",
      "Migrations succeed on rehearsal count, not on courage.",
    ],
  },
  {
    version: "v3.0",
    role: "Software Engineer",
    company: "Enterprise SaaS company", // TODO(anand)
    period: "2018 — 2022",
    current: false,
    summary:
      "Built and scaled multi-tenant SaaS modules; moved workloads to the cloud and hardened the platform for enterprise customers.",
    log: [
      "checkout release/software-engineer",
      "provisioning cloud infrastructure …",
      "build passed — multi-tenant suite green",
      "shipped: platform modules → production",
    ],
    responsibilities: [
      "Delivered customer-facing modules across the full stack.",
      "Migrated on-prem workloads to cloud infrastructure.",
      "Introduced background job architecture for long-running work.",
    ],
    deliveries: [
      "Cloud migration of core services with zero data loss.",
      "Reporting engine used across enterprise accounts.",
      "CI/CD pipeline that cut release time from days to hours.",
    ],
    impact: [
      "Enabled enterprise deals by meeting cloud and compliance requirements.",
      "Improved release cadence and deployment confidence across the team.",
    ],
    tech: ["Ruby on Rails", "React", "MySQL", "AWS", "Docker"],
    lessons: [
      "Tenant isolation decisions made early are the cheapest ones.",
      "A deploy pipeline is a product — treat it like one.",
    ],
  },
  {
    version: "v2.0",
    role: "Full Stack Developer",
    company: "Product studio", // TODO(anand)
    period: "2016 — 2018",
    current: false,
    summary:
      "Shipped web products end-to-end — from database schema to frontend — across several business domains.",
    log: [
      "checkout release/full-stack",
      "installing frontend toolchain …",
      "build passed — UI + API integration green",
      "shipped: client products → production",
    ],
    responsibilities: [
      "Built REST APIs and React frontends for business applications.",
      "Owned database design and query optimization for product features.",
      "Worked directly with stakeholders to turn workflows into software.",
    ],
    deliveries: [
      "Multiple production web applications delivered end-to-end.",
      "Reusable component library adopted across projects.",
    ],
    impact: [
      "Shortened client delivery cycles through shared tooling.",
      "Replaced manual business processes with dependable software.",
    ],
    tech: ["Ruby on Rails", "React", "PostgreSQL", "Redis"],
    lessons: [
      "The database schema outlives every framework choice above it.",
      "Talking to users beats guessing what they need.",
    ],
  },
  {
    version: "v1.0",
    role: "Software Developer",
    company: "IT services firm", // TODO(anand)
    period: "2014 — 2016",
    current: false,
    summary:
      "First production years — web development, system administration and the fundamentals of keeping software alive.",
    log: [
      "initial commit",
      "learning production the honest way …",
      "build passed — first systems live",
      "shipped: v1.0 → production",
    ],
    responsibilities: [
      "Developed and maintained web applications for business clients.",
      "Administered Linux servers, backups and deployments.",
      "Automated recurring operational tasks with scripts.",
    ],
    deliveries: [
      "Business applications running for years after handover.",
      "Deployment and backup automation for client infrastructure.",
    ],
    impact: [
      "Kept client systems reliable with minimal operational budget.",
    ],
    tech: ["Ruby on Rails", "MySQL", "Linux", "Bash"],
    lessons: [
      "Production teaches faster than any course — keep the pager close.",
      "Automation compounds; manual heroics don't.",
    ],
  },
];
