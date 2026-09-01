const fs = require('fs');
const https = require('https');

const rawGoodStuffInput = `
Good Stuff
wash
https://static.wixstatic.com/media/fb0f16_31c9b08b59e64a22bbce8b2e68d9d3e3~mv2.png/v1/fill/w_520,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_31c9b08b59e64a22bbce8b2e68d9d3e3~mv2.png 
https://static.wixstatic.com/media/f0347b_c5ab1b445e3c4a0aa2db5324eafd262a~mv2.png/v1/fill/w_520,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_c5ab1b445e3c4a0aa2db5324eafd262a~mv2.png 
https://static.wixstatic.com/media/f0347b_7d14ef9dce8e4baa87952c4f31a4c577~mv2.png/v1/fill/w_520,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_7d14ef9dce8e4baa87952c4f31a4c577~mv2.png 
https://static.wixstatic.com/media/f0347b_d1e27e18fe4d49c1af1b8acddab40f40~mv2.png/v1/fill/w_520,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_d1e27e18fe4d49c1af1b8acddab40f40~mv2.png 
https://static.wixstatic.com/media/f0347b_d4001e61319449d5a2bc83fdfa1aad79~mv2.png/v1/fill/w_520,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_d4001e61319449d5a2bc83fdfa1aad79~mv2.png 
https://static.wixstatic.com/media/f0347b_71c04de762e64f50b57599c41ebae7d2~mv2.png/v1/fill/w_520,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_71c04de762e64f50b57599c41ebae7d2~mv2.png 
https://static.wixstatic.com/media/f0347b_79c982351b824fdca93c46b8b13a2c7e~mv2.png/v1/fill/w_520,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_79c982351b824fdca93c46b8b13a2c7e~mv2.png 
https://static.wixstatic.com/media/f0347b_817aa64447dd443b83ef1ca68a3aa18c~mv2.png/v1/fill/w_520,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_817aa64447dd443b83ef1ca68a3aa18c~mv2.png 
https://static.wixstatic.com/media/f0347b_dd13c8b1ec8b4ff3850407c3d09ca6e9~mv2.png/v1/fill/w_520,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_dd13c8b1ec8b4ff3850407c3d09ca6e9~mv2.png 
https://static.wixstatic.com/media/f0347b_6b53b96b49ea4ee89da355555cbe1625~mv2.png/v1/fill/w_520,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_6b53b96b49ea4ee89da355555cbe1625~mv2.png 
https://static.wixstatic.com/media/f0347b_90000f9bf0b6431a847c51be92119ed7~mv2.png/v1/fill/w_520,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_90000f9bf0b6431a847c51be92119ed7~mv2.png 
https://static.wixstatic.com/media/f0347b_fe85d29fc1bc446195c27f6b6526c9ed~mv2.png/v1/fill/w_520,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_fe85d29fc1bc446195c27f6b6526c9ed~mv2.png 
Exterior
https://static.wixstatic.com/media/f0347b_a6d44a9dff214ee6a8fd63f7d723e010~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_a6d44a9dff214ee6a8fd63f7d723e010~mv2.jpg 
https://static.wixstatic.com/media/f0347b_d21057a92e0e4c0fb39166cc6032ff58~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_d21057a92e0e4c0fb39166cc6032ff58~mv2.jpg 
https://static.wixstatic.com/media/f0347b_67211400323c4bb2ad5930bb2ee4a5aa~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_67211400323c4bb2ad5930bb2ee4a5aa~mv2.jpg 
https://static.wixstatic.com/media/f0347b_bd01716e6ad3479b8ed0a999cdf6fdd3~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_bd01716e6ad3479b8ed0a999cdf6fdd3~mv2.png 
https://static.wixstatic.com/media/fb0f16_ab5405b603bc4eb2845b6a81e275356a~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_ab5405b603bc4eb2845b6a81e275356a~mv2.png 
https://static.wixstatic.com/media/f0347b_a4dd2dcd59d5492cbe3b515d1eff461c~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_a4dd2dcd59d5492cbe3b515d1eff461c~mv2.png 
https://static.wixstatic.com/media/f0347b_05786fdc9ea947488d319cc2eda16aba~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_05786fdc9ea947488d319cc2eda16aba~mv2.png 

Interior 
https://static.wixstatic.com/media/f0347b_a8f85fcf883947a2bb61ff694a34713b~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_a8f85fcf883947a2bb61ff694a34713b~mv2.png 
https://static.wixstatic.com/media/f0347b_f4efca395f3e4b6e82dd787f45afc92c~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_f4efca395f3e4b6e82dd787f45afc92c~mv2.png 
https://static.wixstatic.com/media/f0347b_aa440f19c3be49c29f22af9dd03a383a~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_aa440f19c3be49c29f22af9dd03a383a~mv2.png 
https://static.wixstatic.com/media/f0347b_aa076e19735649c4b2e2ad6a74648e1b~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_aa076e19735649c4b2e2ad6a74648e1b~mv2.png 
https://static.wixstatic.com/media/f0347b_d59a00cb8ae146a9a0dda36ac7ad2b42~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_d59a00cb8ae146a9a0dda36ac7ad2b42~mv2.png 
https://static.wixstatic.com/media/f0347b_0c81f87332ad4a5ba028e784fdcdd5c2~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_0c81f87332ad4a5ba028e784fdcdd5c2~mv2.png 
https://static.wixstatic.com/media/f0347b_26d55e99ff59482793fea8b2e79773b5~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_26d55e99ff59482793fea8b2e79773b5~mv2.png 
https://static.wixstatic.com/media/f0347b_0a62f378aa264a9f865946ce05f79a36~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_0a62f378aa264a9f865946ce05f79a36~mv2.png  
Wheels
https://static.wixstatic.com/media/f0347b_a6d44a9dff214ee6a8fd63f7d723e010~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_a6d44a9dff214ee6a8fd63f7d723e010~mv2.jpg 
https://static.wixstatic.com/media/f0347b_63908610fdeb45f3a8d2041d46f8e848~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_63908610fdeb45f3a8d2041d46f8e848~mv2.jpg 
https://static.wixstatic.com/media/f0347b_67211400323c4bb2ad5930bb2ee4a5aa~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_67211400323c4bb2ad5930bb2ee4a5aa~mv2.jpg 
https://static.wixstatic.com/media/f0347b_c8738ee6fd254f139a6ef7a9a4899dfd~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_c8738ee6fd254f139a6ef7a9a4899dfd~mv2.jpg 
https://static.wixstatic.com/media/f0347b_95a08a7e40ba45129c1ce6803a80ce95~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_95a08a7e40ba45129c1ce6803a80ce95~mv2.png 
https://static.wixstatic.com/media/fb0f16_2ff40cad1ca041c78aa9db62c3b66162~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_2ff40cad1ca041c78aa9db62c3b66162~mv2.png 
https://static.wixstatic.com/media/f0347b_77817b4aceaa4673972a972a98dfb847~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_77817b4aceaa4673972a972a98dfb847~mv2.png 
https://static.wixstatic.com/media/f0347b_bcf264c3933b468b88d91fbc306b3772~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_bcf264c3933b468b88d91fbc306b3772~mv2.png 
https://static.wixstatic.com/media/f0347b_636c2091780646a38f04a3bf82fde3ad~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_636c2091780646a38f04a3bf82fde3ad~mv2.png 
https://static.wixstatic.com/media/f0347b_b50e97b95820417aab48f345908b02c4~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_b50e97b95820417aab48f345908b02c4~mv2.png 
https://static.wixstatic.com/media/f0347b_8410338c85254c8f83dbea4d64a9ad38~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_8410338c85254c8f83dbea4d64a9ad38~mv2.png 
https://static.wixstatic.com/media/f0347b_cebc3e72705645c99d71577b22adb292~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_cebc3e72705645c99d71577b22adb292~mv2.png 
https://static.wixstatic.com/media/f0347b_9f0e274c65e248d0b7ba54c35bd53ec4~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_9f0e274c65e248d0b7ba54c35bd53ec4~mv2.png 
Passion Series 
https://static.wixstatic.com/media/f0347b_fab6533650e6403db32ab735c2bda504~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_fab6533650e6403db32ab735c2bda504~mv2.png 
https://static.wixstatic.com/media/f0347b_c3b3a03b2803429fa2f7686fe671de7f~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_c3b3a03b2803429fa2f7686fe671de7f~mv2.png 
https://static.wixstatic.com/media/f0347b_140909c40b0c4b4d82fb7cf0a2fe12c6~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_140909c40b0c4b4d82fb7cf0a2fe12c6~mv2.png 
`;

https.get('https://www.wgstuffmalta.com/store-products-sitemap.xml', res => {
  let sitemapData = '';
  res.on('data', chunk => sitemapData += chunk);
  res.on('end', () => {
    const urls = sitemapData.match(/<url>[\s\S]*?<\/url>/g) || [];
    const mapByMediaId = {};
    urls.forEach(u => {
      const loc = (u.match(/<loc>(.*?)<\/loc>/) || [])[1];
      const title = (u.match(/<video:title>(.*?)<\/video:title>/) || [])[1];
      const desc = (u.match(/<video:description>(.*?)<\/video:description>/) || [])[1];
      const imgs = [...u.matchAll(/<image:loc>(.*?)<\/image:loc>/g)].map(m => m[1]);
      imgs.forEach(img => {
        const mediaMatch = img.match(/media\/([^\/\s\?~]+)/);
        if (mediaMatch) {
          const mediaKey = mediaMatch[1];
          mapByMediaId[mediaKey] = { loc, title, desc, imgs };
        }
      });
    });

    let currentCategory = '';
    const lines = rawGoodStuffInput.split('\n').map(l => l.trim()).filter(Boolean);
    const results = [];
    lines.forEach(line => {
      if (line.toLowerCase() === 'good stuff') return;
      const isCat = ['wash', 'exterior', 'interior', 'wheels', 'passion series'].find(c => c.toLowerCase() === line.toLowerCase());
      if (isCat) {
        currentCategory = isCat;
        return;
      }
      const match = line.match(/https:\/\/static\.wixstatic\.com\/media\/([^\/\s\?~]+)/);
      if (match) {
        let cleanUrl = line.replace(/src=\"|\"/g, '').trim();
        const mediaKey = match[1];
        const matched = mapByMediaId[mediaKey];
        results.push({
          brand: 'good_stuff',
          category: currentCategory,
          mediaKey,
          url: cleanUrl,
          matched: matched ? { loc: matched.loc, title: matched.title, desc: matched.desc } : null
        });
      }
    });

    fs.writeFileSync('scripts/mapped-good-stuff.json', JSON.stringify(results, null, 2));
    console.log('Saved mapped Good Stuff products:', results.length);
  });
});
