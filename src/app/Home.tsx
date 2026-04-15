import React, { Suspense, lazy } from "react";
import { HeroSection } from "./components/HeroSection";
import { SEO } from "./components/SEO";
import { SEO_CONFIG } from "./utils/seo-config";

// Lazy load below-the-fold components
const HowItWorksSection = lazy(() => import("./components/HowItWorksSection").then(module => ({ default: module.HowItWorksSection })));
const FeaturesSection = lazy(() => import("./components/FeaturesSection").then(module => ({ default: module.FeaturesSection })));
const BenefitsSection = lazy(() => import("./components/BenefitsSection").then(module => ({ default: module.BenefitsSection })));
const IntegrationsSection = lazy(() => import("./components/IntegrationsSection").then(module => ({ default: module.IntegrationsSection })));
const SpecsSection = lazy(() => import("./components/SpecsSection").then(module => ({ default: module.SpecsSection })));
const TestimonialsSection = lazy(() => import("./components/TestimonialsSection").then(module => ({ default: module.TestimonialsSection })));
const FAQSection = lazy(() => import("./components/FAQSection").then(module => ({ default: module.FAQSection })));

// Fallback skeleton or loader
const SectionFallback = () => <div className="min-h-[400px] w-full animate-pulse bg-transparent" />;

export function Home() {
  return (
    <>
      <SEO {...SEO_CONFIG.home} />
      <HeroSection />
      <Suspense fallback={<SectionFallback />}>
        <HowItWorksSection />
        <FeaturesSection />
        <BenefitsSection />
        <IntegrationsSection />
        <SpecsSection />
        <TestimonialsSection />
        <FAQSection />
      </Suspense>
    </>
  );
}