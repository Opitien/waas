"use client";

import React from "react";
import Link from "next/link";
import { FillUpButton } from "./FillUpButton";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-8 flex justify-between items-center bg-transparent backdrop-blur-[2px]">
      <div className="flex items-center gap-2 group">
        <Link href="/" className="text-white font-display text-xl font-bold tracking-tighter">
          WAAS<span className="text-[hsl(var(--primary))]">.</span>
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-12">
        {["Benefits", "Features", "Pricing", "FAQ"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase().replace(" ", "-") === "benefits" ? "services" : item.toLowerCase().replace(" ", "-")}`}
            className="text-white/60 font-body text-[11px] tracking-[0.2em] uppercase hover:text-white transition-colors duration-300"
          >
            {item}
          </Link>
        ))}
      </div>

      <FillUpButton className="hidden md:block">
        Get Started
      </FillUpButton>
      
      {/* Mobile Menu Icon Placeholder */}
      <button className="md:hidden text-white">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </nav>
  );
};
