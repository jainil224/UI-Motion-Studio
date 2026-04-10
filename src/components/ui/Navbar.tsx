import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none w-full">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn(
          "pointer-events-auto transition-all duration-500 w-full max-w-5xl mx-4 mt-6 py-3 px-6 rounded-[2rem] glass-nav"
        )}
      >
        <div className="flex items-center justify-between w-full">
          <Link to="/" className="text-lg md:text-xl font-bold tracking-tight text-white flex items-center gap-2 shrink-0">
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-tr from-primary to-accent shrink-0" />
            <span className="truncate max-w-[120px] sm:max-w-none">UI Motion</span>
            <span className="hidden sm:inline">Studio</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link to="/prompts" className="text-sm font-medium text-white/80 hover:text-white hover:text-shadow-glow transition-all">
              Prompts
            </Link>
            <a href="https://ui-hub-design.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white/80 hover:text-white hover:text-shadow-glow transition-all">
              UI HUB
            </a>
          </div>

          <button className="relative px-4 py-1.5 md:px-6 md:py-2 rounded-full overflow-hidden group shrink-0 ml-2">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/50 to-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute inset-[1px] bg-black rounded-full" />
            <span className="relative text-xs md:text-sm font-medium text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 transition-all z-10">
              <span className="hidden sm:inline">Get Unlimited </span>Access
            </span>
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-50" />
          </button>
        </div>
      </motion.nav>
    </div>
  );
};
