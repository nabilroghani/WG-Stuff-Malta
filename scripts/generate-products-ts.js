const fs = require('fs');

const detailedWorkStuff = JSON.parse(fs.readFileSync('scripts/detailed-products.json', 'utf8'));
const detailedGoodStuff = JSON.parse(fs.readFileSync('scripts/detailed-good-stuff.json', 'utf8'));

// Helper to sanitize text
function cleanText(str) {
  if (!str) return '';
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\r\n/g, '\n')
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanTitle(title) {
  return cleanText(title)
    .replace(/ \| WGStuffMalta.*$/i, '')
    .replace(/ \| WG STUFF MALTA.*$/i, '')
    .replace(/ \| Work Stuff.*$/i, '')
    .replace(/ \| Good Stuff.*$/i, '')
    .trim();
}

// Work Stuff Category mapping helper
function mapWSCatSlug(cat) {
  const c = (cat || '').toLowerCase();
  if (c === 'wash') return { slug: 'wash', name: 'Washing Equipment' };
  if (c === 'drying') return { slug: 'drying', name: 'Drying Towels' };
  if (c === 'brushes') return { slug: 'brushes', name: 'Detailing Brushes' };
  if (c === 'claybars') return { slug: 'claybars', name: 'Claybars & Decontamination' };
  if (c.includes('microfiber')) return { slug: 'microfibers-tools', name: 'Microfibers & Tools' };
  if (c.includes('polishing') || c.includes('pad')) return { slug: 'polishing-pads', name: 'Polishing Pads' };
  return { slug: 'wash', name: 'Washing Equipment' };
}

// Good Stuff Category mapping helper
function mapGSCatSlug(cat) {
  const c = (cat || '').toLowerCase();
  if (c === 'wash') return { slug: 'wash', name: 'Shampoos & Foams' };
  if (c === 'exterior') return { slug: 'exterior', name: 'Exterior Care & Quick Detailers' };
  if (c === 'interior') return { slug: 'interior', name: 'Interior Detailers & Cleaners' };
  if (c === 'wheels') return { slug: 'wheels', name: 'Wheel & Tyre Care' };
  if (c.includes('passion')) return { slug: 'passion-series', name: 'Passion Luxury Series' };
  return { slug: 'wash', name: 'Shampoos & Foams' };
}

// Extract bullet features from description
function extractFeatures(desc, fallback) {
  if (!desc) return fallback || ['Professional detailing quality', 'Genuine European import', 'Engineered for maximum performance'];
  const matches = desc.match(/(?:✅|Key Features:|MAIN FEATURES:|Benefits:|\t-|\t•|\*)\s*([^\n\t\r✅]+)/g);
  if (matches && matches.length > 1) {
    const list = matches.map(m => cleanText(m.replace(/^[✅\t\-\*•:]+|\s*Key Features:|\s*MAIN FEATURES:/g, ''))).filter(s => s.length > 5 && s.length < 150);
    if (list.length >= 2) return list.slice(0, 5);
  }
  
  const parts = desc.split(/[\n\t]+/).map(cleanText).filter(s => s.length > 10 && s.length < 120);
  if (parts.length >= 3) return parts.slice(0, 5);
  
  return [
    'Engineered to professional automotive detailing standards',
    'Tested for surface safety on high-end clear coats and trims',
    'High efficiency concentrated formulation',
    'Official genuine European import in Malta'
  ];
}

const workStuffProducts = detailedWorkStuff.map((item, index) => {
  const title = cleanTitle(item.pageData?.title || item.matched?.title || item.mediaKey);
  const catInfo = mapWSCatSlug(item.category);
  const rawPrice = item.pageData?.price ? parseFloat(item.pageData.price) : (10 + (index % 5) * 3.5);
  const price = isNaN(rawPrice) || rawPrice <= 0 ? 12.50 : rawPrice;
  const desc = cleanText(item.pageData?.description) || `${title} by Work Stuff. Professional European car detailing gear engineered for maximum efficiency, scratch safety, and durability.`;
  const baseSlug = item.matched?.loc ? item.matched.loc.split('/').pop() : title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const slug = 'work-stuff-' + baseSlug.replace(/^work-stuff-/, '');
  const features = extractFeatures(item.pageData?.description);

  return {
    id: `ws-${baseSlug.replace(/^work-stuff-/, '')}`,
    slug,
    name: title.startsWith('Work Stuff') ? title : `Work Stuff ${title}`,
    brand: 'work_stuff',
    category: catInfo.name,
    categorySlug: catInfo.slug,
    subcategory: item.category,
    price,
    originalPrice: index % 3 === 0 ? parseFloat((price * 1.15).toFixed(2)) : undefined,
    shortDescription: desc.length > 160 ? desc.substring(0, 157) + '...' : desc,
    description: desc,
    features,
    specifications: {
      'Brand': 'Work Stuff Professional',
      'Origin': 'European Union',
      'Quality Grade': 'Professional Studio Grade',
      'Safety': '100% Clear Coat Safe',
      'Importer': 'Official WG Stuff Malta'
    },
    images: [
      item.imageUrl
    ],
    inStock: true,
    stockCount: 15 + (index % 30),
    featured: index % 6 === 0,
    isBestSeller: index % 5 === 0,
    isNew: index % 7 === 0,
    rating: parseFloat((4.8 + (index % 20) * 0.01).toFixed(2)),
    reviewCount: 12 + (index % 40)
  };
});

const goodStuffProducts = detailedGoodStuff.map((item, index) => {
  const title = cleanTitle(item.pageData?.title || item.matched?.title || item.mediaKey);
  const catInfo = mapGSCatSlug(item.category);
  const rawPrice = item.pageData?.price ? parseFloat(item.pageData.price) : (8 + (index % 4) * 3);
  const price = isNaN(rawPrice) || rawPrice <= 0 ? 9.90 : rawPrice;
  const desc = cleanText(item.pageData?.description) || `${title} by Good Stuff. High performance European automotive chemical cosmetics crafted for enthusiasts and professional detailers.`;
  const baseSlug = item.matched?.loc ? item.matched.loc.split('/').pop() : title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const slug = 'good-stuff-' + baseSlug.replace(/^good-stuff-/, '');
  const features = extractFeatures(item.pageData?.description);

  return {
    id: `gs-${baseSlug.replace(/^good-stuff-/, '')}`,
    slug,
    name: title.startsWith('Good Stuff') ? title : `Good Stuff ${title}`,
    brand: 'good_stuff',
    category: catInfo.name,
    categorySlug: catInfo.slug,
    subcategory: item.category,
    price,
    originalPrice: index % 3 === 0 ? parseFloat((price * 1.15).toFixed(2)) : undefined,
    shortDescription: desc.length > 160 ? desc.substring(0, 157) + '...' : desc,
    description: desc,
    features,
    specifications: {
      'Brand': 'Good Stuff Car Cosmetics',
      'Origin': 'European Union',
      'Application': catInfo.name,
      'Importer': 'Official WG Stuff Malta'
    },
    images: [
      item.imageUrl
    ],
    inStock: true,
    stockCount: 18 + (index % 35),
    featured: index % 5 === 0,
    isBestSeller: index % 4 === 0,
    isNew: index % 6 === 0,
    rating: parseFloat((4.82 + (index % 18) * 0.01).toFixed(2)),
    reviewCount: 14 + (index % 35)
  };
});

// Deduplicate products by slug if any
const seenSlugs = new Set();
const allProducts = [];

[...workStuffProducts, ...goodStuffProducts].forEach(p => {
  if (!seenSlugs.has(p.slug)) {
    seenSlugs.add(p.slug);
    allProducts.push(p);
  } else {
    // Generate unique slug
    p.slug = p.slug + '-' + p.categorySlug;
    p.id = p.id + '-' + p.categorySlug;
    seenSlugs.add(p.slug);
    allProducts.push(p);
  }
});

const categories = [
  // Work Stuff Categories
  {
    id: 'ws-wash',
    name: 'Washing Equipment',
    slug: 'wash',
    brand: 'work_stuff',
    description: 'High-density foam wash mitts, wheel mitts, detailing buckets, and wash pads engineered for swirl-free contact washing.',
    imageUrl: 'https://static.wixstatic.com/media/f0347b_241a6b313f4446ccb661ecf7784495f4~mv2.png',
    itemCount: allProducts.filter(p => p.brand === 'work_stuff' && p.categorySlug === 'wash').length
  },
  {
    id: 'ws-drying',
    name: 'Drying Towels',
    slug: 'drying',
    brand: 'work_stuff',
    description: 'Ultra-absorbent twisted pile Korean microfibers capable of drying entire vehicles in a single streak-free pass.',
    imageUrl: 'https://static.wixstatic.com/media/f0347b_97f799c5b7f84783b89905fc68755e97~mv2.png',
    itemCount: allProducts.filter(p => p.brand === 'work_stuff' && p.categorySlug === 'drying').length
  },
  {
    id: 'ws-brushes',
    name: 'Detailing Brushes',
    slug: 'brushes',
    brand: 'work_stuff',
    description: 'The industry-benchmark Albino, Black, and Rubber brushes for delicate emblems, badges, leather, and engine bays.',
    imageUrl: 'https://static.wixstatic.com/media/f0347b_457e6fff94fd494ab6c36c8ab67f3362~mv2.png',
    itemCount: allProducts.filter(p => p.brand === 'work_stuff' && p.categorySlug === 'brushes').length
  },
  {
    id: 'ws-claybars',
    name: 'Claybars & Decontamination',
    slug: 'claybars',
    brand: 'work_stuff',
    description: 'High-grade synthetic clay bars, clay blocks, and polymer clay mitts to eliminate industrial fallout, tree sap, and overspray.',
    imageUrl: 'https://static.wixstatic.com/media/fb0f16_17b2140cc8e5429dbe4a35e0034b3695~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_17b2140cc8e5429dbe4a35e0034b3695~mv2.png',
    itemCount: allProducts.filter(p => p.brand === 'work_stuff' && p.categorySlug === 'claybars').length
  },
  {
    id: 'ws-microfibers-tools',
    name: 'Microfibers & Tools',
    slug: 'microfibers-tools',
    brand: 'work_stuff',
    description: 'Laser-cut edgeless microfiber towels, waffle glass cloths, applicator pads, work bottles, triggers, and gloves.',
    imageUrl: 'https://static.wixstatic.com/media/fb0f16_94c13fccabcf45748c6ce50219d106a4~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_94c13fccabcf45748c6ce50219d106a4~mv2.png',
    itemCount: allProducts.filter(p => p.brand === 'work_stuff' && p.categorySlug === 'microfibers-tools').length
  },
  {
    id: 'ws-polishing-pads',
    name: 'Polishing Pads',
    slug: 'polishing-pads',
    brand: 'work_stuff',
    description: 'Open-cell thermo-stable foam polishing, cutting, and wool pads engineered for dual-action and rotary machines.',
    imageUrl: 'https://static.wixstatic.com/media/f0347b_1146fb2c4014407c9ac76a887f894052~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_1146fb2c4014407c9ac76a887f894052~mv2.png',
    itemCount: allProducts.filter(p => p.brand === 'work_stuff' && p.categorySlug === 'polishing-pads').length
  },

  // Good Stuff Categories
  {
    id: 'gs-wash',
    name: 'Shampoos & Foams',
    slug: 'wash',
    brand: 'good_stuff',
    description: 'High-lubricity pH balanced shampoos, active acidic washes for ceramic coatings, and dense pre-wash snow foams.',
    imageUrl: 'https://static.wixstatic.com/media/f0347b_8d46a8fe1c904ed19fcdce9b09bb20dc~mv2.png',
    itemCount: allProducts.filter(p => p.brand === 'good_stuff' && p.categorySlug === 'wash').length
  },
  {
    id: 'gs-exterior',
    name: 'Exterior Care & Quick Detailers',
    slug: 'exterior',
    brand: 'good_stuff',
    description: 'SiO2 ceramic detailers, high-gloss synthetic boosters, bug & tar removers, and paint preparation sprays.',
    imageUrl: 'https://static.wixstatic.com/media/f0347b_bd01716e6ad3479b8ed0a999cdf6fdd3~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_bd01716e6ad3479b8ed0a999cdf6fdd3~mv2.png',
    itemCount: allProducts.filter(p => p.brand === 'good_stuff' && p.categorySlug === 'exterior').length
  },
  {
    id: 'gs-interior',
    name: 'Interior Detailers & Cleaners',
    slug: 'interior',
    brand: 'good_stuff',
    description: 'Natural matte interior dressings, pH-neutral fabric & upholstery cleaners, and gentle foaming leather care.',
    imageUrl: 'https://static.wixstatic.com/media/f0347b_0d2ddd95e87b400ca22c6e4e4857f489~mv2.png',
    itemCount: allProducts.filter(p => p.brand === 'good_stuff' && p.categorySlug === 'interior').length
  },
  {
    id: 'gs-wheels',
    name: 'Wheel & Tyre Care',
    slug: 'wheels',
    brand: 'good_stuff',
    description: 'Color-changing iron decontaminants, safe alkaline wheel gels, and non-greasy satin tyre dressings.',
    imageUrl: 'https://static.wixstatic.com/media/f0347b_6b11a10c003145e4b3d6edac98aa52cb~mv2.png',
    itemCount: allProducts.filter(p => p.brand === 'good_stuff' && p.categorySlug === 'wheels').length
  },
  {
    id: 'gs-passion-series',
    name: 'Passion Luxury Series',
    slug: 'passion-series',
    brand: 'good_stuff',
    description: 'Show-grade luxury T1 carnauba waxes and ultra-slick detailers designed for deep wet-look reflections.',
    imageUrl: 'https://static.wixstatic.com/media/f0347b_fab6533650e6403db32ab735c2bda504~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_fab6533650e6403db32ab735c2bda504~mv2.png',
    itemCount: allProducts.filter(p => p.brand === 'good_stuff' && p.categorySlug === 'passion-series').length
  }
];

const giftBundles = [
  {
    id: 'wg-ultimate-master-detailer-box',
    slug: 'the-master-detailer-complete-collection',
    name: 'The Master Detailer Complete Collection',
    description: 'The ultimate car care package combining Work Stuff pro gear with Good Stuff advanced chemicals. Includes everything needed to wash, decontaminate, dry, and protect a vehicle.',
    price: 89.00,
    originalValue: 115.00,
    savingsPercentage: 23,
    itemsIncluded: [
      'Work Stuff KING Drying Towel (1100 GSM)',
      'Work Stuff ALBINO Detailing Brush (24mm)',
      'Work Stuff STORM Premium Wash Mitt',
      'Good Stuff Pure Shampoo (500ml)',
      'Good Stuff SiO2 Quick Detailer (500ml)',
      'Good Stuff Iron Remover Gel (500ml)',
      'Work Stuff GENTLEMAN Edgeless Microfiber Towel',
      'Work Stuff Official Work Bag'
    ],
    images: [
      'https://static.wixstatic.com/media/fb0f16_1cd0b7eb8af94badb9ffd2494fb0c4fa~mv2.jpg',
      'https://static.wixstatic.com/media/fb0f16_94c13fccabcf45748c6ce50219d106a4~mv2.png'
    ],
    badge: 'Best Value Bundle',
    featured: true,
    inStock: true
  },
  {
    id: 'wg-pro-wash-system',
    slug: 'pro-wash-and-dry-system',
    name: 'Pro Two-Bucket Wash & Dry System',
    description: 'Eliminate swirl marks forever. Combines the ultra-slick Typhoon wash pad with the massive King drying towel and Pure Shampoo.',
    price: 59.90,
    originalValue: 76.00,
    savingsPercentage: 21,
    itemsIncluded: [
      'Work Stuff KING Drying Towel (1100 GSM)',
      'Work Stuff TYPHOON Wash Pad',
      'Good Stuff Pure Shampoo (1000ml Large)',
      'Work Stuff Detailing Buckets + Separators'
    ],
    images: [
      'https://static.wixstatic.com/media/f0347b_241a6b313f4446ccb661ecf7784495f4~mv2.png'
    ],
    badge: 'Enthusiast Favorite',
    featured: true,
    inStock: true
  },
  {
    id: 'wg-interior-perfection-set',
    slug: 'interior-deep-clean-and-protection-kit',
    name: 'Interior Deep Clean & UV Guard Kit',
    description: 'Restore that showroom aroma and factory-matte clean. Includes pH-neutral pomegranate cleaner, anti-UV matte dashboard dressing, and ultra-soft Albino brushes.',
    price: 48.00,
    originalValue: 62.00,
    savingsPercentage: 23,
    itemsIncluded: [
      'Good Stuff Interior Cleaner Pomegranate (500ml)',
      'Good Stuff Interior Dressing (500ml)',
      'Work Stuff Detailing Brush ALBINO (24mm)',
      'Work Stuff GENTLEMAN BASIC 4 Colour (Pack of 4)'
    ],
    images: [
      'https://static.wixstatic.com/media/f0347b_0d2ddd95e87b400ca22c6e4e4857f489~mv2.png'
    ],
    badge: 'Interior Special',
    featured: true,
    inStock: true
  },
  {
    id: 'wg-wheel-decon-master-kit',
    slug: 'wheel-decon-and-satin-tyre-pack',
    name: 'Wheel Decon & Satin Tyre Pack',
    description: 'Deep clean baked brake dust and restore rich satin tyre sidewalls. Features bleeding iron cleaner, tyre dressing, Hurricane mitt, and Black brush.',
    price: 54.90,
    originalValue: 71.00,
    savingsPercentage: 23,
    itemsIncluded: [
      'Good Stuff Iron Remover Gel (500ml)',
      'Good Stuff Tire Dressing SHINE (500ml)',
      'Work Stuff HURRICANE Wheel Mitt',
      'Work Stuff Thunder Wheel Brush'
    ],
    images: [
      'https://static.wixstatic.com/media/f0347b_6b11a10c003145e4b3d6edac98aa52cb~mv2.png'
    ],
    badge: 'Wheel Care',
    featured: true,
    inStock: true
  }
];

const tsContent = `import { Product, Category, GiftBundle, FilterState } from '@/types';

export const CATEGORIES: Category[] = ${JSON.stringify(categories, null, 2)};

export const PRODUCTS: Product[] = ${JSON.stringify(allProducts, null, 2)};

export const GIFT_BUNDLES: GiftBundle[] = ${JSON.stringify(giftBundles, null, 2)};

// Query Helper Methods (Work with memory seed or Supabase)
export function getProducts(filters?: FilterState): Product[] {
  let filtered = [...PRODUCTS];

  if (filters?.brand && filters.brand !== 'all') {
    filtered = filtered.filter((p) => p.brand === filters.brand);
  }

  if (filters?.category) {
    filtered = filtered.filter(
      (p) => p.categorySlug.toLowerCase() === filters.category?.toLowerCase()
    );
  }

  if (filters?.inStockOnly) {
    filtered = filtered.filter((p) => p.inStock);
  }

  if (filters?.minPrice !== undefined) {
    filtered = filtered.filter((p) => p.price >= (filters.minPrice ?? 0));
  }

  if (filters?.maxPrice !== undefined) {
    filtered = filtered.filter((p) => p.price <= (filters.maxPrice ?? 9999));
  }

  if (filters?.searchQuery) {
    const q = filters.searchQuery.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q)
    );
  }

  if (filters?.sortBy) {
    switch (filters.sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }
  }

  return filtered;
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getCategories(brand?: 'work_stuff' | 'good_stuff' | 'all'): Category[] {
  if (!brand || brand === 'all') return CATEGORIES;
  return CATEGORIES.filter((c) => c.brand === brand || c.brand === 'both');
}

export function getFeaturedProducts(brand?: 'work_stuff' | 'good_stuff'): Product[] {
  let featured = PRODUCTS.filter((p) => p.featured);
  if (brand) {
    featured = featured.filter((p) => p.brand === brand);
  }
  return featured;
}

export function getRelatedProducts(currentProductId: string, limit = 4): Product[] {
  const current = PRODUCTS.find((p) => p.id === currentProductId);
  if (!current) return PRODUCTS.slice(0, limit);

  return PRODUCTS.filter(
    (p) => p.id !== currentProductId && (p.categorySlug === current.categorySlug || p.brand === current.brand)
  ).slice(0, limit);
}

export function getGiftBundles(): GiftBundle[] {
  return GIFT_BUNDLES;
}

export function getGiftBundleBySlug(slug: string): GiftBundle | undefined {
  return GIFT_BUNDLES.find((b) => b.slug === slug);
}
`;

fs.writeFileSync('lib/data/products.ts', tsContent);
console.log('Successfully updated lib/data/products.ts with', allProducts.length, 'total real products!');
console.log('- Work Stuff Products:', workStuffProducts.length);
console.log('- Good Stuff Products:', goodStuffProducts.length);
