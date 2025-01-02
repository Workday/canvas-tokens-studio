import fs from "fs";
import path from "path";
import {
  generatePlatformFiles,
  mapObjectContent,
  updateToken,
} from "./utils.js";

const rootDir = process.cwd();

export const createExportBrandTokens = () => {
  const brandJsonPath = path.join(rootDir, "tokens/sys/brand/canvas.json");
  const originalBaseJson = fs.readFileSync(brandJsonPath, "utf8");
  let updatedBrandTokens = JSON.parse(originalBaseJson);

  // Update brand tokens to match a correct structure for Style Dictionary
  mapObjectContent(updateToken, updatedBrandTokens);

  // Generate files with brand tokens for each platform
  generatePlatformFiles("brand", updatedBrandTokens);
};
