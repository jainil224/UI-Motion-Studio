"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

type StaggerOrder = "left-to-right" | "right-to-left" | "center-out" | "edges-in";

interface RevealLoaderProps {
  text?: string;
  bgColors?: string[];
  staggerOrder?: StaggerOrder;
  numPanels?: number;
  scrollYProgress: MotionValue<number>;
  className?: string;
}

function getPanelProgressRange(index: number, total: number, order: StaggerOrder): [number, number] {
  // We map each panel to start at a certain point between 0 and 0.6 of the full scroll progress
  // So the last panel finishes its animation well before 1.0.
  let delayAmount = 0;
  
  switch (order) {
    case "left-to-right":
      delayAmount = index / (total - 1);
      break;
    case "right-to-left":
      delayAmount = (total - 1 - index) / (total - 1);
      break;
    case "center-out": {
      const center = (total - 1) / 2;
      delayAmount = Math.abs(index - center) / center;
      break;
    }
    case "edges-in": {
      const center = (total - 1) / 2;
      delayAmount = (center - Math.abs(index - center)) / center;
      break;
    }
    default:
      delayAmount = index / (total - 1);
  }

  // scale delayAmount to a max stagger of 0.4
  const start = delayAmount * 0.4;
  // each panel takes 0.3 of the scroll progress to animate open
  const end = start + 0.3;
  
  return [start, end];
}

const RevealLoader: React.FC<RevealLoaderProps> = ({
  text = "UI HUB",
  bgColors = ["#0a0a0a", "#1a1a2e"],
  staggerOrder = "center-out",
  numPanels = 8,
  scrollYProgress,
  className = "",
}) => {
  // Text fade out mapping
  // The text scales/fades out early in the scroll so it's gone before the panels fully open
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -20]);

  // Overall pointer events for the container: if scroll progress is > 0.8, we can let clicks pass through
  const pointerEvents = useTransform(scrollYProgress, (v) => (v > 0.8 ? "none" : "auto"));

  return (
    <motion.div
      className={`absolute inset-0 overflow-hidden rounded-3xl z-[50] ${className}`}
      style={{ pointerEvents }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Panels */}
        <div className="absolute inset-0 flex pointer-events-none">
          {Array.from({ length: numPanels }).map((_, i) => {
            const [start, end] = getPanelProgressRange(i, numPanels, staggerOrder);
            
            // Map the scrollYProgress to scaleY for this specific panel
            // When we start scrolling (0), scale is 1 (closed).
            // When we hit 'start', it begins to scale down to 0 (open) at 'end'.
            const scaleY = useTransform(scrollYProgress, [start, end], [1, 0]);
            
            const bg =
              bgColors.length > 1
                ? `linear-gradient(180deg, ${bgColors[i % bgColors.length]}, ${
                    bgColors[(i + 1) % bgColors.length]
                  })`
                : bgColors[0];

            return (
              <motion.div
                key={i}
                className="h-full flex-1"
                style={{ 
                  background: bg, 
                  transformOrigin: "top",
                  scaleY 
                }}
              />
            );
          })}
        </div>

        {/* Text — visible while panels are mostly closed and fading early */}
        <motion.div
          className="relative z-10 pointer-events-none select-none text-center"
          style={{ opacity: textOpacity, y: textY }}
        >
          <span
            className="text-5xl md:text-7xl font-black tracking-tighter uppercase"
            style={{
              background: "linear-gradient(135deg, #0f172a 0%, #7c3aed 55%, #4f46e5 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 2px 12px rgba(124, 58, 237, 0.3))",
            }}
          >
            {text}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RevealLoader;
