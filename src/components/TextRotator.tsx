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
    <span
      className="relative inline-block overflow-hidden text-peach align-baseline"
      style={{
        height: "1.15em",
        perspective: "600px",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <span className="invisible whitespace-nowrap" aria-hidden="true">{words[index]}</span>
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
              opacity: absD === 0 ? 1 : 0,
              scale: absD === 0 ? 1 : 0.92,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 24,
            }}
            className="absolute left-0 block whitespace-nowrap origin-center"
            style={{
              top: "0",
              backfaceVisibility: "hidden",
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </span>
  );
}
