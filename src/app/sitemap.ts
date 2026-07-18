import type { MetadataRoute } from "next";
import { nav } from "@/lib/data";
import { notes } from "@/lib/content/notes";

// TODO(anand): keep in sync with metadataBase in layout.tsx.
const BASE = "https://anandjosearackal.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = nav.map((item) => ({
    url: `${BASE}${item.href}`,
    lastModified: new Date(),
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
