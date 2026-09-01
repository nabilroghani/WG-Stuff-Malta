'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Droplets, Sparkles } from 'lucide-react';

const DROPLETS = [
  { size: 74, left: '7%', top: '13%', startX: -85, startY: -50, delay: 0.02, float: 11, duration: 4.6 },
  { size: 34, left: '22%', top: '67%', startX: 75, startY: 55, delay: 0.1, float: 8, duration: 3.8 },
  { size: 48, left: '69%', top: '11%', startX: 55, startY: -75, delay: 0.16, float: 13, duration: 5.1 },
  { size: 92, left: '84%', top: '56%', startX: 95, startY: 45, delay: 0.05, float: 10, duration: 4.2 },
  { size: 25, left: '56%', top: '80%', startX: -40, startY: 70, delay: 0.22, float: 7, duration: 3.5 },
  { size: 18, left: '42%', top: '8%', startX: 22, startY: -45, delay: 0.28, float: 9, duration: 4.0 },
];

/** A visual pause between commerce sections that explains the ceramic-care benefit. */
export function CeramicGlossShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.04]);
  const imageY = useTransform(scrollYProgress, [0, 1], [36, -36]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(245,158,11,0.2),transparent_28%),radial-gradient(circle_at_85%_75%,rgba(225,29,72,0.16),transparent_30%)]" />

      {!shouldReduceMotion && (
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          {DROPLETS.map((droplet, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: droplet.startX, y: droplet.startY, scale: 0.35 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              animate={{ y: [0, -droplet.float, 0, droplet.float * 0.55, 0] }}
              transition={{
                y: { delay: 0.8 + droplet.delay, duration: droplet.duration, repeat: Infinity, ease: 'easeInOut' },
                opacity: { delay: droplet.delay, duration: 0.28 },
                x: { delay: droplet.delay, type: 'spring', stiffness: 95, damping: 15 },
                scale: { delay: droplet.delay, type: 'spring', stiffness: 95, damping: 15 },
              }}
              drag="x"
              dragConstraints={{ left: -110, right: 110 }}
              dragElastic={0.16}
              dragMomentum={false}
              whileHover={{ scale: 1.12, cursor: 'grab' }}
              whileDrag={{ scale: 1.16, cursor: 'grabbing' }}
              title="Click and drag left or right"
              style={{ width: droplet.size, height: droplet.size, left: droplet.left, top: droplet.top }}
              className="absolute touch-none rounded-full border border-white/30 bg-gradient-to-br from-white/55 via-sky-100/20 to-transparent shadow-[inset_8px_8px_14px_rgba(255,255,255,0.3),inset_-8px_-8px_14px_rgba(14,116,144,0.18),0_10px_35px_rgba(125,211,252,0.12)] backdrop-blur-[2px]"
            >
              <span className="absolute left-[22%] top-[18%] h-[20%] w-[33%] rounded-full bg-white/60 blur-[1px]" />
            </motion.span>
          ))}
        </div>
      )}

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          <div className="absolute -inset-3 rounded-[2rem] border border-amber-300/25" />
          <div className="relative aspect-[5/4] overflow-hidden rounded-[1.7rem] border border-white/15 bg-slate-900 shadow-2xl">
            <motion.div style={shouldReduceMotion ? undefined : { scale: imageScale, y: imageY }} className="absolute inset-0">
              <Image
                src="/images/home/wax-beading.jpg"
                alt="Water beading on protected car paint"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/70 via-slate-950/5 to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-2xl border border-white/20 bg-slate-950/55 px-4 py-3 backdrop-blur-md">
              <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-amber-300">Hydrophobic Finish</span>
              <span className="mt-0.5 block text-xs font-medium text-white">Water lifts, beads, and rolls away.</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-200 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" /> Ceramic gloss technology
          </div>
          <h2 className="mt-5 font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            Make Every Wash Look Like a Fresh Ceramic Treatment.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
            SiO2 maintenance formulas leave a slick, high-gloss layer that helps Malta dust, water spots, and road film release before they bond to the paint.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3 text-left">
            {[
              ['Mirror gloss', 'Deep, wet-look reflections'],
              ['Water beading', 'Hydrophobic protection'],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm">
                <Droplets className="mb-2 h-4 w-4 text-sky-200" />
                <span className="block text-xs font-bold text-white">{title}</span>
                <span className="mt-1 block text-[11px] leading-relaxed text-slate-400">{detail}</span>
              </div>
            ))}
          </div>

          <Link href="/good-stuff/exterior" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 transition-colors hover:bg-amber-300">
            Explore ceramic care
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
