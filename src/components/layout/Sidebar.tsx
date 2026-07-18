"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, profile } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-[264px] flex-col border-r border-edge bg-surface/60 backdrop-blur-xl lg:flex">
      {/* ── Identity ─────────────────────────────────── */}
      <div className="flex items-center gap-3 border-b border-edge px-5 py-4">
        <div className="relative">
          <div className="flex size-9 items-center justify-center rounded-[10px] border border-edge bg-raised font-mono text-[12px] font-medium tracking-widest text-fg">
            {profile.initials}
          </div>
          <span className="absolute -right-0.5 -bottom-0.5 flex size-2.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-ok/50" />
            <span className="relative inline-flex size-2.5 rounded-full border-2 border-surface bg-ok" />
          </span>
        </div>
        <div className="min-w-0">
          <p className="truncate text-[13px] font-medium text-fg">
            {profile.name}
          </p>
          <p className="truncate text-[11px] text-faint">{profile.role}</p>
        </div>
      </div>

      {/* ── Navigation ───────────────────────────────── */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <p className="px-2 pb-2 font-mono text-[10px] tracking-[0.18em] text-faint uppercase">
          Workspace
        </p>
        <ul className="space-y-0.5">
          {nav.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;

            if (!item.ready) {
              return (
                <li key={item.href}>
                  <div
                    aria-disabled
                    title="In development"
                    className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-[13px] text-faint/70 select-none"
                  >
                    <Icon className="size-4 shrink-0" strokeWidth={1.75} />
                    <span className="flex-1">{item.label}</span>
                    <span className="rounded border border-edge px-1 py-px font-mono text-[9px] tracking-wider text-faint uppercase">
                      wip
                    </span>
                  </div>
                </li>
              );
            }

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-[13px] transition-colors",
                    active
                      ? "bg-raised text-fg"
                      : "text-muted hover:bg-raised/60 hover:text-fg",
                  )}
                >
                  <Icon
                    className={cn(
                      "size-4 shrink-0",
                      active ? "text-accent" : "text-faint",
                    )}
                    strokeWidth={1.75}
                  />
                  <span className="flex-1">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* ── Status block ─────────────────────────────── */}
      <div className="border-t border-edge p-3">
        <div className="rounded-xl border border-edge bg-raised/50 p-3">
          <dl className="space-y-2.5">
            <div className="flex items-center justify-between gap-2">
              <dt className="font-mono text-[10px] tracking-[0.14em] text-faint uppercase">
                Status
              </dt>
              <dd className="flex items-center gap-1.5 text-[12px] text-fg">
                <span className="size-1.5 rounded-full bg-ok" />
                {profile.status}
              </dd>
            </div>
            <div className="flex items-center justify-between gap-2">
              <dt className="font-mono text-[10px] tracking-[0.14em] text-faint uppercase">
                Location
              </dt>
              <dd className="text-[12px] text-muted">{profile.location}</dd>
            </div>
            <div className="flex items-center justify-between gap-2">
              <dt className="font-mono text-[10px] tracking-[0.14em] text-faint uppercase">
                Company
              </dt>
              <dd className="truncate text-[12px] text-muted">
                {profile.company}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </aside>
  );
}
