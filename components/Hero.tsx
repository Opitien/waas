"use client";

import React from "react";
import { motion } from "framer-motion";
import { FillUpButton } from "./FillUpButton";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-40 pb-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
        <div className="absolute top-[-10%] left-1/4 w-[50%] h-[60%] bg-[hsl(var(--primary))]/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-1/4 w-[40%] h-[50%] bg-[hsl(var(--accent))]/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[hsl(var(--primary))]/20 bg-[hsl(var(--primary))]/5 mb-8">
            <div className="w-1 h-1 rounded-full bg-[hsl(var(--primary))] animate-ping" />
            <span className="text-[hsl(var(--primary))] font-mono text-[10px] uppercase tracking-[0.2em]">Next-Gen Web OS</span>
          </div>

          <h1 className="text-8xl font-display font-bold mb-8 tracking-tighter leading-[0.85] uppercase italic">
            Speed is the new <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[hsl(var(--primary))] to-[hsl(var(--accent))]">
              unfair advantage.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-white/60 font-body text-xl leading-relaxed mb-12">
            Stop building websites. Start deploying conversion engines. We build, manage, and evolve your entire digital presence for a flat monthly fee.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24">
            <FillUpButton className="w-full sm:w-auto px-16 py-6 text-sm uppercase tracking-[0.4em] font-bold rounded-sm shadow-[0_20px_50px_rgba(251,78,26,0.2)]">
              Get Started
            </FillUpButton>
            <button className="px-8 py-3 text-white/40 hover:text-white transition-colors text-[10px] uppercase tracking-widest border border-white/5 bg-white/5 rounded-sm">
              View Case Studies
            </button>
          </div>
        </motion.div>

        {/* Hero Image Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          className="relative mt-20"
        >
          <div className="absolute -inset-1 bg-gradient-to-b from-[hsl(var(--primary))]/20 to-transparent blur-2xl rounded-2xl -z-10" />
          
          <div className="relative glass-card rounded-xl overflow-hidden border-white/10 shadow-2xl">
            {/* Window Header */}
            <div className="h-10 bg-white/5 flex items-center px-4 gap-2 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <div className="mx-auto bg-white/5 px-4 py-1 rounded text-[9px] text-white/30 font-mono">
                waas-engine.v1.0.4.sh
              </div>
            </div>
            
            <div className="aspect-video relative group">
              <img 
                src="/hero-dashboard.png" 
                alt="WaaS Dashboard UI"
                className="w-full h-full object-cover opacity-90 group-hover:scale-[1.02] transition-transform duration-[10s] ease-linear"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-transparent to-transparent opacity-60" />
              
              {/* Overlay Interactive Elements */}
              <div className="absolute bottom-8 left-8 p-6 glass-card rounded-lg border-[hsl(var(--primary))]/30 max-w-[240px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded bg-[hsl(var(--primary))]/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] shadow-[0_0_10px_hsl(var(--primary))]" />
                  </div>
                  <span className="text-[10px] font-mono text-white/80 uppercase">Real-time Optimization</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 2, delay: 1 }}
                    className="h-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))]" 
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
