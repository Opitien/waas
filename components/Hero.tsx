"use client";

import React from "react";
import { motion } from "framer-motion";
import { FillUpButton } from "./FillUpButton";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-20 overflow-hidden">
      {/* Background Text Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <h2 className="text-[20vw] font-display font-black text-white/[0.02] leading-none uppercase">
          Digital
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className="relative z-10 text-center max-w-5xl mx-auto"
      >
        <div className="inline-block px-3 py-1 mb-8 border border-[hsl(var(--primary))]/30 bg-[hsl(var(--primary))]/5 rounded-full">
          <span className="text-[hsl(var(--primary))] font-body text-[10px] tracking-[0.2em] uppercase">
            Website As A Subscription
          </span>
        </div>

        <h1 className="text-8xl font-display font-bold mb-8 tracking-tighter leading-[0.95]">
          Stop overpaying <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[#ff8c6b]">
            for bad websites.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-white/50 font-body text-lg md:text-xl leading-relaxed mb-12">
          Launch a world-class digital presence today for the price of a coffee. No millions upfront. No technical debt. Just growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <FillUpButton className="w-full sm:w-auto px-12 py-5 text-sm uppercase tracking-[0.3em]">
            Get Started Now
          </FillUpButton>
          <div className="flex flex-col items-start gap-1">
            <span className="text-white/40 text-[10px] uppercase tracking-[0.1em]">Starting at</span>
            <span className="text-white font-display text-lg">₦15,000 / mo</span>
          </div>
        </div>
      </motion.div>

      {/* Hero Asset Placeholder/Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
        className="mt-20 w-full max-w-6xl aspect-[16/9] bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg shadow-2xl overflow-hidden relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(var(--primary))]/10 to-transparent pointer-events-none z-10" />
        <img 
          src="/hero_demo_dashboard_1775812767911.png" 
          alt="Product Demo"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="px-6 py-3 bg-black/80 backdrop-blur-md border border-white/10 text-white font-display text-[11px] tracking-[0.4em] uppercase">
              The Future of Web Ownership
           </div>
        </div>
      </motion.div>
    </section>
  );
};
