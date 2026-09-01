'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Star, ShoppingBag, Eye, Heart, Check, Sparkles } from 'lucide-react';
import { Product } from '@/types';
import { formatEUR, cn } from '@/lib/utils';
import { useCartStore } from '@/lib/store/cart-store';
import { useWishlistStore } from '@/lib/store/wishlist-store';
import { useUIStore } from '@/lib/store/ui-store';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
  /** Used on the home page to stagger premium card entrances. */
  animationIndex?: number;
}

export function ProductCard({ product, priority = false, animationIndex }: ProductCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isAdded, setIsAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const { isInWishlist, toggleWishlist } = useWishlistStore();
  const setQuickViewProduct = useUIStore((state) => state.setQuickViewProduct);

  const inWishlist = isInWishlist(product.id);
  const isWorkStuff = product.brand === 'work_stuff';

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
      initial={animationIndex === undefined || shouldReduceMotion
        ? { opacity: 0, y: 15 }
        : { opacity: 0, y: 28, scale: 0.94, rotate: animationIndex % 2 === 0 ? -2 : 2 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: animationIndex ? animationIndex * 0.055 : 0, ease: [0.16, 1, 0.3, 1] }}
      className="card-glow-animated h-full rounded-3xl p-[1px] border border-slate-200 hover:border-transparent transition-all shadow-studio hover:shadow-studio-hover"
    >
      <div className="card-glow-inner flex flex-col justify-between overflow-hidden rounded-3xl group bg-white">
        {/* Product Image Stage (Uncropped, aspect-square, studio lighting) */}
        <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-b from-slate-50/80 via-slate-50/40 to-white p-6 flex items-center justify-center">
          <Link href={`/product/${product.slug}`} className="relative h-full w-full block">
            <Image
              src={product.images[0] || 'https://static.wixstatic.com/media/f0347b_8d46a8fe1c904ed19fcdce9b09bb20dc~mv2.png'}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={priority}
              className="object-contain object-center transition-transform duration-500 group-hover:scale-108 drop-shadow-md"
            />
          </Link>

          {/* Top Floating Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
            <span
              className={cn(
                'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide uppercase backdrop-blur-md border shadow-2xs',
                isWorkStuff
                  ? 'bg-amber-500/10 text-amber-900 border-amber-300'
                  : 'bg-rose-500/10 text-rose-900 border-rose-300'
              )}
            >
              <span
                className={cn(
                  'w-1.5 h-1.5 rounded-full animate-pulse',
                  isWorkStuff ? 'bg-amber-500' : 'bg-rose-500'
                )}
              />
              {isWorkStuff ? 'Work Stuff Pro' : 'Good Stuff'}
            </span>

            {discountPercent && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-rose-600 text-white shadow-2xs">
                -{discountPercent}% OFF
              </span>
            )}
          </div>

          {/* Quick Action Floating Buttons (Wishlist + Quick View) */}
          <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-20">
            {/* Wishlist Button */}
            <button
              onClick={handleToggleWishlist}
              aria-label="Add to wishlist"
              className={cn(
                'flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200 shadow-sm',
                inWishlist
                  ? 'bg-rose-500 text-white shadow-rose-200'
                  : 'bg-white/90 text-slate-600 hover:text-rose-600 hover:bg-white border border-slate-200/80'
              )}
            >
              <Heart className={cn('h-3.5 w-3.5', inWishlist && 'fill-current')} />
            </button>

            {/* Quick View Button */}
            <button
              onClick={handleQuickView}
              aria-label="Quick product preview"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-600 hover:text-slate-950 hover:bg-white border border-slate-200/80 transition-all duration-200 shadow-sm opacity-90 group-hover:opacity-100"
            >
              <Eye className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Stock Guarantee Pill */}
          <div className="absolute bottom-2.5 left-3 z-10 pointer-events-none">
            <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-700 bg-white/95 px-2 py-0.5 rounded-full border border-emerald-200 shadow-2xs">
              <Sparkles className="w-2.5 h-2.5 text-emerald-500" /> Malta In-Stock
            </span>
          </div>
        </div>

        {/* Product Information Card Body */}
        <div className="p-4 sm:p-5 flex flex-1 flex-col justify-between border-t border-slate-100">
          <div>
            {/* Category & Rating */}
            <div className="flex items-center justify-between gap-2 text-xs mb-1.5">
              <span className="text-[11px] font-medium text-slate-500 truncate">
                {product.category}
              </span>
              <div className="flex items-center gap-1 text-amber-500 text-[11px] font-bold">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                <span>{product.rating.toFixed(1)}</span>
                <span className="text-slate-400 text-[10px]">({product.reviewCount})</span>
              </div>
            </div>

            {/* Product Title */}
            <Link
              href={`/product/${product.slug}`}
              className="font-heading font-bold text-sm sm:text-base text-slate-900 line-clamp-2 hover:text-amber-800 transition-colors leading-snug"
            >
              {product.name}
            </Link>

            {/* Volume / Size Indicator */}
            {product.volumeOrSize && (
              <span className="text-[11px] text-slate-500 font-medium block mt-1">
                {product.volumeOrSize}
              </span>
            )}
          </div>

          {/* Price & Action Button Footer */}
          <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between gap-2">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-heading text-lg sm:text-xl font-bold text-slate-900">
                  {formatEUR(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-slate-400 line-through font-medium">
                    {formatEUR(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>

            {/* Quick Add Button */}
            <button
              onClick={handleAddToCart}
              aria-label={`Add ${product.name} to cart`}
              className={cn(
                'flex items-center justify-center gap-1.5 h-9 px-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-xs',
                isAdded
                  ? 'bg-emerald-600 text-white'
                  : isWorkStuff
                  ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-amber-glow'
                  : 'bg-rose-600 hover:bg-rose-500 text-white shadow-ruby-glow'
              )}
            >
              {isAdded ? (
                <>
                  <Check className="h-3.5 w-3.5 stroke-[3]" /> Added
                </>
              ) : (
                <>
                  <ShoppingBag className="h-3.5 w-3.5" /> Add
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
