"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";
import { DemoModal } from "@/components/DemoModal";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Premium custom mouse tracking spring cursor */}
      <CustomCursor />

      {/* 0. Brand Preloader with interchanging logo circles */}
      <Preloader />

      {/* 0.5. Global Premium Booking & Pricing Modal Overlay */}
      <DemoModal />

      <SmoothScroll>
        {/* 1. Global Navigation Bar */}
        <Navbar />
        
        {/* 2. Hero & Interactive Core Dashboard */}
        <Hero />
        
        {/* 3. Alternating Capabilities & Interactive Modules Grid */}
        <Features />
        
        {/* 4. Social Proof (Testimonials infinite scrolling marquee slider) */}
        <Testimonials />
        
        {/* 5. Predictable Subscription Tiers (Starter, Growth, charcoal-black Enterprise) */}
        <Pricing />
        
        {/* 6. Sleek FAQ Accordion Grid inside Mint container */}
        <FAQ />

        {/* 7. Premium Deep Forest Green CTA Banner & Structured Links Footer */}
        <Footer />
      </SmoothScroll>
    </main>
  );
}
