"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Is there really no upfront cost?",
    a: "Correct. We believe in providing value first. You pay a setup fee to cover initial configuration, and then simply subscribe to our service.",
  },
  {
    q: "Can I cancel my subscription any time?",
    a: "Yes, you can cancel at any time. However, since it is a subscription service, the website hosted on our infrastructure will be taken down upon cancellation.",
  },
  {
    q: "Do I own the domain name?",
    a: "Yes, you own your domain. We manage the technical configuration for you, but the asset belongs to your business.",
  },
  {
    q: "What if I need custom features later?",
    a: "Our system is built on Next.js, making it highly extensible. We can roll out custom updates to your specific site as your business needs evolve.",
  },
  {
    q: "Who handles the content updates?",
    a: "We provide you with a light-weight CMS or you can simply send us your updates, and we'll handle the implementation within 24-48 hours.",
  },
];

export const FAQ = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[hsl(var(--primary))] font-body text-[10px] tracking-[0.3em] uppercase block mb-4">
            Curiosities
          </span>
          <h2 className="text-6xl font-display font-bold tracking-tighter uppercase italic leading-none mb-4">
            What you <span className="text-[hsl(var(--primary))]">actually</span> get.
          </h2>
          <p className="text-white/40 font-body text-sm uppercase tracking-widest">(FAQ)</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-[hsl(var(--border))] rounded-sm overflow-hidden">
              <button
                onClick={() => setActive(active === i ? null : i)}
                className="w-full p-8 flex justify-between items-center text-left bg-[hsl(var(--card))] hover:bg-[hsl(var(--muted))]/20 transition-colors duration-300"
              >
                <span className="text-white font-display font-bold text-xs uppercase tracking-widest">{faq.q}</span>
                <span className={`text-[hsl(var(--primary))] transition-transform duration-300 ${active === i ? 'rotate-45' : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>
              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-8 pt-0 bg-[hsl(var(--card))] text-white/40 font-body text-sm leading-relaxed border-t border-[hsl(var(--border))/50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
