require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture strong cost rifle comic hover kiwi equal gentle'; 
let testAccounts = [
"0x8a1c19072a6764e45c5be18c1e655677ef113bdb6bc540075fac6e80259ac39b",
"0xe737ebed1a9e8b5b85aac0f36f25c193b2b562db53f6dd6bb8e647456608689f",
"0x4bd8d774345ccba8b5741b53a5aac57513711ccb44e511fe6e91b241e36501e2",
"0x2c12da7dfef9d599f45a695e74a5c4ff85e43498ac0a136fc43b05100890b280",
"0x8ecf61ea9b255a2936e739b2fa0e9d7dce9e4e13f2f82bc968d6c8bd2babb212",
"0xf18c7cc54ffeb4a51f6516f9e6152ca88e1ceac275f8c8b932dc5ee0fb47f9d6",
"0x2019550426bbc3fb9809b5406a63a5d97914a925b15289c2201b2519cf7afaa6",
"0xbfb5620300e5d77ffe061c1ec1cb26de9ba1791d38a0d4aec13b4b48e2dabb78",
"0x6171577a5f9bd57cce28786247886f930d6d07c22d6a84af71df76d9d3534e35",
"0x809af65c9df85dcbc944a9f819d7469f98e151ab75af416f6a691734ec0dd439"
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

