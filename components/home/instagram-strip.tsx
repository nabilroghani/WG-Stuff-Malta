import React from 'react';
import Image from 'next/image';
import { Instagram, ArrowUpRight } from 'lucide-react';

export function InstagramStrip() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=600&q=80',
      caption: 'Snow foam pre-wash session in Malta',
    },
    {
      src: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80',
      caption: 'King drying towel 1-pass water pickup',
    },
    {
      src: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=600&q=80',
      caption: 'Albino brush agitation on emblem',
    },
    {
      src: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80',
      caption: 'SiO2 Ceramic Quick Detailer beading',
    },
    {
      src: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80',
      caption: 'Bleeding iron wheel cleaner in action',
    },
    {
      src: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80',
      caption: 'Passion Carnauba show wax liquid glow',
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col sm:flex-row sm:items-end justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-heading font-black uppercase tracking-widest text-amber-700">
            <Instagram className="w-3.5 h-3.5 text-amber-600" /> Community Detailing Showcase
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-black uppercase text-slate-900 tracking-tight mt-1">
            TAGGED #WGSTUFFMALTA
          </h2>
        </div>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-amber-700 inline-flex items-center gap-1 mt-3 sm:mt-0 transition-colors"
        >
          Follow On Instagram <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {images.map((item, idx) => (
          <a
            key={idx}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden rounded-2xl bg-slate-100 border border-slate-200 shadow-xs hover:shadow-md"
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
        ))}
      </div>
    </section>
  );
}
