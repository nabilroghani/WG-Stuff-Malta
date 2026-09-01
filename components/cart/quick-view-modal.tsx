'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, ShoppingBag, Plus, Minus, Check, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useUIStore } from '@/lib/store/ui-store';
import { useCartStore } from '@/lib/store/cart-store';
import { formatEUR, cn } from '@/lib/utils';

export function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct } = useUIStore();
  const addItem = useCartStore((state) => state.addItem);

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  if (!quickViewProduct) return null;

  const isWorkStuff = quickViewProduct.brand === 'work_stuff';
  const currentSize = selectedSize || quickViewProduct.sizeOptions?.[0] || quickViewProduct.volumeOrSize;

  const handleAddToCart = () => {
    addItem(quickViewProduct, quantity, currentSize);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      setQuickViewProduct(null);
    }, 1200);
  };

  const handleClose = () => {
    setQuickViewProduct(null);
    setQuantity(1);
    setSelectedImageIndex(0);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs"
        />

        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.35 }}
            className="relative transform overflow-hidden rounded-3xl bg-white border border-slate-200 text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-3xl"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100/90 border border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-white transition-colors shadow-xs"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
              {/* Product Gallery Column */}
              <div className="flex flex-col gap-4">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-200/80 p-6 flex items-center justify-center shadow-inner">
                  <Image
                    src={
                      quickViewProduct.images[selectedImageIndex] ||
                      quickViewProduct.images[0] ||
                      'https://static.wixstatic.com/media/f0347b_8d46a8fe1c904ed19fcdce9b09bb20dc~mv2.png'
                    }
                    alt={quickViewProduct.name}
                    fill
                    className="object-contain object-center drop-shadow-md"
                  />

                  {/* Brand Floating Pill */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={cn(
                        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-heading font-black tracking-wider uppercase border shadow-xs',
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
                  </div>
                </div>

                {quickViewProduct.images.length > 1 && (
                  <div className="flex gap-2">
                    {quickViewProduct.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImageIndex(idx)}
                        className={cn(
                          'relative h-16 w-16 overflow-hidden rounded-xl border-2 p-1 bg-slate-50 transition-all',
                          selectedImageIndex === idx
                            ? isWorkStuff
                              ? 'border-amber-500 shadow-sm'
                              : 'border-rose-500 shadow-sm'
                            : 'border-slate-200 hover:border-slate-400'
                        )}
                      >
                        <Image src={img} alt="thumbnail" fill className="object-contain p-1" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Guarantee */}
                <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-[11px] text-slate-600 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Genuine EU Detailing Gear • Dispatched in Malta</span>
                </div>
              </div>

              {/* Product Info Column */}
              <div className="flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Category & Rating */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-400 uppercase tracking-wider text-[11px]">
                      {quickViewProduct.category}
                    </span>
                    <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                      <span className="font-bold text-slate-800 text-[11px]">
                        {quickViewProduct.rating.toFixed(1)}
                      </span>
                      <span className="text-slate-400 text-[10px]">
                        ({quickViewProduct.reviewCount})
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="font-heading text-xl sm:text-2xl font-black uppercase text-slate-900 tracking-tight leading-tight">
                    {quickViewProduct.name}
                  </h2>

                  {/* Price */}
                  <div className="flex items-baseline gap-3">
                    <span className="font-heading text-2xl sm:text-3xl font-black text-slate-900">
                      {formatEUR(quickViewProduct.price)}
                    </span>
                    {quickViewProduct.originalPrice && (
                      <span className="text-sm text-slate-400 line-through font-bold">
                        {formatEUR(quickViewProduct.originalPrice)}
                      </span>
                    )}
                  </div>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {quickViewProduct.shortDescription}
                  </p>

                  {/* Key Highlights */}
                  {quickViewProduct.features && quickViewProduct.features.length > 0 && (
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] font-heading font-black uppercase tracking-wider text-slate-900 block">
                        Key Features:
                      </span>
                      <ul className="space-y-1 text-xs text-slate-600">
                        {quickViewProduct.features.slice(0, 3).map((f, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-emerald-500 font-bold shrink-0">✓</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Size / Volume selector if available */}
                  {quickViewProduct.sizeOptions && quickViewProduct.sizeOptions.length > 1 && (
                    <div className="space-y-1.5 pt-2">
                      <span className="text-xs font-bold text-slate-700">Size / Volume:</span>
                      <div className="flex gap-2">
                        {quickViewProduct.sizeOptions.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => setSelectedSize(opt)}
                            className={cn(
                              'px-3 py-1.5 rounded-lg text-xs font-bold transition-all border',
                              (selectedSize || quickViewProduct.sizeOptions?.[0]) === opt
                                ? 'bg-slate-900 text-white border-slate-900'
                                : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                            )}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Controls */}
                <div className="mt-6 pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center gap-3">
                    {/* Quantity Stepper */}
                    <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 p-1">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-white text-slate-700 transition-colors"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-8 text-center font-heading text-sm font-bold text-slate-900">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-white text-slate-700 transition-colors"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={handleAddToCart}
                      disabled={isAdded || !quickViewProduct.inStock}
                      className={cn(
                        'flex-1 flex items-center justify-center gap-2 h-11 px-6 rounded-xl font-heading font-black text-xs uppercase tracking-wider transition-all duration-200 shadow-md',
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : isWorkStuff
                          ? 'bg-brand-amber hover:bg-amber-400 text-slate-950 shadow-amber-glow'
                          : 'bg-rose-600 hover:bg-rose-500 text-white shadow-ruby-glow'
                      )}
                    >
                      {isAdded ? (
                        <>
                          <Check className="h-4 w-4 stroke-[3]" /> Added to Cart
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="h-4 w-4" /> Add to Cart •{' '}
                          {formatEUR(quickViewProduct.price * quantity)}
                        </>
                      )}
                    </button>
                  </div>

                  {/* Link to Full Product Page */}
                  <div className="text-center">
                    <Link
                      href={`/product/${quickViewProduct.slug}`}
                      onClick={handleClose}
                      className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-slate-900 underline transition-colors"
                    >
                      View full details, specifications & directions <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
