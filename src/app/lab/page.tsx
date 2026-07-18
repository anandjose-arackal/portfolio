import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { experiments, experimentStatusMeta } from "@/lib/content/lab";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "Current experiments — AI tooling, agentic workflows and automation, with honest status per experiment.",
};

export default function LabPage() {
  const active = experiments.filter((e) => e.status === "active").length;

  return (
    <div className="mx-auto max-w-5xl px-5 lg:px-10">
      <PageHeader
        overline="06 — experiments"
        title="Lab"
        description="Things being tested before they earn a place in production. Statuses are honest — including the parked ones."
        meta={`${active} active / ${experiments.length} total`}
      />

      <div className="grid gap-3 py-10 sm:grid-cols-2 xl:grid-cols-3">
        {experiments.map((exp, i) => {
          const status = experimentStatusMeta[exp.status];
          return (
            <Reveal key={exp.name} delay={i * 0.04}>
              <article className="flex h-full flex-col rounded-xl border border-edge bg-surface p-5 transition-colors hover:border-edge-strong">
                <header className="flex items-center justify-between gap-3">
                  <h2 className="font-display text-[15px] font-medium text-fg">
                    {exp.name}
                  </h2>
                  <span className="flex shrink-0 items-center gap-1.5">
                    <span
                      className="size-1.5 rounded-full"
                      style={{ backgroundColor: status.color }}
                    />
                    <span className="font-mono text-[10px] tracking-wider text-faint uppercase">
                      {status.label}
                    </span>
                  </span>
                </header>

                <p className="mt-3 text-[13px] leading-relaxed text-muted">
                  {exp.description}
                </p>

                <p className="mt-3 flex-1 text-[12px] leading-relaxed text-faint">
                  <span className="font-mono text-[10px] tracking-[0.14em] uppercase">
                    Progress{" "}
                  </span>
                  {exp.progress}
                </p>

                <footer className="mt-4 flex items-center justify-between border-t border-edge pt-3.5">
                  <p className="pr-3 font-mono text-[11px] leading-relaxed text-faint italic">
                    “{exp.notes}”
                  </p>
                  {exp.github ? (
                    <a
                      href={exp.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${exp.name} on GitHub`}
                      className="flex shrink-0 items-center gap-1 text-faint transition-colors hover:text-fg"
                    >
                      <GithubIcon className="size-4" />
                      <ArrowUpRight className="size-3" strokeWidth={2} />
                    </a>
                  ) : null}
                </footer>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
