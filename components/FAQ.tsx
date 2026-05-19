"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What exactly is WAAS?",
      answer: "WAAS stands for Website As A Subscription. Instead of paying thousands of dollars upfront to design, develop, and host a website (and dealing with ongoing administrative headaches), you pay a simple, predictable monthly fee. We act as your dedicated web engineering studio, designing, coding, hosting, securing, and continuously updating your platform on demand.",
    },
    {
      question: "How fast do my design & content updates get completed?",
      answer: "Standard content updates (swapping text, uploading assets, adding blogs, editing pricing plans) are deployed to production within 2 to 24 hours of submission. Larger request sprints (e.g. building a custom Stripe checkout funnel or integrating a complete customer database) are broken into rapid dev cycles and typically go live in 2 to 5 days.",
    },
    {
      question: "Is premium edge hosting included?",
      answer: "Yes, fully managed hosting is 100% included in all subscription tiers. We deploy your site directly to a global multi-cloud Edge CDN. This guarantees 100/100 Lighthouse speed scores, built-in SSL certificates, DDoS firewalls, automatic nightly backups, and maximum uptime without extra hosting invoices.",
    },
    {
      question: "Can I pause, upgrade, or cancel my subscription?",
      answer: "Absolutely. There are no lock-ins, setup fees, or hidden termination clauses. You can scale your tier up during massive marketing campaigns, pause your subscription during slow development quarters, or cancel completely whenever you want. Any design assets and compiled website code completed during your active subscription are 100% yours to keep.",
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-mint-50 px-6 lg:px-8 border-y border-slate-100 overflow-hidden scroll-mt-24">
      <div className="mx-auto max-w-4xl">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wide px-3 py-1 border border-emerald-200">
            Common Questions
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-500 text-base sm:text-lg">
            Can't find what you are looking for? Ping us direct on Slack or drop a line to our support inbox.
          </p>
        </motion.div>

        {/* Accordions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="space-y-4"
        >
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/60 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left focus:outline-none cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-800 flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-emerald-500 shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-emerald-500" : ""
                    }`}
                  />
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-50/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
