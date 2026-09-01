import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Truck,
  Sparkles,
  Award,
  ArrowUpRight,
} from 'lucide-react';
import { CATEGORIES } from '@/lib/data/products';

export function Footer() {
  const workStuffCats = CATEGORIES.filter((c) => c.brand === 'work_stuff');
  const goodStuffCats = CATEGORIES.filter((c) => c.brand === 'good_stuff');

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400">
      {/* Top Value Assurance Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 border-b border-slate-800/80">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400">
              <Truck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">
                Malta Island Delivery
              </h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Free delivery on all orders over €50 across Malta & Gozo (24-48h).
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">
                100% Genuine Gear
              </h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Direct authorized importer of Work Stuff & Good Stuff in Malta since 2018.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">
                Secure Stripe Checkout
              </h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Encrypted online payments in EUR (€) with Visa, Mastercard, Apple Pay.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">
                Pro Detailing Advice
              </h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Direct WhatsApp consultation with our detailing specialists (+356 7908 0602).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-36 flex items-center">
                <Image
                  src="/logo.webp"
                  alt="WG Stuff Malta Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Official Malta importer and distributor for <span className="text-amber-400 font-semibold">Work Stuff</span> professional detailing gear and <span className="text-rose-400 font-semibold">Good Stuff</span> high-gloss automotive chemistry. Serving studios, valeters, and passionate enthusiasts across Malta & Gozo.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs">
              <a
                href="https://wa.me/35679080602"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5" /> +356 7908 0602 (WhatsApp Direct)
              </a>
              <a
                href="mailto:workstuffmalta@gmail.com"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" /> workstuffmalta@gmail.com
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-amber-400" /> Malta & Gozo Island-Wide Dispatch
              </div>
            </div>
          </div>

          {/* Work Stuff Hardware Column */}
          <div className="space-y-3">
            <h5 className="font-bold text-xs uppercase tracking-wider text-amber-400">
              Work Stuff Pro
            </h5>
            <ul className="space-y-2 text-xs">
              {workStuffCats.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/work-stuff/${cat.slug}`}
                    className="hover:text-amber-300 transition-colors flex items-center justify-between group"
                  >
                    <span>{cat.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/work-stuff"
                  className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1"
                >
                  All 67 Equipment →
                </Link>
              </li>
            </ul>
          </div>

          {/* Good Stuff Chemicals Column */}
          <div className="space-y-3">
            <h5 className="font-bold text-xs uppercase tracking-wider text-rose-400">
              Good Stuff Care
            </h5>
            <ul className="space-y-2 text-xs">
              {goodStuffCats.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/good-stuff/${cat.slug}`}
                    className="hover:text-rose-300 transition-colors flex items-center justify-between group"
                  >
                    <span>{cat.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/good-stuff"
                  className="text-rose-400 hover:text-rose-300 font-semibold inline-flex items-center gap-1"
                >
                  All 41 Chemicals →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Service Column */}
          <div className="space-y-3">
            <h5 className="font-bold text-xs uppercase tracking-wider text-slate-200">
              Customer Hub
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/gifts" className="hover:text-white transition-colors">
                  Gift Sets & Bundles
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About WG Stuff Malta
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Pickups
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-white transition-colors">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:text-white transition-colors">
                  My Wishlist
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Payment Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
        <p>© {new Date().getFullYear()} WG Stuff Malta. Official Work Stuff & Good Stuff Importer. All rights reserved.</p>
        <div className="flex items-center gap-4 text-slate-400">
          <span>Stripe 256-Bit Encrypted</span>
          <span>•</span>
          <span>Malta (EUR €)</span>
          <span>•</span>
          <span>Fast Island Dispatch</span>
        </div>
      </div>
    </footer>
  );
}
