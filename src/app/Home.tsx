import React from "react";
import { HeroSection } from "./components/HeroSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { IntegrationsSection } from "./components/IntegrationsSection";
import { SpecsSection } from "./components/SpecsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { SEO } from "./components/SEO";
import { SEO_CONFIG } from "./utils/seo-config";

export function Home() {
  return (
    <>
      <SEO {...SEO_CONFIG.home} />
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <BenefitsSection />
      <IntegrationsSection />
      <SpecsSection />
      <TestimonialsSection />
    </>
  );
}