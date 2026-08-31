import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Star, Sparkles } from 'lucide-react';
import { getProductBySlug, PRODUCTS, getRelatedProducts } from '@/lib/data/products';
import { ProductGallery } from '@/components/product/product-gallery';
import { ProductActions } from '@/components/product/product-actions';
import { ProductTabs } from '@/components/product/product-tabs';
import { ProductCard } from '@/components/ui/product-card';
import { formatEUR, getBrandBadge, cn } from '@/lib/utils';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found | WG Stuff Malta',
    };
  }

  const brandName = product.brand === 'work_stuff' ? 'Work Stuff' : 'Good Stuff';

  return {
    title: `${product.name} | ${brandName} Malta`,
    description: product.shortDescription || product.description,
    openGraph: {
      title: product.name,
      description: product.shortDescription || product.description,
      images: product.images?.[0] ? [{ url: product.images[0] }] : undefined,
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const brandBadge = getBrandBadge(product.brand);
  const brandPath = product.brand === 'work_stuff' ? '/work-stuff' : '/good-stuff';
  const brandName = product.brand === 'work_stuff' ? 'Work Stuff Pro' : 'Good Stuff Care';
  const relatedProducts = getRelatedProducts(product.id, 4);

  // JSON-LD structured data for Google
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.images,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: brandName,
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: product.price,
      availability: product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      url: `https://wgstuffmalta.com/product/${product.slug}`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
  };

  return (
    <div className="py-8 bg-slate-50 min-h-screen text-slate-900">
      {/* Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8 overflow-x-auto whitespace-nowrap scrollbar-none">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
          <Link href={brandPath} className="hover:text-slate-900 transition-colors">
            {brandName}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
          <Link
            href={`${brandPath}/${product.categorySlug}`}
            className="hover:text-slate-900 transition-colors"
          >
            {product.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
          <span className="text-slate-900 font-bold truncate max-w-[200px] sm:max-w-none">
            {product.name}
          </span>
        </nav>

        {/* Top Product Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          {/* Left: Gallery Column */}
          <div className="lg:col-span-6">
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Right: Info & Actions Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Badges & Category */}
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={cn(
                  'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border shadow-xs',
                  brandBadge.bgClass
                )}
              >
                <span className={cn('w-1.5 h-1.5 rounded-full', brandBadge.dotClass)} />
                {brandName}
              </span>

              <span className="text-xs font-bold uppercase tracking-wider text-slate-600 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-xs">
                {product.category}
              </span>

              {product.isBestSeller && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-slate-950 shadow-sm">
                  <Sparkles className="w-3 h-3" /> Best Seller
                </span>
              )}
            </div>

            {/* Product Title */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-slate-900 tracking-tight leading-tight">
              {product.name}
            </h1>

            {/* Ratings & Reviews */}
            <div className="flex items-center gap-3">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-800">{product.rating.toFixed(2)}</span>
              <span className="text-xs text-slate-500">
                ({product.reviewCount} verified detailing reviews)
              </span>
            </div>

            {/* Price Header */}
            <div className="flex items-baseline gap-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <span className="font-heading text-3xl sm:text-4xl font-black text-slate-900">
                {formatEUR(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-slate-400 line-through font-semibold">
                  {formatEUR(product.originalPrice)}
                </span>
              )}
              <span className="text-[11px] text-slate-500 ml-auto font-semibold uppercase tracking-wider">
                Price incl. Malta VAT
              </span>
            </div>

            {/* Short Excerpt */}
            <p className="text-sm text-slate-600 leading-relaxed">
              {product.shortDescription || product.description}
            </p>

            {/* Interactive Actions (Quantity, Add to Cart, Wishlist) */}
            <ProductActions product={product} />
          </div>
        </div>

        {/* Detailed Tabs (Overview, Specs, How to Use) */}
        <div className="mb-20">
          <ProductTabs product={product} />
        </div>

        {/* Related Products Recommendations */}
        {relatedProducts.length > 0 && (
          <div className="pt-12 border-t border-slate-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-heading font-black uppercase tracking-widest text-amber-700">
                  Frequently Paired Gear
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-slate-900 tracking-tight mt-0.5">
                  COMPLETE YOUR DETAILING ARSENAL
                </h3>
              </div>
              <Link
                href={brandPath}
                className="text-xs font-bold uppercase tracking-wider text-amber-700 hover:underline"
              >
                View More {brandName} →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
