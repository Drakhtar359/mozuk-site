"use client";

import { useRef, useEffect, useState } from "react";

export default function TheClarityAudit() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    
    if (!video || !canvas) return;

    const captureLastFrame = () => {
      if (canvas && video && video.readyState >= 2) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(video, 0, 0);
          const dataUrl = canvas.toDataURL("image/jpeg");
          setBackgroundImage(dataUrl);
        }
      }
    };

    const handleVideoEnd = () => {
      captureLastFrame();
    };

    video.addEventListener("ended", handleVideoEnd);

    return () => {
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, []);

  return (
    <>
      {/* Full-width video hero section */}
      <section className="relative min-h-[100svh] flex flex-col justify-center py-12 sm:py-16 overflow-hidden w-screen">
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          loop={false}
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover -z-10 ${backgroundImage ? 'hidden' : ''}`}
          style={{
            filter: 'blur(2px)',
            WebkitFilter: 'blur(2px)',
          }}
        >
          <source src="/clarity-audit-video.mp4" type="video/mp4" />
        </video>
        
        {/* Last frame background image (shown after video ends) */}
        {backgroundImage && (
          <div
            className="absolute inset-0 w-full h-full object-cover -z-10"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: 'blur(2px)',
              WebkitFilter: 'blur(2px)',
            }}
          />
        )}
        
        {/* Hidden canvas for capturing video frame */}
        <canvas ref={canvasRef} className="hidden" />
        
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-background/40 -z-10" />
        
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-6xl px-5 w-full">
          <div className="flex justify-center">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight text-center relative inline-block">
              The Clarity
              <span className="text-[var(--brand)]"> Audit</span>
              <span className="absolute -top-2 -right-4 sm:-right-6 text-black dark:text-black text-xs sm:text-sm">©</span>
            </h1>
          </div>
          <div className="mt-8 max-w-3xl mx-auto text-center space-y-4">
            <p className="text-base sm:text-lg text-black/70 dark:text-white/70">
              This is not a feel-good consultation. It is a forensic deep-dive to challenge the foundational assumptions of your product narrative and communication strategy. We bypass surface-level fixes to identify the points of friction, misdirection, and conceptual weakness that are killing your traction.
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-5">

      <section className="py-16 border-t border-black/10 dark:border-white/10">
        <h2 className="text-2xl font-semibold mb-6">
          The deliverables: <span className="text-[var(--brand)]">an unfiltered truth</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl p-8 border border-black/10 dark:border-white/10 bg-background">
            <h3 className="text-xl font-semibold mb-3">Narrative Coherence</h3>
            <p className="text-sm/6 opacity-80">
              We expose the gaps between what your product does and what your story says. Is your pitch deck a wish list or a strategic document?
            </p>
          </div>
          <div className="rounded-2xl p-8 border border-black/10 dark:border-white/10 bg-background">
            <h3 className="text-xl font-semibold mb-3">Targeted Alignment</h3>
            <p className="text-sm/6 opacity-80">
              We ruthlessly examine the fit between your intended audience, their actual problem, and your proposed solution. Is your market definition based on data or delusion?
            </p>
          </div>
          <div className="rounded-2xl p-8 border border-black/10 dark:border-white/10 bg-background">
            <h3 className="text-xl font-semibold mb-3">Data Integrity</h3>
            <p className="text-sm/6 opacity-80">
              We verify the data you use to support your claims. Is your analysis sound, or are you just connecting the dots you want to see?
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-black/10 dark:border-white/10">
        <h2 className="text-2xl font-semibold mb-6">
          The Outcome: <span className="text-[var(--brand)]">a precise foundation</span>
        </h2>
        <div className="rounded-2xl p-8 sm:p-10 border border-black/10 dark:border-white/10 bg-background">
          <p className="text-sm/6 opacity-80">
            You receive a precise, prioritized blueprint identifying the 3-5 critical blockages to your growth and communication. This is the unvalidated, unfiltered truth you need to hear, not the comfort you want to buy.
          </p>
          <p className="text-sm/6 opacity-80 mt-4">
            The Clarity Audit is the prerequisite to working with MOZUK. Before we help you build the right story, we ensure you stop telling the wrong one.
          </p>
        </div>
      </section>

      <section id="contact" className="py-20 border-t border-black/10 dark:border-white/10">
        <h2 className="text-2xl font-semibold mb-6">Get started</h2>
        <div className="rounded-2xl p-8 sm:p-10 border border-black/10 dark:border-white/10 bg-background">
          <h3 className="text-2xl font-semibold">Schedule your clarity audit</h3>
          <p className="mt-3 text-sm/6 opacity-80 max-w-prose">
            Tell us about your product and goals. We'll reply within 1 business day 
            to discuss how we can help bring clarity to your strategy and documentation.
          </p>
          <a href="/mozuk-form" className="mt-6 inline-flex items-center rounded-md bg-[var(--brand)] text-white px-5 py-3 text-sm font-medium shadow-sm hover:opacity-90 transition">
            Get started
          </a>
        </div>
      </section>
      </main>
    </>
  );
}

