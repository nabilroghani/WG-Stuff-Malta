'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  Truck,
  Wrench,
  FlaskConical,
  ChevronRight,
  Home as HomeIcon,
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
  const [activeDropdown, setActiveDropdown] = useState<'work_stuff' | 'good_stuff' | null>(null);
  
  const [mobileWorkStuffOpen, setMobileWorkStuffOpen] = useState(true);
  const [mobileGoodStuffOpen, setMobileGoodStuffOpen] = useState(false);
  
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const openCart = useCartStore((state) => state.openDrawer);
  const cartItemsCount = useCartStore((state) => state.getItemsCount());
  const cartSubtotal = useCartStore((state) => state.getSubtotal());
  const wishlistCount = useWishlistStore((state) => state.getCount());
  const setIsSearchOpen = useUIStore((state) => state.setIsSearchOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const handleMouseEnter = (menu: 'work_stuff' | 'good_stuff') => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const workStuffCategories = CATEGORIES.filter((c) => c.brand === 'work_stuff');
  const goodStuffCategories = CATEGORIES.filter((c) => c.brand === 'good_stuff');

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Notice Bar */}
      <div className="bg-slate-950 text-slate-300 border-b border-slate-800 text-[11px] font-medium py-1 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Announcement */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/30 text-[10px] font-bold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" /> Malta Official
            </span>
            <span className="hidden sm:inline text-slate-300">
              Work Stuff & Good Stuff Direct Imports • Dispatched in 24h across Malta & Gozo
            </span>
          </div>

          {/* Right Links & Phone */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Truck className="w-3.5 h-3.5 text-amber-400" />
              <span>Free Delivery Over €50</span>
            </div>
            <span className="hidden md:inline text-slate-700">|</span>
            <a
              href="https://wa.me/35679080602"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
            >
              <Phone className="w-3 h-3" /> +356 7908 0602
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={cn(
          'transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm h-16 sm:h-18'
            : 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 h-16 sm:h-18'
        )}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="relative h-9 sm:h-11 w-28 sm:w-36 flex items-center">
              <Image
                src="/logo.webp"
                alt="WG Stuff Malta Logo"
                fill
                priority
                className="object-contain object-left transition-transform group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Clean Desktop Navigation Menu Links with Hover Underline */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {/* 0. Home Link */}
            <Link
              href="/"
              className={cn(
                'relative py-2 text-xs font-bold uppercase tracking-wider transition-colors group cursor-pointer',
                pathname === '/' ? 'text-slate-950 font-black' : 'text-slate-600 hover:text-slate-950'
              )}
            >
              <span>Home</span>
              <span
                className={cn(
                  'absolute -bottom-1 left-0 h-0.5 bg-amber-500 rounded-full transition-all duration-200',
                  pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
                )}
              />
            </Link>

            {/* 1. Work Stuff Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('work_stuff')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'work_stuff' ? null : 'work_stuff')}
                className={cn(
                  'relative py-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors group cursor-pointer',
                  pathname.startsWith('/work-stuff') || activeDropdown === 'work_stuff'
                    ? 'text-slate-950 font-black'
                    : 'text-slate-600 hover:text-slate-950'
                )}
              >
                <span>Work Stuff Pro</span>
                <ChevronDown className={cn('w-3.5 h-3.5 transition-transform duration-200 text-slate-400', activeDropdown === 'work_stuff' && 'rotate-180 text-amber-600')} />
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-0.5 bg-amber-500 rounded-full transition-all duration-200',
                    pathname.startsWith('/work-stuff') || activeDropdown === 'work_stuff'
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  )}
                />
              </button>

              {/* Work Stuff 2-Column Mega Dropdown Panel */}
              <AnimatePresence>
                {activeDropdown === 'work_stuff' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.16 }}
                    className="absolute top-full left-0 w-[580px] pt-3 z-50"
                  >
                    <div className="rounded-3xl bg-white border border-slate-200 shadow-2xl p-5 backdrop-blur-2xl">
                      {/* Header */}
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <Wrench className="w-4 h-4 text-amber-600" />
                          <span className="font-bold text-xs uppercase tracking-wider text-slate-900">
                            Work Stuff Professional Hardware
                          </span>
                        </div>
                        <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                          67 Products
                        </span>
                      </div>

                      {/* 2-Column Categories Grid */}
                      <div className="grid grid-cols-2 gap-2.5">
                        {workStuffCategories.map((cat) => (
                          <Link
                            key={cat.slug}
                            href={`/work-stuff/${cat.slug}`}
                            className="flex items-center gap-3 p-2.5 rounded-2xl border border-slate-100 hover:border-amber-300 bg-slate-50/50 hover:bg-amber-50/60 transition-all duration-200 group/item"
                          >
                            <div className="relative h-11 w-11 flex-shrink-0 rounded-xl bg-white border border-slate-200/80 p-1.5 flex items-center justify-center shadow-2xs">
                              <Image
                                src={cat.imageUrl}
                                alt={cat.name}
                                fill
                                className="object-contain p-1"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="font-bold text-xs text-slate-900 group-hover/item:text-amber-800 block truncate">
                                {cat.name}
                              </span>
                              <span className="text-[10px] text-slate-500 block truncate">
                                {cat.itemCount} Items available
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Bottom Footer CTA */}
                      <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] text-slate-500 font-medium">
                          100% Genuine European Import
                        </span>
                        <Link
                          href="/work-stuff"
                          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase text-amber-700 hover:text-amber-800 hover:underline tracking-wider"
                        >
                          Browse All Equipment <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 2. Good Stuff Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('good_stuff')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'good_stuff' ? null : 'good_stuff')}
                className={cn(
                  'relative py-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors group cursor-pointer',
                  pathname.startsWith('/good-stuff') || activeDropdown === 'good_stuff'
                    ? 'text-slate-950 font-black'
                    : 'text-slate-600 hover:text-slate-950'
                )}
              >
                <span>Good Stuff Chemicals</span>
                <ChevronDown className={cn('w-3.5 h-3.5 transition-transform duration-200 text-slate-400', activeDropdown === 'good_stuff' && 'rotate-180 text-rose-600')} />
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-0.5 bg-rose-500 rounded-full transition-all duration-200',
                    pathname.startsWith('/good-stuff') || activeDropdown === 'good_stuff'
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  )}
                />
              </button>

              {/* Good Stuff 2-Column Mega Dropdown Panel */}
              <AnimatePresence>
                {activeDropdown === 'good_stuff' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.16 }}
                    className="absolute top-full left-0 w-[580px] pt-3 z-50"
                  >
                    <div className="rounded-3xl bg-white border border-slate-200 shadow-2xl p-5 backdrop-blur-2xl">
                      {/* Header */}
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <FlaskConical className="w-4 h-4 text-rose-600" />
                          <span className="font-bold text-xs uppercase tracking-wider text-slate-900">
                            Good Stuff Car Care Chemistry
                          </span>
                        </div>
                        <span className="text-[11px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                          41 Formulas
                        </span>
                      </div>

                      {/* 2-Column Categories Grid */}
                      <div className="grid grid-cols-2 gap-2.5">
                        {goodStuffCategories.map((cat) => (
                          <Link
                            key={cat.slug}
                            href={`/good-stuff/${cat.slug}`}
                            className="flex items-center gap-3 p-2.5 rounded-2xl border border-slate-100 hover:border-rose-300 bg-slate-50/50 hover:bg-rose-50/60 transition-all duration-200 group/item"
                          >
                            <div className="relative h-11 w-11 flex-shrink-0 rounded-xl bg-white border border-slate-200/80 p-1.5 flex items-center justify-center shadow-2xs">
                              <Image
                                src={cat.imageUrl}
                                alt={cat.name}
                                fill
                                className="object-contain p-1"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="font-bold text-xs text-slate-900 group-hover/item:text-rose-800 block truncate">
                                {cat.name}
                              </span>
                              <span className="text-[10px] text-slate-500 block truncate">
                                {cat.itemCount} Items available
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Bottom Footer CTA */}
                      <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] text-slate-500 font-medium">
                          pH Neutral & Ceramic Coating Safe
                        </span>
                        <Link
                          href="/good-stuff"
                          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase text-rose-700 hover:text-rose-800 hover:underline tracking-wider"
                        >
                          Browse All Chemicals <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 3. Gifts & Bundles Link */}
            <Link
              href="/gifts"
              className={cn(
                'relative py-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors group cursor-pointer',
                pathname === '/gifts' ? 'text-slate-950 font-black' : 'text-slate-600 hover:text-slate-950'
              )}
            >
              <Gift className="w-3.5 h-3.5 text-amber-500" />
              <span>Gift Sets</span>
              <span
                className={cn(
                  'absolute -bottom-1 left-0 h-0.5 bg-amber-500 rounded-full transition-all duration-200',
                  pathname === '/gifts' ? 'w-full' : 'w-0 group-hover:w-full'
                )}
              />
            </Link>

            {/* 4. About Link */}
            <Link
              href="/about"
              className={cn(
                'relative py-2 text-xs font-bold uppercase tracking-wider transition-colors group cursor-pointer',
                pathname === '/about' ? 'text-slate-950 font-black' : 'text-slate-600 hover:text-slate-950'
              )}
            >
              <span>About</span>
              <span
                className={cn(
                  'absolute -bottom-1 left-0 h-0.5 bg-amber-500 rounded-full transition-all duration-200',
                  pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'
                )}
              />
            </Link>

            {/* 5. Contact Link */}
            <Link
              href="/contact"
              className={cn(
                'relative py-2 text-xs font-bold uppercase tracking-wider transition-colors group cursor-pointer',
                pathname === '/contact' ? 'text-slate-950 font-black' : 'text-slate-600 hover:text-slate-950'
              )}
            >
              <span>Contact</span>
              <span
                className={cn(
                  'absolute -bottom-1 left-0 h-0.5 bg-amber-500 rounded-full transition-all duration-200',
                  pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'
                )}
              />
            </Link>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Search Pill Button */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search detailing products"
              className="flex items-center gap-2 h-10 px-3.5 sm:px-4 rounded-full bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-slate-700 hover:text-slate-950 transition-colors text-xs font-medium cursor-pointer"
            >
              <Search className="w-4 h-4 text-amber-600" />
              <span className="hidden sm:inline text-xs font-semibold">Search...</span>
              <kbd className="hidden sm:inline px-1.5 py-0.2 rounded bg-white text-[10px] font-mono border border-slate-200 text-slate-500 shadow-2xs">
                ⌘K
              </kbd>
            </button>

            {/* Wishlist Button */}
            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-slate-700 hover:text-rose-600 transition-colors shadow-2xs flex-shrink-0"
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-black text-white shadow-xs">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Button */}
            <button
              type="button"
              onClick={openCart}
              aria-label="Shopping Cart"
              className="relative flex items-center gap-2 h-10 px-4 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-amber-glow cursor-pointer flex-shrink-0"
            >
              <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
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
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Open mobile navigation"
              className={cn(
                'lg:hidden flex h-10 w-10 items-center justify-center rounded-full border transition-colors cursor-pointer flex-shrink-0',
                isMobileMenuOpen
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-950'
              )}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Mobile Drawer with Category Accordions */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-slate-200 shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-4 py-5 space-y-4">
              {/* Mobile Quick Brand Selector Cards */}
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/work-stuff"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-left active:bg-amber-100"
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="font-bold text-xs uppercase text-amber-900">
                      Work Stuff
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-600 block">67 Pro Tools</span>
                </Link>

                <Link
                  href="/good-stuff"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-left active:bg-rose-100"
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span className="font-bold text-xs uppercase text-rose-900">
                      Good Stuff
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-600 block">41 Chemicals</span>
                </Link>
              </div>

              {/* Mobile Expandable Category Accordions */}
              <div className="space-y-2 pt-1">
                {/* Home Direct Link */}
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 text-xs font-bold uppercase tracking-wider text-slate-900"
                >
                  <span className="flex items-center gap-2">
                    <HomeIcon className="w-4 h-4 text-slate-600" /> Home Page
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>

                {/* 1. Work Stuff Categories Accordion */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setMobileWorkStuffOpen(!mobileWorkStuffOpen)}
                    className="w-full flex items-center justify-between p-3.5 text-left font-bold text-xs uppercase tracking-wider text-slate-900"
                  >
                    <div className="flex items-center gap-2 text-amber-800">
                      <Wrench className="w-4 h-4 text-amber-600" />
                      <span>Work Stuff Pro Categories (6)</span>
                    </div>
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 text-slate-500 transition-transform duration-200',
                        mobileWorkStuffOpen && 'rotate-180'
                      )}
                    />
                  </button>

                  {mobileWorkStuffOpen && (
                    <div className="px-3 pb-3 space-y-1 border-t border-slate-200/60 pt-2 bg-white">
                      {workStuffCategories.map((cat) => (
                        <Link
                          key={cat.slug}
                          href={`/work-stuff/${cat.slug}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center justify-between p-2 rounded-xl hover:bg-amber-50 active:bg-amber-100 text-xs text-slate-800 font-medium"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="relative h-8 w-8 rounded-lg bg-slate-50 border p-1 flex items-center justify-center">
                              <Image src={cat.imageUrl} alt={cat.name} fill className="object-contain p-0.5" />
                            </div>
                            <div>
                              <span className="font-bold block text-slate-900">{cat.name}</span>
                              <span className="text-[10px] text-slate-400">{cat.itemCount} items</span>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                        </Link>
                      ))}
                      <div className="pt-2">
                        <Link
                          href="/work-stuff"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-center py-2 text-xs font-bold uppercase text-amber-800 bg-amber-50 rounded-xl"
                        >
                          All Work Stuff Products →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* 2. Good Stuff Categories Accordion */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setMobileGoodStuffOpen(!mobileGoodStuffOpen)}
                    className="w-full flex items-center justify-between p-3.5 text-left font-bold text-xs uppercase tracking-wider text-slate-900"
                  >
                    <div className="flex items-center gap-2 text-rose-800">
                      <FlaskConical className="w-4 h-4 text-rose-600" />
                      <span>Good Stuff Categories (5)</span>
                    </div>
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 text-slate-500 transition-transform duration-200',
                        mobileGoodStuffOpen && 'rotate-180'
                      )}
                    />
                  </button>

                  {mobileGoodStuffOpen && (
                    <div className="px-3 pb-3 space-y-1 border-t border-slate-200/60 pt-2 bg-white">
                      {goodStuffCategories.map((cat) => (
                        <Link
                          key={cat.slug}
                          href={`/good-stuff/${cat.slug}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center justify-between p-2 rounded-xl hover:bg-rose-50 active:bg-rose-100 text-xs text-slate-800 font-medium"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="relative h-8 w-8 rounded-lg bg-slate-50 border p-1 flex items-center justify-center">
                              <Image src={cat.imageUrl} alt={cat.name} fill className="object-contain p-0.5" />
                            </div>
                            <div>
                              <span className="font-bold block text-slate-900">{cat.name}</span>
                              <span className="text-[10px] text-slate-400">{cat.itemCount} items</span>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                        </Link>
                      ))}
                      <div className="pt-2">
                        <Link
                          href="/good-stuff"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-center py-2 text-xs font-bold uppercase text-rose-800 bg-rose-50 rounded-xl"
                        >
                          All Good Stuff Chemicals →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Direct Page Links */}
                <div className="space-y-1 pt-2">
                  <Link
                    href="/gifts"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 text-xs font-bold uppercase tracking-wider text-slate-900"
                  >
                    <span className="flex items-center gap-2">
                      <Gift className="w-4 h-4 text-amber-500" /> Gift Sets & Bundles
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Link
                    href="/about"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 text-xs font-bold uppercase tracking-wider text-slate-900"
                  >
                    <span>About WG Stuff Malta</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 text-xs font-bold uppercase tracking-wider text-slate-900"
                  >
                    <span>Contact & Pickups</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                </div>
              </div>

              {/* Mobile WhatsApp & Email Support */}
              <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
                <a
                  href="https://wa.me/35679080602"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider"
                >
                  <Phone className="w-4 h-4 text-emerald-600" /> WhatsApp Us: +356 7908 0602
                </a>
                <a
                  href="mailto:workstuffmalta@gmail.com"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-slate-100 text-slate-700 text-xs font-semibold"
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
