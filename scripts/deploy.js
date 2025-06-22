const hre = require("hardhat");

async function main() {
  const RentalContract = await hre.ethers.getContractFactory("RentalContract");

  // Deploy the contract
  const rental = await RentalContract.deploy();

  // Wait for deployment transaction to be mined
  await rental.waitForDeployment();

  // Get the deployed address
  const address = await rental.getAddress();

  console.log(`RentalContract deployed to: ${address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
