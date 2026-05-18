"use client";

import React, { useEffect, useRef } from "react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let targetY = window.scrollY;
    let currentY = window.scrollY;
    let isDragging = false;
    let startY = 0;
    let startScrollY = 0;
    let velocity = 0;
    let lastY = 0;
    let lastTime = Date.now();

    // Disable modern browser scroll jump effects to enable smooth custom damping
    document.documentElement.style.scrollBehavior = "auto";

    const handleWheel = (e: WheelEvent) => {
      // Prevent standard browser jumpy scrolling
      e.preventDefault();
      
      // Interpolate targets with smooth scaling multiplier
      targetY += e.deltaY * 0.8;
      
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetY = Math.max(0, Math.min(targetY, maxScroll));
    };

    const handleMouseDown = (e: MouseEvent) => {
      // Bypasses click drags on form fields, textboxes, buttons, tally modals, and links
      const target = e.target as HTMLElement;
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("select") ||
        target.closest("iframe") ||
        target.closest(".tally-embed") ||
        target.closest("[role='button']")
      ) {
        return;
      }
      
      isDragging = true;
      startY = e.clientY;
      startScrollY = window.scrollY;
      lastY = e.clientY;
      lastTime = Date.now();
      velocity = 0;
      
      document.body.style.userSelect = "none";
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const deltaY = e.clientY - startY;
      // Beautiful drag drag-to-scroll translation
      targetY = startScrollY - deltaY * 1.35;

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetY = Math.max(0, Math.min(targetY, maxScroll));

      // Capture drag momentum for inertia release
      const now = Date.now();
      const dt = now - lastTime;
      if (dt > 0) {
        velocity = -(e.clientY - lastY) / dt;
      }
      lastY = e.clientY;
      lastTime = now;
    };

    const handleMouseUp = () => {
      if (!isDragging) return;
      isDragging = false;
      
      document.body.style.userSelect = "";

      // Apply gorgeous inertia glide on mouse release
      if (Math.abs(velocity) > 0.08) {
        targetY += velocity * 140;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        targetY = Math.max(0, Math.min(targetY, maxScroll));
      }
    };

    // Listeners for advanced custom scroll
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseleave", handleMouseUp);

    // Damped animation rendering frame loop
    let rAF: number;
    const renderLoop = () => {
      const diff = targetY - currentY;
      if (Math.abs(diff) > 0.05) {
        currentY += diff * 0.085; // Butter-smooth slow drag damping constant
        window.scrollTo(0, currentY);
      } else {
        currentY = targetY;
      }
      rAF = requestAnimationFrame(renderLoop);
    };
    rAF = requestAnimationFrame(renderLoop);

    // Keep internal values aligned when elements smooth-scroll via scrollIntoView or keyboard clicks
    const handleRawScroll = () => {
      if (!isDragging && Math.abs(window.scrollY - currentY) > 5) {
        targetY = window.scrollY;
        currentY = window.scrollY;
      }
    };
    window.addEventListener("scroll", handleRawScroll);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseleave", handleMouseUp);
      window.removeEventListener("scroll", handleRawScroll);
      cancelAnimationFrame(rAF);
      document.body.style.userSelect = "";
    };
  }, []);

  return <div ref={scrollRef}>{children}</div>;
}
