'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShoppingBag, Eye, Heart, Check, Sparkles } from 'lucide-react';
import { Product } from '@/types';
import { formatEUR, cn, getBrandBadge } from '@/lib/utils';
import { useCartStore } from '@/lib/store/cart-store';
import { useWishlistStore } from '@/lib/store/wishlist-store';
import { useUIStore } from '@/lib/store/ui-store';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const [isAdded, setIsAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const { isInWishlist, toggleWishlist } = useWishlistStore();
  const setQuickViewProduct = useUIStore((state) => state.setQuickViewProduct);

  const inWishlist = isInWishlist(product.id);
  const brandBadge = getBrandBadge(product.brand);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setQuickViewProduct(product);
  };

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col rounded-2xl bg-white border border-slate-200 hover:border-amber-400 transition-all duration-300 hover:shadow-card-hover overflow-hidden"
    >
      {/* Top Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <Link href={`/product/${product.slug}`} className="block h-full w-full">
          <Image
            src={product.images[0] || 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80'}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          <span
            className={cn(
              'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase backdrop-blur-md border shadow-sm',
              brandBadge.bgClass
            )}
          >
            <span className={cn('w-1.5 h-1.5 rounded-full', brandBadge.dotClass)} />
            {product.brand === 'work_stuff' ? 'Work Stuff' : 'Good Stuff'}
          </span>

          {discountPercent && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-rose-600 text-white shadow-sm">
              -{discountPercent}% OFF
            </span>
          )}

          {product.isBestSeller && !discountPercent && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-amber-400 text-slate-950 shadow-sm">
              <Sparkles className="w-2.5 h-2.5" /> Best Seller
            </span>
          )}
        </div>

        {/* Action Overlay Buttons (Wishlist & Quick View) */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
          <button
            onClick={handleToggleWishlist}
            aria-label="Add to wishlist"
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md border transition-all duration-200 shadow-sm',
              inWishlist
                ? 'bg-rose-500 text-white border-rose-500'
                : 'bg-white/90 text-slate-700 border-slate-200 hover:text-rose-600 hover:bg-white'
            )}
          >
            <Heart className={cn('h-4 w-4', inWishlist && 'fill-current')} />
          </button>

          <button
            onClick={handleQuickView}
            aria-label="Quick view"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-slate-700 hover:text-amber-600 hover:bg-white transition-all duration-200 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 shadow-sm"
          >
            <Eye className="h-4 w-4" />
          </button>
        </div>

        {/* Stock Status Pill on Hover */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center z-20">
            <span className="px-4 py-1.5 rounded-full bg-rose-50 border border-rose-300 text-rose-700 text-xs font-bold uppercase tracking-wider shadow-md">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Product Information */}
      <div className="flex flex-1 flex-col p-5">
        {/* Category & Rating */}
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="font-semibold tracking-wide uppercase text-[11px] text-slate-500">
            {product.category}
          </span>
          <div className="flex items-center gap-1 text-amber-600 font-bold">
            <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
            <span>{product.rating.toFixed(1)}</span>
            <span className="text-slate-400 font-normal">({product.reviewCount})</span>
          </div>
        </div>

        {/* Title */}
        <Link href={`/product/${product.slug}`} className="group/link">
          <h3 className="font-sans font-bold text-slate-900 text-base leading-snug line-clamp-2 group-hover/link:text-amber-600 transition-colors mb-1.5">
            {product.name}
          </h3>
        </Link>

        {/* Short Description */}
        <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed flex-1">
          {product.shortDescription || product.description}
        </p>

        {/* Price & Add to Cart Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-auto">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-heading text-2xl font-black tracking-tight text-slate-900">
                {formatEUR(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-slate-400 line-through font-semibold">
                  {formatEUR(product.originalPrice)}
                </span>
              )}
            </div>
            {product.volumeOrSize && (
              <span className="text-[11px] text-slate-500 font-medium block">
                {product.volumeOrSize}
              </span>
            )}
          </div>

          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={cn(
              'relative flex h-10 px-4 items-center justify-center gap-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm',
              isAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-brand-amber text-slate-950 hover:bg-amber-400 hover:shadow-amber-glow font-black'
            )}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isAdded ? (
                <motion.span
                  key="added"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="flex items-center gap-1.5"
                >
                  <Check className="w-4 h-4 stroke-[3]" /> Added
                </motion.span>
              ) : (
                <motion.span
                  key="idle"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="flex items-center gap-1.5"
                >
                  <ShoppingBag className="w-4 h-4" /> Add
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
