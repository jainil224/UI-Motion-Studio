import React from 'react';

export const Footer = () => {
  return (
    <footer className="border-t border-white/[0.05] py-12 px-6 mt-20 relative bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-primary to-accent" />
          <span className="text-lg font-bold tracking-tight text-white">UI Motion Studio</span>
        </div>

        <div className="flex items-center gap-8">
          {['Templates', 'Prompts', 'Pricing', 'UI HUB'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="text-sm text-white/30">
          © {new Date().getFullYear()} UI Motion Studio. All rights reserved.
        </div>

      </div>
    </footer>
  );
};
