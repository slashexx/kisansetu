# Kisansetu 

KisanSetu is a comprehensive and innovative platform designed to revolutionize the agricultural sector by facilitating assured contract farming agreements between farmers and buyers. With KisanSetu, we aim to bridge the gap between small-scale farmers and large-scale buyers, ensuring both parties benefit from secure, transparent, and mutually beneficial contracts.

The platform leverages blockchain technology and integrates modern web solutions to create a seamless and efficient user experience for both farmers and buyers. Our system enables direct and fair negotiations, enhances communication, and guarantees timely payments through automated smart contracts, thereby promoting trust and long-term partnerships.

## Key Benefits

- Empower Farmers: By giving farmers direct access to a broader marketplace, KisanSetu enables them to negotiate fair prices for their crops without relying on middlemen, ensuring they receive better profits.
- Buyer Confidence: Buyers, including large-scale retailers, processors, and exporters, can rely on blockchain-backed contracts to assure quality, timely delivery, and fair prices for agricultural products.
- Efficient Dispute Resolution: Smart contracts help reduce the likelihood of disputes, and in case of disagreements, the platform’s transparent nature makes it easy to resolve issues through mutual consensus.
- Access to Insights: KisanSetu provides real-time market insights, helping both farmers and buyers make data-driven decisions regarding crop pricing, market demand, and supply chain management.
Simplified User Experience: Farmers and buyers, many of whom are not well-versed in blockchain technology, can interact with a simple, user-friendly interface that abstracts the complexity of blockchain, offering an intuitive experience.

## Features

- **Secure Contracts**: Use blockchain smart contracts to ensure the integrity of agreements between farmers and buyers.
- **Timely Payments**: Automate payments and ensure timely transactions through the smart contract system.
- **Transparent Communication**: Integrated communication tools for direct interaction between farmers and buyers.
- **Price Negotiation**: Real-time price negotiation features embedded within the communication tool.
- **Blockchain Integration**: Built on blockchain technology for enhanced security and transparency.

## Technologies Used

![HTML](https://skillicons.dev/icons?i=html)
![CSS](https://skillicons.dev/icons?i=css)
![JavaScript](https://skillicons.dev/icons?i=js)
![Node](https://skillicons.dev/icons?i=nodejs)
![Express](https://skillicons.dev/icons?i=express)
![Solidity](https://skillicons.dev/icons?i=solidity)
![Firebase](https://skillicons.dev/icons?i=firebase)
![Docker](https://skillicons.dev/icons?i=docker)


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

3. **Start Ganache CLI:**

   ```bash
   ganache-cli
   ```

4. **Compile and Migrate Smart Contracts:**

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
   (Also create a `.env` file with `MNEMONIC="your-mnemonic-here"`) <br>
   OR <br>
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
           mnemonic, // Add your mnemonic here!
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

5. **Compile and Migrate the Smart Contracts:**

   ```bash
   truffle compile --config truffle-config.cjs
   truffle migrate --config truffle-config.cjs --network zetachain
   ```

   (Parallely run `ganache-cli` and replace `zetachain` with `development` if deploying locally on Ganache.)

6. **Start the Development Server:**

   ```bash
   npm start
   ```

7. **Access the Application:**

   Open your browser and navigate to `http://localhost:5000`.

## User Setup for MetaMask

To interact with the ZetaChain network on your platform, users need to configure MetaMask to include the ZetaChain network. Follow these steps:

### Adding ZetaChain to MetaMask

1. **Open MetaMask**:
   - Click the MetaMask extension icon in your browser to open it.

2. **Go to Settings**:
   - Click the profile icon (your avatar) in the top-right corner of MetaMask.
   - From the dropdown menu, choose **Settings**.

3. **Select Networks**:
   - In the Settings menu, click on **Networks**. This is where you can manage and add custom networks.

4. **Add a Network**:
   - Click **Add a network** or **Add a network manually**. This will take you to a screen where you can add a custom network.

5. **Enter ZetaChain Details**:
   Fill out the form with the following details:

   - **Network Name**: ZetaChain
   - **New RPC URL**: `https://zetachain-athens-evm.blockpi.network/v1/rpc/public`
   - **Chain ID**: `7001`
   - **Currency Symbol**: `ZETA`
   - **Block Explorer URL**: (Leave blank or use an explorer URL if available)

   Here’s what it looks like:

   | Field               | Value                                                          |
   |---------------------|----------------------------------------------------------------|
   | **Network Name**     | ZetaChain                                                     |
   | **New RPC URL**      | `https://zetachain-athens-evm.blockpi.network/v1/rpc/public`   |
   | **Chain ID**         | `7001`                                                        |
   | **Currency Symbol**  | `ZETA`                                                        |
   | **Block Explorer URL** | (Optional) Leave blank or fill with explorer URL |

6. **Save**:
   - After entering the details, click the **Save** button.

7. **Switch to ZetaChain**:
   - After saving, MetaMask will switch to the newly added **ZetaChain** network. You can always switch back to other networks by clicking the network dropdown in MetaMask and selecting the network of your choice.

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
