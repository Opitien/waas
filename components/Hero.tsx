"use client";

import React, { useState } from "react";
import { ArrowDown, ArrowRight, CheckCircle2, Cloud, Layout, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { triggerDemoModal } from "@/components/DemoModal";

export function Hero() {
  // Live states for the interactive dashboard mockup
  const [productionMode, setProductionMode] = useState(true);
  const [gridOverlay, setGridOverlay] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section id="hero" className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-24 lg:pb-32">
      {/* Soft background grid gradient */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        {/* Top Badge Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1 pr-3 text-sm text-slate-600 shadow-sm"
        >
          <span className="rounded-full bg-emerald-500 px-2.5 py-0.5 font-bold text-white uppercase text-xs tracking-wide">
            New
          </span>
          <span className="font-semibold tracking-tight text-slate-700">Dedicated Design Team Included</span>
        </motion.div>

        {/* Massive Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl max-w-5xl mx-auto leading-[1.05]"
        >
          Websites Built, Managed, <br />
          and Updated for You <span className="text-emerald-500 font-bold">On Demand</span>.
        </motion.h1>

        {/* Descriptive Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-500 max-w-3xl mx-auto font-medium"
        >
          Stop hiring expensive agencies or wrestling with clunky template builders. Get a premium custom-built website, managed performance, and unlimited design updates under one simple subscription.
        </motion.p>

        {/* Dual Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => triggerDemoModal()}
            className="btn-bounce flex items-center gap-1.5 rounded-full bg-emerald-500 px-7 py-3 text-base font-bold text-white hover:bg-emerald-600 shadow-md shadow-emerald-500/10 cursor-pointer"
          >
            Book a Demo <ArrowRight className="h-4.5 w-4.5" />
          </button>
          <a
            href="#features"
            className="btn-bounce flex items-center gap-1.5 rounded-full bg-mint-100 px-7 py-3 text-base font-bold text-emerald-800 hover:bg-mint-200"
          >
            Explore WAAS <ArrowDown className="h-4.5 w-4.5 text-emerald-700 animate-bounce" />
          </a>
        </motion.div>

        {/* Interactive Dashboard Mockup Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="mt-16 sm:mt-20 mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-4 shadow-xl shadow-slate-100"
        >
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden text-left">
            
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/70 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-2 font-mono text-xs text-slate-400 select-none">waas-dashboard-v2.0.1</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 border border-emerald-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Live Sync
                </span>
              </div>
            </div>

            {/* Dashboard Workspace */}
            <div className="grid grid-cols-1 md:grid-cols-4 min-h-[420px]">
              
              {/* Left Navigation Sidebar */}
              <div className="border-r border-slate-100 bg-slate-50/30 p-4 space-y-1.5">
                <div className="px-2 py-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Site Manager
                </div>
                {[
                  { id: "overview", label: "Overview", icon: Layout },
                  { id: "tickets", label: "Updates Queue", icon: Sparkles },
                  { id: "speed", label: "Edge & Speed", icon: Zap },
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-semibold transition-all ${
                        activeTab === tab.id
                          ? "bg-emerald-50 text-emerald-700 shadow-sm border border-emerald-100/50"
                          : "text-slate-500 hover:bg-slate-100/80 hover:text-slate-900"
                      }`}
                    >
                      <Icon className={`h-4.5 w-4.5 ${activeTab === tab.id ? "text-emerald-600" : "text-slate-400"}`} />
                      {tab.label}
                    </button>
                  );
                })}

                <div className="pt-6 px-2 py-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Interactive Controls
                </div>
                {/* Live Controls */}
                <div className="p-3 space-y-3.5 bg-white rounded-lg border border-slate-100 shadow-2xs mt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-600">Production Mode</span>
                    <button
                      onClick={() => setProductionMode(!productionMode)}
                      className={`relative inline-flex h-5.5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                        productionMode ? "bg-emerald-500" : "bg-slate-200"
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-4.5 w-4.5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          productionMode ? "translate-x-4.5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-600">Toggle Grid Overlay</span>
                    <button
                      onClick={() => setGridOverlay(!gridOverlay)}
                      className={`relative inline-flex h-5.5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                        gridOverlay ? "bg-emerald-500" : "bg-slate-200"
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-4.5 w-4.5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          gridOverlay ? "translate-x-4.5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Main Content Workspace */}
              <div className="md:col-span-3 p-5 sm:p-6 bg-white relative">
                
                {/* Visual grid overlay toggle */}
                {gridOverlay && (
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98115_1px,transparent_1px),linear-gradient(to_bottom,#10b98115_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none z-20" />
                )}

                {activeTab === "overview" && (
                  <div className="space-y-6">
                    {/* Header metrics */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-3.5">
                        <span className="block text-xs font-bold text-slate-400 uppercase">Page Vitals</span>
                        <span className="mt-1 block text-xl font-extrabold text-slate-900">100/100</span>
                        <span className="text-xs text-emerald-500 font-semibold flex items-center gap-0.5">
                          <Zap className="h-3 w-3 fill-emerald-500" /> Optimized
                        </span>
                      </div>
                      <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-3.5">
                        <span className="block text-xs font-bold text-slate-400 uppercase">Active Pages</span>
                        <span className="mt-1 block text-xl font-extrabold text-slate-900">14 Pages</span>
                        <span className="text-xs text-slate-500 font-semibold">Live on edge</span>
                      </div>
                      <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-3.5">
                        <span className="block text-xs font-bold text-slate-400 uppercase">CDN Status</span>
                        <span className="mt-1 block text-xl font-extrabold text-slate-900 flex items-center gap-1">
                          <CheckCircle2 className="h-5 w-5 text-emerald-500" /> Active
                        </span>
                        <span className="text-xs text-emerald-500 font-semibold">Global CDN</span>
                      </div>
                    </div>

                    {/* Interactive Live Web Preview Frame */}
                    <div className="rounded-xl border border-slate-200 shadow-xs overflow-hidden bg-white">
                      <div className="bg-slate-50 border-b border-slate-100 px-4 py-2 flex items-center justify-between">
                        <span className="text-xs font-mono text-slate-500">Live Landing Page Preview</span>
                        <div className="flex items-center gap-1.5">
                          <span className={`h-2.5 w-2.5 rounded-full ${productionMode ? "bg-emerald-500" : "bg-amber-400 animate-pulse"}`} />
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-tight">
                            {productionMode ? "Production" : "Staging (Draft)"}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 bg-slate-50/20 text-center">
                        <div className="max-w-md mx-auto space-y-3.5 py-4">
                          <div className="h-3.5 w-24 bg-emerald-100 rounded-full mx-auto animate-pulse" />
                          <h4 className="font-display font-bold text-base text-slate-800 leading-tight">
                            {productionMode 
                              ? "Supercharge your business with premium web infrastructure." 
                              : "Draft: Rebranding layout test with new summer color accents."}
                          </h4>
                          <p className="text-xs text-slate-400">
                            Custom design updates deployed automatically by your WAAS engineering team.
                          </p>
                          <div className="pt-2 flex justify-center gap-2">
                            <button
                              onClick={() => triggerDemoModal()}
                              className="h-7 px-4 bg-emerald-500 rounded-full flex items-center justify-center text-xs font-bold text-white cursor-pointer hover:bg-emerald-600 transition-colors border-0"
                            >
                              Get Started
                            </button>
                            <span className="h-7 px-4 bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center text-xs font-bold text-slate-600 cursor-pointer hover:bg-slate-200 transition-colors">
                              Learn More
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "tickets" && (
                  <div className="space-y-4">
                    <h3 className="font-display font-bold text-base text-slate-900">Active Design & Copy Requests</h3>
                    <p className="text-sm text-slate-500">
                      Submit updates directly through Slack or email. Our engineers build and deploy them in hours.
                    </p>
                    
                    <div className="space-y-2.5">
                      <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-3.5 flex justify-between items-center">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-slate-800">Add testimonial slider to homepage</span>
                            <span className="rounded-md bg-amber-50 border border-amber-100 text-[10px] font-bold text-amber-700 px-1.5 py-0.5">
                              In Progress
                            </span>
                          </div>
                          <p className="text-xs text-slate-500">Requested 2 hours ago via Slack integrations</p>
                        </div>
                        <div className="w-20 bg-slate-100 rounded-full h-1.5">
                          <div className="bg-amber-400 h-1.5 rounded-full w-2/3 animate-pulse" />
                        </div>
                      </div>

                      <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-3.5 flex justify-between items-center">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-slate-800">Build new Pricing Plan card visual updates</span>
                            <span className="rounded-md bg-emerald-50 border border-emerald-100 text-[10px] font-bold text-emerald-700 px-1.5 py-0.5">
                              Completed
                            </span>
                          </div>
                          <p className="text-xs text-slate-500">Completed & deployed 4 hours ago</p>
                        </div>
                        <CheckCircle2 className="h-5.5 w-5.5 text-emerald-500" />
                      </div>

                      <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-3.5 flex justify-between items-center">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-slate-800">Integrate Stripe subscriptions checkout</span>
                            <span className="rounded-md bg-emerald-50 border border-emerald-100 text-[10px] font-bold text-emerald-700 px-1.5 py-0.5">
                              Completed
                            </span>
                          </div>
                          <p className="text-xs text-slate-500">Completed & deployed yesterday</p>
                        </div>
                        <CheckCircle2 className="h-5.5 w-5.5 text-emerald-500" />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "speed" && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-display font-bold text-base text-slate-900">Global Performance Monitoring</h3>
                        <p className="text-sm text-slate-500">Automatically optimized for lightning speed at the edge.</p>
                      </div>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-full">
                        Edge Network Connected
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-xl border border-slate-100 bg-slate-50/30 p-4 space-y-1">
                        <span className="text-xs font-bold text-slate-400 uppercase">Average Latency</span>
                        <div className="text-2xl font-black text-slate-800">14ms</div>
                        <div className="h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
                          <div className="bg-emerald-500 h-full w-[12%]" />
                        </div>
                        <span className="text-xs text-slate-400 block pt-1">Lower is better</span>
                      </div>
                      <div className="rounded-xl border border-slate-100 bg-slate-50/30 p-4 space-y-1">
                        <span className="text-xs font-bold text-slate-400 uppercase">Lighthouse Core Web Vitals</span>
                        <div className="text-2xl font-black text-emerald-600">100%</div>
                        <div className="h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
                          <div className="bg-emerald-500 h-full w-full" />
                        </div>
                        <span className="text-xs text-slate-400 block pt-1">Fully optimized</span>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-150 p-4 bg-slate-50/50 flex gap-3.5 items-center">
                      <Cloud className="h-6 w-6 text-emerald-500 shrink-0" />
                      <div className="text-xs sm:text-sm text-slate-600 leading-normal font-medium">
                        Every WAAS site is served from a global multi-cloud edge CDN, meaning instant loading speeds, server-side caching, and flawless reliability for your customers worldwide.
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
