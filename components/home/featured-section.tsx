'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductCard } from '@/components/ui/product-card';
import { PRODUCTS } from '@/lib/data/products';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Product } from '@/types';

export function FeaturedSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'work_stuff' | 'good_stuff' | 'best_sellers'>('all');

  const filteredProducts: Product[] = PRODUCTS.filter((p) => {
    if (activeTab === 'work_stuff') return p.brand === 'work_stuff' && p.featured;
    if (activeTab === 'good_stuff') return p.brand === 'good_stuff' && p.featured;
    if (activeTab === 'best_sellers') return p.isBestSeller;
    return p.featured;
  }).slice(0, 8);

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-heading font-black uppercase tracking-widest text-amber-700">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" /> High Demand Detailing Gear
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase text-slate-900 tracking-tight mt-1">
              FEATURED & BEST SELLERS
            </h2>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {[
              { id: 'all', label: 'All Featured' },
              { id: 'work_stuff', label: 'Work Stuff Pro' },
              { id: 'good_stuff', label: 'Good Stuff Chemicals' },
              { id: 'best_sellers', label: 'Best Sellers' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-heading font-black uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-amber-500 text-slate-950 font-black shadow-amber-glow'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/work-stuff"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-amber-400 text-slate-900 font-heading font-black text-xs uppercase tracking-wider transition-all shadow-sm"
          >
            View Complete Online Inventory <ArrowRight className="w-4 h-4 text-amber-600" />
          </Link>
        </div>
      </div>
    </section>
  );
}
