import React from 'react';
import Link from 'next/link';
import { BookOpen, Droplets, Sun, Sparkles, ArrowRight } from 'lucide-react';

export function GuideBanner() {
  const steps = [
    {
      icon: Droplets,
      title: 'Touchless Pre-Wash',
      desc: 'Clingy snow foam softens Sahara dust and sand before any sponge contact.',
    },
    {
      icon: Sparkles,
      title: 'Acidic Sour Shampoo',
      desc: 'Neutralizes Malta hard water limescale and restores ceramic water beading.',
    },
    {
      icon: Sun,
      title: 'Albino Soft Brushing',
      desc: 'Feather-tip agitation on emblems and gloss black trims with zero marring.',
    },
    {
      icon: BookOpen,
      title: '1-Pass 1100 GSM Drying',
      desc: 'The King towel glides over panels, eliminating water spots before they bake in the sun.',
    },
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 relative overflow-hidden shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-heading font-black uppercase tracking-widest text-amber-700">
              Pro Detailing Methodology
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase text-slate-900 tracking-tight mt-1">
              THE PERFECT MEDITERRANEAN WASH
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Malta&apos;s climate presents unique challenges: intense UV, hard borehole water, and
              airborne dust. Here is how our European system keeps your clear coat swirl-free.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative group hover:border-amber-400 transition-colors shadow-xs"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 border border-amber-200 text-amber-700 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-heading font-black text-amber-800 uppercase">
                    Phase 0{idx + 1}
                  </span>
                  <h4 className="font-heading text-lg font-black uppercase text-slate-900 mt-0.5 mb-1.5">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/gifts"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 hover:text-amber-900 hover:underline"
            >
              Get The Complete Wash & Dry System Bundle <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
