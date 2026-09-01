'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Wrench, FlaskConical, CheckCircle2, Sparkles } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function BrandSplit() {
  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Two European Powerhouses • One Malta Storefront</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Engineered Hardware & Chemistry
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
            Whether you run a commercial detailing studio in Malta or take pride in your own garage, we supply both professional hardware tools and high-gloss detailing cosmetics.
          </p>
        </ScrollReveal>

        {/* 2-Column Split Cards with Animated Rotating Glow on Hover */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Work Stuff Pro Hardware */}
          <ScrollReveal index={0} direction="left">
            <div className="card-glow-animated h-full rounded-3xl p-[1px] border border-slate-200 hover:border-transparent transition-all">
              <div className="card-glow-inner relative overflow-hidden rounded-3xl p-8 sm:p-10 flex flex-col justify-between group min-h-[480px]">
                {/* Background Image with Crisp Light Gradient */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/home/detailing-brush.jpg"
                    alt="Work Stuff Professional Hardware"
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/75 to-slate-950/40" />
                </div>

                <div className="relative z-10 space-y-4 max-w-lg">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-bold shadow-xs">
                    <Wrench className="w-3.5 h-3.5" /> Professional Hardware & Towels
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Work Stuff Pro Detailing
                  </h3>

                  <p className="text-sm text-slate-200 leading-relaxed">
                    Industry-benchmark detailing brushes, 1100 GSM twisted pile drying towels, foam wash pads, and laser-cut microfibers built to withstand hundreds of wash cycles.
                  </p>

                  <ul className="space-y-2.5 pt-2 text-xs text-slate-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>ALBINO ultra-soft synthetic bristles safe for piano black trims</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>KING & PRINCE massive water-absorbing twisted pile towels</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>STORM & TYPHOON plush Korean microfiber wash pads</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>67+ Genuine European products stocked in Malta</span>
                    </li>
                  </ul>
                </div>

                <div className="relative z-10 pt-8">
                  <Link
                    href="/work-stuff"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-amber-glow transition-all"
                  >
                    <span>Shop Work Stuff Equipment</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Good Stuff Chemical Cosmetics */}
          <ScrollReveal index={1} direction="right">
            <div className="card-glow-animated h-full rounded-3xl p-[1px] border border-slate-200 hover:border-transparent transition-all">
              <div className="card-glow-inner relative overflow-hidden rounded-3xl p-8 sm:p-10 flex flex-col justify-between group min-h-[480px]">
                {/* Background Image with Crisp Light Gradient */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/home/ceramic-gloss.jpg"
                    alt="Good Stuff Detailing Chemistry"
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/75 to-slate-950/40" />
                </div>

                <div className="relative z-10 space-y-4 max-w-lg">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500 text-white text-xs font-bold shadow-xs">
                    <FlaskConical className="w-3.5 h-3.5" /> Chemical Care & Ceramics
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Good Stuff Car Chemistry
                  </h3>

                  <p className="text-sm text-slate-200 leading-relaxed">
                    Pleasantly scented, high-viscosity formulations designed for exceptional dwell time, foolproof lubricity, and deep ceramic protection with zero streaks.
                  </p>

                  <ul className="space-y-2.5 pt-2 text-xs text-slate-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>SNOW FOAMS with dense shaving-cream blanket & neutral pH</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>SOUR SHAMPOO active formula safe on ceramic coatings</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>SiO2 CERAMIC DETAILER with extreme water beading (&gt;105°)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>41+ Concentrated European formulas stocked in Malta</span>
                    </li>
                  </ul>
                </div>

                <div className="relative z-10 pt-8">
                  <Link
                    href="/good-stuff"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider shadow-ruby-glow transition-all"
                  >
                    <span>Shop Good Stuff Chemicals</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
