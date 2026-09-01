'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger index — each increment delays the animation a little more */
  index?: number;
  /** Direction the element enters from */
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  /** Distance in px the element travels */
  distance?: number;
  /** Play once vs every time it re-enters the viewport */
  once?: boolean;
}

const OFFSETS: Record<string, { x?: number; y?: number }> = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
  none: {},
};

/**
 * Wraps any content in a fade + slide reveal that triggers when it enters
 * the viewport on scroll. Use `index` to stagger a group of siblings.
 */
export function ScrollReveal({
  children,
  className,
  index = 0,
  direction = 'up',
  distance,
  once = true,
}: ScrollRevealProps) {
  const offset = OFFSETS[direction];
  const scaled =
    distance !== undefined
      ? Object.fromEntries(Object.entries(offset).map(([k, v]) => [k, v ? Math.sign(v) * distance : v]))
      : offset;

  const variants: Variants = {
    hidden: { opacity: 0, ...scaled },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
