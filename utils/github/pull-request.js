import { ghClient, canvasTokensRepoParams } from "./api-client.js";

/**
 * Use the standard template as the pull request body
 */
function getPullRequestTemplate() {
  return `## Issue

<!-- Add an issue number and link the PR with a keyword: "Fixes", "Resolves", or "Closes" -->
<!-- Resolves #123 -->

## Summary

<!-- Give a brief description of what this PR does. -->

## Release Category

Web Tokens

### Release Note

Optional release note message. Add \`⚠️ BREAKING CHANGES:\` before message if it's a breaking change.
Changelog and release summaries will contain a pull request title. This section will add additional
notes under that title. This section is not a summary, but something extra to point out in release
notes. An example might be calling out breaking changes in a labs component or minor visual changes
that need visual regression updates. Remove this section if no additional release notes are
required.
`;
}

/**
 *
 * A thin wrapper around GitHub's Octokit API.
 * [View Octokit Docs](https://octokit.github.io/rest.js/v18#pulls-create)
 *
 * Provide pull request params, and this function will create or pull request.
 * If a pull request already exists, this function will error.
 *
 */
export async function createPullRequest(params) {
  try {
    const fullRepo = `${params.owner}/${params.repo}`;
    console.log(
      `Creating a PR to merge ${params.head} to ${params.base} in ${fullRepo}.\n`
    );
    await ghClient.pulls.create(params);
    console.log("✅ Success!\n");
  } catch (error) {
    throw new Error(
      `⛔️ Error: Failed to create a pull request.\n >>> ${error.message}`
    );
  }
}

export async function createSyncPullRequest(base) {
  await createPullRequest({
    owner: canvasTokensRepoParams.owner,
    repo: canvasTokensRepoParams.repo,
    base,
    head: canvasTokensRepoParams.syncBranch,
    maintainer_can_modify: true,
    title: "chore: Sync Tokens Studio config 🤖",
    body: getPullRequestTemplate(),
  });
}
