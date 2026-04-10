import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { EnvelopeCard } from '../ui/EnvelopeCard';

const features = [
  {
    title: 'Copy-Paste Prompts',
    description: 'Instant generation via pre-engineered prompts tailored for LLMs.',
  },
  {
    title: 'Ready Templates',
    description: 'Beautiful, conversion-optimized sections available in React & Vite.',
  },
  {
    title: 'AI Optimized',
    description: 'Code architecture built specifically to be understood by AI coders.',
  },
  {
    title: 'Fast Workflow',
    description: 'From 0 to production in minutes. No struggling with css animations.',
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 relative w-full overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-16 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Designed for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Future</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            Everything you need to create premium Web3 and AI landing pages without the repetitive coding.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full relative z-10">
          {features.map((feature, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <EnvelopeCard 
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
