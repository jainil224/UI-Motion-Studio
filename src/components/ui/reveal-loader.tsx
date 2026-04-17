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

  // Spread the stagger from 0.0 to 0.4.
  const start = delayAmount * 0.4;
  // Each panel takes 0.45 of the scroll progress to shrink to 0.
  const end = start + 0.45;
  
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
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -20]);

  // Overall pointer events for the container
  const pointerEvents = useTransform(scrollYProgress, (v) => (v > 0.8 ? "none" : "auto"));

  return (
    <motion.div
      className={`absolute inset-0 overflow-hidden rounded-[inherit] z-[50] ${className}`}
      style={{ pointerEvents }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Panels */}
        <div className="absolute inset-0 flex pointer-events-none">
          {Array.from({ length: numPanels }).map((_, i) => {
            const [start, end] = getPanelProgressRange(i, numPanels, staggerOrder);
            
            // Map the scrollYProgress to scaleY. 
            // transformOrigin: "bottom" means as it shrinks to 0, it drops to the bottom.
            // As user scrolls UP, it grows from the bottom UP to the top edge.
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
                className="h-full flex-1 origin-bottom"
                style={{ 
                  background: bg,
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
            className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-white"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #e0e7ff 55%, #c7d2fe 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 4px 20px rgba(255, 255, 255, 0.4))",
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
