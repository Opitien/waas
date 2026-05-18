"use client";

import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export function Testimonials() {
  const testimonials = [
    {
      name: "Ezekiel Whitfallon",
      role: "CTO, CleanGrid Africa",
      quote: "We saved months of engineering time and finally got full visibility into our web conversions. WAAS replaced three tools for us and delivered a world-class landing page that loads instantly.",
      logo: "CleanGrid",
    },
    {
      name: "Sarah Jenkins",
      role: "Founder, Bloomly Labs",
      quote: "As a non-technical founder, managing our company website was a constant headache. Now, I just ping the WAAS team on Slack and the updates are live within hours. The design is absolutely stunning.",
      logo: "Bloomly",
    },
    {
      name: "Marcus Thorne",
      role: "VP of Product, FinTech Pulse",
      quote: "Our landing page speed score went from 42% to 100% after migrating to WAAS. The static edge hosting alone is worth the price, and the design updates are seamless.",
      logo: "FinTech",
    },
  ];

  // Duplicate the list multiple times to allow infinite seamless looping
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section className="bg-mint-50 py-20 lg:py-28 border-y border-slate-100 overflow-hidden relative">
      {/* Inline styles for custom marquee transitions to prevent package dependencies or global pollute */}
      <style>{`
        @keyframes marqueeLeftToRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee-ltr {
          display: flex;
          width: max-content;
          animation: marqueeLeftToRight 30s linear infinite;
        }
        .marquee-container:hover .animate-marquee-ltr {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wide px-3 py-1 border border-emerald-200">
            Client Success
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl leading-tight">
            What fast-moving teams are saying.
          </h2>
          <p className="mt-4 text-slate-500 text-base sm:text-lg">
            Hundreds of startups, SaaS businesses, and digital agencies use WAAS to outsource their development overhead.
          </p>
        </motion.div>
      </div>

      {/* Infinite Scrolling Marquee Container */}
      <div 
        className="marquee-container relative w-full overflow-hidden py-4 select-none [mask-image:linear-gradient(to_right,transparent_0%,#000_10%,#000_90%,transparent_100%)]"
      >
        <div className="animate-marquee-ltr flex gap-8">
          {duplicatedTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="w-[360px] sm:w-[420px] shrink-0 rounded-2xl border border-slate-200/60 bg-white p-7 shadow-sm shadow-slate-100 hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4">
                {/* Five Stars Rating */}
                <div className="flex gap-0.5 text-emerald-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-emerald-500 stroke-emerald-500" />
                  ))}
                </div>
                
                {/* Quote Text */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic font-medium">
                  "{t.quote}"
                </p>
              </div>

              {/* User details */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900">{t.name}</h4>
                  <p className="text-xs font-semibold text-slate-500">{t.role}</p>
                </div>
                <div className="font-display font-extrabold text-xs text-slate-350 uppercase tracking-widest">
                  {t.logo}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
