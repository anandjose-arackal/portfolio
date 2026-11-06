"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import type { Deployment } from "@/lib/content/career";
import { Tag } from "@/components/ui/Tag";
import { cn } from "@/lib/utils";

const stages = ["build", "test", "ship", "impact"] as const;

function Pipeline({ open }: { open: boolean }) {
  const reduce = useReducedMotion();

  return (
    <div className="flex items-center gap-0 overflow-x-auto py-1">
      {stages.map((stage, i) => (
        <div key={stage} className="flex items-center">
          {i > 0 ? (
            <motion.div
              className="h-px w-8 origin-left bg-ok/60 sm:w-14"
              initial={reduce ? false : { scaleX: 0 }}
              animate={open ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.25, delay: 0.15 + i * 0.22 }}
            />
          ) : null}
          <motion.div
            className="flex items-center gap-1.5 rounded-full border border-edge bg-raised px-2.5 py-1"
            initial={reduce ? false : { opacity: 0.4 }}
            animate={
              open
                ? { opacity: 1, borderColor: "rgba(124,193,66,0.4)" }
                : { opacity: 0.4 }
            }
            transition={{ duration: 0.2, delay: 0.1 + i * 0.22 }}
          >
            <motion.span
              initial={reduce ? false : { scale: 0 }}
              animate={open ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.2, delay: 0.2 + i * 0.22 }}
            >
              <Check className="size-3 text-ok" strokeWidth={2.5} />
            </motion.span>
            <span className="font-mono text-micro tracking-wider text-muted uppercase">
              {stage}
            </span>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

function DeployLog({ lines, open }: { lines: string[]; open: boolean }) {
  const reduce = useReducedMotion();

  return (
    <div className="rounded-lg border border-edge bg-canvas/60 px-4 py-3 font-mono text-label leading-relaxed">
      {lines.map((line, i) => (
        <motion.p
          key={i}
          initial={reduce ? false : { opacity: 0 }}
          animate={open ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.25, delay: 0.3 + i * 0.14 }}
          className="text-muted"
        >
          <span className="mr-2 text-faint select-none">$</span>
          {line}
        </motion.p>
      ))}
    </div>
  );
}

function DetailList({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-mono text-micro tracking-label text-faint uppercase">
        {label}
      </h4>
      <ul className="mt-2 space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-small leading-relaxed text-muted">
            <span className="mt-[7px] size-1 shrink-0 rounded-full bg-edge-strong" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function DeployCard({
  deployment,
  defaultOpen = false,
}: {
  deployment: Deployment;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const d = deployment;

  return (
    <article className="overflow-hidden rounded-card border border-edge bg-surface transition hover:border-info/40 hover:shadow-glow-blue">
      {/* Header — always visible */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-4 px-5 py-4 text-left"
      >
        <span
          className={cn(
            "shrink-0 rounded-md border px-2 py-1 font-mono text-label font-medium",
            d.current
              ? "border-accent/40 bg-accent/10 text-accent"
              : "border-edge bg-raised text-muted",
          )}
        >
          {d.version}
        </span>

        <span className="min-w-0 flex-1">
          <span className="block truncate font-display text-body font-medium text-fg">
            {d.role}
          </span>
          <span className="block truncate text-small text-faint">
            {d.company} · {d.period}
          </span>
        </span>

        <span className="hidden shrink-0 items-center gap-1.5 sm:flex">
          <span
            className={cn(
              "size-1.5 rounded-full",
              d.current ? "bg-ok" : "bg-faint/50",
            )}
          />
          <span className="font-mono text-micro tracking-wider text-faint uppercase">
            {d.current ? "in production" : "stable"}
          </span>
        </span>

        <ChevronDown
          className={cn(
            "size-4 shrink-0 text-faint transition-transform duration-300",
            open && "rotate-180",
          )}
          strokeWidth={1.75}
        />
      </button>

      {/* Expandable body */}
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-5 border-t border-edge px-5 py-5">
              <p className="max-w-3xl text-small leading-relaxed text-muted">
                {d.summary}
              </p>

              <Pipeline open={open} />
              <DeployLog lines={d.log} open={open} />

              <div className="grid gap-6 pt-1 md:grid-cols-2">
                <DetailList label="Responsibilities" items={d.responsibilities} />
                <DetailList label="Major Deliveries" items={d.deliveries} />
                <DetailList label="Business Impact" items={d.impact} />
                <DetailList label="Lessons Learned" items={d.lessons} />
              </div>

              <div className="flex flex-wrap gap-1.5 border-t border-edge pt-4">
                {d.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}
