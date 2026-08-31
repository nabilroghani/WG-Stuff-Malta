import React from 'react';
import Link from 'next/link';
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
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12 text-slate-600">
      {/* Top Value Assurance Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b border-slate-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-amber-100 border border-amber-200 text-amber-700">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-heading font-black text-sm uppercase tracking-wider text-slate-900">
                Malta Island Delivery
              </h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Free delivery on all orders over €50 across Malta & Gozo (24-48h).
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-amber-100 border border-amber-200 text-amber-700">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-heading font-black text-sm uppercase tracking-wider text-slate-900">
                100% Genuine Gear
              </h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Direct authorized importer of Work Stuff & Good Stuff in Malta since 2018.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-amber-100 border border-amber-200 text-amber-700">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-heading font-black text-sm uppercase tracking-wider text-slate-900">
                Secure Stripe Checkout
              </h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Encrypted online payments in EUR (€) with Visa, Mastercard, Apple Pay.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-amber-100 border border-amber-200 text-amber-700">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-heading font-black text-sm uppercase tracking-wider text-slate-900">
                Pro Detailing Advice
              </h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
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
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 text-slate-950 font-heading font-black text-xl shadow-md">
                WG
              </div>
              <div>
                <span className="font-heading text-xl font-black tracking-tight text-slate-900 uppercase">
                  WG STUFF MALTA
                </span>
                <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-bold">
                  Work Stuff & Good Stuff Official Importer
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Providing professional automotive detailers and passionate enthusiasts in Malta with
              Europe&apos;s highest-grade detailing equipment, plush Korean microfibers, and chemical
              cosmetics since 2018.
            </p>

            {/* Direct Contact List */}
            <div className="space-y-2 pt-2 text-xs">
              <a
                href="https://wa.me/35679080602"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-800 hover:text-emerald-700 transition-colors font-bold"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>+356 7908 0602 (Phone & WhatsApp)</span>
              </a>
              <a
                href="mailto:workstuffmalta@gmail.com"
                className="flex items-center gap-2.5 text-slate-800 hover:text-amber-700 transition-colors font-medium"
              >
                <Mail className="w-4 h-4 text-amber-600" />
                <span>workstuffmalta@gmail.com</span>
              </a>
            </div>

            {/* Social Channels */}
            <div className="pt-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-2">
                Follow WG Stuff Malta:
              </span>
              <div className="flex items-center gap-2">
                {[
                  { name: 'Instagram', url: 'https://instagram.com' },
                  { name: 'Facebook', url: 'https://facebook.com' },
                  { name: 'TikTok', url: 'https://tiktok.com' },
                  { name: 'YouTube', url: 'https://youtube.com' },
                ].map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-200 transition-colors"
                  >
                    {soc.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Work Stuff Column */}
          <div className="space-y-3">
            <h4 className="font-heading font-black text-sm uppercase tracking-wider text-amber-700">
              Work Stuff Pro
            </h4>
            <ul className="space-y-2 text-xs">
              {workStuffCats.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/work-stuff/${cat.slug}`}
                    className="text-slate-600 hover:text-amber-700 transition-colors font-medium"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/work-stuff"
                  className="text-amber-700 font-bold hover:underline inline-flex items-center gap-1"
                >
                  All Work Stuff Gear <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Good Stuff Column */}
          <div className="space-y-3">
            <h4 className="font-heading font-black text-sm uppercase tracking-wider text-rose-700">
              Good Stuff Care
            </h4>
            <ul className="space-y-2 text-xs">
              {goodStuffCats.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/good-stuff/${cat.slug}`}
                    className="text-slate-600 hover:text-rose-700 transition-colors font-medium"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/good-stuff"
                  className="text-rose-700 font-bold hover:underline inline-flex items-center gap-1"
                >
                  All Chemicals <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Malta Partner Stockists & Info */}
          <div className="space-y-3">
            <h4 className="font-heading font-black text-sm uppercase tracking-wider text-slate-900">
              Malta Partner Hubs
            </h4>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-1.5 text-slate-900 font-bold mb-0.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" /> Ta&apos; Spiru Car Wash
                </div>
                <p className="text-[11px] text-slate-500">Fgura, Malta</p>
                <span className="text-[10px] text-amber-700 font-bold">
                  Official Retailer & Pro Studio
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-1.5 text-slate-900 font-bold mb-0.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" /> Quad Car Wash
                </div>
                <p className="text-[11px] text-slate-500">The Quad Central, Mrieħel</p>
                <span className="text-[10px] text-amber-700 font-bold">
                  Selected Stock Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} WG Stuff Malta. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="/about" className="hover:text-slate-900 transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-slate-900 transition-colors">
            Contact
          </Link>
          <Link href="/gifts" className="hover:text-slate-900 transition-colors">
            Gift Bundles
          </Link>
          <span className="text-slate-300">•</span>
          <span className="text-slate-700 font-bold">Currency: EUR (€)</span>
        </div>
      </div>
    </footer>
  );
}
