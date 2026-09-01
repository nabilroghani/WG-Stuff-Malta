import { Product, Category, GiftBundle, FilterState } from '@/types';

export const CATEGORIES: Category[] = [
  {
    "id": "ws-wash",
    "name": "Washing Equipment",
    "slug": "wash",
    "brand": "work_stuff",
    "description": "High-density foam wash mitts, wheel mitts, detailing buckets, and wash pads engineered for swirl-free contact washing.",
    "imageUrl": "https://static.wixstatic.com/media/f0347b_241a6b313f4446ccb661ecf7784495f4~mv2.png",
    "itemCount": 16
  },
  {
    "id": "ws-drying",
    "name": "Drying Towels",
    "slug": "drying",
    "brand": "work_stuff",
    "description": "Ultra-absorbent twisted pile Korean microfibers capable of drying entire vehicles in a single streak-free pass.",
    "imageUrl": "https://static.wixstatic.com/media/f0347b_97f799c5b7f84783b89905fc68755e97~mv2.png",
    "itemCount": 6
  },
  {
    "id": "ws-brushes",
    "name": "Detailing Brushes",
    "slug": "brushes",
    "brand": "work_stuff",
    "description": "The industry-benchmark Albino, Black, and Rubber brushes for delicate emblems, badges, leather, and engine bays.",
    "imageUrl": "https://static.wixstatic.com/media/f0347b_457e6fff94fd494ab6c36c8ab67f3362~mv2.png",
    "itemCount": 10
  },
  {
    "id": "ws-claybars",
    "name": "Claybars & Decontamination",
    "slug": "claybars",
    "brand": "work_stuff",
    "description": "High-grade synthetic clay bars, clay blocks, and polymer clay mitts to eliminate industrial fallout, tree sap, and overspray.",
    "imageUrl": "https://static.wixstatic.com/media/fb0f16_17b2140cc8e5429dbe4a35e0034b3695~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_17b2140cc8e5429dbe4a35e0034b3695~mv2.png",
    "itemCount": 4
  },
  {
    "id": "ws-microfibers-tools",
    "name": "Microfibers & Tools",
    "slug": "microfibers-tools",
    "brand": "work_stuff",
    "description": "Laser-cut edgeless microfiber towels, waffle glass cloths, applicator pads, work bottles, triggers, and gloves.",
    "imageUrl": "https://static.wixstatic.com/media/fb0f16_94c13fccabcf45748c6ce50219d106a4~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_94c13fccabcf45748c6ce50219d106a4~mv2.png",
    "itemCount": 23
  },
  {
    "id": "ws-polishing-pads",
    "name": "Polishing Pads",
    "slug": "polishing-pads",
    "brand": "work_stuff",
    "description": "Open-cell thermo-stable foam polishing, cutting, and wool pads engineered for dual-action and rotary machines.",
    "imageUrl": "https://static.wixstatic.com/media/f0347b_1146fb2c4014407c9ac76a887f894052~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_1146fb2c4014407c9ac76a887f894052~mv2.png",
    "itemCount": 8
  },
  {
    "id": "gs-wash",
    "name": "Shampoos & Foams",
    "slug": "wash",
    "brand": "good_stuff",
    "description": "High-lubricity pH balanced shampoos, active acidic washes for ceramic coatings, and dense pre-wash snow foams.",
    "imageUrl": "https://static.wixstatic.com/media/f0347b_8d46a8fe1c904ed19fcdce9b09bb20dc~mv2.png",
    "itemCount": 12
  },
  {
    "id": "gs-exterior",
    "name": "Exterior Care & Quick Detailers",
    "slug": "exterior",
    "brand": "good_stuff",
    "description": "SiO2 ceramic detailers, high-gloss synthetic boosters, bug & tar removers, and paint preparation sprays.",
    "imageUrl": "https://static.wixstatic.com/media/f0347b_bd01716e6ad3479b8ed0a999cdf6fdd3~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_bd01716e6ad3479b8ed0a999cdf6fdd3~mv2.png",
    "itemCount": 7
  },
  {
    "id": "gs-interior",
    "name": "Interior Detailers & Cleaners",
    "slug": "interior",
    "brand": "good_stuff",
    "description": "Natural matte interior dressings, pH-neutral fabric & upholstery cleaners, and gentle foaming leather care.",
    "imageUrl": "https://static.wixstatic.com/media/f0347b_0d2ddd95e87b400ca22c6e4e4857f489~mv2.png",
    "itemCount": 8
  },
  {
    "id": "gs-wheels",
    "name": "Wheel & Tyre Care",
    "slug": "wheels",
    "brand": "good_stuff",
    "description": "Color-changing iron decontaminants, safe alkaline wheel gels, and non-greasy satin tyre dressings.",
    "imageUrl": "https://static.wixstatic.com/media/f0347b_6b11a10c003145e4b3d6edac98aa52cb~mv2.png",
    "itemCount": 11
  },
  {
    "id": "gs-passion-series",
    "name": "Passion Luxury Series",
    "slug": "passion-series",
    "brand": "good_stuff",
    "description": "Show-grade luxury T1 carnauba waxes and ultra-slick detailers designed for deep wet-look reflections.",
    "imageUrl": "https://static.wixstatic.com/media/f0347b_fab6533650e6403db32ab735c2bda504~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_fab6533650e6403db32ab735c2bda504~mv2.png",
    "itemCount": 3
  }
];

export const PRODUCTS: Product[] = [
  {
    "id": "ws-willy-willy-tire-brush",
    "slug": "work-stuff-willy-willy-tire-brush",
    "name": "Work Stuff Willy Willy Tire Brush",
    "brand": "work_stuff",
    "category": "Washing Equipment",
    "categorySlug": "wash",
    "subcategory": "Wash",
    "price": 10,
    "originalPrice": 11.5,
    "shortDescription": "The WILLY WILLY Tire Brush is expertly crafted for deep tire cleaning and tackling hard-to-reach areas like wheel arches. Designed for both detailing profess...",
    "description": "The WILLY WILLY Tire Brush is expertly crafted for deep tire cleaning and tackling hard-to-reach areas like wheel arches. Designed for both detailing professionals and car care enthusiasts, this brush provides exceptional scrubbing power for a pristine finish. Key Features: Specialized for Tire Cleaning: Designed to remove dirt, grime, and old tire dressing residues. Firm Synthetic Bristles: Slightly wavy and flexible bristles ensure maximum scrubbing power while protecting surfaces. Compact &amp; Ergonomic Design: Ideal for tight spaces and low-profile vehicles. Tire-Contour Fit: The brush shape adapts to the natural curvature of tires for more effective cleaning. Comfortable Grip: Designed for efficiency and reduced hand fatigue. Hanging Hole for Storage: Easy to store and dry with the hanging hole at the end of the handle. Product Specifications: Bristle Height: 2.5 cm Brush Length: 21 cm Material: Firm synthetic bristles Application: Tire cleaning, wheel arches, rubber components Why Choose the WILLY WILLY Tire Brush?✅ Deep Cleaning Power: Perfect for intensive tire cleaning.✅ Safe on Rubber: Tough on dirt but gentle on surfaces.✅ Built to Last: Durable bristles and reinforced design for frequent use.✅ Comfortable Handling: Ergonomic shape for better control.✅ Professional Results: Achieve showroom-quality cleanliness with ease.",
    "features": [
      "Specialized for Tire Cleaning:",
      "Deep Cleaning Power: Perfect for intensive tire cleaning.",
      "Safe on Rubber: Tough on dirt but gentle on surfaces.",
      "Built to Last: Durable bristles and reinforced design for frequent use.",
      "Comfortable Handling: Ergonomic shape for better control."
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_a6d44a9dff214ee6a8fd63f7d723e010~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_a6d44a9dff214ee6a8fd63f7d723e010~mv2.jpg"
    ],
    "inStock": true,
    "stockCount": 15,
    "featured": true,
    "isBestSeller": true,
    "isNew": true,
    "rating": 4.8,
    "reviewCount": 12
  },
  {
    "id": "ws-thunder-wheel-brush",
    "slug": "work-stuff-thunder-wheel-brush",
    "name": "Work Stuff Thunder Wheel Brush",
    "brand": "work_stuff",
    "category": "Washing Equipment",
    "categorySlug": "wash",
    "subcategory": "Wash",
    "price": 16,
    "shortDescription": "The THUNDER Wheel Brush is designed to deliver flawless wheel rim cleaning with ultra-soft bristles that provide maximum care while effectively removing dirt...",
    "description": "The THUNDER Wheel Brush is designed to deliver flawless wheel rim cleaning with ultra-soft bristles that provide maximum care while effectively removing dirt, brake dust, and grime. Its ergonomic design and flexible build make it ideal for reaching tight spaces, ensuring a complete clean without scratches. Key Features: Ultra-Soft Bristles: Gentle on rims, safe for delicate finishes. Large Cleaning Surface: Covers more area for efficient cleaning. Flexible Design: Easily bends to reach hard-to-access areas. Ergonomic Grip: Comfortable for extended use. Chemical Resistant: Built to withstand strong wheel cleaners. Easy to Clean: Rinses out easily for quick maintenance. Perfect For Cleaning:✅ Wheel Rims: Removes brake dust and road grime.✅ Tight Spaces: Ideal for spokes, wheel barrels, and lug nuts.✅ Delicate Finishes: Safe for glossy, chrome, and painted wheels.✅ Motorcycles: Perfect for wheel hubs and engine components. Why Choose the THUNDER Wheel Brush? ✅ Soft Yet Effective: Ultra-soft bristles ensure thorough cleaning with no scratches. ✅ Professional Grade: Designed for enthusiasts and professional detailers. ✅ Maximum Durability: Chemical-resistant and built for long-term use. ✅ Versatile Cleaning: Perfect for cars, motorcycles, and other vehicles. Product Specifications: Size: 45 cm Bristle Type: Ultra-soft synthetic fibers Handle: Ergonomic, flexible grip Chemical Resistance: High durability against wheel cleaning agents",
    "features": [
      "Ultra-Soft Bristles: Gentle on rims, safe for delicate finishes.",
      "Wheel Rims: Removes brake dust and road grime.",
      "Tight Spaces: Ideal for spokes, wheel barrels, and lug nuts.",
      "Delicate Finishes: Safe for glossy, chrome, and painted wheels.",
      "Motorcycles: Perfect for wheel hubs and engine components. Why Choose the THUNDER Wheel Brush?"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_63908610fdeb45f3a8d2041d46f8e848~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_63908610fdeb45f3a8d2041d46f8e848~mv2.jpg"
    ],
    "inStock": true,
    "stockCount": 16,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.81,
    "reviewCount": 13
  },
  {
    "id": "ws-drill-brush",
    "slug": "work-stuff-drill-brush",
    "name": "Work Stuff Drill Brush",
    "brand": "work_stuff",
    "category": "Washing Equipment",
    "categorySlug": "wash",
    "subcategory": "Wash",
    "price": 10.5,
    "shortDescription": "Transform your cleaning routine with the DRILL BRUSH, designed for quick and effective cleaning of car upholstery, carpets, floor mats, trunk liners, and oth...",
    "description": "Transform your cleaning routine with the DRILL BRUSH, designed for quick and effective cleaning of car upholstery, carpets, floor mats, trunk liners, and other fabric elements. Compatible with most standard drills, it allows you to clean thoroughly with minimal effort. Key Features: Three Bristle Options: Available in Soft, Medium, and Hard to match your cleaning needs. Versatile Use: Ideal for car interiors, household upholstery, carpets, and even sofas and chairs. Efficient Cleaning: The specially designed bristles remove dirt effectively while protecting delicate fabrics from damage. Durable Construction: Resistant to high-speed rotation without bristle deformation. Moisture-resistant base prevents cracking or warping. Integrated Hex Shank: No adapter required – ready to use with standard drills. Chrome-plated hex shank fits most 1/4” drill drivers. 3-Pack Option: Contains all three hardness levels Product Specifications: Diameter: 10 cm Bristle Length: 3 cm Mount: 1/4″ hex shank Bristle Options: Soft | Medium | Hard Application: Upholstery, carpets, mats, trunk liners, fabric furniture How to Use: Attach the Drill Brush to your drill using the integrated hex shank. Apply cleaner or use dry depending on the cleaning task. Gently run the brush over the surface for deep cleaning. Rinse and Dry after use for maximum durability. Why Choose the DRILL BRUSH?✅ Time-Saving: Clean faster and more efficiently with minimal effort.✅ Multiple Cleaning Options: Use wet for deep cleaning or dry for sand and dirt removal.✅ Safe on Fabrics: No snagging or fraying, even on delicate weaves.✅ Long-Lasting: Built with chemical-resistant materials for durability.✅ Professional-Grade Cleaning: Perfect for auto detailing and household use.✅ 3-Pack Available: Get all three bristle types in one convenient set.",
    "features": [
      "Three Bristle Options: Available in Soft, Medium, and Hard to match your cleaning needs.",
      "Time-Saving: Clean faster and more efficiently with minimal effort.",
      "Multiple Cleaning Options: Use wet for deep cleaning or dry for sand and dirt removal.",
      "Safe on Fabrics: No snagging or fraying, even on delicate weaves.",
      "Long-Lasting: Built with chemical-resistant materials for durability."
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_9b40229f5d5e4c91956b0219d5874c49~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_9b40229f5d5e4c91956b0219d5874c49~mv2.jpg"
    ],
    "inStock": true,
    "stockCount": 17,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.82,
    "reviewCount": 14
  },
  {
    "id": "ws-bucket-dolly-adapter",
    "slug": "work-stuff-bucket-dolly-adapter",
    "name": "Work Stuff Bucket Dolly Adapter",
    "brand": "work_stuff",
    "category": "Washing Equipment",
    "categorySlug": "wash",
    "subcategory": "Wash",
    "price": 33,
    "originalPrice": 37.95,
    "shortDescription": "The Bucket Dolly Adapter is the ultimate solution for optimizing your detailing process. Made from durable aluminum, this connector allows you to combine two...",
    "description": "The Bucket Dolly Adapter is the ultimate solution for optimizing your detailing process. Made from durable aluminum, this connector allows you to combine two dollies into a single, stable unit, enabling the simultaneous transport of two buckets. Perfect for professionals and enthusiasts alike, this adapter is ideal for those who use the two-bucket method, significantly enhancing efficiency during vehicle washing. Installing the adapter is quick and straightforward: simply place the metal plate into the designated holes before attaching the wheels, then press the wheels into place. Once assembled, the structure is stable and robust, ready to carry large volumes of water without compromising mobility or durability. By enhancing the functionality of your dollies, the Bucket Dolly Adapter not only saves time but also ensures smoother, more organized detailing work. Upgrade your setup and take your car washing routine to the next level. Key Features Durable Construction: Made from high-quality aluminum for long-lasting use. Optimized Dimensions: 15×24 cm, designed for a precise fit. Easy Assembly: Quick and hassle-free installation process. Enhanced Functionality: Combines two dollies into one for dual bucket transport. Perfect for Two-Bucket Method: Streamlines the car washing process for maximum efficiency.",
    "features": [
      "Durable Construction: Made from high-quality aluminum for long-lasting use.",
      "Optimized Dimensions: 15×24 cm, designed for a precise fit.",
      "Easy Assembly: Quick and hassle-free installation process.",
      "Enhanced Functionality: Combines two dollies into one for dual bucket transport.",
      "Perfect for Two-Bucket Method: Streamlines the car washing process for maximum efficiency."
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_36670fce779a4a78b52c35dc88d525c2~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_36670fce779a4a78b52c35dc88d525c2~mv2.jpg"
    ],
    "inStock": true,
    "stockCount": 18,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.83,
    "reviewCount": 15
  },
  {
    "id": "ws-bizzard-thunder-kit",
    "slug": "work-stuff-bizzard-thunder-kit",
    "name": "Work Stuff Bizzard & Thunder Kit",
    "brand": "work_stuff",
    "category": "Washing Equipment",
    "categorySlug": "wash",
    "subcategory": "Wash",
    "price": 25,
    "shortDescription": "The Blizzard &amp; Thunder Kit is a premium set of professional detailing brushes specifically designed for thorough rim cleaning. This kit combines two spec...",
    "description": "The Blizzard &amp; Thunder Kit is a premium set of professional detailing brushes specifically designed for thorough rim cleaning. This kit combines two specialized brushes, Blizzard and Thunder, both crafted with soft, flexible bristles that deliver deep cleaning while protecting your rims from scratches. Whether you’re a car enthusiast or a professional detailer, the Blizzard &amp; Thunder Kit ensures a safe, effective, and complete cleaning experience for all types of rims. Key Features: Brush Sizes: Blizzard: 36 cm – Ideal for hard-to-reach areas. Thunder: 45 cm – Perfect for cleaning large surfaces quickly. Delicate Bristles: Soft yet effective, ensuring scratch-free cleaning. Large Cleaning Surface: Maximizes efficiency with each stroke. High Flexibility: Reaches the most complex areas of the rims. Chemical Resistance: Built to withstand aggressive cleaning products. Easy to Clean: Simple to rinse and maintain for long-term use. Benefits of the Blizzard &amp; Thunder Kit:✅ Professional Quality: Designed for safe and effective rim cleaning.✅ Versatile Use: The Thunder brush covers large areas, while the Blizzard brush reaches tighter spaces.✅ Durability: Built for frequent use, resistant to cleaning chemicals and wear.✅ Ergonomic Design: Easy to handle, minimizing effort during cleaning. Why Choose the Blizzard &amp; Thunder Kit? The Blizzard &amp; Thunder Kit offers professional performance with premium quality materials, making it an essential tool for car care enthusiasts and detailing professionals alike. With flexible, delicate bristles and a design tailored for precision cleaning, your rims will stay spotless and protected.How to Use the Blizzard &amp; Thunder Kit: Rinse the Rims: Spray water to remove loose dirt. Apply Cleaning Solution: Use a rim-safe cleaner to break down contaminants. Use the Brushes: Clean large areas with the Thunder brush. Focus on detailed sections using the Blizzard brush. Rinse Thoroughly: Wash away loosened dirt and cleaning solution. Dry &amp; Inspect: Use a microfiber towel for a spotless finish.",
    "features": [
      "Brush Sizes:",
      "Professional Quality: Designed for safe and effective rim cleaning.",
      "Versatile Use: The Thunder brush covers large areas, while the Blizzard brush reaches tighter spaces.",
      "Durability: Built for frequent use, resistant to cleaning chemicals and wear."
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_c8738ee6fd254f139a6ef7a9a4899dfd~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_c8738ee6fd254f139a6ef7a9a4899dfd~mv2.jpg"
    ],
    "inStock": true,
    "stockCount": 19,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.84,
    "reviewCount": 16
  },
  {
    "id": "ws-detailing-bucket-grey-wheels",
    "slug": "work-stuff-detailing-bucket-grey-wheels",
    "name": "Work Stuff Detailing Bucket Grey - Wheels",
    "brand": "work_stuff",
    "category": "Washing Equipment",
    "categorySlug": "wash",
    "subcategory": "Wash",
    "price": 16,
    "shortDescription": "Introducing the Detailing Bucket Grey – Wheels, the ultimate professional-grade bucket designed specifically for washing wheels. Crafted from durable HDPE ma...",
    "description": "Introducing the Detailing Bucket Grey – Wheels, the ultimate professional-grade bucket designed specifically for washing wheels. Crafted from durable HDPE material, this bucket is built to withstand even the toughest cleaning jobs, ensuring long-lasting performance. The handy measurement markings on the side of the bucket allow for easy and precise pouring of water, while the 20-liter maximum capacity ensures you have enough water to get the job done right. The sturdy metal carrying handle provides easy portability, while the “WHEELS” label clearly indicates the intended use of the product, making it an essential tool for any car enthusiast. KEY FEATURES: Made from strong and durable HDPE material Sturdy metal carrying handle for easy portability Convenient measurement markings on the side for precise water pouring 20-liter capacity for effective cleaning of wheels Clearly labeled with “WHEELS” for easy identification and use",
    "features": [
      "Made from strong and durable HDPE material",
      "Sturdy metal carrying handle for easy portability",
      "Convenient measurement markings on the side for precise water pouring",
      "20-liter capacity for effective cleaning of wheels",
      "Clearly labeled with “WHEELS” for easy identification and use"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_5ad9b57500b443588ed443ef35b4d5e0~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_5ad9b57500b443588ed443ef35b4d5e0~mv2.png"
    ],
    "inStock": true,
    "stockCount": 20,
    "featured": false,
    "isBestSeller": true,
    "isNew": false,
    "rating": 4.85,
    "reviewCount": 17
  },
  {
    "id": "ws-detailing-bucket-black-rinse",
    "slug": "work-stuff-detailing-bucket-black-rinse",
    "name": "Work Stuff Detailing Bucket Black - Rinse",
    "brand": "work_stuff",
    "category": "Washing Equipment",
    "categorySlug": "wash",
    "subcategory": "Wash",
    "price": 16,
    "originalPrice": 18.4,
    "shortDescription": "Looking for a professional-grade bucket to streamline your car or motorcycle washing process? Look no further than the Detailing Bucket Black – RINSE. Made f...",
    "description": "Looking for a professional-grade bucket to streamline your car or motorcycle washing process? Look no further than the Detailing Bucket Black – RINSE. Made from durable high-density polyethylene (HDPE), this bucket is built to last. With a maximum capacity of 20 liters, you can easily rinse away dirt and debris while washing your vehicle or motorcycle. The convenient measurement markings on the side of the bucket help you measure the right amount of water for your cleaning needs. The metal handle ensures easy portability, and the word “RINSE” marked on the bucket makes it clear that this bucket is intended for use during the rinsing process of automotive detailing. Invest in the Detailing Bucket Black – RINSE to achieve a professional-grade rinse and keep your car or motorcycle looking like new. KEY FEATURES: Made from durable HDPE material for long-lasting use Equipped with a sturdy metal carrying handle for portability Conveniently marked with measurements on the side of the bucket for precise water pouring 20L capacity to effectively rinse away dirt and grime",
    "features": [
      "Made from durable HDPE material for long-lasting use",
      "Equipped with a sturdy metal carrying handle for portability",
      "Conveniently marked with measurements on the side of the bucket for precise water pouring",
      "20L capacity to effectively rinse away dirt and grime"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_2e5fe3e1839a434aa0fd7dccb573f5b3~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_2e5fe3e1839a434aa0fd7dccb573f5b3~mv2.png"
    ],
    "inStock": true,
    "stockCount": 21,
    "featured": true,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.86,
    "reviewCount": 18
  },
  {
    "id": "ws-detailing-buckets",
    "slug": "work-stuff-detailing-buckets",
    "name": "Work Stuff Detailing Bucket Yellow - Wash",
    "brand": "work_stuff",
    "category": "Washing Equipment",
    "categorySlug": "wash",
    "subcategory": "Wash",
    "price": 16,
    "shortDescription": "The Detailing Bucket Yellow – WASH is the essential tool you need for a professional car wash. Made from durable high-density polyethylene (HDPE) material, t...",
    "description": "The Detailing Bucket Yellow – WASH is the essential tool you need for a professional car wash. Made from durable high-density polyethylene (HDPE) material, this bucket is built to last. With convenient measurement markings on the side, you can easily pour in the right amount of water for each wash, without wasting a drop. Its maximum capacity of 20 liters means you won’t have to refill it frequently. The metal handle ensures a comfortable and secure grip when moving it around your car. The “WASH” marking on the side makes it clear that this bucket is specifically designed for automotive detailing, but it’s also perfect for motorcycles. If you’re a detail enthusiast who takes care of every inch of your vehicle, the Detailing Bucket Yellow – WASH is an indispensable tool. Invest in the Detailing Bucket Yellow – WASH and achieve the best results in washing and caring for your vehicle. With its SEO-friendly features, it will be easier for Google and other search engines to find your product. Get your car or motorcycle looking like new with this high-quality detailing bucket. KEY FEATURES: Made from durable HDPE material Metal handle for easy transportation Maximum capacity of 20 liters Convenient measurement markings on the side “WASH” marking for specific use in automotive detailing.",
    "features": [
      "Made from durable HDPE material",
      "Metal handle for easy transportation",
      "Maximum capacity of 20 liters",
      "Convenient measurement markings on the side",
      "“WASH” marking for specific use in automotive detailing."
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_251788a26da24113b9034e26213a92c5~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_251788a26da24113b9034e26213a92c5~mv2.png"
    ],
    "inStock": true,
    "stockCount": 22,
    "featured": false,
    "isBestSeller": false,
    "isNew": true,
    "rating": 4.87,
    "reviewCount": 19
  },
  {
    "id": "ws-detailing-buckets-separators",
    "slug": "work-stuff-detailing-buckets-separators",
    "name": "Work Stuff Detailing Buckets + Separators",
    "brand": "work_stuff",
    "category": "Washing Equipment",
    "categorySlug": "wash",
    "subcategory": "Wash",
    "price": 24,
    "shortDescription": "Professional bucket for washing the car. Made of strong HDPE material. Measurements on the side of the bucket come in handy when measuring the right amount o...",
    "description": "Professional bucket for washing the car. Made of strong HDPE material. Measurements on the side of the bucket come in handy when measuring the right amount of water poured in. The maximum capacity of the bucket is 20 litres. Additionally equipped with a metal handle for easy portability. Marked with the word “WASH”, suggesting the intended use of the product. MAIN FEATURES: Strong HDPE material A metal carrying handle 20L capacity Convenient measurements on the side of the bucket",
    "features": [
      "Strong HDPE material",
      "A metal carrying handle",
      "20L capacity",
      "Convenient measurements on the side of the bucket"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_2f480793c98241c1a0fb78dcfa057040~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_2f480793c98241c1a0fb78dcfa057040~mv2.png"
    ],
    "inStock": true,
    "stockCount": 23,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.88,
    "reviewCount": 20
  },
  {
    "id": "ws-bucket-seperator",
    "slug": "work-stuff-bucket-seperator",
    "name": "Work Stuff Bucket Seperator",
    "brand": "work_stuff",
    "category": "Washing Equipment",
    "categorySlug": "wash",
    "subcategory": "Wash",
    "price": 11,
    "originalPrice": 12.65,
    "shortDescription": "The product separates dirt from clean water. When rinsing the glove or sponge in the bucket with a separator, the dirt settles at the bottom and doesn’t rise...",
    "description": "The product separates dirt from clean water. When rinsing the glove or sponge in the bucket with a separator, the dirt settles at the bottom and doesn’t rise up. As a result, the dirt doesn’t land back on the washed surfaces. The use of dirt separators is a basic principle in detailing. The bucket separator is available in black and yellow. MAIN FEATURES: Diameter – 260mm",
    "features": [
      "Engineered to professional automotive detailing standards",
      "Tested for surface safety on high-end clear coats and trims",
      "High efficiency concentrated formulation",
      "Official genuine European import in Malta"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_6deb599a75884ded9b8eb7de77eeffe0~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_6deb599a75884ded9b8eb7de77eeffe0~mv2.png"
    ],
    "inStock": true,
    "stockCount": 24,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.89,
    "reviewCount": 21
  },
  {
    "id": "ws-bucket-seperator-yellow",
    "slug": "work-stuff-bucket-seperator-yellow",
    "name": "Work Stuff Bucket Seperator Yellow",
    "brand": "work_stuff",
    "category": "Washing Equipment",
    "categorySlug": "wash",
    "subcategory": "Wash",
    "price": 14,
    "shortDescription": "Introducing our Bucket Separator in yellow, the perfect tool for detailing your car! This innovative product is designed to separate dirt and debris from cle...",
    "description": "Introducing our Bucket Separator in yellow, the perfect tool for detailing your car! This innovative product is designed to separate dirt and debris from clean water, ensuring that your cleaning solution stays effective for longer. When washing your car with a glove or sponge, simply rinse it in the bucket equipped with our separator. As the dirt settles at the bottom, it won’t mix back into the clean water. This way, you can rest assured that the washed surfaces will stay clean and shiny. The use of bucket separators is a crucial principle in car detailing, and our separator is an excellent choice for both amateur and professional detailers. Our bucket separator is available in two colors: black and yellow. With a diameter of 260mm, it fits perfectly in most standard-sized buckets. MAIN FEATURES: Diameter – 260mm",
    "features": [
      "Engineered to professional automotive detailing standards",
      "Tested for surface safety on high-end clear coats and trims",
      "High efficiency concentrated formulation",
      "Official genuine European import in Malta"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_822fd3f9f83f4be9abcd5550c51a8895~mv2.png/v1/fill/w_240,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_822fd3f9f83f4be9abcd5550c51a8895~mv2.png"
    ],
    "inStock": true,
    "stockCount": 25,
    "featured": false,
    "isBestSeller": true,
    "isNew": false,
    "rating": 4.9,
    "reviewCount": 22
  },
  {
    "id": "ws-bucket-hanger",
    "slug": "work-stuff-bucket-hanger",
    "name": "Work Stuff Bucket Hanger",
    "brand": "work_stuff",
    "category": "Washing Equipment",
    "categorySlug": "wash",
    "subcategory": "Wash",
    "price": 24,
    "shortDescription": "Introducing the Bucket Hanger, a convenient accessory for car enthusiasts to keep their detailing tools organized and accessible during vehicle washing. The ...",
    "description": "Introducing the Bucket Hanger, a convenient accessory for car enthusiasts to keep their detailing tools organized and accessible during vehicle washing. The Bucket Hanger attaches effortlessly to the side of any bucket and accommodates various brushes, gloves, and other detailing tools. This tool organizer for buckets is designed to optimize functionality and ease of use, with a curved handle that fits perfectly on all American-style detailing buckets. Additionally, it features a specialized drainage system at the bottom to prevent excess water from accumulating on your tools during use. Elevate your car detailing game with the Bucket Hanger – an essential tool to streamline your detailing process and maintain your tools in a tidy and accessible manner. MAIN FEATURES: Compatible with all detailing buckets. The drainage system removes excess water. It clips tightly onto the side of any bucket.",
    "features": [
      "Compatible with all detailing buckets.",
      "The drainage system removes excess water.",
      "It clips tightly onto the side of any bucket."
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_81b202cf5d40490e98b738d4bbd4e219~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_81b202cf5d40490e98b738d4bbd4e219~mv2.png"
    ],
    "inStock": true,
    "stockCount": 26,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.91,
    "reviewCount": 23
  },
  {
    "id": "ws-bucket-lid",
    "slug": "work-stuff-bucket-lid",
    "name": "Work Stuff BUCKET LID",
    "brand": "work_stuff",
    "category": "Washing Equipment",
    "categorySlug": "wash",
    "subcategory": "Wash",
    "price": 14,
    "originalPrice": 16.1,
    "shortDescription": "A Bucket lid, compatible with every WORK STUFF model. It prevents water from spilling out of the bucket. Main features: Strong HDPE material Easy to open and...",
    "description": "A Bucket lid, compatible with every WORK STUFF model. It prevents water from spilling out of the bucket. Main features: Strong HDPE material Easy to open and close",
    "features": [
      "A Bucket lid, compatible with every WORK STUFF model. It prevents water from spilling out of the bucket. Main features:",
      "Strong HDPE material",
      "Easy to open and close"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_f7b0f9ffd4734054a687065744e88c5d~mv2.png/v1/fill/w_240,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_f7b0f9ffd4734054a687065744e88c5d~mv2.png"
    ],
    "inStock": true,
    "stockCount": 27,
    "featured": true,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.92,
    "reviewCount": 24
  },
  {
    "id": "ws-hurricane-wheel-mitt",
    "slug": "work-stuff-hurricane-wheel-mitt",
    "name": "Work Stuff HURRICANE Wheel Mitt",
    "brand": "work_stuff",
    "category": "Washing Equipment",
    "categorySlug": "wash",
    "subcategory": "Wash",
    "price": 11,
    "shortDescription": "A rim cleaning glove designed for professional car detailers as well as all car enthusiasts. It is characterized by high absorbency and a large washing surfa...",
    "description": "A rim cleaning glove designed for professional car detailers as well as all car enthusiasts. It is characterized by high absorbency and a large washing surface, thanks to which it greatly facilitates and speeds up the work. Made of a delicate and dense microfiber that leaves no scratches on the element being cleaned. Main features: Size – 16 / 16cm Weight – 50g High absorbency Dense and delicate microfiber Large washing area NOTICE:Remember to wash the product before first use.",
    "features": [
      "Size – 16 / 16cm",
      "Weight – 50g",
      "High absorbency",
      "Dense and delicate microfiber",
      "Large washing area NOTICE:Remember to wash the product before first use."
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_82e91fe057d44c2e8c7c86f2ca21153e~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_82e91fe057d44c2e8c7c86f2ca21153e~mv2.png"
    ],
    "inStock": true,
    "stockCount": 28,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.93,
    "reviewCount": 25
  },
  {
    "id": "ws-storm-wash-mitt",
    "slug": "work-stuff-storm-wash-mitt",
    "name": "Work Stuff STORM Wash Mitt",
    "brand": "work_stuff",
    "category": "Washing Equipment",
    "categorySlug": "wash",
    "subcategory": "Wash",
    "price": 18,
    "shortDescription": "A car washing glove designed for professional car detailers as well as all car enthusiasts. It is characterized by high absorbency and a large washing surfac...",
    "description": "A car washing glove designed for professional car detailers as well as all car enthusiasts. It is characterized by high absorbency and a large washing surface, thanks to which it greatly facilitates and speeds up the work. The glove features an elastic cuff that prevents the glove from falling off the hand while washing the car. Made of a delicate and dense microfiber that leaves no scratches on the cleaned varnish. The stitching inside the glove ensures a secure fit which translates into better stability during work. MAIN FEATURES: Size – 22 / 18cm Weight – 115g Elastic cuff High absorbency Dense and delicate microfiber Large washing areaStorm Wash Mitt is one of the best mitts available on the market! NOTICE:Remember to wash the product before first use.",
    "features": [
      "Size – 22 / 18cm",
      "Weight – 115g",
      "Elastic cuff",
      "High absorbency",
      "Dense and delicate microfiber"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_3816ea7e15e74c16af2eca42a9ffe0a7~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_3816ea7e15e74c16af2eca42a9ffe0a7~mv2.png"
    ],
    "inStock": true,
    "stockCount": 29,
    "featured": false,
    "isBestSeller": false,
    "isNew": true,
    "rating": 4.94,
    "reviewCount": 26
  },
  {
    "id": "ws-typhoon-wash-pad",
    "slug": "work-stuff-typhoon-wash-pad",
    "name": "Work Stuff TYPHOON Wash Pad",
    "brand": "work_stuff",
    "category": "Washing Equipment",
    "categorySlug": "wash",
    "subcategory": "Wash",
    "price": 17,
    "originalPrice": 19.55,
    "shortDescription": "TYPHOON Wash PadA car washing pad designed for professional car detailers as well as all car enthusiasts. It is characterized by high absorbency and a large ...",
    "description": "TYPHOON Wash PadA car washing pad designed for professional car detailers as well as all car enthusiasts. It is characterized by high absorbency and a large washing surface, thanks to which it greatly facilitates and speeds up the work. Ergonomic shape prevents the mitt from falling off. Made of a delicate and dense microfiber that leaves no scratches on the cleaned varnish.Main features: Size – 22 / 18cm Weight – 120g Ergonomic shape High absorbency Dense and delicate microfiber Large washing area NOTICE:Remember to wash the product before first use.",
    "features": [
      "Size – 22 / 18cm",
      "Weight – 120g",
      "Ergonomic shape",
      "High absorbency",
      "Dense and delicate microfiber"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_a448312371be487eb6d33631da13c48e~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_a448312371be487eb6d33631da13c48e~mv2.png"
    ],
    "inStock": true,
    "stockCount": 30,
    "featured": false,
    "isBestSeller": true,
    "isNew": false,
    "rating": 4.95,
    "reviewCount": 27
  },
  {
    "id": "ws-beast-drying-towel",
    "slug": "work-stuff-beast-drying-towel",
    "name": "Work Stuff BEAST Drying Towel",
    "brand": "work_stuff",
    "category": "Drying Towels",
    "categorySlug": "drying",
    "subcategory": "drying",
    "price": 23,
    "shortDescription": "The BEAST Drying Towel by Work Stuff is the perfect car drying towel for any detailer or car enthusiast. Made from high-quality plush microfiber, this towel ...",
    "description": "The BEAST Drying Towel by Work Stuff is the perfect car drying towel for any detailer or car enthusiast. Made from high-quality plush microfiber, this towel boasts an extremely high absorbency rate, making it ideal for drying small to medium-sized cars quickly and effectively. Its dense yet delicate microfiber structure ensures that it won’t leave any scratches on your vehicle’s paintwork, making it safe to use on any type of varnish. Plus, the BEAST Drying Towel’s high-quality fibers prevent streaking, leaving your car’s paintwork looking perfect. If you’re looking for a car detailing towel that won’t disappoint, the BEAST Drying Towel is the way to go. Don’t settle for subpar towels that leave scratches and streaks on your car. Invest in the best with the BEAST Drying Towel by Work Stuff. Try now and experience the difference for yourself! MAIN FEATURES : Size – 70 / 50cm Density – 1100g / m2 “Plush” microfiber High absorbency Dense and delicate microfiber Safe for paintwork NOTICE:Remember to wash the product before first use.",
    "features": [
      "Size – 70 / 50cm",
      "Density – 1100g / m2",
      "“Plush” microfiber",
      "High absorbency",
      "Dense and delicate microfiber"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_fa5089f8146a47cba7ae2b14a7b896b2~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_fa5089f8146a47cba7ae2b14a7b896b2~mv2.png"
    ],
    "inStock": true,
    "stockCount": 31,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.96,
    "reviewCount": 28
  },
  {
    "id": "ws-king-drying-towel",
    "slug": "work-stuff-king-drying-towel",
    "name": "Work Stuff KING Drying Towel",
    "brand": "work_stuff",
    "category": "Drying Towels",
    "categorySlug": "drying",
    "subcategory": "drying",
    "price": 35,
    "shortDescription": "If you’re looking for a reliable and effective drying towel for car detailing, look no further than the KING Drying Towel. Our towel features a unique Korean...",
    "description": "If you’re looking for a reliable and effective drying towel for car detailing, look no further than the KING Drying Towel. Our towel features a unique Korean “Twisted Pile” fiber that provides outstanding absorbency and quick-drying performance. Its dense and delicate microfiber structure won’t leave scratches on any varnish type, making it an ideal option for drying medium and large cars. With a double-sided design and fiber lining at the edges, our high-quality drying towel ensures a streak-free finish every time. Its 90/73cm size and 1100g/m2 density make it suitable for any car detailing task. Moreover, our towel is paintwork-safe, giving you confidence while using it. To sum up, the KING Drying Towel is the perfect drying solution for car detailing. Its exceptional Korean “Twisted Pile” fiber, high absorbency, and quick-drying performance make it an excellent choice for any detailer. MAIN FEATURES: Size – 90 / 73cm Density – 1100g / m2 “Twisted Pile” microfiber Quick-drying fibers High absorbency Dense and delicate microfiber Safe for paintwork NOTICE: Remember to wash the product before first use.",
    "features": [
      "Size – 90 / 73cm",
      "Density – 1100g / m2",
      "“Twisted Pile” microfiber",
      "Quick-drying fibers",
      "High absorbency"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_3e6bb4b0409d4bc3a13568758f324dbc~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_3e6bb4b0409d4bc3a13568758f324dbc~mv2.png"
    ],
    "inStock": true,
    "stockCount": 32,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.97,
    "reviewCount": 29
  },
  {
    "id": "ws-monster-drying-towel",
    "slug": "work-stuff-monster-drying-towel",
    "name": "Work Stuff MONSTER Drying Towel",
    "brand": "work_stuff",
    "category": "Drying Towels",
    "categorySlug": "drying",
    "subcategory": "drying",
    "price": 23,
    "originalPrice": 26.45,
    "shortDescription": "Introducing the MONSTER Drying Towel – the ultimate solution for quick and effective drying of medium to large cars. Made with high-quality microfiber and a ...",
    "description": "Introducing the MONSTER Drying Towel – the ultimate solution for quick and effective drying of medium to large cars. Made with high-quality microfiber and a unique Korean “Twisted Pile” fiber, this towel boasts superior absorbency and quick-drying capabilities, ensuring a professional finish with no unsightly streaks or scratches on your car’s paintwork. Our dense and delicate microfiber structure is safe for all types of varnish, making it the perfect choice for car enthusiasts and professionals alike. Designed with a laser-cut WORK STUFF logo and fabric trim on the edges, our towel offers a polished finish that adds to its premium look and feel. At 90 / 73cm in size and with a density of 515g / m2, this towel is the ideal choice for anyone looking for high absorbency and quick-drying fibers. Remember to wash the product before first use, and trust in the MONSTER Drying Towel for a perfect drying experience, every time. MAIN FEATURES: Size – 90 / 73cm Density – 515g / m2 “Twisted Pile” microfiber Quick-drying fibers High absorbency Dense and delicate microfiber Safe for the paintwork NOTICE: Remember to wash the product before first use.",
    "features": [
      "Size – 90 / 73cm",
      "Density – 515g / m2",
      "“Twisted Pile” microfiber",
      "Quick-drying fibers",
      "High absorbency"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_ddd47b541caa4dd0b485cc8be7e83226~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_ddd47b541caa4dd0b485cc8be7e83226~mv2.png"
    ],
    "inStock": true,
    "stockCount": 33,
    "featured": true,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.98,
    "reviewCount": 30
  },
  {
    "id": "ws-magneto",
    "slug": "work-stuff-magneto",
    "name": "Work Stuff MAGNETO",
    "brand": "work_stuff",
    "category": "Drying Towels",
    "categorySlug": "drying",
    "subcategory": "drying",
    "price": 16,
    "shortDescription": "MAGNETO Microfiber is the ultimate solution for preventing water stains on your car’s paintwork. With its high-quality microfiber towel and built-in magnets,...",
    "description": "MAGNETO Microfiber is the ultimate solution for preventing water stains on your car’s paintwork. With its high-quality microfiber towel and built-in magnets, you can easily place it under the mirror or in any other trouble spot. The water will flow directly into the microfiber, not onto the varnish, keeping your car looking its best. The special magnets inside the microfibers make it easy to place both horizontally and vertically. Each package contains two fibers, one for each mirror. Magneto is safe for the paintwork and provides high absorbency to ensure a thorough cleaning. Don’t let water stains ruin your car’s appearance, choose MAGNETO Microfiber and keep it looking new. MAIN FEATURES: Thanks to the built-in magnets, Magneto can be placed anywhere, both vertically and horizontally High absorbency Safe for the paintwork Built-in magnets High-quality microfiber Prevents water stains on paintwork Two fibers per package",
    "features": [
      "Thanks to the built-in magnets, Magneto can be placed anywhere, both vertically and horizontally",
      "High absorbency",
      "Safe for the paintwork",
      "Built-in magnets",
      "High-quality microfiber"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_30895e9e67794c45bbbb88a624b687b0~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_30895e9e67794c45bbbb88a624b687b0~mv2.png"
    ],
    "inStock": true,
    "stockCount": 34,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.99,
    "reviewCount": 31
  },
  {
    "id": "ws-monster-xs-drying-towel",
    "slug": "work-stuff-monster-xs-drying-towel",
    "name": "Work Stuff MONSTER XS Drying Towel",
    "brand": "work_stuff",
    "category": "Drying Towels",
    "categorySlug": "drying",
    "subcategory": "drying",
    "price": 14,
    "shortDescription": "MONSTER XS Drying Towel, a modern and high-quality car drying towel made with Korean “Twisted Pile” microfiber. With its unique fiber structure, this towel h...",
    "description": "MONSTER XS Drying Towel, a modern and high-quality car drying towel made with Korean “Twisted Pile” microfiber. With its unique fiber structure, this towel has a very high absorbency and quick-drying performance, making it the perfect tool for drying hard-to-reach places and all the nooks and crannies of your vehicle. The dense and delicate microfiber structure ensures that no scratches are left behind, making it safe for any type of varnish. Its compact size makes it ideal for use on smaller areas or tight spaces. You can trust the high-quality fiber to work without the risk of leaving streaks on your car’s paintwork. The MONSTER XS Drying Towel also features a laser-cut WORK STUFF logo and fabric trim on the edges for added durability and style. This is a compact version of the MONSTER Drying Towel that delivers the same superior performance and quality. MAIN FEATURES: Size – 55 / 50cm Density – 515g / m2 “Twisted Pile” microfiber Dense and delicate microfiber Safe for the paintwork High absorbency and quick-drying fibers Scratch-free and safe for any type of varnish Compact size ideal for hard-to-reach places and all the nooks and crannies NOTICE: Remember to wash the product before first use.",
    "features": [
      "Size – 55 / 50cm",
      "Density – 515g / m2",
      "“Twisted Pile” microfiber",
      "Dense and delicate microfiber",
      "Safe for the paintwork"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_9bb1bafcb80441918c1cdf4d47677e01~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_9bb1bafcb80441918c1cdf4d47677e01~mv2.png"
    ],
    "inStock": true,
    "stockCount": 35,
    "featured": false,
    "isBestSeller": true,
    "isNew": false,
    "rating": 4.8,
    "reviewCount": 32
  },
  {
    "id": "ws-prince-drying-towel",
    "slug": "work-stuff-prince-drying-towel",
    "name": "Work Stuff PRINCE Drying Towel",
    "brand": "work_stuff",
    "category": "Drying Towels",
    "categorySlug": "drying",
    "subcategory": "drying",
    "price": 23,
    "originalPrice": 26.45,
    "shortDescription": "Introducing the PRINCE Drying Towel – the modern solution to your car and motorcycle drying needs. Made with a unique Korean “Twisted Pile” microfiber, this ...",
    "description": "Introducing the PRINCE Drying Towel – the modern solution to your car and motorcycle drying needs. Made with a unique Korean “Twisted Pile” microfiber, this towel boasts an incredibly high absorbency and quick-drying fibers, ensuring that your vehicle is dried quickly and efficiently. The dense and delicate microfiber structure guarantees that it won’t leave any scratches on your vehicle’s varnish. Measuring 55 / 50cm and with a density of 1100g / m2, the PRINCE Drying Towel is perfect for reaching hard-to-dry areas and getting into all the nooks and crannies. Its double-sided fiber lining ensures that high-quality fibers are used throughout, minimizing the risk of leaving streaks on your vehicle’s paintwork. Not only does the PRINCE Drying Towel provide superior drying performance, but it’s also convenient to store and transport thanks to its compact size. Use it for your car, motorcycle, or any vehicle that needs a quick and efficient drying solution. Once you give it a try, you’ll see why it’s the perfect drying towel for any vehicle. MAIN FEATURES: Size – 55 / 50cm Density – 1100g / m2 “Twisted Pile” microfiber Quick-drying fibers High absorbency Dense and delicate microfiber Safe for the paintwork NOTICE: Remember to wash the product before first use",
    "features": [
      "Size – 55 / 50cm",
      "Density – 1100g / m2",
      "“Twisted Pile” microfiber",
      "Quick-drying fibers",
      "High absorbency"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_a461944586c442de87dcdb5fd1a995ac~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_a461944586c442de87dcdb5fd1a995ac~mv2.png"
    ],
    "inStock": true,
    "stockCount": 36,
    "featured": false,
    "isBestSeller": false,
    "isNew": true,
    "rating": 4.81,
    "reviewCount": 33
  },
  {
    "id": "ws-copy-of-detailing-brush-classic",
    "slug": "work-stuff-copy-of-detailing-brush-classic",
    "name": "Work Stuff Detailing Brush Classic",
    "brand": "work_stuff",
    "category": "Detailing Brushes",
    "categorySlug": "brushes",
    "subcategory": "Brushes",
    "price": 3,
    "shortDescription": "Looking for a reliable car cleaning brush? Our Detailing Brush CLASSIC is the perfect tool for cleaning rims, prewash, and car interiors. With a varnished pl...",
    "description": "Looking for a reliable car cleaning brush? Our Detailing Brush CLASSIC is the perfect tool for cleaning rims, prewash, and car interiors. With a varnished plastic handle and natural/synthetic bristles, this brush is designed to absorb chemicals for a more efficient cleaning process. Say goodbye to using multiple brushes for different cleaning tasks. Our Detailing Brush CLASSIC comes in four sizes (16mm, 24mm, 30mm, and 40mm) to handle all your car cleaning needs, from rims to prewash to interior detailing. And, it’s also suitable for use on motorcycles. Crafted with durable materials and an ergonomic design, the CLASSIC brush provides a comfortable grip for extended use. Whether you’re a professional detailer or a car cleaning enthusiast, our detailing brush is the ultimate tool for achieving a perfect clean. Get yours today and experience the difference! USE: Rims Prewash Car interior AVAILABLE SIZES:16mm/ 24mm / 30mm/ 40mm",
    "features": [
      "Engineered to professional automotive detailing standards",
      "Tested for surface safety on high-end clear coats and trims",
      "High efficiency concentrated formulation",
      "Official genuine European import in Malta"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_8072ceb7029f4706a45287673bc73fea~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_8072ceb7029f4706a45287673bc73fea~mv2.png"
    ],
    "inStock": true,
    "stockCount": 37,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.82,
    "reviewCount": 34
  },
  {
    "id": "ws-detailing-brush-short",
    "slug": "work-stuff-detailing-brush-short",
    "name": "Work Stuff Detailing Brush Short",
    "brand": "work_stuff",
    "category": "Detailing Brushes",
    "categorySlug": "brushes",
    "subcategory": "Brushes",
    "price": 3,
    "shortDescription": "Introducing our Detailing Brush SHORT, the most versatile brush in our lineup with bristles that are now even shorter for better cleaning action and foaming ...",
    "description": "Introducing our Detailing Brush SHORT, the most versatile brush in our lineup with bristles that are now even shorter for better cleaning action and foaming power. This brush is perfect for cleaning rims, prewash, and car interiors. The black varnished plastic handle and natural/synthetic bristles are designed to absorb chemicals for a more efficient cleaning process. But why settle for just one sizes when you can have three? Our brush comes in 16, 24, and 30mm sizes, making it the ultimate tool for all your car cleaning needs. Made with a durable varnished plastic handle and a blend of natural and synthetic bristles, this brush effectively absorbs cleaning chemicals for an efficient cleaning process. Plus, its ergonomic design ensures a comfortable grip for extended use. And if that wasn’t enough, the Detailing Brush SHORT has even shorter bristles than the CLASSIC version, providing an even more effective cleaning experience. Whether you’re a professional detailer or a car cleaning enthusiast, our detailing brushes are the perfect tools for achieving a perfect clean. Order yours today and experience the difference! USE: Rims Prewash Car interior AVAILABLE SIZES: 16mm/24mm/30mm",
    "features": [
      "Engineered to professional automotive detailing standards",
      "Tested for surface safety on high-end clear coats and trims",
      "High efficiency concentrated formulation",
      "Official genuine European import in Malta"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_7eae1f6d3305436887affbc57ba12a91~mv2.png/v1/fill/w_223,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_7eae1f6d3305436887affbc57ba12a91~mv2.png"
    ],
    "inStock": true,
    "stockCount": 38,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.83,
    "reviewCount": 35
  },
  {
    "id": "ws-detailing-brush-albino-16mm",
    "slug": "work-stuff-detailing-brush-albino-16mm",
    "name": "Work Stuff Detailing Brush ALBINO",
    "brand": "work_stuff",
    "category": "Detailing Brushes",
    "categorySlug": "brushes",
    "subcategory": "Brushes",
    "price": 7,
    "originalPrice": 8.05,
    "shortDescription": "Introducing the Detailing Brush ALBINO – the ultimate tool for achieving a professional level of cleanliness for your car or motorcycle. With its soft synthe...",
    "description": "Introducing the Detailing Brush ALBINO – the ultimate tool for achieving a professional level of cleanliness for your car or motorcycle. With its soft synthetic white bristles, this versatile brush gently and effectively cleans your vehicle’s interior, leather, and prewash areas without scratching or damaging any surfaces. Available in four different sizes (16mm, 24mm, 30mm, and 40mm), the Detailing Brush ALBINO is a must-have for any car or motorcycle enthusiast looking to maintain their vehicle’s appearance. Whether you’re a detailing professional or a DIY car enthusiast, this brush is perfect for all your cleaning needs. Get the most out of your cleaning routine and keep your car or motorcycle looking like new with the Detailing Brush ALBINO. USE: Prewash Car interior Leather AVAILABLE SIZES:16mm/24mm /30mm /40mm",
    "features": [
      "Engineered to professional automotive detailing standards",
      "Tested for surface safety on high-end clear coats and trims",
      "High efficiency concentrated formulation",
      "Official genuine European import in Malta"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_6c77980e3cb94c9fac2b547867e869ce~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_6c77980e3cb94c9fac2b547867e869ce~mv2.png"
    ],
    "inStock": true,
    "stockCount": 39,
    "featured": true,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.84,
    "reviewCount": 36
  },
  {
    "id": "ws-detailing-brush-black",
    "slug": "work-stuff-detailing-brush-black",
    "name": "Work Stuff Detailing Brush Black",
    "brand": "work_stuff",
    "category": "Detailing Brushes",
    "categorySlug": "brushes",
    "subcategory": "Brushes",
    "price": 5,
    "shortDescription": "Looking for a powerful detailing brush to help you get your car or motorcycle looking its best? Look no further than our Detailing Brush Black! This brush is...",
    "description": "Looking for a powerful detailing brush to help you get your car or motorcycle looking its best? Look no further than our Detailing Brush Black! This brush is specially designed to provide high cleaning power, making it perfect for use on everything from rims and sills to recessed areas and engine chambers.But that’s not all – this tool is also great for cleaning the interior of your car or motorcycle recessed part, thanks to its ability to remove even the most stubborn dirt and grime. Made with a durable varnished plastic handle and synthetic bristles, this brush is built to last and provide excellent performance. Please note that while this brush is perfect for many different detailing tasks, it should not be used on scratch-prone elements such as car or motorcycle bodies, piano black elements, piano black rims, or gloss black finishes. So if you’re looking for a versatile detailing brush that can handle tough cleaning jobs for your car or motorcycle, our black detailing brush is the perfect choice! USE: Rims Engine Car interior AVAILABLE SIZES:16mm/24mm/30mm/40mm",
    "features": [
      "Engineered to professional automotive detailing standards",
      "Tested for surface safety on high-end clear coats and trims",
      "High efficiency concentrated formulation",
      "Official genuine European import in Malta"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_5eb0fbe25f39487482c7a395076acf72~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_5eb0fbe25f39487482c7a395076acf72~mv2.png"
    ],
    "inStock": true,
    "stockCount": 40,
    "featured": false,
    "isBestSeller": true,
    "isNew": false,
    "rating": 4.85,
    "reviewCount": 37
  },
  {
    "id": "ws-detailing-brush-albino-orange",
    "slug": "work-stuff-detailing-brush-albino-orange",
    "name": "Work Stuff Detailing Brush ALBINO Orange",
    "brand": "work_stuff",
    "category": "Detailing Brushes",
    "categorySlug": "brushes",
    "subcategory": "Brushes",
    "price": 7,
    "shortDescription": "Our Albino Orange car detailing brush is a versatile and effective tool for maintaining the cleanliness and appearance of your car’s interior. The brush is m...",
    "description": "Our Albino Orange car detailing brush is a versatile and effective tool for maintaining the cleanliness and appearance of your car’s interior. The brush is made with synthetic bristles that are gentle on surfaces, making it perfect for pre-wash and cleaning hard-to-reach areas, such as leather decorations and the steering wheel. The brush has a handle made of varnished plastic, providing a comfortable grip and precise control for easy cleaning. Whether you’re a seasoned professional in the car detailing industry or a car enthusiast who takes pride in their vehicle, our detailing brush is an essential addition to your cleaning kit. At Work Stuff, we take pride in offering high-quality car detailing products that make cleaning your car easy and enjoyable. Our Albino Orange brush is no exception – with its gentle synthetic bristles and comfortable handle, it’s the perfect tool for achieving a spotless interior. USE: Prewash Car interior Leather AVAILABLE SIZES:16mm/24mm/30mm/40mm",
    "features": [
      "Engineered to professional automotive detailing standards",
      "Tested for surface safety on high-end clear coats and trims",
      "High efficiency concentrated formulation",
      "Official genuine European import in Malta"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_76b18a607cea4a8d88d7369b2f54a30d~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_76b18a607cea4a8d88d7369b2f54a30d~mv2.png"
    ],
    "inStock": true,
    "stockCount": 41,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.86,
    "reviewCount": 38
  },
  {
    "id": "ws-detailing-brush-grey",
    "slug": "work-stuff-detailing-brush-grey",
    "name": "Work Stuff Detailing Brush Grey",
    "brand": "work_stuff",
    "category": "Detailing Brushes",
    "categorySlug": "brushes",
    "subcategory": "Brushes",
    "price": 7,
    "originalPrice": 8.05,
    "shortDescription": "Our detailing brush Grey is the ultimate tool for car enthusiasts who want to achieve the perfect clean. With its high cleaning power and increased bristle s...",
    "description": "Our detailing brush Grey is the ultimate tool for car enthusiasts who want to achieve the perfect clean. With its high cleaning power and increased bristle softness, it’s perfect for pre-washing and cleaning rims, as well as more delicate work on the interior of your car, such as cleaning leather elements. The detailing brush has a handle made of varnished plastic, providing a comfortable grip for precise control while cleaning. The synthetic bristles are gentle on surfaces, making it ideal for use on the rims, pre-wash, and car interior. Make the most of our detailing brush’s versatile cleaning power to keep your car looking its best. Whether you’re a professional car detailer or a car enthusiast, this brush is a must-have in your cleaning kit. USE:rimsprewashcar interiorleather AVAILABLE SIZES:16MM/24MM/30MM",
    "features": [
      "Engineered to professional automotive detailing standards",
      "Tested for surface safety on high-end clear coats and trims",
      "High efficiency concentrated formulation",
      "Official genuine European import in Malta"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_0af29aec3f5e4a708eaa304e6da69411~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_0af29aec3f5e4a708eaa304e6da69411~mv2.png"
    ],
    "inStock": true,
    "stockCount": 42,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.87,
    "reviewCount": 39
  },
  {
    "id": "ws-detailing-brush-albino-3-pack-1",
    "slug": "work-stuff-detailing-brush-albino-3-pack-1",
    "name": "Work Stuff Detailing Brush ALBINO ORANGE 3-pack",
    "brand": "work_stuff",
    "category": "Detailing Brushes",
    "categorySlug": "brushes",
    "subcategory": "Brushes",
    "price": 21,
    "shortDescription": "Keep your car looking its best with our Albino Orange detailing brush 3-pack. These highly delicate brushes are perfect for prewash and can be used for clean...",
    "description": "Keep your car looking its best with our Albino Orange detailing brush 3-pack. These highly delicate brushes are perfect for prewash and can be used for cleaning the interior of your car, including hard-to-reach areas like leather decors and the steering wheel. The brush handles are made of coated plastic, providing a comfortable grip for precise cleaning. The bristles are made of synthetic material and come in orange, making them gentle on surfaces while still effective at removing dirt and grime. This package contains three brushes in different sizes (16, 24, and 30mm), ensuring you have the right tool for every job. USE: Prewash Car interior Leather",
    "features": [
      "Engineered to professional automotive detailing standards",
      "Tested for surface safety on high-end clear coats and trims",
      "High efficiency concentrated formulation",
      "Official genuine European import in Malta"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_cc5272f92154455d97b3235e6c4c3a53~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_cc5272f92154455d97b3235e6c4c3a53~mv2.png"
    ],
    "inStock": true,
    "stockCount": 43,
    "featured": false,
    "isBestSeller": false,
    "isNew": true,
    "rating": 4.88,
    "reviewCount": 40
  },
  {
    "id": "ws-detailing-brush-black-3-pack",
    "slug": "work-stuff-detailing-brush-black-3-pack",
    "name": "Work Stuff Detailing Brush BLACK 3-Pack",
    "brand": "work_stuff",
    "category": "Detailing Brushes",
    "categorySlug": "brushes",
    "subcategory": "Brushes",
    "price": 19,
    "shortDescription": "Introducing our Detailing Brush BLACK 3-pack set, the perfect addition to your car cleaning arsenal. This set contains three brushes, each with a different s...",
    "description": "Introducing our Detailing Brush BLACK 3-pack set, the perfect addition to your car cleaning arsenal. This set contains three brushes, each with a different size (16mm, 24mm, and 30mm) to tackle any cleaning task. Made with synthetic bristles and coated plastic handles, these brushes are tough and durable, perfect for cleaning rims, sills, and engine bays. They are also ideal for heavy dirt on car interiors, thanks to their ability to loosen and remove stubborn grime. Please note that these brushes should not be used on scratch-prone surfaces like car paint, piano elements, or glossy rims and black elements. Invest in our BLACK 3-pack detailing brush set today and enjoy a spotless, polished car every time. These brushes can also be used for cleaning motorcycle engines, making them a versatile addition to any cleaning kit. USE: Rims Engine Car Interior",
    "features": [
      "Engineered to professional automotive detailing standards",
      "Tested for surface safety on high-end clear coats and trims",
      "High efficiency concentrated formulation",
      "Official genuine European import in Malta"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_af1aa787235d4c9b9163ffe7014b81f4~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_af1aa787235d4c9b9163ffe7014b81f4~mv2.png"
    ],
    "inStock": true,
    "stockCount": 44,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.89,
    "reviewCount": 41
  },
  {
    "id": "ws-detailing-brush-classic-3-pack",
    "slug": "work-stuff-detailing-brush-classic-3-pack",
    "name": "Work Stuff Detailing Brush CLASSIC 3-Pack",
    "brand": "work_stuff",
    "category": "Detailing Brushes",
    "categorySlug": "brushes",
    "subcategory": "Brushes",
    "price": 12,
    "originalPrice": 13.8,
    "shortDescription": "Introducing our Detailing Brush CLASSIC 3-pack – the ultimate set of versatile brushes designed to tackle any cleaning job on your car or motorcycle. Whether...",
    "description": "Introducing our Detailing Brush CLASSIC 3-pack – the ultimate set of versatile brushes designed to tackle any cleaning job on your car or motorcycle. Whether you need to clean your rims, perform prewash tasks, tackle car interior cleaning, or even clean your engine, our Detailing Brush CLASSIC 3-pack has got you covered. Each brush features a coated plastic handle that provides a secure grip, even when you’re cleaning hard-to-reach areas. The bristles are a perfect blend of natural and synthetic materials that provide maximum chemical absorption and even distribution, ensuring that your cleaning products are used efficiently and effectively. The set includes three different sizes – 16, 24, and 30mm – so you can choose the right tool for any cleaning job. Whether you’re a professional detailer or a car enthusiast, our Detailing Brush CLASSIC 3-pack is a must-have in your cleaning arsenal. Invest in the best and take your car or motorcycle cleaning to the next level with our Detailing Brushes. USE: Rims Prewash Car Interior",
    "features": [
      "Engineered to professional automotive detailing standards",
      "Tested for surface safety on high-end clear coats and trims",
      "High efficiency concentrated formulation",
      "Official genuine European import in Malta"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_8b04389813e442feb0a16b726d0f0462~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_8b04389813e442feb0a16b726d0f0462~mv2.png"
    ],
    "inStock": true,
    "stockCount": 15,
    "featured": true,
    "isBestSeller": true,
    "isNew": false,
    "rating": 4.9,
    "reviewCount": 42
  },
  {
    "id": "ws-detailing-brush-albino-3-pack",
    "slug": "work-stuff-detailing-brush-albino-3-pack",
    "name": "Work Stuff Detailing Brush ALBINO 3-pack",
    "brand": "work_stuff",
    "category": "Detailing Brushes",
    "categorySlug": "brushes",
    "subcategory": "Brushes",
    "price": 27,
    "shortDescription": "The Detailing Brush ALBINO 3-pack is a set of premium quality brushes specifically designed for prewash and car interior cleaning. These brushes are perfect ...",
    "description": "The Detailing Brush ALBINO 3-pack is a set of premium quality brushes specifically designed for prewash and car interior cleaning. These brushes are perfect for tackling hard-to-reach areas, such as leather interiors and steering wheels. The brush handle is made of coated plastic, while the synthetic bristles come in white, providing a delicate touch to your car’s surfaces. The package includes three different sizes, 16, 24, and 30mm, each designed to meet specific cleaning needs. Whether you’re a professional car detailer or a car enthusiast, this 3-pack detailing brush set is an essential addition to your car cleaning kit. It can be used for prewash, car interior cleaning, and even leather cleaning. Additionally, it can also be used for cleaning the engine of your motorcycle or car. With its high-quality materials and versatile use, this detailing brush set is a must-have for any car lover USE: Prewash Car interior Leather",
    "features": [
      "Engineered to professional automotive detailing standards",
      "Tested for surface safety on high-end clear coats and trims",
      "High efficiency concentrated formulation",
      "Official genuine European import in Malta"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_8cb1f2c45f9d4fb5b49c1bb0b4771df1~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_8cb1f2c45f9d4fb5b49c1bb0b4771df1~mv2.png"
    ],
    "inStock": true,
    "stockCount": 16,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.91,
    "reviewCount": 43
  },
  {
    "id": "ws-clay-block",
    "slug": "work-stuff-clay-block",
    "name": "Work Stuff Clay Block",
    "brand": "work_stuff",
    "category": "Claybars & Decontamination",
    "categorySlug": "claybars",
    "subcategory": "Claybars",
    "price": 18,
    "shortDescription": "What is detailing clay used for? It’s a fine-grade tool utilized by auto detailers to prepare the surface of your vehicle before polishing or waxing. This ve...",
    "description": "What is detailing clay used for? It’s a fine-grade tool utilized by auto detailers to prepare the surface of your vehicle before polishing or waxing. This versatile tool effectively removes stubborn contaminants such as tar, resin, and asphalt, along with other dirt that traditional cleaning methods cannot handle. This helps prevent scratches in your paint job and ensures that your polish and wax work more effectively. Additionally, using a clay bar helps maintain the integrity of any protective coating you apply to the finish and keeps your car’s surface clean and free of impurities. Our Clay Block is a durable polymer-layered sponge that’s perfect for achieving a smooth, spotless finish every time. Take your car detailing routine to the next level with our professional tools. HOW TO USE: Wash the car Soak the sponge in water or shampoo and water solution Move Clay Block across and along the varnish or windows Don’t apply too much pressure Rinse the sponge regularly Wash and dry the car NOTICE: Before using for the first time, wash the sponge in warm water Do not expose the sponge to high temperatures Keep the product out of the sun Do not use with solvent based products",
    "features": [
      "Wash the car",
      "Soak the sponge in water or shampoo and water solution",
      "Move Clay Block across and along the varnish or windows",
      "Don’t apply too much pressure",
      "Rinse the sponge regularly"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_17b2140cc8e5429dbe4a35e0034b3695~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_17b2140cc8e5429dbe4a35e0034b3695~mv2.png"
    ],
    "inStock": true,
    "stockCount": 17,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.92,
    "reviewCount": 44
  },
  {
    "id": "ws-clay-mitt",
    "slug": "work-stuff-clay-mitt",
    "name": "Work Stuff CLAY MITT",
    "brand": "work_stuff",
    "category": "Claybars & Decontamination",
    "categorySlug": "claybars",
    "subcategory": "Claybars",
    "price": 36,
    "originalPrice": 41.4,
    "shortDescription": "Looking for an affordable and efficient alternative to traditional clay bars? Look no further than our CLAY MITT. Designed with a durable polymer layer, this...",
    "description": "Looking for an affordable and efficient alternative to traditional clay bars? Look no further than our CLAY MITT. Designed with a durable polymer layer, this mitt can be used multiple times and effectively eliminates tough contaminants such as tar, resin, and insect marks. Its ergonomic design allows for easy maneuvering and use on even the most intricate surfaces. Achieve professional-level results with our innovative product, which features a larger surface area than regular clay for a faster cleaning experience. Use it on your car or motorcycle to leave your paintwork smooth and polished. To use the CLAY MITT, simply wash your vehicle, soak the mitt in water or shampoo and water solution, move it across and along the surface with light pressure, and rinse the mitt regularly. After use, wash and dry your vehicle. Please note that before using the mitt for the first time, it should be washed in warm water. Do not expose it to high temperatures, keep it out of the sun, and do not use with solvent-based products.Invest in the best for your vehicle’s maintenance and get your CLAY MITT today for a faster, easier, and more effective claying experience. Plus, it’s not just for cars – you can also use it to clean the surface of your motorcycle. HOW TO USE: Wash the car Soak the mitt in water or shampoo and water solution Move the mitt across and along the varnish or windows Don’t apply too much pressure Rinse the mitt regularly Wash and dry the car NOTICE: Before using for the first time, wash the mitt in warm water Do not expose the sponge to high temperatures Keep the product out of the sun Do not use with solvent based products",
    "features": [
      "Wash the car",
      "Soak the mitt in water or shampoo and water solution",
      "Move the mitt across and along the varnish or windows",
      "Don’t apply too much pressure",
      "Rinse the mitt regularly"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_fb9ac8f2acd64cc390af710b87bcc421~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_fb9ac8f2acd64cc390af710b87bcc421~mv2.png"
    ],
    "inStock": true,
    "stockCount": 18,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.93,
    "reviewCount": 45
  },
  {
    "id": "ws-dot-clay-bar-hard",
    "slug": "work-stuff-dot-clay-bar-hard",
    "name": "Work Stuff DOT Clay Bar Hard + Plastic Box",
    "brand": "work_stuff",
    "category": "Claybars & Decontamination",
    "categorySlug": "claybars",
    "subcategory": "Claybars",
    "price": 12,
    "shortDescription": "Introducing DOT Clay Bar Hard – the ultimate solution for decontaminating your car’s surface! Eliminating impurities such as brake dust, tar, rust, and even ...",
    "description": "Introducing DOT Clay Bar Hard – the ultimate solution for decontaminating your car’s surface! Eliminating impurities such as brake dust, tar, rust, and even harmful substances present in smog, this product creates a smoother and more refined finish for your vehicle.While a traditional car wash may not be able to remove all these substances, DOT Clay Bar Hard guarantees a perfect finish every time. Its high-density clay bar can remove any kind of substance, even from the pores of paint. Plus, with its pleasant apple scent and high plasticity, this product ensures a comfortable and easy decontamination process. The product is conveniently packaged in a plastic box for easy storage.Try a clay for car DOT Bar Hard for a flawless finish! MAIN FEATURES: Useful storage box Grade: heavy Pleasant smell High plasticity AVAILABLE SIZES:100g/200g",
    "features": [
      "Useful storage box",
      "Grade: heavy",
      "Pleasant smell",
      "High plasticity AVAILABLE SIZES:100g/200g"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_9c9a7ba9461f4d56a77c9b597482d2ee~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_9c9a7ba9461f4d56a77c9b597482d2ee~mv2.png"
    ],
    "inStock": true,
    "stockCount": 19,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.94,
    "reviewCount": 46
  },
  {
    "id": "ws-spot-clay-bar-hard-plastic-box",
    "slug": "work-stuff-spot-clay-bar-hard-plastic-box",
    "name": "Work Stuff SPOT Clay Bar Hard + Plastic Box",
    "brand": "work_stuff",
    "category": "Claybars & Decontamination",
    "categorySlug": "claybars",
    "subcategory": "Claybars",
    "price": 10,
    "shortDescription": "Introducing SPOT Clay Bar – the perfect solution for decontaminating your car’s surface with a gentle touch. This medium-hard bar effectively removes impurit...",
    "description": "Introducing SPOT Clay Bar – the perfect solution for decontaminating your car’s surface with a gentle touch. This medium-hard bar effectively removes impurities such as brake dust, tar, and tree resins, leaving a smooth and refined finish on your vehicle.With high plasticity and a pleasant fruit aroma, SPOT Clay Bar provides a comfortable and enjoyable decontamination experience. Conveniently packaged in a plastic box, this product is easy to store and remains clean and ready to use at all times. To use, mold the clay in warm water and apply it to your car’s surface using a back-and-forth motion. SPOT Clay Bar is gentle enough for use on all types of paint and finishes, ensuring a flawless result every time. Say goodbye to rough or matte surfaces – try SPOT Clay Bar for a smooth and perfect finish! Choose SPOT Clay Bar for an effective and gentle way to remove contaminants from your car’s surface. With its high plasticity and pleasant aroma, this product is a must-have for any car detailing enthusiast. MAIN FEATURES: Useful storage box Grade: medium Pleasant smell High plasticity AVAILABLE SIZES:100g/200g",
    "features": [
      "Useful storage box",
      "Grade: medium",
      "Pleasant smell",
      "High plasticity AVAILABLE SIZES:100g/200g"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_ab4d30f7d90e446f9cc896daf2dc30fb~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_ab4d30f7d90e446f9cc896daf2dc30fb~mv2.png"
    ],
    "inStock": true,
    "stockCount": 20,
    "featured": false,
    "isBestSeller": true,
    "isNew": true,
    "rating": 4.95,
    "reviewCount": 47
  },
  {
    "id": "ws-work-gloves",
    "slug": "work-stuff-work-gloves",
    "name": "Work Stuff Work Gloves",
    "brand": "work_stuff",
    "category": "Microfibers & Tools",
    "categorySlug": "microfibers-tools",
    "subcategory": "Microfiber & Tools",
    "price": 14,
    "originalPrice": 16.1,
    "shortDescription": "The WORK GLOVES are high-quality nitrile gloves designed for professional detailing and tough working conditions. Crafted for durability and comfort, they of...",
    "description": "The WORK GLOVES are high-quality nitrile gloves designed for professional detailing and tough working conditions. Crafted for durability and comfort, they offer chemical resistance and abrasion protection while being gentle on the skin. Key Features: Premium Nitrile Material: Resistant to chemicals, abrasion, and tears. Hypoallergenic &amp; Powder-Free: Minimizes the risk of skin irritation and allergies. Enhanced Durability: Reinforced structure for long-lasting use. Soft &amp; Flexible: Ensures comfort and dexterity during prolonged use. Sizes Available: M / L / XL for a perfect fit. Quantity: 100 gloves per box. Color: Black, professional and sleek appearance. Perfect For:✅ Auto Detailing Professionals: Protection from chemicals during cleaning and coating application.✅ Workshops &amp; Garages: Ideal for mechanics, painters, and technicians.✅ General Use: Suitable for cleaning, painting, and maintenance tasks. Why Choose WORK GLOVES? ✅ Superior Protection: Resistant to abrasion and chemical exposure. ✅ Comfort Fit: Soft, flexible design for prolonged use. ✅ Hypoallergenic: Powder-free and safe for sensitive skin. ✅ Professional Grade: Trusted by industry professionals. Product Specifications: Material: High-Quality Nitrile Color: Black Sizes: M / L Quantity: 100 pieces per box Usage: Professional &amp; General Use",
    "features": [
      "Premium Nitrile Material:",
      "Auto Detailing Professionals: Protection from chemicals during cleaning and coating application.",
      "Workshops &amp; Garages: Ideal for mechanics, painters, and technicians.",
      "General Use: Suitable for cleaning, painting, and maintenance tasks. Why Choose WORK GLOVES?",
      "Superior Protection: Resistant to abrasion and chemical exposure."
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_f01ee22885184c358d41bd1db56be507~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_f01ee22885184c358d41bd1db56be507~mv2.jpg"
    ],
    "inStock": true,
    "stockCount": 21,
    "featured": true,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.96,
    "reviewCount": 48
  },
  {
    "id": "ws-pure-view-glass-mitt",
    "slug": "work-stuff-pure-view-glass-mitt",
    "name": "Work Stuff Pure View Glass Mitt",
    "brand": "work_stuff",
    "category": "Microfibers & Tools",
    "categorySlug": "microfibers-tools",
    "subcategory": "Microfiber & Tools",
    "price": 15,
    "shortDescription": "The Pure View Microfiber Glove is the ultimate tool for achieving streak-free, spotless glass surfaces. Designed with a double-sided structure, this premium ...",
    "description": "The Pure View Microfiber Glove is the ultimate tool for achieving streak-free, spotless glass surfaces. Designed with a double-sided structure, this premium glove is tailored for glass care and versatile enough for other surfaces. With its non-shedding microfiber and superior water absorption, it ensures a flawless clean while offering maximum durability. One side features a waffle-textured surface for preliminary cleaning, perfect for removing dirt and greasy deposits with a glass cleaner. The other side has a smooth microfiber surface, ideal for final polishing, leaving windows pristine and streak-free. This combination ensures uniform cleaning for crystal-clear results. The glove’s ergonomic shape is crafted for easy handling and superior control, making it perfect for cleaning hard-to-reach places such as the edges of windshields or lower window sections. Whether for windows or other car surfaces, the Pure View Microfiber Glove delivers exceptional performance for both professionals and car enthusiasts. Key Features Dual-Sided Design: Waffle-textured side for cleaning; smooth side for streak-free polishing. High Durability: Made with premium yarn for long-lasting performance. Non-Shedding Material: Leaves no fibers or streaks on glass surfaces. Ergonomic Shape: Ensures a comfortable grip and easy access to difficult areas. Versatile Use: Ideal for windows, windshields, and other car surfaces. Compact Size: 21×17 cm for convenient handling.",
    "features": [
      "Dual-Sided Design: Waffle-textured side for cleaning; smooth side for streak-free polishing.",
      "High Durability: Made with premium yarn for long-lasting performance.",
      "Non-Shedding Material: Leaves no fibers or streaks on glass surfaces.",
      "Ergonomic Shape: Ensures a comfortable grip and easy access to difficult areas.",
      "Versatile Use: Ideal for windows, windshields, and other car surfaces."
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_d21057a92e0e4c0fb39166cc6032ff58~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_d21057a92e0e4c0fb39166cc6032ff58~mv2.jpg"
    ],
    "inStock": true,
    "stockCount": 22,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.97,
    "reviewCount": 49
  },
  {
    "id": "ws-cyclone-tire-brush-applicator",
    "slug": "work-stuff-cyclone-tire-brush-applicator",
    "name": "Work Stuff Cyclone Tire Brush Applicator",
    "brand": "work_stuff",
    "category": "Microfibers & Tools",
    "categorySlug": "microfibers-tools",
    "subcategory": "Microfiber & Tools",
    "price": 11,
    "shortDescription": "The CYCLONE Tire Dressing Applicator is a professional-grade tool designed for precise and efficient tire dressing application. Engineered with soft, dense b...",
    "description": "The CYCLONE Tire Dressing Applicator is a professional-grade tool designed for precise and efficient tire dressing application. Engineered with soft, dense bristles, it ensures even coverage while minimizing product waste, making it perfect for both professionals and car enthusiasts. Key Features: Effortless Application: Designed for liquid, gel, and cream tire dressings. Soft, Dense Bristles: Ensures streak-free, uniform coverage. Ergonomic Design: Stamp-like grip for comfort and control. Minimizes Product Waste: Less absorbent than sponges for optimal product use. Reaches Every Crevice: Ideal for tires with ridges, markings, and complex treads. Included Stand: Protects the applicator from deformation and keeps your workspace clean. Perfect For: ✅ Tire Dressing Application: Clean, shine, and protect tires effortlessly.✅ Car Detailing Professionals &amp; Enthusiasts: Achieve showroom-quality results.✅ Versatile Use: Suitable for cars, motorcycles, and bicycles.✅ Exhibitions &amp; Car Shows: Quickly enhance vehicle appearance. How to Use: Apply your preferred tire dressing directly onto the bristles. Gently press and move the brush along the tire’s surface. Ensure even coverage across the entire tire, including treads and ridges. Rinse with water after use and place on the stand to dry.",
    "features": [
      "Effortless Application:",
      "Tire Dressing Application: Clean, shine, and protect tires effortlessly.",
      "Car Detailing Professionals &amp; Enthusiasts: Achieve showroom-quality results.",
      "Versatile Use: Suitable for cars, motorcycles, and bicycles.",
      "Exhibitions &amp; Car Shows: Quickly enhance vehicle appearance. How to Use:"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_67211400323c4bb2ad5930bb2ee4a5aa~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_67211400323c4bb2ad5930bb2ee4a5aa~mv2.jpg"
    ],
    "inStock": true,
    "stockCount": 23,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.98,
    "reviewCount": 50
  },
  {
    "id": "ws-gentleman",
    "slug": "work-stuff-gentleman",
    "name": "Work Stuff GENTLEMAN",
    "brand": "work_stuff",
    "category": "Microfibers & Tools",
    "categorySlug": "microfibers-tools",
    "subcategory": "Microfiber & Tools",
    "price": 10,
    "originalPrice": 11.5,
    "shortDescription": "GENTLEMAN is not just any ordinary microfiber cloth, it is the ultimate choice for car and motorcycle enthusiasts who demand the best in quality and performa...",
    "description": "GENTLEMAN is not just any ordinary microfiber cloth, it is the ultimate choice for car and motorcycle enthusiasts who demand the best in quality and performance. Made with high-density, fluffy material on both sides, this cloth is not only gentle but also highly effective in cleaning and maintaining your vehicle. With its size of 40/40cm and density of 500g/m2, GENTLEMAN is the perfect tool for optimizing your car and motorcycle cleaning routine. Whether you need to apply wax, use Quick Detailers, or perform any other cleaning tasks, this cloth is versatile enough to handle them all. Featuring laser-cut edges and a WORK STUFF logo, GENTLEMAN is not just a high-quality cleaning cloth, but also a stylish accessory for any car or motorcycle enthusiast. And don’t forget, this cloth can also be used to clean the surface of your motorcycle, making it the ultimate choice for all your vehicle cleaning needs. Remember to wash the product before first use to ensure the best performance and longevity. Choose GENTLEMAN for a premium microfiber cleaning experience that is both gentle and effective, and take your car and motorcycle cleaning routine to the next level. MAIN FEATURES: Size – 40 / 40cm Density – 500g / m2 Laser cut edges Dense and delicate microfiber NOTICE: Remember to wash the product before first use.",
    "features": [
      "Size – 40 / 40cm",
      "Density – 500g / m2",
      "Laser cut edges",
      "Dense and delicate microfiber NOTICE:",
      "Remember to wash the product before first use."
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_c08fff1b3ec34dd49efd6fbc141e2133~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_c08fff1b3ec34dd49efd6fbc141e2133~mv2.png"
    ],
    "inStock": true,
    "stockCount": 24,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.99,
    "reviewCount": 51
  },
  {
    "id": "ws-gentleman-1",
    "slug": "work-stuff-gentleman-1",
    "name": "Work Stuff GENTLEMAN +",
    "brand": "work_stuff",
    "category": "Microfibers & Tools",
    "categorySlug": "microfibers-tools",
    "subcategory": "Microfiber & Tools",
    "price": 11,
    "shortDescription": "Struggling to keep your car clean and shiny? Look no further than GENTLEMAN+, the ultimate microfiber for car care. With fluffy material on both sides and a ...",
    "description": "Struggling to keep your car clean and shiny? Look no further than GENTLEMAN+, the ultimate microfiber for car care. With fluffy material on both sides and a laser-cut WORK STUFF logo, this microfiber is dense yet delicate, making it perfect for a variety of car cleaning tasks, including waxing and using Quick Detailers. At a denser grammage of 100g/m2 and size of 40/40cm, GENTLEMAN+ is more effective than traditional microfibers. Use it to clean various elements both inside and outside of your car or even to clean the surface of your motorcycle.Don’t settle for less than quality – order your GENTLEMAN+ microfiber today and experience the ultimate car care solution! MAIN FEATURES: Size – 40 / 40cm Density – 600g / m2 Laser cut edges Dense and delicate microfiber NOTICE: Remember to wash the product before first use.",
    "features": [
      "Size – 40 / 40cm",
      "Density – 600g / m2",
      "Laser cut edges",
      "Dense and delicate microfiber NOTICE:",
      "Remember to wash the product before first use."
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_3f7d6c4167d8455c9e09ad35573f3650~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_3f7d6c4167d8455c9e09ad35573f3650~mv2.png"
    ],
    "inStock": true,
    "stockCount": 25,
    "featured": false,
    "isBestSeller": true,
    "isNew": false,
    "rating": 4.8,
    "reviewCount": 12
  },
  {
    "id": "ws-gentleman-basic-4-colour",
    "slug": "work-stuff-gentleman-basic-4-colour",
    "name": "Work Stuff GENTLEMAN BASIC 4 Colour",
    "brand": "work_stuff",
    "category": "Microfibers & Tools",
    "categorySlug": "microfibers-tools",
    "subcategory": "Microfiber & Tools",
    "price": 21,
    "shortDescription": "Looking for a comprehensive cleaning experience for your car or motorcycle? Look no further than GENTLEMAN Basic 4 Colour Pack! This set of microfiber cloths...",
    "description": "Looking for a comprehensive cleaning experience for your car or motorcycle? Look no further than GENTLEMAN Basic 4 Colour Pack! This set of microfiber cloths is perfect for efficient and effective cleaning and maintenance. The pack includes four colors – white, yellow, gray, and purple – so you can easily differentiate between cloths designated for specific tasks. Whether you’re waxing, applying coatings, or using Quick Detailers, these cloths are versatile enough to handle all your car or motorcycle cleaning needs. Each microfiber cloth boasts a size of 40/40cm and a density of 350g/m2. The laser-cut WORK STUFF logo adds a touch of sophistication and the dense and delicate microfiber ensures a thorough cleaning experience. Plus, the laser-cut edges prevent fraying and ensure long-lasting durability. Not only can you use GENTLEMAN Basic 4 Colour Pack for your car, but it’s also perfect for cleaning your motorcycle. And, as always, remember to wash the cloths before first use to ensure optimal performance. In summary, GENTLEMAN Basic 4 Colour Pack is the perfect choice for anyone looking for an efficient and effective cleaning experience for their car or motorcycle. With its versatile microfiber cloths, laser-cut edges, and high-density microfiber, you can be sure that your vehicle will be looking its best in no time. MAIN FEATURES: Size – 40 / 40cm Density – 350g / m2 Laser cut edges Dense and delicate microfiber NOTICE: Remember to wash the product before first use.",
    "features": [
      "Size – 40 / 40cm",
      "Density – 350g / m2",
      "Laser cut edges",
      "Dense and delicate microfiber NOTICE:",
      "Remember to wash the product before first use."
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_94c13fccabcf45748c6ce50219d106a4~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_94c13fccabcf45748c6ce50219d106a4~mv2.png"
    ],
    "inStock": true,
    "stockCount": 26,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.81,
    "reviewCount": 13
  },
  {
    "id": "ws-gentleman-basic-5-pack",
    "slug": "work-stuff-gentleman-basic-5-pack",
    "name": "Work Stuff GENTLEMAN BASIC 5 Pack",
    "brand": "work_stuff",
    "category": "Microfibers & Tools",
    "categorySlug": "microfibers-tools",
    "subcategory": "Microfiber & Tools",
    "price": 25,
    "originalPrice": 28.75,
    "shortDescription": "Introducing GENTLEMAN Basic Colour 5-Packs, the perfect set of microfiber cloths for efficient and effective car cleaning and maintenance. Each pack includes...",
    "description": "Introducing GENTLEMAN Basic Colour 5-Packs, the perfect set of microfiber cloths for efficient and effective car cleaning and maintenance. Each pack includes five microfiber cloths of the same colour, and you can choose the color that best suits your needs or preferences. These microfiber cloths are ideal for a range of tasks, from waxing and applying coatings to using Quick Detailers, both inside and outside of your vehicle. With its laser-cut WORK STUFF logo and a flat material on one side and a fluffy material on the other, GENTLEMAN Basic ensures a thorough cleaning experience. Each cloth boasts a size of 40/40cm and a density of 350g/m2. Choose GENTLEMAN Basic Color Packs for a dense and delicate microfiber cleaning experience with laser-cut edges. MAIN FEATURES: Size – 40 / 40cm Density – 350g / m2 Laser cut edges Dense and delicate microfiber NOTICE: Remember to wash the product before first use.",
    "features": [
      "Size – 40 / 40cm",
      "Density – 350g / m2",
      "Laser cut edges",
      "Dense and delicate microfiber NOTICE:",
      "Remember to wash the product before first use."
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_5a648405c91c46888f1fe258237a44ed~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_5a648405c91c46888f1fe258237a44ed~mv2.png"
    ],
    "inStock": true,
    "stockCount": 27,
    "featured": true,
    "isBestSeller": false,
    "isNew": true,
    "rating": 4.82,
    "reviewCount": 14
  },
  {
    "id": "ws-worker",
    "slug": "work-stuff-worker",
    "name": "Work Stuff WORKER",
    "brand": "work_stuff",
    "category": "Microfibers & Tools",
    "categorySlug": "microfibers-tools",
    "subcategory": "Microfiber & Tools",
    "price": 3,
    "shortDescription": "Microfiber for cleaning and care of various elements in the car. Perfect for working with waxes, polishing pastes, Quick Detailers, Quick Waxes and other wor...",
    "description": "Microfiber for cleaning and care of various elements in the car. Perfect for working with waxes, polishing pastes, Quick Detailers, Quick Waxes and other works inside the car. Fiber has a laser cut WORK STUFF logo. It is available only in 1pack, 5pack and 10pack packaging.",
    "features": [
      "Engineered to professional automotive detailing standards",
      "Tested for surface safety on high-end clear coats and trims",
      "High efficiency concentrated formulation",
      "Official genuine European import in Malta"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_6964e0a62c1e451fa0e816b7942bba02~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_6964e0a62c1e451fa0e816b7942bba02~mv2.png"
    ],
    "inStock": true,
    "stockCount": 28,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.83,
    "reviewCount": 15
  },
  {
    "id": "ws-coating-applicator",
    "slug": "work-stuff-coating-applicator",
    "name": "Work Stuff Coating Applicator",
    "brand": "work_stuff",
    "category": "Microfibers & Tools",
    "categorySlug": "microfibers-tools",
    "subcategory": "Microfiber & Tools",
    "price": 3,
    "shortDescription": "Cube applicator for the application of ceramic / quartz coatings. The side slits help to accommodate the Suede microfiber. Size:9cm x 4cm x 2.5cm",
    "description": "Cube applicator for the application of ceramic / quartz coatings. The side slits help to accommodate the Suede microfiber. Size:9cm x 4cm x 2.5cm",
    "features": [
      "Engineered to professional automotive detailing standards",
      "Tested for surface safety on high-end clear coats and trims",
      "High efficiency concentrated formulation",
      "Official genuine European import in Malta"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_470c2b93f2fb4133b21b66ed0bc7a1c0~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_470c2b93f2fb4133b21b66ed0bc7a1c0~mv2.png"
    ],
    "inStock": true,
    "stockCount": 29,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.84,
    "reviewCount": 16
  },
  {
    "id": "ws-clean-hands-tire-dressing-applicator",
    "slug": "work-stuff-clean-hands-tire-dressing-applicator",
    "name": "Work Stuff CLEAN HANDS Tire Dressing Applicator",
    "brand": "work_stuff",
    "category": "Microfibers & Tools",
    "categorySlug": "microfibers-tools",
    "subcategory": "Microfiber & Tools",
    "price": 7.5,
    "originalPrice": 8.63,
    "shortDescription": "Introducing the CLEAN HANDS Tire Dressing Applicator, the ultimate solution for applying tire dressing with ease and precision. Our high-quality sponge and e...",
    "description": "Introducing the CLEAN HANDS Tire Dressing Applicator, the ultimate solution for applying tire dressing with ease and precision. Our high-quality sponge and ergonomic shape are designed to fit perfectly in your hand, providing a comfortable and efficient application experience. The CLEAN HANDS applicator features a durable plastic handle that ensures a secure grip while applying tire dressing. The practical casing also helps to prevent the sponge from drying out, making storage a breeze while keeping dirt and debris at bay. With CLEAN HANDS, you can achieve professional-looking results without the mess. Perfect for auto detailers, car enthusiasts, or anyone looking to keep their tires looking their best. Try CLEAN HANDS Tire Dressing Applicator today and experience the difference in quality and performance. MAIN FEATURES: High-quality sponge Plastic handle Ergonomic shape Practical casing",
    "features": [
      "High-quality sponge",
      "Plastic handle",
      "Ergonomic shape",
      "Practical casing"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_2b035d4bdb57493d9272dedb8b1a0ea7~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_2b035d4bdb57493d9272dedb8b1a0ea7~mv2.png"
    ],
    "inStock": true,
    "stockCount": 30,
    "featured": false,
    "isBestSeller": true,
    "isNew": false,
    "rating": 4.85,
    "reviewCount": 17
  },
  {
    "id": "ws-work-bottle-canyon-trigger",
    "slug": "work-stuff-work-bottle-canyon-trigger",
    "name": "Work Stuff Work Bottle + Canyon Trigger",
    "brand": "work_stuff",
    "category": "Microfibers & Tools",
    "categorySlug": "microfibers-tools",
    "subcategory": "Microfiber & Tools",
    "price": 8,
    "shortDescription": "Working bottle for pouring and mixing / diluting detailing chemicals. There is a special spot for a product label and printed measurements on the bottle. The...",
    "description": "Working bottle for pouring and mixing / diluting detailing chemicals. There is a special spot for a product label and printed measurements on the bottle. The set includes the branded Trigger “CANYON”. The product is available in 750ml and 1l capacities. One of the basic products for every car detailer and detailing enthusiast. MAIN FEATURES: HDPE material Printed measurements Print instead of a label Trigger included AVAILABLE CAPACITIES:750/1000ML",
    "features": [
      "HDPE material",
      "Printed measurements",
      "Print instead of a label",
      "Trigger included AVAILABLE CAPACITIES:750/1000ML"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_cb859da0a7054542b1364d5e69cf2343~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_cb859da0a7054542b1364d5e69cf2343~mv2.png"
    ],
    "inStock": true,
    "stockCount": 31,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.86,
    "reviewCount": 18
  },
  {
    "id": "ws-squall-wheel-brush",
    "slug": "work-stuff-squall-wheel-brush",
    "name": "Work Stuff Squall Wheel Brush",
    "brand": "work_stuff",
    "category": "Microfibers & Tools",
    "categorySlug": "microfibers-tools",
    "subcategory": "Microfiber & Tools",
    "price": 23,
    "shortDescription": "Are you looking for a professional and efficient wheel cleaning brush that won’t damage your rims? Look no further than the Squall Wheel Brush! With its dens...",
    "description": "Are you looking for a professional and efficient wheel cleaning brush that won’t damage your rims? Look no further than the Squall Wheel Brush! With its dense and delicate microfiber bristles, this brush is designed to gently clean your wheels without leaving scratches or marks. Plus, its high absorbency and large washing area make for a faster and more efficient cleaning experience. But we didn’t stop there – we also added a special sponge lining to the handle for extra comfort during use. And when you’re done, cleaning the brush is a breeze thanks to its easy-to-clean design. Don’t settle for harsh and ineffective wheel brushes – upgrade to the Squall Microfiber Wheel Cleaning Brush today and experience the difference. MAIN FEATURES: Size – 46cm High absorbency Dense and delicate microfiber Large washing area The handle is lined with a sponge Easy to clean",
    "features": [
      "Size – 46cm",
      "High absorbency",
      "Dense and delicate microfiber",
      "Large washing area",
      "The handle is lined with a sponge"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_3115652898d54b3fb025500cb54ea0ca~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_3115652898d54b3fb025500cb54ea0ca~mv2.png"
    ],
    "inStock": true,
    "stockCount": 32,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.87,
    "reviewCount": 19
  },
  {
    "id": "ws-handy-leather-brush",
    "slug": "work-stuff-handy-leather-brush",
    "name": "Work Stuff Handy Leather Brush",
    "brand": "work_stuff",
    "category": "Microfibers & Tools",
    "categorySlug": "microfibers-tools",
    "subcategory": "Microfiber & Tools",
    "price": 8,
    "originalPrice": 9.2,
    "shortDescription": "Introducing the Handy Leather Brush, a high-quality tool designed for cleaning car and motorcycle upholstery, as well as other leather elements. This profess...",
    "description": "Introducing the Handy Leather Brush, a high-quality tool designed for cleaning car and motorcycle upholstery, as well as other leather elements. This professional-grade brush is crafted with a natural beech wood frame that has been lacquered for durability and long-lasting use. The frame also features specially designed grooves that make it comfortable to hold and use for extended periods of time. The Handy Leather Brush features a carefully selected blend of bristles, with 30% natural and 70% synthetic materials. This combination allows the brush to effectively remove dirt and grime, while also being gentle enough to protect delicate leather surfaces. The ergonomic, easy-grip shape of the brush ensures that you can easily maneuver it to reach even the most hard-to-reach areas.Not only this brush is great for cleaning car upholstery, but it can also be used to clean motorcycle seats and other leather elements. Whether you are a professional detailer or simply want to keep your car or motorcycle looking its best, the Handy Leather Brush is an essential tool to add to your cleaning arsenal. MAIN FEATURES: Lacquered frame made of natural beech wood Ergonomic, easy-grip shape A properly selected mixture of bristles (30% natural, 70% synthetic)",
    "features": [
      "Lacquered frame made of natural beech wood",
      "Ergonomic, easy-grip shape",
      "A properly selected mixture of bristles (30% natural, 70% synthetic)"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_796a5415ea9f4e8a83a6bdb25288cf69~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_796a5415ea9f4e8a83a6bdb25288cf69~mv2.png"
    ],
    "inStock": true,
    "stockCount": 33,
    "featured": true,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.88,
    "reviewCount": 20
  },
  {
    "id": "ws-handy-wax-applicator",
    "slug": "work-stuff-handy-wax-applicator",
    "name": "Work Stuff Handy Wax Applicator",
    "brand": "work_stuff",
    "category": "Microfibers & Tools",
    "categorySlug": "microfibers-tools",
    "subcategory": "Microfiber & Tools",
    "price": 7,
    "shortDescription": "A handy wax applicator made of one type of delicate sponge. Thanks to its special structure, it speeds up the work compared to classic wax applicators. The p...",
    "description": "A handy wax applicator made of one type of delicate sponge. Thanks to its special structure, it speeds up the work compared to classic wax applicators. The product has a WORK STUFF logo embossed on the foam. MAIN FEATURES: Size – 85mm Handy handle Delicate sponge",
    "features": [
      "Size – 85mm",
      "Handy handle",
      "Delicate sponge"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_1e2227ee47624396bc472bff901ea7db~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_1e2227ee47624396bc472bff901ea7db~mv2.png"
    ],
    "inStock": true,
    "stockCount": 34,
    "featured": false,
    "isBestSeller": false,
    "isNew": true,
    "rating": 4.89,
    "reviewCount": 21
  },
  {
    "id": "ws-canyon-trigger",
    "slug": "work-stuff-canyon-trigger",
    "name": "Work Stuff Canyon Trigger",
    "brand": "work_stuff",
    "category": "Microfibers & Tools",
    "categorySlug": "microfibers-tools",
    "subcategory": "Microfiber & Tools",
    "price": 4,
    "shortDescription": "The branded Trigger “CANYON”.One of the basic products for every car detailer and detailing enthusiast.",
    "description": "The branded Trigger “CANYON”.One of the basic products for every car detailer and detailing enthusiast.",
    "features": [
      "Engineered to professional automotive detailing standards",
      "Tested for surface safety on high-end clear coats and trims",
      "High efficiency concentrated formulation",
      "Official genuine European import in Malta"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_98c711b571294eadbdf5bf2e9a7b574c~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_98c711b571294eadbdf5bf2e9a7b574c~mv2.png"
    ],
    "inStock": true,
    "stockCount": 35,
    "featured": false,
    "isBestSeller": true,
    "isNew": false,
    "rating": 4.9,
    "reviewCount": 22
  },
  {
    "id": "ws-squally-wheel-brush",
    "slug": "work-stuff-squally-wheel-brush",
    "name": "Work Stuff Squally Wheel Brush",
    "brand": "work_stuff",
    "category": "Microfibers & Tools",
    "categorySlug": "microfibers-tools",
    "subcategory": "Microfiber & Tools",
    "price": 23,
    "originalPrice": 26.45,
    "shortDescription": "Introducing the SQUALLY WHEEL BRUSH, a professional-grade tool designed to make cleaning your wheels and rims a breeze. Its soft and gentle bristles are more...",
    "description": "Introducing the SQUALLY WHEEL BRUSH, a professional-grade tool designed to make cleaning your wheels and rims a breeze. Its soft and gentle bristles are more delicate compared to traditional brushes, ensuring a safe and scratch-free cleaning experience. The brush is highly absorbent and has a large washing surface for efficient cleaning. To enhance user comfort, the handle is lined with a special sponge. Plus, the brush is easy to clean after use, ensuring it remains in pristine condition for your next cleaning session. The SQUALLY model is a smaller version of the SQUALL product, making it easier to reach into smaller crevices and tight spaces. MAIN FEATURES: Size – 38cm High absorbency Dense and delicate microfiber Large washing area The handle is lined with a sponge Easy to clean",
    "features": [
      "Size – 38cm",
      "High absorbency",
      "Dense and delicate microfiber",
      "Large washing area",
      "The handle is lined with a sponge"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_e8f6ead9739e4634b46024cfeb31c5b2~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_e8f6ead9739e4634b46024cfeb31c5b2~mv2.png"
    ],
    "inStock": true,
    "stockCount": 36,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.91,
    "reviewCount": 23
  },
  {
    "id": "ws-work-bag",
    "slug": "work-stuff-work-bag",
    "name": "Work Stuff Work Bag",
    "brand": "work_stuff",
    "category": "Microfibers & Tools",
    "categorySlug": "microfibers-tools",
    "subcategory": "Microfiber & Tools",
    "price": 103,
    "shortDescription": "One of the most roomy bags on the market. Unique solutions such as bag feet, or folding walls make it one of the most interesting detailing bags on offer. Th...",
    "description": "One of the most roomy bags on the market. Unique solutions such as bag feet, or folding walls make it one of the most interesting detailing bags on offer. The walls and the bottom have been additionally reinforced. The bag has a pocket in the flap and on the front and a special velcro with a cover on the back. The product has been enriched with special elastic side straps for storing detailing brushes. Equipped with a strap with the slogan “YOUR DETAILING EQUIPMENT” that allows you to carry the bag on your shoulder as well as handles. There is an embroidered logo of the WORK STUFF brand on the front. MAIN FEATURES: Size – 40cm x 24cm x 31cm Reinforced walls and bottom 3 dividers for your own space arrangement Extra pocket in the flap Bag feet Large capacity – 12 x 1l, 25 x 0.5l Velcro on the back Material made of 1680D polyester",
    "features": [
      "Size – 40cm x 24cm x 31cm",
      "Reinforced walls and bottom",
      "3 dividers for your own space arrangement",
      "Extra pocket in the flap",
      "Large capacity – 12 x 1l, 25 x 0.5l"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_e0d81042099340829fa88c5946d15426~mv2.jpg/v1/fill/w_240,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_e0d81042099340829fa88c5946d15426~mv2.jpg"
    ],
    "inStock": true,
    "stockCount": 37,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.92,
    "reviewCount": 24
  },
  {
    "id": "ws-bum-bag",
    "slug": "work-stuff-bum-bag",
    "name": "Work Stuff Bum Bag",
    "brand": "work_stuff",
    "category": "Microfibers & Tools",
    "categorySlug": "microfibers-tools",
    "subcategory": "Microfiber & Tools",
    "price": 22,
    "shortDescription": "A Bum Bag type made of black waterproof material. Adjustable strap allows to be worn on hips or waist. Two chambers – main and internal. You can easily put a...",
    "description": "A Bum Bag type made of black waterproof material. Adjustable strap allows to be worn on hips or waist. Two chambers – main and internal. You can easily put a phone, keys, wallet or documents inside. Thanks to its shape, it is perfect for everyday use. It will work in any situation, regardless of weather conditions. On a rainy day, it will protect what’s inside, and will keep the most important things in one place on a daily basis. The Bum Bag sachet is a practical gadget tailored to the WORK STUFF brand philosophy. Main features: The highest quality 1680D polyester Waterproof material Two zipped pockets Nickel-plated zipper heads known from the WORK BAG Visible WORK STUFF logo on the front of the bag",
    "features": [
      "The highest quality 1680D polyester",
      "Waterproof material",
      "Two zipped pockets",
      "Nickel-plated zipper heads known from the WORK BAG",
      "Visible WORK STUFF logo on the front of the bag"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_16dc6ced81b0475bb9f7f40a6a97c0d5~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_16dc6ced81b0475bb9f7f40a6a97c0d5~mv2.png"
    ],
    "inStock": true,
    "stockCount": 38,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.93,
    "reviewCount": 25
  },
  {
    "id": "ws-handy-wax-applicator-1",
    "slug": "work-stuff-handy-wax-applicator-1",
    "name": "Work Stuff Handy Wax Applicator +",
    "brand": "work_stuff",
    "category": "Microfibers & Tools",
    "categorySlug": "microfibers-tools",
    "subcategory": "Microfiber & Tools",
    "price": 7,
    "originalPrice": 8.05,
    "shortDescription": "A handy wax applicator made of two types of sponge. Thanks to its special structure, it speeds up the work compared to classic wax applicators. Unlike the ba...",
    "description": "A handy wax applicator made of two types of sponge. Thanks to its special structure, it speeds up the work compared to classic wax applicators. Unlike the basic Handy Wax Applicator model, the Handy Wax Applicator + version consists of two foams. One is delicate and soft and the other one is hard for better working comfort. The product has a WORK STUFF logo embossed on the foam. MAIN FEATURES: Size – 85mm Handy handle Two types of sponge: soft and hard",
    "features": [
      "Size – 85mm",
      "Handy handle",
      "Two types of sponge: soft and hard"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_e0383b8dea414eeabb04b18cd69d106e~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_e0383b8dea414eeabb04b18cd69d106e~mv2.png"
    ],
    "inStock": true,
    "stockCount": 39,
    "featured": true,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.94,
    "reviewCount": 26
  },
  {
    "id": "ws-foam-bottle-150ml",
    "slug": "work-stuff-foam-bottle-150ml",
    "name": "Work Stuff Foam Bottle 150ml",
    "brand": "work_stuff",
    "category": "Microfibers & Tools",
    "categorySlug": "microfibers-tools",
    "subcategory": "Microfiber & Tools",
    "price": 6,
    "shortDescription": "A transparent 150ml bottle with a foam pump. Designed to be used with leather cleaning products and APC. Made of PET material. MAIN FEATURES: Capacity: 150ml...",
    "description": "A transparent 150ml bottle with a foam pump. Designed to be used with leather cleaning products and APC. Made of PET material. MAIN FEATURES: Capacity: 150ml Material: PET For use with Leather Cleaner and APC products",
    "features": [
      "Capacity: 150ml",
      "Material: PET",
      "For use with Leather Cleaner and APC products"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_be3f2460eaa84664beeb217743435786~mv2.png/v1/fill/w_240,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_be3f2460eaa84664beeb217743435786~mv2.png"
    ],
    "inStock": true,
    "stockCount": 40,
    "featured": false,
    "isBestSeller": true,
    "isNew": false,
    "rating": 4.95,
    "reviewCount": 27
  },
  {
    "id": "ws-coating-applicator-kit",
    "slug": "work-stuff-coating-applicator-kit",
    "name": "Work Stuff Coating Applicator KIT",
    "brand": "work_stuff",
    "category": "Microfibers & Tools",
    "categorySlug": "microfibers-tools",
    "subcategory": "Microfiber & Tools",
    "price": 13,
    "shortDescription": "Our Coating Applicator Kit is an essential tool for applying ceramic or quartz coatings to your car or motorcycle’s paintwork. The kit includes two cube-shap...",
    "description": "Our Coating Applicator Kit is an essential tool for applying ceramic or quartz coatings to your car or motorcycle’s paintwork. The kit includes two cube-shaped applicators with side slits to accommodate the microfiber Suede Cloths, as well as 10 of these delicate microfiber cloths. These cloths are specifically designed for the application of ceramic or quartz coatings, ensuring an even and smooth application. Each Coating Applicator measures 9cm x 4cm x 2.5cm, providing a comfortable grip and allowing for precise application of the coating. The Suede Cloths are sized at 10cm x 10cm, providing a generous surface area for coating application. Take your car or motorcycle’s maintenance to the next level with our Coating Applicator Kit. Perfect for detailing enthusiasts who want professional-quality results at home. COATING APPLICATOR MEASUREMENTS:9cm x 4cm x 2,5cm MAIN FEATURES OF SUEDE CLOTH: Size – 10cm x 10cm Delicate structure",
    "features": [
      "Engineered to professional automotive detailing standards",
      "Tested for surface safety on high-end clear coats and trims",
      "High efficiency concentrated formulation",
      "Official genuine European import in Malta"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_19d16cb5617049329f000b798fc68b3f~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_19d16cb5617049329f000b798fc68b3f~mv2.png"
    ],
    "inStock": true,
    "stockCount": 41,
    "featured": false,
    "isBestSeller": false,
    "isNew": true,
    "rating": 4.96,
    "reviewCount": 28
  },
  {
    "id": "ws-suede-cloth",
    "slug": "work-stuff-suede-cloth",
    "name": "Work Stuff Suede Cloth",
    "brand": "work_stuff",
    "category": "Microfibers & Tools",
    "categorySlug": "microfibers-tools",
    "subcategory": "Microfiber & Tools",
    "price": 2,
    "originalPrice": 2.3,
    "shortDescription": "The cloth is intended for the application of ceramic / quartz coatings. It has an embossed logo of the WORK STUFF brand. MAIN FEATURES: Size – 10cm x 10cm De...",
    "description": "The cloth is intended for the application of ceramic / quartz coatings. It has an embossed logo of the WORK STUFF brand. MAIN FEATURES: Size – 10cm x 10cm Delicate structure",
    "features": [
      "Engineered to professional automotive detailing standards",
      "Tested for surface safety on high-end clear coats and trims",
      "High efficiency concentrated formulation",
      "Official genuine European import in Malta"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_bc301452802d4bc1976f879324a6d4d6~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_bc301452802d4bc1976f879324a6d4d6~mv2.png"
    ],
    "inStock": true,
    "stockCount": 42,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.97,
    "reviewCount": 29
  },
  {
    "id": "ws-eclipse-microfiber-applicator",
    "slug": "work-stuff-eclipse-microfiber-applicator",
    "name": "Work Stuff Eclipse Microfiber Applicator",
    "brand": "work_stuff",
    "category": "Microfibers & Tools",
    "categorySlug": "microfibers-tools",
    "subcategory": "Microfiber & Tools",
    "price": 10,
    "shortDescription": "Microfiber applicator with a finger pocket for better grip. The product is useful for many car care related tasks. From applying various types of dressings o...",
    "description": "Microfiber applicator with a finger pocket for better grip. The product is useful for many car care related tasks. From applying various types of dressings on the inside and outside of the car (such as waxes, cleaners and sealants) to the application of leather upholstery protectors. Properly matched size makes the product work in hard-to-reach places. MAIN FEATURES: High-quality microfiber (70% polyester, 30% polyamide) Compact size Made of durable foam A versatile product with many uses",
    "features": [
      "High-quality microfiber (70% polyester, 30% polyamide)",
      "Compact size",
      "Made of durable foam",
      "A versatile product with many uses"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_0e963169f69b4e60a21aea0eccec629d~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_0e963169f69b4e60a21aea0eccec629d~mv2.png"
    ],
    "inStock": true,
    "stockCount": 43,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.98,
    "reviewCount": 30
  },
  {
    "id": "ws-pro-wool-pad-1",
    "slug": "work-stuff-pro-wool-pad-1",
    "name": "Work Stuff Pro Wool Pad",
    "brand": "work_stuff",
    "category": "Polishing Pads",
    "categorySlug": "polishing-pads",
    "subcategory": "Polishing pads",
    "price": 9,
    "shortDescription": "The Pro Wool Polishing Pad is expertly crafted from 100% natural sheep’s wool, delivering exceptional cutting performance for effective paint correction. Des...",
    "description": "The Pro Wool Polishing Pad is expertly crafted from 100% natural sheep’s wool, delivering exceptional cutting performance for effective paint correction. Designed for use with Dual Action polishing machines, it excels in removing defects, oxidation, and deep scratches while ensuring a smooth, professional finish. This pad features a soft open-cell foam layer between the wool and the hook-and-loop fastening, which enhances stability and minimizes vibrations during polishing. The short bristled wool fibers offer increased cutting power, while the low heat generation ensures safer polishing with a reduced risk of paint damage. For optimal results, the pad offers excellent ventilation, helping prevent heat buildup. As with all wool pads, some shedding may occur initially, so it’s recommended to blow out the pad with compressed air and condition it properly before first use. Key Features: 100% Natural Wool: Crafted from premium sheep’s wool for maximum cutting efficiency. Short Bristles: Delivers enhanced abrasion for improved paint correction results. Soft Open-Cell Foam Layer: Minimizes vibrations and ensures stable operation. Low Heat Generation: Reduces paint burn risk during intensive polishing. Velcro Fastening: Provides a secure grip for easy attachment to polishing machines. Centering Hole: Promotes precision and balance during use. Easy Maintenance: Simple to clean for long-term effectiveness. Recommended Use: Surface Preparation: Remove deep scratches, oxidation, and paint defects. Polishing Machine Compatibility: Designed for Dual Action (DA) polishers. Initial Setup: Blow out the pad with compressed air before first use. Dimensions: Diameter: 130mm Thickness: 80mm Why Choose the Pro Wool Polishing Pad?The Pro Wool Polishing Pad combines powerful cutting capabilities with low heat generation, making it ideal for professional detailers and serious car enthusiasts. Its natural wool fibers and premium construction ensure long-lasting performance and outstanding results in paint correction tasks.",
    "features": [
      "100% Natural Wool: Crafted from premium sheep’s wool for maximum cutting efficiency.",
      "Short Bristles: Delivers enhanced abrasion for improved paint correction results.",
      "Soft Open-Cell Foam Layer: Minimizes vibrations and ensures stable operation.",
      "Low Heat Generation: Reduces paint burn risk during intensive polishing.",
      "Velcro Fastening: Provides a secure grip for easy attachment to polishing machines."
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_850c49fa6f04402bb3081c40117370c9~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_850c49fa6f04402bb3081c40117370c9~mv2.jpg"
    ],
    "inStock": true,
    "stockCount": 44,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.99,
    "reviewCount": 31
  },
  {
    "id": "ws-cutting-pad",
    "slug": "work-stuff-cutting-pad",
    "name": "Work Stuff Cutting PAD",
    "brand": "work_stuff",
    "category": "Polishing Pads",
    "categorySlug": "polishing-pads",
    "subcategory": "Polishing pads",
    "price": 8,
    "originalPrice": 9.2,
    "shortDescription": "Highly abrasive polishing pad with a high cutting level. Removes marring, scratches and other heavy paint defects. Thanks it’s special scruture it preserves ...",
    "description": "Highly abrasive polishing pad with a high cutting level. Removes marring, scratches and other heavy paint defects. Thanks it’s special scruture it preserves high cutting capabilities through whole usage time. Made of high quality open cell foam.It characterizes with a good heat dispersion, holes in the pad are compound clogging proof. Tough velcro prevents pad from flying off. Edges are milled at proper degree for better performance and damage prevention. MAIN FEATURES: Edges milled with a suitable angle Trapezoidal shape improves stability during work Center hole reduces surface tension while work Availible in two sizes SIZES: 140/125/25 90/80/25",
    "features": [
      "Edges milled with a suitable angle",
      "Trapezoidal shape improves stability during work",
      "Center hole reduces surface tension while work",
      "Availible in two sizes SIZES:"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_1146fb2c4014407c9ac76a887f894052~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_1146fb2c4014407c9ac76a887f894052~mv2.png"
    ],
    "inStock": true,
    "stockCount": 15,
    "featured": true,
    "isBestSeller": true,
    "isNew": false,
    "rating": 4.8,
    "reviewCount": 32
  },
  {
    "id": "ws-finishing-pad",
    "slug": "work-stuff-finishing-pad",
    "name": "Work Stuff Finishing Pad",
    "brand": "work_stuff",
    "category": "Polishing Pads",
    "categorySlug": "polishing-pads",
    "subcategory": "Polishing pads",
    "price": 8,
    "shortDescription": "Soft polishing pad with low abrasion. Removes minor imperfections and brings out the maximum shine on paint finish. Thanks it’s special scruture it preserves...",
    "description": "Soft polishing pad with low abrasion. Removes minor imperfections and brings out the maximum shine on paint finish. Thanks it’s special scruture it preserves high cutting capabilities through whole usage time. Made of high quality open cell foam.It characterizes with a good heat dispersion, holes in the pad are compound clogging proof. Tough velcro prevents pad from flying off. Edges are milled at proper degree for better performance and damage prevention. MAIN FEATURES: Edges milled with a suitable angle Trapezoidal shape improves stability during work Center hole reduces surface tension while work Availible in two sizes SIZES: 140/125/25 90/80/25",
    "features": [
      "Edges milled with a suitable angle",
      "Trapezoidal shape improves stability during work",
      "Center hole reduces surface tension while work",
      "Availible in two sizes SIZES:"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_09568ab900d347cbb59a56201cdff9d9~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_09568ab900d347cbb59a56201cdff9d9~mv2.png"
    ],
    "inStock": true,
    "stockCount": 16,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.81,
    "reviewCount": 33
  },
  {
    "id": "ws-one-step-pad",
    "slug": "work-stuff-one-step-pad",
    "name": "Work Stuff ONE Step Pad",
    "brand": "work_stuff",
    "category": "Polishing Pads",
    "categorySlug": "polishing-pads",
    "subcategory": "Polishing pads",
    "price": 8,
    "shortDescription": "Medium abrasive polishing pad. It combines cutting and finishing properties. Made of durable open-cell foams. Thanks it’s special scruture it preserves high ...",
    "description": "Medium abrasive polishing pad. It combines cutting and finishing properties. Made of durable open-cell foams. Thanks it’s special scruture it preserves high cutting capabilities through whole usage time. Made of high quality open cell foam.It characterizes with a good heat dispersion, holes in the pad are compound clogging proof. Tough velcro prevents pad from flying off. Edges are milled at proper degree for better performance and damage prevention. MAIN FEATURES: Edges milled with a suitable angle Trapezoidal shape improves stability during work Center hole reduces surface tension while work Availible in two sizes SIZES: 140/125/25 90/80/25",
    "features": [
      "Edges milled with a suitable angle",
      "Trapezoidal shape improves stability during work",
      "Center hole reduces surface tension while work",
      "Availible in two sizes SIZES:"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_2541ccabd0d0492faa91f26d1eaf912c~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_2541ccabd0d0492faa91f26d1eaf912c~mv2.png"
    ],
    "inStock": true,
    "stockCount": 17,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.82,
    "reviewCount": 34
  },
  {
    "id": "ws-basic-pad-heavy-cut",
    "slug": "work-stuff-basic-pad-heavy-cut",
    "name": "Work Stuff Basic Pad Heavy Cut",
    "brand": "work_stuff",
    "category": "Polishing Pads",
    "categorySlug": "polishing-pads",
    "subcategory": "Polishing pads",
    "price": 8,
    "originalPrice": 9.2,
    "shortDescription": "Aggressive cutting pad recommended for removing scratches and other defects as well as restoring faded car paint. Thanks to the use of the highest quality cl...",
    "description": "Aggressive cutting pad recommended for removing scratches and other defects as well as restoring faded car paint. Thanks to the use of the highest quality closed-cell foam, it maintains its properties throughout the whole buffing process. It features a strong, high grammage velcro that ensures a secure hold on the polishing machine. The greatest cutting force in a classic sponge. Main features: The side slant makes cleaning hard-to-reach spots easier. The central hole helps to place the pad on the polishing machine and move the heat generated during work. Two sizes. Dimensions: 125/140/20 80/90/20",
    "features": [
      "The side slant makes cleaning hard-to-reach spots easier.",
      "The central hole helps to place the pad on the polishing machine and move the heat generated during work.",
      "Two sizes. Dimensions:"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_0f835f5c823b4850bb104e2f0c9d342c~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_0f835f5c823b4850bb104e2f0c9d342c~mv2.png"
    ],
    "inStock": true,
    "stockCount": 18,
    "featured": false,
    "isBestSeller": false,
    "isNew": true,
    "rating": 4.83,
    "reviewCount": 35
  },
  {
    "id": "ws-basic-pad-cut",
    "slug": "work-stuff-basic-pad-cut",
    "name": "Work Stuff Basic Pad Cut",
    "brand": "work_stuff",
    "category": "Polishing Pads",
    "categorySlug": "polishing-pads",
    "subcategory": "Polishing pads",
    "price": 8,
    "shortDescription": "Cutting pad recommended for removing scratches and other defects as well as restoring faded car paint. Thanks to the use of the highest quality closed-cell f...",
    "description": "Cutting pad recommended for removing scratches and other defects as well as restoring faded car paint. Thanks to the use of the highest quality closed-cell foam, it maintains its properties throughout the whole buffing process. It features a strong, high grammage velcro that ensures a secure hold on the polishing machine. The greatest cutting force in a classic sponge. Main features: The side slant makes cleaning hard-to-reach spots easier. The central hole helps to place the pad on the polishing machine and move the heat generated during work. Two sizes. Dimensions: 125/140/20 80/90/20",
    "features": [
      "The side slant makes cleaning hard-to-reach spots easier.",
      "The central hole helps to place the pad on the polishing machine and move the heat generated during work.",
      "Two sizes. Dimensions:"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_6b165d72d92a44f3979edb18ee6d7684~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_6b165d72d92a44f3979edb18ee6d7684~mv2.png"
    ],
    "inStock": true,
    "stockCount": 19,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.84,
    "reviewCount": 36
  },
  {
    "id": "ws-basic-pad-finish",
    "slug": "work-stuff-basic-pad-finish",
    "name": "Work Stuff Basic Pad Finish",
    "brand": "work_stuff",
    "category": "Polishing Pads",
    "categorySlug": "polishing-pads",
    "subcategory": "Polishing pads",
    "price": 8,
    "shortDescription": "Soft, low-abrasion polishing pad. Removes minor imperfections and brings out the maximum shine, leaving a high gloss finish on your car. Thanks to the use of...",
    "description": "Soft, low-abrasion polishing pad. Removes minor imperfections and brings out the maximum shine, leaving a high gloss finish on your car. Thanks to the use of the highest quality closed-cell foam, it maintains its properties throughout the whole buffing process. It features a strong, high grammage velcro that ensures a secure hold on the polishing machine. Main features: The side slant makes cleaning hard-to-reach spots easier. The central hole helps to place the pad on the polishing machine and move the heat generated during work. Two sizes. Dimensions: 125/140/20 80/90/20",
    "features": [
      "The side slant makes cleaning hard-to-reach spots easier.",
      "The central hole helps to place the pad on the polishing machine and move the heat generated during work.",
      "Two sizes. Dimensions:"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_78489de9f31c4efa9c243b0b423414e1~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_78489de9f31c4efa9c243b0b423414e1~mv2.png"
    ],
    "inStock": true,
    "stockCount": 20,
    "featured": false,
    "isBestSeller": true,
    "isNew": false,
    "rating": 4.85,
    "reviewCount": 37
  },
  {
    "id": "ws-basic-pad-one-step-pad",
    "slug": "work-stuff-basic-pad-one-step-pad",
    "name": "Work Stuff Basic Pad One Step Pad",
    "brand": "work_stuff",
    "category": "Polishing Pads",
    "categorySlug": "polishing-pads",
    "subcategory": "Polishing pads",
    "price": 8,
    "originalPrice": 9.2,
    "shortDescription": "Medium-hard polishing pad. It combines cutting and finishing properties. Thanks to the use of the highest quality closed-cell foam, it maintains its properti...",
    "description": "Medium-hard polishing pad. It combines cutting and finishing properties. Thanks to the use of the highest quality closed-cell foam, it maintains its properties throughout the whole buffing process. It features a strong, high grammage velcro that ensures a secure hold on the polishing machine. Main features: The side slant makes cleaning hard-to-reach spots easier. The central hole helps to place the pad on the polishing machine and move the heat generated during work. Two sizes. Dimensions: 125/140/20 80/90/20",
    "features": [
      "The side slant makes cleaning hard-to-reach spots easier.",
      "The central hole helps to place the pad on the polishing machine and move the heat generated during work.",
      "Two sizes. Dimensions:"
    ],
    "specifications": {
      "Brand": "Work Stuff Professional",
      "Origin": "European Union",
      "Quality Grade": "Professional Studio Grade",
      "Safety": "100% Clear Coat Safe",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_e6e7cce97fcd40d283d66dfdad0edef6~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_e6e7cce97fcd40d283d66dfdad0edef6~mv2.png"
    ],
    "inStock": true,
    "stockCount": 21,
    "featured": true,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.86,
    "reviewCount": 38
  },
  {
    "id": "gs-microfiber-wash",
    "slug": "good-stuff-microfiber-wash",
    "name": "Good Stuff Microfiber Wash",
    "brand": "good_stuff",
    "category": "Shampoos & Foams",
    "categorySlug": "wash",
    "subcategory": "wash",
    "price": 6,
    "originalPrice": 6.9,
    "shortDescription": "Washing microfibers dedicated agent. It restores absorbency to washed microfibers and helps to maintain their properties. The agent has been dermatologically...",
    "description": "Washing microfibers dedicated agent. It restores absorbency to washed microfibers and helps to maintain their properties. The agent has been dermatologically tested. When used regularly, it significantly extends life span of used cloths, microfibers and drying towels. WAY OF USE: Use 50ml product for one wash (5kg) In the case of heavy dirt, soak a cloth in 1L of warm water with 50ml of the product, leave for 30-40 minutes Wash in a washing machine at 40-60 degrees",
    "features": [
      "Use 50ml product for one wash (5kg)",
      "In the case of heavy dirt, soak a cloth in 1L of warm water with 50ml of the product, leave for 30-40 minutes",
      "Wash in a washing machine at 40-60 degrees"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Shampoos & Foams",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_31c9b08b59e64a22bbce8b2e68d9d3e3~mv2.png/v1/fill/w_520,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_31c9b08b59e64a22bbce8b2e68d9d3e3~mv2.png"
    ],
    "inStock": true,
    "stockCount": 18,
    "featured": true,
    "isBestSeller": true,
    "isNew": true,
    "rating": 4.82,
    "reviewCount": 14
  },
  {
    "id": "gs-bug-remover",
    "slug": "good-stuff-bug-remover",
    "name": "Good Stuff Bug Remover",
    "brand": "good_stuff",
    "category": "Shampoos & Foams",
    "categorySlug": "wash",
    "subcategory": "wash",
    "price": 7,
    "shortDescription": "Product designed for insects removal from the car body. Safe for all surfaces. Can be used on paint, plastic and glass. Bug Remover does not affect previousl...",
    "description": "Product designed for insects removal from the car body. Safe for all surfaces. Can be used on paint, plastic and glass. Bug Remover does not affect previously applied coatings and waxes.Our solution is extremely easy to use and rinses well. Just spray on surface and wait 30 seconds, and then rinse well with a pressure washer. Enriched with a pleasant kiwi and grape aroma for better work comfort. WAY OF USE: Spray generously onto cleaned surface Let it work for 30sec Rinse it off with a pressure washer Repeat process if needed NOTICE: Do not let it dry Do not use in direct sun or warm elements",
    "features": [
      "Spray generously onto cleaned surface",
      "Let it work for 30sec",
      "Rinse it off with a pressure washer",
      "Repeat process if needed NOTICE:",
      "Do not let it dry"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Shampoos & Foams",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_c5ab1b445e3c4a0aa2db5324eafd262a~mv2.png/v1/fill/w_520,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_c5ab1b445e3c4a0aa2db5324eafd262a~mv2.png"
    ],
    "inStock": true,
    "stockCount": 19,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.83,
    "reviewCount": 15
  },
  {
    "id": "gs-clay-lube",
    "slug": "good-stuff-clay-lube",
    "name": "Good Stuff Clay Lube",
    "brand": "good_stuff",
    "category": "Shampoos & Foams",
    "categorySlug": "wash",
    "subcategory": "wash",
    "price": 10,
    "shortDescription": "Clay lube product for smooth paint clay glidinig. Speeds up claying process. Clay bar safe. Fruity scent for better work comfort. WAY OF USE: Wash and dry th...",
    "description": "Clay lube product for smooth paint clay glidinig. Speeds up claying process. Clay bar safe. Fruity scent for better work comfort. WAY OF USE: Wash and dry the car Spray the element you are going to clay and move clay over it Wipe the element with a microfiber towel and move to the next element",
    "features": [
      "Wash and dry the car",
      "Spray the element you are going to clay and move clay over it",
      "Wipe the element with a microfiber towel and move to the next element"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Shampoos & Foams",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_7d14ef9dce8e4baa87952c4f31a4c577~mv2.png/v1/fill/w_520,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_7d14ef9dce8e4baa87952c4f31a4c577~mv2.png"
    ],
    "inStock": true,
    "stockCount": 20,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.84,
    "reviewCount": 16
  },
  {
    "id": "gs-glass-cleaner",
    "slug": "good-stuff-glass-cleaner",
    "name": "Good Stuff Glass Cleaner",
    "brand": "good_stuff",
    "category": "Shampoos & Foams",
    "categorySlug": "wash",
    "subcategory": "wash",
    "price": 6,
    "originalPrice": 6.9,
    "shortDescription": "Glass cleaner with very good cleaning properties. Enriched with a pleasant kiwi and grape scent for better work comfort. Thanks to its special properties, it...",
    "description": "Glass cleaner with very good cleaning properties. Enriched with a pleasant kiwi and grape scent for better work comfort. Thanks to its special properties, it degreases and leaves no streaks on the glass. It contains no Ammonia and methanol. Very easy to use, just spray the glass and wipe it dry with microfiber. Then polish with the other side of the microfiber until a satisfactory result is obtained. WAY OF USE:Spray the glass with the productSpread the product over the surface to be cleaned using microfiberPolish with the other side of the microfiber",
    "features": [
      "Engineered to professional automotive detailing standards",
      "Tested for surface safety on high-end clear coats and trims",
      "High efficiency concentrated formulation",
      "Official genuine European import in Malta"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Shampoos & Foams",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_d1e27e18fe4d49c1af1b8acddab40f40~mv2.png/v1/fill/w_520,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_d1e27e18fe4d49c1af1b8acddab40f40~mv2.png"
    ],
    "inStock": true,
    "stockCount": 21,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.85,
    "reviewCount": 17
  },
  {
    "id": "gs-pure-shampoo",
    "slug": "good-stuff-pure-shampoo",
    "name": "Good Stuff Pure Shampoo",
    "brand": "good_stuff",
    "category": "Shampoos & Foams",
    "categorySlug": "wash",
    "subcategory": "wash",
    "price": 6,
    "shortDescription": "Neutrual pH shampoo. The product provides superb gliding and foaming properties. Thanks to its neutral pH its totally safe to coated or waxed paint. Better w...",
    "description": "Neutrual pH shampoo. The product provides superb gliding and foaming properties. Thanks to its neutral pH its totally safe to coated or waxed paint. Better work comfort improved by cookies scent and low drying out solution structure. WAY OF USE:1. Rinse the car with water under pressure.2. Pour 30-40ml of product into a bucket for every 10l of water.3. Mix the shampoo with water (use a stronger water streamto create foam).4. Wash the car with a microfiber glove / sponge from top to bottom.5. Rinse the car under pressure.6. Dry the car.",
    "features": [
      "Engineered to professional automotive detailing standards",
      "Tested for surface safety on high-end clear coats and trims",
      "High efficiency concentrated formulation",
      "Official genuine European import in Malta"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Shampoos & Foams",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_d4001e61319449d5a2bc83fdfa1aad79~mv2.png/v1/fill/w_520,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_d4001e61319449d5a2bc83fdfa1aad79~mv2.png"
    ],
    "inStock": true,
    "stockCount": 22,
    "featured": false,
    "isBestSeller": true,
    "isNew": false,
    "rating": 4.86,
    "reviewCount": 18
  },
  {
    "id": "gs-sour-shampoo",
    "slug": "good-stuff-sour-shampoo",
    "name": "Good Stuff Sour Shampoo",
    "brand": "good_stuff",
    "category": "Shampoos & Foams",
    "categorySlug": "wash",
    "subcategory": "wash",
    "price": 7,
    "shortDescription": "Sour car shampoo without any waxes and polymers in the composition. Thanks to its acidic pH, which is 3.5 in the concentrate, it is safe for cars with applie...",
    "description": "Sour car shampoo without any waxes and polymers in the composition. Thanks to its acidic pH, which is 3.5 in the concentrate, it is safe for cars with applied coatings and waxes. Its additional advantages include superb gliding and foaming properties. For better work comfort, the composition has been enriched with a candy scent. WAY OF USE: Rinse the car under pressure Pour 20-50ml (depending on the dirt) shampoo into a bucket for every 10l of water Foam the Shampoo with a strong stream of water Wash the vehicle from top to bottom with a mitt or sponge Rinse thoroughly and dry the car",
    "features": [
      "Rinse the car under pressure",
      "Pour 20-50ml (depending on the dirt) shampoo into a bucket for every 10l of water",
      "Foam the Shampoo with a strong stream of water",
      "Wash the vehicle from top to bottom with a mitt or sponge",
      "Rinse thoroughly and dry the car"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Shampoos & Foams",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_71c04de762e64f50b57599c41ebae7d2~mv2.png/v1/fill/w_520,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_71c04de762e64f50b57599c41ebae7d2~mv2.png"
    ],
    "inStock": true,
    "stockCount": 23,
    "featured": true,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.87,
    "reviewCount": 19
  },
  {
    "id": "gs-sour-foam",
    "slug": "good-stuff-sour-foam",
    "name": "Good Stuff Sour Foam",
    "brand": "good_stuff",
    "category": "Shampoos & Foams",
    "categorySlug": "wash",
    "subcategory": "wash",
    "price": 9,
    "originalPrice": 10.35,
    "shortDescription": "Acidic pH active foam concentrate. Due to its acidic pH spectrum, it has a greater cleaning power compared to neutral pH foams. New and improved product form...",
    "description": "Acidic pH active foam concentrate. Due to its acidic pH spectrum, it has a greater cleaning power compared to neutral pH foams. New and improved product formula makes it last even longer on the car’s paintwork. Can be used with foamers, manual foamers or as a spray on solution. Especially recommended for ceramic coated cara or during preparation process for its application. Additionally, the foam is enriched with a pleasant Coca Cola fragrance to improve work comfort. WAY OF USE: Apply on a dry vehicle Apply with a foam gun Cover whole cleaned surface Rinse it off with a high pressure after 5-7 minutes NOTICE: Dilution ratio (reccomended) for foam gun from 1:9 up to 1:5 Hand foam spayer use 50-60ml per 1L Do not use in direct sun or warm elements",
    "features": [
      "Apply on a dry vehicle",
      "Apply with a foam gun",
      "Cover whole cleaned surface",
      "Rinse it off with a high pressure after 5-7 minutes NOTICE:",
      "Dilution ratio (reccomended) for foam gun from 1:9 up to 1:5"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Shampoos & Foams",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_79c982351b824fdca93c46b8b13a2c7e~mv2.png/v1/fill/w_520,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_79c982351b824fdca93c46b8b13a2c7e~mv2.png"
    ],
    "inStock": true,
    "stockCount": 24,
    "featured": false,
    "isBestSeller": false,
    "isNew": true,
    "rating": 4.88,
    "reviewCount": 20
  },
  {
    "id": "gs-snow-foam",
    "slug": "good-stuff-snow-foam",
    "name": "Good Stuff Snow Foam",
    "brand": "good_stuff",
    "category": "Shampoos & Foams",
    "categorySlug": "wash",
    "subcategory": "wash",
    "price": 4,
    "shortDescription": "Concentrated active foam. Thick and stable foam combined with a neutral pH, safe for any cleaned surface. For better working comfort our product has been enr...",
    "description": "Concentrated active foam. Thick and stable foam combined with a neutral pH, safe for any cleaned surface. For better working comfort our product has been enriched with a pleasant fragrance. Available in four color variants – white, mint, pink and orange. For best user experience use with high preasure foam gun or hand foam sprayer. WAY OF USE: Apply on a dry wehicle Apply with a foam gun Cover whole cleaned surface Rinse it off with a high pressure after 5-7mins NOTICE: Dilution ratio (reccomended) for foam gun from 1:9 up to 1:5 Hand foam spayer use 50-60ml per 1L Do not use in direct sun or warm elements",
    "features": [
      "Apply on a dry wehicle",
      "Apply with a foam gun",
      "Cover whole cleaned surface",
      "Rinse it off with a high pressure after 5-7mins NOTICE:",
      "Dilution ratio (reccomended) for foam gun from 1:9 up to 1:5"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Shampoos & Foams",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_817aa64447dd443b83ef1ca68a3aa18c~mv2.png/v1/fill/w_520,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_817aa64447dd443b83ef1ca68a3aa18c~mv2.png"
    ],
    "inStock": true,
    "stockCount": 25,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.89,
    "reviewCount": 21
  },
  {
    "id": "gs-snow-foam-orange",
    "slug": "good-stuff-snow-foam-orange",
    "name": "Good Stuff Snow Foam Orange",
    "brand": "good_stuff",
    "category": "Shampoos & Foams",
    "categorySlug": "wash",
    "subcategory": "wash",
    "price": 4,
    "shortDescription": "Concentrated active foam. Thick and stable foam combined with a neutral pH, safe for any cleaned surface. For better working comfort our product has been enr...",
    "description": "Concentrated active foam. Thick and stable foam combined with a neutral pH, safe for any cleaned surface. For better working comfort our product has been enriched with a pleasant fragrance. Available in four color variants – white, mint, pink and orange. For best user experience use with high preasure foam gun or hand foam sprayer. WAY OF USE: Apply on a dry wehicle Apply with a foam gun Cover whole cleaned surface Rinse it off with a high pressure after 5-7mins NOTICE: Dilution ratio (reccomended) for foam gun from 1:9 up to 1:5 Hand foam spayer use 50-60ml per 1L Do not use in direct sun or warm elements",
    "features": [
      "Apply on a dry wehicle",
      "Apply with a foam gun",
      "Cover whole cleaned surface",
      "Rinse it off with a high pressure after 5-7mins NOTICE:",
      "Dilution ratio (reccomended) for foam gun from 1:9 up to 1:5"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Shampoos & Foams",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_dd13c8b1ec8b4ff3850407c3d09ca6e9~mv2.png/v1/fill/w_520,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_dd13c8b1ec8b4ff3850407c3d09ca6e9~mv2.png"
    ],
    "inStock": true,
    "stockCount": 26,
    "featured": false,
    "isBestSeller": true,
    "isNew": false,
    "rating": 4.9,
    "reviewCount": 22
  },
  {
    "id": "gs-snow-foam-mint",
    "slug": "good-stuff-snow-foam-mint",
    "name": "Good Stuff Snow Foam Mint",
    "brand": "good_stuff",
    "category": "Shampoos & Foams",
    "categorySlug": "wash",
    "subcategory": "wash",
    "price": 4,
    "originalPrice": 4.6,
    "shortDescription": "Concentrated active foam. Thick and stable foam combined with a neutral pH, safe for any cleaned surface. For better working comfort our product has been enr...",
    "description": "Concentrated active foam. Thick and stable foam combined with a neutral pH, safe for any cleaned surface. For better working comfort our product has been enriched with a pleasant fragrance. Available in four color variants – white, mint, pink and orange. For best user experience use with high preasure foam gun or hand foam sprayer. WAY OF USE: Apply on a dry wehicle Apply with a foam gun Cover whole cleaned surface Rinse it off with a high pressure after 5-7mins NOTICE: Dilution ratio (reccomended) for foam gun from 1:9 up to 1:5 Hand foam spayer use 50-60ml per 1L Do not use in direct sun or warm elements",
    "features": [
      "Apply on a dry wehicle",
      "Apply with a foam gun",
      "Cover whole cleaned surface",
      "Rinse it off with a high pressure after 5-7mins NOTICE:",
      "Dilution ratio (reccomended) for foam gun from 1:9 up to 1:5"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Shampoos & Foams",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_6b53b96b49ea4ee89da355555cbe1625~mv2.png/v1/fill/w_520,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_6b53b96b49ea4ee89da355555cbe1625~mv2.png"
    ],
    "inStock": true,
    "stockCount": 27,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.91,
    "reviewCount": 23
  },
  {
    "id": "gs-clay-kit",
    "slug": "good-stuff-clay-kit",
    "name": "Good Stuff Clay Kit",
    "brand": "good_stuff",
    "category": "Shampoos & Foams",
    "categorySlug": "wash",
    "subcategory": "wash",
    "price": 12,
    "shortDescription": "Car paint claying kit. In a specifically prepared box you will find 2 detailing products. Clay lube from GOOD STUFF and a medium grade WORK STUFF clay bar. W...",
    "description": "Car paint claying kit. In a specifically prepared box you will find 2 detailing products. Clay lube from GOOD STUFF and a medium grade WORK STUFF clay bar. With these products you will do a full paint decontamination. GOOD STUFF PRODUCTS: Clay Lub 250ml WORK STUFF PRODUCTS: Spot Clay Bar 50gr",
    "features": [
      "Engineered to professional automotive detailing standards",
      "Tested for surface safety on high-end clear coats and trims",
      "High efficiency concentrated formulation",
      "Official genuine European import in Malta"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Shampoos & Foams",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_90000f9bf0b6431a847c51be92119ed7~mv2.png/v1/fill/w_520,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_90000f9bf0b6431a847c51be92119ed7~mv2.png"
    ],
    "inStock": true,
    "stockCount": 28,
    "featured": true,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.92,
    "reviewCount": 24
  },
  {
    "id": "gs-wash-kit",
    "slug": "good-stuff-wash-kit",
    "name": "Good Stuff Wash Kit",
    "brand": "good_stuff",
    "category": "Shampoos & Foams",
    "categorySlug": "wash",
    "subcategory": "wash",
    "price": 48,
    "shortDescription": "Exterior maintenance starter kit. There are as many as 10 detailing products in a specially prepared box. 5 Items from GOOD STUFF and 5 necessary accessories...",
    "description": "Exterior maintenance starter kit. There are as many as 10 detailing products in a specially prepared box. 5 Items from GOOD STUFF and 5 necessary accessories from the WORK STUFF brand, respectively. Using the cosmetics and accessories available in the set, you can take care of rims and tires, perform proper wash, dry the car and protect the paint properly, as well as apply a dedicated tire dressing. It is an ideal solution for people who want to deal with their car’s exterior, bumper to bumper, and for various reasons are not interested in choosing each product separately. GOOD STUFF PRODUCTS: Pure Shampoo 500ml Gloss Detailer 500ml Tire Dressing Shine 250ml Iron Remover Gel 500ml Glass Cleaner 500ml WORK STUFF PRODUCTS: STORM Wash Mitt CLEAN HANDS Tire Dressing Applicator CLASSIC Detailing Brush 30mm PRINCE Drying Towel ZEPHYR Waffle Towel",
    "features": [
      "Pure Shampoo 500ml",
      "Gloss Detailer 500ml",
      "Tire Dressing Shine 250ml",
      "Iron Remover Gel 500ml",
      "Glass Cleaner 500ml WORK STUFF PRODUCTS:"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Shampoos & Foams",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_fe85d29fc1bc446195c27f6b6526c9ed~mv2.png/v1/fill/w_520,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_fe85d29fc1bc446195c27f6b6526c9ed~mv2.png"
    ],
    "inStock": true,
    "stockCount": 29,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.93,
    "reviewCount": 25
  },
  {
    "id": "gs-willy-willy-tire-brush",
    "slug": "good-stuff-willy-willy-tire-brush",
    "name": "Good Stuff Willy Willy Tire Brush",
    "brand": "good_stuff",
    "category": "Exterior Care & Quick Detailers",
    "categorySlug": "exterior",
    "subcategory": "exterior",
    "price": 10,
    "originalPrice": 11.5,
    "shortDescription": "The WILLY WILLY Tire Brush is expertly crafted for deep tire cleaning and tackling hard-to-reach areas like wheel arches. Designed for both detailing profess...",
    "description": "The WILLY WILLY Tire Brush is expertly crafted for deep tire cleaning and tackling hard-to-reach areas like wheel arches. Designed for both detailing professionals and car care enthusiasts, this brush provides exceptional scrubbing power for a pristine finish. Key Features: Specialized for Tire Cleaning: Designed to remove dirt, grime, and old tire dressing residues. Firm Synthetic Bristles: Slightly wavy and flexible bristles ensure maximum scrubbing power while protecting surfaces. Compact &amp; Ergonomic Design: Ideal for tight spaces and low-profile vehicles. Tire-Contour Fit: The brush shape adapts to the natural curvature of tires for more effective cleaning. Comfortable Grip: Designed for efficiency and reduced hand fatigue. Hanging Hole for Storage: Easy to store and dry with the hanging hole at the end of the handle. Product Specifications: Bristle Height: 2.5 cm Brush Length: 21 cm Material: Firm synthetic bristles Application: Tire cleaning, wheel arches, rubber components Why Choose the WILLY WILLY Tire Brush?✅ Deep Cleaning Power: Perfect for intensive tire cleaning.✅ Safe on Rubber: Tough on dirt but gentle on surfaces.✅ Built to Last: Durable bristles and reinforced design for frequent use.✅ Comfortable Handling: Ergonomic shape for better control.✅ Professional Results: Achieve showroom-quality cleanliness with ease.",
    "features": [
      "Specialized for Tire Cleaning:",
      "Deep Cleaning Power: Perfect for intensive tire cleaning.",
      "Safe on Rubber: Tough on dirt but gentle on surfaces.",
      "Built to Last: Durable bristles and reinforced design for frequent use.",
      "Comfortable Handling: Ergonomic shape for better control."
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Exterior Care & Quick Detailers",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_a6d44a9dff214ee6a8fd63f7d723e010~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_a6d44a9dff214ee6a8fd63f7d723e010~mv2.jpg"
    ],
    "inStock": true,
    "stockCount": 30,
    "featured": false,
    "isBestSeller": true,
    "isNew": true,
    "rating": 4.94,
    "reviewCount": 26
  },
  {
    "id": "gs-pure-view-glass-mitt",
    "slug": "good-stuff-pure-view-glass-mitt",
    "name": "Good Stuff Pure View Glass Mitt",
    "brand": "good_stuff",
    "category": "Exterior Care & Quick Detailers",
    "categorySlug": "exterior",
    "subcategory": "exterior",
    "price": 15,
    "shortDescription": "The Pure View Microfiber Glove is the ultimate tool for achieving streak-free, spotless glass surfaces. Designed with a double-sided structure, this premium ...",
    "description": "The Pure View Microfiber Glove is the ultimate tool for achieving streak-free, spotless glass surfaces. Designed with a double-sided structure, this premium glove is tailored for glass care and versatile enough for other surfaces. With its non-shedding microfiber and superior water absorption, it ensures a flawless clean while offering maximum durability. One side features a waffle-textured surface for preliminary cleaning, perfect for removing dirt and greasy deposits with a glass cleaner. The other side has a smooth microfiber surface, ideal for final polishing, leaving windows pristine and streak-free. This combination ensures uniform cleaning for crystal-clear results. The glove’s ergonomic shape is crafted for easy handling and superior control, making it perfect for cleaning hard-to-reach places such as the edges of windshields or lower window sections. Whether for windows or other car surfaces, the Pure View Microfiber Glove delivers exceptional performance for both professionals and car enthusiasts. Key Features Dual-Sided Design: Waffle-textured side for cleaning; smooth side for streak-free polishing. High Durability: Made with premium yarn for long-lasting performance. Non-Shedding Material: Leaves no fibers or streaks on glass surfaces. Ergonomic Shape: Ensures a comfortable grip and easy access to difficult areas. Versatile Use: Ideal for windows, windshields, and other car surfaces. Compact Size: 21×17 cm for convenient handling.",
    "features": [
      "Dual-Sided Design: Waffle-textured side for cleaning; smooth side for streak-free polishing.",
      "High Durability: Made with premium yarn for long-lasting performance.",
      "Non-Shedding Material: Leaves no fibers or streaks on glass surfaces.",
      "Ergonomic Shape: Ensures a comfortable grip and easy access to difficult areas.",
      "Versatile Use: Ideal for windows, windshields, and other car surfaces."
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Exterior Care & Quick Detailers",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_d21057a92e0e4c0fb39166cc6032ff58~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_d21057a92e0e4c0fb39166cc6032ff58~mv2.jpg"
    ],
    "inStock": true,
    "stockCount": 31,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.95,
    "reviewCount": 27
  },
  {
    "id": "gs-cyclone-tire-brush-applicator",
    "slug": "good-stuff-cyclone-tire-brush-applicator",
    "name": "Good Stuff Cyclone Tire Brush Applicator",
    "brand": "good_stuff",
    "category": "Exterior Care & Quick Detailers",
    "categorySlug": "exterior",
    "subcategory": "exterior",
    "price": 11,
    "shortDescription": "The CYCLONE Tire Dressing Applicator is a professional-grade tool designed for precise and efficient tire dressing application. Engineered with soft, dense b...",
    "description": "The CYCLONE Tire Dressing Applicator is a professional-grade tool designed for precise and efficient tire dressing application. Engineered with soft, dense bristles, it ensures even coverage while minimizing product waste, making it perfect for both professionals and car enthusiasts. Key Features: Effortless Application: Designed for liquid, gel, and cream tire dressings. Soft, Dense Bristles: Ensures streak-free, uniform coverage. Ergonomic Design: Stamp-like grip for comfort and control. Minimizes Product Waste: Less absorbent than sponges for optimal product use. Reaches Every Crevice: Ideal for tires with ridges, markings, and complex treads. Included Stand: Protects the applicator from deformation and keeps your workspace clean. Perfect For: ✅ Tire Dressing Application: Clean, shine, and protect tires effortlessly.✅ Car Detailing Professionals &amp; Enthusiasts: Achieve showroom-quality results.✅ Versatile Use: Suitable for cars, motorcycles, and bicycles.✅ Exhibitions &amp; Car Shows: Quickly enhance vehicle appearance. How to Use: Apply your preferred tire dressing directly onto the bristles. Gently press and move the brush along the tire’s surface. Ensure even coverage across the entire tire, including treads and ridges. Rinse with water after use and place on the stand to dry.",
    "features": [
      "Effortless Application:",
      "Tire Dressing Application: Clean, shine, and protect tires effortlessly.",
      "Car Detailing Professionals &amp; Enthusiasts: Achieve showroom-quality results.",
      "Versatile Use: Suitable for cars, motorcycles, and bicycles.",
      "Exhibitions &amp; Car Shows: Quickly enhance vehicle appearance. How to Use:"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Exterior Care & Quick Detailers",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_67211400323c4bb2ad5930bb2ee4a5aa~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_67211400323c4bb2ad5930bb2ee4a5aa~mv2.jpg"
    ],
    "inStock": true,
    "stockCount": 32,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.96,
    "reviewCount": 28
  },
  {
    "id": "gs-gloss-detailer",
    "slug": "good-stuff-gloss-detailer",
    "name": "Good Stuff Gloss Detailer",
    "brand": "good_stuff",
    "category": "Exterior Care & Quick Detailers",
    "categorySlug": "exterior",
    "subcategory": "exterior",
    "price": 6,
    "originalPrice": 6.9,
    "shortDescription": "AVAILABLE CAPACITY: 250ml/500ml/1000ml/2000ml/5000ml Synthetic Quick Detailer designed for easy and quick paint protection. Its main feature is to give paint...",
    "description": "AVAILABLE CAPACITY: 250ml/500ml/1000ml/2000ml/5000ml Synthetic Quick Detailer designed for easy and quick paint protection. Its main feature is to give paint a high gloss. When applied, it provides a hydrophobic effect. Its advantages include ease of application and a fruity fragrance that improves work comfort. Up to 4 weeks durability. WAY OF USE:Shake the bottle before useApply the product in the shade and on a cool car paintSpray microfiber or car paint and spread the productReach the other side of the microfiber",
    "features": [
      "Engineered to professional automotive detailing standards",
      "Tested for surface safety on high-end clear coats and trims",
      "High efficiency concentrated formulation",
      "Official genuine European import in Malta"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Exterior Care & Quick Detailers",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_bd01716e6ad3479b8ed0a999cdf6fdd3~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_bd01716e6ad3479b8ed0a999cdf6fdd3~mv2.png"
    ],
    "inStock": true,
    "stockCount": 33,
    "featured": true,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.97,
    "reviewCount": 29
  },
  {
    "id": "gs-traffic-film-remover",
    "slug": "good-stuff-traffic-film-remover",
    "name": "Good Stuff Traffic Film Remover",
    "brand": "good_stuff",
    "category": "Exterior Care & Quick Detailers",
    "categorySlug": "exterior",
    "subcategory": "exterior",
    "price": 10,
    "shortDescription": "Concentrate product for pre-washing paintwork and rims. It removes road film accumulated on the car body while driving and prepares the vehicle for the actua...",
    "description": "Concentrate product for pre-washing paintwork and rims. It removes road film accumulated on the car body while driving and prepares the vehicle for the actual washing. Unlike active foam, the product is applied by spraying with a pressure sprayer. The product dissolves dirt much quicker (approximately 2-5m) and is a stronger alternative to classic active foam. WAY OF USE:1. Dilution ratio (reccomended) for foam gun from 1:10 up to 1:32. Apply the solution with a sprayer3. Thoroughly cover the whole car",
    "features": [
      "Engineered to professional automotive detailing standards",
      "Tested for surface safety on high-end clear coats and trims",
      "High efficiency concentrated formulation",
      "Official genuine European import in Malta"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Exterior Care & Quick Detailers",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_ab5405b603bc4eb2845b6a81e275356a~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_ab5405b603bc4eb2845b6a81e275356a~mv2.png"
    ],
    "inStock": true,
    "stockCount": 34,
    "featured": false,
    "isBestSeller": true,
    "isNew": false,
    "rating": 4.98,
    "reviewCount": 30
  },
  {
    "id": "gs-show-detailer",
    "slug": "good-stuff-show-detailer",
    "name": "Good Stuff Show Detailer",
    "brand": "good_stuff",
    "category": "Exterior Care & Quick Detailers",
    "categorySlug": "exterior",
    "subcategory": "exterior",
    "price": 7,
    "shortDescription": "Carnauba based quick detailer, which is natural origin wax. Created for maximum paint gloss improvement. Its main features is strong paint darkening and slip...",
    "description": "Carnauba based quick detailer, which is natural origin wax. Created for maximum paint gloss improvement. Its main features is strong paint darkening and slipping effect with deep colour saturation. Applied to paint provides hydrophobic effect. Easy application with fruity scent for better work comfort. Up to 3 weeks durability. WAY OF USE: Shake the bottle before use Apply the product in the shade and on a cool car paint Spray microfiber or car paint and spread the product Reach the other side of the microfiber",
    "features": [
      "Shake the bottle before use",
      "Apply the product in the shade and on a cool car paint",
      "Spray microfiber or car paint and spread the product",
      "Reach the other side of the microfiber"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Exterior Care & Quick Detailers",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_a4dd2dcd59d5492cbe3b515d1eff461c~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_a4dd2dcd59d5492cbe3b515d1eff461c~mv2.png"
    ],
    "inStock": true,
    "stockCount": 35,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.99,
    "reviewCount": 31
  },
  {
    "id": "gs-show-wax",
    "slug": "good-stuff-show-wax",
    "name": "Good Stuff Show Wax",
    "brand": "good_stuff",
    "category": "Exterior Care & Quick Detailers",
    "categorySlug": "exterior",
    "subcategory": "exterior",
    "price": 9,
    "originalPrice": 10.35,
    "shortDescription": "Carnauba containing wax with a natural based origin wax. It was created in order to properly protect paint and give additional colour saturation. It protects...",
    "description": "Carnauba containing wax with a natural based origin wax. It was created in order to properly protect paint and give additional colour saturation. It protects against road grime and other harmful factors. As a result, the car gains a superb wet appearance. Provides a strong hydrophobic effect. The advantages include easy application and a citrus scent that improves work comfort. Up to 2 months durability. A dedicated WORK STUFF applicator is included in the set for 50ML and 100ML. WAY OF USE: Apply to clean and dry car paint Apply a thin layer of wax to the surface with an applicator Depending on the conditions, buff wax with microfiber after about 5-10 minutes",
    "features": [
      "Apply to clean and dry car paint",
      "Apply a thin layer of wax to the surface with an applicator",
      "Depending on the conditions, buff wax with microfiber after about 5-10 minutes"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Exterior Care & Quick Detailers",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_05786fdc9ea947488d319cc2eda16aba~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_05786fdc9ea947488d319cc2eda16aba~mv2.png"
    ],
    "inStock": true,
    "stockCount": 36,
    "featured": false,
    "isBestSeller": false,
    "isNew": true,
    "rating": 4.82,
    "reviewCount": 32
  },
  {
    "id": "gs-apc-apple",
    "slug": "good-stuff-apc-apple",
    "name": "Good Stuff APC Apple",
    "brand": "good_stuff",
    "category": "Interior Detailers & Cleaners",
    "categorySlug": "interior",
    "subcategory": "interior",
    "price": 6,
    "shortDescription": "Concentrated multipurpose cleaning agent.Thanks to it’s wide range of application, it will be perfect for cleaning tires and rims, interior and exterior trim...",
    "description": "Concentrated multipurpose cleaning agent.Thanks to it’s wide range of application, it will be perfect for cleaning tires and rims, interior and exterior trim, engine bay, floor mats etc.. It can be used as a prewash agent. Available in apple and green tea scent. WAY OF USE: Prepare the solution depending on the soil from 1: 4 to 1:50 Spray the brush or surface to be cleaned and work out Rinse the product with water or wipe with a dry microfiber NOTICE: Before using, test in an invisible place. Do not use on heated components.",
    "features": [
      "Prepare the solution depending on the soil from 1: 4 to 1:50",
      "Spray the brush or surface to be cleaned and work out",
      "Rinse the product with water or wipe with a dry microfiber NOTICE:",
      "Before using, test in an invisible place.",
      "Do not use on heated components."
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Interior Detailers & Cleaners",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_a8f85fcf883947a2bb61ff694a34713b~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_a8f85fcf883947a2bb61ff694a34713b~mv2.png"
    ],
    "inStock": true,
    "stockCount": 37,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.83,
    "reviewCount": 33
  },
  {
    "id": "gs-apc-green-tea",
    "slug": "good-stuff-apc-green-tea",
    "name": "Good Stuff APC Green Tea",
    "brand": "good_stuff",
    "category": "Interior Detailers & Cleaners",
    "categorySlug": "interior",
    "subcategory": "interior",
    "price": 6,
    "shortDescription": "Concentrated multipurpose cleaning agent.Thanks to it’s wide range of application, it will be perfect for cleaning tires and rims, interior and exterior trim...",
    "description": "Concentrated multipurpose cleaning agent.Thanks to it’s wide range of application, it will be perfect for cleaning tires and rims, interior and exterior trim, engine bay, floor mats etc.. It can be used as a prewash agent. Available in apple and green tea scent. WAY OF USE: Prepare the solution depending on the soil from 1: 4 to 1:50 Spray the brush or surface to be cleaned and work out Rinse the product with water or wipe with a dry microfiber NOTICE: Before using, test in an invisible place. Do not use on heated components.",
    "features": [
      "Prepare the solution depending on the soil from 1: 4 to 1:50",
      "Spray the brush or surface to be cleaned and work out",
      "Rinse the product with water or wipe with a dry microfiber NOTICE:",
      "Before using, test in an invisible place.",
      "Do not use on heated components."
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Interior Detailers & Cleaners",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_f4efca395f3e4b6e82dd787f45afc92c~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_f4efca395f3e4b6e82dd787f45afc92c~mv2.png"
    ],
    "inStock": true,
    "stockCount": 38,
    "featured": true,
    "isBestSeller": true,
    "isNew": false,
    "rating": 4.84,
    "reviewCount": 34
  },
  {
    "id": "gs-fabric-cleaner",
    "slug": "good-stuff-fabric-cleaner",
    "name": "Good Stuff Fabric Cleaner",
    "brand": "good_stuff",
    "category": "Interior Detailers & Cleaners",
    "categorySlug": "interior",
    "subcategory": "interior",
    "price": 6,
    "originalPrice": 6.9,
    "shortDescription": "Ready to use product for an upholstery cleaning, headliner, door panels and alcantara. Removes dirt and stubborn stains from the cleaned surfaces. Perfect fo...",
    "description": "Ready to use product for an upholstery cleaning, headliner, door panels and alcantara. Removes dirt and stubborn stains from the cleaned surfaces. Perfect for quick wipe. It does not leave any traces and does not require rinsing. It improves work comfort thanks to the citrus scent. The agent should be applied with a microfiber, brush or a dedicated interior cleaning mitt. WAY OF USE: Vacuum the surface Spray on cleaned element, microfiber or brush. Work the product on the surface Wipe the element with a damp rag and then repeat with dry microfiber",
    "features": [
      "Vacuum the surface",
      "Spray on cleaned element, microfiber or brush.",
      "Work the product on the surface",
      "Wipe the element with a damp rag and then repeat with dry microfiber"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Interior Detailers & Cleaners",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_aa440f19c3be49c29f22af9dd03a383a~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_aa440f19c3be49c29f22af9dd03a383a~mv2.png"
    ],
    "inStock": true,
    "stockCount": 39,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.85,
    "reviewCount": 35
  },
  {
    "id": "gs-interior-dressing",
    "slug": "good-stuff-interior-dressing",
    "name": "Good Stuff Interior Dressing",
    "brand": "good_stuff",
    "category": "Interior Detailers & Cleaners",
    "categorySlug": "interior",
    "subcategory": "interior",
    "price": 12,
    "shortDescription": "Easy to use car interior dressing. Gives the cockpit and other elements a satin effect. The product has a pleasant scent of men’s perfume, which guarantees h...",
    "description": "Easy to use car interior dressing. Gives the cockpit and other elements a satin effect. The product has a pleasant scent of men’s perfume, which guarantees high work comfort and lasts long after using it. WAY OF USE: Shake well before use Apply the product using an applicator or microfiber directly on the plastics inside the car NOTICE: Apply on clean and degreased surface",
    "features": [
      "Shake well before use",
      "Apply the product using an applicator or microfiber directly on the plastics inside the car NOTICE:",
      "Apply on clean and degreased surface"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Interior Detailers & Cleaners",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_aa076e19735649c4b2e2ad6a74648e1b~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_aa076e19735649c4b2e2ad6a74648e1b~mv2.png"
    ],
    "inStock": true,
    "stockCount": 40,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.86,
    "reviewCount": 36
  },
  {
    "id": "gs-interior-cleaner",
    "slug": "good-stuff-interior-cleaner",
    "name": "Good Stuff Interior Cleaner",
    "brand": "good_stuff",
    "category": "Interior Detailers & Cleaners",
    "categorySlug": "interior",
    "subcategory": "interior",
    "price": 6,
    "shortDescription": "Ready to use product for car interior various surfaces cleaninig such as cockpit, plastic or rubber. It easily removes dirt and dust, and at the same time is...",
    "description": "Ready to use product for car interior various surfaces cleaninig such as cockpit, plastic or rubber. It easily removes dirt and dust, and at the same time is completely safe for the cleaned surfaces. It comes in two fragrances for better work comfort – raspberry and pomegranate. It works best with a microfiber, a dedicated brush or mitt for car interior care. WAY OF USE: Spray onto microfiber or brush/mitt or directly on the surface Work the product on a surface Wipe it dry",
    "features": [
      "Spray onto microfiber or brush/mitt or directly on the surface",
      "Work the product on a surface",
      "Wipe it dry"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Interior Detailers & Cleaners",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_d59a00cb8ae146a9a0dda36ac7ad2b42~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_d59a00cb8ae146a9a0dda36ac7ad2b42~mv2.png"
    ],
    "inStock": true,
    "stockCount": 41,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.87,
    "reviewCount": 37
  },
  {
    "id": "gs-leather-cleaner",
    "slug": "good-stuff-leather-cleaner",
    "name": "Good Stuff Leather Cleaner",
    "brand": "good_stuff",
    "category": "Interior Detailers & Cleaners",
    "categorySlug": "interior",
    "subcategory": "interior",
    "price": 9.9,
    "originalPrice": 11.38,
    "shortDescription": "Ready to use automotive leather upholstery cleaner It easily removes dirt from leather elements, and at the same time it is completely safe for the cleaned s...",
    "description": "Ready to use automotive leather upholstery cleaner It easily removes dirt from leather elements, and at the same time it is completely safe for the cleaned surface. It can be used for heavy embedded dirt and regular care. Leaves a pleasant leather scent. Creates a stable foam to avoid soaking of the cleaned element. 200ml bottle is additionally equipped with a built-in foam pump. Larger volumes should be applied with a foam bottle. For the best user experience use with a dedicated leather cleaning brush. WAY OF USE: Apply the product with a foam bottle (not applicable for 200ml capacity) Apply foam to the leather cleaning brush Spread the product over the surface and work out Collect dirt and excess product using microfiber NOTICE:Do not use on nubuck, suede and oiled leather",
    "features": [
      "Apply the product with a foam bottle (not applicable for 200ml capacity)",
      "Apply foam to the leather cleaning brush",
      "Spread the product over the surface and work out",
      "Collect dirt and excess product using microfiber NOTICE:Do not use on nubuck, suede and oiled leather"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Interior Detailers & Cleaners",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_0c81f87332ad4a5ba028e784fdcdd5c2~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_0c81f87332ad4a5ba028e784fdcdd5c2~mv2.png"
    ],
    "inStock": true,
    "stockCount": 42,
    "featured": false,
    "isBestSeller": true,
    "isNew": true,
    "rating": 4.88,
    "reviewCount": 38
  },
  {
    "id": "gs-leather-milk",
    "slug": "good-stuff-leather-milk",
    "name": "Good Stuff Leather Milk",
    "brand": "good_stuff",
    "category": "Interior Detailers & Cleaners",
    "categorySlug": "interior",
    "subcategory": "interior",
    "price": 10,
    "shortDescription": "Leather protection agent. Preserves the natural look of the without the shining effect. Thanks to its conditioning properties, it prevents drying and crackin...",
    "description": "Leather protection agent. Preserves the natural look of the without the shining effect. Thanks to its conditioning properties, it prevents drying and cracking. Leaves a pleasant leather scent. The milk should be applied with an applicator or a sponge to clean and degreased upholstery. WAY OF USE: Clean the surface Apply a small amount of the product to the leather with a sponge or microfiber applicator Leave to dry for about 40 minutes – 1 hour if necessary, apply one more layer NOTICE:Do not use on nubuck, suede and oiled leather.",
    "features": [
      "Clean the surface",
      "Apply a small amount of the product to the leather with a sponge or microfiber applicator",
      "Leave to dry for about 40 minutes – 1 hour",
      "if necessary, apply one more layer NOTICE:Do not use on nubuck, suede and oiled leather."
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Interior Detailers & Cleaners",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_26d55e99ff59482793fea8b2e79773b5~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_26d55e99ff59482793fea8b2e79773b5~mv2.png"
    ],
    "inStock": true,
    "stockCount": 43,
    "featured": true,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.89,
    "reviewCount": 39
  },
  {
    "id": "gs-interior-kit",
    "slug": "good-stuff-interior-kit",
    "name": "Good Stuff Interior Kit",
    "brand": "good_stuff",
    "category": "Interior Detailers & Cleaners",
    "categorySlug": "interior",
    "subcategory": "interior",
    "price": 27,
    "shortDescription": "Basic interior maintenance set. In a specially prepared box, you will find 7 car interior care products. Accordingly, 3 products from GOOD STUFF and 4 necess...",
    "description": "Basic interior maintenance set. In a specially prepared box, you will find 7 car interior care products. Accordingly, 3 products from GOOD STUFF and 4 necessary accessories from the WORK STUFF brand. Using accessories available in the set, you can clean plastics, rubber elements and the cockpit and apply a dedicated dressing. Additionally, the box includes a glass cleaner with dedicated microfiber. GOOD STUFF PRODUCTS: Interior Cleaner Pomegranate 500ml Glass Cleaner 500ml Interior Dressing 500ml WORK STUFF PRODUCTS: ZEPHYR Waffle Towel GENTLEMAN Basic CLASSIC Brush 24mm ECLIPSE Microfibre Applicator",
    "features": [
      "Interior Cleaner Pomegranate 500ml",
      "Glass Cleaner 500ml",
      "Interior Dressing 500ml WORK STUFF PRODUCTS:",
      "ZEPHYR Waffle Towel",
      "GENTLEMAN Basic"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Interior Detailers & Cleaners",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_0a62f378aa264a9f865946ce05f79a36~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_0a62f378aa264a9f865946ce05f79a36~mv2.png"
    ],
    "inStock": true,
    "stockCount": 44,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.9,
    "reviewCount": 40
  },
  {
    "id": "gs-thunder-wheel-brush",
    "slug": "good-stuff-thunder-wheel-brush",
    "name": "Good Stuff Thunder Wheel Brush",
    "brand": "good_stuff",
    "category": "Wheel & Tyre Care",
    "categorySlug": "wheels",
    "subcategory": "wheels",
    "price": 16,
    "originalPrice": 18.4,
    "shortDescription": "The THUNDER Wheel Brush is designed to deliver flawless wheel rim cleaning with ultra-soft bristles that provide maximum care while effectively removing dirt...",
    "description": "The THUNDER Wheel Brush is designed to deliver flawless wheel rim cleaning with ultra-soft bristles that provide maximum care while effectively removing dirt, brake dust, and grime. Its ergonomic design and flexible build make it ideal for reaching tight spaces, ensuring a complete clean without scratches. Key Features: Ultra-Soft Bristles: Gentle on rims, safe for delicate finishes. Large Cleaning Surface: Covers more area for efficient cleaning. Flexible Design: Easily bends to reach hard-to-access areas. Ergonomic Grip: Comfortable for extended use. Chemical Resistant: Built to withstand strong wheel cleaners. Easy to Clean: Rinses out easily for quick maintenance. Perfect For Cleaning:✅ Wheel Rims: Removes brake dust and road grime.✅ Tight Spaces: Ideal for spokes, wheel barrels, and lug nuts.✅ Delicate Finishes: Safe for glossy, chrome, and painted wheels.✅ Motorcycles: Perfect for wheel hubs and engine components. Why Choose the THUNDER Wheel Brush? ✅ Soft Yet Effective: Ultra-soft bristles ensure thorough cleaning with no scratches. ✅ Professional Grade: Designed for enthusiasts and professional detailers. ✅ Maximum Durability: Chemical-resistant and built for long-term use. ✅ Versatile Cleaning: Perfect for cars, motorcycles, and other vehicles. Product Specifications: Size: 45 cm Bristle Type: Ultra-soft synthetic fibers Handle: Ergonomic, flexible grip Chemical Resistance: High durability against wheel cleaning agents",
    "features": [
      "Ultra-Soft Bristles: Gentle on rims, safe for delicate finishes.",
      "Wheel Rims: Removes brake dust and road grime.",
      "Tight Spaces: Ideal for spokes, wheel barrels, and lug nuts.",
      "Delicate Finishes: Safe for glossy, chrome, and painted wheels.",
      "Motorcycles: Perfect for wheel hubs and engine components. Why Choose the THUNDER Wheel Brush?"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Wheel & Tyre Care",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_63908610fdeb45f3a8d2041d46f8e848~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_63908610fdeb45f3a8d2041d46f8e848~mv2.jpg"
    ],
    "inStock": true,
    "stockCount": 45,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.91,
    "reviewCount": 41
  },
  {
    "id": "gs-bizzard-thunder-kit",
    "slug": "good-stuff-bizzard-thunder-kit",
    "name": "Good Stuff Bizzard & Thunder Kit",
    "brand": "good_stuff",
    "category": "Wheel & Tyre Care",
    "categorySlug": "wheels",
    "subcategory": "wheels",
    "price": 25,
    "shortDescription": "The Blizzard &amp; Thunder Kit is a premium set of professional detailing brushes specifically designed for thorough rim cleaning. This kit combines two spec...",
    "description": "The Blizzard &amp; Thunder Kit is a premium set of professional detailing brushes specifically designed for thorough rim cleaning. This kit combines two specialized brushes, Blizzard and Thunder, both crafted with soft, flexible bristles that deliver deep cleaning while protecting your rims from scratches. Whether you’re a car enthusiast or a professional detailer, the Blizzard &amp; Thunder Kit ensures a safe, effective, and complete cleaning experience for all types of rims. Key Features: Brush Sizes: Blizzard: 36 cm – Ideal for hard-to-reach areas. Thunder: 45 cm – Perfect for cleaning large surfaces quickly. Delicate Bristles: Soft yet effective, ensuring scratch-free cleaning. Large Cleaning Surface: Maximizes efficiency with each stroke. High Flexibility: Reaches the most complex areas of the rims. Chemical Resistance: Built to withstand aggressive cleaning products. Easy to Clean: Simple to rinse and maintain for long-term use. Benefits of the Blizzard &amp; Thunder Kit:✅ Professional Quality: Designed for safe and effective rim cleaning.✅ Versatile Use: The Thunder brush covers large areas, while the Blizzard brush reaches tighter spaces.✅ Durability: Built for frequent use, resistant to cleaning chemicals and wear.✅ Ergonomic Design: Easy to handle, minimizing effort during cleaning. Why Choose the Blizzard &amp; Thunder Kit? The Blizzard &amp; Thunder Kit offers professional performance with premium quality materials, making it an essential tool for car care enthusiasts and detailing professionals alike. With flexible, delicate bristles and a design tailored for precision cleaning, your rims will stay spotless and protected.How to Use the Blizzard &amp; Thunder Kit: Rinse the Rims: Spray water to remove loose dirt. Apply Cleaning Solution: Use a rim-safe cleaner to break down contaminants. Use the Brushes: Clean large areas with the Thunder brush. Focus on detailed sections using the Blizzard brush. Rinse Thoroughly: Wash away loosened dirt and cleaning solution. Dry &amp; Inspect: Use a microfiber towel for a spotless finish.",
    "features": [
      "Brush Sizes:",
      "Professional Quality: Designed for safe and effective rim cleaning.",
      "Versatile Use: The Thunder brush covers large areas, while the Blizzard brush reaches tighter spaces.",
      "Durability: Built for frequent use, resistant to cleaning chemicals and wear."
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Wheel & Tyre Care",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_c8738ee6fd254f139a6ef7a9a4899dfd~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_c8738ee6fd254f139a6ef7a9a4899dfd~mv2.jpg"
    ],
    "inStock": true,
    "stockCount": 46,
    "featured": false,
    "isBestSeller": true,
    "isNew": false,
    "rating": 4.92,
    "reviewCount": 42
  },
  {
    "id": "gs-wheel-cleaner-alkaline",
    "slug": "good-stuff-wheel-cleaner-alkaline",
    "name": "Good Stuff Wheel Cleaner Alkaline",
    "brand": "good_stuff",
    "category": "Wheel & Tyre Care",
    "categorySlug": "wheels",
    "subcategory": "wheels",
    "price": 7,
    "shortDescription": "Alkaline product with corrosion inhibitors for aluminum rims and wheel cups grime removal. Concentrate from 1: 3 to 1:10. An alternative to all Iron Removers...",
    "description": "Alkaline product with corrosion inhibitors for aluminum rims and wheel cups grime removal. Concentrate from 1: 3 to 1:10. An alternative to all Iron Removers and Acidic Cleaning products. Cleaning properties exceed classic deironizers. In addition, with a strong foaming properties it provides a good glide while working. Enriched with a pleasant Coca Cola fragrance for better work comfort. WAY OF USE: Spray directly onto a rim, wheel caps Let it dwell depending on conditions 1-2 minutes If needed use brush to losen grime Rinse thorougly with a pressure washer NOTICE: Do not use in direct sun or warmn elements Do not let it dry Before use check results in less visible spot",
    "features": [
      "Spray directly onto a rim, wheel caps",
      "Let it dwell depending on conditions 1-2 minutes",
      "If needed use brush to losen grime",
      "Rinse thorougly with a pressure washer NOTICE:",
      "Do not use in direct sun or warmn elements"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Wheel & Tyre Care",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_95a08a7e40ba45129c1ce6803a80ce95~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_95a08a7e40ba45129c1ce6803a80ce95~mv2.png"
    ],
    "inStock": true,
    "stockCount": 47,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.93,
    "reviewCount": 43
  },
  {
    "id": "gs-tire-rubber-cleaner",
    "slug": "good-stuff-tire-rubber-cleaner",
    "name": "Good Stuff Tire & Rubber Cleaner",
    "brand": "good_stuff",
    "category": "Wheel & Tyre Care",
    "categorySlug": "wheels",
    "subcategory": "wheels",
    "price": 10,
    "originalPrice": 11.5,
    "shortDescription": "Concentrate product with corrosion inhibitors for cleaning tires and other rubber parts such as rugs or wiper blades. Perfectly removes all dirt and residues...",
    "description": "Concentrate product with corrosion inhibitors for cleaning tires and other rubber parts such as rugs or wiper blades. Perfectly removes all dirt and residues left behind by applied chemicals. Degreases and prepares surfaces for the application of dressing. When used before applying dressing, it significantly extends the life of it. WAY OF USE:1. Dilution ratio (reccomended) for foam gun from 1:3 up to 1:102. Apply the product to the wetted surface3. Brush out with a brush or paintbrush4. Flush with water under pressure",
    "features": [
      "Engineered to professional automotive detailing standards",
      "Tested for surface safety on high-end clear coats and trims",
      "High efficiency concentrated formulation",
      "Official genuine European import in Malta"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Wheel & Tyre Care",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/fb0f16_2ff40cad1ca041c78aa9db62c3b66162~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_2ff40cad1ca041c78aa9db62c3b66162~mv2.png"
    ],
    "inStock": true,
    "stockCount": 48,
    "featured": true,
    "isBestSeller": false,
    "isNew": true,
    "rating": 4.94,
    "reviewCount": 44
  },
  {
    "id": "gs-iron-remover",
    "slug": "good-stuff-iron-remover",
    "name": "Good Stuff Iron Remover",
    "brand": "good_stuff",
    "category": "Wheel & Tyre Care",
    "categorySlug": "wheels",
    "subcategory": "wheels",
    "price": 10,
    "shortDescription": "Product (liquid) made specifically for ferrous iron particles removal. Thanks to its neutral pH it is safe for every cleaned surface.While working with iron ...",
    "description": "Product (liquid) made specifically for ferrous iron particles removal. Thanks to its neutral pH it is safe for every cleaned surface.While working with iron particles it creates red colour due to chemical reaction with product, with deep embedded grime use brush to agitate. WAY OF USE:Spray the wheels, hubcaps, car bodyWait 2-3 minutes depending on the conditionsIf necessary, use a brush to brush dirtRinse thoroughly under high pressure ATTENTION: Do not use the product in the sun or on hot elements Do not allow to dry Check product operation in a low-visibility area before use.",
    "features": [
      "Do not use the product in the sun or on hot elements",
      "Do not allow to dry",
      "Check product operation in a low-visibility area before use."
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Wheel & Tyre Care",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_77817b4aceaa4673972a972a98dfb847~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_77817b4aceaa4673972a972a98dfb847~mv2.png"
    ],
    "inStock": true,
    "stockCount": 49,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.95,
    "reviewCount": 45
  },
  {
    "id": "gs-iron-remover-gel",
    "slug": "good-stuff-iron-remover-gel",
    "name": "Good Stuff Iron Remover Gel",
    "brand": "good_stuff",
    "category": "Wheel & Tyre Care",
    "categorySlug": "wheels",
    "subcategory": "wheels",
    "price": 10,
    "shortDescription": "Product (gel) made specifically for ferrous iron particles removal. Thanks to its neutral pH it is safe for every cleaned surface.While working with iron par...",
    "description": "Product (gel) made specifically for ferrous iron particles removal. Thanks to its neutral pH it is safe for every cleaned surface.While working with iron particles it creates red colour due to chemical reaction with product, with deep embedded grime use brush to agitate. WAY OF USE: Spray the wheels, hubcaps, car body Wait 2-3 minutes depending on the conditions If necessary, use a brush to brush dirt Rinse thoroughly under high pressure ATTENTION: Do not use the product in the sun or on hot elements Do not allow to dry Check product operation in a low-visibility area before use",
    "features": [
      "Spray the wheels, hubcaps, car body",
      "Wait 2-3 minutes depending on the conditions",
      "If necessary, use a brush to brush dirt",
      "Rinse thoroughly under high pressure ATTENTION:",
      "Do not use the product in the sun or on hot elements"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Wheel & Tyre Care",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_bcf264c3933b468b88d91fbc306b3772~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_bcf264c3933b468b88d91fbc306b3772~mv2.png"
    ],
    "inStock": true,
    "stockCount": 50,
    "featured": false,
    "isBestSeller": true,
    "isNew": false,
    "rating": 4.96,
    "reviewCount": 46
  },
  {
    "id": "gs-rims-detailer",
    "slug": "good-stuff-rims-detailer",
    "name": "Good Stuff Rims Detailer",
    "brand": "good_stuff",
    "category": "Wheel & Tyre Care",
    "categorySlug": "wheels",
    "subcategory": "wheels",
    "price": 9,
    "originalPrice": 10.35,
    "shortDescription": "Quick and easy to use rims deatiler. Gives superb shine and hydrophobic effect. Up to 3-4 weeks durability. Raspberries scent for better work comfort. Can be...",
    "description": "Quick and easy to use rims deatiler. Gives superb shine and hydrophobic effect. Up to 3-4 weeks durability. Raspberries scent for better work comfort. Can be applied on wet and dry surfaces according depending on demands. WAY OF USE 1: Shake the bottle before use Apply the product to clean and dry rims Spray microfiber or rims and spread the product Reach the other side of the microfiber WAY OF USE 2: Shake the bottle before use Apply the product on clean rims Spray the wheels with the product and rinse the product under pressure Wipe the rims dry",
    "features": [
      "Shake the bottle before use",
      "Apply the product to clean and dry rims",
      "Spray microfiber or rims and spread the product",
      "Reach the other side of the microfiber WAY OF USE 2:",
      "Shake the bottle before use"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Wheel & Tyre Care",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_636c2091780646a38f04a3bf82fde3ad~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_636c2091780646a38f04a3bf82fde3ad~mv2.png"
    ],
    "inStock": true,
    "stockCount": 51,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.97,
    "reviewCount": 47
  },
  {
    "id": "gs-tire-dressing-shine",
    "slug": "good-stuff-tire-dressing-shine",
    "name": "Good Stuff Tire Dressing SHINE",
    "brand": "good_stuff",
    "category": "Wheel & Tyre Care",
    "categorySlug": "wheels",
    "subcategory": "wheels",
    "price": 10,
    "shortDescription": "Shiny effect tire dressing. The product has a liquid consistency that facilitates application. Superb colour saturation and a hydrophobic effect. The advanta...",
    "description": "Shiny effect tire dressing. The product has a liquid consistency that facilitates application. Superb colour saturation and a hydrophobic effect. The advantages include a wet tire application possibility,UV radiation protection and durability up to 2-3 weeks. It should be applied using a dedicated tire applicator. WAY OF USE: Apply to a clean tire with the tire applicator Spread the product on the tire Leave to dry",
    "features": [
      "Apply to a clean tire with the tire applicator",
      "Spread the product on the tire",
      "Leave to dry"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Wheel & Tyre Care",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_b50e97b95820417aab48f345908b02c4~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_b50e97b95820417aab48f345908b02c4~mv2.png"
    ],
    "inStock": true,
    "stockCount": 52,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.98,
    "reviewCount": 48
  },
  {
    "id": "gs-wheel-cleaner-acid-concentrate",
    "slug": "good-stuff-wheel-cleaner-acid-concentrate",
    "name": "Good Stuff Wheel Cleaner Acid Concentrate",
    "brand": "good_stuff",
    "category": "Wheel & Tyre Care",
    "categorySlug": "wheels",
    "subcategory": "wheels",
    "price": 12,
    "shortDescription": "Acidic pH product for removing dirt from aluminum rims and wheel caps. Efficient concentrate from 1: 30 to 1:5. Reacts quickly with pollutants. In the case d...",
    "description": "Acidic pH product for removing dirt from aluminum rims and wheel caps. Efficient concentrate from 1: 30 to 1:5. Reacts quickly with pollutants. In the case deeply embede grime, after applying the product, use a brush to work product into a rim. Cherry aroma for better work comfort. WAY OF USE: Spray directly onto a rim, wheel caps Let it dwell depending on conditions 1-2 ministra If needed use brush to losen grime Rinse thorougly with a pressure washer NOTICE: Do not use in direct sun or warmn elements Do not let it dry Before use check results in less visible spot",
    "features": [
      "Spray directly onto a rim, wheel caps",
      "Let it dwell depending on conditions 1-2 ministra",
      "If needed use brush to losen grime",
      "Rinse thorougly with a pressure washer NOTICE:",
      "Do not use in direct sun or warmn elements"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Wheel & Tyre Care",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_8410338c85254c8f83dbea4d64a9ad38~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_8410338c85254c8f83dbea4d64a9ad38~mv2.png"
    ],
    "inStock": true,
    "stockCount": 18,
    "featured": true,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.99,
    "reviewCount": 14
  },
  {
    "id": "gs-wheel-wax",
    "slug": "good-stuff-wheel-wax",
    "name": "Good Stuff Wheel Wax",
    "brand": "good_stuff",
    "category": "Wheel & Tyre Care",
    "categorySlug": "wheels",
    "subcategory": "wheels",
    "price": 9,
    "originalPrice": 10.35,
    "shortDescription": "Wax created for all types of rims and wheel caps protection. Prevents brake pad dust, dirt and other harmful factors from penteration. Gives a high gloss and...",
    "description": "Wax created for all types of rims and wheel caps protection. Prevents brake pad dust, dirt and other harmful factors from penteration. Gives a high gloss and a hydrophobic effect. The advantages include easy application and Coca-Cola scent for better work comfort. The product contains high temperature resistant polymers. Up to 2 months durability. A dedicated WORK STUFF applicator included in the set for 50ML and 100ML. WAY OF USE: Apply on clean and dry rims Apply a thin layer of wax to the surface with an applicator Depending on the conditions, apply wax with microfiber after about 5-10 minutes",
    "features": [
      "Apply on clean and dry rims",
      "Apply a thin layer of wax to the surface with an applicator",
      "Depending on the conditions, apply wax with microfiber after about 5-10 minutes"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Wheel & Tyre Care",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_cebc3e72705645c99d71577b22adb292~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_cebc3e72705645c99d71577b22adb292~mv2.png"
    ],
    "inStock": true,
    "stockCount": 19,
    "featured": false,
    "isBestSeller": true,
    "isNew": true,
    "rating": 4.82,
    "reviewCount": 15
  },
  {
    "id": "gs-wheel-kit",
    "slug": "good-stuff-wheel-kit",
    "name": "Good Stuff Wheel Kit",
    "brand": "good_stuff",
    "category": "Wheel & Tyre Care",
    "categorySlug": "wheels",
    "subcategory": "wheels",
    "price": 25,
    "shortDescription": "Complete wheel care cleaning kit. In a specially prepared box, there are 6 products for rims and tires care. Accordingly, 3 GOOD STUFF products and 3 WORK ST...",
    "description": "Complete wheel care cleaning kit. In a specially prepared box, there are 6 products for rims and tires care. Accordingly, 3 GOOD STUFF products and 3 WORK STUFF brand necessary accessories. Using products and accessories available in the set, you can clean and protect rims or wheelcups and apply tire dressing. GOOD STUFF PRODUCTS: Iron Remover GEL 500ml Tire Dressing Shine 250ml Rims Detailer 250ml WORK STUFF PRODUCTS: Gentleman Basic Clean Hands Tire Applicator Detailing Brush Rubber Black 24mm",
    "features": [
      "Iron Remover GEL 500ml",
      "Tire Dressing Shine 250ml",
      "Rims Detailer 250ml WORK STUFF PRODUCTS:",
      "Gentleman Basic",
      "Clean Hands Tire Applicator"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Wheel & Tyre Care",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_9f0e274c65e248d0b7ba54c35bd53ec4~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_9f0e274c65e248d0b7ba54c35bd53ec4~mv2.png"
    ],
    "inStock": true,
    "stockCount": 20,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.83,
    "reviewCount": 16
  },
  {
    "id": "gs-si02-wax",
    "slug": "good-stuff-si02-wax",
    "name": "Good Stuff Si02 Wax",
    "brand": "good_stuff",
    "category": "Passion Luxury Series",
    "categorySlug": "passion-series",
    "subcategory": "passion series",
    "price": 13,
    "shortDescription": "PASSION Line crated for every clean ride enthusiast. It’s not only a beautifuly packaged product but most of all great quality cosmetics. They look great and...",
    "description": "PASSION Line crated for every clean ride enthusiast. It’s not only a beautifuly packaged product but most of all great quality cosmetics. They look great and work great. Created of passion for detailing.A SiO2 based wax designed to protect paint finish.Gives a superb gloss . Protects against dirt and other harmful factors. Provides a hydrophobic effect. The pleasant oranges scent for better work comfort. Up to 2 months durability. WAY OF USE: Apply on clean dry paint Spread thin layer on the surface with a use of applicator Dependent on conditions wipe down after 5-10minutes",
    "features": [
      "Apply on clean dry paint",
      "Spread thin layer on the surface with a use of applicator",
      "Dependent on conditions wipe down after 5-10minutes"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Passion Luxury Series",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_fab6533650e6403db32ab735c2bda504~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_fab6533650e6403db32ab735c2bda504~mv2.png"
    ],
    "inStock": true,
    "stockCount": 21,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.84,
    "reviewCount": 17
  },
  {
    "id": "gs-sio2-detailer",
    "slug": "good-stuff-sio2-detailer",
    "name": "Good Stuff SiO2 Detailer",
    "brand": "good_stuff",
    "category": "Passion Luxury Series",
    "categorySlug": "passion-series",
    "subcategory": "passion series",
    "price": 9,
    "originalPrice": 10.35,
    "shortDescription": "PASSION Line created for every clean ride enthusiast. It’s not only a beautifuly packaged product but most of all great quality cosmetics. They look great an...",
    "description": "PASSION Line created for every clean ride enthusiast. It’s not only a beautifuly packaged product but most of all great quality cosmetics. They look great and work great. Created of passion for detailing.SiO2 based Quick Detailer created for easy and fast paint protection. Provides high gloss and hydrophobic effect. Pleasent man perfume fragrance for better work comfort. Up to 4 weeks durability. WAY OF USE: Shake the bottle before use Apply the product in the shade and on a cool car paint Spray microfiber or car paint and spread the product Reach the other side of the microfiber",
    "features": [
      "Shake the bottle before use",
      "Apply the product in the shade and on a cool car paint",
      "Spray microfiber or car paint and spread the product",
      "Reach the other side of the microfiber"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Passion Luxury Series",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_c3b3a03b2803429fa2f7686fe671de7f~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_c3b3a03b2803429fa2f7686fe671de7f~mv2.png"
    ],
    "inStock": true,
    "stockCount": 22,
    "featured": false,
    "isBestSeller": false,
    "isNew": false,
    "rating": 4.85,
    "reviewCount": 18
  },
  {
    "id": "gs-interior-detailer",
    "slug": "good-stuff-interior-detailer",
    "name": "Good Stuff Interior Detailer",
    "brand": "good_stuff",
    "category": "Passion Luxury Series",
    "categorySlug": "passion-series",
    "subcategory": "passion series",
    "price": 9,
    "shortDescription": "PASSION Line created for every clean ride enthusiast. It’s not only a beautifuly packaged product but most of all great quality cosmetics. They look great an...",
    "description": "PASSION Line created for every clean ride enthusiast. It’s not only a beautifuly packaged product but most of all great quality cosmetics. They look great and work great. Created of passion for detailing.Interior Detailer a Quick Detailer designed for interior maintenance with cleaning and protecting properties. In one step cleanes and protects car’s interior surfaces. All interior trim safe. Leaves hydrophobic protective layer. Additionaly makes surface antistatic and protects against UV radiation. Ideal for those who don’t want to use two separate products, one for cleaning and other for protection. Once applied leaves a pleasent man’s perfume fregrance. WAY OF USE: Spray product onto microfiber Wipe cleaned element with this microfiber If needed wipe down with a clean microfiber",
    "features": [
      "Spray product onto microfiber",
      "Wipe cleaned element with this microfiber",
      "If needed wipe down with a clean microfiber"
    ],
    "specifications": {
      "Brand": "Good Stuff Car Cosmetics",
      "Origin": "European Union",
      "Application": "Passion Luxury Series",
      "Importer": "Official WG Stuff Malta"
    },
    "images": [
      "https://static.wixstatic.com/media/f0347b_140909c40b0c4b4d82fb7cf0a2fe12c6~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_140909c40b0c4b4d82fb7cf0a2fe12c6~mv2.png"
    ],
    "inStock": true,
    "stockCount": 23,
    "featured": true,
    "isBestSeller": true,
    "isNew": false,
    "rating": 4.86,
    "reviewCount": 19
  }
];

export const GIFT_BUNDLES: GiftBundle[] = [
  {
    "id": "wg-ultimate-master-detailer-box",
    "slug": "the-master-detailer-complete-collection",
    "name": "The Master Detailer Complete Collection",
    "description": "The ultimate car care package combining Work Stuff pro gear with Good Stuff advanced chemicals. Includes everything needed to wash, decontaminate, dry, and protect a vehicle.",
    "price": 89,
    "originalValue": 115,
    "savingsPercentage": 23,
    "itemsIncluded": [
      "Work Stuff KING Drying Towel (1100 GSM)",
      "Work Stuff ALBINO Detailing Brush (24mm)",
      "Work Stuff STORM Premium Wash Mitt",
      "Good Stuff Pure Shampoo (500ml)",
      "Good Stuff SiO2 Quick Detailer (500ml)",
      "Good Stuff Iron Remover Gel (500ml)",
      "Work Stuff GENTLEMAN Edgeless Microfiber Towel",
      "Work Stuff Official Work Bag"
    ],
    "images": [
      "https://static.wixstatic.com/media/fb0f16_1cd0b7eb8af94badb9ffd2494fb0c4fa~mv2.jpg",
      "https://static.wixstatic.com/media/fb0f16_94c13fccabcf45748c6ce50219d106a4~mv2.png"
    ],
    "badge": "Best Value Bundle",
    "featured": true,
    "inStock": true
  },
  {
    "id": "wg-pro-wash-system",
    "slug": "pro-wash-and-dry-system",
    "name": "Pro Two-Bucket Wash & Dry System",
    "description": "Eliminate swirl marks forever. Combines the ultra-slick Typhoon wash pad with the massive King drying towel and Pure Shampoo.",
    "price": 59.9,
    "originalValue": 76,
    "savingsPercentage": 21,
    "itemsIncluded": [
      "Work Stuff KING Drying Towel (1100 GSM)",
      "Work Stuff TYPHOON Wash Pad",
      "Good Stuff Pure Shampoo (1000ml Large)",
      "Work Stuff Detailing Buckets + Separators"
    ],
    "images": [
      "https://static.wixstatic.com/media/f0347b_241a6b313f4446ccb661ecf7784495f4~mv2.png"
    ],
    "badge": "Enthusiast Favorite",
    "featured": true,
    "inStock": true
  },
  {
    "id": "wg-interior-perfection-set",
    "slug": "interior-deep-clean-and-protection-kit",
    "name": "Interior Deep Clean & UV Guard Kit",
    "description": "Restore that showroom aroma and factory-matte clean. Includes pH-neutral pomegranate cleaner, anti-UV matte dashboard dressing, and ultra-soft Albino brushes.",
    "price": 48,
    "originalValue": 62,
    "savingsPercentage": 23,
    "itemsIncluded": [
      "Good Stuff Interior Cleaner Pomegranate (500ml)",
      "Good Stuff Interior Dressing (500ml)",
      "Work Stuff Detailing Brush ALBINO (24mm)",
      "Work Stuff GENTLEMAN BASIC 4 Colour (Pack of 4)"
    ],
    "images": [
      "https://static.wixstatic.com/media/f0347b_0d2ddd95e87b400ca22c6e4e4857f489~mv2.png"
    ],
    "badge": "Interior Special",
    "featured": true,
    "inStock": true
  },
  {
    "id": "wg-wheel-decon-master-kit",
    "slug": "wheel-decon-and-satin-tyre-pack",
    "name": "Wheel Decon & Satin Tyre Pack",
    "description": "Deep clean baked brake dust and restore rich satin tyre sidewalls. Features bleeding iron cleaner, tyre dressing, Hurricane mitt, and Black brush.",
    "price": 54.9,
    "originalValue": 71,
    "savingsPercentage": 23,
    "itemsIncluded": [
      "Good Stuff Iron Remover Gel (500ml)",
      "Good Stuff Tire Dressing SHINE (500ml)",
      "Work Stuff HURRICANE Wheel Mitt",
      "Work Stuff Thunder Wheel Brush"
    ],
    "images": [
      "https://static.wixstatic.com/media/f0347b_6b11a10c003145e4b3d6edac98aa52cb~mv2.png"
    ],
    "badge": "Wheel Care",
    "featured": true,
    "inStock": true
  }
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
