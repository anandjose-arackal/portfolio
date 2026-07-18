"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/data";
import { cn } from "@/lib/utils";

// Five slots max on mobile — Overview, Career, Projects, Notes, Contact.
const mobileItems = nav.filter((item) =>
  ["/", "/career", "/projects", "/notes", "/contact"].includes(item.href),
);

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-edge bg-surface/80 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:hidden">
      <ul className="mx-auto flex max-w-md items-stretch justify-between px-2">
        {mobileItems.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          const label =
            item.label === "Engineering Notes" ? "Notes" : item.label;

          const inner = (
            <>
              <Icon
                className={cn(
                  "size-[18px]",
                  active ? "text-accent" : "text-faint",
                )}
                strokeWidth={1.75}
              />
              <span
                className={cn(
                  "text-[10px]",
                  active ? "text-fg" : "text-faint",
                )}
              >
                {label}
              </span>
            </>
          );

          return (
            <li key={item.href} className="flex-1">
              {item.ready ? (
                <Link
                  href={item.href}
                  className="flex flex-col items-center gap-1 px-1 py-2.5"
                >
                  {inner}
                </Link>
              ) : (
                <div
                  aria-disabled
                  className="flex flex-col items-center gap-1 px-1 py-2.5 opacity-40 select-none"
                >
                  {inner}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
