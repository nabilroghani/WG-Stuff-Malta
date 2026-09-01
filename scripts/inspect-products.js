const fs = require('fs');
const https = require('https');

const rawInput = `
Wash
src="https://static.wixstatic.com/media/f0347b_a6d44a9dff214ee6a8fd63f7d723e010~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_a6d44a9dff214ee6a8fd63f7d723e010~mv2.jpg" 
https://static.wixstatic.com/media/f0347b_63908610fdeb45f3a8d2041d46f8e848~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_63908610fdeb45f3a8d2041d46f8e848~mv2.jpg 
src="https://static.wixstatic.com/media/f0347b_9b40229f5d5e4c91956b0219d5874c49~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_9b40229f5d5e4c91956b0219d5874c49~mv2.jpg" 
src="https://static.wixstatic.com/media/f0347b_36670fce779a4a78b52c35dc88d525c2~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_36670fce779a4a78b52c35dc88d525c2~mv2.jpg" 
https://static.wixstatic.com/media/f0347b_c8738ee6fd254f139a6ef7a9a4899dfd~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_c8738ee6fd254f139a6ef7a9a4899dfd~mv2.jpg 
https://static.wixstatic.com/media/fb0f16_5ad9b57500b443588ed443ef35b4d5e0~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_5ad9b57500b443588ed443ef35b4d5e0~mv2.png 
https://static.wixstatic.com/media/fb0f16_2e5fe3e1839a434aa0fd7dccb573f5b3~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_2e5fe3e1839a434aa0fd7dccb573f5b3~mv2.png 
https://static.wixstatic.com/media/fb0f16_251788a26da24113b9034e26213a92c5~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_251788a26da24113b9034e26213a92c5~mv2.png 
https://static.wixstatic.com/media/fb0f16_2f480793c98241c1a0fb78dcfa057040~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_2f480793c98241c1a0fb78dcfa057040~mv2.png 
https://static.wixstatic.com/media/f0347b_6deb599a75884ded9b8eb7de77eeffe0~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_6deb599a75884ded9b8eb7de77eeffe0~mv2.png 
https://static.wixstatic.com/media/f0347b_822fd3f9f83f4be9abcd5550c51a8895~mv2.png/v1/fill/w_240,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_822fd3f9f83f4be9abcd5550c51a8895~mv2.png 
https://static.wixstatic.com/media/fb0f16_81b202cf5d40490e98b738d4bbd4e219~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_81b202cf5d40490e98b738d4bbd4e219~mv2.png 
https://static.wixstatic.com/media/fb0f16_f7b0f9ffd4734054a687065744e88c5d~mv2.png/v1/fill/w_240,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_f7b0f9ffd4734054a687065744e88c5d~mv2.png 
https://static.wixstatic.com/media/f0347b_82e91fe057d44c2e8c7c86f2ca21153e~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_82e91fe057d44c2e8c7c86f2ca21153e~mv2.png 
https://static.wixstatic.com/media/f0347b_3816ea7e15e74c16af2eca42a9ffe0a7~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_3816ea7e15e74c16af2eca42a9ffe0a7~mv2.png 
https://static.wixstatic.com/media/f0347b_a448312371be487eb6d33631da13c48e~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_a448312371be487eb6d33631da13c48e~mv2.png 

drying
https://static.wixstatic.com/media/fb0f16_fa5089f8146a47cba7ae2b14a7b896b2~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_fa5089f8146a47cba7ae2b14a7b896b2~mv2.png 
https://static.wixstatic.com/media/fb0f16_3e6bb4b0409d4bc3a13568758f324dbc~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_3e6bb4b0409d4bc3a13568758f324dbc~mv2.png 
https://static.wixstatic.com/media/fb0f16_ddd47b541caa4dd0b485cc8be7e83226~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_ddd47b541caa4dd0b485cc8be7e83226~mv2.png 
https://static.wixstatic.com/media/fb0f16_30895e9e67794c45bbbb88a624b687b0~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_30895e9e67794c45bbbb88a624b687b0~mv2.png 
https://static.wixstatic.com/media/fb0f16_9bb1bafcb80441918c1cdf4d47677e01~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_9bb1bafcb80441918c1cdf4d47677e01~mv2.png 
https://static.wixstatic.com/media/fb0f16_a461944586c442de87dcdb5fd1a995ac~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_a461944586c442de87dcdb5fd1a995ac~mv2.png 

Brushes
https://static.wixstatic.com/media/f0347b_a6d44a9dff214ee6a8fd63f7d723e010~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_a6d44a9dff214ee6a8fd63f7d723e010~mv2.jpg 
https://static.wixstatic.com/media/f0347b_63908610fdeb45f3a8d2041d46f8e848~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_63908610fdeb45f3a8d2041d46f8e848~mv2.jpg 
https://static.wixstatic.com/media/f0347b_9b40229f5d5e4c91956b0219d5874c49~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_9b40229f5d5e4c91956b0219d5874c49~mv2.jpg 
https://static.wixstatic.com/media/f0347b_c8738ee6fd254f139a6ef7a9a4899dfd~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_c8738ee6fd254f139a6ef7a9a4899dfd~mv2.jpg 
https://static.wixstatic.com/media/fb0f16_8072ceb7029f4706a45287673bc73fea~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_8072ceb7029f4706a45287673bc73fea~mv2.png 
https://static.wixstatic.com/media/fb0f16_7eae1f6d3305436887affbc57ba12a91~mv2.png/v1/fill/w_223,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_7eae1f6d3305436887affbc57ba12a91~mv2.png 
https://static.wixstatic.com/media/fb0f16_6c77980e3cb94c9fac2b547867e869ce~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_6c77980e3cb94c9fac2b547867e869ce~mv2.png 
https://static.wixstatic.com/media/fb0f16_5eb0fbe25f39487482c7a395076acf72~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_5eb0fbe25f39487482c7a395076acf72~mv2.png 
https://static.wixstatic.com/media/fb0f16_76b18a607cea4a8d88d7369b2f54a30d~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_76b18a607cea4a8d88d7369b2f54a30d~mv2.png 
https://static.wixstatic.com/media/fb0f16_0af29aec3f5e4a708eaa304e6da69411~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_0af29aec3f5e4a708eaa304e6da69411~mv2.png 
https://static.wixstatic.com/media/fb0f16_cc5272f92154455d97b3235e6c4c3a53~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_cc5272f92154455d97b3235e6c4c3a53~mv2.png 
https://static.wixstatic.com/media/fb0f16_af1aa787235d4c9b9163ffe7014b81f4~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_af1aa787235d4c9b9163ffe7014b81f4~mv2.png 
https://static.wixstatic.com/media/fb0f16_8b04389813e442feb0a16b726d0f0462~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_8b04389813e442feb0a16b726d0f0462~mv2.png 
https://static.wixstatic.com/media/fb0f16_8cb1f2c45f9d4fb5b49c1bb0b4771df1~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_8cb1f2c45f9d4fb5b49c1bb0b4771df1~mv2.png 

Claybars
https://static.wixstatic.com/media/fb0f16_17b2140cc8e5429dbe4a35e0034b3695~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_17b2140cc8e5429dbe4a35e0034b3695~mv2.png 
https://static.wixstatic.com/media/f0347b_fb9ac8f2acd64cc390af710b87bcc421~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_fb9ac8f2acd64cc390af710b87bcc421~mv2.png 
https://static.wixstatic.com/media/f0347b_9c9a7ba9461f4d56a77c9b597482d2ee~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_9c9a7ba9461f4d56a77c9b597482d2ee~mv2.png 
https://static.wixstatic.com/media/f0347b_ab4d30f7d90e446f9cc896daf2dc30fb~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_ab4d30f7d90e446f9cc896daf2dc30fb~mv2.png 

Microfiber & Tools
https://static.wixstatic.com/media/f0347b_a6d44a9dff214ee6a8fd63f7d723e010~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_a6d44a9dff214ee6a8fd63f7d723e010~mv2.jpg 
https://static.wixstatic.com/media/f0347b_f01ee22885184c358d41bd1db56be507~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_f01ee22885184c358d41bd1db56be507~mv2.jpg 
https://static.wixstatic.com/media/f0347b_d21057a92e0e4c0fb39166cc6032ff58~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_d21057a92e0e4c0fb39166cc6032ff58~mv2.jpg 
https://static.wixstatic.com/media/f0347b_9b40229f5d5e4c91956b0219d5874c49~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_9b40229f5d5e4c91956b0219d5874c49~mv2.jpg 
https://static.wixstatic.com/media/f0347b_67211400323c4bb2ad5930bb2ee4a5aa~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_67211400323c4bb2ad5930bb2ee4a5aa~mv2.jpg 
https://static.wixstatic.com/media/fb0f16_c08fff1b3ec34dd49efd6fbc141e2133~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_c08fff1b3ec34dd49efd6fbc141e2133~mv2.png 
https://static.wixstatic.com/media/fb0f16_3f7d6c4167d8455c9e09ad35573f3650~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_3f7d6c4167d8455c9e09ad35573f3650~mv2.png 
https://static.wixstatic.com/media/fb0f16_94c13fccabcf45748c6ce50219d106a4~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_94c13fccabcf45748c6ce50219d106a4~mv2.png 
https://static.wixstatic.com/media/fb0f16_5a648405c91c46888f1fe258237a44ed~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_5a648405c91c46888f1fe258237a44ed~mv2.png 
https://static.wixstatic.com/media/fb0f16_6964e0a62c1e451fa0e816b7942bba02~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_6964e0a62c1e451fa0e816b7942bba02~mv2.png 
https://static.wixstatic.com/media/f0347b_470c2b93f2fb4133b21b66ed0bc7a1c0~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_470c2b93f2fb4133b21b66ed0bc7a1c0~mv2.png 
https://static.wixstatic.com/media/fb0f16_2b035d4bdb57493d9272dedb8b1a0ea7~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_2b035d4bdb57493d9272dedb8b1a0ea7~mv2.png 
https://static.wixstatic.com/media/f0347b_cb859da0a7054542b1364d5e69cf2343~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_cb859da0a7054542b1364d5e69cf2343~mv2.png 
https://static.wixstatic.com/media/fb0f16_3115652898d54b3fb025500cb54ea0ca~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_3115652898d54b3fb025500cb54ea0ca~mv2.png 
https://static.wixstatic.com/media/f0347b_796a5415ea9f4e8a83a6bdb25288cf69~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_796a5415ea9f4e8a83a6bdb25288cf69~mv2.png 
https://static.wixstatic.com/media/f0347b_1e2227ee47624396bc472bff901ea7db~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_1e2227ee47624396bc472bff901ea7db~mv2.png 
https://static.wixstatic.com/media/f0347b_98c711b571294eadbdf5bf2e9a7b574c~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_98c711b571294eadbdf5bf2e9a7b574c~mv2.png 
https://static.wixstatic.com/media/fb0f16_e8f6ead9739e4634b46024cfeb31c5b2~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_e8f6ead9739e4634b46024cfeb31c5b2~mv2.png 
https://static.wixstatic.com/media/f0347b_e0d81042099340829fa88c5946d15426~mv2.jpg/v1/fill/w_240,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_e0d81042099340829fa88c5946d15426~mv2.jpg 
https://static.wixstatic.com/media/f0347b_16dc6ced81b0475bb9f7f40a6a97c0d5~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_16dc6ced81b0475bb9f7f40a6a97c0d5~mv2.png 
https://static.wixstatic.com/media/f0347b_e0383b8dea414eeabb04b18cd69d106e~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_e0383b8dea414eeabb04b18cd69d106e~mv2.png 
https://static.wixstatic.com/media/f0347b_be3f2460eaa84664beeb217743435786~mv2.png/v1/fill/w_240,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_be3f2460eaa84664beeb217743435786~mv2.png 
https://static.wixstatic.com/media/f0347b_19d16cb5617049329f000b798fc68b3f~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_19d16cb5617049329f000b798fc68b3f~mv2.png 
https://static.wixstatic.com/media/f0347b_bc301452802d4bc1976f879324a6d4d6~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_bc301452802d4bc1976f879324a6d4d6~mv2.png 
https://static.wixstatic.com/media/f0347b_0e963169f69b4e60a21aea0eccec629d~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_0e963169f69b4e60a21aea0eccec629d~mv2.png 

Polishing pads
https://static.wixstatic.com/media/f0347b_850c49fa6f04402bb3081c40117370c9~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_850c49fa6f04402bb3081c40117370c9~mv2.jpg 
https://static.wixstatic.com/media/f0347b_1146fb2c4014407c9ac76a887f894052~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_1146fb2c4014407c9ac76a887f894052~mv2.png 
https://static.wixstatic.com/media/f0347b_09568ab900d347cbb59a56201cdff9d9~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_09568ab900d347cbb59a56201cdff9d9~mv2.png 
https://static.wixstatic.com/media/f0347b_2541ccabd0d0492faa91f26d1eaf912c~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0347b_2541ccabd0d0492faa91f26d1eaf912c~mv2.png 
https://static.wixstatic.com/media/fb0f16_0f835f5c823b4850bb104e2f0c9d342c~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_0f835f5c823b4850bb104e2f0c9d342c~mv2.png 
https://static.wixstatic.com/media/fb0f16_6b165d72d92a44f3979edb18ee6d7684~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_6b165d72d92a44f3979edb18ee6d7684~mv2.png 
https://static.wixstatic.com/media/fb0f16_78489de9f31c4efa9c243b0b423414e1~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_78489de9f31c4efa9c243b0b423414e1~mv2.png 
https://static.wixstatic.com/media/fb0f16_e6e7cce97fcd40d283d66dfdad0edef6~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb0f16_e6e7cce97fcd40d283d66dfdad0edef6~mv2.png
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
    const lines = rawInput.split('\n').map(l => l.trim()).filter(Boolean);
    const results = [];
    lines.forEach(line => {
      const isCat = ['Wash', 'drying', 'Brushes', 'Claybars', 'Microfiber & Tools', 'Polishing pads'].find(c => c.toLowerCase() === line.toLowerCase());
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
          category: currentCategory,
          mediaKey,
          url: cleanUrl,
          matched: matched ? { loc: matched.loc, title: matched.title } : 'NOT_FOUND_IN_SITEMAP'
        });
      }
    });

    fs.writeFileSync('scripts/mapped-products.json', JSON.stringify(results, null, 2));
    console.log('Saved mapped products:', results.length);
  });
});
