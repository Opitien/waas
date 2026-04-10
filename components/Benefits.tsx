"use client";

import React from "react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Zero Upfront Cost",
    desc: "Build your dream website without the massive initial investment. Pay a monthly subscription instead.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    title: "Lifetime Maintenance",
    desc: "Never worry about security patches, hosting issues, or broken links. We handle everything for you.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z" />
      </svg>
    ),
  },
  {
    title: "Infinite Scalability",
    desc: "Start small and grow. Add custom features, e-commerce, or complex systems as your business expands.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

export const Benefits = () => {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-[hsl(var(--primary))] font-body text-[10px] tracking-[0.3em] uppercase block mb-4">
            Advantages
          </span>
          <h2 className="text-6xl font-display font-bold tracking-tighter uppercase italic">
            What you <br /> <span className="text-white/20">actually get.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="group p-8 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-sm hover:border-[hsl(var(--primary))]/30 transition-colors duration-500"
            >
              <div className="w-12 h-12 bg-[hsl(var(--primary))]/10 rounded-sm flex items-center justify-center text-[hsl(var(--primary))] mb-8 group-hover:scale-110 transition-transform duration-500">
                {benefit.icon}
              </div>
              <h3 className="text-white font-display font-bold text-lg uppercase tracking-wider mb-4">
                {benefit.title}
              </h3>
              <p className="text-white/40 font-body text-sm leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
