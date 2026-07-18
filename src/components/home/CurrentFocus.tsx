import { focusAreas, focusStatusMeta } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function CurrentFocus() {
  return (
    <section className="pb-20">
      <SectionHeader
        index="01"
        title="Current Focus"
        meta={`${focusAreas.length} active workstreams`}
      />

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {focusAreas.map((area, i) => {
          const status = focusStatusMeta[area.status];
          return (
            <Reveal key={area.title} delay={i * 0.05}>
              <article className="flex h-full flex-col rounded-xl border border-edge bg-surface p-5 transition-colors hover:border-edge-strong">
                <header className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-[15px] font-medium text-fg">
                    {area.title}
                  </h3>
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

                <p className="mt-3 flex-1 text-[13px] leading-relaxed text-muted">
                  {area.description}
                </p>

                <p className="mt-4 text-[12px] text-muted">
                  <span className="font-mono text-[10px] tracking-[0.14em] text-faint uppercase">
                    Focus{" "}
                  </span>
                  <span className="text-fg/90">{area.focus}</span>
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5 border-t border-edge pt-4">
                  {area.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-edge bg-raised px-2 py-0.5 font-mono text-[10.5px] text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
