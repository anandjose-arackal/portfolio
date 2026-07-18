"use client";

import { ArrowUpRight, Clock, MapPin, Timer } from "lucide-react";
import { useLocalTime } from "@/hooks/useLocalTime";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/lib/data";

export function ContactRail() {
  const time = useLocalTime(profile.timezone);

  const rows = [
    {
      icon: null,
      label: "Availability",
      value: (
        <span className="flex items-center gap-1.5">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-ok/40" />
            <span className="relative inline-flex size-2 rounded-full bg-ok" />
          </span>
          {profile.status}
        </span>
      ),
    },
    { icon: MapPin, label: "Location", value: profile.location },
    {
      icon: Clock,
      label: "Time Zone",
      value: (
        <span suppressHydrationWarning className="font-mono tabular-nums">
          IST · {time ?? "--:--:--"}
        </span>
      ),
    },
    { icon: Timer, label: "Response Time", value: "< 24h on weekdays" },
  ];

  return (
    <aside className="space-y-3">
      <div className="rounded-xl border border-edge bg-surface p-5">
        <p className="font-mono text-[10px] tracking-[0.18em] text-faint uppercase">
          Channel status
        </p>
        <dl className="mt-4 space-y-3.5">
          {rows.map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between gap-3"
            >
              <dt className="flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] text-faint uppercase">
                {row.icon ? (
                  <row.icon className="size-3.5" strokeWidth={1.75} />
                ) : null}
                {row.label}
              </dt>
              <dd className="text-[12.5px] text-fg">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl border border-edge bg-surface px-4 py-3 text-[13px] font-medium text-muted transition-colors hover:border-edge-strong hover:text-fg"
        >
          <LinkedinIcon className="size-4" />
          LinkedIn
          <ArrowUpRight className="size-3 text-faint" strokeWidth={2} />
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl border border-edge bg-surface px-4 py-3 text-[13px] font-medium text-muted transition-colors hover:border-edge-strong hover:text-fg"
        >
          <GithubIcon className="size-4" />
          GitHub
          <ArrowUpRight className="size-3 text-faint" strokeWidth={2} />
        </a>
      </div>
    </aside>
  );
}
