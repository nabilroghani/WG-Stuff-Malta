'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  Truck,
  ShieldCheck,
  Sparkles,
  Loader2,
  ArrowLeft,
  CheckCircle2,
} from 'lucide-react';
import { useCartStore } from '@/lib/store/cart-store';
import { formatEUR, cn } from '@/lib/utils';

export default function CartPage() {
  const {
    items,
    removeItem,
    updateQuantity,
    getSubtotal,
    getShippingFee,
    getTotal,
    getFreeShippingProgress,
    getItemsCount,
    clearCart,
  } = useCartStore();

  const [isLoadingCheckout, setIsLoadingCheckout] = useState(false);
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerName, setCustomerName] = useState('');

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
        body: JSON.stringify({ items, customerEmail, customerName }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || 'Failed to initiate checkout session');
      }
    } catch (err) {
      console.error('Checkout error:', err);
      alert('Error initiating checkout. Please try again.');
    } finally {
      setIsLoadingCheckout(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="py-20 bg-slate-50 min-h-screen flex items-center justify-center text-slate-900">
        <div className="max-w-md w-full mx-auto px-4 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white border border-slate-200 text-slate-400 mx-auto mb-6 shadow-sm">
            <ShoppingBag className="h-10 w-10" />
          </div>
          <h1 className="font-heading text-3xl font-black uppercase text-slate-900 mb-2">
            YOUR CART IS CURRENTLY EMPTY
          </h1>
          <p className="text-sm text-slate-600 mb-8 leading-relaxed">
            You have not added any Work Stuff gear or Good Stuff detailing chemicals to your cart yet.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/work-stuff"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-brand-amber text-slate-950 font-heading font-black text-xs uppercase tracking-wider hover:bg-amber-400 shadow-amber-glow transition-all"
            >
              Shop Work Stuff Pro
            </Link>
            <Link
              href="/good-stuff"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-slate-900 border border-slate-300 hover:border-slate-400 font-heading font-black text-xs uppercase tracking-wider transition-all shadow-xs"
            >
              Shop Good Stuff
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-slate-50 min-h-screen text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-heading font-black uppercase tracking-widest text-amber-700">
              Shopping Cart Summary
            </span>
            <h1 className="font-heading text-3xl sm:text-5xl font-black uppercase text-slate-900 tracking-tight mt-1">
              YOUR DETAILING ORDER ({itemsCount} {itemsCount === 1 ? 'ITEM' : 'ITEMS'})
            </h1>
          </div>
          <button
            onClick={clearCart}
            className="text-xs text-slate-500 hover:text-rose-600 transition-colors self-start sm:self-auto font-medium"
          >
            Empty Cart
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 mb-8 shadow-sm">
          <div className="flex items-center justify-between text-xs font-semibold mb-2">
            <div className="flex items-center gap-2 text-slate-700">
              <Truck className="w-4 h-4 text-amber-600" />
              {progress.isEligible ? (
                <span className="text-emerald-700 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> Free Island-Wide Malta & Gozo Delivery Unlocked!
                </span>
              ) : (
                <span>
                  Add <strong className="text-amber-700 font-bold">{formatEUR(progress.remaining)}</strong>{' '}
                  more for <strong className="text-slate-900">Free Island Delivery</strong> in Malta!
                </span>
              )}
            </div>
            <span className="text-slate-500 font-bold">{progress.percentage}%</span>
          </div>

          <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
            <div
              className={cn(
                'h-full transition-all duration-500 rounded-full',
                progress.isEligible ? 'bg-emerald-500' : 'bg-gold-gradient'
              )}
              style={{ width: `${progress.percentage}%` }}
            />
          </div>
        </div>

        {/* Main Grid: Items Left / Checkout Summary Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Items List Column */}
          <div className="lg:col-span-8 space-y-4">
            <div className="divide-y divide-slate-100 rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:bg-slate-50/60 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl bg-slate-100 border border-slate-200">
                      <Image
                        src={
                          item.product.images[0] ||
                          'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80'
                        }
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <Link
                        href={`/product/${item.product.slug}`}
                        className="font-sans font-bold text-sm sm:text-base text-slate-900 hover:text-amber-700 transition-colors line-clamp-1"
                      >
                        {item.product.name}
                      </Link>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600">
                          {item.product.brand === 'work_stuff' ? 'Work Stuff Pro' : 'Good Stuff Care'}
                        </span>
                        {item.selectedSize && (
                          <span className="text-xs text-slate-500 font-medium">
                            Option: {item.selectedSize}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-slate-500 font-semibold block mt-1">
                        Unit Price: {formatEUR(item.product.price)}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-6 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                    {/* Quantity Stepper */}
                    <div className="flex items-center rounded-xl bg-slate-100 border border-slate-200 p-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-7 w-7 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-8 text-center text-xs font-bold text-slate-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-7 w-7 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    <div className="text-right min-w-[90px]">
                      <span className="font-heading text-lg font-black text-slate-900 block">
                        {formatEUR(item.product.price * item.quantity)}
                      </span>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-slate-400 hover:text-rose-600 transition-colors p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center justify-between text-xs">
              <Link
                href="/work-stuff"
                className="inline-flex items-center gap-1.5 text-slate-600 hover:text-amber-700 font-semibold transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Continue Shopping
              </Link>
            </div>
          </div>

          {/* Checkout Summary Column Right */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="font-heading text-2xl font-black uppercase text-slate-900 tracking-tight">
                Order Summary
              </h3>

              {/* Express Guest Email input for Stripe confirmation */}
              <div className="space-y-3 pt-2">
                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Contact Email (For Receipt & Tracking)
                  </label>
                  <input
                    type="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="your-email@example.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Full Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Mario Borg"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Calculation Rows */}
              <div className="space-y-3 pt-4 border-t border-slate-100 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Subtotal</span>
                  <span className="text-slate-900 font-semibold">{formatEUR(subtotal)}</span>
                </div>

                <div className="flex justify-between text-slate-500">
                  <span>Malta Island Delivery (24-48h)</span>
                  <span className="text-slate-900 font-semibold">
                    {shipping === 0 ? (
                      <span className="text-emerald-700 font-bold uppercase tracking-wider">
                        FREE
                      </span>
                    ) : (
                      formatEUR(shipping)
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-slate-500">
                  <span>Malta VAT (Included)</span>
                  <span className="text-slate-700 font-medium">18% VAT included</span>
                </div>

                <div className="flex justify-between pt-4 border-t border-slate-100 text-base font-bold text-slate-900">
                  <span>Total Amount (EUR)</span>
                  <span className="font-heading text-2xl font-black text-slate-900">
                    {formatEUR(total)}
                  </span>
                </div>
              </div>

              {/* Primary Stripe Checkout Action */}
              <button
                onClick={handleCheckout}
                disabled={isLoadingCheckout}
                className="w-full flex h-13 items-center justify-center gap-2 rounded-2xl bg-brand-amber hover:bg-amber-400 text-slate-950 font-heading font-black text-sm uppercase tracking-wider shadow-amber-glow transition-all duration-200 disabled:opacity-50"
              >
                {isLoadingCheckout ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Redirecting to Stripe...
                  </>
                ) : (
                  <>
                    Proceed to Stripe Checkout <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Security & Guarantees */}
              <div className="pt-2 space-y-2 text-[11px] text-slate-500 border-t border-slate-100">
                <div className="flex items-center gap-2 text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Stripe 256-Bit Encrypted Secure Checkout</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  <span>Dispatched locally from Malta warehouse</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
