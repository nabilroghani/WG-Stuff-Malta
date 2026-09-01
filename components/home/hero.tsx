'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Crown, Droplets, Gauge, Gem, Shield, Sparkles, Star, Truck, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const SLIDES = [
  { badge: 'Official Malta Stockist', title: 'Work Stuff Pro Hardware', subtitle: 'Industry-benchmark Albino brushes, 1100 GSM twisted King drying towels, and swirl-free wash pads crafted in Europe.', gradient: 'from-amber-600 via-amber-500 to-rose-600', cta: 'Shop Work Stuff', href: '/work-stuff', second: 'Good Stuff Range', secondHref: '/good-stuff', icon: Gem, tag: 'Pro Equipment', image: '/images/home/detailing-brush.jpg', highlight: '67 Tools In Malta' },
  { badge: 'High-Gloss Ceramic Chemistry', title: 'Good Stuff Car Care', subtitle: 'pH-neutral snow foams, SiO2 ceramic detailers, and gentle interior formulas engineered for hyper-slickness and gloss.', gradient: 'from-rose-600 via-amber-600 to-orange-500', cta: 'Shop Chemistry', href: '/good-stuff', second: 'Gift Sets', secondHref: '/gifts', icon: Zap, tag: 'Ceramics & Shampoos', image: '/images/home/ceramic-gloss.jpg', highlight: '41 European Formulations' },
  { badge: 'Mediterranean Proven System', title: 'Swirl-Free Wash Arsenal', subtitle: "Touchless snow foam pre-wash systems formulated specifically for Malta's climate, Sahara dust, and borehole water.", gradient: 'from-amber-600 via-rose-600 to-purple-600', cta: 'Explore Bundles', href: '/gifts', second: 'Contact Specialist', secondHref: '/contact', icon: Crown, tag: 'Complete Systems', image: '/images/home/foam-wash.jpg', highlight: 'Free Malta Delivery > €50' },
];

const FLOATING_MARKERS = [
  { Icon: Droplets, left: '5%', top: '17%', color: 'text-sky-500', tone: 'bg-sky-50/90 border-sky-200', duration: 5.2, float: 16, delay: 0 },
  { Icon: Sparkles, left: '11%', top: '68%', color: 'text-amber-500', tone: 'bg-amber-50/90 border-amber-200', duration: 4.4, float: 12, delay: 0.5 },
  { Icon: Gauge, left: '86%', top: '18%', color: 'text-rose-500', tone: 'bg-rose-50/90 border-rose-200', duration: 5.8, float: 18, delay: 0.2 },
  { Icon: Shield, left: '91%', top: '69%', color: 'text-emerald-600', tone: 'bg-emerald-50/90 border-emerald-200', duration: 4.9, float: 13, delay: 0.8 },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [gridPointer, setGridPointer] = useState({ x: 50, y: 50, active: false });
  const shouldReduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 25 });
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const cardScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.03, 0.94]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.9, 0]);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const ringRotateBack = useTransform(scrollYProgress, [0, 1], [0, -75]);
  const activeSlide = SLIDES[activeIndex];

  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = window.setInterval(() => setActiveIndex((previous) => (previous + 1) % SLIDES.length), 5500);
    return () => window.clearInterval(timer);
  }, [shouldReduceMotion]);

  const handleHeroMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const bounds = containerRef.current?.getBoundingClientRect();
    if (!bounds || shouldReduceMotion) return;
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    mouseX.set((x / 100 - 0.5) * 40);
    mouseY.set((y / 100 - 0.5) * 40);
    setGridPointer({ x, y, active: true });
  };

  return (
    <section ref={containerRef} onMouseMove={handleHeroMouseMove} onMouseLeave={() => setGridPointer((current) => ({ ...current, active: false }))} className="relative flex h-[calc(100svh-6rem)] min-h-[460px] max-h-[640px] w-full items-center justify-center overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-[#FDFBF7] via-white to-slate-50">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[320px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-amber-200/40 via-rose-200/25 to-purple-200/30 blur-[120px]" />
      <div
        style={{ '--grid-x': `${gridPointer.x}%`, '--grid-y': `${gridPointer.y}%`, '--grid-open': gridPointer.active ? 1 : 0 } as React.CSSProperties}
        className={cn('interactive-hero-grid pointer-events-none absolute inset-0', gridPointer.active && 'interactive-hero-grid--active')}
      />
      {!shouldReduceMotion && <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.svg viewBox="0 0 360 360" style={{ rotate: ringRotate }} className="absolute -right-16 top-1/2 h-[380px] w-[380px] -translate-y-1/2 text-amber-400/35 lg:right-[3%]"><circle cx="180" cy="180" r="138" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="8 12" /><circle cx="180" cy="180" r="98" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="2 14" /><circle cx="180" cy="180" r="168" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" /></motion.svg>
        <motion.svg viewBox="0 0 260 260" style={{ rotate: ringRotateBack }} className="absolute -bottom-24 -left-24 h-[270px] w-[270px] text-rose-400/25 lg:left-[7%]"><circle cx="130" cy="130" r="98" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 10" /><circle cx="130" cy="130" r="64" fill="none" stroke="currentColor" strokeWidth="1" /></motion.svg>
      </div>}

      {/* Always-moving, draggable detailing motifs. They stay out of the content area. */}
      {!shouldReduceMotion && <div className="pointer-events-none absolute inset-0 z-20 hidden lg:block" aria-hidden="true">
        {FLOATING_MARKERS.map(({ Icon, left, top, color, tone, duration, float, delay }) => (
          <motion.div
            key={left}
            drag="x"
            dragConstraints={{ left: -105, right: 105 }}
            dragElastic={0.14}
            dragMomentum={false}
            animate={{ y: [0, -float, 0, float * 0.45, 0], rotate: [0, 7, 0, -5, 0] }}
            transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.12, cursor: 'grab' }}
            whileDrag={{ scale: 1.16, cursor: 'grabbing' }}
            title="Click and drag left or right"
            style={{ left, top }}
            className={cn('pointer-events-auto absolute flex h-11 w-11 touch-none items-center justify-center rounded-2xl border shadow-lg backdrop-blur-md', tone)}
          >
            <Icon className={cn('h-5 w-5', color)} />
          </motion.div>
        ))}
      </div>}

      <div className="relative z-10 flex h-full w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 items-center gap-5 lg:grid-cols-12 lg:gap-8">
          <motion.div style={{ opacity: contentOpacity }} className="relative z-10 space-y-3.5 text-center sm:space-y-4 sm:text-left lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white px-3 py-1 shadow-2xs"><Sparkles className="h-3.5 w-3.5 animate-pulse text-amber-500" /><span className="text-[10px] font-bold uppercase tracking-wider text-slate-800 sm:text-[11px]">{activeSlide.badge}</span></motion.div>
            <AnimatePresence mode="wait"><motion.div key={activeIndex} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 15 }} transition={{ duration: 0.35 }} className="space-y-2"><h1 className="font-heading text-3xl font-bold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">Experience <span className={cn('bg-gradient-to-r bg-clip-text text-transparent sm:inline', activeSlide.gradient)}>{activeSlide.title}</span></h1><p className="max-w-lg text-xs font-normal leading-relaxed text-slate-600 sm:text-sm">{activeSlide.subtitle}</p></motion.div></AnimatePresence>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="flex flex-wrap items-center justify-center gap-2.5 pt-1 sm:justify-start"><Link href={activeSlide.href} className="group flex items-center gap-2 rounded-full bg-amber-400 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-amber-glow transition-all hover:bg-amber-300 sm:px-7 sm:py-3"><span>{activeSlide.cta}</span><ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></Link><Link href={activeSlide.secondHref} className="rounded-full border border-slate-200/90 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-800 shadow-2xs transition-colors hover:bg-slate-50 sm:px-6 sm:py-3">{activeSlide.second}</Link></motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.25 }} className="flex flex-wrap items-center justify-center gap-5 border-t border-slate-200 pt-3.5 text-xs text-slate-600 sm:justify-start sm:gap-7"><Trust icon={<Truck className="h-4 w-4 text-amber-600" />} title="Free Island Delivery" detail="Over €50 across Malta" /><Trust icon={<Shield className="h-4 w-4 text-emerald-600" />} title="100% Genuine Import" detail="Direct European Stockist" /><Trust icon={<Star className="h-4 w-4 fill-amber-400 text-amber-500" />} title="4.98 / 5.0 Rating" detail="Trusted in Malta Studios" /></motion.div>
          </motion.div>

          <motion.div className="hidden items-center justify-center lg:col-span-5 lg:flex" style={{ y: cardY, scale: cardScale }}><motion.div style={{ rotateX: useTransform(springY, [-40, 40], [6, -6]), rotateY: useTransform(springX, [-40, 40], [-6, 6]) }} className="relative aspect-square w-full max-w-[340px] xl:max-w-[370px]"><div className="pointer-events-none absolute -inset-2.5 rounded-3xl border border-amber-300/40" /><AnimatePresence mode="wait"><motion.div key={activeIndex} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.4 }} className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-3.5 shadow-xl"><div className="relative h-[74%] w-full overflow-hidden rounded-2xl bg-slate-100"><Image src={activeSlide.image} alt={activeSlide.title} fill priority className="object-cover transition-transform duration-700 hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" /><div className="absolute left-2.5 top-2.5 flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-950/80 px-2.5 py-0.5 text-[10px] font-bold text-white backdrop-blur-md">{React.createElement(activeSlide.icon, { className: 'h-3 w-3 text-amber-400' })}<span>{activeSlide.tag}</span></div><span className="absolute bottom-2.5 left-2.5 text-[11px] font-bold text-amber-300">{activeSlide.highlight}</span></div><div className="flex items-center justify-between p-1.5"><div><span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">Featured Collection</span><span className="font-heading text-xs font-bold text-slate-900 sm:text-sm">{activeSlide.title}</span></div><Link href={activeSlide.href} className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-slate-950 shadow-sm transition-colors hover:bg-amber-300"><ArrowRight className="h-3.5 w-3.5" /></Link></div></motion.div></AnimatePresence></motion.div></motion.div>
        </div>
      </div>
      <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 sm:bottom-4">{SLIDES.map((_, index) => <button key={index} onClick={() => setActiveIndex(index)} aria-label={`Go to slide ${index + 1}`} className={cn('h-1.5 rounded-full transition-all duration-300', activeIndex === index ? 'w-7 bg-amber-500' : 'w-1.5 bg-slate-300 hover:bg-slate-400')} />)}</div>
    </section>
  );
}

function Trust({ icon, title, detail }: { icon: React.ReactNode; title: string; detail: string }) {
  return <div className="flex items-center gap-2">{icon}<div><span className="block text-xs font-bold text-slate-900">{title}</span><span className="text-[10px] text-slate-500">{detail}</span></div></div>;
}
