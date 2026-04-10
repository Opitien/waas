"use client";

import React from "react";
import { motion } from "framer-motion";
import { FillUpButton } from "./FillUpButton";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Basic Plan",
    setup: "35k",
    maintenance: "15k",
    pages: "3 - 5",
    features: [
      { name: "Domain Assistance", included: true },
      { name: "Monthly Maintenance", included: true },
      { name: "CMS Control", included: true },
      { name: "Full Ownership", included: false },
      { name: "Free Domain Tier", included: false },
    ],
    recommended: false,
  },
  {
    name: "Standard+ Plan",
    setup: "55k",
    maintenance: "20k",
    pages: "5 - 10",
    features: [
      { name: "Domain Assistance", included: true },
      { name: "Monthly Maintenance", included: true },
      { name: "CMS Control", included: true },
      { name: "Full Ownership", included: false },
      { name: "Free Domain Tier", included: true, detail: "Up to 15k" },
    ],
    recommended: true,
  },
  {
    name: "Premium+ Plan",
    setup: "75k",
    maintenance: "25k",
    pages: "10 - 20",
    features: [
      { name: "Domain Assistance", included: true },
      { name: "Monthly Maintenance", included: true },
      { name: "CMS Control", included: true },
      { name: "Full Ownership", included: true, detail: "After 1 year" },
      { name: "Free Domain Tier", included: true, detail: "Up to 20k" },
    ],
    recommended: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-6xl font-display font-bold mb-6 italic italic-primary">Simple Pricing</h2>
          <p className="text-white/50 font-body max-w-2xl mx-auto uppercase tracking-[0.1em] text-sm">
            Validate your idea and acquire first paying clients with low friction.
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
              className={`p-10 rounded-lg border ${
                plan.recommended
                  ? "border-[hsl(var(--primary))] bg-[hsl(var(--primary))]/5"
                  : "border-[hsl(var(--border))] bg-[hsl(var(--card))]"
              } transition-transform duration-500 hover:scale-[1.02] flex flex-col`}
            >
              {plan.recommended && (
                <div className="mb-6 self-start px-3 py-1 bg-[hsl(var(--primary))] text-black font-display font-bold text-[10px] uppercase tracking-[0.1em] rounded-sm">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-display font-bold">₦{plan.maintenance}</span>
                <span className="text-white/40 text-sm uppercase tracking-[0.1em]">/ Month</span>
              </div>
              <p className="text-white/40 text-xs uppercase tracking-[0.1em] mb-10">
                Setup Fee: ₦{plan.setup} (One-time)
              </p>

              <div className="space-y-4 mb-12 flex-grow">
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-[hsl(var(--primary))] font-bold tracking-tighter">{plan.pages}</span>
                  <span className="text-white/60">Professional Pages</span>
                </div>
                {plan.features.map((feature) => (
                  <div key={feature.name} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check size={16} className="text-[hsl(var(--primary))] mt-0.5" />
                    ) : (
                      <X size={16} className="text-white/20 mt-0.5" />
                    )}
                    <span className={`text-sm ${feature.included ? "text-white/80" : "text-white/30"}`}>
                      {feature.name} {feature.detail && <span className="text-[hsl(var(--primary))]/60 text-xs ml-1">({feature.detail})</span>}
                    </span>
                  </div>
                ))}
              </div>

              <FillUpButton className={plan.recommended ? "bg-white text-black" : ""}>
                Choose {plan.name}
              </FillUpButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
