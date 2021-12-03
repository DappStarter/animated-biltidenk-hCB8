require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture infant forget seed edge rare remain essay hockey person flip slab'; 
let testAccounts = [
"0xf448538686b151a80882a6ab44bde523a23fde581e3eb7b4974c6d76daa6c27e",
"0x5b6b7ec6ba761b29ba71ca4a711b5a78a3a6cc9a044ce322e6fe331cb6aca49c",
"0x00e09cbf75451e9a66d89b1f2aa5f9c625ad865a4d993e9a419212639c33fbbf",
"0x6c597aeac0a5620ded9533611c6153de8d322c9dddf4baa38e86778b0ea029ff",
"0xa35cc0f1785db51cb2c80f1db30b9f8cd6794d4abb1fce6d6bee091b3b8acda6",
"0x6fd913f200d29e053d58d98ace9ac3b1f97a6729dadea84660e5f822a1989a29",
"0x13023b480066355776e28f17bf5d03a07b23b962b392269e7ebfbc45506518fc",
"0x8fde9fdcabc73345c7e414faf0e3acca87ca05ce1866a9db94664853c1ad1e93",
"0xff16601b6ee7ddbaa3f5abf564079d72b202b4612bacac44f748ea2b88546dc8",
"0x8a7849f7d6f1a8534e0a09132ad92d5b276eff1485e5c5d0b6d4f56f078157e5"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

