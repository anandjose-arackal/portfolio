/* ────────────────────────────────────────────────────────────
   Engineering Notes — internal-documentation style entries.
   Structured sections instead of MDX for now (easy to edit
   here; can swap to MDX later without changing the layout).
   TODO(anand): replace prose with your real write-ups.
   ──────────────────────────────────────────────────────────── */

export type NoteSection = {
  id: string;
  label: string;
  body: string[];
  code?: { lang: string; content: string };
};

export type Note = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  sections: NoteSection[];
};

const sectionLabels = [
  ["problem", "Problem"],
  ["context", "Context"],
  ["solution", "Solution"],
  ["tradeoffs", "Tradeoffs"],
  ["outcome", "Outcome"],
  ["lessons", "Lessons Learned"],
] as const;

function note(
  slug: string,
  title: string,
  date: string,
  tags: string[],
  excerpt: string,
  bodies: (string[] | { body: string[]; code?: NoteSection["code"] })[],
): Note {
  return {
    slug,
    title,
    date,
    tags,
    excerpt,
    sections: sectionLabels.map(([id, label], i) => {
      const entry = bodies[i];
      const isPlain = Array.isArray(entry);
      return {
        id,
        label,
        body: isPlain ? entry : entry.body,
        code: isPlain ? undefined : entry.code,
      };
    }),
  };
}

export const notes: Note[] = [
  note(
    "optimizing-sql-performance",
    "Optimizing SQL Performance",
    "2026-05-14",
    ["SQL Server", "Performance", "Database"],
    "Taking a hot invoice query from seconds to milliseconds without touching application code.",
    [
      [
        "A core invoice listing query degraded from ~200ms to 4+ seconds as one table crossed a hundred million rows. Timeouts began appearing in approval workflows during month-end close — the worst possible time for finance users.",
      ],
      [
        "The table backed nearly every AP screen. Rewriting the application layer was off the table in the short term; whatever we did had to ship inside a normal release window with zero behavioral change.",
      ],
      {
        body: [
          "Execution plan analysis showed a key lookup running millions of times against the clustered index. A covering index on the filter columns with the display columns as includes removed the lookup entirely, and a filtered index handled the archived-rows case separately.",
        ],
        code: {
          lang: "sql",
          content: `CREATE NONCLUSTERED INDEX ix_invoices_status_tenant
ON invoices (tenant_id, status, invoice_date DESC)
INCLUDE (supplier_id, total, currency)
WHERE deleted_at IS NULL;`,
        },
      },
      [
        "Covering indexes trade write amplification and storage for read speed. On a table this hot for reads and comparatively cool for writes, the trade was clearly worth it — but we documented the cost so future writers know it exists.",
      ],
      [
        "P95 on the listing endpoint dropped from 4.2s to 60ms. Month-end timeout alerts went to zero and stayed there.",
      ],
      [
        "Read the plan before touching the code — the database usually tells you exactly what it's missing.",
        "Fix the biggest lookup first; most slow queries have one dominant cost, not ten equal ones.",
      ],
    ],
  ),
  note(
    "migrating-azure-database",
    "Migrating Azure Database",
    "2026-03-02",
    ["Azure", "PostgreSQL", "Migration"],
    "Moving production databases to Azure Flexible Server with rehearsed, verified cutovers.",
    [
      [
        "Our managed database offering was approaching end of support, forcing a migration of production databases — with strict downtime budgets and finance data where 'mostly migrated' is not a state that exists.",
      ],
      [
        "Tenants varied wildly in size. A window acceptable for the median tenant would be a multi-hour outage for the largest, so one-size-fits-all cutover plans were out.",
      ],
      [
        "We built a runbook engine: replication to the target, automated checksum verification per table, then a cutover step that flipped connection strings only after verification passed. Every step rehearsed against production-sized copies until timing was boring.",
        "Large tenants got individually scheduled windows; small tenants were batched. The same tooling ran both.",
      ],
      [
        "Building tooling first cost two sprints before any tenant moved — a hard sell when 'just migrate it' feels faster. It paid for itself by the third tenant.",
      ],
      [
        "All tenants migrated with cutover downtime measured in minutes, zero data discrepancies, and no rollback ever exercised in production (though we rehearsed it every time).",
      ],
      [
        "A migration is a product with one user: the person running it at 2am. Design for them.",
        "Verification isn't a nice-to-have step after the migration — it is the migration.",
      ],
    ],
  ),
  note(
    "papertrail-archiving-strategy",
    "PaperTrail Archiving Strategy",
    "2026-01-20",
    ["Rails", "Database", "Cost"],
    "Keeping full audit history while stopping the versions table from eating the database.",
    [
      [
        "PaperTrail's versions table grew into the largest table in the database — hundreds of gigabytes of audit rows that were written constantly and read almost never, dragging backups, migrations and storage costs with it.",
      ],
      [
        "Audit history in finance software is not optional; deleting anything was off the table. But less than 0.1% of version rows were ever read after 90 days.",
      ],
      {
        body: [
          "Hot/cold split: recent versions stay in the primary table; a scheduled job moves older rows to cheap blob storage as compressed batches, with a manifest table for lookup. Reads fall through transparently — recent from SQL, older rehydrated on demand.",
        ],
        code: {
          lang: "ruby",
          content: `class ArchiveVersionsJob < ApplicationJob
  BATCH = 50_000

  def perform
    PaperTrail::Version
      .where("created_at < ?", 90.days.ago)
      .in_batches(of: BATCH) do |batch|
        ColdStore.write(batch)   # compressed, manifest-indexed
        batch.delete_all         # inside the same transaction
      end
  end
end`,
        },
      },
      [
        "Cold reads are slower (seconds, not milliseconds) — acceptable for an audit trail viewed rarely. The real cost is operational: one more pipeline to monitor, so it ships with its own alerting.",
      ],
      [
        "Primary table shrank by ~80%, backup windows halved, and audit history remains complete and retrievable.",
      ],
      [
        "Data has a temperature — bill it accordingly.",
        "'Keep everything' and 'keep everything in the expensive place' are different requirements; most stakeholders only mean the first.",
      ],
    ],
  ),
  note(
    "building-ai-automation",
    "Building AI Automation",
    "2025-11-08",
    ["AI", "LLM", "Automation"],
    "Where LLMs actually earn their keep in an enterprise document pipeline — and where they don't.",
    [
      [
        "Supplier documents arrive in every format imaginable. Rule-based extraction plateaued: each new supplier template meant more brittle rules, and exceptions still landed on humans.",
      ],
      [
        "Accuracy targets in finance are unforgiving — a wrong amount is worse than no answer. Any AI step needed confidence signals and a human fallback, not silent best guesses.",
      ],
      [
        "LLM extraction with structured output schemas, validated against business rules (totals must reconcile, dates must parse, suppliers must match records). High-confidence results flow straight through; anything below threshold routes to a human with the model's reasoning attached.",
      ],
      [
        "Per-document inference costs money and latency; batching and caching help, but the honest tradeoff is paying pennies to avoid minutes of human keying. The threshold dial is a business decision, not a technical one — we made it configurable.",
      ],
      [
        "Straight-through processing rose sharply while error rates fell, because the model abstains where rules used to guess.",
      ],
      [
        "LLMs are best where rules are worst: messy inputs, bounded outputs.",
        "Design the abstention path first; the happy path takes care of itself.",
      ],
    ],
  ),
  note(
    "scaling-rails-applications",
    "Scaling Rails Applications",
    "2025-09-15",
    ["Rails", "Scaling", "Architecture"],
    "The boring sequence that scales Rails apps: measure, cache, queue, extract — in that order.",
    [
      [
        "A Rails monolith serving enterprise traffic began missing its latency SLOs as tenants and data grew. The instinctive proposal was 'rewrite as microservices'; the budget said otherwise.",
      ],
      [
        "Most latency lived in a handful of endpoints; most of those in the database; the rest in synchronous work that had no business being synchronous.",
      ],
      [
        "In order: instrument everything (per-endpoint, per-query); fix the query layer (indexes, N+1s, pagination); cache what's read-heavy and tolerant of staleness; push slow work to queues with idempotent jobs; only then extract the one boundary — document processing — that genuinely needed independent scaling.",
      ],
      [
        "Extraction adds operational surface: deployment, monitoring, versioned contracts. That cost was worth paying exactly once, for the boundary that spiked independently — not for the whole app.",
      ],
      [
        "SLOs restored with a single extracted service instead of a rewrite. The monolith remains happily boring for everything else.",
      ],
      [
        "Scaling problems are usually one hot path wearing a whole-app costume.",
        "Extract services around load profiles and team boundaries, not around nouns.",
      ],
    ],
  ),
  note(
    "selecting-database-indexes",
    "Selecting Database Indexes",
    "2025-07-21",
    ["Database", "SQL", "Performance"],
    "A working checklist for choosing indexes that help — and retiring the ones that don't.",
    [
      [
        "Index sprawl: years of 'add an index, ship it' left tables with a dozen indexes each — write costs climbing, storage growing, and nobody sure which indexes were load-bearing.",
      ],
      [
        "Every index is a bet that read savings outweigh write costs. Nobody had been settling those bets: usage stats showed indexes unused for months still being maintained on every insert.",
      ],
      [
        "A quarterly index review driven by the database's own statistics: rank indexes by reads vs writes, flag never-read indexes for staged removal (disable first, drop after a clean cycle), and require new indexes to name the query they serve in the migration description.",
      ],
      [
        "Dropping an index is scarier than adding one — the failure mode is a slow query at peak, not a failed deploy. Staged disabling makes the bet reversible and cheap to lose.",
      ],
      [
        "Write-heavy tables shed a third of their indexes with no read regressions, and new indexes now arrive with a stated purpose that can be audited later.",
      ],
      [
        "An index without a named query is a rumor, not a design decision.",
        "The database keeps score of every bet you made — read the stats.",
      ],
    ],
  ),
];
