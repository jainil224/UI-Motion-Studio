import React from 'react';
import { motion } from 'framer-motion';
import { Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GalleryCardProps {
  title: string;
  category: string;
  image?: string;
  video?: string;
  prompt?: string;
  isPremium?: boolean;
  className?: string;
  onClick?: () => void;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({
  title,
  category,
  image,
  video,
  prompt,
  isPremium = false,
  className,
  onClick,
}) => {
  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (prompt) {
      navigator.clipboard.writeText(prompt);
      // Optional: Add a toast or feedback here if needed, 
      // but the plan didn't specify it. 
      // I'll keep it simple for now.
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onClick={onClick}
      className={cn("group flex flex-col gap-4 cursor-pointer", className)}
    >
      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-white/5">
        {/* Main Content (Image or Video) */}
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 scale-110 group-hover:scale-125 transition-all duration-700 ease-out"
          />
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 ease-out"
          />
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <button 
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold uppercase tracking-wider hover:bg-white/20 transition-all"
            >
              <Copy className="w-3.5 h-3.5" />
              Copy
            </button>

          </div>
        </div>
      </div>

      <div className="px-1 mt-2">
        <h3 className="text-[19px] font-bold text-white group-hover:text-primary transition-colors duration-500 tracking-tight leading-none mb-1">
          {title}
        </h3>
        <p className="text-[13px] text-white/40 font-medium uppercase tracking-[0.05em] group-hover:text-white/60 transition-colors duration-500">
          {category}
        </p>
      </div>
    </motion.div>

  );
};
