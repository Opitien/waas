"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LurkingConversion = () => {
  const [isIntentional, setIsIntentional] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled to high intent areas (Pricing starts around 1500px usually)
      if (window.scrollY > 1200) {
        setIsIntentional(true);
      } else {
        setIsIntentional(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-10 right-10 z-[200]">
      <AnimatePresence mode="wait">
        {!isIntentional ? (
          <motion.button
            key="standard"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="px-6 py-3 bg-[hsl(var(--card))] border border-[hsl(var(--border))] text-white font-body text-xs tracking-[0.1em] uppercase rounded-full shadow-2xl flex items-center gap-3 group overflow-hidden"
          >
            <div className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] animate-pulse" />
            Book a Demo
          </motion.button>
        ) : (
          <motion.button
            key="intentional"
            initial={{ opacity: 0, scale: 0, x: 100, y: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            layoutId="conversion-orb"
            className="w-24 h-24 rounded-full bg-[hsl(var(--primary))] text-black font-display font-bold text-[10px] uppercase leading-none text-center flex items-center justify-center p-4 float-pulse shadow-[0_0_50px_hsl(14_100%_56%_/_0.5)] border-4 border-black"
          >
            Start Now <br /> ⚡
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
