"use client";

import React from "react";
import { motion } from "framer-motion";

export const LurkingConversion = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[200]">
      <motion.button
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 1, ease: [0.19, 1, 0.22, 1] }}
        whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsla(270, 100%, 64%, 0.4)" }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 bg-[hsl(var(--primary))] text-white font-display font-black text-[10px] tracking-[0.2em] uppercase rounded-full shadow-2xl flex items-center gap-3 group border border-white/20"
      >
        Initialize Growth
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="group-hover:translate-x-1 transition-transform"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </motion.button>
    </div>
  );
};
