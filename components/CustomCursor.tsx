"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "grabbing" | "grab">("grab");

  // High-performance motion values for mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Tracks mouse click status for drag states without causing stale event listener closures
  const isMouseDownRef = useRef(false);

  // Physics-based spring animations for a buttery-smooth elastic ring lag
  const springConfig = { damping: 30, stiffness: 280, mass: 0.6 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only show custom cursor on devices that support hover inputs (desktop mouse users)
    const mediaQuery = window.matchMedia("(hover: hover)");
    if (!mediaQuery.matches) return;

    // Only show custom cursor on screens 768px and wider
    if (window.innerWidth < 768) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      // Offset by half of standard cursor size to center
      mouseX.set(e.clientX - 4);
      mouseY.set(e.clientY - 4);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Check if hovering over clickable/interactive elements
      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("select") ||
        target.closest("[role='button']") ||
        target.closest("iframe") ||
        target.closest(".tally-embed") ||
        target.closest(".tally-popup");

      if (isInteractive) {
        setCursorType("pointer");
      } else {
        setCursorType(isMouseDownRef.current ? "grabbing" : "grab");
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target && (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("select") ||
        target.closest("[role='button']") ||
        target.closest("iframe") ||
        target.closest(".tally-embed") ||
        target.closest(".tally-popup")
      );

      isMouseDownRef.current = true;
      if (!isInteractive) {
        setCursorType("grabbing");
      }
    };

    const handleMouseUp = () => {
      isMouseDownRef.current = false;
      
      // Dynamic pointer determination based on released position element
      const target = document.elementFromPoint(mouseX.get() + 4, mouseY.get() + 4);
      const isInteractive = target && (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("select") ||
        target.closest("[role='button']") ||
        target.closest("iframe") ||
        target.closest(".tally-embed") ||
        target.closest(".tally-popup")
      );

      setCursorType(isInteractive ? "pointer" : "grab");
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Hide standard browser pointers completely across all elements including drag states
    const styleEl = document.createElement("style");
    styleEl.innerHTML = `
      @media (hover: hover) {
        html, body, a, button, input, select, textarea, [role="button"], iframe {
          cursor: none !important;
        }
      }
    `;
    document.head.appendChild(styleEl);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.head.removeChild(styleEl);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* 1. Core Center Dot (Moves instantly with mouse, expands on hover) */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-emerald-500"
        style={{ x: mouseX, y: mouseY }}
        animate={{
          scale: cursorType === "pointer" ? 1.5 : cursorType === "grabbing" ? 0 : 1,
          backgroundColor: cursorType === "pointer" ? "#047857" : "#10b981",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 25 }}
      />

      {/* 2. Custom Spring-elastic Outer Ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border border-emerald-500/30 flex items-center justify-center"
        style={{
          x: ringX,
          y: ringY,
          // Shift outer ring coordinate slightly to center perfectly around 8px dot
          translateX: "-12px",
          translateY: "-12px",
        }}
        animate={{
          width: cursorType === "pointer" ? 48 : cursorType === "grabbing" ? 16 : 28,
          height: cursorType === "pointer" ? 48 : cursorType === "grabbing" ? 16 : 28,
          borderColor: cursorType === "pointer" ? "rgba(16, 185, 129, 0.7)" : "rgba(16, 185, 129, 0.3)",
          backgroundColor:
            cursorType === "pointer"
              ? "rgba(16, 185, 129, 0.08)"
              : cursorType === "grabbing"
              ? "rgba(16, 185, 129, 0.5)"
              : "rgba(16, 185, 129, 0.02)",
          scale: cursorType === "grabbing" ? 0.95 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        {/* Render indicator label for grab status inside the ring */}
        {cursorType === "grab" && (
          <span className="text-[7px] font-black uppercase tracking-widest text-emerald-400/90 scale-75 mt-0.5">
            drag
          </span>
        )}
      </motion.div>
    </>
  );
}
