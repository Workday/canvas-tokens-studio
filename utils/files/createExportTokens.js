import {
  combineTokens,
  generateBaseTokens,
  generatePlatformFiles,
  transformStudioTokensToSD,
} from './utils.js';

export const createExportTokens = () => {
  ['base', 'brand', 'system'].forEach(type => {
    ['main', 'deprecated'].forEach(category => {
      const isDeprecated = category === 'deprecated';
      const typeFolder = type === 'brand' ? 'sys/brand' : type;
      const importPathFolder = isDeprecated ? `deprecated/${typeFolder}` : typeFolder;

      const tokens = combineTokens(importPathFolder, type);

      // Skip if there are no tokens
      if (!Object.keys(tokens).length) {
        return;
      }

      // It does
      // - remove figma specific tokens
      // - flatten the base token object to avoid `base.base.*` references
      // - change oklch color object to string
      // - remove studio extensions
      // - replace TS description with SD comment
      // - add level token reference to TS
      transformStudioTokensToSD(tokens);

      if (type === 'base') {
        // Base json should be placed to main level
        generateBaseTokens(tokens, isDeprecated ? 'deprecated' : '');
      } else {
        // System and brand tokens are web specific, so we generate them for platforms
        generatePlatformFiles(type, tokens, isDeprecated);
      }
    });
  });
};
