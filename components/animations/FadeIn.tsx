"use client";

import { motion, type Transition } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  inView?: boolean;
  duration?: number;
}

const directionMap = {
  up: { y: 24, x: 0 },
  down: { y: -24, x: 0 },
  left: { y: 0, x: 24 },
  right: { y: 0, x: -24 },
  none: { y: 0, x: 0 },
};

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className,
  inView = false,
  duration = 0.6,
}: FadeInProps) {
  const initial = {
    opacity: 0,
    ...directionMap[direction],
  };

  const animate = {
    opacity: 1,
    y: 0,
    x: 0,
  };

  const transition: Transition = {
    duration,
    ease: "easeOut",
    delay,
  };

  if (inView) {
    return (
      <motion.div
        initial={initial}
        whileInView={animate}
        viewport={{ once: true, margin: "-80px" }}
        transition={transition}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
