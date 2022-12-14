// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Pirates = await hre.ethers.getContractFactory("Pirates");
  const contract = await Pirates.deploy(
    "https://piratesnft.mypinata.cloud/ipfs/QmVWrzyP1yEywoPaD3eFdNv2UuQRENmpMDp6S136CsGPYD"
  );

  await contract.deployed();

  console.log("deployed to:", contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
//https://rinkeby.etherscan.io/address/0x044f31fbef9e2Fd0732B8B9fDb17dE7f1EB4db9d#readContract
//whitelist -> 0xcD6F5a34Dda72595a3870b45c10afD55a655EcB8
//waitlist -> 0x228466112692dC27D7C7C7C62c65f7097B5323cc
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });