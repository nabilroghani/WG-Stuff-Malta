const https = require('https');
const fs = require('fs');

const mapped = JSON.parse(fs.readFileSync('scripts/mapped-products.json', 'utf8'));

// Find unique URLs / mediaKeys
const uniqueItems = [];
const seenUrls = new Set();
mapped.forEach(item => {
  if (!seenUrls.has(item.url)) {
    seenUrls.add(item.url);
    uniqueItems.push(item);
  }
});

console.log('Total unique product images to process:', uniqueItems.length);

function fetchUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location).then(resolve);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', () => resolve(''));
  });
}

async function processAll() {
  const finalProducts = [];
  for (let i = 0; i < uniqueItems.length; i++) {
    const item = uniqueItems[i];
    let pageData = null;
    if (item.matched && item.matched.loc) {
      console.log(`[${i+1}/${uniqueItems.length}] Fetching ${item.matched.loc}...`);
      const html = await fetchUrl(item.matched.loc);
      // Extract title, description, schema
      const ogTitle = (html.match(/<meta property="og:title" content="([^"]+)"/) || [])[1];
      const title = ogTitle ? ogTitle.replace(/ \| WG STUFF MALTA.*$/i, '').replace(/ \| Work Stuff.*$/i, '').trim() : '';
      const ogDesc = (html.match(/<meta property="og:description" content="([^"]+)"/) || [])[1];
      
      // Look for Wix schema or JSON-LD
      const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
      let jsonLd = null;
      if (jsonLdMatch) {
        try { jsonLd = JSON.parse(jsonLdMatch[1]); } catch (e) {}
      }

      pageData = {
        title: title || item.matched.title || '',
        description: ogDesc || '',
        price: jsonLd?.offers?.price || jsonLd?.offers?.[0]?.price || null,
        sku: jsonLd?.sku || null,
        rawHtmlExcerpt: html.substring(0, 1000)
      };
    }

    finalProducts.push({
      category: item.category,
      mediaKey: item.mediaKey,
      imageUrl: item.url,
      matched: item.matched,
      pageData
    });
  }

  fs.writeFileSync('scripts/detailed-products.json', JSON.stringify(finalProducts, null, 2));
  console.log('Saved detailed-products.json!');
}

processAll();
