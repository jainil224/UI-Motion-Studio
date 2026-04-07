import React from 'react';
import { motion } from 'framer-motion';
import { Network, ArrowRight } from 'lucide-react';
import { GradientText } from '../ui/GradientText';

export const IntegrationSection = () => {
  return (
    <section id="guide" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-3xl p-10 md:p-20 text-center flex flex-col items-center"
        >
          {/* Intense Glow Background */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center mb-8 relative z-10 animate-pulse">
            <Network className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
            Works perfectly with <GradientText>UI HUB</GradientText>
          </h2>
          
          <p className="text-lg text-white/70 max-w-2xl mb-10 relative z-10">
            Combine powerful UI components from UI HUB with motion-driven templates from UI Motion Studio. Create state-of-the-art experiences by leveraging the best of both ecosystems.
          </p>

          <a 
            href="https://ui-hub-design.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:shadow-[0_0_40px_rgba(124,58,237,0.4)] transition-all flex items-center gap-2 group relative z-10"
          >
            Explore UI HUB
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
