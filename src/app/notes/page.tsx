import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, FileText } from "lucide-react";
import { notes } from "@/lib/content/notes";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";

export const metadata: Metadata = {
  title: "Engineering Notes",
  description:
    "Internal-documentation style write-ups: problem, context, solution, tradeoffs, outcome and lessons from real production work.",
};

const dateFmt = new Intl.DateTimeFormat("en-GB", {
  month: "short",
  year: "numeric",
});

export default function NotesPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 lg:px-10">
      <PageHeader
        overline="05 — documentation"
        title="Engineering Notes"
        description="Write-ups from production: the problem, the constraints, what shipped, and what it cost. Written the way internal docs should be."
        meta={`${notes.length} documents`}
      />

      <div className="space-y-2 py-10">
        {notes.map((note, i) => (
          <Reveal key={note.slug} delay={i * 0.04}>
            <Link
              href={`/notes/${note.slug}`}
              className="group flex items-center gap-4 rounded-xl border border-edge bg-surface px-5 py-4 transition-colors hover:border-edge-strong"
            >
              <FileText
                className="size-4 shrink-0 text-faint"
                strokeWidth={1.75}
              />
              <span className="min-w-0 flex-1">
                <span className="block truncate font-display text-[14.5px] font-medium text-fg">
                  {note.title}
                </span>
                <span className="mt-0.5 block truncate text-[12px] text-faint">
                  {note.excerpt}
                </span>
              </span>
              <span className="hidden shrink-0 gap-1.5 md:flex">
                {note.tags.slice(0, 2).map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </span>
              <span className="shrink-0 font-mono text-[11px] text-faint">
                {dateFmt.format(new Date(note.date))}
              </span>
              <ChevronRight
                className="size-4 shrink-0 text-faint transition-transform group-hover:translate-x-0.5"
                strokeWidth={1.75}
              />
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
