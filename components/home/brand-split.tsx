import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';

export function BrandSplit() {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-heading font-black uppercase tracking-widest text-amber-700">
            Two World-Class Lines • One Malta Storefront
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase text-slate-900 tracking-tight mt-2">
            ENGINEERED FOR PERFECTION
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Whether you&apos;re running a commercial detailing studio in Malta or taking pride in your
            own garage, we supply both professional hardware tools and high-gloss detailing chemistry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Work Stuff Pro */}
          <div className="relative overflow-hidden rounded-3xl bg-white border border-amber-300 p-8 sm:p-10 flex flex-col justify-between group min-h-[460px] shadow-sm hover:shadow-xl transition-all">
            {/* Background Image with Light Gradient Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=80"
                alt="Work Stuff Detailing Tools"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-white/60" />
            </div>

            {/* Top Brand Header */}
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs font-heading font-black uppercase tracking-wider shadow-xs">
                <Wrench className="w-3.5 h-3.5 text-amber-600" /> Professional Hardware & Towels
              </div>

              <h3 className="font-heading text-3xl sm:text-4xl font-black uppercase text-slate-900 tracking-tight">
                WORK STUFF
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed max-w-md">
                Industry-benchmark detailing brushes, 1100 GSM twisted pile drying towels, foam wash
                pads, and laser-cut microfibers built to withstand hundreds of wash cycles.
              </p>

              {/* Bullet Features */}
              <ul className="space-y-2 pt-2 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  <span>ALBINO ultra-soft synthetic bristles for delicate piano black trims</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  <span>KING & PRINCE massive water-absorbing twisted pile towels</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  <span>STORM plush Korean microfiber wash mitts with foam cores</span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <div className="relative z-10 pt-8">
              <Link
                href="/work-stuff"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-amber hover:bg-amber-400 text-slate-950 font-heading font-black text-xs uppercase tracking-wider shadow-amber-glow transition-all"
              >
                Shop Work Stuff Equipment <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: Good Stuff Chemicals */}
          <div className="relative overflow-hidden rounded-3xl bg-white border border-rose-300 p-8 sm:p-10 flex flex-col justify-between group min-h-[460px] shadow-sm hover:shadow-xl transition-all">
            {/* Background Image with Light Gradient Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80"
                alt="Good Stuff Detailing Chemicals"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-white/60" />
            </div>

            {/* Top Brand Header */}
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-300 text-rose-800 text-xs font-heading font-black uppercase tracking-wider shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-rose-600" /> High Performance Detailing Chemistry
              </div>

              <h3 className="font-heading text-3xl sm:text-4xl font-black uppercase text-slate-900 tracking-tight">
                GOOD STUFF
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed max-w-md">
                Enthusiast & pro formulas crafted in Europe. High-lubricity shampoos, color-changing
                iron wheel cleaners, SiO2 ceramic boosters, and handcrafted Brazilian Carnauba show
                waxes.
              </p>

              {/* Bullet Features */}
              <ul className="space-y-2 pt-2 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-600" />
                  <span>Sour Shampoo formulated for Malta hard water mineral spot removal</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-600" />
                  <span>SiO2 Ceramic Quick Detailer with 3-month extreme water beading</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-600" />
                  <span>Bleeding Iron Wheel Cleaner safe on all painted & forged alloys</span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <div className="relative z-10 pt-8">
              <Link
                href="/good-stuff"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-heading font-black text-xs uppercase tracking-wider transition-all shadow-sm"
              >
                Shop Good Stuff Chemistry <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
