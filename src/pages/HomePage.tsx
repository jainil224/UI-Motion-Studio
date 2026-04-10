import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '@/components/sections/HeroSection';
import { ShowcaseSection } from '@/components/sections/ShowcaseSection';
import { UILayoutSection } from '@/components/sections/UILayoutSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { IntegrationSection } from '@/components/sections/IntegrationSection';
import { PricingSection } from '@/components/sections/PricingSection';
import AsciiWave from '@/components/lightswind/ascii-wave';

export const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <HeroSection />
      <UILayoutSection />
      <FeaturesSection />
      <IntegrationSection />
      <PricingSection />
      
      {/* Decorative Ascii Wave Section */}
      <section className="w-full h-[30vh] md:h-[40vh] relative overflow-hidden border-t border-white/5 opacity-80">
        <AsciiWave speed={1.5} color="#FFFFFF" />
      </section>
    </motion.div>
  );
};

export default HomePage;
