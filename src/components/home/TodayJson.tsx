import { GitBranch } from "lucide-react";
import { todayJson } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

/** Minimal JSON tokenizer — enough for one honest config file. */
function renderLine(line: string, key: number) {
  const parts: React.ReactNode[] = [];
  const regex = /("(?:[^"\\]|\\.)*")(\s*:)?|([{}[\],])/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = regex.exec(line)) !== null) {
    if (match.index > last) {
      parts.push(line.slice(last, match.index));
    }
    if (match[1] !== undefined) {
      const isKey = match[2] !== undefined;
      parts.push(
        <span key={i++} className={isKey ? "text-info" : "text-ok"}>
          {match[1]}
        </span>,
      );
      if (isKey) {
        parts.push(
          <span key={i++} className="text-faint">
            {match[2]}
          </span>,
        );
      }
    } else if (match[3] !== undefined) {
      parts.push(
        <span key={i++} className="text-faint">
          {match[3]}
        </span>,
      );
    }
    last = regex.lastIndex;
  }
  if (last < line.length) parts.push(line.slice(last));

  return (
    <div key={key} className="whitespace-pre">
      {parts}
    </div>
  );
}

export function TodayJson() {
  const lines = JSON.stringify(todayJson, null, 2).split("\n");

  return (
    <Reveal className="h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-xl border border-edge bg-surface shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
        {/* Tab bar */}
          <div className="flex items-center justify-between border-b border-edge bg-raised/60 pr-4">
            <div className="flex items-center gap-2 border-r border-edge bg-surface px-4 py-2.5">
              <span className="size-1.5 rounded-full bg-accent" />
              <span className="font-mono text-[12px] text-fg">today.json</span>
            </div>
            <span className="font-mono text-[10px] tracking-wider text-faint uppercase">
              read-only
            </span>
          </div>

          {/* Editor body */}
          <div className="flex-1 overflow-x-auto">
            <div className="flex min-w-max px-0 py-4 font-mono text-[13px] leading-[1.7]">
              <div
                aria-hidden
                className="sticky left-0 shrink-0 bg-surface px-4 text-right text-faint/60 select-none"
              >
                {lines.map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              <code className="block pr-6 text-muted">
                {lines.map((line, i) => renderLine(line, i))}
              </code>
            </div>
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between border-t border-edge bg-raised/60 px-4 py-1.5 font-mono text-[10px] text-faint">
            <span className="flex items-center gap-1.5">
              <GitBranch className="size-3" strokeWidth={1.75} />
              main
              <span className="text-edge-strong">·</span>
              <span className="text-ok">✓ valid</span>
            </span>
            <span className="tabular-nums">
              Ln {lines.length}, Col 1 · Spaces: 2 · UTF-8 · JSON
            </span>
          </div>
      </div>
    </Reveal>
  );
}
