"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { profile } from "@/lib/data";

/*
 * No backend yet — submit composes a mailto: draft in the visitor's
 * own mail client with the form contents prefilled.
 * TODO(anand): swap for Formspree / an API route when ready.
 */

const fields = [
  { id: "name", label: "Name", type: "text", required: true, autoComplete: "name" },
  { id: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
  { id: "company", label: "Company", type: "text", required: false, autoComplete: "organization" },
] as const;

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const company = String(data.get("company") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Portfolio contact — ${name}${company ? ` (${company})` : ""}`;
    const body = `${message}\n\n—\n${name}\n${email}${company ? `\n${company}` : ""}`;

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-card border border-edge bg-surface p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((field) => (
          <div
            key={field.id}
            className={field.id === "company" ? "sm:col-span-2" : undefined}
          >
            <label
              htmlFor={field.id}
              className="font-mono text-micro tracking-label text-faint uppercase"
            >
              {field.label}
              {field.required ? <span className="text-accent"> *</span> : null}
            </label>
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              required={field.required}
              autoComplete={field.autoComplete}
              className="mt-1.5 w-full rounded-lg border border-edge bg-raised px-3 py-2 text-small text-fg placeholder:text-faint/60 focus:border-accent focus:outline-none"
              placeholder={field.label}
            />
          </div>
        ))}
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="font-mono text-micro tracking-label text-faint uppercase"
          >
            Message<span className="text-accent"> *</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="mt-1.5 w-full resize-y rounded-lg border border-edge bg-raised px-3 py-2 text-small leading-relaxed text-fg placeholder:text-faint/60 focus:border-accent focus:outline-none"
            placeholder="What are you building?"
          />
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <p className="font-mono text-micro text-faint">
          {sent
            ? `→ no draft? write to ${profile.email}`
            : "opens a prefilled draft in your mail client"}
        </p>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-lg bg-fg px-4 py-2 text-small font-medium text-canvas transition-colors hover:bg-fg/85"
        >
          <Send className="size-4" strokeWidth={1.75} />
          Send
        </button>
      </div>
    </form>
  );
}
