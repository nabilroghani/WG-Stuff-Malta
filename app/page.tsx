import React from 'react';
import { Hero } from '@/components/home/hero';
import { BrandSplit } from '@/components/home/brand-split';
import { CategoryBento } from '@/components/home/category-bento';
import { CeramicGlossShowcase } from '@/components/home/ceramic-gloss-showcase';
import { DetailingRoutineBuilder } from '@/components/home/detailing-routine-builder';
import { FeaturedSection } from '@/components/home/featured-section';
import { GuideBanner } from '@/components/home/guide-banner';
import { PartnerHub } from '@/components/home/partner-hub';
import { InstagramStrip } from '@/components/home/instagram-strip';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <BrandSplit />
      <CategoryBento />
      <CeramicGlossShowcase />
      <DetailingRoutineBuilder />
      <FeaturedSection />
      <GuideBanner />
      <PartnerHub />
      <InstagramStrip />
    </div>
  );
}
