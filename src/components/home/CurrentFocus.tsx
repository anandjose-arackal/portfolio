import { focusAreas, focusStatusMeta } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

/** Compact dashboard panel — one dense row per workstream. */
export function CurrentFocus() {
  return (
    <Reveal className="h-full">
      <section className="flex h-full flex-col rounded-card border border-edge bg-surface p-5">
        <header className="flex items-baseline justify-between gap-3">
          <h2 className="font-mono text-label tracking-label text-fg uppercase">
            Current Focus
          </h2>
          <span className="font-mono text-micro text-faint">
            {focusAreas.length} workstreams
          </span>
        </header>

        <ul className="mt-4 flex flex-1 flex-col justify-between gap-2">
          {focusAreas.map((area) => {
            const status = focusStatusMeta[area.status];
            const Icon = area.icon;
            return (
              <li
                key={area.title}
                className="group flex items-center gap-3 rounded-lg border border-edge bg-raised/40 px-3 py-2.5 transition hover:border-info/40 hover:shadow-glow-blue"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-edge bg-surface text-muted">
                  <Icon className="size-[18px]" strokeWidth={1.75} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-body font-medium text-fg">
                    {area.title}
                  </span>
                  <span className="block truncate font-mono text-label text-faint">
                    {area.meta}
                  </span>
                </span>
                <span
                  className="size-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: status.color }}
                  title={status.label}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </Reveal>
  );
}
