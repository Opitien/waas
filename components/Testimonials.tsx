"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Studio Director",
    content: "The switch to WAAS saved us over $5k in upfront costs while giving us a site that looks like it cost $20k.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Independent Architect",
    content: "Professionalism at its peak. The monthly model makes sense for my cashflow, and the design is impeccable.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 px-6 bg-[hsl(var(--primary))]/5 border-y border-[hsl(var(--primary))]/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[hsl(var(--primary))] font-body text-[10px] tracking-[0.3em] uppercase block mb-4">
            Social Proof
          </span>
          <h2 className="text-6xl font-display font-bold tracking-tighter uppercase italic leading-none">
            Testimonials
          </h2>
        </div>

        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="p-10 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-sm relative group hover:border-[hsl(var(--primary))]/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
                <div className="flex-1">
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="hsl(var(--primary))">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-white text-3xl font-display font-medium mb-0 leading-tight">
                    "{t.content}"
                  </p>
                </div>

                <div className="flex items-center gap-4 border-l border-[hsl(var(--border))] pl-10 h-full min-w-[200px]">
                  <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))]/10 border border-[hsl(var(--primary))]/20 flex items-center justify-center text-[hsl(var(--primary))] font-display font-bold text-xs">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-white font-display font-bold text-xs uppercase tracking-widest">{t.name}</h4>
                    <p className="text-white/40 font-body text-[10px] uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
