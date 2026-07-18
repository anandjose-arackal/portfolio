import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { deployments } from "@/lib/content/career";
import { Reveal } from "@/components/ui/Reveal";

/** Compact deployment timeline for the overview page — links into /career. */
export function CareerTimeline() {
  return (
    <Reveal className="h-full">
      <section className="flex h-full flex-col rounded-xl border border-edge bg-surface p-5">
        <header className="flex items-baseline justify-between gap-3">
          <h2 className="font-mono text-[11px] tracking-[0.18em] text-fg uppercase">
            Career Timeline
          </h2>
          <span className="font-mono text-[10px] text-faint">
            {deployments.length} deployments
          </span>
        </header>

        <ol className="mt-4 flex-1">
          {deployments.map((d, i) => (
            <li key={d.version} className="relative">
              <Link
                href="/career"
                className="group flex gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-raised/60"
              >
                {/* Rail: dot + connector */}
                <span className="relative flex w-3 shrink-0 justify-center">
                  {i < deployments.length - 1 ? (
                    <span
                      aria-hidden
                      className="absolute top-4 bottom-[-14px] w-px bg-edge"
                    />
                  ) : null}
                  <span className="relative mt-1.5 flex size-2">
                    {d.current ? (
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent/40" />
                    ) : null}
                    <span
                      className={
                        d.current
                          ? "relative inline-flex size-2 rounded-full bg-accent"
                          : "relative inline-flex size-2 rounded-full border border-accent/60 bg-surface"
                      }
                    />
                  </span>
                </span>

                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2 font-mono text-[10.5px] tracking-wide text-accent">
                    {d.period}
                    <span className="rounded border border-edge bg-raised px-1 py-px text-[9px] text-faint">
                      {d.version}
                    </span>
                  </span>
                  <span className="mt-0.5 block truncate text-[13px] font-medium text-fg">
                    {d.role}
                  </span>
                  <span className="block truncate font-mono text-[10.5px] text-faint">
                    {d.company} · {d.tech.slice(0, 3).join(" · ")}
                  </span>
                </span>

                <ChevronRight
                  className="mt-1.5 size-3.5 shrink-0 text-faint opacity-0 transition-opacity group-hover:opacity-100"
                  strokeWidth={1.75}
                />
              </Link>
            </li>
          ))}
        </ol>

        <footer className="mt-3 border-t border-edge pt-3">
          <Link
            href="/career"
            className="group inline-flex items-center gap-1.5 font-mono text-[11px] text-muted transition-colors hover:text-fg"
          >
            View deployment history
            <ArrowRight
              className="size-3 transition-transform group-hover:translate-x-0.5"
              strokeWidth={1.75}
            />
          </Link>
        </footer>
      </section>
    </Reveal>
  );
}
