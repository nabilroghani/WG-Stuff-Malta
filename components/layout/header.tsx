'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShoppingBag,
  Search,
  Heart,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Phone,
  Gift,
  Mail,
  ArrowRight,
} from 'lucide-react';
import { useCartStore } from '@/lib/store/cart-store';
import { useWishlistStore } from '@/lib/store/wishlist-store';
import { useUIStore } from '@/lib/store/ui-store';
import { formatEUR, cn } from '@/lib/utils';
import { CATEGORIES } from '@/lib/data/products';

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<'work_stuff' | 'good_stuff' | null>(null);

  const openCart = useCartStore((state) => state.openDrawer);
  const cartItemsCount = useCartStore((state) => state.getItemsCount());
  const cartSubtotal = useCartStore((state) => state.getSubtotal());
  const wishlistCount = useWishlistStore((state) => state.getCount());
  const setIsSearchOpen = useUIStore((state) => state.setIsSearchOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [pathname]);

  const workStuffCategories = CATEGORIES.filter((c) => c.brand === 'work_stuff');
  const goodStuffCategories = CATEGORIES.filter((c) => c.brand === 'good_stuff');

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* Top Banner Notice */}
      <div className="bg-slate-100 border-b border-slate-200 py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-700 font-medium">
            <span className="inline-flex items-center gap-1 font-bold text-amber-700 uppercase tracking-wider text-[10px] bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" /> MALTA OFFICIAL
            </span>
            <span className="hidden sm:inline text-slate-600">
              Official Importer of Work Stuff & Good Stuff in Malta • Since 2018
            </span>
            <span className="sm:hidden text-slate-600">Official Importer • Since 2018</span>
          </div>

          <div className="flex items-center gap-4 text-slate-600 text-xs">
            <span className="hidden md:flex items-center gap-1 text-slate-700 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Free Island Delivery Over €50
            </span>
            <a
              href="https://wa.me/35679080602"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-bold transition-colors"
            >
              <Phone className="w-3 h-3" /> +356 7908 0602
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation Bar */}
      <nav
        className={cn(
          'transition-all duration-300 border-b',
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl border-slate-200 shadow-sm py-3'
            : 'bg-white/90 backdrop-blur-lg border-slate-200/80 py-4'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 text-slate-950 font-heading font-black text-xl shadow-md transition-transform group-hover:scale-105">
              WG
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-lg sm:text-xl font-black tracking-tight text-slate-900 uppercase group-hover:text-amber-600 transition-colors">
                  WG STUFF
                </span>
                <span className="px-1.5 py-0.2 rounded bg-amber-100 border border-amber-300 text-[10px] font-black text-amber-800 tracking-wider">
                  MALTA
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-semibold tracking-wide uppercase">
                Work Stuff & Good Stuff
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* Work Stuff Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMegaMenu('work_stuff')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <Link
                href="/work-stuff"
                className={cn(
                  'flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all',
                  pathname.startsWith('/work-stuff')
                    ? 'bg-amber-50 text-amber-700 border border-amber-200 shadow-sm'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                )}
              >
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                Work Stuff Pro
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </Link>

              {/* Mega Dropdown */}
              <AnimatePresence>
                {activeMegaMenu === 'work_stuff' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 w-80 pt-2 z-50"
                  >
                    <div className="rounded-2xl bg-white border border-slate-200 shadow-2xl p-3 backdrop-blur-xl space-y-1">
                      <div className="px-3 py-2 border-b border-slate-100 mb-1">
                        <span className="font-heading text-xs font-black uppercase tracking-wider text-amber-600">
                          Professional Equipment
                        </span>
                      </div>
                      {workStuffCategories.map((cat) => (
                        <Link
                          key={cat.slug}
                          href={`/work-stuff/${cat.slug}`}
                          className="flex items-center justify-between px-3 py-2 rounded-xl text-xs text-slate-700 hover:text-slate-900 hover:bg-amber-50 transition-colors group"
                        >
                          <span className="font-semibold">{cat.name}</span>
                          <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all" />
                        </Link>
                      ))}
                      <div className="pt-2 border-t border-slate-100 mt-1">
                        <Link
                          href="/work-stuff"
                          className="block text-center py-1.5 text-[11px] font-bold text-amber-600 hover:underline uppercase tracking-wider"
                        >
                          View All Work Stuff Gear →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Good Stuff Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMegaMenu('good_stuff')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <Link
                href="/good-stuff"
                className={cn(
                  'flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all',
                  pathname.startsWith('/good-stuff')
                    ? 'bg-rose-50 text-rose-700 border border-rose-200 shadow-sm'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                )}
              >
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                Good Stuff Chemicals
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </Link>

              {/* Mega Dropdown */}
              <AnimatePresence>
                {activeMegaMenu === 'good_stuff' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 w-80 pt-2 z-50"
                  >
                    <div className="rounded-2xl bg-white border border-slate-200 shadow-2xl p-3 backdrop-blur-xl space-y-1">
                      <div className="px-3 py-2 border-b border-slate-100 mb-1">
                        <span className="font-heading text-xs font-black uppercase tracking-wider text-rose-600">
                          Detailing Cosmetics & Chemicals
                        </span>
                      </div>
                      {goodStuffCategories.map((cat) => (
                        <Link
                          key={cat.slug}
                          href={`/good-stuff/${cat.slug}`}
                          className="flex items-center justify-between px-3 py-2 rounded-xl text-xs text-slate-700 hover:text-slate-900 hover:bg-rose-50 transition-colors group"
                        >
                          <span className="font-semibold">{cat.name}</span>
                          <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-rose-600 group-hover:translate-x-0.5 transition-all" />
                        </Link>
                      ))}
                      <div className="pt-2 border-t border-slate-100 mt-1">
                        <Link
                          href="/good-stuff"
                          className="block text-center py-1.5 text-[11px] font-bold text-rose-600 hover:underline uppercase tracking-wider"
                        >
                          View All Good Stuff Chemicals →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Gifts Page */}
            <Link
              href="/gifts"
              className={cn(
                'flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all',
                pathname === '/gifts'
                  ? 'bg-slate-100 text-slate-900 border border-slate-300 font-bold'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              )}
            >
              <Gift className="w-3.5 h-3.5 text-amber-500" />
              Gift Bundles
            </Link>

            {/* About Page */}
            <Link
              href="/about"
              className={cn(
                'px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all',
                pathname === '/about'
                  ? 'bg-slate-100 text-slate-900 border border-slate-300 font-bold'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              )}
            >
              About
            </Link>

            {/* Contact Page */}
            <Link
              href="/contact"
              className={cn(
                'px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all',
                pathname === '/contact'
                  ? 'bg-slate-100 text-slate-900 border border-slate-300 font-bold'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              )}
            >
              Contact
            </Link>
          </div>

          {/* Right Action Icons (Search, Wishlist, Cart, Mobile Toggle) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search detailing products"
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-amber-400 transition-colors text-xs font-medium"
            >
              <Search className="w-4 h-4 text-amber-500" />
              <span className="hidden sm:inline">Search...</span>
              <kbd className="hidden sm:inline px-1.5 py-0.5 rounded bg-white text-[10px] font-mono border border-slate-200 text-slate-500 shadow-sm">
                ⌘K
              </kbd>
            </button>

            {/* Wishlist Button */}
            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-amber-400 transition-colors shadow-sm"
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-extrabold text-white shadow-sm">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Button */}
            <button
              onClick={openCart}
              aria-label="Shopping Cart"
              className="relative flex items-center gap-2.5 h-10 px-3.5 rounded-xl bg-brand-amber text-slate-950 font-heading font-black text-xs uppercase tracking-wider hover:bg-amber-400 transition-all shadow-amber-glow"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">{formatEUR(cartSubtotal)}</span>
              {cartItemsCount > 0 && (
                <motion.span
                  key={cartItemsCount}
                  initial={{ scale: 0.6 }}
                  animate={{ scale: 1 }}
                  className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-950 text-white text-[10px] font-black"
                >
                  {cartItemsCount}
                </motion.span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Open mobile navigation"
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 overflow-hidden shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
              {/* Dual Brand Switcher on Mobile */}
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/work-stuff"
                  className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-left"
                >
                  <span className="block font-heading font-black text-sm text-amber-700 uppercase">
                    Work Stuff Pro
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">Brushes, Towels & Gear</span>
                </Link>

                <Link
                  href="/good-stuff"
                  className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-left"
                >
                  <span className="block font-heading font-black text-sm text-rose-700 uppercase">
                    Good Stuff
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">Shampoos & Chemicals</span>
                </Link>
              </div>

              {/* Navigation List */}
              <div className="space-y-1 pt-2">
                <Link
                  href="/"
                  className="block px-4 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider text-slate-800 hover:bg-slate-100 hover:text-amber-600"
                >
                  Home
                </Link>
                <Link
                  href="/work-stuff"
                  className="block px-4 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider text-amber-700 hover:bg-slate-100"
                >
                  Work Stuff Equipment Catalog
                </Link>
                <Link
                  href="/good-stuff"
                  className="block px-4 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider text-rose-700 hover:bg-slate-100"
                >
                  Good Stuff Chemicals Catalog
                </Link>
                <Link
                  href="/gifts"
                  className="block px-4 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider text-slate-800 hover:bg-slate-100 hover:text-amber-600"
                >
                  Gift Sets & Bundles
                </Link>
                <Link
                  href="/about"
                  className="block px-4 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider text-slate-800 hover:bg-slate-100 hover:text-amber-600"
                >
                  About WG Stuff Malta
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider text-slate-800 hover:bg-slate-100 hover:text-amber-600"
                >
                  Contact & Store Pickups
                </Link>
              </div>

              {/* Mobile Direct WhatsApp / Phone Contact */}
              <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
                <a
                  href="https://wa.me/35679080602"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-700 text-xs font-bold uppercase tracking-wider"
                >
                  <Phone className="w-4 h-4" /> WhatsApp Us: +356 7908 0602
                </a>
                <a
                  href="mailto:workstuffmalta@gmail.com"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold"
                >
                  <Mail className="w-4 h-4 text-amber-600" /> workstuffmalta@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
