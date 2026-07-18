import { Hero } from "@/components/home/Hero";
import { StatsRow } from "@/components/home/StatsRow";
import { CareerTimeline } from "@/components/home/CareerTimeline";
import { CurrentFocus } from "@/components/home/CurrentFocus";
import { TodayJson } from "@/components/home/TodayJson";
import { profile } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 lg:px-10">
      <Hero />
      <StatsRow />

      <section
        aria-label="Current focus, today and career timeline"
        className="grid gap-3 pb-14 lg:grid-cols-2 xl:grid-cols-3"
      >
        <CurrentFocus />
        <TodayJson />
        <CareerTimeline />
      </section>

      <footer className="flex flex-col items-start justify-between gap-2 border-t border-edge py-8 sm:flex-row sm:items-center">
        <p className="font-mono text-[11px] text-faint">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-[11px] text-faint">
          Next.js · TypeScript · Tailwind — deployed on Vercel
        </p>
      </footer>
    </div>
  );
}
