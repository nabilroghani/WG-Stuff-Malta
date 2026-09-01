'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductCard } from '@/components/ui/product-card';
import { PRODUCTS } from '@/lib/data/products';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Product } from '@/types';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { cn } from '@/lib/utils';

export function FeaturedSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'work_stuff' | 'good_stuff' | 'best_sellers'>('all');

  const filteredProducts: Product[] = PRODUCTS.filter((p) => {
    if (activeTab === 'work_stuff') return p.brand === 'work_stuff' && p.featured;
    if (activeTab === 'good_stuff') return p.brand === 'good_stuff' && p.featured;
    if (activeTab === 'best_sellers') return p.isBestSeller;
    return p.featured;
  }).slice(0, 8);

  return (
    <section className="py-20 bg-slate-50/80 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Tabs */}
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>High Demand Detailing Gear</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Featured & Best Sellers
            </h2>
            <p className="text-sm text-slate-600 mt-1.5">
              The most requested microfiber gear, detailing brushes, and ceramic maintenance formulas in Malta.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {[
              { id: 'all', label: 'All Featured' },
              { id: 'work_stuff', label: 'Work Stuff Pro' },
              { id: 'good_stuff', label: 'Good Stuff Care' },
              { id: 'best_sellers', label: 'Top Rated' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  'px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 whitespace-nowrap cursor-pointer',
                  activeTab === tab.id
                    ? 'bg-slate-900 text-amber-400 font-bold shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-950 border border-slate-200 hover:border-slate-300 shadow-2xs'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Product Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} animationIndex={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/work-stuff"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-900 font-bold text-xs uppercase tracking-wider transition-all shadow-2xs"
          >
            <span>View Complete Online Inventory</span>
            <ArrowRight className="w-4 h-4 text-amber-600" />
          </Link>
        </div>
      </div>
    </section>
  );
}
