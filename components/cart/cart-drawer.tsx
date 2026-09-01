'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  Truck,
  ShieldCheck,
  Sparkles,
  Loader2,
  Phone,
} from 'lucide-react';
import { useCartStore, FREE_SHIPPING_THRESHOLD } from '@/lib/store/cart-store';
import { formatEUR, cn } from '@/lib/utils';

export function CartDrawer() {
  const {
    items,
    isDrawerOpen,
    closeDrawer,
    removeItem,
    updateQuantity,
    getSubtotal,
    getShippingFee,
    getTotal,
    getFreeShippingProgress,
    getItemsCount,
  } = useCartStore();

  const [isLoadingCheckout, setIsLoadingCheckout] = useState(false);

  const subtotal = getSubtotal();
  const shipping = getShippingFee();
  const total = getTotal();
  const progress = getFreeShippingProgress();
  const itemsCount = getItemsCount();

  const handleCheckout = async () => {
    try {
      setIsLoadingCheckout(true);
      const res = await fetch('/api/checkout_sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || 'Failed to initiate checkout session');
      }
    } catch (err) {
      console.error('Checkout redirect error:', err);
      alert('Error initiating checkout. Please try again.');
    } finally {
      setIsLoadingCheckout(false);
    }
  };

  // Build WhatsApp order text
  const itemsListText = items
    .map((item) => `- ${item.product.name} (x${item.quantity}) = €${(item.product.price * item.quantity).toFixed(2)}`)
    .join('%0A');
  const whatsappUrl = `https://wa.me/35679080602?text=Hello%20WG%20Stuff%20Malta!%20I%20would%20like%20to%20place%20an%20order:%0A%0A${itemsListText}%0A%0ASubtotal:%20€${subtotal.toFixed(2)}%0ATotal:%20€${total.toFixed(2)}%0A%0APlease%20confirm%20delivery%20details.`;

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="w-screen max-w-md bg-white border-l border-slate-200 flex flex-col shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-white">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 border border-amber-200 text-amber-700">
                    <ShoppingBag className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="font-heading text-xl font-black uppercase tracking-wide text-slate-900">
                      Your Cart
                    </h2>
                    <p className="text-xs text-slate-500 font-medium">
                      {itemsCount} {itemsCount === 1 ? 'item' : 'items'} ready for checkout
                    </p>
                  </div>
                </div>

                <button
                  onClick={closeDrawer}
                  aria-label="Close cart drawer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-amber-400 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Free Malta Shipping Progress Meter */}
              <div className="bg-slate-50 p-4 border-b border-slate-200">
                <div className="flex items-center justify-between text-xs font-semibold mb-2">
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <Truck className="w-4 h-4 text-amber-600" />
                    {progress.isEligible ? (
                      <span className="text-emerald-700 font-bold flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" /> Free Island Delivery Unlocked!
                      </span>
                    ) : (
                      <span>
                        Add <span className="text-amber-700 font-bold">{formatEUR(progress.remaining)}</span> more for Free Delivery
                      </span>
                    )}
                  </div>
                  <span className="text-slate-500">{progress.percentage}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                  <div
                    className={cn(
                      'h-full transition-all duration-500 rounded-full',
                      progress.isEligible
                        ? 'bg-emerald-500'
                        : 'bg-gradient-to-r from-amber-400 to-amber-500'
                    )}
                    style={{ width: `${progress.percentage}%` }}
                  />
                </div>
              </div>

              {/* Cart Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-12">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-slate-200 text-slate-400 mb-4 shadow-sm">
                      <ShoppingBag className="h-8 w-8" />
                    </div>
                    <h3 className="font-heading text-lg font-bold uppercase text-slate-900 mb-1">
                      Your Cart is Empty
                    </h3>
                    <p className="text-xs text-slate-500 max-w-[240px] mb-6">
                      Explore professional Work Stuff gear and Good Stuff detailing chemicals.
                    </p>
                    <button
                      onClick={closeDrawer}
                      className="px-5 py-2.5 rounded-xl bg-brand-amber text-slate-950 font-heading font-black text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors shadow-amber-glow"
                    >
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  items.map((item) => (
                    <motion.div
                      layout
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex gap-4 p-3.5 rounded-2xl bg-white border border-slate-200 group shadow-sm"
                    >
                      {/* Product Uncropped Thumbnail */}
                      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-gradient-to-b from-slate-50 to-white border border-slate-200 p-2 flex items-center justify-center">
                        <Image
                          src={
                            item.product.images[0] ||
                            'https://static.wixstatic.com/media/f0347b_8d46a8fe1c904ed19fcdce9b09bb20dc~mv2.png'
                          }
                          alt={item.product.name}
                          fill
                          className="object-contain p-1 drop-shadow-xs"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-sans font-bold text-xs text-slate-900 line-clamp-1">
                              {item.product.name}
                            </h4>
                            <button
                              onClick={() => removeItem(item.id)}
                              aria-label="Remove item"
                              className="text-slate-400 hover:text-rose-600 transition-colors p-0.5"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          {item.selectedSize && (
                            <span className="text-[11px] text-slate-500 block font-medium mt-0.5">
                              {item.selectedSize}
                            </span>
                          )}
                        </div>

                        {/* Quantity & Price */}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center rounded-lg bg-slate-100 border border-slate-200 p-0.5">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              aria-label="Decrease quantity"
                              className="h-6 w-6 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-7 text-center text-xs font-bold text-slate-900">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              aria-label="Increase quantity"
                              className="h-6 w-6 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>

                          <div className="text-right">
                            <span className="font-heading text-sm font-black text-slate-900">
                              {formatEUR(item.product.price * item.quantity)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Drawer Footer & Checkout Action */}
              {items.length > 0 && (
                <div className="p-6 border-t border-slate-200 bg-white space-y-3">
                  {/* Totals Breakdown */}
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between text-slate-500">
                      <span>Subtotal</span>
                      <span className="text-slate-900 font-semibold">{formatEUR(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Malta Island-Wide Delivery</span>
                      <span className="text-slate-900 font-semibold">
                        {shipping === 0 ? (
                          <span className="text-emerald-600 font-bold uppercase tracking-wider text-[11px]">
                            FREE
                          </span>
                        ) : (
                          formatEUR(shipping)
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-slate-100 text-sm font-bold text-slate-900">
                      <span>Total (EUR)</span>
                      <span className="font-heading text-xl font-black text-slate-900">
                        {formatEUR(total)}
                      </span>
                    </div>
                  </div>

                  {/* Stripe Checkout Button */}
                  <button
                    onClick={handleCheckout}
                    disabled={isLoadingCheckout}
                    className="w-full flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-amber hover:bg-amber-400 text-slate-950 font-heading font-black text-xs sm:text-sm uppercase tracking-wider shadow-amber-glow transition-all duration-200 disabled:opacity-50"
                  >
                    {isLoadingCheckout ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Preparing Stripe Checkout...
                      </>
                    ) : (
                      <>
                        Checkout with Card / Stripe <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* WhatsApp Quick Order for Malta */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex h-11 items-center justify-center gap-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 font-heading font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600" /> Order via WhatsApp (Malta)
                  </a>

                  {/* Trust Badge */}
                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Official WG Stuff Malta Store • Fast Dispatch</span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
