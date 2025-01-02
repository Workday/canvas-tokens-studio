import { canvasTokensRepoParams } from "../github/api-client.js";
import { getFileContent, updateFileContent } from "../github/file-content.js";
import {
  decodeJSONBufferString,
  encodeJSONToString,
} from "../github/parse-utils.js";
import { compareTokenContent, getExportedBrandTokens } from "./utils.js";

export const syncBrand = async () => {
  try {
    console.log("Syncing brand tokens config...");

    // Fetch brand config from Canvas Tokens Studio repo
    const canvasTokensConfig = await getFileContent({
      owner: canvasTokensRepoParams.owner,
      repo: canvasTokensRepoParams.repo,
      path: canvasTokensRepoParams.brandConfigPath,
      ref: canvasTokensRepoParams.defaultBranch,
    });

    // Fetch brand config from Canvas Tokens repo
    const parsedContent = decodeJSONBufferString(canvasTokensConfig.content);
    const exportedBrandTokens = getExportedBrandTokens();

    const isDiff = !compareTokenContent(parsedContent, exportedBrandTokens);

    if (isDiff) {
      console.log("🔄 Updating brand tokens...");
      const encodedConfig = encodeJSONToString(exportedBrandTokens);

      updateFileContent({
        owner: canvasTokensRepoParams.owner,
        repo: canvasTokensRepoParams.repo,
        path: canvasTokensRepoParams.brandConfigPath,
        branch: canvasTokensRepoParams.syncBranch,
        message: "chore: Sync brand tokens config",
        // If this is a new file, there will be no existing sha to reference.
        sha: canvasTokensConfig ? canvasTokensConfig.sha : undefined,
        content: encodedConfig,
      });
    } else {
      console.log("✅ Brand tokens are up-to-date.");
    }
  } catch (error) {
    console.error("⚠️ ERROR (syncBrand):");
    console.error(">>> ", error);
  }
};
