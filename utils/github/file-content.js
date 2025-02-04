import { ghClient } from "./api-client.js";

/**
 *
 * A thin wrapper around GitHub's Octokit API.
 * [View Octokit Docs](https://octokit.github.io/rest.js/v18#repos-get-contents)
 *
 * Provide file content params, and this function will return the contents for a file or directory.
 * Keep in mind that there are file size limits.
 *
 */
export async function getFileContent(params) {
  try {
    const response = await ghClient.repos.getContent(params);
    return response.data;
  } catch (error) {
    const fullRepo = `${params.owner}/${params.repo}`;
    if (error.status === 404) {
      console.log(
        `⚠️  Notice: ${params.path} does not exist in ${fullRepo}.\n`
      );
    } else {
      console.error(
        `⛔️ Error: Failed to get file content from ${params.path} in ${fullRepo}.`,
        error.message
      );
    }
  }
}

/**
 *
 * A thin wrapper around GitHub's Octokit API.
 * [View Octokit Docs](https://octokit.github.io/rest.js/v18#repos-create-or-update-file-contents)
 *
 * Provide file content params, and this function will create or update a file.
 * If you're updating an existing file, you'll need to provide the SHA for the file your modifying.
 * If you're creating a new file, no SHA is needed.
 *
 */
export async function updateFileContent(params) {
  try {
    await ghClient.repos.createOrUpdateFileContents(params);
  } catch (error) {
    const fullRepo = `${params.owner}/${params.repo}`;
    console.error(
      `⛔️ Error: Failed to update file content for ${params.path} in ${fullRepo}.`,
      error.message
    );
  }
}
