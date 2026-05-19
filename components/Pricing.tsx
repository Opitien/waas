"use client";

import React, { useState } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { triggerDemoModal } from "@/components/DemoModal";

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly");

  const plans = [
    {
      name: "Starter",
      desc: "Perfect for single landing pages and simple business showcases.",
      price: {
        monthly: 150,
        annually: 120,
      },
      features: [
        "1 Managed Landing Page",
        "Standard design & copy updates",
        "Core SEO & meta-tags setup",
        "Next.js static edge hosting",
        "Email support (24hr response time)",
      ],
      popular: false,
      dark: false,
    },
    {
      name: "Growth",
      desc: "For startups needing constant marketing updates, blogs, and lead forms.",
      price: {
        monthly: 390,
        annually: 310,
      },
      features: [
        "Unlimited Managed Pages",
        "Unlimited design & copy updates",
        "Slack & Discord direct workspace integrations",
        "Integrated custom forms & CRM routing",
        "100/100 Lighthouse speed guarantee",
        "Priority support (2hr response time)",
      ],
      popular: true,
      dark: false,
    },
    {
      name: "Enterprise",
      desc: "Complete custom software web applications, e-commerce, and advanced dashboards.",
      price: {
        monthly: 990,
        annually: 790,
      },
      features: [
        "Full-scale custom Next.js web application",
        "Secure E-Commerce & Stripe pay-walls",
        "Custom database & secure APIs integration",
        "Dedicated Lead UI Designer & Engineer",
        "Weekly strategic visual reviews",
        "24/7 Dedicated developer emergency hotline",
      ],
      popular: false,
      dark: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-slate-50/50 overflow-hidden scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto mb-12"
        >
          <span className="rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs uppercase tracking-wide px-3 py-1 border border-emerald-100">
            Simple Subscriptions
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl leading-tight">
            Flexible web infrastructure, <br />
            billed on a simple subscription.
          </h2>
          <p className="mt-4 text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
            Choose a tier that fits your stage. Pause or cancel anytime. Get high-end web dev results without high-end agency prices.
          </p>
        </motion.div>

        {/* Interactive Billing Cycle Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="flex justify-center items-center gap-3.5 mb-16"
        >
          <span className={`text-sm font-semibold ${billingCycle === "monthly" ? "text-slate-900" : "text-slate-400"}`}>
            Billed Monthly
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === "monthly" ? "annually" : "monthly")}
            className="relative h-7 w-12 rounded-full bg-slate-200 border border-slate-300 p-0.5 transition-colors focus:outline-none cursor-pointer"
          >
            <div
              className={`h-5.5 w-5.5 rounded-full bg-emerald-500 shadow-sm transition-transform duration-200 ${
                billingCycle === "annually" ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
          <span className={`text-sm font-semibold flex items-center gap-1.5 ${billingCycle === "annually" ? "text-slate-900" : "text-slate-400"}`}>
            Billed Annually
            <span className="rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold px-2 py-0.5 tracking-wide uppercase">
              Save 20%
            </span>
          </span>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
              className={`rounded-2xl border flex flex-col justify-between p-8 text-left relative transition-all ${
                p.dark
                  ? "bg-slate-950 border-slate-900 text-white shadow-xl shadow-slate-950/20"
                  : "bg-white border-slate-200 text-slate-950 shadow-sm hover:shadow-md"
              }`}
            >
              
              {/* Recommended Tag */}
              {p.popular && (
                <span className="absolute -top-3.5 right-6 rounded-full bg-emerald-500 text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-1 flex items-center gap-1">
                  <Sparkles className="h-3 w-3 fill-white" /> Recommended
                </span>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className={`text-xl font-black tracking-tight ${p.dark ? "text-white" : "text-slate-900"}`}>
                    {p.name}
                  </h3>
                  <p className={`mt-2.5 text-sm leading-relaxed ${p.dark ? "text-slate-400" : "text-slate-500"}`}>
                    {p.desc}
                  </p>
                </div>

                {/* Price Display */}
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-5xl font-extrabold tracking-tight ${p.dark ? "text-emerald-400" : "text-slate-950"}`}>
                      ${billingCycle === "monthly" ? p.price.monthly : p.price.annually}
                    </span>
                    <span className={`text-sm ${p.dark ? "text-slate-400" : "text-slate-500"}`}>/ month</span>
                  </div>
                  <span className={`text-xs block mt-2 font-semibold ${p.dark ? "text-slate-500" : "text-slate-400"}`}>
                    {billingCycle === "annually" ? `Billed annually ($${p.price.annually * 12}/yr)` : "Pause or cancel anytime"}
                  </span>
                </div>

                <hr className={`border-1 ${p.dark ? "border-slate-800" : "border-slate-100"}`} />

                {/* Feature List */}
                <ul className="space-y-4">
                  {p.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm sm:text-base">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                          p.dark
                            ? "bg-slate-900 border-slate-800 text-emerald-400"
                            : "bg-emerald-50 border-emerald-100 text-emerald-600"
                        }`}
                      >
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className={p.dark ? "text-slate-300" : "text-slate-600 font-medium"}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4">
                <button
                  onClick={() => triggerDemoModal(p.name)}
                  className={`btn-bounce w-full rounded-full py-3.5 text-sm font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    p.dark
                      ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                      : p.popular
                      ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                      : "bg-white border border-slate-200 text-slate-850 hover:bg-slate-50"
                  }`}
                >
                  Get Started with {p.name} <ArrowRight className="h-4.5 w-4.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
