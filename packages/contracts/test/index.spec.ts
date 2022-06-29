import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { Contract } from "ethers";
import { ethers } from "hardhat";

describe("Generic contract pre sale transactions", function () {
  let contract: Contract;

  const sign = async (
    signer: SignerWithAddress,
    sender: SignerWithAddress
  ): Promise<string> => {
    return await signer.signMessage(
      ethers.utils.arrayify(
        `0x000000000000000000000000${sender.address.substring(2)}`
      )
    );
  };

  beforeEach(async () => {
    const accounts = await ethers.getSigners();
    const GenericContract = await ethers.getContractFactory("GenericContract");
    contract = await GenericContract.deploy(
      8888,
      10,
      ethers.utils.parseEther("0.007"),
      ethers.utils.parseEther("0.01"),
      Math.floor(new Date("2022-12-31T00:00:00Z").getTime() / 1000),
      Math.floor(new Date("2022-12-31T00:00:00Z").getTime() / 1000),
      Math.floor(new Date("2022-12-31T00:00:00Z").getTime() / 1000),
      accounts[0].address
    );
    await contract.deployed();
  });

  it("Should throw PreSaleNotStarted error", async function () {
    await contract.setPrSaleTime(Math.floor(new Date().getTime() / 1000 + 60));

    const accounts = await ethers.getSigners();
    const signer = accounts[0];
    const sender = accounts[1];

    const signature = await sign(signer, sender);

    try {
      await contract.connect(sender).preSaleMint(1, signature);
    } catch (error: any) {
      expect(error.message as string).to.include("PreSaleNotStarted()");
    }
  });

  it("Should throw PreSaleEnded error", async function () {
    await contract.setPuSaleTime(Math.floor(new Date().getTime() / 1000 - 60));

    const accounts = await ethers.getSigners();
    const signer = accounts[0];
    const sender = accounts[1];

    const signature = await sign(signer, sender);

    try {
      await contract.connect(sender).preSaleMint(1, signature);
    } catch (error: any) {
      expect(error.message as string).to.include("PreSaleEnded()");
    }
  });

  it("Should throw NotWhitelisted error", async function () {
    await contract.setPrSaleTime(Math.floor(new Date().getTime() / 1000 - 60));
    await contract.setPuSaleTime(Math.floor(new Date().getTime() / 1000 + 60));

    const accounts = await ethers.getSigners();
    const signer = accounts[0];
    const sender = accounts[1];

    const signature = await sign(signer, sender);

    try {
      await contract.connect(accounts[2]).preSaleMint(1, signature);
    } catch (error: any) {
      expect(error.message as string).to.include("NotWhitelisted()");
    }
  });

  it("Should throw ExceedMaxSupply error", async function () {
    await contract.setPrSaleTime(Math.floor(new Date().getTime() / 1000 - 60));
    await contract.setPuSaleTime(Math.floor(new Date().getTime() / 1000 + 60));
    await contract.setMaxSupply(5);

    const accounts = await ethers.getSigners();
    const signer = accounts[0];
    const sender = accounts[1];

    const signature = await sign(signer, sender);

    try {
      await contract.connect(sender).preSaleMint(10, signature);
    } catch (error: any) {
      expect(error.message as string).to.include("ExceedMaxSupply()");
    }
  });

  it("Should throw ExceedMaxAmount error", async function () {
    await contract.setPrSaleTime(Math.floor(new Date().getTime() / 1000 - 60));
    await contract.setPuSaleTime(Math.floor(new Date().getTime() / 1000 + 60));
    await contract.setMaxPerAccount(2);

    const accounts = await ethers.getSigners();
    const signer = accounts[0];
    const sender = accounts[1];

    const signature = await sign(signer, sender);

    try {
      await contract.connect(sender).preSaleMint(5, signature);
    } catch (error: any) {
      expect(error.message as string).to.include("ExceedMaxAmount()");
    }
  });

  it("Should throw ValueTooLow error", async function () {
    await contract.setPrSaleTime(Math.floor(new Date().getTime() / 1000 - 60));
    await contract.setPuSaleTime(Math.floor(new Date().getTime() / 1000 + 60));

    const accounts = await ethers.getSigners();
    const signer = accounts[0];
    const sender = accounts[1];

    const signature = await sign(signer, sender);

    try {
      await contract.connect(sender).preSaleMint(1, signature);
    } catch (error: any) {
      expect(error.message as string).to.include("ValueTooLow()");
    }
  });

  it("Should complete the transaction", async function () {
    await contract.setPrSaleTime(Math.floor(new Date().getTime() / 1000 - 60));
    await contract.setPuSaleTime(Math.floor(new Date().getTime() / 1000 + 60));

    const accounts = await ethers.getSigners();
    const signer = accounts[0];
    const sender = accounts[1];

    const signature = await sign(signer, sender);

    await contract.connect(sender).preSaleMint(1, signature, {
      value: (await contract.preSalePrice()) * 1,
    });
  });
});

describe("Generic contract public sale transactions", function () {
  let contract: Contract;

  beforeEach(async () => {
    const accounts = await ethers.getSigners();
    const GenericContract = await ethers.getContractFactory("GenericContract");
    contract = await GenericContract.deploy(
      8888,
      10,
      ethers.utils.parseEther("0.007"),
      ethers.utils.parseEther("0.01"),
      Math.floor(new Date("2022-12-31T00:00:00Z").getTime() / 1000),
      Math.floor(new Date("2022-12-31T00:00:00Z").getTime() / 1000),
      Math.floor(new Date("2022-12-31T00:00:00Z").getTime() / 1000),
      accounts[0].address
    );
    await contract.deployed();
  });

  it("Should throw PubSaleNotStarted error", async function () {
    await contract.setPuSaleTime(Math.floor(new Date().getTime() / 1000 + 60));

    const accounts = await ethers.getSigners();
    const sender = accounts[1];

    try {
      await contract.connect(sender).pubSaleMint(1);
    } catch (error: any) {
      expect(error.message as string).to.include("PubSaleNotStarted()");
    }
  });

  it("Should throw ExceedMaxSupply error", async function () {
    await contract.setPuSaleTime(Math.floor(new Date().getTime() / 1000 - 60));
    await contract.setMaxSupply(5);

    const accounts = await ethers.getSigners();
    const sender = accounts[1];

    try {
      await contract.connect(sender).pubSaleMint(10);
    } catch (error: any) {
      expect(error.message as string).to.include("ExceedMaxSupply()");
    }
  });

  it("Should throw ExceedMaxAmount error", async function () {
    await contract.setPuSaleTime(Math.floor(new Date().getTime() / 1000 - 60));
    await contract.setMaxPerAccount(2);

    const accounts = await ethers.getSigners();
    const sender = accounts[1];

    try {
      await contract.connect(sender).pubSaleMint(5);
    } catch (error: any) {
      expect(error.message as string).to.include("ExceedMaxAmount()");
    }
  });

  it("Should throw ValueTooLow error", async function () {
    await contract.setPuSaleTime(Math.floor(new Date().getTime() / 1000 - 60));

    const accounts = await ethers.getSigners();
    const sender = accounts[1];

    try {
      await contract.connect(sender).pubSaleMint(1);
    } catch (error: any) {
      expect(error.message as string).to.include("ValueTooLow()");
    }
  });

  it("Should complete the transaction", async function () {
    await contract.setPuSaleTime(Math.floor(new Date().getTime() / 1000 - 60));

    const accounts = await ethers.getSigners();
    const sender = accounts[1];

    await contract.connect(sender).pubSaleMint(1, {
      value: `${(await contract.pubSalePrice()) * 1}`,
    });
  });
});

describe("Generic contract setters", function () {
  let contract: Contract;

  beforeEach(async () => {
    const accounts = await ethers.getSigners();
    const GenericContract = await ethers.getContractFactory("GenericContract");
    contract = await GenericContract.deploy(
      8888,
      10,
      ethers.utils.parseEther("0.007"),
      ethers.utils.parseEther("0.01"),
      Math.floor(new Date("2022-12-31T00:00:00Z").getTime() / 1000),
      Math.floor(new Date("2022-12-31T00:00:00Z").getTime() / 1000),
      Math.floor(new Date("2022-12-31T00:00:00Z").getTime() / 1000),
      accounts[0].address
    );
    await contract.deployed();
  });

  it("Should change the current max supply", async function () {
    const maxSupply = 7777;
    await contract.setMaxSupply(maxSupply);
    expect(await contract.maxSupply()).to.equal(maxSupply);
  });

  it("Should change the current max per account", async function () {
    const maxPerAccount = 10;
    await contract.setMaxPerAccount(maxPerAccount);
    expect(await contract.maxPerAccount()).to.equal(maxPerAccount);
  });

  it("Should change the current pre sale price", async function () {
    const preSalePrice = ethers.utils.parseEther("0.006");
    await contract.setPreSalePrice(preSalePrice);
    expect(await contract.preSalePrice()).to.equal(preSalePrice);
  });

  it("Should change the current public sale price", async function () {
    const pubSalePrice = ethers.utils.parseEther("0.006");
    await contract.setPubSalePrice(pubSalePrice);
    expect(await contract.pubSalePrice()).to.equal(pubSalePrice);
  });

  it("Should change the current base uri", async function () {
    const baseUri = "ipfs://newbaseuri";
    await contract.setBaseUri(baseUri);
    expect(await contract.baseUri()).to.equal(baseUri);
  });

  it("Should change the current unrevealed uri", async function () {
    const unrevealedUri = "ipfs://newunrevealeduri";
    await contract.setUnreUri(unrevealedUri);
    expect(await contract.unreUri()).to.equal(unrevealedUri);
  });

  it("Should change the current pre sale time", async function () {
    const prSaleTime = new Date("2022-06-25T19:00:00Z").getTime() / 1000;
    await contract.setPrSaleTime(prSaleTime);
    expect(await contract.prSaleTime()).to.equal(prSaleTime);
  });

  it("Should change the current public sale time", async function () {
    const puSaleTime = new Date("2022-06-25T20:00:00Z").getTime() / 1000;
    await contract.setPuSaleTime(puSaleTime);
    expect(await contract.puSaleTime()).to.equal(puSaleTime);
  });

  it("Should change the current reveal time", async function () {
    const revealTime = new Date("2022-06-30T00:00:00Z").getTime() / 1000;
    await contract.setRevealTime(revealTime);
    expect(await contract.revealTime()).to.equal(revealTime);
  });

  it("Should change the current signer", async function () {
    const account = (await ethers.getSigners())[2].address;
    await contract.setPasswordSigner(account);
    expect(await contract.passwordSigner()).to.equal(account);
  });
});
