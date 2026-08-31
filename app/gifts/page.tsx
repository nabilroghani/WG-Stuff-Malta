import React from 'react';
import type { Metadata } from 'next';
import { getGiftBundles } from '@/lib/data/products';
import { GiftCard } from '@/components/gifts/gift-card';
import { Gift, Sparkles, Truck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Detailing Gift Sets & Starter Bundles Malta | WG Stuff Malta',
  description:
    'Curated detailing gift packs, two-bucket wash kits, and complete enthusiast sets with special bundle discounts in Malta.',
};

export default function GiftsPage() {
  const bundles = getGiftBundles();

  return (
    <div className="py-10 bg-slate-50 min-h-screen text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 mb-12 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs font-heading font-black uppercase tracking-wider shadow-xs">
              <Gift className="w-3.5 h-3.5 text-amber-600" /> Curated Detailing Collections
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl font-black uppercase text-slate-900 tracking-tight leading-tight">
              DETAILING GIFT SETS & BUNDLES
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Carefully matched tool & chemical packages designed for maximum savings and foolproof
              results. Perfect as a gift for any petrolhead or as a complete upgrade for your own car
              care routine in Malta.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-600">
              <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
                <Truck className="w-4 h-4 text-amber-600" /> Free Island-Wide Malta Delivery
              </span>
              <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
                <Sparkles className="w-4 h-4 text-amber-600" /> Save up to 25% on bundle sets
              </span>
            </div>
          </div>
        </div>

        {/* Bundles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {bundles.map((bundle) => (
            <GiftCard key={bundle.id} bundle={bundle} />
          ))}
        </div>
      </div>
    </div>
  );
}
