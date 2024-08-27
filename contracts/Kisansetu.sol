// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Kisansetu {
    address public farmer;
    address public buyer;
    uint public price;
    string public crop;

    bool public isFulfilled;

    constructor(address _buyer, uint _price, string memory _crop) {
        farmer = msg.sender;
        buyer = _buyer;
        price = _price;
        crop = _crop;
        isFulfilled = false;
    }

    function fulfillContract() public payable {
        require(msg.sender == buyer, "Only the buyer can fulfill the contract.");
        require(msg.value == price, "Incorrect value sent.");

        payable(farmer).transfer(msg.value);
        isFulfilled = true;
    }
}
