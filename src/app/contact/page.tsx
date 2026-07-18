import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactRail } from "@/components/contact/ContactRail";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch — availability, location, timezone and a direct line for interesting problems.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 lg:px-10">
      <PageHeader
        overline="07 — mission control"
        title="Contact"
        description="Interested in enterprise architecture, backend systems or an intriguing problem? Open a channel."
      />

      <div className="grid gap-6 py-8 lg:grid-cols-[1fr_320px]">
        <ContactForm />
        <ContactRail />
      </div>
    </div>
  );
}
