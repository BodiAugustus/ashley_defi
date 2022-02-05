const HDWalletProvider = require("@truffle/hdwallet-provider")

module.exports = {
  contracts_build_directory: "./public/contracts",
  networks: {
    development: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*",
    },
    ropsten: {
      provider: () =>
      new HDWalletProvider({
        mnemonic: {
          phrase: ""
        },
        providerOrUrl: "https://ropsten.infura.io/v3/YOUR-PROJECT-ID",
        addressIndex: 0
      }),
      network_id: 3,
      gas: 7500000, // gas limit
      gasPrice: 113000000000,//price per unit of gas
      confirmations: 2, // blocks to wait before deployment
      timeoutBlocks: 10
    }
  },
  compilers: {
    solc: {
      version: "0.8.4",
    }
  }
}