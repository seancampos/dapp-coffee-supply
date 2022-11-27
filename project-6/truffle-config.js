
const HDWallet = require('truffle-hdwallet-provider');
const infuraKey = process.env.infuraKey;
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();
const mnemonic = process.env.memonic;
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    goerli: {
      provider: () => new HDWallet(mnemonic, 'https://goerli.infura.io/v3/'+ infuraKey),
      network_id: 5,
      networkCheckTimeout: 99999,
      // gas: 4465030,
      gasPrice: 10000000000,
    }
  },
  compilers: {
    solc: {
      version: "0.8.3",
    }
  }
};