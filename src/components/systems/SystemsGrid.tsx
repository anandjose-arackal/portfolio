"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import {
  systemCategories,
  type Confidence,
  type Tech,
} from "@/lib/content/systems";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const confidenceStyle: Record<Confidence, string> = {
  "Daily driver": "border-ok/40 bg-ok/10 text-ok",
  "Production-grade": "border-info/40 bg-info/10 text-info",
  "Working knowledge": "border-edge bg-raised text-muted",
  Exploring: "border-accent/40 bg-accent/10 text-accent",
};

function TechDetailPanel({
  tech,
  category,
  onClose,
}: {
  tech: Tech;
  category: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <>
      <motion.div
        className="fixed inset-0 z-50 bg-canvas/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.aside
        role="dialog"
        aria-label={`${tech.name} details`}
        className="fixed inset-y-0 right-0 z-50 flex w-full max-w-[400px] flex-col border-l border-edge bg-surface shadow-drawer"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <header className="flex items-center justify-between border-b border-edge px-5 py-4">
          <div>
            <p className="font-mono text-micro tracking-label text-faint uppercase">
              {category}
            </p>
            <h3 className="mt-1 font-display text-lg font-semibold text-fg">
              {tech.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close panel"
            className="rounded-lg border border-edge bg-raised p-1.5 text-faint transition-colors hover:text-fg"
          >
            <X className="size-4" strokeWidth={1.75} />
          </button>
        </header>

        <div className="flex-1 space-y-6 overflow-y-auto px-5 py-6">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-edge bg-raised/50 p-3">
              <p className="font-mono text-micro tracking-label text-faint uppercase">
                Experience
              </p>
              <p className="mt-1.5 font-display text-lg font-semibold text-fg">
                {tech.years}
              </p>
            </div>
            <div className="rounded-lg border border-edge bg-raised/50 p-3">
              <p className="font-mono text-micro tracking-label text-faint uppercase">
                Confidence
              </p>
              <span
                className={cn(
                  "mt-1.5 inline-flex rounded-md border px-2 py-0.5 font-mono text-micro",
                  confidenceStyle[tech.confidence],
                )}
              >
                {tech.confidence}
              </span>
            </div>
          </div>

          <div>
            <p className="font-mono text-micro tracking-label text-faint uppercase">
              Used in
            </p>
            <ul className="mt-2 space-y-1.5">
              {tech.projects.map((p) => (
                <li
                  key={p}
                  className="flex gap-2 text-small leading-relaxed text-muted"
                >
                  <span className="mt-[7px] size-1 shrink-0 rounded-full bg-edge-strong" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-micro tracking-label text-faint uppercase">
              Notes
            </p>
            <p className="mt-2 text-small leading-relaxed text-muted">
              {tech.notes}
            </p>
          </div>
        </div>

        <footer className="border-t border-edge px-5 py-3">
          <p className="font-mono text-micro text-faint">
            esc to close · confidence is qualitative by design
          </p>
        </footer>
      </motion.aside>
    </>
  );
}

export function SystemsGrid() {
  const [selected, setSelected] = useState<{
    tech: Tech;
    category: string;
  } | null>(null);

  return (
    <>
      <div className="grid gap-3 py-8 md:grid-cols-2">
        {systemCategories.map((category, i) => (
          <Reveal key={category.name} delay={i * 0.04}>
            <section className="h-full rounded-card border border-edge bg-surface p-5">
              <header className="flex items-baseline justify-between gap-3">
                <h2 className="font-display text-body font-medium text-fg">
                  {category.name}
                </h2>
                <span className="font-mono text-micro text-faint">
                  {category.items.length} systems
                </span>
              </header>
              <p className="mt-1 text-small text-faint">{category.blurb}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {category.items.map((tech) => (
                  <button
                    key={tech.name}
                    type="button"
                    onClick={() =>
                      setSelected({ tech, category: category.name })
                    }
                    className="group flex items-center gap-2 rounded-lg border border-edge bg-raised px-3 py-1.5 text-left transition hover:border-accent/50 hover:shadow-glow-amber"
                  >
                    <span className="font-mono text-small text-muted transition-colors group-hover:text-fg">
                      {tech.name}
                    </span>
                    <span className="font-mono text-micro text-faint">
                      {tech.years}
                    </span>
                  </button>
                ))}
              </div>
            </section>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {selected ? (
          <TechDetailPanel
            tech={selected.tech}
            category={selected.category}
            onClose={() => setSelected(null)}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}
