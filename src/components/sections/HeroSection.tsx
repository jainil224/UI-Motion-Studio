import React from 'react';
import { motion } from 'framer-motion';
import { FlipText } from '../ui/flip-text';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4"
      />
      
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto pt-24 mt-12 md:mt-24 pb-[100px]">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8 flex items-center justify-center"
        >
          <span className="text-[13px] font-medium text-white tracking-wide">
            New AI Motion Templates Available
          </span>
        </motion.div>

        {/* Heading */}
        <h1 className="text-4xl md:text-[56px] leading-[1.1] font-bold text-white mb-6 max-w-[800px] text-center">
          <FlipText duration={0.8} className="text-white">
            {"Unlock Your Motion Design "}
          </FlipText>
          <FlipText 
            duration={0.8} 
            className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient drop-shadow-[0_0_15px_rgba(124,58,237,0.3)] leading-normal"
          >
            Superpowers
          </FlipText>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-[15px] text-white/70 max-w-[680px] mb-10 leading-relaxed"
        >
          Create stunning animated landing pages in minutes using AI-powered prompts. Copy, paste, and launch.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
        >
          {/* Primary CTA */}
          <button className="h-12 px-8 bg-white text-black rounded-full font-semibold hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 flex items-center gap-2 group w-full sm:w-auto justify-center">
            Explore Templates
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          {/* Secondary CTA */}
          <button className="h-12 px-8 bg-transparent border border-white/20 text-white rounded-full font-medium hover:bg-white/10 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] transition-all duration-300 w-full sm:w-auto justify-center">
            Go Unlimited
          </button>
        </motion.div>
      </div>
    </section>
  );
};
