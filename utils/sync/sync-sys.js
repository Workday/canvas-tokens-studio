import { canvasTokensRepoParams } from "../github/api-client.js";
import { getFileContent, updateFileContent } from "../github/file-content.js";
import {
  decodeJSONBufferString,
  encodeJSONToString,
} from "../github/parse-utils.js";
import { compareTokenContent, getExportedSysTokens } from "./utils.js";

export const syncSys = async () => {
  try {
    console.log("Syncing system tokens config...");

    const canvasTokensConfig = await getFileContent({
      owner: canvasTokensRepoParams.owner,
      repo: canvasTokensRepoParams.repo,
      path: canvasTokensRepoParams.sysConfigPath,
      ref: canvasTokensRepoParams.defaultBranch,
    });

    const parsedContent = decodeJSONBufferString(canvasTokensConfig.content);
    const exportedSysTokens = getExportedSysTokens();

    const isDiff = !compareTokenContent(parsedContent, exportedSysTokens);

    if (isDiff) {
      console.log("🔄 Updating system tokens...");
      const encodedConfig = encodeJSONToString(exportedSysTokens);

      updateFileContent({
        owner: canvasTokensRepoParams.owner,
        repo: canvasTokensRepoParams.repo,
        path: canvasTokensRepoParams.sysConfigPath,
        branch: canvasTokensRepoParams.syncBranch,
        message: "chore: Sync system tokens config",
        // If this is a new file, there will be no existing sha to reference.
        sha: canvasTokensConfig ? canvasTokensConfig.sha : undefined,
        content: encodedConfig,
      });
    } else {
      console.log("✅ System tokens are up-to-date.");
    }
  } catch (error) {
    console.error("⚠️ ERROR (syncSys):");
    console.error(">>> ", error);
  }
};
