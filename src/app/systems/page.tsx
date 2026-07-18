import type { Metadata } from "next";
import { systemCategories } from "@/lib/content/systems";
import { SystemsGrid } from "@/components/systems/SystemsGrid";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Systems",
  description:
    "Engineering systems, not a skills list — backend, frontend, infrastructure, databases, architecture and AI, with honest depth per technology.",
};

export default function SystemsPage() {
  const total = systemCategories.reduce((n, c) => n + c.items.length, 0);

  return (
    <div className="mx-auto max-w-5xl px-5 lg:px-10">
      <PageHeader
        overline="03 — engineering systems"
        title="Systems"
        description="The systems I operate, not a list of logos. Select any technology for years in production, where it was used, and an honest confidence level."
        meta={`${total} technologies`}
      />
      <SystemsGrid />
    </div>
  );
}
