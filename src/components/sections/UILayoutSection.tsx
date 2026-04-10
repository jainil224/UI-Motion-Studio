import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from '@/components/ui/sparkles';
import { Layout, Rocket, Box } from 'lucide-react';
import { cn } from '@/lib/utils';

export const UILayoutSection = () => {
  return (
    <section id="ui-layout" className="relative w-full overflow-hidden bg-black py-32">
      {/* Cinematic Background */}
      <div className='min-h-[700px] w-full relative overflow-hidden flex flex-col items-center'>
        
        {/* The "Planet" Curve with Glow */}
        <div className='absolute top-0 left-0 w-full h-[500px] overflow-hidden mask-[radial-gradient(50%_50%,white,transparent)]'>
          <div className='relative h-full w-full overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#369effbb,transparent_80%)] before:opacity-100 after:absolute after:border-2 after:-left-1/2 after:top-1/2 after:aspect-[1/1.8] after:w-[200%] after:rounded-[50%] after:border-b after:border-primary/40 after:bg-zinc-950 after:shadow-[0_10px_50px_rgba(54,158,255,0.2)]'>
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-size-[70px_80px] '></div>
            <Sparkles
              density={500}
              size={1.2}
              direction='top'
              className='absolute inset-x-0 top-0 h-full w-full opacity-60'
            />
          </div>
        </div>
        
        {/* Content Container */}
        <div className='relative z-10 flex flex-col items-center pt-24'>
          {/* Text Content */}
          <article className='text-white w-11/12 max-w-4xl mx-auto block text-center'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className='text-center text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase'>
                UI-<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">LAYOUT</span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/40 text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto font-medium"
            >
              The ultimate minimalist UI library for high-performance motion design. 
              Simplify complexity. Fast, AI-ready, and built for the future of web interfaces.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='mt-12 flex flex-wrap justify-center gap-4'
            >
              <button className='px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-white/90 transition-all flex items-center gap-2'>
                View Documentation <Rocket className='w-4 h-4' />
              </button>
              <button className='px-8 py-3 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all'>
                Core Features
              </button>
            </motion.div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default UILayoutSection;
