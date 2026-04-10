"use client";

import React from "react";
import { motion } from "framer-motion";

const tools = [
  { name: "Vercel", icon: "▲" },
  { name: "Next.js", icon: "N" },
  { name: "Calendly", icon: "C" },
  { name: "Stripe", icon: "S" },
  { name: "Framer", icon: "F" },
  { name: "React", icon: "R" },
];

export const Integrations = () => {
  return (
    <section id="integrations" className="py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20">
        <div className="flex-1">
          <span className="text-[hsl(var(--primary))] font-body text-[10px] tracking-[0.3em] uppercase block mb-4">
            Ecosystem
          </span>
          <h2 className="text-6xl font-display font-bold tracking-tighter uppercase italic mb-8">
            Tools & <br /> <span className="text-white/20">Integrations.</span>
          </h2>
          <p className="text-white/40 font-body text-lg leading-relaxed max-w-md">
            We integrate with the world's most powerful platforms to ensure your business remains at the cutting edge of digital performance.
          </p>
        </div>

        <div className="flex-1 grid grid-cols-3 gap-4">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="aspect-square border border-[hsl(var(--border))] rounded-sm flex flex-col items-center justify-center gap-2 group hover:border-[hsl(var(--primary))]/30 transition-colors duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-[hsl(var(--primary))]/5 text-[hsl(var(--primary))] font-display font-black text-2xl group-hover:scale-110 transition-transform duration-300">
                {tool.icon}
              </div>
              <span className="text-[10px] text-white/20 font-body uppercase tracking-widest group-hover:text-white transition-colors duration-300">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
