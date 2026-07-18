import type { Metadata } from "next";
import { deployments } from "@/lib/content/career";
import { DeployCard } from "@/components/career/DeployCard";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Career",
  description:
    "A decade of engineering roles, rendered as deployment history — responsibilities, deliveries, impact and lessons per release.",
};

export default function CareerPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 lg:px-10">
      <PageHeader
        overline="02 — deployment history"
        title="Career"
        description="Each role shipped like a release: what was built, what it changed for the business, and what it taught. Latest deployment first."
        meta={`${deployments.length} deployments`}
      />

      <div className="space-y-3 py-10">
        {deployments.map((deployment, i) => (
          <Reveal key={deployment.version} delay={i * 0.05}>
            <DeployCard deployment={deployment} defaultOpen={i === 0} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
