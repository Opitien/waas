"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function DemoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [planName, setPlanName] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent;
      const selectedPlan = customEvent.detail?.plan;
      setPlanName(selectedPlan);
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    };

    window.addEventListener("open-demo-modal", handleOpen);
    return () => {
      window.removeEventListener("open-demo-modal", handleOpen);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  // Construct iframe URL with optional dynamic plan tracking if supported
  const baseFormUrl = "https://tally.so/embed/ODbr8Y?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";
  const formUrl = planName ? `${baseFormUrl}&plan=${encodeURIComponent(planName)}` : baseFormUrl;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-99999 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
            className="relative w-full max-w-2xl h-[85vh] sm:h-[80vh] bg-white rounded-3xl border border-slate-200/60 shadow-2xl flex flex-col z-10 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 shrink-0">
              <div>
                <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900">
                  {planName ? `Get Started with ${planName}` : "Book a Live Demo"}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-400 mt-0.5">
                  Complete the quick form below to sync with your WAAS team.
                </p>
              </div>
              <button
                onClick={handleClose}
                className="h-9 w-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-800 hover:bg-slate-50 transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Iframe Body */}
            <div className="flex-1 w-full bg-slate-50/50 p-2 overflow-hidden">
              <iframe
                src={formUrl}
                width="100%"
                height="100%"
                title={planName ? `WAAS Subscription - ${planName}` : "WAAS Booking"}
                className="w-full h-full border-0 rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// Global utility helper to trigger the modal from any button in the app
export function triggerDemoModal(plan?: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-demo-modal", { detail: { plan } }));
  }
}
