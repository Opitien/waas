"use client";

import React from "react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { triggerDemoModal } from "@/components/DemoModal";

export function Footer() {
  return (
    <footer className="bg-forest-800 text-white relative overflow-hidden">

      {/* 1. Large Pre-Footer CTA Banner */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-16">
        <div className="relative rounded-3xl bg-forest-900 border border-forest-700/60 p-8 sm:p-12 overflow-hidden shadow-2xl">

          {/* Subtle glow background */}
          <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-[20px] bg-emerald-500/10 blur-[100px] -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-[20px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium font-medium px-3 py-1 tracking-wider">
                Launch Fast
              </span>
              <h3 className="font-display text-2xl sm:text-5xl font-medium tracking-tight text-white leading-tight">
                If you are wrestling with WordPress or templates, you are bleeding time. Let's change that.
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
                Get a premium developer-engineered Next.js website, global Edge hosting, and unlimited updates under one predictable, tax-deductible monthly subscription.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => triggerDemoModal()}
                  className="btn-bounce flex items-center gap-2 rounded-[20px] bg-emerald-500 hover:bg-emerald-600 px-6 py-3 text-sm font-medium text-white shadow-md shadow-emerald-500/10 cursor-pointer border-0"
                >
                  Book a demo <ArrowRight className="h-4.5 w-4.5" />
                </button>
              </div>
            </div>

            {/* Right floating mock panel */}
            <div className="lg:col-span-5 hidden lg:block rounded-xl border border-forest-700/50 bg-forest-900/60 p-6 shadow-lg relative">
              <div className="flex items-center justify-between border-b border-forest-800 pb-3 mb-4">
                <span className="text-xs font-medium text-emerald-400 font-medium tracking-widest">WAAS Engine</span>
                <span className="text-[10px] text-slate-400 font-mono">edge-active</span>
              </div>
              <div className="space-y-3.5">
                {[
                  "Compiled Static HTML - Ready",
                  "Vercel Edge Network - Routed",
                  "SSL TLS 1.3 Certified - Enabled",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
                    <span className="font-mono text-xs">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <hr className="border-forest-700/40" />

      {/* 2. Main Footer Directory */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand Col */}
          <div className="md:col-span-4 space-y-6">
            <a href="/" className="flex items-center gap-2.5 group">
              <div className="relative flex items-center h-7 w-10">
                <div className="absolute left-0 h-6 w-6 rounded-[20px] bg-emerald-500 mix-blend-screen" />
                <div className="absolute right-0 h-6 w-6 rounded-[20px] bg-white/40 mix-blend-screen" />
              </div>
              <span className="font-display text-2xl font-medium tracking-tight text-white">
                waas<span className="text-emerald-400">.</span>
              </span>
            </a>
            <p className="text-slate-400 text-md leading-relaxed max-w-xs font-medium">
              Predictable, premium, and fully managed website subscriptions for modern high-growth SaaS, startups, and agencies.
            </p>
            <div className="flex items-center gap-3">
              {/* Custom SVG Social Icons to prevent lucide-react import errors */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="h-8.5 w-8.5 rounded-[20px] border border-forest-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-colors cursor-pointer"
                aria-label="Twitter"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="h-8.5 w-8.5 rounded-[20px] border border-forest-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-colors cursor-pointer"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="h-8.5 w-8.5 rounded-[20px] border border-forest-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-colors cursor-pointer"
                aria-label="GitHub"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Directories */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">

            {/* Product */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-emerald-400 font-medium">Product</h4>
              <ul className="space-y-3 text-md text-slate-400">
                <li><a href="#features" className="hover:text-emerald-400 transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing tiers</a></li>
                <li><a href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-emerald-400 font-medium">Resources</h4>
              <ul className="space-y-3 text-md text-slate-400">
                <li><a href="#blog" className="hover:text-emerald-400 transition-colors">Dev blog</a></li>
                <li><a href="#changelog" className="hover:text-emerald-400 transition-colors">Changelog</a></li>
                <li><a href="#docs" className="hover:text-emerald-400 transition-colors">API & Docs</a></li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-emerald-400 font-medium">Support</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#help" className="hover:text-emerald-400 transition-colors">Help desk</a></li>
                <li><a href="#privacy" className="hover:text-emerald-400 transition-colors">Privacy policy</a></li>
                <li><a href="#terms" className="hover:text-emerald-400 transition-colors">Terms of use</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-emerald-400 font-medium">Contact</h4>
              <ul className="space-y-3 text-md text-slate-400">
                <li>
                  <a href="mailto:hello@waas.xyz" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                    <Mail className="h-4.5 w-4.5" /> hello@waas.xyz
                  </a>
                </li>
                <li className="text-sm text-slate-500 font-medium font-medium tracking-wider">
                  Based Worldwide
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-forest-700/40 flex flex-wrap justify-between items-center gap-4 text-md text-slate-500">
          <p>Copyright © {new Date().getFullYear()} WAAS. All rights reserved.</p>
          <p>
            Designed & built by{" "}
            <a
              href="https://thebigdev.co"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 underline decoration-emerald-500/35 hover:decoration-emerald-400 transition-colors font-medium"
            >
              The Big Dev
            </a>
          </p>
        </div>

      </div>

    </footer>
  );
}
