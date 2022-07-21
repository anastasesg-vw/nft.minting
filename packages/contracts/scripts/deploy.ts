import { ethers } from "hardhat";

async function main() {
  const GenericContractFactory = await ethers.getContractFactory(
    "GenericContract"
  );
  const GenericTokenFactory = await ethers.getContractFactory("GenericToken");
  const GenericStakerFactory = await ethers.getContractFactory("GenericStaker");

  const GenericContract = await GenericContractFactory.deploy(
    8888,
    100,
    ethers.utils.parseEther("0.0026"),
    ethers.utils.parseEther("0.003"),
    new Date("2022-07-20T15:00:00Z").getTime() / 1000,
    new Date("2022-07-20T15:00:00Z").getTime() / 1000,
    new Date("2022-07-20T15:00:00Z").getTime() / 1000,
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
  );
  const GenericTokenContract = await GenericTokenFactory.deploy();
  const GenericStakerContract = await GenericStakerFactory.deploy(
    GenericContract.address,
    GenericTokenContract.address
  );

  await GenericContract.deployed();
  await GenericTokenContract.deployed();
  await GenericStakerContract.deployed();

  await GenericContract.setBaseUri(
    "ipfs://bafybeigog4irc3lzlpjlp4m4wworae4ymkqeeuky5q5yyxqkl22pse42ki/"
  );

  console.log("Contract deployed to:", GenericContract.address);
  console.log("Token deployed to:", GenericTokenContract.address);
  console.log("Staker deployed to:", GenericStakerContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
