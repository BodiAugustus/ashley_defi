const HDWalletProvider = require('@truffle/hdwallet-provider');
const keys = require('./keys.json');

module.exports = {
  contracts_build_directory: './public/contracts',
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*',
    },
    ftm: {
      provider: () =>
        new HDWalletProvider({
          mnemonic: {
            phrase: keys.MNEMONIC,
          },
          providerOrUrl: 'https://rpcapi.fantom.network',
          addressIndex: 5,
        }),
      network_id: 250,
      gas: 8500000, // gas limit
      gasPrice: 435000000000, //price per unit of gas
      confirmations: 3, // blocks to wait before deployment
      timeoutBlocks: 10,
    },
    // ropsten: {
    //   provider: () =>
    //   new HDWalletProvider({
    //     mnemonic: {
    //       phrase: keys.MNEMONIC
    //     },
    //     providerOrUrl: `https://ropsten.infura.io/v3/${keys.INFURA_PROJECT_ID}`,
    //     addressIndex: 0
    //   }),
    //   network_id: 3,
    //   gas: 7500000, // gas limit
    //   gasPrice: 133000000000,//price per unit of gas
    //   confirmations: 2, // blocks to wait before deployment
    //   timeoutBlocks: 10
    // }
  },
  compilers: {
    solc: {
      version: '0.8.4',
    },
  },
};

//transaction hash:    0xa117005a2d4ce8e907ee3e3e92d182a6669b83ba4d83f2ecbeb907d45912c017
//contract address:    0x5920D5eCF3A5Ae7Bc2B9720212EF2a3d0B877b7A

//FTM
// > transaction hash:    0x2a430fc3dcfd526766c92e78b0416eb897f1323e5663962aa6c91bb17fb70e5b
// > Blocks: 0            Seconds: 0
// > contract address:    0xfa6d1029349B15285DfeF0ddCF45C420938df15E
