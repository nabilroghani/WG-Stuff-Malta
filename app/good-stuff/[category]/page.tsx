import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CatalogView } from '@/components/catalog/catalog-view';
import { getProducts, getCategories } from '@/lib/data/products';

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  const categories = getCategories('good_stuff');
  return categories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const categories = getCategories('good_stuff');
  const cat = categories.find((c) => c.slug === categorySlug);

  if (!cat) {
    return { title: 'Good Stuff Detailing Chemicals' };
  }

  return {
    title: `${cat.name} | Good Stuff Malta`,
    description: cat.description,
  };
}

export default async function GoodStuffCategoryPage({ params }: Props) {
  const { category: categorySlug } = await params;
  const categories = getCategories('good_stuff');
  const category = categories.find((c) => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const products = getProducts({ brand: 'good_stuff' });

  return (
    <CatalogView
      title={`GOOD STUFF • ${category.name.toUpperCase()}`}
      subtitle={category.description}
      brand="good_stuff"
      initialProducts={products}
      categories={categories}
      activeCategorySlug={category.slug}
    />
  );
}
