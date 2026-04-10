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


      {/* 9. Footer Section */}
      <Footer />

      {/* Persistent Interaction Components */}
      <LurkingConversion />
    </main>
  );
}
