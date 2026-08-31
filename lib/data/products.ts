import { Product, Category, GiftBundle, FilterState } from '@/types';

export const CATEGORIES: Category[] = [
  // Work Stuff Categories
  {
    id: 'ws-wash',
    name: 'Washing Equipment',
    slug: 'wash',
    brand: 'work_stuff',
    description: 'High-density foam wash mitts, wheel mitts, and microfiber wash pads engineered for swirl-free contact washing.',
    imageUrl: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=800&q=80',
    itemCount: 4,
  },
  {
    id: 'ws-drying',
    name: 'Drying Towels',
    slug: 'drying',
    brand: 'work_stuff',
    description: 'Ultra-absorbent twisted pile Korean microfibers capable of drying entire vehicles in a single streak-free pass.',
    imageUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
    itemCount: 4,
  },
  {
    id: 'ws-brushes',
    name: 'Detailing Brushes',
    slug: 'brushes',
    brand: 'work_stuff',
    description: 'The industry-benchmark Albino, Black, and Rubber brushes for delicate emblems, badges, leather, and engine bays.',
    imageUrl: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80',
    itemCount: 5,
  },
  {
    id: 'ws-claybars',
    name: 'Claybars & Decontamination',
    slug: 'claybars',
    brand: 'work_stuff',
    description: 'High-grade synthetic clay bars and polymer clay mitts to eliminate industrial fallout, tree sap, and overspray.',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    itemCount: 2,
  },
  {
    id: 'ws-microfibers-tools',
    name: 'Microfibers & Tools',
    slug: 'microfibers-tools',
    brand: 'work_stuff',
    description: 'Laser-cut edgeless microfiber towels, waffle glass cloths, applicator pads, and magnetic water drop collectors.',
    imageUrl: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=800&q=80',
    itemCount: 4,
  },
  {
    id: 'ws-polishing-pads',
    name: 'Polishing Pads',
    slug: 'polishing-pads',
    brand: 'work_stuff',
    description: 'Open-cell thermo-stable foam polishing and cutting pads engineered for dual-action and rotary machines.',
    imageUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
    itemCount: 3,
  },

  // Good Stuff Categories
  {
    id: 'gs-wash',
    name: 'Shampoos & Foams',
    slug: 'wash',
    brand: 'good_stuff',
    description: 'High-lubricity pH balanced shampoos, active acidic washes for ceramic coatings, and dense pre-wash snow foams.',
    imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    itemCount: 3,
  },
  {
    id: 'gs-exterior',
    name: 'Exterior Care & Quick Detailers',
    slug: 'exterior',
    brand: 'good_stuff',
    description: 'SiO2 ceramic detailers, high-gloss synthetic boosters, bug & tar removers, and paint preparation sprays.',
    imageUrl: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    itemCount: 4,
  },
  {
    id: 'gs-interior',
    name: 'Interior Detailers & Cleaners',
    slug: 'interior',
    brand: 'good_stuff',
    description: 'Natural matte interior dressings, pH-neutral fabric & upholstery cleaners, and gentle foaming leather care.',
    imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80',
    itemCount: 4,
  },
  {
    id: 'gs-wheels',
    name: 'Wheel & Tyre Care',
    slug: 'wheels',
    brand: 'good_stuff',
    description: 'Color-changing iron decontaminants, safe alkaline wheel gels, and non-greasy satin tyre dressings.',
    imageUrl: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
    itemCount: 3,
  },
  {
    id: 'gs-passion-series',
    name: 'Passion Luxury Series',
    slug: 'passion-series',
    brand: 'good_stuff',
    description: 'Show-grade luxury T1 carnauba waxes and ultra-slick detailers designed for deep wet-look reflections.',
    imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
    itemCount: 2,
  },
];

export const PRODUCTS: Product[] = [
  // ================= WORK STUFF PRODUCTS =================
  {
    id: 'ws-albino-brush',
    slug: 'work-stuff-albino-detailing-brush',
    name: 'Work Stuff ALBINO Detailing Brush',
    brand: 'work_stuff',
    category: 'Detailing Brushes',
    categorySlug: 'brushes',
    subcategory: 'Interior & Delicate Surfaces',
    price: 9.90,
    originalPrice: 11.50,
    shortDescription: 'Ultra-soft white synthetic bristles for piano black trims, navigation screens, and fragile leather.',
    description: 'The Work Stuff ALBINO Detailing Brush is globally renowned among professional detailers for delicate surface safe cleaning. Crafted with the softest feather-tip synthetic bristles, it guarantees 100% scratch-free agitation on delicate piano black trims, gauge clusters, infotainment touchscreens, emblems, and fine leather seats. The durable plastic handle with lacquered coating offers unmatched chemical resistance.',
    features: [
      'Feather-tip ultra-soft synthetic bristles',
      'Safe for sensitive high-gloss piano black and touchscreens',
      'Dual-lacquered chemical-resistant wooden handle',
      'Ergonomic grip with hanging hole for drying',
      'Available in 16mm, 24mm, and 30mm diameters',
    ],
    specifications: {
      'Bristle Material': 'Ultra-Soft Synthetic Micro-Filament',
      'Handle Construction': 'Double-Lacquered Hardwood',
      'Chemical Resistance': 'High (pH 2 - pH 13)',
      'Diameter Options': '16mm / 24mm / 30mm',
      'Origin': 'European Union',
    },
    images: [
      'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1000&q=85',
    ],
    volumeOrSize: '24mm Medium',
    sizeOptions: ['16mm Small', '24mm Medium', '30mm Large'],
    inStock: true,
    stockCount: 42,
    featured: true,
    isBestSeller: true,
    isNew: false,
    rating: 4.95,
    reviewCount: 38,
  },
  {
    id: 'ws-black-brush',
    slug: 'work-stuff-black-detailing-brush',
    name: 'Work Stuff BLACK Detailing Brush',
    brand: 'work_stuff',
    category: 'Detailing Brushes',
    categorySlug: 'brushes',
    subcategory: 'Wheels & Engine Bay',
    price: 8.50,
    shortDescription: 'High-density, chemical-resistant natural & synthetic blend for stubborn dirt, wheel bolts, and engine bays.',
    description: 'Engineered for heavy-duty cleaning tasks. The Work Stuff BLACK Detailing Brush utilizes dense, resilient bristles designed to tackle tough baked-on brake dust, engine bay grease, door jamb grime, and exterior textured plastics. Fully resistant to aggressive wheel cleaners, degreasers, and APCs.',
    features: [
      'Stout, resilient bristle blend for superior cleaning power',
      'Maximum chemical resistance against wheel cleaners & degreasers',
      'Solid lacquered plastic handle with no metal components',
      'Ideal for wheel lug nuts, calipers, engine bays, and exhaust tips',
    ],
    specifications: {
      'Bristle Material': 'Stiff Chemical-Resistant Composite',
      'Handle': 'Full Resin Lacquered Coating',
      'Application': 'Wheels, Engine Bay, Exterior Plastics',
      'Origin': 'European Union',
    },
    images: [
      'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1000&q=85',
    ],
    volumeOrSize: '24mm Medium',
    sizeOptions: ['16mm Small', '24mm Medium', '30mm Large'],
    inStock: true,
    stockCount: 28,
    featured: false,
    isBestSeller: true,
    rating: 4.90,
    reviewCount: 24,
  },
  {
    id: 'ws-rubber-albino-brush',
    slug: 'work-stuff-rubber-albino-detailing-brush',
    name: 'Work Stuff RUBBER ALBINO Detailing Brush',
    brand: 'work_stuff',
    category: 'Detailing Brushes',
    categorySlug: 'brushes',
    subcategory: 'Ultra-Delicate Surfaces',
    price: 11.90,
    originalPrice: 13.50,
    shortDescription: 'Full rubber-coated handle with Albino ultra-soft bristles for zero-risk accidental contact with paint.',
    description: 'The ultimate protection against accidental slips and strikes. The Work Stuff RUBBER ALBINO features an all-rubber soft grip body combined with our signature ultra-soft Albino synthetic bristles. Even if you accidentally touch alloy wheel spokes or clear coat, the soft rubber prevents any scratches or dents.',
    features: [
      'Full protective rubberized body & collar',
      'Zero risk of chipping delicate wheel paint or carbon fiber',
      'Ultra-soft Albino synthetic bristles',
      'Superior wet grip even with soapy hands',
    ],
    specifications: {
      'Handle Material': 'Soft Thermoplastic Rubber',
      'Bristle Type': 'Albino Synthetic Soft',
      'Safety': '100% Scratch-Safe Coating',
    },
    images: [
      'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1000&q=85',
    ],
    volumeOrSize: '24mm',
    sizeOptions: ['24mm Standard'],
    inStock: true,
    stockCount: 19,
    featured: true,
    isNew: true,
    rating: 5.00,
    reviewCount: 15,
  },
  {
    id: 'ws-king-drying-towel',
    slug: 'work-stuff-king-drying-towel',
    name: 'Work Stuff KING Twisted Pile Drying Towel (1100 GSM)',
    brand: 'work_stuff',
    category: 'Drying Towels',
    categorySlug: 'drying',
    subcategory: 'Heavy Drying',
    price: 24.90,
    originalPrice: 28.00,
    shortDescription: '1100 GSM monster twisted pile microfiber (90x73cm). Dries 2 full-size SUVs in a single pass without wringing.',
    description: 'The undisputed king of automotive drying towels. Featuring ultra-dense 1100 GSM twisted-loop Korean microfiber technology measuring a massive 90 x 73 cm, the Work Stuff KING glides effortlessly across clear coats, absorbing massive amounts of water in seconds with zero drag, linting, or micro-marring. A must-have for Malta detailers battling quick water spotting in sunny weather.',
    features: [
      '1100 GSM premium twisted loop Korean microfiber',
      'Massive 90 x 73 cm size dries entire vehicles effortlessly',
      'Seamless rounded microfiber edges to eliminate scratching',
      'Holds up to 3.5 liters of water in a single wash session',
    ],
    specifications: {
      'Density': '1100 GSM (Grams per Square Meter)',
      'Dimensions': '90 x 73 cm',
      'Fiber Structure': 'Double-Sided Twisted Loop',
      'Edge': 'Soft Microfiber Bound Edge',
    },
    images: [
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1000&q=85',
    ],
    volumeOrSize: '90 x 73 cm',
    inStock: true,
    stockCount: 35,
    featured: true,
    isBestSeller: true,
    rating: 5.00,
    reviewCount: 52,
  },
  {
    id: 'ws-prince-drying-towel',
    slug: 'work-stuff-prince-drying-towel',
    name: 'Work Stuff PRINCE Twisted Pile Drying Towel (1100 GSM)',
    brand: 'work_stuff',
    category: 'Drying Towels',
    categorySlug: 'drying',
    subcategory: 'Compact & Motorcycle Drying',
    price: 14.90,
    shortDescription: '1100 GSM twisted loop microfiber (55x50cm). Ideal for hatchbacks, motorcycles, and door jambs.',
    description: 'The compact sibling to the King towel. With the identical 1100 GSM double-sided twisted pile construction in a handy 55 x 50 cm format, PRINCE is ideal for compact cars, motorbikes, lower body sills, and tight intricate areas.',
    features: [
      '1100 GSM high-absorption twisted fiber',
      'Agile 55 x 50 cm dimensions',
      'Scratch-free satin border',
    ],
    specifications: {
      'Density': '1100 GSM',
      'Dimensions': '55 x 50 cm',
      'Fiber': '70/30 Polyester / Polyamide blend',
    },
    images: [
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1000&q=85',
    ],
    volumeOrSize: '55 x 50 cm',
    inStock: true,
    stockCount: 22,
    featured: false,
    rating: 4.88,
    reviewCount: 19,
  },
  {
    id: 'ws-storm-wash-mitt',
    slug: 'work-stuff-storm-wash-mitt',
    name: 'Work Stuff STORM Premium Microfiber Wash Mitt',
    brand: 'work_stuff',
    category: 'Washing Equipment',
    categorySlug: 'wash',
    subcategory: 'Safe Contact Wash',
    price: 16.50,
    originalPrice: 19.00,
    shortDescription: 'Ultra-slick plush microfiber strands with internal foam cushioning and ergonomic wrist cuff.',
    description: 'The Work Stuff STORM Wash Mitt is designed to maximize lubricity and minimize contact wash swirls. The ultra-soft Korean microfiber strands encapsulate dirt particles and safely pull them deep away from delicate clear coats. Equipped with an internal foam sponge that holds gallons of suds.',
    features: [
      'Deep plush Korean microfiber strands',
      'Internal foam reservoir holds soapy water for maximum slickness',
      'Non-slip interior grip strap and snug elastic cuff',
      'Machine washable and extremely durable',
    ],
    specifications: {
      'Size': '22 x 18 cm',
      'Construction': 'Plush Microfiber + Foam Core + Elastic Wrist Cuff',
      'Color': 'Iconic Work Stuff Yellow & Black',
    },
    images: [
      'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1000&q=85',
    ],
    volumeOrSize: 'Standard One Size',
    inStock: true,
    stockCount: 31,
    featured: true,
    isBestSeller: true,
    rating: 4.92,
    reviewCount: 29,
  },
  {
    id: 'ws-hurricane-wheel-mitt',
    slug: 'work-stuff-hurricane-wheel-mitt',
    name: 'Work Stuff HURRICANE Microfiber Wheel Mitt',
    brand: 'work_stuff',
    category: 'Washing Equipment',
    categorySlug: 'wash',
    subcategory: 'Wheel Cleaning',
    price: 13.90,
    shortDescription: 'Dedicated wheel cleaning microfiber mitt shaped to reach behind tight wheel spokes and caliper gaps.',
    description: 'The Work Stuff HURRICANE Wheel Mitt is tailor-made for washing complex alloy wheels. Its flexible, slim profile fits into tight spoke patterns, behind disc brakes, and inside wheel barrels without scratching sensitive gloss black finishes.',
    features: [
      'Soft microfiber pile safely cleans clear-coated & polished alloys',
      'Slim ergonomic profile reaches tight spoke recesses',
      'Fingered internal design for precise control',
    ],
    specifications: {
      'Application': 'Alloy wheels, painted calipers, exhaust tips',
      'Size': '15 x 15 cm',
    },
    images: [
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=85',
    ],
    volumeOrSize: 'One Size',
    inStock: true,
    stockCount: 18,
    featured: false,
    rating: 4.85,
    reviewCount: 14,
  },
  {
    id: 'ws-spot-clay-bar',
    slug: 'work-stuff-spot-detailing-clay-bar',
    name: 'Work Stuff SPOT Detailing Clay Bar (100g Medium)',
    brand: 'work_stuff',
    category: 'Claybars & Decontamination',
    categorySlug: 'claybars',
    subcategory: 'Mechanical Decon',
    price: 12.50,
    shortDescription: 'High-grade European synthetic clay that shears away embedded industrial fallout and tree sap.',
    description: 'The Work Stuff SPOT Clay Bar safely lifts bonded environmental contaminants, tar specks, tree sap, rail dust, and overspray that regular washing cannot remove. Leaves automotive paint smooth as glass, perfectly prepped for ceramic coating or wax application.',
    features: [
      'Medium grade density ideal for 90% of vehicle paint conditions',
      'Easy to knead and shape even in ambient temperatures',
      'Comes in a reusable hard plastic storage case',
      'Zero residue or crumbling formulation',
    ],
    specifications: {
      'Weight': '100 grams',
      'Grade': 'Medium Grade Elastic Clay',
      'Case': 'Protective plastic storage container included',
    },
    images: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=85',
    ],
    volumeOrSize: '100g Plastic Tub',
    inStock: true,
    stockCount: 25,
    featured: false,
    rating: 4.80,
    reviewCount: 16,
  },
  {
    id: 'ws-gentleman-basic-microfiber',
    slug: 'work-stuff-gentleman-basic-microfiber-4pack',
    name: 'Work Stuff GENTLEMAN Edgeless Microfibers (Pack of 4)',
    brand: 'work_stuff',
    category: 'Microfibers & Tools',
    categorySlug: 'microfibers-tools',
    subcategory: 'All-Purpose Buffing',
    price: 11.90,
    originalPrice: 14.00,
    shortDescription: '350 GSM laser-cut edgeless towels (40x40cm) for polish removal, quick detailers, and coating leveling.',
    description: 'The Work Stuff GENTLEMAN Basic pack includes four premium 350 GSM edgeless laser-cut microfiber towels. With zero hard hemmed edges or sewn tags, there is zero risk of scratching paint during compound leveling, quick detailing, or interior dusting.',
    features: [
      '350 GSM high-grade microfiber with dual-pile sides',
      'Ultrasonic laser-cut edgeless design',
      'Zero tags or hard stitching',
      'Pack of 4 durable towels',
    ],
    specifications: {
      'Density': '350 GSM',
      'Size': '40 x 40 cm',
      'Quantity': '4 Towels per Pack',
      'Color': 'Anthracite Grey with Yellow Stitch Detail',
    },
    images: [
      'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1000&q=85',
    ],
    volumeOrSize: 'Pack of 4 (40x40cm)',
    inStock: true,
    stockCount: 45,
    featured: true,
    isBestSeller: true,
    rating: 4.96,
    reviewCount: 41,
  },
  {
    id: 'ws-zephyr-glass-towel',
    slug: 'work-stuff-zephyr-waffle-glass-towel',
    name: 'Work Stuff ZEPHYR Waffle Weave Glass Towel',
    brand: 'work_stuff',
    category: 'Microfibers & Tools',
    categorySlug: 'microfibers-tools',
    subcategory: 'Glass & Mirrors',
    price: 7.90,
    shortDescription: 'Specialized waffle-weave microfiber that eliminates haze, smears, and streaks on auto glass.',
    description: 'Tired of hazy windshields in the Malta sun? The Work Stuff ZEPHYR Waffle Weave Glass Towel creates a crystal-clear, streak-free finish by trapping glass cleaner and oils within its structured waffle pockets without linting.',
    features: [
      'High-performance waffle-weave pocket construction',
      'Eliminates smearing and nighttime glare haze',
      'Ultra low drag across windshields and tinted glass',
    ],
    specifications: {
      'Density': '400 GSM',
      'Size': '40 x 40 cm',
      'Application': 'Automotive Glass, Tint Film, Mirrors, Infotainment',
    },
    images: [
      'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1000&q=85',
    ],
    volumeOrSize: '40 x 40 cm',
    inStock: true,
    stockCount: 30,
    featured: false,
    rating: 4.89,
    reviewCount: 22,
  },
  {
    id: 'ws-polishing-pad-heavy-cut',
    slug: 'work-stuff-pro-polishing-pad-heavy-cut',
    name: 'Work Stuff PRO Polishing Pad — Heavy Cut (140mm)',
    brand: 'work_stuff',
    category: 'Polishing Pads',
    categorySlug: 'polishing-pads',
    subcategory: 'Compound & Cut',
    price: 10.90,
    shortDescription: 'Open-cell reticulated thermo-stable foam pad for rapid defect and swirl removal.',
    description: 'Engineered for professional paint correction. The Work Stuff PRO Heavy Cut foam pad features open-cell reticulated German foam that resists heat buildup, allows high air circulation, and cuts through deep clear-coat scratches quickly without excessive dust.',
    features: [
      'Open-cell structure dissipates heat during high-speed DA polishing',
      'Beveled edge profile protects body panel contours',
      'Ultra-durable hook & loop velcro backing',
    ],
    specifications: {
      'Diameter': '140mm (Backing: 125mm / 5")',
      'Hardness': 'Hard Open-Cell Compound Foam',
      'Machine Fit': 'Dual Action & Rotary Polishers',
    },
    images: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=85',
    ],
    volumeOrSize: '140mm / 5 inch',
    inStock: true,
    stockCount: 20,
    featured: false,
    rating: 4.84,
    reviewCount: 11,
  },

  // ================= GOOD STUFF CHEMICAL PRODUCTS =================
  {
    id: 'gs-sour-shampoo',
    slug: 'good-stuff-sour-shampoo-acidic',
    name: 'Good Stuff Sour Shampoo (Acidic Decontaminating Wash)',
    brand: 'good_stuff',
    category: 'Shampoos & Foams',
    categorySlug: 'wash',
    subcategory: 'Coating Rejuvenation & Hard Water',
    price: 12.90,
    originalPrice: 14.50,
    shortDescription: 'Acidic pH shampoo formulated to dissolve mineral water spots and unclog ceramic coating hydrophobic properties.',
    description: 'Essential for car detailing in Malta! The Good Stuff Sour Shampoo features a specialized acidic pH formula designed to dissolve mineral deposits, limescale, and hard water spots caused by local tap water. It actively unclogs ceramic coatings and SiO2 sealants, restoring intense water beading without stripping the underlying protection.',
    features: [
      'Acidic formula (pH 3-4) dissolves hard water mineral deposits',
      'Recharges and unclogs hydrophobic ceramic coatings',
      'High lubricity prevents wash-induced marring',
      'Refreshing green apple scent',
      'Safe on paint, wheels, glass, and chrome trims',
    ],
    specifications: {
      'pH Level': '3.5 (Acidic Formulation)',
      'Dilution Ratio': '1:200 to 1:500 (30-50ml per 10L bucket)',
      'Scent': 'Fresh Green Apple',
      'Volume': '500ml / 1000ml Bottle',
    },
    images: [
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=85',
    ],
    volumeOrSize: '500ml Bottle',
    sizeOptions: ['500ml Bottle', '1000ml Bottle', '5000ml Canister'],
    inStock: true,
    stockCount: 38,
    featured: true,
    isBestSeller: true,
    isNew: false,
    rating: 4.97,
    reviewCount: 49,
  },
  {
    id: 'gs-snow-foam-mint',
    slug: 'good-stuff-snow-foam-mint',
    name: 'Good Stuff Snow Foam Mint (Active Pre-Wash Foam)',
    brand: 'good_stuff',
    category: 'Shampoos & Foams',
    categorySlug: 'wash',
    subcategory: 'Touchless Pre-Wash',
    price: 14.50,
    shortDescription: 'Thick shaving cream foam that encapsulates road film and softens grime for touchless rinsing.',
    description: 'Good Stuff Snow Foam Mint produces dense, long-dwelling clingy foam that lifts road film, dust, and bug splatter before you touch the vehicle with a mitt. pH-neutral and 100% safe on waxes, sealants, and ceramic coatings.',
    features: [
      'Rich shaving-cream foam density with exceptional dwell time',
      'Softens and carries away surface grime touchlessly',
      'pH neutral — will not degrade existing waxes or sealants',
      'Crisp peppermint aroma',
    ],
    specifications: {
      'pH Level': 'Neutral (pH 7)',
      'Dilution': '1:9 in Foam Lance / 1:20 in Pump Sprayer',
      'Scent': 'Cool Peppermint',
    },
    images: [
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=85',
    ],
    volumeOrSize: '1000ml Bottle',
    sizeOptions: ['1000ml Bottle', '5000ml Canister'],
    inStock: true,
    stockCount: 26,
    featured: false,
    isBestSeller: true,
    rating: 4.88,
    reviewCount: 27,
  },
  {
    id: 'gs-sio2-detailer',
    slug: 'good-stuff-sio2-ceramic-quick-detailer',
    name: 'Good Stuff SiO2 Ceramic Quick Detailer',
    brand: 'good_stuff',
    category: 'Exterior Care & Quick Detailers',
    categorySlug: 'exterior',
    subcategory: 'Ceramic Booster & Sealant',
    price: 16.90,
    originalPrice: 19.50,
    shortDescription: 'Infused with silicon dioxide (SiO2) for extreme water sheeting, hyper-slickness, and 3-month protection.',
    description: 'The ultimate spray sealant and gloss enhancer. Good Stuff SiO2 Detailer deposits a microscopic ceramic protective layer with every spray, boosting optical depth, enhancing hydrophobic water repellency, and providing self-cleaning properties that keep your car clean longer under Malta conditions.',
    features: [
      'High-purity SiO2 ceramic infusion creates intense hydrophobicity',
      'Deep liquid-wet gloss and mirror-like reflection',
      'Up to 8-12 weeks of durable paint protection',
      'Effortless wipe-off with zero streaks or hazing',
      'Sweet bubblegum scent for pleasant detailing',
    ],
    specifications: {
      'Protection Duration': 'Up to 3 Months',
      'Active Ingredients': 'Polysilazane & SiO2 Nano Polymers',
      'Water Contact Angle': '> 108°',
      'Scent': 'Sweet Bubblegum',
    },
    images: [
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1000&q=85',
    ],
    volumeOrSize: '500ml Trigger Spray',
    sizeOptions: ['500ml Spray', '1000ml Bottle', '5000ml Canister'],
    inStock: true,
    stockCount: 44,
    featured: true,
    isBestSeller: true,
    rating: 4.98,
    reviewCount: 63,
  },
  {
    id: 'gs-gloss-detailer',
    slug: 'good-stuff-gloss-detailer',
    name: 'Good Stuff Gloss Detailer (High Slickness)',
    brand: 'good_stuff',
    category: 'Exterior Care & Quick Detailers',
    categorySlug: 'exterior',
    subcategory: 'Show Car Quick Detailer',
    price: 13.50,
    shortDescription: 'Instant show-car gloss booster and dust remover with unmatched surface slickness.',
    description: 'Good Stuff Gloss Detailer is the go-to maintenance spray for car meets and weekly detailing. Instantly adds wet-look depth, removes light dust and fingerprints, and leaves paint feeling like silk to the touch.',
    features: [
      'Instant candy-gloss depth and optical enhancement',
      'Silky smooth surface tactile feel',
      'Zero streaks even in warm direct lighting',
      'Scented with tropical mango',
    ],
    specifications: {
      'Application': 'Spray on paint, glass, wheels, or vinyl wrap',
      'Scent': 'Tropical Mango',
      'Volume': '500ml',
    },
    images: [
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=85',
    ],
    volumeOrSize: '500ml Trigger Spray',
    sizeOptions: ['500ml Spray', '1000ml Bottle'],
    inStock: true,
    stockCount: 29,
    featured: false,
    rating: 4.86,
    reviewCount: 20,
  },
  {
    id: 'gs-interior-cleaner-pomegranate',
    slug: 'good-stuff-interior-cleaner-pomegranate',
    name: 'Good Stuff Interior Cleaner (Pomegranate Scent)',
    brand: 'good_stuff',
    category: 'Interior Detailers & Cleaners',
    categorySlug: 'interior',
    subcategory: 'All-Surface Interior Cleaner',
    price: 11.50,
    originalPrice: 13.00,
    shortDescription: 'Gentle, pH-neutral interior cleaner safe for vinyl, plastic, leather, screens, and headliners.',
    description: 'An all-in-one interior formula that cuts through skin oils, dust, beverage stains, and general cabin grime without drying out plastic components or leaving sticky residues. Leaves a factory-original clean finish with an intoxicating pomegranate fragrance.',
    features: [
      'Safe on plastic, vinyl, artificial leather, and rubber',
      'Leaves an OEM non-greasy matte finish',
      'Antistatic properties prevent dust accumulation',
      'Delicious pomegranate aroma',
    ],
    specifications: {
      'pH': 'Neutral (pH 7)',
      'Finish': 'OEM Factory Matte',
      'Scent': 'Wild Pomegranate',
    },
    images: [
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1000&q=85',
    ],
    volumeOrSize: '500ml Trigger Spray',
    sizeOptions: ['500ml Spray', '1000ml Bottle', '5000ml Canister'],
    inStock: true,
    stockCount: 34,
    featured: true,
    isBestSeller: true,
    rating: 4.93,
    reviewCount: 35,
  },
  {
    id: 'gs-matte-interior-dressing',
    slug: 'good-stuff-matte-interior-dressing',
    name: 'Good Stuff Matte Interior Dressing & UV Guard',
    brand: 'good_stuff',
    category: 'Interior Detailers & Cleaners',
    categorySlug: 'interior',
    subcategory: 'UV Protection & Dash Care',
    price: 14.90,
    shortDescription: 'Deep nourishing dressing that restores factory matte darkness and blocks Mediterranean UV rays.',
    description: 'Malta sun can easily fade and crack automotive dashboards. Good Stuff Matte Interior Dressing provides powerful UV inhibitors that protect against solar degradation while restoring an ultra-sleek, deep OEM matte look with zero shiny or sticky residue.',
    features: [
      'High-grade UV blockers prevent dashboard cracking & fading',
      'Restores rich deep black tones to cockpit plastics',
      'Completely non-greasy, non-reflective matte finish',
      'Mild chocolate-passion fruit aroma',
    ],
    specifications: {
      'UV Protection': 'UVB & UVA Shield',
      'Finish': '100% Anti-Glare Matte',
      'Scent': 'Passion Chocolate',
    },
    images: [
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1000&q=85',
    ],
    volumeOrSize: '500ml Bottle',
    sizeOptions: ['500ml Bottle', '1000ml Bottle'],
    inStock: true,
    stockCount: 27,
    featured: false,
    rating: 4.91,
    reviewCount: 28,
  },
  {
    id: 'gs-wheel-cleaner-bleeding',
    slug: 'good-stuff-wheel-cleaner-bleeding-iron',
    name: 'Good Stuff Wheel Cleaner Bleeding (Color-Changing Iron Remover)',
    brand: 'good_stuff',
    category: 'Wheel & Tyre Care',
    categorySlug: 'wheels',
    subcategory: 'Iron Fallout & Brake Dust',
    price: 13.90,
    originalPrice: 16.00,
    shortDescription: 'High-viscosity gel formula that turns vibrant purple as it dissolves embedded hot metallic brake dust.',
    description: 'The ultimate weapon against dirty wheels. Good Stuff Bleeding Wheel Cleaner features a thick clinging gel that dwells on vertical wheel faces. Its chemical indicator reacts with iron particles, turning royal purple as it dissolves stubborn burnt-on brake dust without damaging delicate clear coats, raw aluminum, or painted calipers.',
    features: [
      'Thick clinging gel clings to vertical wheel surfaces',
      'Vivid color-changing purple reaction indicator',
      'pH-neutral and safe on chrome, forged, painted, and diamond-cut rims',
      'Pleasant low-odor fragrance compared to harsh iron removers',
    ],
    specifications: {
      'pH': 'Neutral (Safe for all wheel types)',
      'Reaction Time': '2 - 3 minutes dwell time',
      'Formula': 'High-viscosity clinging gel',
    },
    images: [
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=85',
    ],
    volumeOrSize: '500ml Trigger Spray',
    sizeOptions: ['500ml Spray', '1000ml Bottle', '5000ml Canister'],
    inStock: true,
    stockCount: 36,
    featured: true,
    isBestSeller: true,
    rating: 4.96,
    reviewCount: 47,
  },
  {
    id: 'gs-tire-dressing-shine',
    slug: 'good-stuff-tire-dressing-satin-shine',
    name: 'Good Stuff Tire Dressing (Satin & Gloss Finish)',
    brand: 'good_stuff',
    category: 'Wheel & Tyre Care',
    categorySlug: 'wheels',
    subcategory: 'Tyre Protection & Darkening',
    price: 15.50,
    shortDescription: 'Hydrophobic polymer tyre dressing that provides deep satin black sidewalls with zero sling.',
    description: 'Transform brownish oxidized tires into deep jet-black showpiece rubber. Good Stuff Tire Dressing penetrates deep into tyre compounds, creating an elastic barrier that repels water and dust. Layer for custom sheen from factory satin to wet gloss.',
    features: [
      'Zero sling formula won’t fling onto car doors while driving',
      'Long-lasting hydrophobic polymer barrier survives rain and washes',
      'Buildable finish: 1 coat for satin, 2 coats for wet look',
    ],
    specifications: {
      'Durability': '2 to 4 weeks',
      'Finish': 'Adjustable Satin / Gloss',
      'Scent': 'Sweet Cola',
    },
    images: [
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=85',
    ],
    volumeOrSize: '500ml Bottle',
    sizeOptions: ['500ml Bottle', '1000ml Bottle'],
    inStock: true,
    stockCount: 30,
    featured: false,
    rating: 4.87,
    reviewCount: 23,
  },
  {
    id: 'gs-passion-carnauba-wax',
    slug: 'good-stuff-passion-carnauba-luxury-wax',
    name: 'Good Stuff PASSION Luxury Carnauba Show Wax (100ml)',
    brand: 'good_stuff',
    category: 'Passion Luxury Series',
    categorySlug: 'passion-series',
    subcategory: 'Show Wax',
    price: 39.90,
    originalPrice: 45.00,
    shortDescription: 'Handcrafted Brazilian Grade-1 Carnauba paste wax for breathtaking warm depth and show-car reflections.',
    description: 'The pinnacle of Good Stuff detailing chemistry. PASSION Show Wax is handcrafted with pure Brazilian T1 Carnauba combined with nourishing oils. It imparts an unmatched liquid warm reflection, masks micro-imperfections, and leaves paintwork glowing under direct sunlight with intoxicating tropical fragrance.',
    features: [
      'Handcrafted with highest grade Brazilian T1 Carnauba',
      'Exceptional depth, warmth, and metallic flake pop',
      'Super easy on / easy off wipe down',
      'Includes premium foam applicator pad inside metal tin',
    ],
    specifications: {
      'Carnauba Content': 'Grade 1 Pure Brazilian T1',
      'Container': 'Collector Black Aluminum Jar with Foam Applicator',
      'Weight': '100ml / 3.4 oz',
    },
    images: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=85',
    ],
    volumeOrSize: '100ml Luxury Tin',
    inStock: true,
    stockCount: 15,
    featured: true,
    isNew: true,
    rating: 5.00,
    reviewCount: 31,
  },
  {
    id: 'gs-passion-detailer-extreme',
    slug: 'good-stuff-passion-detailer-extreme-reflection',
    name: 'Good Stuff PASSION Extreme Reflection Quick Detailer',
    brand: 'good_stuff',
    category: 'Passion Luxury Series',
    categorySlug: 'passion-series',
    subcategory: 'Signature Gloss',
    price: 18.90,
    shortDescription: 'Signature show-car gloss detailer with synthetic gloss amplifiers for maximum optical clarity.',
    description: 'The PASSION series quick detailer is formulated for enthusiasts who demand the highest possible level of reflection and surface slickness. Compatible over ceramic coatings, sealants, or pure carnauba waxes.',
    features: [
      'Maximum optical gloss index amplification',
      'Extremely slick tactile surface finish',
      'Signature exotic fragrance',
    ],
    specifications: {
      'Application': 'Final wipe down before concourse car shows',
      'Volume': '500ml',
    },
    images: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=85',
    ],
    volumeOrSize: '500ml Trigger Spray',
    inStock: true,
    stockCount: 21,
    featured: false,
    rating: 4.95,
    reviewCount: 18,
  },
];

export const GIFT_BUNDLES: GiftBundle[] = [
  {
    id: 'wg-ultimate-master-detailer-box',
    slug: 'the-master-detailer-complete-collection',
    name: 'The Master Detailer Complete Collection',
    description: 'The ultimate car care package combining Work Stuff pro gear with Good Stuff advanced chemicals. Includes everything needed to wash, decontaminate, dry, and protect a vehicle to concours standards.',
    price: 89.00,
    originalValue: 115.00,
    savingsPercentage: 23,
    itemsIncluded: [
      'Work Stuff KING Twisted Pile Drying Towel (90x73cm)',
      'Work Stuff ALBINO Detailing Brush (24mm)',
      'Work Stuff STORM Premium Wash Mitt',
      'Good Stuff Sour Shampoo (500ml)',
      'Good Stuff SiO2 Ceramic Quick Detailer (500ml)',
      'Good Stuff Wheel Cleaner Bleeding (500ml)',
      'Work Stuff GENTLEMAN Edgeless Microfiber Towel',
      'Official WG Stuff Malta Detailing Bag',
    ],
    images: [
      'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=85',
    ],
    badge: 'Best Value Bundle',
    featured: true,
    inStock: true,
  },
  {
    id: 'wg-pro-drying-wash-combo',
    slug: 'pro-two-bucket-wash-and-dry-system',
    name: 'Pro Two-Bucket Wash & Dry System',
    description: 'Eliminate swirl marks forever. Combines the ultra-slick Storm wash mitt with the massive King drying towel and anti-hardwater Sour Shampoo.',
    price: 59.90,
    originalValue: 76.00,
    savingsPercentage: 21,
    itemsIncluded: [
      'Work Stuff KING Drying Towel (1100 GSM)',
      'Work Stuff STORM Wash Mitt',
      'Good Stuff Sour Shampoo (1000ml Large)',
      'Work Stuff ZEPHYR Waffle Glass Towel',
    ],
    images: [
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1000&q=85',
    ],
    badge: 'Enthusiast Favorite',
    featured: true,
    inStock: true,
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
      'Good Stuff Matte Interior Dressing (500ml)',
      'Work Stuff ALBINO Detailing Brush (24mm)',
      'Work Stuff GENTLEMAN Edgeless Microfibers (Pack of 4)',
    ],
    images: [
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1000&q=85',
    ],
    badge: 'Interior Special',
    featured: true,
    inStock: true,
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
      'Good Stuff Wheel Cleaner Bleeding (500ml)',
      'Good Stuff Tire Dressing Satin & Gloss (500ml)',
      'Work Stuff HURRICANE Microfiber Wheel Mitt',
      'Work Stuff BLACK Detailing Brush (24mm)',
    ],
    images: [
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=85',
    ],
    badge: 'Wheel Care',
    featured: false,
    inStock: true,
  },
];

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
