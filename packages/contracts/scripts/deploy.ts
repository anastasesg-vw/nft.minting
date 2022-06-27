import { ethers } from "hardhat";

async function main() {
  const GenericContract = await ethers.getContractFactory("GenericContract");
  const genericContract = await GenericContract.deploy(
    8888,
    3,
    ethers.utils.parseEther("0.0026"),
    ethers.utils.parseEther("0.003"),
    new Date("2022-06-27T15:00:00Z").getTime() / 1000,
    new Date("2022-06-27T15:00:00Z").getTime() / 1000,
    new Date("2022-06-27T15:00:00Z").getTime() / 1000,
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
  );

  await genericContract.deployed();

  console.log("Contract deployed to:", genericContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
