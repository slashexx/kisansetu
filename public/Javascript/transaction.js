const Web3 = require('web3');
const web3 = new Web3('https://zetachain-athens-evm.blockpi.network/v1/rpc/public');

// Load your smart contract ABI and address
const contractABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_buyer",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_price",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_crop",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "buyer",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "crop",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "farmer",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "isFulfilled",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "price",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "fulfillContract",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    }
  ];
const contractAddress = '0xYourContractAddress';

const contract = new web3.eth.Contract(contractABI, contractAddress);

async function fulfillContract() {
    const accounts = await web3.eth.getAccounts();
    const buyerAddress = '0xBuyerAddress';
    const price = web3.utils.toWei('1', 'ether'); // Example price

    contract.methods.fulfillContract().send({
        from: buyerAddress,
        value: price
    })
    .on('receipt', function(receipt) {
        console.log('Transaction successful:', receipt);
    })
    .on('error', function(error) {
        console.error('Transaction error:', error);
    });
}
