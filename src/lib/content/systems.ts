/* ────────────────────────────────────────────────────────────
   Systems — engineering systems instead of a skills list.
   Confidence is qualitative by design (no percentages).
   TODO(anand): tune years, projects and notes to reality.
   ──────────────────────────────────────────────────────────── */

export type Confidence =
  | "Daily driver"
  | "Production-grade"
  | "Working knowledge"
  | "Exploring";

export type Tech = {
  name: string;
  years: string;
  confidence: Confidence;
  projects: string[];
  notes: string;
};

export type SystemCategory = {
  name: string;
  blurb: string;
  items: Tech[];
};

export const systemCategories: SystemCategory[] = [
  {
    name: "Backend",
    blurb: "Services that carry the business logic and stay up.",
    items: [
      {
        name: "Ruby on Rails",
        years: "10+ yrs",
        confidence: "Daily driver",
        projects: ["Invoice Automation Pipeline", "AP Approval Workflows"],
        notes:
          "Primary backend framework for a decade — from monoliths to service extractions, with deep experience in ActiveRecord performance and background job architecture.",
      },
      {
        name: ".NET",
        years: "6 yrs",
        confidence: "Production-grade",
        projects: ["AP Approval Workflows"],
        notes:
          "Enterprise services and integrations in C#; comfortable across ASP.NET APIs, background workers and SQL Server tuning.",
      },
      {
        name: "Node.js",
        years: "5 yrs",
        confidence: "Production-grade",
        projects: ["Engineering Metrics Dashboard", "MCP Server Toolkit"],
        notes:
          "Tooling, APIs and real-time layers; the default for internal developer tooling and MCP servers.",
      },
      {
        name: "Python",
        years: "3 yrs",
        confidence: "Working knowledge",
        projects: ["Automation scripts"],
        notes:
          "Automation, data wrangling and AI experimentation — practical rather than idiomatic.",
      },
    ],
  },
  {
    name: "Frontend",
    blurb: "Interfaces that respect users and ship fast.",
    items: [
      {
        name: "React",
        years: "7 yrs",
        confidence: "Daily driver",
        projects: ["Engineering Metrics Dashboard", "AP Approval Workflows"],
        notes:
          "Component architecture, state management and performance profiling for enterprise UIs.",
      },
      {
        name: "Next.js",
        years: "4 yrs",
        confidence: "Production-grade",
        projects: ["Engineering Metrics Dashboard", "This portfolio"],
        notes:
          "App Router, server components and edge deployment — the default for anything user-facing.",
      },
      {
        name: "TypeScript",
        years: "6 yrs",
        confidence: "Daily driver",
        projects: ["MCP Server Toolkit", "Engineering Metrics Dashboard"],
        notes:
          "Types as design tools: strict configs, discriminated unions and APIs that are hard to misuse.",
      },
    ],
  },
  {
    name: "Infrastructure",
    blurb: "Where the software actually lives.",
    items: [
      {
        name: "Azure",
        years: "6 yrs",
        confidence: "Daily driver",
        projects: ["Cloud Migration Toolkit", "Invoice Automation Pipeline"],
        notes:
          "App Services, Azure SQL / Flexible Server, Blob Storage, Service Bus and the operational reality of enterprise migrations.",
      },
      {
        name: "AWS",
        years: "4 yrs",
        confidence: "Production-grade",
        projects: ["Earlier SaaS platform work"],
        notes:
          "EC2, RDS, S3 and enough IAM to be dangerous — production workloads in previous roles.",
      },
      {
        name: "Docker",
        years: "6 yrs",
        confidence: "Daily driver",
        projects: ["All active services"],
        notes:
          "Containerized local dev and CI images; reproducibility as a baseline, not a luxury.",
      },
      {
        name: "Kubernetes",
        years: "3 yrs",
        confidence: "Working knowledge",
        projects: ["Platform workloads"],
        notes:
          "Deployments, services and debugging pods under pressure — operator, not cluster admin.",
      },
    ],
  },
  {
    name: "Databases",
    blurb: "The part of the system that remembers.",
    items: [
      {
        name: "SQL Server",
        years: "8 yrs",
        confidence: "Daily driver",
        projects: ["Invoice Automation Pipeline", "AP Approval Workflows"],
        notes:
          "Execution plans, index strategy and lock behavior on high-volume finance tables.",
      },
      {
        name: "PostgreSQL",
        years: "5 yrs",
        confidence: "Production-grade",
        projects: ["Cloud Migration Toolkit"],
        notes:
          "Azure Flexible Server migrations, partitioning and query tuning.",
      },
      {
        name: "MySQL",
        years: "6 yrs",
        confidence: "Production-grade",
        projects: ["Earlier SaaS platform work"],
        notes: "Years of production duty in previous platforms.",
      },
      {
        name: "Redis",
        years: "5 yrs",
        confidence: "Production-grade",
        projects: ["Invoice Automation Pipeline"],
        notes: "Caching, queues and rate limiting — and knowing when not to.",
      },
    ],
  },
  {
    name: "Architecture",
    blurb: "Decisions that outlive the code.",
    items: [
      {
        name: "Microservices",
        years: "6 yrs",
        confidence: "Production-grade",
        projects: ["Invoice Automation Pipeline"],
        notes:
          "Service extraction driven by team and domain boundaries — never by fashion.",
      },
      {
        name: "REST",
        years: "10+ yrs",
        confidence: "Daily driver",
        projects: ["All API surfaces"],
        notes: "Contract-first APIs with pagination, idempotency and versioning handled properly.",
      },
      {
        name: "Event Driven",
        years: "5 yrs",
        confidence: "Production-grade",
        projects: ["Invoice Automation Pipeline"],
        notes:
          "Queues and events for workflow decoupling; at-least-once delivery respected everywhere.",
      },
      {
        name: "CI/CD",
        years: "8 yrs",
        confidence: "Daily driver",
        projects: ["All active services"],
        notes: "Pipelines as products: fast feedback, deploy on green, roll back without drama.",
      },
      {
        name: "DDD",
        years: "4 yrs",
        confidence: "Working knowledge",
        projects: ["AP Approval Workflows"],
        notes: "Bounded contexts and ubiquitous language applied pragmatically to finance domains.",
      },
      {
        name: "Testing",
        years: "10+ yrs",
        confidence: "Daily driver",
        projects: ["All active services"],
        notes:
          "Test pyramids tuned per system — fast unit cores, honest integration seams.",
      },
    ],
  },
  {
    name: "AI",
    blurb: "Leverage, applied with judgment.",
    items: [
      {
        name: "Claude",
        years: "2 yrs",
        confidence: "Daily driver",
        projects: ["AI-assisted engineering workflow", "MCP Server Toolkit"],
        notes:
          "Agentic coding workflows, code review and migration tooling built around Claude.",
      },
      {
        name: "OpenAI",
        years: "2 yrs",
        confidence: "Production-grade",
        projects: ["Document extraction experiments"],
        notes: "Structured extraction and classification for document-heavy workflows.",
      },
      {
        name: "Azure OpenAI",
        years: "2 yrs",
        confidence: "Production-grade",
        projects: ["Enterprise AI features"],
        notes: "The enterprise route to LLMs — compliance, private networking, quotas.",
      },
      {
        name: "LangChain",
        years: "1 yr",
        confidence: "Working knowledge",
        projects: ["RAG experiments"],
        notes: "Used where orchestration earns its complexity; dropped where it doesn't.",
      },
      {
        name: "MCP",
        years: "1 yr",
        confidence: "Exploring",
        projects: ["MCP Server Toolkit"],
        notes:
          "Building Model Context Protocol servers that give agents safe access to internal systems.",
      },
    ],
  },
];
