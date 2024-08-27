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
      network_id: 7001, // ZetaChain network ID
      gas: 4500000, // Gas limit
      gasPrice: 10000000000, // Gas price in wei
      networkCheckTimeout: 100000, // Network check timeout in ms
    },
  },
  compilers: {
    solc: {
      version: "0.8.0" // Specify the Solidity compiler version
    }
  }
};
