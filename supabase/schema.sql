-- WG Stuff Malta — Supabase PostgreSQL Schema

-- 1. Create Enums & Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Categories Table
CREATE TABLE IF NOT EXISTS public.categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    brand TEXT NOT NULL CHECK (brand IN ('work_stuff', 'good_stuff', 'both')),
    description TEXT,
    image_url TEXT,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 3. Products Table
CREATE TABLE IF NOT EXISTS public.products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    brand TEXT NOT NULL CHECK (brand IN ('work_stuff', 'good_stuff')),
    category_slug TEXT NOT NULL,
    subcategory TEXT,
    price NUMERIC(10, 2) NOT NULL,
    original_price NUMERIC(10, 2),
    description TEXT NOT NULL,
    short_description TEXT,
    features TEXT[] DEFAULT '{}'::TEXT[],
    specifications JSONB DEFAULT '{}'::JSONB,
    images TEXT[] DEFAULT '{}'::TEXT[],
    volume_or_size TEXT,
    in_stock BOOLEAN DEFAULT true,
    stock_count INT DEFAULT 50,
    featured BOOLEAN DEFAULT false,
    is_best_seller BOOLEAN DEFAULT false,
    is_new BOOLEAN DEFAULT false,
    rating NUMERIC(3, 2) DEFAULT 5.00,
    review_count INT DEFAULT 12,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 4. Gift Bundles Table
CREATE TABLE IF NOT EXISTS public.gift_bundles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    original_value NUMERIC(10, 2) NOT NULL,
    items_included TEXT[] DEFAULT '{}'::TEXT[],
    images TEXT[] DEFAULT '{}'::TEXT[],
    badge TEXT DEFAULT 'Gift Bundle',
    featured BOOLEAN DEFAULT true,
    in_stock BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 5. Orders Table
CREATE TABLE IF NOT EXISTS public.orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_name TEXT,
    customer_email TEXT NOT NULL,
    customer_phone TEXT,
    delivery_address JSONB,
    items JSONB NOT NULL,
    subtotal NUMERIC(10, 2) NOT NULL,
    shipping NUMERIC(10, 2) NOT NULL DEFAULT 0.00,
    total NUMERIC(10, 2) NOT NULL,
    currency TEXT DEFAULT 'EUR' NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'processing', 'shipped', 'delivered', 'cancelled')),
    stripe_session_id TEXT UNIQUE,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 6. Order Items Table
CREATE TABLE IF NOT EXISTS public.order_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE,
    product_id TEXT NOT NULL,
    product_name TEXT NOT NULL,
    quantity INT NOT NULL CHECK (quantity > 0),
    price_at_purchase NUMERIC(10, 2) NOT NULL,
    image_url TEXT,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 7. Indexes for High Performance
CREATE INDEX IF NOT EXISTS idx_products_brand ON public.products(brand);
CREATE INDEX IF NOT EXISTS idx_products_category ON public.products(category_slug);
CREATE INDEX IF NOT EXISTS idx_products_featured ON public.products(featured);
CREATE INDEX IF NOT EXISTS idx_products_slug ON public.products(slug);
CREATE INDEX IF NOT EXISTS idx_categories_brand ON public.categories(brand);
CREATE INDEX IF NOT EXISTS idx_categories_slug ON public.categories(slug);
CREATE INDEX IF NOT EXISTS idx_orders_email ON public.orders(customer_email);
CREATE INDEX IF NOT EXISTS idx_orders_stripe_session ON public.orders(stripe_session_id);

-- 8. Row Level Security (RLS) Policies
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gift_bundles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;

-- Public Read Policies
CREATE POLICY "Allow public read on categories" ON public.categories FOR SELECT USING (true);
CREATE POLICY "Allow public read on products" ON public.products FOR SELECT USING (true);
CREATE POLICY "Allow public read on gift_bundles" ON public.gift_bundles FOR SELECT USING (true);

-- Public Guest Checkout Insert Policies
CREATE POLICY "Allow public insert on orders" ON public.orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert on order_items" ON public.order_items FOR INSERT WITH CHECK (true);

-- Service Role Full Access Policies
CREATE POLICY "Service role full access on categories" ON public.categories USING (auth.jwt() ->> 'role' = 'service_role');
CREATE POLICY "Service role full access on products" ON public.products USING (auth.jwt() ->> 'role' = 'service_role');
CREATE POLICY "Service role full access on gift_bundles" ON public.gift_bundles USING (auth.jwt() ->> 'role' = 'service_role');
CREATE POLICY "Service role full access on orders" ON public.orders USING (auth.jwt() ->> 'role' = 'service_role');
CREATE POLICY "Service role full access on order_items" ON public.order_items USING (auth.jwt() ->> 'role' = 'service_role');
