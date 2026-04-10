"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Vercel Edge Ready",
    code: "NODE_ENV=production",
    desc: "Global distribution for millisecond load times via edge functions.",
  },
  {
    title: "SEO Meta-Structure",
    code: "ROBOTS=index,follow",
    desc: "Semantic HTML and JSON-LD built into the core for search dominance.",
  },
  {
    title: "Glassmorphism UI",
    code: "BACKDROP_BLUR=20px",
    desc: "Layered, mathematical aesthetics that respond to user interaction.",
  },
  {
    title: "100% Core Web Vitals",
    code: "LCP < 1.2s",
    desc: "Optimized for mobile-first indexing and high-performance ranking.",
  },
  {
    title: "Native Analytics",
    code: "PRIVACY=compliant",
    desc: "Built-in telemetry that respects user privacy while delivering growth data.",
  },
  {
    title: "Custom Scalability",
    code: "ARCHITECTURE=modular",
    desc: "The system evolves with your business. No proprietary locks.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-32 px-6 bg-[hsl(var(--card))]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-20 mb-32 items-center">
          <div className="lg:col-span-2">
            <span className="font-mono text-[10px] text-[hsl(var(--primary))] uppercase tracking-[0.4em] block mb-4">
              [ SPECIFICATIONS ]
            </span>
            <h2 className="text-6xl font-display font-bold tracking-tighter uppercase italic leading-[0.9]">
              Built for <br /> <span className="text-white/20">high conversion.</span>
            </h2>
          </div>
          <div className="p-8 border-l border-[hsl(var(--primary))]/20">
            <p className="text-white/40 font-mono text-xs uppercase leading-relaxed tracking-wider">
              "We don't build sites. We deploy growth systems architected on the latest React 19 stack."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-[1px] bg-[hsl(var(--border))]">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="p-10 bg-[hsl(var(--background))] hover:bg-[hsl(var(--primary))]/5 transition-colors duration-300 group"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="font-mono text-[9px] text-[hsl(var(--primary))] px-2 py-0.5 bg-[hsl(var(--primary))]/5 border border-[hsl(var(--primary))]/10">
                   {feature.code}
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))]/40" />
              </div>
              
              <h3 className="text-white font-display font-bold text-xs uppercase tracking-[0.2em] mb-4 group-hover:text-[hsl(var(--primary))] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-white/40 font-mono text-[10px] uppercase tracking-wider leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
