'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

/** A fixed, decorative route line that draws itself as the About page is read. */
export function ScrollDrawnCurve() {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 85, damping: 28, restDelta: 0.001 });

  return (
    <>
      <div className="pointer-events-none fixed bottom-5 left-2 top-28 z-30 hidden w-16 lg:block" aria-hidden="true">
        <svg viewBox="0 0 82 1000" preserveAspectRatio="none" className="h-full w-full overflow-visible">
        <path
          d="M41 8 C5 90 76 138 40 230 S7 372 43 462 S78 600 40 692 S9 830 42 992"
          fill="none"
          stroke="rgb(226 232 240)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="2 9"
        />
        <motion.path
          d="M41 8 C5 90 76 138 40 230 S7 372 43 462 S78 600 40 692 S9 830 42 992"
          fill="none"
          stroke="url(#about-curve-gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ pathLength }}
        />
        <defs>
          <linearGradient id="about-curve-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="55%" stopColor="#fb7185" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
        </svg>
      </div>
    </>
  );
}
