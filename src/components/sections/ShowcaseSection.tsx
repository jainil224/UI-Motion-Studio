import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { Play } from 'lucide-react';

const templates = [
  {
    title: 'SaaS AI Platform',
    tag: 'Premium',
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Creative Portfolio',
    tag: 'Free',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Startup Launch',
    tag: 'Premium',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
  },
];

export const ShowcaseSection = () => {
  return (
    <section id="templates" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            Premium Templates
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl"
          >
            Ready-to-use, cinematic landing pages powered by advanced motion design algorithms.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {templates.map((template, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <GlassCard glow className="group cursor-pointer aspect-[4/5] flex flex-col justify-between p-4">
                <div className="w-full h-[65%] rounded-xl overflow-hidden relative border border-white/[0.05]">
                  <img 
                    src={template.image} 
                    alt={template.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white">
                      <Play className="w-5 h-5 ml-1" />
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3 mt-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-white">{template.title}</h3>
                    <span className={`text-[11px] font-bold uppercase tracking-wider py-1 px-3 rounded-full ${
                      template.tag === 'Premium' 
                        ? 'bg-gradient-to-r from-primary to-accent text-white' 
                        : 'bg-white/10 text-white/80'
                    }`}>
                      {template.tag}
                    </span>
                  </div>
                  <button className="w-full py-3 mt-auto rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm font-medium">
                    View Details
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="px-8 py-3 rounded-full border border-white/20 hover:border-white/50 text-white text-sm font-medium transition-all group flex items-center gap-2">
            View All Templates
            <Play className="w-3 h-3 group-hover:text-primary transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};
