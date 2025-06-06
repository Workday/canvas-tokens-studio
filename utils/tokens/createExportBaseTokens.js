import {
  mapObjectContent,
  updateToken,
  getBaseTokens,
  generateBaseTokens,
} from "./utils.js";

export const createExportBaseTokens = () => {
  // Get updated base tokens
  const updatedBaseTokens = getBaseTokens();

  // Update base tokens to match a correct structure for Style Dictionary
  mapObjectContent(updateToken, updatedBaseTokens);

  // Generate a file with base tokens
  generateBaseTokens(updatedBaseTokens);
};
