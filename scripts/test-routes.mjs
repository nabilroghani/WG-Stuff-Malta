const routes = [
  '/',
  '/work-stuff',
  '/work-stuff/wash',
  '/work-stuff/drying',
  '/work-stuff/brushes',
  '/good-stuff',
  '/good-stuff/wash',
  '/good-stuff/wheels',
  '/good-stuff/exterior',
  '/good-stuff/passion-series',
  '/gifts',
  '/about',
  '/contact',
  '/cart',
  '/wishlist',
  '/checkout/success?session_id=test_session_123',
  '/checkout/cancel',
  '/product/work-stuff-albino-detailing-brush',
  '/product/work-stuff-king-drying-towel',
  '/product/good-stuff-sour-shampoo-acidic',
  '/product/good-stuff-sio2-ceramic-quick-detailer',
  '/sitemap.xml',
  '/robots.txt',
];

async function run() {
  console.log('Testing Next.js Server Routes at http://localhost:3000...\n');
  let passed = 0;
  let failed = 0;

  for (const route of routes) {
    try {
      const res = await fetch(`http://localhost:3000${route}`);
      if (res.ok) {
        console.log(`✅ [${res.status}] ${route} (${res.headers.get('content-type')})`);
        passed++;
      } else {
        console.error(`❌ [${res.status}] ${route}`);
        failed++;
      }
    } catch (err) {
      console.error(`❌ [ERROR] ${route} -> ${err.message}`);
      failed++;
    }
  }

  // Test Checkout API
  console.log('\nTesting Stripe Checkout API endpoint (/api/checkout_sessions)...');
  try {
    const apiRes = await fetch('http://localhost:3000/api/checkout_sessions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: [
          {
            id: 'ws-albino-brush-default',
            product: {
              id: 'ws-albino-brush',
              slug: 'work-stuff-albino-detailing-brush',
              name: 'Work Stuff ALBINO Detailing Brush',
              brand: 'work_stuff',
              category: 'Detailing Brushes',
              categorySlug: 'brushes',
              price: 9.90,
              description: 'Feather-tip ultra soft synthetic bristles',
              features: ['Ultra soft'],
              images: ['https://images.unsplash.com/photo-1520340356584-f9917d1eea6f'],
              inStock: true,
              stockCount: 40,
              featured: true,
              rating: 5,
              reviewCount: 38,
            },
            quantity: 2,
          },
        ],
        customerEmail: 'test@example.com',
        customerName: 'Test Customer',
      }),
    });

    const data = await apiRes.json();
    if (apiRes.ok && data.url) {
      console.log(`✅ [200] /api/checkout_sessions -> Returned URL: ${data.url}`);
      passed++;
    } else {
      console.error(`❌ /api/checkout_sessions failed:`, data);
      failed++;
    }
  } catch (err) {
    console.error(`❌ /api/checkout_sessions error:`, err);
    failed++;
  }

  console.log(`\n========================================`);
  console.log(`Summary: ${passed} Passed | ${failed} Failed`);
  console.log(`========================================\n`);

  if (failed > 0) process.exit(1);
}

run();
