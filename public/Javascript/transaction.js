if (typeof window.ethereum !== 'undefined') {
  console.log('MetaMask is installed!');

  // Initialize Web3 with MetaMask as the provider
  
  // Request access to MetaMask accounts
  window.ethereum.request({ method: 'eth_requestAccounts' })
  .then(accounts => {
    console.log('Connected account:', accounts[0]);
  })
  .catch(error => {
    console.error('Error accessing MetaMask:', error);
  });
  
} else {
  alert('Please install MetaMask to use this feature.');
}
const web3 = new Web3(window.ethereum);
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
  ];// transaction.js

  
  const contractAddress = '0xe9498ABB98981eC081E6AE9A79406A3189BF1441'; // Your deployed contract address
  
  const contract = new web3.eth.Contract(contractABI, contractAddress);
  
  async function fulfillContract() {
    try {
        // Request the user's MetaMask accounts
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const buyerAddress = accounts[0]; // Use the first account from MetaMask

        // Retrieve the price from the input field (in ETH) and convert it to Wei
        const priceInput = document.getElementById('price').value;
        const priceInWei = web3.utils.toWei(priceInput, 'ether'); // Convert price to Wei

        // Send the transaction to fulfill the contract
        const receipt = await contract.methods.fulfillContract().send({
            from: buyerAddress,
            value: priceInWei // Send the value in Wei
        });

        // Display the transaction status
        console.log('Transaction successful:', receipt);
        document.getElementById('transactionStatus').innerText = 'Transaction successful! Transaction hash: ' + receipt.transactionHash;

    } catch (error) {
        // Handle errors and show them in the frontend
        console.error('Transaction error:', error);
        document.getElementById('transactionStatus').innerText = 'Transaction failed: ' + error.message;
    }
}


  document.getElementById('fulfillButton').addEventListener('click', fulfillContract);
  