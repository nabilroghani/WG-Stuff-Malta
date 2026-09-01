'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShoppingBag,
  Plus,
  Minus,
  Check,
  Heart,
  Truck,
  ShieldCheck,
  Phone,
  Sparkles,
} from 'lucide-react';
import { Product } from '@/types';
import { useCartStore } from '@/lib/store/cart-store';
import { useWishlistStore } from '@/lib/store/wishlist-store';
import { formatEUR, cn } from '@/lib/utils';

interface ProductActionsProps {
  product: Product;
}

export function ProductActions({ product }: ProductActionsProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product.sizeOptions?.[0] || product.volumeOrSize
  );
  const [isAdded, setIsAdded] = useState(false);

  const addItem = useCartStore((state) => state.addItem);
  const openDrawer = useCartStore((state) => state.openDrawer);
  const { isInWishlist, toggleWishlist } = useWishlistStore();

  const inWishlist = isInWishlist(product.id);
  const isWorkStuff = product.brand === 'work_stuff';

  const handleAddToCart = () => {
    addItem(product, quantity, selectedSize);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addItem(product, quantity, selectedSize);
    openDrawer();
  };

  const whatsappMessage = `Hello WG Stuff Malta! I would like to order: ${product.name} (Quantity: ${quantity}${selectedSize ? `, Size: ${selectedSize}` : ''}) for €${(product.price * quantity).toFixed(2)}. Please confirm availability and delivery.`;
  const whatsappUrl = `https://wa.me/35679080602?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="space-y-6">
      {/* Option / Size Selector */}
      {product.sizeOptions && product.sizeOptions.length > 0 && (
        <div className="space-y-2.5">
          <label className="block text-xs font-heading font-black uppercase tracking-wider text-slate-700">
            Select Volume / Size Option:
          </label>
          <div className="flex flex-wrap gap-2.5">
            {product.sizeOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setSelectedSize(option)}
                className={cn(
                  'px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all shadow-xs',
                  selectedSize === option
                    ? isWorkStuff
                      ? 'bg-brand-amber text-slate-950 border-amber-400 shadow-sm font-black'
                      : 'bg-rose-600 text-white border-rose-600 shadow-sm font-black'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                )}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity & Add to Cart Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        {/* Quantity Stepper */}
        <div className="flex items-center justify-between sm:justify-start rounded-2xl bg-slate-100 border border-slate-200 p-1.5 h-13">
          <button
            type="button"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="h-10 w-10 flex items-center justify-center rounded-xl text-slate-600 hover:text-slate-900 hover:bg-white transition-colors"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-12 text-center font-heading text-lg font-black text-slate-900">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity(quantity + 1)}
            className="h-10 w-10 flex items-center justify-center rounded-xl text-slate-600 hover:text-slate-900 hover:bg-white transition-colors"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        {/* Primary Add to Cart Button */}
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={cn(
            'flex-1 flex h-13 items-center justify-center gap-2 px-6 rounded-2xl font-heading font-black text-sm uppercase tracking-wider transition-all duration-200 shadow-lg',
            isAdded
              ? 'bg-emerald-600 text-white'
              : isWorkStuff
              ? 'bg-brand-amber text-slate-950 hover:bg-amber-400 shadow-amber-glow'
              : 'bg-rose-600 text-white hover:bg-rose-500 shadow-ruby-glow'
          )}
        >
          <AnimatePresence mode="wait">
            {isAdded ? (
              <motion.span
                key="added"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="flex items-center gap-2"
              >
                <Check className="w-5 h-5 stroke-[3]" /> Added to Cart!
              </motion.span>
            ) : (
              <motion.span
                key="idle"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" /> Add to Cart — {formatEUR(product.price * quantity)}
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          aria-label="Wishlist"
          className={cn(
            'flex h-13 w-13 items-center justify-center rounded-2xl border transition-all flex-shrink-0 shadow-xs',
            inWishlist
              ? 'bg-rose-500 text-white border-rose-500'
              : 'bg-white text-slate-700 border-slate-200 hover:text-slate-900 hover:border-slate-400'
          )}
        >
          <Heart className={cn('h-5 w-5', inWishlist && 'fill-current')} />
        </button>
      </div>

      {/* 1-Click Order via WhatsApp CTA */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          type="button"
          onClick={handleBuyNow}
          className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-400 text-slate-900 font-heading font-black text-xs uppercase tracking-wider transition-all shadow-xs"
        >
          Instant Checkout
        </button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 font-heading font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
        >
          <Phone className="w-4 h-4 text-emerald-600" /> Order via WhatsApp
        </a>
      </div>

      {/* Trust & Delivery Guarantees */}
      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs">
        <div className="flex items-center gap-2 text-emerald-700 font-bold">
          <Truck className="w-4 h-4 text-amber-600" />
          <span>Free Island Delivery across Malta on orders over €50</span>
        </div>
        <div className="flex items-center gap-2 text-slate-600 font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>100% Genuine European Import • Official Malta Stockist</span>
        </div>
        <div className="flex items-center gap-2 text-slate-600 font-medium">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>Dispatched within 24 hours across Malta & Gozo</span>
        </div>
      </div>
    </div>
  );
}
