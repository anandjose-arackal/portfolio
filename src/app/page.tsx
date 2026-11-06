import { Hero } from "@/components/home/Hero";
import { StatsRow } from "@/components/home/StatsRow";
import { CareerTimeline } from "@/components/home/CareerTimeline";
import { CurrentFocus } from "@/components/home/CurrentFocus";
import { TodayCode } from "@/components/home/TodayCode";
import { profile } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 lg:px-10">
      <Hero />
      <StatsRow />

      <section
        aria-label="Current focus and today"
        className="grid gap-3 pb-3 lg:grid-cols-2"
      >
        <CurrentFocus />
        <TodayCode />
      </section>

      <section aria-label="Career timeline" className="pb-14">
        <CareerTimeline />
      </section>

      <footer className="flex flex-col items-start justify-between gap-2 border-t border-edge py-8 sm:flex-row sm:items-center">
        <p className="font-mono text-label text-faint">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-label text-faint">
          Next.js · TypeScript · Tailwind — deployed on Vercel
        </p>
      </footer>
    </div>
  );
}
