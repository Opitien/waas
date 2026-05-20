"use client";

import React, { useState } from "react";
import { ArrowRight, Check, Eye, HelpCircle, Laptop, ShieldCheck, Sparkles, TrendingUp, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
  // Feature 1: Design Interactive State
  const [selectedTheme, setSelectedTheme] = useState("emerald");
  const [accentText, setAccentText] = useState("Premium Design");

  // Feature 2: Performance Interactive State
  const [lighthouseScore, setLighthouseScore] = useState(99);
  const [optimizing, setOptimizing] = useState(false);

  const runSpeedTest = () => {
    if (optimizing) return;
    setOptimizing(true);
    setLighthouseScore(92);
    setTimeout(() => {
      setLighthouseScore(95);
      setTimeout(() => {
        setLighthouseScore(100);
        setOptimizing(false);
      }, 800);
    }, 600);
  };

  return (
    <section id="features" className="space-y-28 py-20 lg:py-32 bg-white overflow-hidden scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="rounded-[20px] bg-emerald-50 text-emerald-700 font-medium text-xs uppercase tracking-wide px-3 py-1 border border-emerald-100">
            Platform Capabilities
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-slate-900 sm:text-5xl leading-tight">
            Everything your business needs to shine online.
          </h2>
          <p className="mt-4 text-slate-500 text-base sm:text-lg">
            We handle the design, code, server configurations, domain routing, speed optimization, and ongoing maintenance. You focus on growing your product.
          </p>
        </motion.div>

        {/* Alternate Feature 1: Design & Copy Engine */}
        <div id="solutions" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" /> Design & Copy Engine
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-medium tracking-tight text-slate-900 leading-tight">
              Control your brand aesthetics without writing a single line of code.
            </h3>
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
              Every detail is meticulously crafted by professional designers. Swap slogans, toggle dark mode layouts, and refresh visual brand systems directly from your integrated dashboard.
            </p>
            <ul className="space-y-3.5">
              {[
                "Professional layout & styling updates on-demand",
                "Meticulously structured SEO meta tags & headings",
                "High-impact premium font integrations & responsive grids",
              ].map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-600">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[20px] bg-emerald-50 text-emerald-600 border border-emerald-100">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <a
                href="#pricing"
                className="btn-bounce inline-flex items-center gap-1 text-sm font-medium text-slate-900 border border-slate-200 bg-white hover:bg-slate-50 rounded-[20px] px-5 py-2.5"
              >
                Explore Design Engine →
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-md"
          >
            <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs">

              {/* Mockup Editor Top Bar */}
              <div className="bg-slate-50 px-4 py-2.5 border-b border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400 uppercase">Live Style Curation</span>
                <span className="text-[10px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100/50">
                  Visual Mode
                </span>
              </div>

              {/* Mockup Editor Body */}
              <div className="p-5 grid grid-cols-1 md:grid-cols-12 gap-5">

                {/* Control Panel (left side of card) */}
                <div className="md:col-span-5 bg-slate-50/50 rounded-lg p-4 border border-slate-100 space-y-4">
                  <span className="block text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                    Editor Controls
                  </span>

                  {/* Style swatch toggle */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-600 block">Brand Palette</label>
                    <div className="flex gap-2">
                      {[
                        { id: "emerald", label: "Emerald", color: "bg-emerald-500" },
                        { id: "forest", label: "Forest", color: "bg-forest-800" },
                        { id: "purple", label: "Indigo", color: "bg-indigo-600" },
                      ].map((theme) => (
                        <button
                          key={theme.id}
                          onClick={() => setSelectedTheme(theme.id)}
                          className={`h-5 w-5 rounded-[20px] ${theme.color} ring-offset-2 transition-transform ${selectedTheme === theme.id ? "ring-2 ring-emerald-500 scale-110" : "opacity-80 hover:opacity-100"
                            }`}
                          title={theme.label}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Slogan input toggle */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-600 block">Hero Accent Text</label>
                    <input
                      type="text"
                      value={accentText}
                      onChange={(e) => setAccentText(e.target.value)}
                      maxLength={24}
                      className="w-full rounded-md border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-800 focus:outline-emerald-500 animate-none"
                    />
                  </div>
                </div>

                {/* Preview Panel (right side of card) */}
                <div className="md:col-span-7 border border-slate-100 rounded-lg p-4 bg-white shadow-2xs relative flex flex-col justify-center min-h-[160px]">
                  <div className="space-y-3.5 text-center">
                    <span
                      className={`inline-block rounded-[20px] px-2.5 py-0.5 text-[10px] font-medium uppercase transition-all duration-300 ${selectedTheme === "emerald"
                        ? "bg-emerald-50 text-emerald-700"
                        : selectedTheme === "forest"
                          ? "bg-forest-900 text-emerald-400"
                          : "bg-indigo-50 text-indigo-700"
                        }`}
                    >
                      Featured Hero Preview
                    </span>
                    <h4 className="font-display font-medium text-base text-slate-800 leading-tight">
                      Websites Designed for High Impact &{" "}
                      <span
                        className={`transition-colors duration-300 font-medium ${selectedTheme === "emerald"
                          ? "text-emerald-500"
                          : selectedTheme === "forest"
                            ? "text-forest-800"
                            : "text-indigo-600"
                          }`}
                      >
                        {accentText}
                      </span>
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed max-w-[220px] mx-auto">
                      Fully optimized structure deployed to the cloud instantly.
                    </p>
                    <div className="pt-1">
                      <button
                        className={`rounded-[20px] px-5 py-1.5 text-[10px] font-medium text-white transition-all btn-bounce ${selectedTheme === "emerald"
                          ? "bg-emerald-500 hover:bg-emerald-600"
                          : selectedTheme === "forest"
                            ? "bg-forest-800 hover:bg-forest-900"
                            : "bg-indigo-600 hover:bg-indigo-700"
                          }`}
                      >
                        Book a Call
                      </button>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        </div>

        {/* Alternate Feature 2: Speed & Performance Engine */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-28">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-md order-last lg:order-first"
          >
            <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs">

              {/* Speed Monitor Top Bar */}
              <div className="bg-slate-50 px-4 py-2.5 border-b border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400 uppercase">Lighthouse Core Web Vitals</span>
                <button
                  onClick={runSpeedTest}
                  disabled={optimizing}
                  className="text-[10px] font-medium text-white bg-slate-900 hover:bg-slate-800 px-3 py-1 rounded transition-colors disabled:opacity-50"
                >
                  {optimizing ? "Testing..." : "Run Speed Test"}
                </button>
              </div>

              {/* Speed Monitor Dashboard Area */}
              <div className="p-5 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">

                {/* Score Widget */}
                <div className="rounded-xl border border-slate-100 p-4 bg-slate-50/50 space-y-2 flex flex-col items-center justify-center">
                  <span className="text-[10px] font-medium text-slate-400 uppercase">Performance</span>
                  <div className="relative flex items-center justify-center h-20 w-20">
                    {/* Ring background */}
                    <svg className="absolute h-full w-full transform -rotate-90">
                      <circle cx="40" cy="40" r="34" stroke="#f1f5f9" strokeWidth="6" fill="transparent" />
                      <circle
                        cx="40"
                        cy="40"
                        r="34"
                        stroke="#10b981"
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray={213.6}
                        strokeDashoffset={213.6 - (213.6 * lighthouseScore) / 100}
                        className="transition-all duration-700 ease-out"
                      />
                    </svg>
                    <span className="text-2xl font-medium text-slate-800">{lighthouseScore}</span>
                  </div>
                  <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                    Perfect Vitals
                  </span>
                </div>

                {/* Score Stats */}
                <div className="sm:col-span-2 rounded-xl border border-slate-100 p-4 text-left space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-slate-700">Metrics Breakdown</span>
                    <span className="text-[10px] text-slate-400 font-mono">Edge Loaded</span>
                  </div>

                  <div className="space-y-2.5">
                    {[
                      { label: "First Contentful Paint", value: "0.2s", target: "99" },
                      { label: "Total Blocking Time", value: "0ms", target: "100" },
                      { label: "Cumulative Layout Shift", value: "0.00", target: "100" },
                    ].map((metric, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between text-[11px] font-medium">
                          <span className="text-slate-500">{metric.label}</span>
                          <span className="text-slate-800">{metric.value}</span>
                        </div>
                        <div className="h-1 bg-slate-100 rounded-[20px] overflow-hidden">
                          <div
                            className="bg-emerald-500 h-full rounded-[20px] transition-all duration-700"
                            style={{ width: `${optimizing ? 80 + idx * 5 : metric.target}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md uppercase tracking-wider">
              <Zap className="h-3.5 w-3.5" /> Speed & Performance
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-medium tracking-tight text-slate-900 leading-tight">
              Lightning fast load speeds. Served directly from the Edge.
            </h3>
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
              Google algorithms penalize slow-loading templates. Our Next.js engine compiles every site into static pre-rendered HTML, caching resources automatically across global edge cloud networks to load in under a second.
            </p>
            <ul className="space-y-3.5">
              {[
                "Instant static rendering & server-side CDN caching",
                "Automatic asset compression & image webp/avif converting",
                "Built-in SSL certificates, domain routing, and firewall guards",
              ].map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-600">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[20px] bg-emerald-50 text-emerald-600 border border-emerald-100">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <a
                href="#pricing"
                className="btn-bounce inline-flex items-center gap-1 text-sm font-medium text-slate-900 border border-slate-200 bg-white hover:bg-slate-50 rounded-[20px] px-5 py-2.5"
              >
                Learn About Hosting →
              </a>
            </div>
          </motion.div>
        </div>

        {/* Alternate Feature 3: Managed Maintenance & Slack integration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-28">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md uppercase tracking-wider">
              <ShieldCheck className="h-3.5 w-3.5" /> Managed Maintenance
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-medium tracking-tight text-slate-900 leading-tight">
              Never worry about broken links, plugins, or host errors again.
            </h3>
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
              Say goodbye to administrative and development overhead. We act as your outsourced dev studio. Ping us on Slack or email, and we’ll implement and launch updates within hours.
            </p>
            <ul className="space-y-3.5">
              {[
                "Unlimited content edits, pricing model changes, and banners",
                "Slack & Discord direct messaging integrations",
                "Continuous security patches, backups, and error auditing",
              ].map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-600">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[20px] bg-emerald-50 text-emerald-600 border border-emerald-100">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <a
                href="#pricing"
                className="btn-bounce inline-flex items-center gap-1 text-sm font-medium text-slate-900 border border-slate-200 bg-white hover:bg-slate-50 rounded-[20px] px-5 py-2.5"
              >
                See How It Works →
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-md"
          >
            <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs">

              {/* Task Board Top Bar */}
              <div className="bg-slate-50 px-4 py-2.5 border-b border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400 uppercase">Assigned Dev Sprint</span>
                <span className="text-[10px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100/50">
                  Active
                </span>
              </div>

              {/* Task Board Sprint Items */}
              <div className="p-5 space-y-3.5">
                {[
                  {
                    title: "Embed customized calendly widget",
                    desc: "Replace static contact form with scheduling flows",
                    status: "deploying",
                    statusLabel: "Deploying",
                    colorClass: "bg-emerald-50 border-emerald-100 text-emerald-700",
                  },
                  {
                    title: "Deploy legal terms page",
                    desc: "Drafted privacy policy and cookie banner setup",
                    status: "in-queue",
                    statusLabel: "In Queue",
                    colorClass: "bg-amber-50 border-amber-100 text-amber-700",
                  },
                  {
                    title: "Update contact forms integrations",
                    desc: "Link contact forms to hubspot & salesforce CRM",
                    status: "completed",
                    statusLabel: "Completed",
                    colorClass: "bg-slate-50 border-slate-100 text-slate-600",
                  },
                ].map((task, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-3.5 rounded-lg border border-slate-100 bg-slate-50/50"
                  >
                    <div className="space-y-1 text-left">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-slate-800">{task.title}</span>
                        <span className={`text-[10px] font-medium border rounded px-2 py-0.5 ${task.colorClass}`}>
                          {task.statusLabel}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 leading-normal">{task.desc}</p>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="h-5.5 w-5.5 rounded-[20px] bg-slate-200 border border-white text-[10px] font-medium text-slate-700 flex items-center justify-center select-none">
                        D
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
