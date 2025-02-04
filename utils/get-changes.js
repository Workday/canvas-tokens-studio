import { Octokit } from "@octokit/rest";
import { tokensStudioRepoParams } from "./github/api-client.js";

const { GITHUB_TOKEN, HEAD_COMMIT } = process.env;

export const ghClient = new Octokit({
  auth: GITHUB_TOKEN,
  baseUrl: "https://api.github.com",
});

export async function getChanges() {
  try {
    let levelsChanged = [];
    const prNumber = HEAD_COMMIT.match(/#(\d+)/)?.[1];

    if (!prNumber) {
      return "";
    }

    const { data: files } = await ghClient.pulls.listFiles({
      owner: tokensStudioRepoParams.owner,
      repo: tokensStudioRepoParams.repo,
      pull_number: prNumber,
    });

    files.forEach(({ filename }) => {
      if (filename.includes("base.json")) {
        levelsChanged.push("base");
      }

      if (filename.includes("brand/canvas.json")) {
        levelsChanged.push("brand");
      }

      if (filename.includes("sys/")) {
        levelsChanged.push("sys");
      }
    });

    return levelsChanged.join(",");
  } catch (error) {
    throw new Error(`Error: Failed in get Changes. \n >>> ${error.message}`);
  }
}

console.log(await getChanges());
