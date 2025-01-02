import fs from "fs";
import path from "path";

const rootDir = process.cwd();

export const getExportedBaseTokens = () => {
  const exportedBaseTokensPath = path.join(rootDir, "export", "base.json");
  const baseJson = fs.readFileSync(exportedBaseTokensPath);
  return JSON.parse(baseJson);
};

export const getExportedBrandTokens = () => {
  const exportedBrandTokensPath = path.join(
    rootDir,
    "export/web",
    "brand.json"
  );
  const brandJson = fs.readFileSync(exportedBrandTokensPath);
  return JSON.parse(brandJson);
};

export const getExportedSysTokens = () => {
  const exportedSysTokensPath = path.join(rootDir, "export/web", "sys.json");
  const sysJson = fs.readFileSync(exportedSysTokensPath);
  return JSON.parse(sysJson);
};

export const compareTokenContent = (originalTokens, newTokens) => {
  const originalTokensString = JSON.stringify(originalTokens);
  const newTokensString = JSON.stringify(newTokens);

  return originalTokensString === newTokensString;
};
