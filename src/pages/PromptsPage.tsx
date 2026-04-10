import React from 'react';
import { ShowcaseSection } from '@/components/sections/ShowcaseSection';
import { motion } from 'framer-motion';

export const PromptsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="pt-24 min-h-screen bg-black"
    >
      <div className="px-6 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6"
        >
          Prompt Reference Library
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4"
        >
          Unlock Your AI <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Design Superpowers</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/40 max-w-2xl mx-auto text-lg"
        >
          High-fidelity image references and engineering prompts. 
          Use these components as vision and motion seeds for your next project.
        </motion.p>
      </div>
      
      {/* Reusing the ShowcaseSection which now has the detailed Image Reference modal */}
      <ShowcaseSection hideHeader={true} />
      
      <div className="pb-24" />
    </motion.div>
  );
};

export default PromptsPage;
