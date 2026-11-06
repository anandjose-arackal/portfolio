"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BookOpen, FolderGit2, Play, Star } from "lucide-react";
import {
  projectCategories,
  projects,
  type Project,
  type ProjectCategory,
} from "@/lib/content/projects";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { Tag } from "@/components/ui/Tag";
import { cn } from "@/lib/utils";

type Filter = "All" | ProjectCategory;

function LinkButton({
  href,
  icon: Icon,
  children,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-lg border border-edge bg-raised px-3 py-1.5 text-small font-medium text-muted transition hover:border-info/40 hover:shadow-glow-blue hover:text-fg"
    >
      <Icon className="size-3.5" />
      {children}
      <ArrowUpRight className="size-3 text-faint" />
    </a>
  );
}

// AnimatePresence "popLayout" needs its direct children to forward a ref.
function ProjectCard({
  project,
  ref,
}: {
  project: Project;
  ref?: React.Ref<HTMLElement>;
}) {
  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "flex h-full flex-col rounded-card border border-edge bg-surface p-5 transition hover:border-info/40 hover:shadow-glow-blue",
        project.featured && "md:col-span-2 md:p-6",
      )}
    >
      <header className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <FolderGit2 className="size-4 shrink-0 text-faint" strokeWidth={1.75} />
          <h3 className="truncate font-mono text-body font-medium text-fg">
            {project.name}
          </h3>
          <span className="shrink-0 rounded-full border border-edge-strong px-2 py-px font-mono text-micro text-faint capitalize">
            {project.visibility}
          </span>
          {project.contribution ? (
            <span className="shrink-0 rounded-full border border-info/40 bg-info/10 px-2 py-px font-mono text-micro text-info">
              contributor
            </span>
          ) : null}
          {project.featured ? (
            <span className="flex shrink-0 items-center gap-1 rounded-md border border-accent/40 bg-accent/10 px-1.5 py-0.5 font-mono text-micro tracking-wider text-accent uppercase">
              <Star className="size-2.5" strokeWidth={2} />
              featured
            </span>
          ) : null}
        </div>
        <div className="flex shrink-0 gap-1.5">
          {project.categories.map((c) => (
            <span key={c} className="font-mono text-micro text-faint">
              {c}
            </span>
          ))}
        </div>
      </header>

      <p className="mt-2 font-mono text-label text-info/80">
        {project.architecture}
      </p>

      <p className="mt-3 text-small leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-4 grid flex-1 gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-edge bg-raised/40 p-3">
          <p className="font-mono text-micro tracking-label text-faint uppercase">
            Business problem
          </p>
          <p className="mt-1.5 text-small leading-relaxed text-muted">
            {project.problem}
          </p>
        </div>
        <div className="rounded-lg border border-edge bg-raised/40 p-3">
          <p className="font-mono text-micro tracking-label text-faint uppercase">
            Impact
          </p>
          <p className="mt-1.5 text-small leading-relaxed text-fg/85">
            {project.impact}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      {(project.links.github || project.links.demo || project.links.docs) && (
        <footer className="mt-4 flex flex-wrap gap-2 border-t border-edge pt-4">
          {project.links.github ? (
            <LinkButton href={project.links.github} icon={GithubIcon}>
              GitHub
            </LinkButton>
          ) : null}
          {project.links.demo ? (
            <LinkButton href={project.links.demo} icon={Play}>
              Demo
            </LinkButton>
          ) : null}
          {project.links.docs ? (
            <LinkButton href={project.links.docs} icon={BookOpen}>
              Documentation
            </LinkButton>
          ) : null}
        </footer>
      )}
    </motion.article>
  );
}

export function ProjectsGrid() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible =
    filter === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(filter));

  return (
    <div className="py-8">
      {/* Filter bar */}
      <div className="mb-6 flex flex-wrap gap-2">
        {(["All", ...projectCategories] as Filter[]).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-lg border px-3 py-1.5 font-mono text-small transition-colors",
              filter === f
                ? "border-accent/50 bg-accent/10 text-accent"
                : "border-edge bg-surface text-muted hover:border-info/40 hover:shadow-glow-blue hover:text-fg",
            )}
          >
            {f}
          </button>
        ))}
        <span className="ml-auto self-center font-mono text-label text-faint">
          {visible.length} of {projects.length}
        </span>
      </div>

      <motion.div layout className="grid gap-3 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
