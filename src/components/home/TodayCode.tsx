import { GitBranch } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

/*
 * today.rb — the "state of work" panel styled like a Ruby source file
 * in a dark IDE. Hand-tokenized (not parsed) so the highlighting is
 * exact and colorful. Palette is drawn from the portrait illustration to pop on the surface token.
 * TODO(anand): edit the values below — it's just data.
 */

type Tok = "kw" | "type" | "const" | "str" | "sym" | "method" | "comment" | "op" | "punc" | "plain";

const color: Record<Tok, string> = {
  kw: "text-[#9d8cff]", // module / class / def / end
  type: "text-info", // class + module names
  const: "text-accent", // ALL_CAPS constants
  str: "text-[#ffd27a]", // strings / %w
  sym: "text-[#ff9fb2]", // symbols / %i
  method: "text-ok", // method names
  comment: "text-faint italic",
  op: "text-[#ff9fb2]", // = and operators
  punc: "text-muted",
  plain: "text-fg",
};

type Piece = [string, Tok];
const L = (...pieces: Piece[]) => pieces;

const source: Piece[][] = [
  L(["# today.rb — state of work, live", "comment"]),
  L(["# frozen_string_literal: true", "comment"]),
  [],
  L(["module ", "kw"], ["Anand", "type"]),
  L(["  class ", "kw"], ["Today", "type"]),
  L(["    ROLE", "const"], ["       = ", "op"], ['"Software & AI Architect"', "str"]),
  L(["    COMPANY", "const"], ["    = ", "op"], ['"Sage AR Automation"', "str"]),
  L(["    EXPERIENCE", "const"], [" = ", "op"], ['"10+ Years"', "str"]),
  [],
  L(["    def ", "kw"], ["currently_building", "method"]),
  L(["      %w[", "str"], ["Enterprise_Finance Cloud_Systems AI_Engineering", "str"], ["]", "str"]),
  L(["    end", "kw"]),
  [],
  L(["    def ", "kw"], ["learning", "method"]),
  L(["      %i[", "sym"], ["MCP Agentic_AI LLMs", "sym"], ["]", "sym"]),
  L(["    end", "kw"]),
  L(["  end", "kw"]),
  L(["end", "kw"]),
];

export function TodayCode() {
  return (
    <Reveal className="h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-card border border-edge bg-surface shadow-card">
        {/* Tab bar */}
        <div className="flex items-center justify-between border-b border-edge bg-raised/60 pr-4">
          <div className="flex items-center gap-2 border-r border-edge bg-surface px-4 py-2.5">
            <span className="size-1.5 rounded-full bg-[#ff5555]" />
            <span className="font-mono text-small text-fg">today.rb</span>
          </div>
          <span className="font-mono text-micro tracking-wider text-faint uppercase">
            read-only
          </span>
        </div>

        {/* Editor body */}
        <div className="flex-1 overflow-x-auto">
          <div className="flex min-w-max py-4 font-mono text-small leading-[1.7]">
            <div
              aria-hidden
              className="sticky left-0 shrink-0 bg-surface px-4 text-right text-faint/50 select-none"
            >
              {source.map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
            <code className="block pr-6">
              {source.map((line, i) => (
                <div key={i} className="whitespace-pre">
                  {line.length === 0 ? (
                    " "
                  ) : (
                    line.map(([text, tok], j) => (
                      <span key={j} className={color[tok]}>
                        {text}
                      </span>
                    ))
                  )}
                </div>
              ))}
            </code>
          </div>
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between border-t border-edge bg-raised/60 px-4 py-1.5 font-mono text-micro text-faint">
          <span className="flex items-center gap-1.5">
            <GitBranch className="size-3" strokeWidth={1.75} />
            main
            <span className="text-edge-strong">·</span>
            <span className="text-ok">ruby -c ✓ OK</span>
          </span>
          <span className="tabular-nums">
            Ln {source.length}, Col 1 · Spaces: 2 · UTF-8 · Ruby
          </span>
        </div>
      </div>
    </Reveal>
  );
}
