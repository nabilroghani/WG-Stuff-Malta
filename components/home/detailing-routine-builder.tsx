'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Check,
  ShoppingBag,
  Droplets,
  Layers,
  Disc,
  Wind,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { useCartStore } from '@/lib/store/cart-store';
import { formatEUR, cn } from '@/lib/utils';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { getProductBySlug } from '@/lib/data/products';

interface RoutineStep {
  stepNumber: number;
  stepTitle: string;
  stepSubtitle: string;
  icon: React.ElementType;
  productSlug: string;
  defaultName: string;
  defaultPrice: number;
  defaultImage: string;
  brand: 'work_stuff' | 'good_stuff';
  whyItMatters: string;
}

const ROUTINE_STEPS: RoutineStep[] = [
  {
    stepNumber: 1,
    stepTitle: 'Touchless Pre-Wash',
    stepSubtitle: 'Loosen & encapsulate grit before touching paint',
    icon: Droplets,
    productSlug: 'good-stuff-snow-foam-orange',
    defaultName: 'Good Stuff Snow Foam Orange',
    defaultPrice: 4.00,
    defaultImage: 'https://static.wixstatic.com/media/f0347b_dd13c8b1ec8b4ff3850407c3d09ca6e9~mv2.png/v1/fill/w_520,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_dd13c8b1ec8b4ff3850407c3d09ca6e9~mv2.png',
    brand: 'good_stuff',
    whyItMatters: 'Dissolves 80% of road traffic film without touching paint, preventing swirls.',
  },
  {
    stepNumber: 2,
    stepTitle: 'Two-Bucket Contact Wash',
    stepSubtitle: 'Plush Korean microfiber mitt & slick pH-neutral suds',
    icon: Layers,
    productSlug: 'work-stuff-storm-wash-mitt',
    defaultName: 'Work Stuff STORM Wash Mitt',
    defaultPrice: 16.00,
    defaultImage: 'https://static.wixstatic.com/media/f0347b_3816ea7e15e74c16af2eca42a9ffe0a7~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_3816ea7e15e74c16af2eca42a9ffe0a7~mv2.png',
    brand: 'work_stuff',
    whyItMatters: 'Ultra-dense foam core glides effortlessly over clear coats with zero scratch risk.',
  },
  {
    stepNumber: 3,
    stepTitle: 'Wheel & Iron Decontamination',
    stepSubtitle: 'Bleeding iron chemical + soft barrel brush',
    icon: Disc,
    productSlug: 'good-stuff-iron-remover-gel',
    defaultName: 'Good Stuff Iron Remover Gel',
    defaultPrice: 10.00,
    defaultImage: 'https://static.wixstatic.com/media/f0347b_bcf264c3933b468b88d91fbc306b3772~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_bcf264c3933b468b88d91fbc306b3772~mv2.png',
    brand: 'good_stuff',
    whyItMatters: 'Chemical reaction bleeds purple as it dissolves embedded hot metallic brake dust.',
  },
  {
    stepNumber: 4,
    stepTitle: 'Ultra-Absorbent Drying',
    stepSubtitle: '1100 GSM Korean twisted pile single-pass drying',
    icon: Wind,
    productSlug: 'work-stuff-king-drying-towel',
    defaultName: 'Work Stuff KING Drying Towel',
    defaultPrice: 18.00,
    defaultImage: 'https://static.wixstatic.com/media/fb0f16_fa5089f8146a47cba7ae2b14a7b896b2~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_fa5089f8146a47cba7ae2b14a7b896b2~mv2.png',
    brand: 'work_stuff',
    whyItMatters: 'Dries an entire full-sized SUV in one swipe with zero water streaks or friction.',
  },
  {
    stepNumber: 5,
    stepTitle: 'Hydrophobic Ceramic Shield',
    stepSubtitle: 'SiO2 Ceramic spray booster & candy gloss shine',
    icon: Sparkles,
    productSlug: 'good-stuff-sio2-detailer',
    defaultName: 'Good Stuff SiO2 Quick Detailer',
    defaultPrice: 9.00,
    defaultImage: 'https://static.wixstatic.com/media/f0347b_c3b3a03b2803429fa2f7686fe671de7f~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_c3b3a03b2803429fa2f7686fe671de7f~mv2.png',
    brand: 'good_stuff',
    whyItMatters: 'Leaves a hyper-slick hydrophobic protective layer that repels dirt and water for 8+ weeks.',
  },
];

export function DetailingRoutineBuilder() {
  const [selectedStepIndices, setSelectedStepIndices] = useState<number[]>([0, 1, 2, 3, 4]);
  const [isAdded, setIsAdded] = useState(false);

  const addItem = useCartStore((state) => state.addItem);
  const openDrawer = useCartStore((state) => state.openDrawer);

  const toggleStep = (index: number) => {
    if (selectedStepIndices.includes(index)) {
      if (selectedStepIndices.length > 1) {
        setSelectedStepIndices(selectedStepIndices.filter((i) => i !== index));
      }
    } else {
      setSelectedStepIndices([...selectedStepIndices, index].sort());
    }
  };

  const selectedProducts = selectedStepIndices.map((idx) => {
    const step = ROUTINE_STEPS[idx];
    const liveProd = getProductBySlug(step.productSlug);
    return {
      step,
      product: liveProd || {
        id: step.productSlug,
        slug: step.productSlug,
        name: step.defaultName,
        brand: step.brand,
        price: step.defaultPrice,
        category: step.stepTitle,
        categorySlug: step.brand === 'work_stuff' ? 'wash' : 'wash',
        images: [step.defaultImage],
        rating: 5.0,
        reviewCount: 30,
        description: step.whyItMatters,
        shortDescription: step.stepSubtitle,
      },
    };
  });

  const bundleTotal = selectedProducts.reduce((sum, item) => sum + item.product.price, 0);

  const handleAddAllToCart = () => {
    selectedProducts.forEach(({ product }) => {
      // @ts-ignore
      addItem(product, 1);
    });
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      openDrawer();
    }, 900);
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Interactive Pro Detailing Routine</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Build Your 5-Step Detailing Sequence
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
            The secret to swirl-free, showroom-grade paintwork is following the proper sequence. Select your steps below to build your custom detailing bundle.
          </p>
        </ScrollReveal>

        {/* 5-Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {ROUTINE_STEPS.map((step, idx) => {
            const isSelected = selectedStepIndices.includes(idx);
            const liveProd = getProductBySlug(step.productSlug);
            const price = liveProd ? liveProd.price : step.defaultPrice;
            const img = liveProd?.images?.[0] || step.defaultImage;
            const isWorkStuff = step.brand === 'work_stuff';

            return (
              <ScrollReveal key={step.stepNumber} index={idx}>
                <div
                  onClick={() => toggleStep(idx)}
                  className={cn(
                    'card-glow-animated h-full rounded-3xl p-[1px] border cursor-pointer transition-all duration-300',
                    isSelected
                      ? isWorkStuff
                        ? 'border-amber-400 shadow-md ring-2 ring-amber-400/20'
                        : 'border-rose-400 shadow-md ring-2 ring-rose-400/20'
                      : 'border-slate-200 opacity-70 hover:opacity-100 hover:border-slate-300'
                  )}
                >
                  <div className="card-glow-inner p-5 rounded-3xl bg-white flex flex-col justify-between h-full">
                    <div>
                      {/* Step Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className={cn(
                            'flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-colors',
                            isSelected
                              ? isWorkStuff
                                ? 'bg-amber-400 text-slate-950'
                                : 'bg-rose-500 text-white'
                              : 'bg-slate-100 text-slate-400'
                          )}
                        >
                          {step.stepNumber}
                        </div>

                        <div
                          className={cn(
                            'h-5 w-5 rounded-md border flex items-center justify-center transition-all',
                            isSelected
                              ? isWorkStuff
                                ? 'bg-amber-400 border-amber-400 text-slate-950'
                                : 'bg-rose-500 border-rose-500 text-white'
                              : 'border-slate-300 bg-white'
                          )}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                      </div>

                      {/* Step Title */}
                      <h4 className="font-heading text-sm font-bold text-slate-900">
                        {step.stepTitle}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-1 leading-snug line-clamp-2">
                        {step.stepSubtitle}
                      </p>

                      {/* Product Uncropped Thumbnail */}
                      <div className="relative aspect-square w-full rounded-2xl bg-gradient-to-b from-slate-50 to-white p-3 my-3 flex items-center justify-center border border-slate-100">
                        <Image
                          src={img}
                          alt={step.defaultName}
                          fill
                          className="object-contain p-1 drop-shadow-sm"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="text-xs font-semibold text-slate-800 line-clamp-1">
                        {liveProd?.name || step.defaultName}
                      </div>
                    </div>

                    {/* Step Price */}
                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] text-slate-400 uppercase font-semibold">
                        Step Price
                      </span>
                      <span className="font-heading text-sm font-bold text-slate-900">
                        {formatEUR(price)}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bundle Summary Bar */}
        <ScrollReveal>
          <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[11px] font-bold">
                  <Sparkles className="w-3 h-3" /> Complete 5-Step Malta Bundle
                </span>
                {bundleTotal >= 50 && (
                  <span className="text-[11px] font-semibold text-emerald-400">
                    • Free Island Delivery Included
                  </span>
                )}
              </div>
              <h3 className="font-heading text-2xl font-bold text-white tracking-tight">
                {selectedStepIndices.length} Steps Selected • Ready to Dispatch
              </h3>
              <p className="text-xs text-slate-400">
                All hardware tools and chemistry matched for 100% paintwork safety.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">
                  Bundle Total
                </span>
                <span className="font-heading text-2xl sm:text-3xl font-bold text-amber-400">
                  {formatEUR(bundleTotal)}
                </span>
              </div>

              <button
                onClick={handleAddAllToCart}
                className={cn(
                  'flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-lg',
                  isAdded
                    ? 'bg-emerald-500 text-white'
                    : 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-amber-glow'
                )}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" /> Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" /> Add Routine to Cart
                  </>
                )}
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
