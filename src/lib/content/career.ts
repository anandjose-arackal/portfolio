/* ────────────────────────────────────────────────────────────
   Career — rendered as a deployment history.
   Each role (incl. promotions within one company) is a deploy.
   v1.0 (Trivand) is fully real. The Finly.io → Sage roles have
   real titles, companies and dates; TODO(anand): tighten the
   bullet content for v2.0–v4.0 to match your actual work.
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
    role: "Product Engineer",
    company: "Sage AP Automation",
    period: "2025 — Present",
    current: true,
    summary:
      "Building enterprise AP automation at Sage — invoice capture, approval routing and payment workflows for finance teams at scale.",
    log: [
      "checkout release/product-engineer",
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
    role: "Solution Engineer",
    company: "Finly.io → Sage plc",
    period: "Oct 2021 — 2025",
    current: false,
    summary:
      "Moved into solution engineering as Finly.io was acquired by Sage plc — bridging product, customers and delivery for enterprise finance automation.",
    log: [
      "checkout release/solution-engineer",
      "acquisition merge: finly.io → sage plc …",
      "build passed — enterprise integrations green",
      "shipped: customer solutions → production",
    ],
    responsibilities: [
      "Owned solution design for enterprise customer integrations and onboarding.",
      "Bridged engineering, product and customers to deliver AP automation at scale.",
      "Drove system reliability and production support for key accounts.",
    ],
    deliveries: [
      "Enterprise customer integrations delivered end-to-end.",
      "Solution tooling that shortened onboarding and integration time.",
    ],
    impact: [
      "Improved delivery speed and reliability for enterprise finance customers.",
      "Smoothed the platform's transition through acquisition into Sage.",
    ],
    tech: ["Ruby on Rails", ".NET", "SQL Server", "Azure", "REST"],
    lessons: [
      "Solution engineering is translation — between the domain and the system.",
      "The best integration is the one the customer never has to think about.",
    ],
  },
  {
    version: "v2.0",
    role: "Product Development Engineer",
    company: "Finly.io",
    period: "Oct 2018 — Oct 2021",
    current: false,
    summary:
      "Joined an AP automation startup, building core product features across the stack as the platform scaled toward enterprise.",
    log: [
      "checkout release/product-development",
      "provisioning cloud infrastructure …",
      "build passed — platform suite green",
      "shipped: product modules → production",
    ],
    responsibilities: [
      "Built customer-facing product features end-to-end across the stack.",
      "Developed integrations and APIs for the AP automation platform.",
      "Contributed to database design and performance for growing data volumes.",
    ],
    deliveries: [
      "Core product modules shipped to a growing customer base.",
      "Third-party and payment integrations for the platform.",
      "Background job architecture for long-running document processing.",
    ],
    impact: [
      "Helped scale the product from startup toward enterprise readiness.",
      "Improved platform throughput as document volumes grew.",
    ],
    tech: ["Ruby on Rails", "React", "PostgreSQL", "Redis", "AWS"],
    lessons: [
      "In a startup, the feature you ship this week funds the architecture you want next quarter.",
      "Integrations are where product reality meets the outside world — treat them as first-class.",
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
      "impact: resource utilization +15% ✓",
    ],
    responsibilities: [
      "Designed and developed a multi-client insurance management platform for a leading insurance brokerage.",
      "Established operational specifications and formulated software requirements with stakeholders.",
      "Wrote maintainable, extensible code in a collaborative team environment.",
      "Partnered with the design team to elevate the client-side experience.",
    ],
    deliveries: [
      "Role-based claim assignment algorithm tailored to different user roles.",
      "Bulk claim and invoicing functionality for high-volume claim recovery.",
      "Responsive customer-support workflows that opened an additional revenue stream.",
    ],
    impact: [
      "Lifted resource utilization by 15% through role-aware claim assignment.",
      "Accelerated large-scale claim recovery via bulk processing and invoicing.",
      "Generated additional revenue for the company through responsive customer support.",
    ],
    tech: ["Ruby on Rails", "MongoDB", "Redis", "Bootstrap", "jQuery", "REST", "AWS"],
    lessons: [
      "Building for multiple clients teaches you where software must be configurable — and where it must not.",
      "Clear requirements up front save more time than clever code ever will.",
    ],
  },
];
