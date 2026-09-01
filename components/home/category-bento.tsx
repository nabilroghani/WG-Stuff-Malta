'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { cn } from '@/lib/utils';

const featuredCategories = [
  {
    title: 'Touchless & Contact Wash',
    brand: 'Work Stuff Pro',
    brandTheme: 'work_stuff',
    itemCount: '16 Products',
    description: 'High-density foam pads, Storm & Hurricane mitts, and detailing buckets for 100% swirl-free contact washing.',
    href: '/work-stuff/wash',
    image: '/images/home/foam-wash.jpg',
    colSpan: 'lg:col-span-8',
  },
  {
    title: 'Twisted Pile Drying Towels',
    brand: 'Work Stuff Pro',
    brandTheme: 'work_stuff',
    itemCount: '6 Towels',
    description: '1100 GSM Korean microfibers capable of drying entire vehicles in a single pass without streaks.',
    href: '/work-stuff/drying',
    image: '/images/home/drying-towel.jpg',
    colSpan: 'lg:col-span-4',
  },
  {
    title: 'Precision Detailing Brushes',
    brand: 'Work Stuff Pro',
    brandTheme: 'work_stuff',
    itemCount: '10 Brushes',
    description: 'The industry-benchmark Albino, Black, and Rubber brushes safe for delicate piano black trims.',
    href: '/work-stuff/brushes',
    image: '/images/home/detailing-brush.jpg',
    colSpan: 'lg:col-span-4',
  },
  {
    title: 'SiO2 Ceramic Quick Detailers',
    brand: 'Good Stuff Care',
    brandTheme: 'good_stuff',
    itemCount: '7 Formulas',
    description: 'Instant hydrophobic water beading, liquid mirror gloss, and UV ceramic shield protection.',
    href: '/good-stuff/exterior',
    image: '/images/home/ceramic-gloss.jpg',
    colSpan: 'lg:col-span-4',
  },
  {
    title: 'Interior Cleaners & Leather',
    brand: 'Good Stuff Care',
    brandTheme: 'good_stuff',
    itemCount: '8 Formulas',
    description: 'Natural matte dressings, gentle foaming leather cleansers, and fabric stain neutralizers.',
    href: '/good-stuff/interior',
    image: '/images/home/interior-detailing.jpg',
    colSpan: 'lg:col-span-4',
  },
  {
    title: 'Wheel & Chemical Decontamination',
    brand: 'Good Stuff Care',
    brandTheme: 'good_stuff',
    itemCount: '11 Formulas',
    description: 'Color-changing iron decontaminants, safe alkaline wheel gels, and non-greasy satin tyre dressings.',
    href: '/good-stuff/wheels',
    image: '/images/home/wheel-decon.jpg',
    colSpan: 'lg:col-span-12',
  },
];

export function CategoryBento() {
  return (
    <section id="collections" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Curated Detailing Categories</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Explore by Detailing Discipline
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-xl">
              From swirl-free washing equipment to high-gloss ceramic care, discover professional tools formulated for peak results.
            </p>
          </div>
          <Link
            href="/work-stuff"
            className="text-xs font-semibold text-amber-800 hover:text-amber-900 inline-flex items-center gap-1 mt-4 sm:mt-0 group"
          >
            Browse Full Equipment Directory{' '}
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </ScrollReveal>

        {/* Bento Grid with Animated Perimeter Glow on Hover */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {featuredCategories.map((cat, idx) => {
            const isWorkStuff = cat.brandTheme === 'work_stuff';

            return (
              <ScrollReveal
                key={cat.title}
                index={idx}
                direction={idx % 2 === 0 ? 'left' : 'right'}
                effect="settle"
                className={cat.colSpan}
              >
                <div className="card-glow-animated h-full rounded-3xl p-[1px] border border-slate-200 hover:border-transparent transition-all">
                  <div className="card-glow-inner flex flex-col justify-between overflow-hidden rounded-3xl group min-h-[300px] relative">
                    {/* Background Cinematic Image with Light Overlay */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <Image
                        src={cat.image}
                        alt={cat.title}
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Gradient overlay for perfect text contrast and light luxury feel */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20" />
                    </div>

                    {/* Top Row: Brand Badge + Arrow */}
                    <div className="relative z-10 p-6 sm:p-7 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          className={cn(
                            'text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full backdrop-blur-md shadow-xs',
                            isWorkStuff
                              ? 'bg-amber-400 text-slate-950 font-bold'
                              : 'bg-rose-500 text-white font-bold'
                          )}
                        >
                          {cat.brand}
                        </span>
                        <span className="text-[11px] font-medium text-slate-200 bg-slate-950/50 px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                          {cat.itemCount}
                        </span>
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-900 group-hover:bg-white transition-all shadow-md group-hover:scale-110">
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>

                    {/* Bottom Row: Title + Description */}
                    <div className="relative z-10 p-6 sm:p-7 pt-12">
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-200 mt-1.5 leading-relaxed max-w-lg">
                        {cat.description}
                      </p>

                      <div className="mt-4">
                        <Link
                          href={cat.href}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-amber-300 transition-colors"
                        >
                          <span>Explore Collection</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
