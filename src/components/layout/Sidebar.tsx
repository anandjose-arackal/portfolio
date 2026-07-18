"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail } from "lucide-react";
import { useLocalTime } from "@/hooks/useLocalTime";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { nav, profile } from "@/lib/data";
import { cn } from "@/lib/utils";

const socials = [
  { label: "GitHub", href: profile.github, icon: GithubIcon },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedinIcon },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export function Sidebar() {
  const pathname = usePathname();
  const time = useLocalTime(profile.timezone);

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
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(`${item.href}/`));
            const Icon = item.icon;

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

      {/* ── System status ────────────────────────────── */}
      <div className="border-t border-edge p-3">
        <div className="rounded-xl border border-edge bg-raised/50 p-3">
          <p className="font-mono text-[9.5px] tracking-[0.18em] text-faint uppercase">
            System status
          </p>
          <dl className="mt-2.5 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <dt className="font-mono text-[10px] tracking-[0.14em] text-faint uppercase">
                Status
              </dt>
              <dd className="flex items-center gap-1.5 font-mono text-[11px] text-ok">
                <span className="size-1.5 rounded-full bg-ok" />
                CONNECTED
              </dd>
            </div>
            <div className="flex items-center justify-between gap-2">
              <dt className="font-mono text-[10px] tracking-[0.14em] text-faint uppercase">
                Company
              </dt>
              <dd className="truncate text-[11.5px] text-muted">
                {profile.company}
              </dd>
            </div>
            <div className="flex items-center justify-between gap-2">
              <dt className="font-mono text-[10px] tracking-[0.14em] text-faint uppercase">
                Location
              </dt>
              <dd className="text-[11.5px] text-muted">{profile.location}</dd>
            </div>
            <div className="flex items-center justify-between gap-2">
              <dt className="font-mono text-[10px] tracking-[0.14em] text-faint uppercase">
                Time
              </dt>
              <dd
                suppressHydrationWarning
                className="font-mono text-[11px] tabular-nums text-muted"
              >
                {time ?? "--:--:--"} IST
              </dd>
            </div>
          </dl>
        </div>

        {/* ── Socials ────────────────────────────────── */}
        <div className="mt-3 flex items-center justify-center gap-1 px-1">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              {...(social.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              aria-label={social.label}
              className="rounded-lg p-2 text-faint transition-colors hover:bg-raised hover:text-fg"
            >
              <social.icon className="size-4" strokeWidth={1.75} />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
