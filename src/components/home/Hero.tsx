import { existsSync } from "fs";
import { join } from "path";
import { ArrowUpRight, FileText, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { BlueprintPortrait } from "@/components/home/BlueprintPortrait";

// Resume button shows only once public/resume.pdf exists (checked at build).
const hasResume = existsSync(join(process.cwd(), "public", profile.resume));

const ctas = [
  {
    label: "Resume",
    href: profile.resume,
    icon: FileText,
    primary: true,
    external: false,
  },
  {
    label: "GitHub",
    href: profile.github,
    icon: GithubIcon,
    primary: false,
    external: true,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: LinkedinIcon,
    primary: false,
    external: true,
  },
  {
    label: "Contact",
    href: `mailto:${profile.email}`,
    icon: Mail,
    primary: false,
    external: false,
  },
].filter((cta) => hasResume || cta.label !== "Resume");

export function Hero() {
  return (
    <section className="grid gap-10 pt-8 pb-14 lg:grid-cols-[1fr_360px] lg:gap-16 lg:pt-9">
      <div>
        <Reveal>
          <p className="flex items-center gap-2 font-mono text-small tracking-wide text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-ok/40" />
              <span className="relative inline-flex size-2 rounded-full bg-ok" />
            </span>
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="mt-6 font-display text-[44px] leading-[0.98] font-semibold tracking-tight text-fg uppercase sm:text-[64px] lg:text-[72px]">
            Anand Jose
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-4 flex flex-col gap-1">
            <span className="font-display text-lg font-medium text-accent text-shadow-glow-amber">
              {profile.role}
            </span>
            <span className="font-mono text-small tracking-wide text-muted">
              {profile.specialties.join(" · ")}
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mt-6 max-w-xl text-body leading-relaxed text-muted">
            {profile.summary}
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {ctas.map(({ label, href, icon: Icon, primary, external }) => (
              <a
                key={label}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={
                  primary
                    ? "inline-flex items-center gap-2 rounded-lg bg-fg px-4 py-2 text-small font-medium text-canvas transition-colors hover:bg-fg/85"
                    : "inline-flex items-center gap-2 rounded-lg border border-edge bg-surface px-4 py-2 text-small font-medium text-muted transition hover:border-info/40 hover:shadow-glow-blue hover:text-fg"
                }
              >
                <Icon className="size-4" strokeWidth={1.75} />
                {label}
                {external ? (
                  <ArrowUpRight className="size-3 text-faint" strokeWidth={2} />
                ) : null}
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="hidden h-full lg:block">
        <BlueprintPortrait />
      </Reveal>
    </section>
  );
}
