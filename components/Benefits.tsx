"use client";

import React from "react";
import { motion } from "framer-motion";

const benefits = [
  {
    tag: "CAPITAL",
    title: "Zero Upfront Cost",
    desc: "Launch without burning cash. We replace the $10k invoice with a manageable monthly subscription.",
    stat: "0.00 upfront",
  },
  {
    tag: "OPERATIONS",
    title: "Lifetime Support",
    desc: "Security, updates, and optimization are baked into the core. You focus on sales; we handle the stack.",
    stat: "24/7 Monitoring",
  },
  {
    tag: "ENGINEERING",
    title: "Infinite Scale",
    desc: "Built on Next.js 16 and Vercel Edge. Your site handles 10 users or 10 million with the same latency.",
    stat: "Global Edge",
  },
];

export const Benefits = () => {
  return (
    <section id="services" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div className="max-w-xl">
            <span className="font-mono text-[10px] text-[hsl(var(--primary))] uppercase tracking-[0.3em] block mb-4">
              [ THE CORE ADVANTAGE ]
            </span>
            <h2 className="text-6xl font-display font-bold tracking-tighter uppercase italic leading-[0.9]">
              What you <br /> <span className="text-white/20">actually get.</span>
            </h2>
          </div>
          <div className="h-px flex-1 bg-[hsl(var(--border))] hidden md:block mb-4" />
          <p className="font-mono text-[11px] text-white/30 uppercase tracking-widest max-w-[200px] leading-relaxed">
            Architected for conversion and structural integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-[hsl(var(--border))]">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group p-12 border-b md:border-b-0 md:border-r border-[hsl(var(--border))] last:border-0 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 font-mono text-[9px] text-white/10 group-hover:text-[hsl(var(--primary))]/30 transition-colors">
                {benefit.tag}
              </div>
              
              <div className="mb-12">
                 <div className="w-10 h-10 border border-[hsl(var(--primary))]/30 flex items-center justify-center text-[hsl(var(--primary))] group-hover:bg-[hsl(var(--primary))] group-hover:text-black transition-all duration-500">
                    <span className="font-mono text-[10px] font-bold">0{i+1}</span>
                 </div>
              </div>

              <h3 className="text-white font-display font-bold text-xl uppercase tracking-tight mb-4 text-balance">
                {benefit.title}
              </h3>
              <p className="text-white/40 font-body text-sm leading-relaxed mb-10">
                {benefit.desc}
              </p>

              <div className="pt-6 border-t border-[hsl(var(--border))] flex items-center justify-between">
                <span className="font-mono text-[9px] text-white/20 uppercase">Technical Metric</span>
                <span className="font-mono text-[10px] text-[hsl(var(--primary))]">{benefit.stat}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
