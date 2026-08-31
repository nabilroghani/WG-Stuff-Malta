import React from 'react';
import type { Metadata } from 'next';
import { CatalogView } from '@/components/catalog/catalog-view';
import { getProducts, getCategories } from '@/lib/data/products';

export const metadata: Metadata = {
  title: 'Good Stuff Detailing Chemicals & Car Care Malta',
  description:
    'High-gloss car shampoos, Sour anti-limescale wash, SiO2 ceramic quick detailers, and color-changing iron wheel cleaners in Malta.',
};

export default function GoodStuffPage() {
  const products = getProducts({ brand: 'good_stuff' });
  const categories = getCategories('good_stuff');

  return (
    <CatalogView
      title="GOOD STUFF® CHEMICAL CARE"
      subtitle="European chemical cosmetics formulated for high slickness, intense gloss, and durable paint protection. Featuring acidic Sour Shampoo for Malta hard water and SiO2 Ceramic detailers."
      brand="good_stuff"
      initialProducts={products}
      categories={categories}
    />
  );
}
