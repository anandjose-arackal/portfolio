import { cn } from "@/lib/utils";

export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-edge bg-raised px-2 py-0.5 font-mono text-micro text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
