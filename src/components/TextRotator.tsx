"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TextRotatorProps {
  words: string[];
  intervalMs?: number;
}

export default function TextRotator({
  words,
  intervalMs = 2500,
}: TextRotatorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [words.length, intervalMs]);

  return (
    <div className="flex items-center font-light text-[clamp(28px,5vw,80px)] leading-[0.92] tracking-[-0.04em] text-ink">
      <div
        className="relative flex-1 overflow-hidden"
        style={{
          height: "2.6em",
          perspective: "600px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
        }}
      >
        {words.map((word, i) => {
          let distance = i - index;
          const half = words.length / 2;
          if (distance > half) distance -= words.length;
          else if (distance < -half) distance += words.length;

          const absD = Math.abs(distance);

          return (
            <motion.span
              key={word}
              initial={false}
              animate={{
                rotateX: distance * -22,
                y: `${distance * 95}%`,
                opacity: absD === 0 ? 1 : absD === 1 ? 0.3 : 0,
                scale: absD === 0 ? 1 : 0.92,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 24,
              }}
              className="absolute inset-x-0 block whitespace-nowrap text-peach origin-center"
              style={{
                top: "50%",
                marginTop: "-0.46em",
                backfaceVisibility: "hidden",
              }}
            >
              {word}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
}
