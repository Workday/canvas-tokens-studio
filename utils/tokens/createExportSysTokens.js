import {
  combineSysTokens,
  generatePlatformFiles,
  mapObjectContent,
  removeFigmaTokens,
  updateToken,
} from './utils.js';

export const createExportSysTokens = () => {
  ['base', 'deprecated'].forEach(type => {
    const path = type === 'base' ? 'sys' : 'deprecated/sys';
    const updatedSysTokens = combineSysTokens(path);

    if (type === 'base') {
      // Remove Figma only tokens from system tokens
      removeFigmaTokens(updatedSysTokens);

      // Update system tokens to match a correct structure for Style Dictionary
      mapObjectContent(updateToken, updatedSysTokens);
    }

    // Generate files with system tokens for each platform
    generatePlatformFiles('sys', updatedSysTokens, type === 'deprecated');
  });
};
