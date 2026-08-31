'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SlidersHorizontal,
  Search,
  Check,
  X,
} from 'lucide-react';
import { ProductCard } from '@/components/ui/product-card';
import { Product, Category } from '@/types';
import { cn } from '@/lib/utils';

interface CatalogViewProps {
  title: string;
  subtitle?: string;
  brand: 'work_stuff' | 'good_stuff' | 'all';
  initialProducts: Product[];
  categories: Category[];
  activeCategorySlug?: string;
}

export function CatalogView({
  title,
  subtitle,
  brand,
  initialProducts,
  categories,
  activeCategorySlug,
}: CatalogViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    activeCategorySlug || 'all'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState<
    'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest'
  >('featured');
  const [maxPrice, setMaxPrice] = useState<number>(100);

  // Compute filtered & sorted products
  const filteredProducts = useMemo(() => {
    let list = [...initialProducts];

    // Filter by Brand
    if (brand !== 'all') {
      list = list.filter((p) => p.brand === brand);
    }

    // Filter by Category
    if (selectedCategory && selectedCategory !== 'all') {
      list = list.filter(
        (p) => p.categorySlug.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filter by In-Stock
    if (inStockOnly) {
      list = list.filter((p) => p.inStock);
    }

    // Filter by Max Price
    list = list.filter((p) => p.price <= maxPrice);

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'featured':
      default:
        list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return list;
  }, [initialProducts, brand, selectedCategory, inStockOnly, maxPrice, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setInStockOnly(false);
    setMaxPrice(100);
    setSortBy('featured');
  };

  const brandAccentColor =
    brand === 'work_stuff'
      ? 'text-amber-800 border-amber-300 bg-amber-50'
      : brand === 'good_stuff'
      ? 'text-rose-800 border-rose-300 bg-rose-50'
      : 'text-amber-800 border-amber-300 bg-amber-50';

  return (
    <div className="py-10 bg-slate-50 min-h-screen text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Banner */}
        <div className="mb-10 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 relative overflow-hidden shadow-sm">
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <span
                className={cn(
                  'text-[10px] font-heading font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full border shadow-xs',
                  brandAccentColor
                )}
              >
                {brand === 'work_stuff'
                  ? 'Professional Equipment & Tools'
                  : brand === 'good_stuff'
                  ? 'Detailing Chemicals & Cosmetics'
                  : 'Official Catalog'}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'} Available
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl font-black uppercase text-slate-900 tracking-tight leading-tight">
              {title}
            </h1>

            {subtitle && (
              <p className="text-sm text-slate-600 mt-2 leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={cn(
              'px-4 py-2 rounded-xl text-xs font-heading font-black uppercase tracking-wider transition-all whitespace-nowrap',
              selectedCategory === 'all'
                ? brand === 'good_stuff'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'bg-brand-amber text-slate-950 shadow-amber-glow'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300 shadow-xs'
            )}
          >
            All Categories ({initialProducts.length})
          </button>

          {categories.map((cat) => {
            const count = initialProducts.filter(
              (p) => p.categorySlug.toLowerCase() === cat.slug.toLowerCase()
            ).length;

            return (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={cn(
                  'px-4 py-2 rounded-xl text-xs font-heading font-black uppercase tracking-wider transition-all whitespace-nowrap',
                  selectedCategory === cat.slug
                    ? brand === 'good_stuff'
                      ? 'bg-rose-600 text-white shadow-sm'
                      : 'bg-brand-amber text-slate-950 shadow-amber-glow'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300 shadow-xs'
                )}
              >
                {cat.name} ({count})
              </button>
            );
          })}
        </div>

        {/* Controls Bar (Search, In-Stock, Sort) */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200 mb-8 shadow-sm">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by product name, feature, or code..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Quick Filters Group */}
          <div className="flex flex-wrap items-center gap-3">
            {/* In-Stock Toggle */}
            <button
              onClick={() => setInStockOnly(!inStockOnly)}
              className={cn(
                'flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all',
                inStockOnly
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300 shadow-xs'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:text-slate-900'
              )}
            >
              <div
                className={cn(
                  'flex h-3.5 w-3.5 items-center justify-center rounded border',
                  inStockOnly
                    ? 'bg-emerald-600 border-emerald-600 text-white'
                    : 'border-slate-400'
                )}
              >
                {inStockOnly && <Check className="w-2.5 h-2.5 stroke-[3]" />}
              </div>
              In Stock Only
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-semibold hidden sm:inline">
                Sort:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 uppercase tracking-wider focus:outline-none focus:border-amber-500 cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="newest">Newest Additions</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-3xl border border-slate-200 shadow-sm">
            <SlidersHorizontal className="h-12 w-12 text-slate-400 mb-4" />
            <h3 className="font-heading text-xl font-black uppercase text-slate-900 mb-2">
              No Detailing Products Match Your Filters
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mb-6">
              Try adjusting your search terms, changing the category, or resetting all active
              filters.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-2.5 rounded-xl bg-brand-amber text-slate-950 font-heading font-black text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors shadow-amber-glow"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
}
