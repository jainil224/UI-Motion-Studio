"use client";

import { motion, type Variants, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface FlipTextProps extends HTMLMotionProps<"div"> {
  children: string;
  duration?: number;
  delay?: number;
  framerProps?: Variants;
  className?: string;
}

export const FlipText = ({
  children,
  duration = 0.5,
  delay = 0,
  framerProps = {
    hidden: { rotateX: -90, opacity: 0 },
    show: { rotateX: 0, opacity: 1 },
  },
  className,
  ...props
}: FlipTextProps) => {
  // Ensure children is treated as a string even if React passes it as an array of strings
  const text = Array.isArray(children) ? children.join("") : children;

  return (
    <motion.div 
      {...props} 
      className={cn("flex flex-wrap items-center justify-center", className)}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial="hidden"
          animate="show"
          variants={framerProps}
          transition={{ duration, delay: delay + i * 0.03 }}
          className={cn("origin-center inline-block", className)}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};
