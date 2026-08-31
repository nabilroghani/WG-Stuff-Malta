'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Award, Star, Truck } from 'lucide-react';
import { formatEUR } from '@/lib/utils';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-20 lg:py-24 bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200">
      {/* Background Subtle Pattern & Ambient Glow */}
      <div className="absolute inset-0 bg-subtle-grid opacity-70 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-amber-400/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-rose-400/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-amber-800">
                Official Malta Importer • Operating Since 2018
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-slate-900 leading-[0.95]">
              PRECISION <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700">
                DETAILING GEAR
              </span> <br />
              BUILT FOR PROS.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
              Europe&apos;s most respected detailing equipment and chemical cosmetics. From ultra-soft
              Albino brushes and 1100 GSM King drying towels to ceramic SiO2 detailers — imported
              directly to Malta.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/work-stuff"
                className="flex h-13 px-7 items-center justify-center gap-2 rounded-2xl bg-brand-amber hover:bg-amber-400 text-slate-950 font-heading font-black text-sm uppercase tracking-wider shadow-amber-glow transition-all duration-200"
              >
                Explore Work Stuff Pro <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/good-stuff"
                className="flex h-13 px-7 items-center justify-center gap-2 rounded-2xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 hover:text-rose-600 font-heading font-black text-sm uppercase tracking-wider shadow-sm transition-all duration-200"
              >
                Shop Good Stuff Chemicals
              </Link>
            </div>

            {/* Trust Points Ticker */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
              <div>
                <span className="font-heading text-2xl sm:text-3xl font-black text-slate-900 block">
                  100%
                </span>
                <span className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
                  Genuine EU Import
                </span>
              </div>

              <div>
                <span className="font-heading text-2xl sm:text-3xl font-black text-amber-600 block">
                  1100 GSM
                </span>
                <span className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
                  Twisted Pile Towels
                </span>
              </div>

              <div>
                <span className="font-heading text-2xl sm:text-3xl font-black text-emerald-600 block">
                  FREE
                </span>
                <span className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
                  Malta Delivery Over €50
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Visual Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl bg-white border border-slate-200 p-3 shadow-xl overflow-hidden group">
              {/* Highlight Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 border border-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=85"
                  alt="Work Stuff King Drying Towel Detailing"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Floating Pro Badge */}
                <div className="absolute top-4 left-4 backdrop-blur-md bg-white/90 px-3 py-1 rounded-full border border-amber-300 shadow-sm flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  <span className="text-[11px] font-heading font-black uppercase tracking-wider text-amber-900">
                    Flagship Equipment
                  </span>
                </div>
              </div>

              {/* Bottom Card Preview */}
              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                    Work Stuff Pro Line
                  </span>
                  <div className="flex items-center gap-1 text-amber-600 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
                    <span>5.0 (52 reviews)</span>
                  </div>
                </div>

                <h3 className="font-heading text-xl font-black uppercase text-slate-900 leading-tight mb-1">
                  KING Twisted Pile Drying Towel (1100 GSM)
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                  The monster 90x73cm Korean microfiber towel that dries entire vehicles in seconds
                  with zero swirls or streaks.
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <div>
                    <span className="font-heading text-2xl font-black text-slate-900">
                      {formatEUR(24.90)}
                    </span>
                    <span className="text-xs text-slate-400 ml-2 line-through font-semibold">
                      {formatEUR(28.00)}
                    </span>
                  </div>

                  <Link
                    href="/product/work-stuff-king-drying-towel"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-800 text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                  >
                    View Product <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Small Floating Assurance Pill */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-slate-900 uppercase">In Stock in Malta</span>
                <span className="text-[11px] text-slate-500">Same / Next Day Island Dispatch</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
