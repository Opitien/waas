import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { ApplyCases } from "@/components/ApplyCases";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Integrations } from "@/components/Integrations";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { LurkingConversion } from "@/components/LurkingConversion";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. Benefits Section ("What you get") */}
      <Benefits />
      
      {/* 3. Apply Cases ("For who?") */}
      <ApplyCases />
      
      {/* 4. Features Section ("Features you'll love") */}
      <Features />
      
      {/* 5. Testimonials Section */}
      <Testimonials />
      
      {/* 6. Tools & Integrations Section */}
      <Integrations />
      
      {/* 7. Pricing Section */}
      <Pricing />
      
      {/* 8. FAQ Section */}
      <FAQ />

      {/* Marquee Branding Strip (Moving to right above footer or between sections) */}
      <div className="py-12 border-y border-[hsl(var(--border))] overflow-hidden bg-white/5">
        <div className="animate-marquee whitespace-nowrap flex gap-20">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <span key={i} className="text-white/20 font-display font-black text-6xl uppercase italic">
              WAAS BY THEBIGDEV — ₦15,000 / MONTHLY — NO MAINTENANCE FEES —
            </span>
          ))}
        </div>
      </div>

      {/* 9. Footer Section */}
      <Footer />

      {/* Persistent Interaction Components */}
      <LurkingConversion />
    </main>
  );
}
