const Kisansetu = artifacts.require("Kisansetu");

module.exports = function(deployer) {
  const buyerAddress = '0x0000ecb8cdd25a18f12daa23f6422e07fbf8b9e1'; // Replace with actual buyer address
  const price = web3.utils.toWei('1', 'ether'); // Replace with actual price
  const crop = 'Wheat'; // Replace with actual crop name

  deployer.deploy(Kisansetu, buyerAddress, price, crop);
};
