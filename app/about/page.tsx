import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Award,
  ShieldCheck,
  Truck,
  Sparkles,
  MapPin,
} from 'lucide-react';
import { ScrollDrawnCurve } from '@/components/about/scroll-drawn-curve';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'About WG Stuff Malta | Official Work Stuff & Good Stuff Importer',
  description:
    'Learn about Work Stuff & Good Stuff Malta. Supplying the Maltese automotive community with European detailing equipment and car care chemistry since 2018.',
};

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden py-12 bg-slate-50 min-h-screen text-slate-900">
      <ScrollDrawnCurve />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Story Header */}
        <ScrollReveal effect="settle" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs font-heading font-black uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Operating in Malta Since 2018
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl font-black uppercase text-slate-900 tracking-tight leading-[0.95]">
              PASSION FOR DETAILING. <br />
              <span className="text-amber-600">DIRECT FROM EUROPE.</span>
            </h1>

            <p className="text-base text-slate-700 leading-relaxed">
              Founded in 2018, <strong>Work Stuff & Good Stuff Malta (WG Stuff Malta)</strong> was
              born out of a simple observation: passionate car enthusiasts and professional detailers
              in Malta were struggling to access authentic, top-tier detailing equipment without
              hefty international shipping fees and delays.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              As the official importer and distributor, we bridge that gap by maintaining local
              island inventory of Europe&apos;s most celebrated detailing tools — from the iconic
              Albino brushes and 1100 GSM King drying towels to advanced chemical formulations specifically
              engineered to combat Malta&apos;s notorious hard water and intense Mediterranean sunshine.
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1000&q=85"
                alt="Car detailing session Malta"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Pillars of Excellence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ScrollReveal index={0} effect="settle" className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 border border-amber-200 text-amber-700">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-black uppercase text-slate-900">
              100% Genuine Imports
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Direct factory shipments from European manufacturing facilities. Every single towel,
              brush, and bottle is authentic.
            </p>
          </ScrollReveal>

          <ScrollReveal index={1} effect="settle" className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 border border-amber-200 text-amber-700">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-black uppercase text-slate-900">
              Tailored for Malta
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Formulas like Sour Shampoo (acidic pH) designed specifically to dissolve local tap
              water limescale and water spots.
            </p>
          </ScrollReveal>

          <ScrollReveal index={2} effect="settle" className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 border border-amber-200 text-amber-700">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-black uppercase text-slate-900">
              Island-Wide Delivery
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fast 24-48h dispatch across Malta and Gozo. Free shipping on all orders over €50.
            </p>
          </ScrollReveal>

          <ScrollReveal index={3} effect="settle" className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 border border-amber-200 text-amber-700">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-black uppercase text-slate-900">
              Pro Studio Tested
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Used daily by Malta&apos;s leading car detailing studios, coating installers, and paint
              correction specialists.
            </p>
          </ScrollReveal>
        </div>

        {/* Partner Stockists Section */}
        <ScrollReveal effect="settle" className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 space-y-8 shadow-sm">
          <div className="max-w-2xl">
            <span className="text-xs font-heading font-black uppercase tracking-widest text-amber-700">
              Local Physical Presence
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase text-slate-900 tracking-tight mt-1">
              OUR TRUSTED STOCKIST PARTNERS
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              In addition to our fast online store with direct island delivery, you can also view and
              purchase our product lines at trusted detailing centers across Malta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-heading text-xl font-black uppercase text-slate-900">
                  Ta&apos; Spiru Car Wash
                </h4>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-[10px] font-bold text-amber-800 uppercase">
                  Fgura Studio
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ta&apos; Spiru is a premier detailing hub in Fgura, stocking both Work Stuff
                hardware and Good Stuff chemical products while using them daily for professional
                client details.
              </p>
              <div className="flex items-center gap-1.5 text-xs text-slate-700 font-medium pt-2">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>Fgura, Malta</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-heading text-xl font-black uppercase text-slate-900">
                  Quad Car Wash
                </h4>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-200 text-[10px] font-bold text-slate-800 uppercase">
                  Central Hub
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Located at The Quad Central in Mrieħel, offering convenient access to select Work
                Stuff wash accessories and maintenance detailers for corporate and local clients.
              </p>
              <div className="flex items-center gap-1.5 text-xs text-slate-700 font-medium pt-2">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>The Quad Central, Mrieħel, Malta</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom CTA Card */}
        <ScrollReveal effect="settle" className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-100 via-amber-50 to-white border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-slate-900">
              READY TO UPGRADE YOUR DETAILING SETUP?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Explore our full European catalog or message us for bespoke product advice.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/work-stuff"
              className="px-6 py-3 rounded-xl bg-brand-amber hover:bg-amber-400 text-slate-950 font-heading font-black text-xs uppercase tracking-wider shadow-amber-glow transition-all whitespace-nowrap"
            >
              Shop Work Stuff Pro
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 font-heading font-black text-xs uppercase tracking-wider transition-all whitespace-nowrap shadow-sm"
            >
              Contact Us
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
