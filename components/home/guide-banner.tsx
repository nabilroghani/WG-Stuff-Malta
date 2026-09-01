'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, Droplets, Sun, Sparkles, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function GuideBanner() {
  const steps = [
    {
      icon: Droplets,
      title: 'Touchless Pre-Wash',
      desc: 'Clingy snow foam softens Sahara dust and airborne sand before any contact wash.',
    },
    {
      icon: Sparkles,
      title: 'Acidic Sour Shampoo',
      desc: 'Neutralizes Malta hard water limescale and restores ceramic water beading.',
    },
    {
      icon: Sun,
      title: 'Albino Soft Brushing',
      desc: 'Feather-tip agitation on badges and gloss black trims with zero micro-marring.',
    },
    {
      icon: BookOpen,
      title: '1-Pass 1100 GSM Drying',
      desc: 'The King towel glides over panels, eliminating water spots before they dry in the sun.',
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 relative overflow-hidden shadow-sm">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-amber-800 mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Pro Detailing Methodology</span>
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              The Perfect Mediterranean Wash
            </h2>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Malta&apos;s climate presents unique challenges: intense UV, hard borehole water, and airborne dust. Here is how our European system keeps your clear coat swirl-free.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={idx} index={idx} direction="up">
                  <div className="card-glow-animated h-full rounded-3xl p-[1px] border border-slate-200 hover:border-transparent transition-all shadow-2xs">
                    <div className="card-glow-inner p-6 rounded-3xl bg-white flex flex-col justify-between h-full group">
                      <div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 mb-4">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">
                          Phase 0{idx + 1}
                        </span>
                        <h4 className="font-heading text-base font-bold text-slate-900 mt-1 mb-2">
                          {step.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal className="mt-10 text-center">
            <Link
              href="/gifts"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 hover:text-amber-900 hover:underline"
            >
              Get The Complete Wash & Dry System Bundle <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
