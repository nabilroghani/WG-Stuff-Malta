'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/types';
import { CheckCircle2, FileText, Wrench, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductTabsProps {
  product: Product;
}

export function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<'features' | 'specs' | 'guide'>('features');

  return (
    <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm">
      {/* Tab Navigation Headers */}
      <div className="flex border-b border-slate-200 bg-slate-50/80 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setActiveTab('features')}
          className={cn(
            'flex items-center gap-2 px-6 py-4 text-xs font-heading font-black uppercase tracking-wider transition-all border-b-2 whitespace-nowrap',
            activeTab === 'features'
              ? 'border-amber-500 text-amber-700 bg-white font-black'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          )}
        >
          <FileText className="w-4 h-4" /> Overview & Key Features
        </button>

        {product.specifications && Object.keys(product.specifications).length > 0 && (
          <button
            onClick={() => setActiveTab('specs')}
            className={cn(
              'flex items-center gap-2 px-6 py-4 text-xs font-heading font-black uppercase tracking-wider transition-all border-b-2 whitespace-nowrap',
              activeTab === 'specs'
                ? 'border-amber-500 text-amber-700 bg-white font-black'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            )}
          >
            <Wrench className="w-4 h-4" /> Technical Specifications
          </button>
        )}

        <button
          onClick={() => setActiveTab('guide')}
          className={cn(
            'flex items-center gap-2 px-6 py-4 text-xs font-heading font-black uppercase tracking-wider transition-all border-b-2 whitespace-nowrap',
            activeTab === 'guide'
              ? 'border-amber-500 text-amber-700 bg-white font-black'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          )}
        >
          <BookOpen className="w-4 h-4" /> How to Apply / Best Practice
        </button>
      </div>

      {/* Tab Contents */}
      <div className="p-6 sm:p-8 bg-white">
        <AnimatePresence mode="wait">
          {activeTab === 'features' && (
            <motion.div
              key="features"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="space-y-3">
                <h4 className="font-heading text-lg font-black uppercase text-slate-900">
                  Product Description
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">{product.description}</p>
              </div>

              {product.features && product.features.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h4 className="font-heading text-lg font-black uppercase text-slate-900">
                    Key Performance Highlights
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-700 font-medium leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'specs' && product.specifications && (
            <motion.div
              key="specs"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <h4 className="font-heading text-lg font-black uppercase text-slate-900 mb-2">
                Technical Data Sheet
              </h4>
              <div className="divide-y divide-slate-200 border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-slate-50/50 hover:bg-slate-100/50 transition-colors"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {key}
                    </span>
                    <span className="sm:col-span-2 text-xs font-semibold text-slate-900 mt-1 sm:mt-0">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'guide' && (
            <motion.div
              key="guide"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <h4 className="font-heading text-lg font-black uppercase text-slate-900 mb-2">
                Application Instructions & Mediterranean Climate Tips
              </h4>
              <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-amber-800 block mb-1">
                    Step 1: Preparation & Surface Temperature
                  </span>
                  Always ensure body panels or wheels are cool to the touch and out of direct sun.
                  In Malta&apos;s summer, work in shade or in an enclosed garage to prevent premature
                  drying.
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-amber-800 block mb-1">
                    Step 2: Safe Application & Agitation
                  </span>
                  Use appropriate dilution ratios and generous lubrication. Never apply heavy downward
                  pressure; let the microfiber strands or chemical cleaning agents do the work.
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-amber-800 block mb-1">
                    Step 3: Maintenance & Tool Longevity
                  </span>
                  Wash microfibers with dedicated microfiber wash liquid at 30°C–40°C with no fabric
                  softeners. Hang dry brushes with bristles pointing downward using the handle hole.
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
