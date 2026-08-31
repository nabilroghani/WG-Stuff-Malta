'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, Trash2 } from 'lucide-react';
import { useWishlistStore } from '@/lib/store/wishlist-store';
import { PRODUCTS } from '@/lib/data/products';
import { ProductCard } from '@/components/ui/product-card';

export default function WishlistPage() {
  const { productIds, clearWishlist } = useWishlistStore();

  const wishlistProducts = PRODUCTS.filter((p) => productIds.includes(p.id));

  return (
    <div className="py-12 bg-slate-50 min-h-screen text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-heading font-black uppercase tracking-widest text-rose-600">
              <Heart className="w-3.5 h-3.5 fill-current" /> Saved Detailing Equipment
            </div>
            <h1 className="font-heading text-3xl sm:text-5xl font-black uppercase text-slate-900 tracking-tight mt-1">
              YOUR WISHLIST ({wishlistProducts.length})
            </h1>
          </div>

          {wishlistProducts.length > 0 && (
            <button
              onClick={clearWishlist}
              className="text-xs text-slate-500 hover:text-rose-600 transition-colors flex items-center gap-1 self-start sm:self-auto font-medium"
            >
              <Trash2 className="w-3.5 h-3.5" /> Clear Wishlist
            </button>
          )}
        </div>

        {wishlistProducts.length === 0 ? (
          <div className="py-20 text-center rounded-3xl bg-white border border-slate-200 max-w-md mx-auto p-8 shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 border border-slate-200 text-slate-400 mx-auto mb-4">
              <Heart className="h-8 w-8" />
            </div>
            <h2 className="font-heading text-xl font-black uppercase text-slate-900 mb-2">
              YOUR WISHLIST IS EMPTY
            </h2>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Click the heart icon on any Work Stuff tool or Good Stuff chemical to save items for
              later.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/work-stuff"
                className="px-5 py-2.5 rounded-xl bg-brand-amber text-slate-950 font-heading font-black text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors shadow-amber-glow"
              >
                Shop Work Stuff Pro
              </Link>
              <Link
                href="/good-stuff"
                className="px-5 py-2.5 rounded-xl bg-white text-slate-900 border border-slate-300 hover:border-slate-400 font-heading font-black text-xs uppercase tracking-wider transition-colors shadow-xs"
              >
                Shop Good Stuff Care
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlistProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
