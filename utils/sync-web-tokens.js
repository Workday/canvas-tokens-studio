import { createSyncBranch } from "./github/create-sync-branch.js";
import { createSyncPullRequest } from "./github/pull-request.js";
import { syncBase } from "./sync/sync-base.js";
import { syncBrand } from "./sync/sync-brand.js";
import { syncSys } from "./sync/sync-sys.js";

const { CHANGED } = process.env;

if (CHANGED) {
  await createSyncBranch();

  if (CHANGED.includes("base")) {
    await syncBase();
  }

  if (CHANGED.includes("brand")) {
    await syncBrand();
  }

  if (CHANGED.includes("sys")) {
    await syncSys();
  }

  await createSyncPullRequest();
}
