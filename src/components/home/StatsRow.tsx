"use client";

import { motion, useReducedMotion } from "framer-motion";
import { stats } from "@/lib/data";

export function StatsRow() {
  const reduce = useReducedMotion();

  return (
    <section aria-label="Career statistics" className="pb-20">
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5">
        {stats.map((stat, i) => (
          <motion.li
            key={stat.label}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-48px" }}
            transition={{
              duration: 0.5,
              delay: i * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group rounded-xl border border-edge bg-surface p-4 transition-colors hover:border-edge-strong"
          >
            <p className="font-mono text-[10px] tracking-[0.14em] text-faint uppercase">
              {stat.label}
            </p>
            <p className="mt-3 font-display text-[22px] leading-tight font-semibold text-fg">
              {stat.value}
            </p>
            <p className="mt-1 text-[11px] text-faint">{stat.detail}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
