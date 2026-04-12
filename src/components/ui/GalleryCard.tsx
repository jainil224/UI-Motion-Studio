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
  const [copied, setCopied] = React.useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (prompt) {
      navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
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
      <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-black">
        {/* Main Content (Image or Video) */}
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className={cn(
              "w-full h-full transition-all duration-700 ease-out",
              title === 'Mindloop Landing' ? "object-cover" : "object-contain"
            )}
          />
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-700 ease-out"
          />
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <button 
              onClick={handleCopy}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md border transition-all duration-300",
                copied 
                  ? "bg-green-500/20 border-green-500/50 text-green-400" 
                  : "bg-white/10 border-white/20 text-white hover:bg-white/20"
              )}
            >
              {copied ? (
                <>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-3.5 h-3.5 flex items-center justify-center font-bold"
                  >
                    ✓
                  </motion.div>
                  <span className="text-[11px] font-bold uppercase tracking-wider">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-bold uppercase tracking-wider">Copy</span>
                </>
              )}
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
