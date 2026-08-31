-- WG Stuff Malta — Seed Data for Supabase

-- Insert Categories
INSERT INTO public.categories (name, slug, brand, description, image_url, sort_order)
VALUES
  ('Washing Equipment', 'wash', 'work_stuff', 'High-density foam wash mitts, wheel mitts, and microfiber wash pads.', 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=800&q=80', 1),
  ('Drying Towels', 'drying', 'work_stuff', 'Ultra-absorbent twisted pile Korean microfibers capable of drying entire vehicles.', 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80', 2),
  ('Detailing Brushes', 'brushes', 'work_stuff', 'The benchmark Albino, Black, and Rubber brushes for delicate emblems and wheels.', 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80', 3),
  ('Claybars & Decontamination', 'claybars', 'work_stuff', 'High-grade synthetic clay bars and polymer clay mitts.', 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80', 4),
  ('Microfibers & Tools', 'microfibers-tools', 'work_stuff', 'Laser-cut edgeless microfiber towels, waffle glass cloths, and tools.', 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=800&q=80', 5),
  ('Polishing Pads', 'polishing-pads', 'work_stuff', 'Open-cell thermo-stable foam polishing and cutting pads.', 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80', 6),
  ('Shampoos & Foams', 'wash', 'good_stuff', 'High-lubricity pH balanced shampoos and active acidic washes.', 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80', 7),
  ('Exterior Care & Quick Detailers', 'exterior', 'good_stuff', 'SiO2 ceramic detailers, synthetic boosters, and bug removers.', 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80', 8),
  ('Interior Detailers & Cleaners', 'interior', 'good_stuff', 'Natural matte interior dressings and pH-neutral fabric cleaners.', 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80', 9),
  ('Wheel & Tyre Care', 'wheels', 'good_stuff', 'Color-changing iron decontaminants and non-greasy tyre dressings.', 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80', 10),
  ('Passion Luxury Series', 'passion-series', 'good_stuff', 'Show-grade luxury T1 carnauba waxes and ultra-slick detailers.', 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80', 11)
ON CONFLICT (slug) DO NOTHING;

-- Insert Featured Products
INSERT INTO public.products (slug, name, brand, category_slug, subcategory, price, original_price, description, short_description, features, specifications, images, volume_or_size, in_stock, featured, is_best_seller, is_new, rating, review_count)
VALUES
  (
    'work-stuff-albino-detailing-brush',
    'Work Stuff ALBINO Detailing Brush',
    'work_stuff',
    'brushes',
    'Interior & Delicate Surfaces',
    9.90,
    11.50,
    'The Work Stuff ALBINO Detailing Brush is globally renowned among professional detailers for delicate surface safe cleaning. Feather-tip synthetic bristles guarantee 100% scratch-free agitation on delicate piano black trims, gauge clusters, infotainment touchscreens, emblems, and fine leather seats.',
    'Ultra-soft white synthetic bristles for piano black trims, navigation screens, and fragile leather.',
    ARRAY['Feather-tip ultra-soft synthetic bristles', 'Safe for sensitive high-gloss piano black and touchscreens', 'Dual-lacquered chemical-resistant wooden handle', 'Ergonomic grip with hanging hole for drying'],
    '{"Bristle Material": "Ultra-Soft Synthetic Micro-Filament", "Handle Construction": "Double-Lacquered Hardwood", "Chemical Resistance": "High (pH 2 - pH 13)"}'::jsonb,
    ARRAY['https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1000&q=85'],
    '24mm Medium',
    true,
    true,
    true,
    false,
    4.95,
    38
  ),
  (
    'work-stuff-king-drying-towel',
    'Work Stuff KING Twisted Pile Drying Towel (1100 GSM)',
    'work_stuff',
    'drying',
    'Heavy Drying',
    24.90,
    28.00,
    'Featuring ultra-dense 1100 GSM twisted-loop Korean microfiber technology measuring a massive 90 x 73 cm, the Work Stuff KING glides effortlessly across clear coats, absorbing massive amounts of water in seconds with zero drag or linting.',
    '1100 GSM monster twisted pile microfiber (90x73cm). Dries 2 full-size SUVs in a single pass without wringing.',
    ARRAY['1100 GSM premium twisted loop Korean microfiber', 'Massive 90 x 73 cm size dries entire vehicles effortlessly', 'Seamless rounded microfiber edges to eliminate scratching', 'Holds up to 3.5 liters of water in a single wash session'],
    '{"Density": "1100 GSM", "Dimensions": "90 x 73 cm", "Fiber Structure": "Double-Sided Twisted Loop"}'::jsonb,
    ARRAY['https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1000&q=85'],
    '90 x 73 cm',
    true,
    true,
    true,
    false,
    5.00,
    52
  ),
  (
    'good-stuff-sour-shampoo-acidic',
    'Good Stuff Sour Shampoo (Acidic Decontaminating Wash)',
    'good_stuff',
    'wash',
    'Coating Rejuvenation & Hard Water',
    12.90,
    14.50,
    'Essential for car detailing in Malta! The Good Stuff Sour Shampoo features a specialized acidic pH formula designed to dissolve mineral deposits, limescale, and hard water spots caused by local tap water while recharging hydrophobic ceramic coatings.',
    'Acidic pH shampoo formulated to dissolve mineral water spots and unclog ceramic coating hydrophobic properties.',
    ARRAY['Acidic formula (pH 3-4) dissolves hard water mineral deposits', 'Recharges and unclogs hydrophobic ceramic coatings', 'High lubricity prevents wash-induced marring', 'Refreshing green apple scent'],
    '{"pH Level": "3.5 (Acidic)", "Dilution Ratio": "1:200 to 1:500", "Scent": "Fresh Green Apple"}'::jsonb,
    ARRAY['https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=85'],
    '500ml Bottle',
    true,
    true,
    true,
    false,
    4.97,
    49
  ),
  (
    'good-stuff-sio2-ceramic-quick-detailer',
    'Good Stuff SiO2 Ceramic Quick Detailer',
    'good_stuff',
    'exterior',
    'Ceramic Booster & Sealant',
    16.90,
    19.50,
    'Good Stuff SiO2 Detailer deposits a microscopic ceramic protective layer with every spray, boosting optical depth, enhancing hydrophobic water repellency, and providing self-cleaning properties.',
    'Infused with silicon dioxide (SiO2) for extreme water sheeting, hyper-slickness, and 3-month protection.',
    ARRAY['High-purity SiO2 ceramic infusion creates intense hydrophobicity', 'Deep liquid-wet gloss and mirror-like reflection', 'Up to 8-12 weeks of durable paint protection', 'Effortless wipe-off with zero streaks'],
    '{"Protection Duration": "Up to 3 Months", "Active Ingredients": "Polysilazane & SiO2 Nano Polymers", "Scent": "Sweet Bubblegum"}'::jsonb,
    ARRAY['https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=85'],
    '500ml Trigger Spray',
    true,
    true,
    true,
    false,
    4.98,
    63
  ),
  (
    'good-stuff-wheel-cleaner-bleeding-iron',
    'Good Stuff Wheel Cleaner Bleeding (Color-Changing Iron Remover)',
    'good_stuff',
    'wheels',
    'Iron Fallout & Brake Dust',
    13.90,
    16.00,
    'Good Stuff Bleeding Wheel Cleaner features a thick clinging gel that dwells on vertical wheel faces. Its chemical indicator reacts with iron particles, turning royal purple as it dissolves stubborn burnt-on brake dust.',
    'High-viscosity gel formula that turns vibrant purple as it dissolves embedded hot metallic brake dust.',
    ARRAY['Thick clinging gel clings to vertical wheel surfaces', 'Vivid color-changing purple reaction indicator', 'pH-neutral and safe on all wheel finishes'],
    '{"pH": "Neutral", "Reaction Time": "2 - 3 minutes", "Formula": "High-viscosity clinging gel"}'::jsonb,
    ARRAY['https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=85'],
    '500ml Trigger Spray',
    true,
    true,
    true,
    false,
    4.96,
    47
  ),
  (
    'good-stuff-passion-carnauba-luxury-wax',
    'Good Stuff PASSION Luxury Carnauba Show Wax (100ml)',
    'good_stuff',
    'passion-series',
    'Show Wax',
    39.90,
    45.00,
    'Handcrafted with highest grade Brazilian T1 Carnauba combined with nourishing oils. It imparts an unmatched liquid warm reflection, masks micro-imperfections, and leaves paintwork glowing with intoxicating tropical fragrance.',
    'Handcrafted Brazilian Grade-1 Carnauba paste wax for breathtaking warm depth and show-car reflections.',
    ARRAY['Handcrafted with highest grade Brazilian T1 Carnauba', 'Exceptional depth, warmth, and metallic flake pop', 'Includes premium foam applicator pad inside metal tin'],
    '{"Carnauba Content": "Grade 1 Pure Brazilian T1", "Container": "Collector Black Aluminum Jar"}'::jsonb,
    ARRAY['https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=85'],
    '100ml Luxury Tin',
    true,
    true,
    false,
    true,
    5.00,
    31
  )
ON CONFLICT (slug) DO NOTHING;

-- Insert Gift Bundles
INSERT INTO public.gift_bundles (slug, name, description, price, original_value, items_included, images, badge, featured, in_stock)
VALUES
  (
    'the-master-detailer-complete-collection',
    'The Master Detailer Complete Collection',
    'The ultimate car care package combining Work Stuff pro gear with Good Stuff advanced chemicals.',
    89.00,
    115.00,
    ARRAY['Work Stuff KING Twisted Pile Drying Towel (90x73cm)', 'Work Stuff ALBINO Detailing Brush (24mm)', 'Work Stuff STORM Premium Wash Mitt', 'Good Stuff Sour Shampoo (500ml)', 'Good Stuff SiO2 Ceramic Quick Detailer (500ml)', 'Good Stuff Wheel Cleaner Bleeding (500ml)', 'Work Stuff GENTLEMAN Edgeless Microfiber Towel', 'Official WG Stuff Malta Detailing Bag'],
    ARRAY['https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1000&q=85'],
    'Best Value Bundle',
    true,
    true
  ),
  (
    'pro-two-bucket-wash-and-dry-system',
    'Pro Two-Bucket Wash & Dry System',
    'Combines the ultra-slick Storm wash mitt with the massive King drying towel and anti-hardwater Sour Shampoo.',
    59.90,
    76.00,
    ARRAY['Work Stuff KING Drying Towel (1100 GSM)', 'Work Stuff STORM Wash Mitt', 'Good Stuff Sour Shampoo (1000ml Large)', 'Work Stuff ZEPHYR Waffle Glass Towel'],
    ARRAY['https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1000&q=85'],
    'Enthusiast Favorite',
    true,
    true
  )
ON CONFLICT (slug) DO NOTHING;
