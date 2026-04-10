import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { ShowcaseSection } from '@/components/sections/ShowcaseSection';
import { UILayoutSection } from '@/components/sections/UILayoutSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { IntegrationSection } from '@/components/sections/IntegrationSection';
import { PricingSection } from '@/components/sections/PricingSection';
import AsciiWave from '@/components/lightswind/ascii-wave';

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <UILayoutSection />
      <FeaturesSection />
      <IntegrationSection />
      <PricingSection />
      
      {/* Decorative Ascii Wave Section */}
      <section className="w-full h-[30vh] md:h-[40vh] relative overflow-hidden border-t border-white/5 opacity-80">
        <AsciiWave speed={1.5} color="#FFFFFF" />
      </section>
    </>
  );
};

export default HomePage;
