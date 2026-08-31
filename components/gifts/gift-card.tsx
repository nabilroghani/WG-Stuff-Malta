'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Check, CheckCircle2, Gift } from 'lucide-react';
import { GiftBundle, Product } from '@/types';
import { useCartStore } from '@/lib/store/cart-store';
import { formatEUR } from '@/lib/utils';

interface GiftCardProps {
  bundle: GiftBundle;
}

export function GiftCard({ bundle }: GiftCardProps) {
  const [isAdded, setIsAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddBundle = () => {
    // Convert bundle into a cart product item
    const bundleProduct: Product = {
      id: bundle.id,
      slug: bundle.slug,
      name: bundle.name,
      brand: 'work_stuff',
      category: 'Gift Bundles',
      categorySlug: 'gifts',
      price: bundle.price,
      originalPrice: bundle.originalValue,
      description: bundle.description,
      features: bundle.itemsIncluded,
      images: bundle.images,
      inStock: bundle.inStock,
      stockCount: 15,
      featured: true,
      rating: 5.0,
      reviewCount: 22,
    };

    addItem(bundleProduct, 1, 'Gift Set Box');
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const savingsAmount = bundle.originalValue - bundle.price;

  return (
    <div className="rounded-3xl bg-white border border-slate-200 hover:border-amber-400 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl flex flex-col justify-between group">
      {/* Top Visual Image Banner */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
        <Image
          src={bundle.images[0] || 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1000&q=85'}
          alt={bundle.name}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Top Badge */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-heading font-black uppercase tracking-wider bg-brand-amber text-slate-950 shadow-md">
            <Gift className="w-3.5 h-3.5" /> {bundle.badge || 'Bundle Special'}
          </span>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-rose-600 text-white shadow-md">
            Save {bundle.savingsPercentage}%
          </span>
        </div>
      </div>

      {/* Bundle Body */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div>
          <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-slate-900 tracking-tight leading-tight group-hover:text-amber-700 transition-colors">
            {bundle.name}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            {bundle.description}
          </p>

          {/* Included Items Checklist */}
          <div className="mt-6 space-y-2 pt-4 border-t border-slate-100">
            <span className="text-[11px] font-heading font-black uppercase tracking-wider text-amber-800 block mb-1">
              Included In This Collection ({bundle.itemsIncluded.length} Items):
            </span>
            <ul className="space-y-1.5">
              {bundle.itemsIncluded.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pricing & Add Bundle Action */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-baseline gap-3">
              <span className="font-heading text-3xl font-black text-slate-900">
                {formatEUR(bundle.price)}
              </span>
              <span className="text-sm text-slate-400 line-through font-semibold">
                {formatEUR(bundle.originalValue)}
              </span>
            </div>
            <span className="text-[11px] text-emerald-700 font-bold block">
              You save {formatEUR(savingsAmount)} instantly
            </span>
          </div>

          <button
            onClick={handleAddBundle}
            className={`flex h-12 px-6 items-center justify-center gap-2 rounded-xl font-heading font-black text-xs uppercase tracking-wider transition-all duration-200 shadow-md ${
              isAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-brand-amber text-slate-950 hover:bg-amber-400 shadow-amber-glow'
            }`}
          >
            <AnimatePresence mode="wait">
              {isAdded ? (
                <motion.span
                  key="added"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="flex items-center gap-1.5"
                >
                  <Check className="w-4 h-4 stroke-[3]" /> Added Bundle to Cart!
                </motion.span>
              ) : (
                <motion.span
                  key="idle"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-1.5"
                >
                  <ShoppingBag className="w-4 h-4" /> Add Bundle to Cart
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </div>
  );
}
