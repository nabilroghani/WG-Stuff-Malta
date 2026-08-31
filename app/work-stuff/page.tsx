import React from 'react';
import type { Metadata } from 'next';
import { CatalogView } from '@/components/catalog/catalog-view';
import { getProducts, getCategories } from '@/lib/data/products';

export const metadata: Metadata = {
  title: 'Work Stuff Professional Detailing Equipment Malta',
  description:
    'Explore genuine Work Stuff car detailing equipment in Malta: Albino soft brushes, 1100 GSM King drying towels, Storm wash mitts, and laser-cut microfibers.',
};

export default function WorkStuffPage() {
  const products = getProducts({ brand: 'work_stuff' });
  const categories = getCategories('work_stuff');

  return (
    <CatalogView
      title="WORK STUFF® PRO EQUIPMENT"
      subtitle="Industry-standard European hardware for automotive detailing studios and serious enthusiasts. Precision brushes, 1100 GSM twisted-pile drying towels, and scratch-safe wash mitts."
      brand="work_stuff"
      initialProducts={products}
      categories={categories}
    />
  );
}
