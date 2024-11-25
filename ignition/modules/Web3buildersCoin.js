

// using the Hardhat ignition to malnage smart contract deployments

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const { ethers } = require("hardhat");

module.exports = buildModule("Web3Builder", (m) => {
    const name = m.getParameter("name", "Web3Builder");
    const symbol = m.getParameter("symbol", "WE3");
    const initialSupply = m.getParameter("initialSupply", 1000000);
    
    // ethers.provider.getBalance("0x224057fbef1379d5BFa371ee778A6a5982990E82")
    // .then(balance => console.log("Balance: ", balance.toString()));

    const token = m.contract("Web3Builder", [name, symbol, initialSupply]);
    
    console.log(`Deployed ${name} with symbol ${symbol} and initial supply ${initialSupply}: ${token.address}`);

    return { token };
});