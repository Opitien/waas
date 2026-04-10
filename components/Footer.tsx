"use client";

import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-32 px-6 border-t border-[hsl(var(--border))]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-20">
        <div className="flex-1">
          <Link href="/" className="text-white font-display text-4xl font-bold tracking-tighter mb-8 block">
            WAAS<span className="text-[hsl(var(--primary))]">.</span>
          </Link>
          <p className="text-white/40 font-body text-sm leading-relaxed max-w-xs">
            Building the next generation of performance-driven websites for forward-thinking brands and founders.
          </p>
        </div>

        <div className="flex-[2] grid grid-cols-2 sm:grid-cols-3 gap-12">
          <div>
            <h4 className="text-white font-display font-bold text-xs uppercase tracking-widest mb-8">Navigation</h4>
            <ul className="space-y-4">
              {["Services", "Pricing", "FAQ", "Case Studies"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-white/40 hover:text-[hsl(var(--primary))] transition-colors duration-300 text-xs uppercase tracking-wider">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-display font-bold text-xs uppercase tracking-widest mb-8">Social</h4>
            <ul className="space-y-4">
              {["Twitter", "LinkedIn", "Instagram", "GitHub"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/40 hover:text-[hsl(var(--primary))] transition-colors duration-300 text-xs uppercase tracking-wider">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-display font-bold text-xs uppercase tracking-widest mb-8">Legal</h4>
            <ul className="space-y-4">
              {["Privacy", "Terms", "Cookies"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/40 hover:text-[hsl(var(--primary))] transition-colors duration-300 text-xs uppercase tracking-wider">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-[hsl(var(--border))/30 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-white/20 font-body text-[10px] uppercase tracking-[0.5em]">
          © 2026 THEBIGDEV WAAS. ALL RIGHTS RESERVED.
        </p>
        <p className="text-white/20 font-body text-[10px] uppercase tracking-[0.5em]">
          DESIGNED BY MARK VASSILEVSKIY
        </p>
      </div>
    </footer>
  );
};
