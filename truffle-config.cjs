const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545, // Default Ganache port
      network_id: "*", // Match any network id
    },
    zetachain: {
      provider: () => new HDWalletProvider(
        process.env.MNEMONIC, 
        'https://zetachain-athens-evm.blockpi.network/v1/rpc/public'
      ),
      network_id: 7001,
      gas: 4500000,
      gasPrice: 10000000000,
    },
  },
  compilers: {
    solc: {
      version: "0.8.0"
    }
  }
};
