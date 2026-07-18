import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { notes } from "@/lib/content/notes";
import { NoteLayout } from "@/components/notes/NoteLayout";

export const dynamicParams = false;

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);
  if (!note) return {};
  return { title: note.title, description: note.excerpt };
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);
  if (!note) notFound();

  return <NoteLayout note={note} />;
}
