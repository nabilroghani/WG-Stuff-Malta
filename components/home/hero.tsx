'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles, Gem, Zap, Crown, Shield, Award, Star, Truck } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 25 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.03, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.9, 0]);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const ringRotateReverse = useTransform(scrollYProgress, [0, 1], [0, -75]);

  // Slides Data tailored for Light Mode aesthetic
  const slides = [
    {
      id: 1,
      badge: "Official Malta Stockist",
      title: "Work Stuff Pro Hardware",
      subtitle: "Industry-benchmark Albino brushes, 1100 GSM twisted King drying towels, and swirl-free wash pads crafted in Europe.",
      gradient: "from-amber-600 via-amber-500 to-rose-600",
      ctaText: "Shop Work Stuff",
      ctaLink: "/work-stuff",
      secondaryText: "Good Stuff Range",
      secondaryLink: "/good-stuff",
      icon: Gem,
      tag: "Pro Equipment",
      image: "/images/home/detailing-brush.jpg",
      highlight: "67 Tools In Malta"
    },
    {
      id: 2,
      badge: "High-Gloss Ceramic Chemistry",
      title: "Good Stuff Car Care",
      subtitle: "pH-neutral snow foams, SiO2 ceramic detailers, and gentle interior formulas engineered for hyper-slickness and gloss.",
      gradient: "from-rose-600 via-amber-600 to-orange-500",
      ctaText: "Shop Chemistry",
      ctaLink: "/good-stuff",
      secondaryText: "Gift Sets",
      secondaryLink: "/gifts",
      icon: Zap,
      tag: "Ceramics & Shampoos",
      image: "/images/home/ceramic-gloss.jpg",
      highlight: "41 European Formulations"
    },
    {
      id: 3,
      badge: "Mediterranean Proven System",
      title: "Swirl-Free Wash Arsenal",
      subtitle: "Touchless snow foam pre-wash systems formulated specifically for Malta's climate, Sahara dust, and borehole water.",
      gradient: "from-amber-600 via-rose-600 to-purple-600",
      ctaText: "Explore Bundles",
      ctaLink: "/gifts",
      secondaryText: "Contact Specialist",
      secondaryLink: "/contact",
      icon: Crown,
      tag: "Complete Systems",
      image: "/images/home/foam-wash.jpg",
      highlight: "Free Malta Delivery > €50"
    }
  ];

  // Auto rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Mouse tracking for smooth 3D tilt
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x * 40);
        mouseY.set(y * 40);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[calc(100svh-6rem)] min-h-[460px] max-h-[640px] overflow-hidden bg-gradient-to-b from-[#FDFBF7] via-white to-slate-50 border-b border-slate-200/80 flex items-center justify-center"
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-gradient-to-r from-amber-200/40 via-rose-200/25 to-purple-200/30 blur-[120px] pointer-events-none rounded-full" />

      {/* Decorative SVG rings: they drift on scroll, then visually frame the hero card. */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <motion.svg
            viewBox="0 0 360 360"
            style={{ rotate: ringRotate }}
            className="absolute -right-16 top-1/2 h-[380px] w-[380px] -translate-y-1/2 text-amber-400/35 lg:right-[3%]"
          >
            <circle cx="180" cy="180" r="138" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="8 12" />
            <circle cx="180" cy="180" r="98" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="2 14" />
            <circle cx="180" cy="180" r="168" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />
          </motion.svg>
          <motion.svg
            viewBox="0 0 260 260"
            style={{ rotate: ringRotateReverse }}
            className="absolute -left-24 bottom-[-105px] h-[270px] w-[270px] text-rose-400/25 lg:left-[7%]"
          >
            <circle cx="130" cy="130" r="98" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 10" />
            <circle cx="130" cy="130" r="64" fill="none" stroke="currentColor" strokeWidth="1" />
          </motion.svg>
        </div>
      )}
      
      {/* Subtle Light Micro-Dot Grid */}
      <div className="absolute inset-0 bg-subtle-grid opacity-50 pointer-events-none" />

      {/* Main Content Container (Light Luxury Proportions) */}
      <div className="relative h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center w-full">

          {/* Left Column (Light Mode Headline, Value Prop, CTAs, Stats) */}
          <motion.div
            style={{ opacity }}
            className="lg:col-span-7 space-y-3.5 sm:space-y-4 relative z-10 text-center sm:text-left"
          >
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/90 shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                {slides[activeIndex].badge}
              </span>
            </motion.div>

            {/* Dynamic Sliding Title (Crisp Dark Text on Light BG) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.35 }}
                className="space-y-2"
              >
                <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-[1.12]">
                  Experience{' '}
                  <span className={cn(
                    "bg-gradient-to-r text-transparent bg-clip-text block sm:inline",
                    slides[activeIndex].gradient
                  )}>
                    {slides[activeIndex].title}
                  </span>
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 max-w-lg font-normal leading-relaxed">
                  {slides[activeIndex].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 pt-1"
            >
              <Link
                href={slides[activeIndex].ctaLink}
                className="group relative px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider overflow-hidden transition-all duration-200 shadow-amber-glow flex items-center gap-2 cursor-pointer"
              >
                <span>{slides[activeIndex].ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href={slides[activeIndex].secondaryLink}
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-800 font-semibold text-xs uppercase tracking-wider transition-colors shadow-2xs cursor-pointer"
              >
                {slides[activeIndex].secondaryText}
              </Link>
            </motion.div>

            {/* Malta Trust Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap items-center justify-center sm:justify-start gap-5 sm:gap-7 pt-3.5 border-t border-slate-200 text-xs text-slate-600"
            >
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-600" />
                <div>
                  <span className="font-bold text-slate-900 text-xs block">Free Island Delivery</span>
                  <span className="text-[10px] text-slate-500">Over €50 across Malta</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-600" />
                <div>
                  <span className="font-bold text-slate-900 text-xs block">100% Genuine Import</span>
                  <span className="text-[10px] text-slate-500">Direct European Stockist</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
                <div>
                  <span className="font-bold text-slate-900 text-xs block">4.98 / 5.0 Rating</span>
                  <span className="text-[10px] text-slate-500">Trusted in Malta Studios</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column (Light Luxury 3D Studio Showcase Card) */}
          <motion.div
            className="hidden lg:flex lg:col-span-5 justify-center items-center"
            style={{
              y: y1,
              scale,
            }}
          >
            <motion.div
              style={{
                rotateX: useTransform(springY, [-40, 40], [6, -6]),
                rotateY: useTransform(springX, [-40, 40], [-6, 6]),
              }}
              className="relative w-full max-w-[340px] xl:max-w-[370px] aspect-[4/3] sm:aspect-square"
            >
              {/* Outer Subtle Golden Ring */}
              <div className="absolute -inset-2.5 rounded-3xl border border-amber-300/40 pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full bg-white rounded-3xl border border-slate-200/90 p-3.5 shadow-xl overflow-hidden flex flex-col justify-between"
                >
                  {/* Card Media Stage */}
                  <div className="relative w-full h-[74%] rounded-2xl overflow-hidden bg-slate-100">
                    <Image
                      src={slides[activeIndex].image}
                      alt={slides[activeIndex].title}
                      fill
                      priority
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    {/* Floating Brand Badge */}
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold">
                      {React.createElement(slides[activeIndex].icon, {
                        className: "w-3 h-3 text-amber-400"
                      })}
                      <span>{slides[activeIndex].tag}</span>
                    </div>

                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white text-xs font-semibold">
                      <span className="text-amber-300 font-bold text-[11px]">{slides[activeIndex].highlight}</span>
                    </div>
                  </div>

                  {/* Card Bottom Quick Link */}
                  <div className="p-1.5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">
                        Featured Collection
                      </span>
                      <span className="font-heading font-bold text-xs sm:text-sm text-slate-900">
                        {slides[activeIndex].title}
                      </span>
                    </div>

                    <Link
                      href={slides[activeIndex].ctaLink}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 transition-colors shadow-sm"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Slide Navigation Dots (Bottom Centered) */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
              activeIndex === index
                ? "w-7 bg-amber-500"
                : "w-1.5 bg-slate-300 hover:bg-slate-400"
            )}
          />
        ))}
      </div>
    </div>
  );
}
