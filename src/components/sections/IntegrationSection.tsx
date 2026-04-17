import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Network, ArrowRight } from 'lucide-react';
import { GradientText } from '../ui/GradientText';
import { Sparkles } from '../ui/sparkles';
import RevealLoader from '../ui/reveal-loader';

export const IntegrationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of the card itself through the viewport.
  // "start 95%" = animation begins as soon as the card top is 5% from the bottom of viewport.
  // "center center" = animation finishes when the card center aligns with viewport center.
  // This range works well on both desktop and mobile (short viewport heights).
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 95%", "center center"],
  });

  return (
    <section id="guide" className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden bg-black">
      {/* Background Sparkle Field */}
      <div className="absolute inset-0 z-0">
        <Sparkles
          density={30}
          size={1.4}
          direction="top"
          className="absolute inset-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)] opacity-30"
          color="#7C3AED"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-3xl p-8 md:p-20 text-center flex flex-col items-center group shadow-xl shadow-primary/5"
        >
          {/* Scroll-driven Reveal Loader */}
          <RevealLoader
            text="UI HUB"
            bgColors={["#4A5CFF", "#6F7BFF"]}
            staggerOrder="center-out"
            numPanels={6}
            scrollYProgress={scrollYProgress}
          />

          {/* Intense Glow & Grid Portal Background */}
          <div className="absolute inset-x-0 top-0 h-80 overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] pointer-events-none opacity-50">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,#7C3AED,transparent_90%)] opacity-25" />
            
            {/* High-Tech Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:70px_80px]" />
            
            {/* Inner Particle Burst */}
            <Sparkles
              density={100}
              size={1.2}
              direction="top"
              className="absolute inset-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_80%)]"
              color="#A855F7"
            />
          </div>

          <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center mb-6 md:mb-8 relative z-10 transition-transform group-hover:scale-110 duration-500 shadow-lg shadow-primary/10">
            <Network className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 relative z-10 leading-tight">
            Works perfectly with <GradientText>UI HUB</GradientText>
          </h2>
          
          <p className="text-base md:text-lg text-white/70 max-w-2xl mb-8 md:mb-10 relative z-10 leading-relaxed font-body">
            Combine powerful UI components from UI HUB with motion-driven templates from UI Motion Studio. Create state-of-the-art experiences by leveraging the best of both ecosystems.
          </p>

          <a 
            href="https://ui-hub-design.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 md:px-8 py-3 md:py-4 rounded-full bg-white text-black font-semibold text-base md:text-lg active:scale-95 hover:scale-105 hover:shadow-[0_0_25px_rgba(124,58,237,0.25)] transition-all flex items-center gap-2 relative z-10"
          >
            Explore UI HUB
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
