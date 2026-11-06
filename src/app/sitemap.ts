import type { MetadataRoute } from "next";
import { nav, profile } from "@/lib/data";
import { notes } from "@/lib/content/notes";

// Required by output: "export" (static GitHub Pages build).
export const dynamic = "force-static";

const BASE = profile.siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = nav.map((item) => ({
    url: `${BASE}${item.href}`,
    changeFrequency: "monthly" as const,
    priority: item.href === "/" ? 1 : 0.8,
  }));

  const noteEntries = notes.map((note) => ({
    url: `${BASE}/notes/${note.slug}`,
    lastModified: new Date(note.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...pages, ...noteEntries];
}
