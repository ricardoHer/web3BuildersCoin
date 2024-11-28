

// using the Hardhat ignition to malnage smart contract deployments

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const { ethers } = require("hardhat");

module.exports = buildModule("Web3Builder", (m) => {
    const name = m.getParameter("name", "Web3BuilderRickFranco");
    const symbol = m.getParameter("symbol", "WR3");
    const initialSupply = m.getParameter("initialSupply", 1000000);

    const token = m.contract("Web3Builder", [name, symbol, initialSupply]);    
    console.log(`Deployed ${name} with symbol ${symbol} and initial supply ${initialSupply}: ${token.address}`);

    return { token };
});