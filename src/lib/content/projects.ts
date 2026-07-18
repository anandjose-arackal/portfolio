/* ────────────────────────────────────────────────────────────
   Projects — repository-style cards.
   TODO(anand): replace with real projects and links. Buttons
   only render for links that exist.
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
    name: "invoice-automation-pipeline",
    categories: ["Enterprise", "Automation"],
    architecture: "Event-driven services · queue-backed workers · SQL Server",
    description:
      "End-to-end AP automation: capture, match and route supplier invoices through configurable approval workflows.",
    problem:
      "Finance teams were keying invoices by hand — slow, error-prone and impossible to audit at enterprise volume.",
    impact:
      "Removed the majority of manual touchpoints per invoice and made every approval traceable.",
    tech: ["Ruby on Rails", ".NET", "SQL Server", "Azure Service Bus", "Redis"],
    links: {}, // proprietary — no public links
    featured: true,
  },
  {
    name: "cloud-migration-toolkit",
    categories: ["Cloud", "Automation"],
    architecture: "Runbook engine · migration workers · verification suite",
    description:
      "Tooling and rehearsal framework for migrating production databases to Azure with verified cutovers.",
    problem:
      "Ad-hoc migrations meant long downtime windows and unverifiable results across environments.",
    impact:
      "Cut migration downtime to minutes and made cutovers rehearsable instead of heroic.",
    tech: ["PostgreSQL", "Azure", "Ruby", "Bash"],
    links: {}, // internal tooling
    featured: true,
  },
  {
    name: "mcp-server-toolkit",
    categories: ["AI", "Open Source"],
    architecture: "TypeScript MCP servers · stdio + HTTP transports",
    description:
      "A set of Model Context Protocol servers that give coding agents safe, scoped access to internal systems.",
    problem:
      "Agents are only as useful as the context they can reach — and reaching internal systems safely is the hard part.",
    impact:
      "Turned agent experiments into daily engineering leverage for the team.",
    tech: ["TypeScript", "Node.js", "MCP", "Claude"],
    links: { github: "https://github.com/anandjosearackal" }, // TODO(anand): repo URL
    featured: false,
  },
  {
    name: "rails-performance-kit",
    categories: ["Open Source"],
    architecture: "Gem · query analysis middleware · CI reporters",
    description:
      "Helpers for finding N+1s, slow queries and index gaps in Rails apps before they reach production.",
    problem:
      "Query regressions kept reaching production because nothing surfaced them during review.",
    impact:
      "Made query cost visible in pull requests instead of in incident reports.",
    tech: ["Ruby", "Rails", "PostgreSQL"],
    links: { github: "https://github.com/anandjosearackal" }, // TODO(anand): repo URL
    featured: false,
  },
  {
    name: "ap-approval-workflows",
    categories: ["Enterprise"],
    architecture: "Domain-driven services · state machines · REST APIs",
    description:
      "Configurable multi-level approval routing for enterprise finance — delegation, escalation and audit built in.",
    problem:
      "Every customer approves spend differently; hard-coded flows couldn't model real organizations.",
    impact:
      "One engine now serves widely different org structures without custom code per customer.",
    tech: [".NET", "SQL Server", "React", "DDD"],
    links: {}, // proprietary
    featured: false,
  },
  {
    name: "engineering-metrics-dashboard",
    categories: ["Automation", "Cloud"],
    architecture: "Next.js · serverless collectors · time-series store",
    description:
      "Internal dashboard aggregating deploy frequency, lead time and reliability signals across services.",
    problem:
      "Engineering health lived in five tools and nobody's head at once.",
    impact:
      "Gave the team one honest view of delivery health and where to invest next.",
    tech: ["Next.js", "TypeScript", "Node.js", "Azure"],
    links: {}, // internal
    featured: false,
  },
];
