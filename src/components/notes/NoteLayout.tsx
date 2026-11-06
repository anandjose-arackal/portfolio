import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Note } from "@/lib/content/notes";
import { Tag } from "@/components/ui/Tag";

const dateFmt = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

export function NoteLayout({ note }: { note: Note }) {
  return (
    <div className="mx-auto max-w-5xl px-5 lg:px-10">
      {/* Doc header */}
      <div className="border-b border-edge pt-8 pb-6">
        <Link
          href="/notes"
          className="inline-flex items-center gap-1.5 font-mono text-label text-faint transition-colors hover:text-fg"
        >
          <ArrowLeft className="size-3.5" strokeWidth={1.75} />
          engineering-notes
        </Link>
        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
          {note.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="font-mono text-label text-faint">
            {dateFmt.format(new Date(note.date))}
          </span>
          <span className="text-edge-strong">·</span>
          <div className="flex gap-1.5">
            {note.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-10 py-8 xl:grid-cols-[1fr_200px]">
        {/* Sections */}
        <div className="min-w-0 space-y-8">
          {note.sections.map((section, i) => (
            <section key={section.id} id={section.id} className="scroll-mt-20">
              <h2 className="flex items-baseline gap-3">
                <span className="font-mono text-label text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg font-medium text-fg">
                  {section.label}
                </span>
              </h2>
              <div className="mt-3 space-y-3 border-l border-edge pl-6">
                {section.body.map((paragraph, j) => (
                  <p
                    key={j}
                    className="text-body leading-relaxed text-muted"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.code ? (
                  <div className="overflow-hidden rounded-lg border border-edge bg-canvas/70">
                    <div className="flex items-center justify-between border-b border-edge px-4 py-2">
                      <span className="font-mono text-micro tracking-wider text-faint uppercase">
                        {section.code.lang}
                      </span>
                    </div>
                    <pre className="overflow-x-auto p-4 font-mono text-small leading-relaxed text-muted">
                      <code>{section.code.content}</code>
                    </pre>
                  </div>
                ) : null}
              </div>
            </section>
          ))}
        </div>

        {/* Mini TOC — desktop only */}
        <nav
          aria-label="On this page"
          className="sticky top-20 hidden self-start xl:block"
        >
          <p className="font-mono text-micro tracking-label text-faint uppercase">
            On this page
          </p>
          <ul className="mt-3 space-y-1.5 border-l border-edge">
            {note.sections.map((section, i) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="-ml-px block border-l border-transparent py-0.5 pl-4 text-small text-faint transition hover:border-accent hover:shadow-glow-amber hover:text-fg"
                >
                  <span className="mr-2 font-mono text-micro">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
