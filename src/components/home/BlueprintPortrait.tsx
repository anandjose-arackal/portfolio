import { existsSync } from "fs";
import { join } from "path";
import Image from "next/image";
import { profile } from "@/lib/data";

/**
 * Portrait panel with faint blueprint annotations behind it.
 * Drop a monochrome `portrait.jpg` into /public to replace the
 * placeholder silhouette — detected at build time.
 */
export function BlueprintPortrait() {
  const hasPortrait = existsSync(join(process.cwd(), "public", "portrait.jpg"));

  return (
    <figure className="relative mx-auto flex h-full w-full max-w-[340px] flex-col">
      {/* Blueprint sketches — behind, deliberately faint */}
      <svg
        aria-hidden
        viewBox="0 0 400 480"
        className="absolute -inset-8 h-auto w-[calc(100%+4rem)] text-info/25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        {/* dimension line, top */}
        <line x1="40" y1="24" x2="360" y2="24" strokeDasharray="2 4" />
        <line x1="40" y1="18" x2="40" y2="30" />
        <line x1="360" y1="18" x2="360" y2="30" />
        {/* dimension line, right */}
        <line x1="384" y1="60" x2="384" y2="420" strokeDasharray="2 4" />
        <line x1="378" y1="60" x2="390" y2="60" />
        <line x1="378" y1="420" x2="390" y2="420" />
        {/* corner crosshairs */}
        <path d="M24 48v-24h24" />
        <path d="M376 456v24h-24" opacity="0.6" />
        {/* construction circle + centerlines */}
        <circle cx="200" cy="240" r="150" strokeDasharray="3 6" opacity="0.5" />
        <line x1="200" y1="70" x2="200" y2="90" opacity="0.6" />
        <line x1="200" y1="390" x2="200" y2="410" opacity="0.6" />
        <line x1="30" y1="240" x2="50" y2="240" opacity="0.6" />
        <line x1="350" y1="240" x2="370" y2="240" opacity="0.6" />
      </svg>

      {/* Portrait card */}
      <div className="relative flex flex-1 flex-col overflow-hidden rounded-xl border border-edge bg-surface shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
        <div className="relative min-h-[300px] flex-1">
          {hasPortrait ? (
            <Image
              src="/portrait.jpg"
              alt={`Monochrome portrait of ${profile.name}`}
              fill
              priority
              sizes="(max-width: 1024px) 340px, 340px"
              className="object-cover grayscale"
            />
          ) : (
            /* Placeholder silhouette until portrait.jpg is added */
            <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-b from-raised to-surface">
              <svg
                aria-label={`Placeholder portrait of ${profile.name}`}
                viewBox="0 0 200 220"
                className="w-[70%] text-edge"
                fill="currentColor"
              >
                <circle cx="100" cy="78" r="44" />
                <path d="M100 132c-46 0-78 30-84 88h168c-6-58-38-88-84-88z" />
              </svg>
            </div>
          )}
        </div>

        {/* Annotation bar */}
        <figcaption className="flex items-center justify-between border-t border-edge bg-raised/60 px-4 py-2.5">
          <span className="font-mono text-[10px] tracking-[0.14em] text-faint uppercase">
            Fig. 01 — Portrait
          </span>
          <span className="font-mono text-[10px] tabular-nums text-faint">
            10.85° N, 76.27° E
          </span>
        </figcaption>
      </div>
    </figure>
  );
}
