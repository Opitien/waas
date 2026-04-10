"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Vercel Edge Ready",
    desc: "Global distribution for millisecond load times anywhere in the world.",
  },
  {
    title: "SEO Optimized",
    desc: "Semantic HTML and meta-structures built-in for organic growth.",
  },
  {
    title: "Glassmorphism UI",
    desc: "Modern, layered aesthetics that feel high-end and interactive.",
  },
  {
    title: "100% Responsive",
    desc: "Perfectly optimized for mobile, tablet, and ultra-wide desktops.",
  },
  {
    title: "Dark Mode First",
    desc: "Easier on the eyes, premium aesthetic as the native default.",
  },
  {
    title: "Custom Analytics",
    desc: "Track your growth without privacy-invasive scripts.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 grid md:grid-cols-2 gap-10 items-end">
          <div>
            <span className="text-[hsl(var(--primary))] font-body text-[10px] tracking-[0.3em] uppercase block mb-4">
              Capabilities
            </span>
            <h2 className="text-6xl font-display font-bold tracking-tighter uppercase italic leading-none">
              Features <br /> <span className="text-white/20">you'll love.</span>
            </h2>
          </div>
          <p className="text-white/40 font-body text-lg leading-relaxed max-w-sm ml-auto">
            Our technology stack is built for speed, conversion, and architectural beauty. No shortcuts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="p-10 border border-[hsl(var(--border))] hover:bg-[hsl(var(--primary))]/5 transition-colors duration-300 group"
            >
              <h3 className="text-white font-display font-bold text-xs uppercase tracking-widest mb-4 group-hover:text-[hsl(var(--primary))] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-white/40 font-body text-xs uppercase tracking-wider leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
