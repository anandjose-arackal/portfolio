import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { deployments } from "@/lib/content/career";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Full-width horizontal deployment timeline for the overview page.
 * Each role gets its own column with room to breathe — no truncation.
 * Reads latest-first, left → right. Links into /career.
 */
export function CareerTimeline() {
  return (
    <Reveal>
      <section className="rounded-xl border border-edge bg-surface p-5 sm:p-6">
        <header className="flex items-baseline justify-between gap-3">
          <div className="flex items-baseline gap-3">
            <h2 className="font-mono text-[11px] tracking-[0.18em] text-fg uppercase">
              Career Timeline
            </h2>
            <span className="font-mono text-[10px] text-faint">
              {deployments.length} deployments
            </span>
          </div>
          <Link
            href="/career"
            className="group inline-flex items-center gap-1.5 font-mono text-[11px] text-muted transition-colors hover:text-fg"
          >
            <span className="hidden sm:inline">View deployment history</span>
            <span className="sm:hidden">History</span>
            <ArrowRight
              className="size-3 transition-transform group-hover:translate-x-0.5"
              strokeWidth={1.75}
            />
          </Link>
        </header>

        <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {deployments.map((d) => (
            <li key={d.version}>
              <Link
                href="/career"
                className={`group relative flex h-full flex-col rounded-lg border p-4 transition-colors ${
                  d.current
                    ? "border-accent/30 bg-accent/[0.04] hover:border-accent/50"
                    : "border-edge bg-raised/30 hover:border-edge-strong hover:bg-raised/50"
                }`}
              >
                {/* Rail: node dot + connector + version */}
                <div className="mb-3 flex items-center gap-2">
                  <span className="relative flex size-2.5 shrink-0">
                    {d.current ? (
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent/40" />
                    ) : null}
                    <span
                      className={
                        d.current
                          ? "relative inline-flex size-2.5 rounded-full bg-accent"
                          : "relative inline-flex size-2.5 rounded-full border-2 border-accent/60 bg-surface"
                      }
                    />
                  </span>
                  <span className="h-px flex-1 bg-edge" />
                  <span className="rounded border border-edge bg-raised px-1.5 py-px font-mono text-[10px] text-faint">
                    {d.version}
                  </span>
                </div>

                <p className="font-mono text-[11px] tracking-wide text-accent">
                  {d.period}
                </p>
                <p className="mt-1 text-[15px] leading-snug font-medium text-fg">
                  {d.role}
                </p>
                <p className="mt-0.5 text-[12.5px] text-muted">{d.company}</p>

                <div className="mt-3 flex flex-1 flex-wrap content-end gap-1.5">
                  {d.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded border border-edge bg-surface px-1.5 py-0.5 font-mono text-[10px] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </Reveal>
  );
}
