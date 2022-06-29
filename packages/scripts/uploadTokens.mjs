import { NFTStorage } from "nft.storage";
import { filesFromPath } from "files-from-path";
import path from "path";
import fs from "fs";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGEyN0VmZDZkRjA2MGMzM0Q4NUUzRjM1Q2ExN0RBZjQ4ZjI3M2QxYTciLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1NjE2MTgzOTE5NywibmFtZSI6ImFwZXMtZ2VuZXJhdGlvbi14In0.YCytRSLtL7AlNny66E0OAvgOivv04AXhaYrXy2R0dj0";

async function main() {
  if (process.argv.length !== 4) {
    console.error(
      `usage: ${process.argv[0]} ${process.argv[1]} <image-path> <metadata-path>`,
    );
  }

  const imagePath = process.argv[2];
  const metadataPath = process.argv[3];

  const imageFiles = filesFromPath(imagePath, {
    pathPrefix: path.resolve(imagePath),
  });

  const metadataFiles = filesFromPath(metadataPath, {
    pathPrefix: path.resolve(metadataPath),
  });

  const storage = new NFTStorage({ token });

  console.log(`Storing file(s) from ${imagePath}`);
  let imageCid = await storage.storeDirectory(imageFiles);
  console.log({ imageCid });

  let imageStatus = await storage.status(imageCid);
  console.log(imageStatus);

  const metadata = fs.readdirSync(metadataPath);
  for (const index in metadata) {
    if (Object.hasOwnProperty.call(metadata, index)) {
      const meta = metadata[index];
      if (meta.endsWith(".json")) {
        const fileName = `${metadataPath}/${meta}`;
        const content = fs
          .readFileSync(fileName)
          .toString()
          .replace(
            /ipfs:\/\/.*\/(.*)/gm,
            `ipfs://bafybeihfyupp5goa7mfose352mvurcwvtbgmxequgb2okb4qb7atkalmqy/%23$1`,
          );
        fs.writeFileSync(fileName, content, "utf8");
        process.stdout.write(
          `Updating file ${index} of ${metadata.length}...\r`,
        );
      }
    }
  }

  console.log(`Storing file(s) from ${metadataPath}`);
  const metadataCid = await storage.storeDirectory(metadataFiles);
  console.log({ metadataCid });

  const metadataStatus = await storage.status(metadataCid);
  console.log(metadataStatus);
  console.log("\nCompleted");
}

main();
