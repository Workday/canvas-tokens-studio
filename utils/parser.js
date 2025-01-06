import { createExportBaseTokens } from "./tokens/createExportBaseTokens.js";
import { createExportBrandTokens } from "./tokens/createExportBrandTokens.js";
import { createExportSysTokens } from "./tokens/createExportSysTokens.js";

const { CHANGED = "base,brand,system" } = process.env;

if (CHANGED) {
  if (CHANGED.includes("base")) {
    createExportBaseTokens();
  }

  if (CHANGED.includes("brand")) {
    createExportBrandTokens();
  }

  if (CHANGED.includes("sys")) {
    createExportSysTokens();
  }
}
