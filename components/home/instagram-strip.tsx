'use client';

import React from 'react';
import Image from 'next/image';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

// Real WG Stuff Malta category photography — used here as a visual gallery
// strip. Swap for a live Instagram embed/API feed once the client shares
// API credentials; for now these are the brand's own real product shots,
// not stand-ins for actual tagged customer posts.
const images = [
  {
    src: 'https://static.wixstatic.com/media/f0347b_241a6b313f4446ccb661ecf7784495f4~mv2.png',
    caption: 'Washing Equipment',
  },
  {
    src: 'https://static.wixstatic.com/media/f0347b_8d46a8fe1c904ed19fcdce9b09bb20dc~mv2.png',
    caption: 'Washing Liquids',
  },
  {
    src: 'https://static.wixstatic.com/media/f0347b_97f799c5b7f84783b89905fc68755e97~mv2.png',
    caption: 'Drying Equipment',
  },
  {
    src: 'https://static.wixstatic.com/media/f0347b_0d2ddd95e87b400ca22c6e4e4857f489~mv2.png',
    caption: 'Interior Liquids',
  },
  {
    src: 'https://static.wixstatic.com/media/f0347b_457e6fff94fd494ab6c36c8ab67f3362~mv2.png',
    caption: 'Brushes',
  },
  {
    src: 'https://static.wixstatic.com/media/f0347b_6b11a10c003145e4b3d6edac98aa52cb~mv2.png',
    caption: 'Wheel Care',
  },
];

export function InstagramStrip() {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col sm:flex-row sm:items-end justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-heading font-black uppercase tracking-widest text-amber-700">
            <Instagram className="w-3.5 h-3.5 text-amber-600" /> Follow Our Detailing Gear
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-black uppercase text-slate-900 tracking-tight mt-1">
            @WORK_STUFF_MALTA
          </h2>
        </div>
        <a
          href="https://www.instagram.com/work_stuff_malta/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-amber-700 inline-flex items-center gap-1 mt-3 sm:mt-0 transition-colors"
        >
          Follow On Instagram <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </ScrollReveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {images.map((item, idx) => (
          <ScrollReveal key={idx} index={idx} distance={20}>
            <a
              href="https://www.instagram.com/work_stuff_malta/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl bg-slate-100 border border-slate-200 shadow-xs hover:shadow-md block"
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center">
                <Instagram className="w-6 h-6 text-white" />
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
