import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { Check } from 'lucide-react';

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Simple, transparent pricing
          </motion.h2>
          <p className="text-white/60">Unlock everything to build cinematic landing pages.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="h-full flex flex-col p-8">
              <h3 className="text-2xl font-semibold mb-2">Free</h3>
              <p className="text-sm text-white/50 mb-6">Perfect to get a taste of motion.</p>
              <div className="text-4xl font-bold mb-8">$0<span className="text-lg text-white/50 font-normal">/mo</span></div>
              
              <ul className="flex flex-col gap-4 mb-8 flex-1">
                {['Access to 2 templates', 'Basic prompts', 'Community support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                    <Check className="w-4 h-4 text-white/30" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <button className="w-full py-4 rounded-xl bg-white/5 text-white font-medium hover:bg-white/10 transition-colors border border-white/10">
                Get Started
              </button>
            </GlassCard>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <GlassCard glow className="h-full flex flex-col p-8">
              <div className="absolute top-0 right-0 py-1 px-4 bg-gradient-to-r from-primary to-accent text-[10px] font-bold uppercase tracking-widest rounded-bl-xl rounded-tr-xl">
                Most Popular
              </div>
              <h3 className="text-2xl font-semibold mb-2">Pro</h3>
              <p className="text-sm text-white/50 mb-6">Unlimited power for elite creators.</p>
              <div className="text-4xl font-bold mb-8">$29<span className="text-lg text-white/50 font-normal">/mo</span></div>
              
              <ul className="flex flex-col gap-4 mb-8 flex-1">
                {['Unlimited Templates', 'All Premium Prompts', 'Priority Support', 'New releases weekly', 'Export to any framework'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/90">
                    <Check className="w-4 h-4 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <button className="w-full py-4 rounded-xl bg-white text-black font-semibold hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-shadow">
                Upgrade Now
              </button>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
