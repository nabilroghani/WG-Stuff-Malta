import { MetadataRoute } from 'next';
import { PRODUCTS, CATEGORIES } from '@/lib/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wgstuffmalta.com';

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/work-stuff`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/good-stuff`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gifts`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Work Stuff Category Routes
  const workStuffCategoryRoutes: MetadataRoute.Sitemap = CATEGORIES.filter(
    (c) => c.brand === 'work_stuff'
  ).map((cat) => ({
    url: `${baseUrl}/work-stuff/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.85,
  }));

  // Good Stuff Category Routes
  const goodStuffCategoryRoutes: MetadataRoute.Sitemap = CATEGORIES.filter(
    (c) => c.brand === 'good_stuff'
  ).map((cat) => ({
    url: `${baseUrl}/good-stuff/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.85,
  }));

  // Product Routes
  const productRoutes: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: `${baseUrl}/product/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...workStuffCategoryRoutes,
    ...goodStuffCategoryRoutes,
    ...productRoutes,
  ];
}
