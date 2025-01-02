import {
  combineSysTokens,
  generatePlatformFiles,
  mapObjectContent,
  removeFigmaTokens,
  updateToken,
} from "./utils.js";

export const createExportSysTokens = () => {
  const updatedSysTokens = combineSysTokens();

  // Remove Figma only tokens from system tokens
  removeFigmaTokens(updatedSysTokens);

  // Update system tokens to match a correct structure for Style Dictionary
  mapObjectContent(updateToken, updatedSysTokens);

  // Generate files with system tokens for each platform
  generatePlatformFiles("sys", updatedSysTokens);
};
