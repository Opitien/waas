"use client";

import React from "react";
import { motion } from "framer-motion";
import { FillUpButton } from "./FillUpButton";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-20 overflow-hidden mesh-bg">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] font-mono text-[10px] uppercase tracking-tighter border border-[hsl(var(--primary))]/20 rounded-full">
              Subscription Web Engine
            </span>
            <div className="h-px w-8 bg-[hsl(var(--border))]" />
            <span className="text-[hsl(var(--accent))] font-mono text-[10px] uppercase tracking-widest bg-[hsl(var(--accent))]/5 px-2">
              Futuristic SaaS
            </span>
          </div>

          <h1 className="text-8xl font-display font-bold mb-8 tracking-tighter leading-[0.9] text-balance">
            Own the result <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))]">
              not the debt.
            </span>
          </h1>

          <p className="max-w-md text-white/50 font-body text-lg leading-relaxed mb-12">
            Why pay $10k for a one-time site that goes obsolete in a year? Subscribe to a world-class digital engine that evolves with your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <FillUpButton className="w-full sm:w-auto px-12 py-5 text-sm uppercase tracking-[0.3em] font-bold rounded-sm border-[hsl(var(--primary))]/30">
              Start Subscribing
            </FillUpButton>
            <div className="flex flex-col items-start gap-1">
              <span className="text-white/40 font-mono text-[9px] uppercase tracking-[0.1em]">Cloud Performance</span>
              <span className="text-[hsl(var(--accent))] font-display text-lg">Powered by Next.js</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          className="relative group"
        >
          <div className="absolute -inset-10 bg-[hsl(var(--primary))]/5 blur-[120px] rounded-full" />
          
          <div className="relative glass-card rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border-white/5">
            {/* SaaS App Frame */}
            <div className="h-12 bg-black/20 flex items-center px-6 gap-2 border-b border-white/5">
               <div className="w-3 h-3 rounded-full bg-white/5" />
               <div className="w-3 h-3 rounded-full bg-white/5" />
               <div className="w-3 h-3 rounded-full bg-white/5" />
            </div>
            
            <div className="aspect-[4/3] bg-[hsl(var(--background))] p-1">
              <img 
                src="/hero_demo_dashboard_1775812767911.png" 
                alt="WAAS Dashboard"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[5s]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(var(--background))] via-transparent to-[hsl(var(--primary))]/5 pointer-events-none" />
            </div>
          </div>

          {/* Floating Value Card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -right-6 p-6 glass-card rounded-xl border-[hsl(var(--primary))]/20 shadow-2xl backdrop-blur-2xl"
          >
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[hsl(var(--primary))]/20 rounded-lg flex items-center justify-center text-[hsl(var(--primary))]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-[9px] text-white/40 uppercase">Recurring Savings</p>
                  <p className="font-display font-bold text-white text-base">-$4k / Year</p>
                </div>
             </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
