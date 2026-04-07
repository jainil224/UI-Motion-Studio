import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { Copy, Terminal, Zap, Fingerprint } from 'lucide-react';

const prompts = [
  {
    icon: <Terminal className="w-6 h-6 text-primary" />,
    title: 'SaaS Prompts',
    description: 'Copy-paste instructions optimized for dashboard and B2B layouts.',
  },
  {
    icon: <Zap className="w-6 h-6 text-accent" />,
    title: 'Hero Prompts',
    description: 'Perfectly engineered prompts for high-converting cinematic headers.',
  },
  {
    icon: <Fingerprint className="w-6 h-6 text-warning" />,
    title: 'Animation Prompts',
    description: 'GSAP and Framer Motion sequence descriptions ready for AI generation.',
  },
];

export const PromptLibrarySection = () => {
  return (
    <section id="prompts" className="py-24 px-6 relative bg-gradient-to-b from-black via-[#0a0514] to-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-16 h-16 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center mb-4"
          >
            <Copy className="w-8 h-8 text-primary" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight leading-tight"
          >
            Generate At <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Lightning Speed</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg max-w-md"
          >
            Stop writing prompts from scratch. Use our curated library of system instructions to instantly spin up beautiful, animated React components and sections.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4"
          >
            <button className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-white/90 transition-all flex items-center gap-2">
              Browse Library <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prompts.map((prompt, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + 0.2, duration: 0.6 }}
              className={idx === 2 ? "sm:col-span-2 sm:w-1/2 justify-self-center block sm:hidden" : ""}
            >
              <GlassCard glow className="h-full group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 drop-shadow-lg">
                  {prompt.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{prompt.title}</h3>
                <p className="text-sm text-white/50 mb-6">{prompt.description}</p>
                <button className="w-full py-2 bg-transparent border-t border-white/10 text-white/70 text-sm font-medium hover:text-white group-hover:border-primary/30 transition-colors flex items-center justify-center gap-2 mt-auto">
                  <Copy className="w-4 h-4" /> Copy Prompt
                </button>
              </GlassCard>
            </motion.div>
          ))}
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="hidden sm:block sm:col-span-2"
            >
              <GlassCard glow className="h-full group max-w-sm mx-auto">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 drop-shadow-lg">
                    {prompts[2].icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{prompts[2].title}</h3>
                    <p className="text-sm text-white/50">{prompts[2].description}</p>
                  </div>
                </div>
                <button className="w-full py-3 bg-white/5 rounded-xl border border-white/10 text-white/70 text-sm font-medium hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2 mt-6">
                  <Copy className="w-4 h-4" /> Copy Prompt
                </button>
              </GlassCard>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

// Inline ArrowRight since it's used inside the file but forgot to import
const ArrowRight = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);
