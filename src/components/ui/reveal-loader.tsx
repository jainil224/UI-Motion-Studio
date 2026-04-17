"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

type StaggerOrder = "left-to-right" | "right-to-left" | "center-out" | "edges-in";

interface RevealLoaderProps {
  text?: string;
  bgColors?: string[];
  staggerOrder?: StaggerOrder;
  numPanels?: number;
  mobileNumPanels?: number;
  scrollYProgress: MotionValue<number>;
  className?: string;
}

function getPanelProgressRange(index: number, total: number, order: StaggerOrder): [number, number] {
  let delayAmount = 0;

  switch (order) {
    case "left-to-right":
      delayAmount = index / Math.max(total - 1, 1);
      break;
    case "right-to-left":
      delayAmount = (total - 1 - index) / Math.max(total - 1, 1);
      break;
    case "center-out": {
      const center = (total - 1) / 2;
      delayAmount = center === 0 ? 0 : Math.abs(index - center) / center;
      break;
    }
    case "edges-in": {
      const center = (total - 1) / 2;
      delayAmount = center === 0 ? 0 : (center - Math.abs(index - center)) / center;
      break;
    }
    default:
      delayAmount = index / Math.max(total - 1, 1);
  }

  // Stagger spread: 0.0 → 0.4
  const start = delayAmount * 0.4;
  // Each panel takes 0.45 of the scroll range to animate
  const end = start + 0.45;

  return [start, end];
}

// Individual panel — its own component so hooks are always called at top level
const Panel: React.FC<{
  index: number;
  total: number;
  order: StaggerOrder;
  bg: string;
  scrollYProgress: MotionValue<number>;
}> = ({ index, total, order, bg, scrollYProgress }) => {
  const [start, end] = getPanelProgressRange(index, total, order);
  const scaleY = useTransform(scrollYProgress, [start, end], [1, 0]);

  return (
    <motion.div
      className="h-full flex-1 origin-bottom"
      style={{ background: bg, scaleY }}
    />
  );
};

const RevealLoader: React.FC<RevealLoaderProps> = ({
  text = "UI HUB",
  bgColors = ["#4A5CFF", "#6F7BFF"],
  staggerOrder = "center-out",
  numPanels = 8,
  scrollYProgress,
  className = "",
}) => {
  // Text fades out during the first 40% of scroll
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -16]);

  // Disable pointer-events once fully revealed so the card is interactive
  const pointerEvents = useTransform(scrollYProgress, (v) =>
    v > 0.85 ? "none" : "auto"
  );

  const getBg = (i: number) =>
    bgColors.length > 1
      ? `linear-gradient(180deg, ${bgColors[i % bgColors.length]}, ${
          bgColors[(i + 1) % bgColors.length]
        })`
      : bgColors[0];

  return (
    <motion.div
      className={`absolute inset-0 overflow-hidden rounded-[inherit] z-[50] touch-none ${className}`}
      style={{ pointerEvents }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Panels */}
        <div className="absolute inset-0 flex pointer-events-none touch-none">
          {Array.from({ length: numPanels }).map((_, i) => (
            <Panel
              key={i}
              index={i}
              total={numPanels}
              order={staggerOrder}
              bg={getBg(i)}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* "UI HUB" text — visible while panels are mostly closed */}
        <motion.div
          className="relative z-10 pointer-events-none select-none text-center px-4"
          style={{ opacity: textOpacity, y: textY }}
        >
          <span
            className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #e0e7ff 55%, #c7d2fe 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 4px 20px rgba(255, 255, 255, 0.4))",
              // Prevent text from overflowing on tiny screens
              wordBreak: "keep-all",
              whiteSpace: "nowrap",
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
