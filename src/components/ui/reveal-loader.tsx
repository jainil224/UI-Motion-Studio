"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

type StaggerOrder = "left-to-right" | "right-to-left" | "center-out" | "edges-in";

interface RevealLoaderProps {
  text?: string;
  bgColors?: string[];
  staggerOrder?: StaggerOrder;
  textFadeDelay?: number;
  numPanels?: number;
  duration?: number;
  pauseBetweenLoops?: number;
  onComplete?: () => void;
  className?: string;
}

function getPanelDelay(index: number, total: number, order: StaggerOrder): number {
  switch (order) {
    case "left-to-right":
      return (index / total) * 0.4;
    case "right-to-left":
      return ((total - 1 - index) / total) * 0.4;
    case "center-out": {
      const center = (total - 1) / 2;
      return (Math.abs(index - center) / center) * 0.4;
    }
    case "edges-in": {
      const center = (total - 1) / 2;
      return ((center - Math.abs(index - center)) / center) * 0.4;
    }
    default:
      return (index / total) * 0.4;
  }
}

const RevealLoader: React.FC<RevealLoaderProps> = ({
  text = "UI HUB",
  bgColors = ["#0a0a0a", "#1a1a2e"],
  staggerOrder = "center-out",
  textFadeDelay = 0.2,
  numPanels = 8,
  duration = 0.65,
  pauseBetweenLoops = 1200,
  onComplete,
  className = "",
}) => {
  const [cycleKey, setCycleKey] = useState(0);
  const [phase, setPhase] = useState<"cover" | "reveal">("cover");
  const panelsDoneCount = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleNextCycle = useCallback(() => {
    timerRef.current = setTimeout(() => {
      panelsDoneCount.current = 0;
      setPhase("cover");
      setCycleKey((k) => k + 1);
    }, pauseBetweenLoops);
  }, [pauseBetweenLoops]);

  const handlePanelDone = useCallback(() => {
    panelsDoneCount.current += 1;
    if (panelsDoneCount.current === numPanels) {
      onComplete?.();
      scheduleNextCycle();
    }
  }, [numPanels, onComplete, scheduleNextCycle]);

  // After each new cycle starts with "cover", switch to "reveal" after a short pause
  useEffect(() => {
    if (phase === "cover") {
      const t = setTimeout(() => setPhase("reveal"), 100);
      return () => clearTimeout(t);
    }
  }, [phase, cycleKey]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div
      className={`absolute inset-0 overflow-hidden rounded-3xl pointer-events-none z-[50] ${className}`}
    >
      <div key={cycleKey} className="absolute inset-0 flex items-center justify-center">
        {/* Panels */}
        <div className="absolute inset-0 flex">
          {Array.from({ length: numPanels }).map((_, i) => {
            const delay = getPanelDelay(i, numPanels, staggerOrder);
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
                style={{ background: bg, transformOrigin: "top" }}
                initial={{ scaleY: 1 }}
                animate={phase === "reveal" ? { scaleY: 0 } : { scaleY: 1 }}
                transition={
                  phase === "reveal"
                    ? {
                        duration,
                        delay: textFadeDelay + delay,
                        ease: [0.76, 0, 0.24, 1],
                      }
                    : { duration: 0 }
                }
                onAnimationComplete={phase === "reveal" ? handlePanelDone : undefined}
              />
            );
          })}
        </div>

        {/* Text — visible only while panels cover the card */}
        <motion.div
          className="relative z-10 pointer-events-none select-none text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={
            phase === "cover"
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: -10 }
          }
          transition={{
            duration: 0.4,
            delay: phase === "cover" ? 0.05 : 0,
            ease: "easeOut",
          }}
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
    </div>
  );
};

export default RevealLoader;
