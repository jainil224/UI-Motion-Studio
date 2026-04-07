import React from 'react';
import { cn } from '@/lib/utils';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface GradientTextProps extends HTMLMotionProps<"span"> {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export const GradientText = ({ children, className, animate, ...props }: GradientTextProps) => {
  return (
    <motion.span
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r from-white via-[#7C3AED] to-[#3B82F6]",
        animate && "animate-pulse",
        className
      )}
      {...props}
    >
      {children}
    </motion.span>
  );
};
