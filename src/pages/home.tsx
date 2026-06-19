import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ProductShowcase from "@/components/sections/ProductShowcase";
import UseCases from "@/components/sections/UseCases";
import AboutSection from "@/components/sections/AboutSection";
import WhyDeepSoch from "@/components/sections/WhyDeepSoch";
import PlatformFeatures from "@/components/sections/PlatformFeatures";
import EnterpriseSection from "@/components/sections/EnterpriseSection";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-blue-100">
      <Navbar />
      <Hero />
      <div id="product"><ProductShowcase /></div>
      <div id="solutions"><UseCases /></div>
      <div id="resources"><WhyDeepSoch /></div>
      <div id="platform"><PlatformFeatures /></div>
      <div id="enterprise"><EnterpriseSection /></div>
      <Testimonials />
      <div id="company"><AboutSection /></div>
      <CTASection />
      <Footer />
    </main>
  );
}
