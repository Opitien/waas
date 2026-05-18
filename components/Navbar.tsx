"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { triggerDemoModal } from "@/components/DemoModal";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sectionIds = ["hero", "solutions", "features", "pricing", "faq"];
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
              // Sync URL hash dynamically without scroll jump
              const newHash = id === "hero" ? window.location.pathname : `#${id}`;
              window.history.replaceState(null, "", newHash);
            }
          });
        },
        {
          rootMargin: "-40% 0px -50% 0px",
          threshold: 0,
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-22 items-center justify-between">
          {/* Left: Brand Logo */}
          <div className="flex items-center gap-10">
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center h-9 w-12">
                <div className="absolute left-0 h-8 w-8 rounded-full bg-emerald-500/90 mix-blend-multiply transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute right-0 h-8 w-8 rounded-full bg-forest-800/90 mix-blend-multiply transition-transform duration-300 group-hover:-translate-x-1" />
              </div>
              <span className="font-display text-2xl font-black tracking-tight text-slate-900">
                waas<span className="text-emerald-500">.</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              <div className="relative group">
                <button
                  onClick={(e) => scrollToSection(e, "solutions")}
                  className={`flex items-center gap-1.5 text-[15px] transition-colors py-2 cursor-pointer border-0 bg-transparent ${
                    activeSection === "solutions"
                      ? "text-emerald-600 font-extrabold animate-pulse"
                      : "font-bold text-slate-600 hover:text-slate-950"
                  }`}
                >
                  Solutions <ChevronDown className="h-4.5 w-4.5 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                {/* Simple dropdown overlay */}
                <div className="absolute left-0 top-full hidden group-hover:block w-64 rounded-xl border border-slate-100 bg-white p-3 shadow-lg transition-all">
                  <a
                    href="#solutions"
                    onClick={(e) => scrollToSection(e, "solutions")}
                    className="block rounded-lg p-2 hover:bg-slate-50"
                  >
                    <p className="text-xs font-semibold text-slate-900">Managed Landing Pages</p>
                    <p className="text-[11px] text-slate-500">High-converting pages managed for you.</p>
                  </a>
                  <a
                    href="#solutions"
                    onClick={(e) => scrollToSection(e, "solutions")}
                    className="block rounded-lg p-2 hover:bg-slate-50 mt-1"
                  >
                    <p className="text-xs font-semibold text-slate-900">E-Commerce & Portals</p>
                    <p className="text-[11px] text-slate-500">Full-scale online stores & user portals.</p>
                  </a>
                </div>
              </div>

              <div className="relative group">
                <button
                  onClick={(e) => scrollToSection(e, "features")}
                  className={`flex items-center gap-1.5 text-[15px] transition-colors py-2 cursor-pointer border-0 bg-transparent ${
                    activeSection === "features"
                      ? "text-emerald-600 font-extrabold animate-pulse"
                      : "font-bold text-slate-600 hover:text-slate-950"
                  }`}
                >
                  Features <ChevronDown className="h-4.5 w-4.5 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute left-0 top-full hidden group-hover:block w-64 rounded-xl border border-slate-100 bg-white p-3 shadow-lg">
                  <a
                    href="#features"
                    onClick={(e) => scrollToSection(e, "features")}
                    className="block rounded-lg p-2 hover:bg-slate-50"
                  >
                    <p className="text-xs font-semibold text-slate-900">Design & Copy Engine</p>
                    <p className="text-[11px] text-slate-500">Professional layout & content curation.</p>
                  </a>
                  <a
                    href="#features"
                    onClick={(e) => scrollToSection(e, "features")}
                    className="block rounded-lg p-2 hover:bg-slate-50 mt-1"
                  >
                    <p className="text-xs font-semibold text-slate-900">100/100 Speed Optimization</p>
                    <p className="text-[11px] text-slate-500">Unmatched loading speed & core web vitals.</p>
                  </a>
                </div>
              </div>

              <a
                href="#pricing"
                onClick={(e) => scrollToSection(e, "pricing")}
                className={`text-[15px] transition-colors ${
                  activeSection === "pricing"
                    ? "text-emerald-600 font-extrabold"
                    : "font-bold text-slate-600 hover:text-slate-950"
                }`}
              >
                Pricing
              </a>
              <a
                href="#faq"
                onClick={(e) => scrollToSection(e, "faq")}
                className={`text-[15px] transition-colors ${
                  activeSection === "faq"
                    ? "text-emerald-600 font-extrabold"
                    : "font-bold text-slate-600 hover:text-slate-950"
                }`}
              >
                FAQ
              </a>
            </nav>
          </div>

          {/* Right: Actions */}
          <div className="hidden md:flex items-center gap-5">
            <a href="#login" className="text-[15px] font-bold text-slate-600 hover:text-slate-950 transition-colors">
              Login
            </a>
            <button
              onClick={() => triggerDemoModal()}
              className="btn-bounce flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-[15px] font-black text-white hover:bg-emerald-600 shadow-md shadow-emerald-500/10 cursor-pointer border-0"
            >
              Book a demo <ArrowRight className="h-4.5 w-4.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-100 bg-white px-6 py-4"
          >
            <div className="space-y-4">
              <a
                href="#solutions"
                onClick={(e) => {
                  setIsOpen(false);
                  scrollToSection(e, "solutions");
                }}
                className="block text-base font-semibold text-slate-900 hover:text-emerald-500"
              >
                Solutions
              </a>
              <a
                href="#features"
                onClick={(e) => {
                  setIsOpen(false);
                  scrollToSection(e, "features");
                }}
                className="block text-base font-semibold text-slate-900 hover:text-emerald-500"
              >
                Features
              </a>
              <a
                href="#pricing"
                onClick={(e) => {
                  setIsOpen(false);
                  scrollToSection(e, "pricing");
                }}
                className="block text-base font-semibold text-slate-900 hover:text-emerald-500"
              >
                Pricing
              </a>
              <a
                href="#faq"
                onClick={(e) => {
                  setIsOpen(false);
                  scrollToSection(e, "faq");
                }}
                className="block text-base font-semibold text-slate-900 hover:text-emerald-500"
              >
                FAQ
              </a>
              <hr className="border-slate-100" />
              <div className="flex flex-col gap-3">
                <a
                  href="#login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Login
                </a>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    triggerDemoModal();
                  }}
                  className="flex items-center justify-center gap-1.5 rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-bold text-white hover:bg-emerald-600 cursor-pointer"
                >
                  Book a demo <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
