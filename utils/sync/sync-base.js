import { canvasTokensRepoParams } from "../github/api-client.js";
import { getFileContent, updateFileContent } from "../github/file-content.js";
import {
  decodeJSONBufferString,
  encodeJSONToString,
} from "../github/parse-utils.js";
import { compareTokenContent, getExportedBaseTokens } from "./utils.js";

export const syncBase = async () => {
  try {
    console.log("Syncing base tokens config...");

    // Fetch base config from Canvas Tokens Studio repo
    const canvasTokensConfig = await getFileContent({
      owner: canvasTokensRepoParams.owner,
      repo: canvasTokensRepoParams.repo,
      path: canvasTokensRepoParams.baseConfigPath,
      ref: canvasTokensRepoParams.defaultBranch,
    });

    // Fetch base config from Canvas Tokens repo
    const parsedContent = decodeJSONBufferString(canvasTokensConfig.content);
    const exportedBaseTokens = getExportedBaseTokens();

    const isDiff = !compareTokenContent(parsedContent, exportedBaseTokens);

    if (isDiff) {
      console.log("🔄 Updating base tokens...");
      const encodedConfig = encodeJSONToString(exportedBaseTokens);

      updateFileContent({
        owner: canvasTokensRepoParams.owner,
        repo: canvasTokensRepoParams.repo,
        path: canvasTokensRepoParams.baseConfigPath,
        branch: canvasTokensRepoParams.syncBranch,
        message: "chore: Sync base tokens config",
        // If this is a new file, there will be no existing sha to reference.
        sha: canvasTokensConfig ? canvasTokensConfig.sha : undefined,
        content: encodedConfig,
      });
    } else {
      console.log("✅ Base tokens are up-to-date.");
    }
  } catch (error) {
    console.error("⚠️ ERROR (syncBase):");
    console.error(">>> ", error);
  }
};
