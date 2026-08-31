'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { useUIStore } from '@/lib/store/ui-store';
import { PRODUCTS } from '@/lib/data/products';
import { formatEUR, cn, getBrandBadge } from '@/lib/utils';

export function SearchModal() {
  const { isSearchOpen, setIsSearchOpen } = useUIStore();
  const [query, setQuery] = useState('');
  const [brandFilter, setBrandFilter] = useState<'all' | 'work_stuff' | 'good_stuff'>('all');

  // Keyboard shortcut listener (CMD+K or /)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(!isSearchOpen);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  const filteredProducts = useMemo(() => {
    if (!query.trim() && brandFilter === 'all') {
      return PRODUCTS.slice(0, 6); // Show top 6 recommendations when empty
    }

    return PRODUCTS.filter((product) => {
      const matchesBrand = brandFilter === 'all' || product.brand === brandFilter;
      const q = query.toLowerCase().trim();
      const matchesQuery =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.brand.toLowerCase().includes(q);

      return matchesBrand && matchesQuery;
    });
  }, [query, brandFilter]);

  if (!isSearchOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsSearchOpen(false)}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs"
        />

        <div className="flex min-h-full items-start justify-center p-4 sm:pt-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl transform overflow-hidden rounded-3xl bg-white border border-slate-200 text-left shadow-2xl"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 p-4 sm:p-5 border-b border-slate-200 bg-white">
              <Search className="w-5 h-5 text-amber-500 ml-2" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Work Stuff brushes, Good Stuff shampoos, drying towels..."
                autoFocus
                className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-sm sm:text-base font-medium focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => setIsSearchOpen(false)}
                className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs text-slate-500 font-mono hover:text-slate-800"
              >
                ESC
              </button>
            </div>

            {/* Quick Brand Filter Tabs */}
            <div className="flex items-center gap-2 px-5 py-3 bg-slate-50 border-b border-slate-200 text-xs font-semibold">
              <span className="text-slate-500 mr-1">Brand:</span>
              <button
                onClick={() => setBrandFilter('all')}
                className={cn(
                  'px-3 py-1 rounded-lg transition-all',
                  brandFilter === 'all'
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                )}
              >
                All Gear
              </button>
              <button
                onClick={() => setBrandFilter('work_stuff')}
                className={cn(
                  'px-3 py-1 rounded-lg transition-all',
                  brandFilter === 'work_stuff'
                    ? 'bg-amber-100 text-amber-900 border border-amber-300 font-bold'
                    : 'text-slate-600 hover:text-amber-800'
                )}
              >
                Work Stuff Pro
              </button>
              <button
                onClick={() => setBrandFilter('good_stuff')}
                className={cn(
                  'px-3 py-1 rounded-lg transition-all',
                  brandFilter === 'good_stuff'
                    ? 'bg-rose-100 text-rose-900 border border-rose-300 font-bold'
                    : 'text-slate-600 hover:text-rose-800'
                )}
              >
                Good Stuff Chemicals
              </button>
            </div>

            {/* Results Container */}
            <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2 bg-white">
              {!query.trim() && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-500 font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Popular Detailing Gear in Malta
                </div>
              )}

              {filteredProducts.length === 0 ? (
                <div className="py-12 text-center">
                  <p className="text-sm text-slate-600">No detailing products found matching &ldquo;{query}&rdquo;</p>
                  <p className="text-xs text-slate-400 mt-1">Try searching for &ldquo;Albino&rdquo;, &ldquo;Sour Shampoo&rdquo;, or &ldquo;King Towel&rdquo;</p>
                </div>
              ) : (
                filteredProducts.map((product) => {
                  const badge = getBrandBadge(product.brand);
                  return (
                    <Link
                      key={product.id}
                      href={`/product/${product.slug}`}
                      onClick={() => setIsSearchOpen(false)}
                      className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all group"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-slate-100 border border-slate-200 flex-shrink-0">
                          <Image
                            src={
                              product.images[0] ||
                              'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80'
                            }
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="text-left">
                          <div className="flex items-center gap-2">
                            <span
                              className={cn(
                                'text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border shadow-xs',
                                badge.bgClass
                              )}
                            >
                              {product.brand === 'work_stuff' ? 'Work Stuff' : 'Good Stuff'}
                            </span>
                            <span className="text-[11px] text-slate-500 font-medium">{product.category}</span>
                          </div>
                          <h4 className="font-sans font-bold text-sm text-slate-900 group-hover:text-amber-700 transition-colors mt-0.5">
                            {product.name}
                          </h4>
                          <span className="text-xs text-slate-500 font-medium">
                            {product.volumeOrSize}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-right">
                        <span className="font-heading text-lg font-black text-slate-900">
                          {formatEUR(product.price)}
                        </span>
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-500 group-hover:text-amber-700 group-hover:border-amber-400 transition-colors shadow-xs">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </Link>
                  );
                })
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
