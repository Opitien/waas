"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface FillUpButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const FillUpButton = ({ children, className, ...props }: FillUpButtonProps) => {
  return (
    <button
      className={cn(
        "group relative px-8 py-4 bg-transparent border border-white/20 text-white font-display text-[11px] tracking-[0.3em] uppercase overflow-hidden transition-colors duration-500 hover:text-black",
        className
      )}
      {...props}
    >
      {/* The Fill Layer */}
      <div className="absolute inset-0 bg-white translate-y-[101%] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0 -z-10" />
      <span className="relative z-10">{children}</span>
    </button>
  );
};
