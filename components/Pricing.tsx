"use client";

import React from "react";
import { motion } from "framer-motion";
import { FillUpButton } from "./FillUpButton";

const plans = [
  {
    name: "01 / STARTUP",
    setup: "35k",
    maintenance: "15k",
    pages: "3 - 5",
    features: [
      "Global Edge Deployment",
      "Native CMS Integration",
      "Auto-Security Patches",
      "Unlimited Maintenance",
    ],
    recommended: false,
    color: "white",
  },
  {
    name: "02 / VENTURE",
    setup: "55k",
    maintenance: "20k",
    pages: "10 - 15",
    features: [
      "Global Edge Deployment",
      "Advanced SEO Structure",
      "Custom UI Integrations",
      "Priority Tech Support",
    ],
    recommended: true,
    color: "hsl(var(--primary))",
  },
  {
    name: "03 / ENTERPRISE",
    setup: "75k",
    maintenance: "25k",
    pages: "UNLIMITED",
    features: [
      "Full Product Lifecycle",
      "Enterprise Grade Security",
      "Dedicated Dev Stream",
      "IP Buyout Option (12mo)",
    ],
    recommended: false,
    color: "hsl(var(--accent))",
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-32">
          <span className="font-mono text-[10px] text-[hsl(var(--accent))] uppercase tracking-[0.5em] block mb-6">
            [ FAIR EXCHANGE ]
          </span>
          <h2 className="text-6xl font-display font-bold mb-6 italic leading-none tracking-tighter">
            Sustainable Plans.
          </h2>
          <p className="text-white/40 font-mono text-[10px] max-w-sm uppercase tracking-[0.2em]">
            Zero interest in your upfront capital. <br /> Total interest in your recurring success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`p-10 rounded-2xl border ${
                plan.recommended
                  ? "border-[hsl(var(--primary))] bg-[hsl(var(--primary))]/5 shadow-[0_0_50px_hsla(270,100%,64%,0.1)]"
                  : "border-white/5 bg-white/[0.02]"
              } transition-all duration-500 relative flex flex-col group`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[hsl(var(--primary))] text-black font-display font-black text-[10px] uppercase tracking-widest rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-10">
                <h3 className="font-mono text-[10px] text-white/40 mb-4 tracking-widest leading-none">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-display font-bold text-white">₦{plan.maintenance}</span>
                  <span className="font-mono text-[10px] text-white/20 uppercase">/ MO</span>
                </div>
                <p className="font-mono text-[9px] text-white/30 uppercase mt-4 tracking-widest">+ ₦{plan.setup} setup</p>
              </div>

              <div className="space-y-4 flex-grow mb-16">
                <div className="flex items-center gap-3 py-3 border-b border-white/5 font-mono text-[10px] text-[hsl(var(--accent))]">
                   <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent))] shadow-[0_0_10px_hsl(var(--accent))]" />
                   <span className="uppercase tracking-widest">{plan.pages} Professional Pages</span>
                </div>
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-4 text-white/40 group-hover:text-white/80 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-[hsl(var(--primary))]">
                       <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="font-mono text-[10px] uppercase tracking-wider">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <FillUpButton 
                 className={`w-full ${plan.recommended ? "border-[hsl(var(--primary))] bg-[hsl(var(--primary))] text-black hover:text-white" : ""}`}
              >
                Launch with {plan.name.split('/')[1].trim()}
              </FillUpButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
