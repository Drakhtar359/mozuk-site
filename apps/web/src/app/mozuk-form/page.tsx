"use client";

import { useMemo, useState } from "react";

export default function MozukForm() {
  const [sent, setSent] = useState(false);
  const [wantsOther, setWantsOther] = useState(false);
  const [stage, setStage] = useState<string>("");
  const services = useMemo(
    () => [
      { key: "pitch", label: "Pitch Decks (Investor-ready presentations)" },
      { key: "roadmaps", label: "Roadmaps (Strategic product timelines)" },
      { key: "docs", label: "Product Documentation (Datasheets & catalogs)" },
      { key: "analytics", label: "Data Analysis (Turning numbers into insights)" },
      { key: "other", label: "Other" },
    ],
    []
  );

  return (
    <main className="mx-auto max-w-2xl px-5 py-16">
      <h1 className="text-center text-3xl sm:text-5xl font-bold">
        MOZ<span className="text-[var(--brand)]">U</span>K
      </h1>
      <p className="mt-3 text-center text-sm/6 opacity-80">
        Connecting dots that <span className="text-[var(--brand)] font-semibold">Matter</span>.
      </p>

      <form
        className="mt-10 grid gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        {/* Name */}
        <label className="grid gap-2">
          <span className="text-xs opacity-70">Name</span>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
            className="rounded-md border border-black/10 dark:border-white/10 bg-background px-3 py-2 outline-none transition focus:ring-2 focus:ring-[var(--brand)]"
          />
        </label>

        {/* Email */}
        <label className="grid gap-2">
          <span className="text-xs opacity-70">Email</span>
          <input
            type="email"
            name="email"
            placeholder="name@email.com"
            required
            className="rounded-md border border-black/10 dark:border-white/10 bg-background px-3 py-2 outline-none transition focus:ring-2 focus:ring-[var(--brand)]"
          />
        </label>

        {/* Company */}
        <label className="grid gap-2">
          <span className="text-xs opacity-70">Company / Startup name</span>
          <input
            type="text"
            name="company"
            placeholder="Mozuk Inc., Optional"
            className="rounded-md border border-black/10 dark:border-white/10 bg-background px-3 py-2 outline-none transition focus:ring-2 focus:ring-[var(--brand)]"
          />
        </label>

        {/* Industry */}
        <label className="grid gap-2">
          <span className="text-xs opacity-70">Industry</span>
          <input
            type="text"
            name="industry"
            placeholder="e.g. SaaS, Renewable Energy, Fashion, …"
            className="rounded-md border border-black/10 dark:border-white/10 bg-background px-3 py-2 outline-none transition focus:ring-2 focus:ring-[var(--brand)]"
          />
        </label>

        {/* Services */}
        <fieldset className="grid gap-3">
          <legend className="text-xs opacity-70">Service you’re interested in</legend>
          <div className="grid gap-2">
            {services.map((s) => (
              <label key={s.key} className="inline-flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="services"
                  value={s.key}
                  onChange={(e) => {
                    if (s.key === "other") setWantsOther(e.currentTarget.checked);
                  }}
                  className="mt-0.5 h-4 w-4 rounded border-black/20 dark:border-white/20 text-[var(--brand)] focus:ring-[var(--brand)] transition"
                />
                <span className="text-sm/6 opacity-90">{s.label}</span>
              </label>
            ))}
          </div>
          {wantsOther && (
            <input
              type="text"
              name="otherService"
              placeholder="Describe other service…"
              className="mt-1 rounded-md border border-black/10 dark:border-white/10 bg-background px-3 py-2 outline-none transition focus:ring-2 focus:ring-[var(--brand)]"
            />
          )}
        </fieldset>

        {/* Stage */}
        <fieldset className="grid gap-3">
          <legend className="text-xs opacity-70">Project stage</legend>
          <div className="grid gap-2">
            {[
              { key: "idea", label: "Idea Stage (Still shaping the concept)" },
              { key: "growth", label: "Early Growth (Building traction)" },
              { key: "scaling", label: "Scaling (Expanding fast)" },
            ].map((opt) => (
              <label key={opt.key} className="inline-flex items-start gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="stage"
                  value={opt.key}
                  checked={stage === opt.key}
                  onChange={() => setStage(opt.key)}
                  className="mt-0.5 h-4 w-4 border-black/20 dark:border-white/20 text-[var(--brand)] focus:ring-[var(--brand)] transition"
                />
                <span className="text-sm/6 opacity-90">{opt.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Message */}
        <label className="grid gap-2">
          <span className="text-xs opacity-70">Message / Details</span>
          <textarea
            name="message"
            rows={6}
            placeholder="Tell us about your project, goals, or challenges…"
            className="rounded-md border border-black/10 dark:border-white/10 bg-background px-3 py-2 outline-none transition focus:ring-2 focus:ring-[var(--brand)]"
            required
          />
        </label>

        {/* Submit */}
        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center rounded-md bg-[var(--brand)] px-5 py-2.5 text-white font-medium shadow-sm transition duration-200 hover:opacity-95 hover:scale-[1.01] active:scale-[0.99]"
        >
          Connect the Dots 🚀
        </button>

        {sent && (
          <p className="text-sm text-[var(--brand)]">Thanks! We’ll be in touch.</p>
        )}
      </form>
    </main>
  );
}


