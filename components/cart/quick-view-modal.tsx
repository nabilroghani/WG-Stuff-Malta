'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, ShoppingBag, Plus, Minus, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { useUIStore } from '@/lib/store/ui-store';
import { useCartStore } from '@/lib/store/cart-store';
import { formatEUR, cn, getBrandBadge } from '@/lib/utils';

export function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct } = useUIStore();
  const addItem = useCartStore((state) => state.addItem);

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  if (!quickViewProduct) return null;

  const brandBadge = getBrandBadge(quickViewProduct.brand);
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
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs"
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
              className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-amber-400 transition-colors shadow-sm"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
              {/* Product Gallery Column */}
              <div className="flex flex-col gap-4">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-slate-100 border border-slate-200">
                  <Image
                    src={
                      quickViewProduct.images[selectedImageIndex] ||
                      quickViewProduct.images[0] ||
                      'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80'
                    }
                    alt={quickViewProduct.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {quickViewProduct.images.length > 1 && (
                  <div className="flex gap-2">
                    {quickViewProduct.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImageIndex(idx)}
                        className={cn(
                          'relative h-16 w-16 overflow-hidden rounded-xl border-2 transition-all',
                          selectedImageIndex === idx
                            ? 'border-amber-500 shadow-sm'
                            : 'border-slate-200 hover:border-slate-400'
                        )}
                      >
                        <Image src={img} alt="thumbnail" fill className="object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info Column */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={cn(
                        'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase border shadow-sm',
                        brandBadge.bgClass
                      )}
                    >
                      <span className={cn('w-1.5 h-1.5 rounded-full', brandBadge.dotClass)} />
                      {quickViewProduct.brand === 'work_stuff' ? 'Work Stuff Pro' : 'Good Stuff Chemicals'}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">
                      {quickViewProduct.category}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-black uppercase text-slate-900 mb-2 leading-tight">
                    {quickViewProduct.name}
                  </h3>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-slate-700">
                      {quickViewProduct.rating.toFixed(1)}
                    </span>
                    <span className="text-xs text-slate-400">
                      ({quickViewProduct.reviewCount} reviews)
                    </span>
                  </div>

                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-heading text-3xl font-black text-slate-900">
                      {formatEUR(quickViewProduct.price)}
                    </span>
                    {quickViewProduct.originalPrice && (
                      <span className="text-sm text-slate-400 line-through font-semibold">
                        {formatEUR(quickViewProduct.originalPrice)}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {quickViewProduct.shortDescription || quickViewProduct.description}
                  </p>

                  {/* Size/Volume Selector if available */}
                  {quickViewProduct.sizeOptions && (
                    <div className="mb-6">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Select Option / Size:
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {quickViewProduct.sizeOptions.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => setSelectedSize(opt)}
                            className={cn(
                              'px-3 py-1.5 rounded-xl text-xs font-bold border transition-all',
                              currentSize === opt
                                ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-sm font-black'
                                : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-400'
                            )}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Actions Bottom */}
                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-3">
                    {/* Quantity Stepper */}
                    <div className="flex items-center rounded-xl bg-slate-100 border border-slate-200 p-1">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="h-8 w-8 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-8 text-center text-sm font-bold text-slate-900">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="h-8 w-8 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    {/* Add to Cart */}
                    <button
                      onClick={handleAddToCart}
                      className={cn(
                        'flex-1 flex h-11 items-center justify-center gap-2 rounded-xl font-heading font-black text-xs uppercase tracking-wider transition-all duration-200 shadow-sm',
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-brand-amber text-slate-950 hover:bg-amber-400 shadow-amber-glow'
                      )}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" /> Added to Cart!
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4" /> Add to Cart (
                          {formatEUR(quickViewProduct.price * quantity)})
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <Link
                      href={`/product/${quickViewProduct.slug}`}
                      onClick={handleClose}
                      className="inline-flex items-center gap-1 text-slate-600 hover:text-amber-700 font-bold transition-colors"
                    >
                      View Full Details <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <div className="flex items-center gap-1 text-emerald-700 font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>In Stock in Malta</span>
                    </div>
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
