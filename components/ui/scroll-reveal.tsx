'use client';

import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

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
  /** Adds a small premium scale/rotation settle when the element enters view */
  effect?: 'none' | 'settle';
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
  effect = 'none',
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const offset = OFFSETS[direction];
  const scaled =
    distance !== undefined
      ? Object.fromEntries(Object.entries(offset).map(([k, v]) => [k, v ? Math.sign(v) * distance : v]))
      : offset;

  const settle = effect === 'settle' && !shouldReduceMotion;
  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...scaled,
      ...(settle ? { scale: 0.92, rotate: direction === 'left' ? -2.5 : 2.5 } : {}),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      ...(settle ? { scale: 1, rotate: 0 } : {}),
      transition: {
        duration: settle ? 0.72 : 0.6,
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
