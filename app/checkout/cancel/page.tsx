import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag, Phone } from 'lucide-react';

export default function CheckoutCancelPage() {
  return (
    <div className="py-20 bg-slate-50 min-h-screen flex items-center justify-center text-slate-900">
      <div className="max-w-md w-full mx-auto px-4 text-center">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 mx-auto">
            <ShoppingBag className="h-8 w-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-heading font-black uppercase tracking-widest text-slate-500">
              Checkout Incomplete
            </span>
            <h1 className="font-heading text-3xl font-black uppercase text-slate-900 tracking-tight">
              ORDER WAS NOT COMPLETED
            </h1>
            <p className="text-xs text-slate-500 leading-relaxed">
              Your payment was cancelled or interrupted. Don&apos;t worry — the items in your cart
              have been preserved.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <Link
              href="/cart"
              className="w-full flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-amber hover:bg-amber-400 text-slate-950 font-heading font-black text-xs uppercase tracking-wider shadow-amber-glow transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> Return to Cart & Retry
            </Link>

            <a
              href="https://wa.me/35679080602"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-100 border border-slate-300 text-slate-800 hover:bg-slate-200 font-heading font-black text-xs uppercase tracking-wider transition-all"
            >
              <Phone className="w-4 h-4 text-emerald-600" /> Need Help? WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
