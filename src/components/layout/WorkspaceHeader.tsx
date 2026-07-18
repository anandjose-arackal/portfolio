"use client";

import { usePathname } from "next/navigation";
import { useLocalTime } from "@/hooks/useLocalTime";
import { nav, profile } from "@/lib/data";

export function WorkspaceHeader() {
  const pathname = usePathname();
  const time = useLocalTime(profile.timezone);

  const current =
    nav.find(
      (item) =>
        pathname === item.href ||
        (item.href !== "/" && pathname.startsWith(`${item.href}/`)),
    )?.label ?? "Overview";

  return (
    <header className="sticky top-0 z-30 border-b border-edge bg-canvas/75 backdrop-blur-xl">
      <div className="flex h-12 items-center justify-between gap-4 px-5 lg:px-10">
        <p className="font-mono text-[11px] tracking-wide text-faint">
          aja
          <span className="mx-1.5 text-edge-strong">/</span>
          workspace
          <span className="mx-1.5 text-edge-strong">/</span>
          <span className="text-muted">{current.toLowerCase()}</span>
        </p>

        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-1.5 sm:flex">
            <span className="size-1.5 rounded-full bg-ok" />
            <span className="text-[11px] text-muted">{profile.status}</span>
          </span>
          <span
            suppressHydrationWarning
            className="font-mono text-[11px] tabular-nums text-faint"
          >
            IST {time ?? "--:--:--"}
          </span>
        </div>
      </div>
    </header>
  );
}
