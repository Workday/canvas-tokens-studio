import { createSyncBranch } from "./github/create-sync-branch.js";
import { createSyncPullRequest } from "./github/pull-request.js";
import { syncBase } from "./sync/sync-base.js";
import { syncBrand } from "./sync/sync-brand.js";
import { syncSys } from "./sync/sync-sys.js";

const { CHANGED, BRANCH } = process.env;

if (CHANGED) {
  await createSyncBranch();

  if (CHANGED.includes("base.json")) {
    await syncBase();
  }

  if (CHANGED.includes("brand/canvas.json")) {
    await syncBrand();
  }

  if (CHANGED.includes("tokens/sys")) {
    await syncSys();
  }

  await createSyncPullRequest(BRANCH);
}
