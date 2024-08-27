# Kisansetu

Kisansetu is a comprehensive platform designed to facilitate assured contract farming agreements between farmers and buyers. The platform leverages blockchain technology to ensure secure contracts, timely payments, transparent communication, and effective price negotiation.

## Features

- **Secure Contracts**: Use blockchain smart contracts to ensure the integrity of agreements between farmers and buyers.
- **Timely Payments**: Automate payments and ensure timely transactions through the smart contract system.
- **Transparent Communication**: Integrated communication tools for direct interaction between farmers and buyers.
- **Price Negotiation**: Real-time price negotiation features embedded within the communication tool.
- **Blockchain Integration**: Built on blockchain technology for enhanced security and transparency.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Firebase (Authentication and Firestore)
- **Blockchain**: Ethereum, Solidity, ZetaChain
- **Development Framework**: Truffle for smart contract development and testing, Ganache CLI for local blockchain testing

## Getting Started

### Prerequisites

- Node.js and npm installed
- Truffle framework
- Ganache CLI installed (`npm install -g ganache-cli`)
- A Firebase project
- MetaMask wallet (for Ethereum transactions)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/kisansetu.git
   cd kisansetu
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set Up Firebase:**

   - Create a Firebase project and configure authentication and Firestore.
   - Update the Firebase configuration in `firebase-config.js` with your project details.

4. **Start Ganache CLI:**

   ```bash
   ganache-cli
   ```

5. **Compile and Migrate Smart Contracts:**

   Update `truffle-config.cjs` to use the local Ganache network:

   ```js
   const HDWalletProvider = require('@truffle/hdwallet-provider');
   require('dotenv').config();

   module.exports = {
     networks: {
       development: {
         host: "127.0.0.1",
         port: 7545, // Default Ganache port
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
   ```

   Compile and migrate the smart contracts:

   ```bash
   truffle compile --config truffle-config.cjs
   truffle migrate --config truffle-config.cjs --network zetachain
   ```

   (Parallely run `ganache-cli` and replace `zetachain` with `development` if deploying locally on ganache.)
   

7. **Start the Development Server:**

   ```bash
   npm start
   ```

8. **Access the Application:**

   Open your browser and navigate to `http://localhost:5000`.

## Usage

- **Authentication**: Users can sign up and log in using Firebase Authentication.
- **Create Agreement**: Farmers can create new agreements and buyers can view and accept them.
- **View Dashboard**: Users can view their agreements and track the status from the dashboard.

## Testing

- **Run Tests**: Execute smart contract tests using Truffle.

   ```bash
   truffle test --config truffle-config.cjs
   ```

## Contributing

We welcome contributions to improve Kisansetu! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
