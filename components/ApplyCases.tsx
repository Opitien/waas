"use client";

import React from "react";
import { motion } from "framer-motion";

const cases = [
  {
    type: "The Solo Founder",
    description: "You need a professional presence today without burning through your seed capital.",
    icon: "01",
  },
  {
    type: "The Creative Agency",
    description: "Focus on your clients. Let us handle your own portfolio's technical debt and updates.",
    icon: "02",
  },
  {
    type: "The Modern Professional",
    description: "Doctors, lawyers, or consultants who need a high-end digital office that just works.",
    icon: "03",
  },
];

export const ApplyCases = () => {
  return (
    <section id="for-who" className="py-32 px-6 bg-[hsl(var(--card))]/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[hsl(var(--primary))] font-body text-[10px] tracking-[0.3em] uppercase block mb-4">
            Target Audience
          </span>
          <h2 className="text-6xl font-display font-bold tracking-tighter uppercase italic">
            For <span className="text-[hsl(var(--primary))]">who?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, i) => (
            <motion.div
              key={item.type}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="relative p-12 border border-[hsl(var(--border))] rounded-sm flex flex-col items-center text-center overflow-hidden group"
            >
              {/* Background Accent */}
              <div className="absolute -top-10 -right-10 text-9xl font-display font-black text-white/[0.02] pointer-events-none group-hover:text-[hsl(var(--primary))]/5 transition-colors duration-700">
                {item.icon}
              </div>

              <div className="w-20 h-20 rounded-full border border-[hsl(var(--primary))]/20 flex items-center justify-center mb-8 relative z-10 bg-[hsl(var(--background))] group-hover:border-[hsl(var(--primary))] transition-colors duration-500">
                <span className="text-[hsl(var(--primary))] font-display font-bold text-xl">{item.icon}</span>
              </div>
              
              <h3 className="text-white font-display font-bold text-xl uppercase mb-4 relative z-10">
                {item.type}
              </h3>
              <p className="text-white/40 font-body text-sm leading-relaxed max-w-xs relative z-10">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
