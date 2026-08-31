import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export function CategoryBento() {
  const featuredCategories = [
    {
      title: 'Detailing Brushes',
      brand: 'Work Stuff',
      brandColor: 'text-amber-800 bg-amber-50 border-amber-200',
      description: 'Feather-tip Albino & stiff Black brushes for delicate trims and wheels.',
      href: '/work-stuff/brushes',
      image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80',
      colSpan: 'lg:col-span-8',
      count: '5 Models',
    },
    {
      title: '1100 GSM Drying Towels',
      brand: 'Work Stuff',
      brandColor: 'text-amber-800 bg-amber-50 border-amber-200',
      description: 'Massive water-absorbing Korean twisted pile technology.',
      href: '/work-stuff/drying',
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
      colSpan: 'lg:col-span-4',
      count: '4 Models',
    },
    {
      title: 'Wheel & Iron Decontamination',
      brand: 'Good Stuff',
      brandColor: 'text-rose-800 bg-rose-50 border-rose-200',
      description: 'Color-changing iron removers & satin tyre dressings.',
      href: '/good-stuff/wheels',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
      colSpan: 'lg:col-span-4',
      count: '3 Products',
    },
    {
      title: 'Ceramic Detailers & Exterior',
      brand: 'Good Stuff',
      brandColor: 'text-rose-800 bg-rose-50 border-rose-200',
      description: 'SiO2 ceramic boosters, gloss amplifiers & bug removers.',
      href: '/good-stuff/exterior',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
      colSpan: 'lg:col-span-4',
      count: '4 Products',
    },
    {
      title: 'Passion Luxury Series',
      brand: 'Good Stuff',
      brandColor: 'text-rose-800 bg-rose-50 border-rose-200',
      description: 'Show-grade Brazilian T1 Carnauba paste wax and gloss detailers.',
      href: '/good-stuff/passion-series',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
      colSpan: 'lg:col-span-4',
      count: '2 Products',
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-heading font-black uppercase tracking-widest text-amber-700">
              Curated Category Hub
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase text-slate-900 tracking-tight mt-1">
              EXPLORE BY CATEGORY
            </h2>
          </div>
          <Link
            href="/work-stuff"
            className="text-xs font-bold uppercase tracking-wider text-amber-700 hover:underline inline-flex items-center gap-1 mt-4 sm:mt-0"
          >
            Browse Full Equipment Directory <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {featuredCategories.map((cat, idx) => (
            <Link
              key={idx}
              href={cat.href}
              className={`group relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-200 hover:border-amber-400 transition-all duration-300 min-h-[260px] p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-xl ${cat.colSpan}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-15"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/90 to-transparent" />
              </div>

              {/* Top Header */}
              <div className="relative z-10 flex items-center justify-between">
                <span className={`text-[11px] font-heading font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border shadow-xs ${cat.brandColor}`}>
                  {cat.brand} • {cat.count}
                </span>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-700 group-hover:text-amber-700 group-hover:border-amber-400 transition-colors shadow-sm">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 mt-12">
                <h3 className="font-heading text-2xl font-black uppercase text-slate-900 tracking-tight group-hover:text-amber-700 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-600 max-w-md mt-1 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
