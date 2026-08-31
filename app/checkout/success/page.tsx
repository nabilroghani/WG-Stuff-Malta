'use client';

import React, { useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import confetti from 'canvas-confetti';
import { Check, Package, Truck, Phone } from 'lucide-react';
import { useCartStore } from '@/lib/store/cart-store';

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id') || `WGM-${Date.now().toString().slice(-6)}`;
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    // Clear the cart on successful checkout
    clearCart();

    // Trigger celebratory confetti burst
    const end = Date.now() + 2.5 * 1000;
    const colors = ['#F59E0B', '#FBBF24', '#EF4444', '#10B981', '#0F172A'];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, [clearCart]);

  return (
    <div className="py-20 bg-slate-50 min-h-screen flex items-center justify-center text-slate-900">
      <div className="max-w-2xl w-full mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 text-center shadow-xl space-y-6 relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-400/10 blur-[90px] pointer-events-none" />

          {/* Success Check Icon */}
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-600 text-white mx-auto shadow-md">
            <Check className="w-10 h-10 stroke-[3]" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-heading font-black uppercase tracking-widest text-emerald-700">
              Payment & Order Confirmed
            </span>
            <h1 className="font-heading text-3xl sm:text-5xl font-black uppercase text-slate-900 tracking-tight">
              THANK YOU FOR YOUR ORDER!
            </h1>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Your detailing equipment order has been received and is being prepared for dispatch at
              our Malta facility.
            </p>
          </div>

          {/* Order Reference Badge */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto space-y-1">
            <span className="text-[11px] text-slate-500 uppercase font-bold tracking-wider">
              Order Reference / Session ID:
            </span>
            <span className="font-mono text-sm font-bold text-amber-800 block truncate">
              {sessionId}
            </span>
          </div>

          {/* What Happens Next 3-step banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-xs">
                <Package className="w-4 h-4" /> 1. Packing
              </div>
              <p className="text-[11px] text-slate-600">
                Carefully inspecting and packing your products in microfiber-safe boxing.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs">
                <Truck className="w-4 h-4" /> 2. Delivery
              </div>
              <p className="text-[11px] text-slate-600">
                Dispatched locally via courier within 24-48h across Malta & Gozo.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-xs">
                <Phone className="w-4 h-4" /> 3. Support
              </div>
              <p className="text-[11px] text-slate-600">
                Questions? WhatsApp us anytime on +356 7908 0602.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-brand-amber hover:bg-amber-400 text-slate-950 font-heading font-black text-xs uppercase tracking-wider shadow-amber-glow transition-all"
            >
              Return to Storefront
            </Link>

            <a
              href="https://wa.me/35679080602"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-heading font-black text-xs uppercase tracking-wider transition-all"
            >
              Message Us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="py-20 bg-slate-50 min-h-screen flex items-center justify-center text-slate-900 font-heading text-lg">
          Loading Order Confirmation...
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
