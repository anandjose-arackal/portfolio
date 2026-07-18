import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Repository-style project cards — architecture, the business problem each one solves, and the impact it delivered.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 lg:px-10">
      <PageHeader
        overline="04 — repositories"
        title="Projects"
        description="Selected work, framed the way engineers read repos: what it is, why it exists, and what changed because it shipped."
      />
      <ProjectsGrid />
    </div>
  );
}
