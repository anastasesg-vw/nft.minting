import fs from "fs";
import * as dotenv from "dotenv";
import { ethers, Wallet } from "ethers";
import whitelist from "../config/whitelist.example.json" assert { type: "json" };
dotenv.config();

async function main() {
  const wallet = new Wallet(process.env.PRIVATE_KEY || "");
  const signedMessages = {};
  for (const index in whitelist.accounts) {
    if (Object.hasOwnProperty.call(whitelist.accounts, index)) {
      const account = whitelist.accounts[index];

      console.log(account);
      const signature = await wallet.signMessage(
        ethers.utils.arrayify(
          `0x000000000000000000000000${account.substring(2)}`,
        ),
      );
      console.log(`Signing ${account} :: ${signature}`);

      signedMessages[account.toLowerCase()] = signature;
    }
  }
  signedMessages.default =
    "0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
  fs.writeFileSync(
    "../frontend/config/signatures.json",
    JSON.stringify(signedMessages, null, 2),
    "utf8",
  );
}

main()
  .then(() => {
    console.log(
      "Signatures exported to packages/frontend/config/signatures.json",
    );
  })
  .catch((e) => {
    console.log(`There was an error exporting the files.\n${e.message}`);
  });
