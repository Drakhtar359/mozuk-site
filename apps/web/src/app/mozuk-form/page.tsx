"use client";

import { useState } from "react";

export default function MozukForm() {
  const [sent, setSent] = useState(false);

  return (
    <main className="mx-auto max-w-2xl px-5 py-16">
      <h1 className="text-3xl sm:text-5xl font-bold">MOZUK form</h1>
      <p className="mt-3 text-sm/6 opacity-80">
        Share a few details and we’ll get back to you.
      </p>

      <form
        className="mt-8 grid gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <label className="grid gap-2">
          <span className="text-xs opacity-70">Name</span>
          <input
            type="text"
            name="name"
            required
            className="rounded-md border border-black/10 dark:border-white/10 bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brand)]"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-xs opacity-70">Email</span>
          <input
            type="email"
            name="email"
            required
            className="rounded-md border border-black/10 dark:border-white/10 bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brand)]"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-xs opacity-70">Message</span>
          <textarea
            name="message"
            rows={5}
            required
            className="rounded-md border border-black/10 dark:border-white/10 bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brand)]"
          />
        </label>

        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center rounded-md bg-[var(--brand)] px-4 py-2 text-white font-medium hover:opacity-90 transition"
        >
          Send
        </button>

        {sent && (
          <p className="text-sm text-[var(--brand)]">Thanks! We’ll be in touch.</p>
        )}
      </form>
    </main>
  );
}


