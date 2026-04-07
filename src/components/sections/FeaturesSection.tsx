import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { FileCode2, LayoutTemplate, Sparkles, Zap } from 'lucide-react';

const features = [
  {
    title: 'Copy-Paste Prompts',
    description: 'Instant generation via pre-engineered prompts tailored for LLMs.',
    icon: <FileCode2 className="w-7 h-7 text-primary" />,
  },
  {
    title: 'Ready Templates',
    description: 'Beautiful, conversion-optimized sections available in React & Vite.',
    icon: <LayoutTemplate className="w-7 h-7 text-accent" />,
  },
  {
    title: 'AI Optimized',
    description: 'Code architecture built specifically to be understood by AI coders.',
    icon: <Sparkles className="w-7 h-7 text-warning" />,
  },
  {
    title: 'Fast Workflow',
    description: 'From 0 to production in minutes. No struggling with css animations.',
    icon: <Zap className="w-7 h-7 text-emerald-400" />,
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 relative w-full overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-warning" /> 
            <span>Supercharged Features</span>
          </motion.div>
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
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <GlassCard className="h-full group hover:bg-white/[0.05] transition-colors duration-500">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center mb-6 shadow-inner relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
