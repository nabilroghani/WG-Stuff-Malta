export type ProductBrand = 'work_stuff' | 'good_stuff';

export type WorkStuffCategory =
  | 'wash'
  | 'drying'
  | 'brushes'
  | 'claybars'
  | 'microfibers-tools'
  | 'polishing-pads';

export type GoodStuffCategory =
  | 'wash'
  | 'exterior'
  | 'interior'
  | 'wheels'
  | 'passion-series';

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: ProductBrand;
  category: string;
  categorySlug: string;
  subcategory?: string;
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription?: string;
  features: string[];
  specifications?: Record<string, string>;
  images: string[];
  volumeOrSize?: string;
  sizeOptions?: string[];
  inStock: boolean;
  stockCount: number;
  featured: boolean;
  isBestSeller?: boolean;
  isNew?: boolean;
  rating: number;
  reviewCount: number;
  createdAt?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  brand: 'work_stuff' | 'good_stuff' | 'both';
  description: string;
  imageUrl: string;
  itemCount?: number;
}

export interface GiftBundle {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  originalValue: number;
  savingsPercentage: number;
  itemsIncluded: string[];
  images: string[];
  badge?: string;
  featured: boolean;
  inStock: boolean;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedSize?: string;
}

export interface OrderCustomer {
  name: string;
  email: string;
  phone?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  postalCode?: string;
  country?: string;
  notes?: string;
}

export interface Order {
  id: string;
  customerName?: string;
  customerEmail: string;
  customerPhone?: string;
  deliveryAddress?: OrderCustomer;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  currency: string;
  status: 'pending' | 'paid' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  stripeSessionId?: string;
  createdAt: string;
}

export interface FilterState {
  brand?: ProductBrand | 'all';
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  inStockOnly?: boolean;
  searchQuery?: string;
  sortBy?: 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest';
}
