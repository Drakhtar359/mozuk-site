"use client";

import { useMemo, useState } from "react";

export default function MozukForm() {
  const [sent, setSent] = useState(false);
  const [wantsOther, setWantsOther] = useState(false);
  const [stage, setStage] = useState<string>("");

  // Interaction states for sleek input animations
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const services = useMemo(
    () => [
      { key: "pitch", label: "Pitch Decks", sublabel: "Investor-ready" },
      { key: "roadmaps", label: "Roadmaps", sublabel: "Strategic timelines" },
      { key: "docs", label: "Product Docs", sublabel: "Datasheets & catalogs" },
      { key: "analytics", label: "Data Analysis", sublabel: "Insights from data" },
      { key: "other", label: "Something else", sublabel: "Tailored needs" },
    ],
    []
  );

  return (
    <main className="relative min-h-[100svh] flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Background is now global in layout, but we can keep component if needed for special intensity, or remove if layout covers it. 
          Since layout covers it globally, we don't strictly need it here unless we want a DOUBLE layer (which might be too heavy).
          The layout.tsx update puts ConstellationCanvas globally. 
          Let's NOT duplicate it here to save performance, but we still need the z-index container.
      */}

      {/* Glassmorphism Container */}
      <div className="relative z-10 w-full max-w-2xl animate-fade-in-up mt-20 mb-20">

        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4 text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            Let’s Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand)] to-cyan-400 drop-shadow-[0_0_30px_rgba(4,168,154,0.5)]">Future</span>.
          </h1>
          <p className="text-lg text-white/90 max-w-md mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            Ready to connect the dots? <br />
            Your next big milestone starts with a simple "Hello".
          </p>
        </div>

        {/* Advanced Liquid Glass Form */}
        <div className="group relative rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.1)_inset]">
          {/* Multi-layer glass background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-[var(--brand)]/[0.08] via-transparent to-cyan-500/[0.05]"></div>
          <div className="absolute inset-0 backdrop-blur-3xl backdrop-saturate-150"></div>

          {/* Border gradient */}
          <div className="absolute inset-0 rounded-3xl border border-white/20 shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset]"></div>

          {/* Top highlight */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

          {/* Subtle shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-50"></div>
          {sent ? (
            <div className="relative z-10 flex flex-col items-center justify-center py-24 px-8 text-center animate-fade-in">
              <div className="w-20 h-20 rounded-full bg-[var(--brand)]/20 flex items-center justify-center mb-6 border-2 border-[var(--brand)]/50 shadow-[0_0_30px_rgba(4,168,154,0.3)]">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--brand)]">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Message Sent!</h2>
              <p className="text-white/80 text-lg drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">We've received your signal. Expect a reply within 24 hours.</p>
              <button
                onClick={() => window.location.href = '/'}
                className="mt-8 px-6 py-2 rounded-full border-2 border-white/20 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
              >
                Return Home
              </button>
            </div>
          ) : (
            <form
              className="relative z-10 p-8 sm:p-10 grid gap-8"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              {/* Row 1: Identity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="group relative">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="peer w-full bg-white/5 border-b-2 border-white/30 py-3 text-white placeholder-transparent focus:border-[var(--brand)] focus:bg-white/10 focus:outline-none transition-all duration-300"
                    placeholder="Name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-xs text-[var(--brand)] drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/60 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[var(--brand)]"
                  >
                    Full Name
                  </label>
                </div>

                <div className="group relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="peer w-full bg-transparent border-b-2 border-white/20 py-3 text-white placeholder-transparent focus:border-[var(--brand)] focus:outline-none transition-all duration-300"
                    placeholder="Email"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-xs text-[var(--brand)] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[var(--brand)]"
                  >
                    Email Address
                  </label>
                </div>
              </div>

              {/* Row 2: Context */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="group relative">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="peer w-full bg-transparent border-b-2 border-white/20 py-3 text-white placeholder-transparent focus:border-[var(--brand)] focus:outline-none transition-all duration-300"
                    placeholder="Company"
                  />
                  <label
                    htmlFor="company"
                    className="absolute left-0 -top-3.5 text-xs text-[var(--brand)] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[var(--brand)]"
                  >
                    Company Name
                  </label>
                </div>

                <div className="group relative">
                  <input
                    type="text"
                    name="industry"
                    id="industry"
                    className="peer w-full bg-transparent border-b-2 border-white/20 py-3 text-white placeholder-transparent focus:border-[var(--brand)] focus:outline-none transition-all duration-300"
                    placeholder="Industry"
                  />
                  <label
                    htmlFor="industry"
                    className="absolute left-0 -top-3.5 text-xs text-[var(--brand)] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[var(--brand)]"
                  >
                    Industry
                  </label>
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-4">
                <span className="block text-sm font-semibold uppercase tracking-wider text-white/40">Where do we fit in?</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((s) => (
                    <label
                      key={s.key}
                      className={`relative flex items - center p - 4 rounded - xl border cursor - pointer transition - all duration - 300 group
                        ${focusedField === s.key
                          ? "bg-[var(--brand)]/10 border-[var(--brand)]"
                          : "bg-white/5 border-white/10 hover:border-white/30"
                        } `}
                      onMouseEnter={() => setFocusedField(s.key)}
                      onMouseLeave={() => setFocusedField(null)}
                    >
                      <input
                        type="checkbox"
                        name="services"
                        value={s.key}
                        className="peer sr-only"
                        onChange={(e) => {
                          // Toggle Logic visual if needed, currently driven by :checked + div
                          if (s.key === "other") setWantsOther(e.currentTarget.checked);
                        }}
                      />
                      {/* Custom Checkbox Circle */}
                      <div className="w-5 h-5 rounded border border-white/40 mr-3 peer-checked:bg-[var(--brand)] peer-checked:border-[var(--brand)] flex items-center justify-center transition-colors">
                        <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-white">{s.label}</span>
                        {s.sublabel && <span className="text-xs text-white/50">{s.sublabel}</span>}
                      </div>
                      {/* Glow Effect on Hover */}
                      <div className="absolute inset-0 rounded-xl bg-[var(--brand)]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </label>
                  ))}
                </div>
                {wantsOther && (
                  <input
                    type="text"
                    name="otherService"
                    placeholder="Tell us what you need..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[var(--brand)] focus:outline-none transition-all animate-fade-in"
                  />
                )}
              </div>

              {/* Stage Selection */}
              <div className="space-y-4">
                <span className="block text-sm font-semibold uppercase tracking-wider text-white/40">Current Stage</span>
                <div className="flex flex-wrap gap-2">
                  {[
                    { key: "idea", label: "Idea" },
                    { key: "startup", label: "Early Stage" },
                    { key: "scaling", label: "Scaling" },
                    { key: "enterprise", label: "Enterprise" },
                  ].map((opt) => (
                    <label key={opt.key} className="cursor-pointer">
                      <input
                        type="radio"
                        name="stage"
                        value={opt.key}
                        className="peer sr-only"
                        checked={stage === opt.key}
                        onChange={() => setStage(opt.key)}
                      />
                      <span className="inline-block px-5 py-2 rounded-full border border-white/10 bg-white/5 text-white/60 text-sm hover:bg-white/10 transition-all peer-checked:bg-[var(--brand)] peer-checked:text-white peer-checked:border-[var(--brand)] peer-checked:shadow-[0_0_15px_rgba(4,168,154,0.4)]">
                        {opt.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="group relative mt-2">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="peer w-full bg-transparent border rounded-xl border-white/20 p-4 text-white placeholder-transparent focus:border-[var(--brand)] focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Details"
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 -top-3 text-xs bg-[#0a0a0a] px-1 text-[var(--brand)] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[var(--brand)] peer-focus:bg-[#0a0a0a]"
                >
                  Project Details
                </label>
              </div>

              {/* Action */}
              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-xl bg-white text-black font-bold py-4 text-lg transition-all hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-[0.99]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand)] to-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  Launch Message
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </span>
              </button>

            </form>
          )}
        </div>

        {/* Footer Note */}
        <p className="text-center text-white/30 text-xs mt-6">
          Innovation awaits. We typically reply within 1 business day.
        </p>

      </div>
    </main>
  );
}



