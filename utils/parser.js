import { createExportBaseTokens } from "./tokens/createExportBaseTokens.js";
import { createExportBrandTokens } from "./tokens/createExportBrandTokens.js";
import { createExportSysTokens } from "./tokens/createExportSysTokens.js";

const { CHANGED } = process.env;

if (CHANGED) {
  if (CHANGED === "all") {
    createExportBaseTokens();
    createExportBrandTokens();
    createExportSysTokens();
  }

  if (CHANGED.includes("base.json")) {
    createExportBaseTokens();
  }

  if (CHANGED.includes("brand/canvas.json")) {
    createExportBrandTokens();
  }

  if (CHANGED.includes("tokens/sys")) {
    createExportSysTokens();
  }
}
