import {
  combineTokens,
  generateBaseTokens,
  generatePlatformFiles,
  transformStudioTokensToSD,
  recursivelyCombineTwoObjects,
} from './files/utils.js';

(() => {
  ['base', 'brand', 'sys'].forEach(type => {
    const typeFolder = type === 'brand' ? 'sys/brand' : type;
    
    // Get non-deprecated tokens
    const mainTokens = combineTokens(typeFolder, type);
    
    // Get deprecated tokens
    const deprecatedTokens = combineTokens(`deprecated/${typeFolder}`, type);
    
    // Combine both token sets - deprecated tokens will be merged into main tokens
    let combinedTokens = {};
    
    // If we have main tokens, start with those
    if (Object.keys(mainTokens).length) {
      combinedTokens = mainTokens;
    }
    
    // If we have deprecated tokens, merge them in
    if (Object.keys(deprecatedTokens).length) {
      if (Object.keys(combinedTokens).length) {
        // Merge deprecated tokens into main tokens
        combinedTokens = recursivelyCombineTwoObjects(combinedTokens, deprecatedTokens);
      } else {
        // Only deprecated tokens exist
        combinedTokens = deprecatedTokens;
      }
    }
    
    // Skip if there are no tokens at all
    if (!Object.keys(combinedTokens).length) {
      return;
    }
    
    // Transform tokens
    transformStudioTokensToSD(combinedTokens);
    
    if (type === 'base') {
      // Base json should be placed to main level
      generateBaseTokens(combinedTokens, '');
    } else {
      // Sys and brand tokens are web specific, so we generate them for platforms
      generatePlatformFiles(type, combinedTokens, false);
    }
  });
  
  // Also generate deprecated-only files for backward compatibility if needed
  ['base', 'brand', 'sys'].forEach(type => {
    const typeFolder = type === 'brand' ? 'sys/brand' : type;
    const deprecatedTokens = combineTokens(`deprecated/${typeFolder}`, type);
    
    if (Object.keys(deprecatedTokens).length) {
      transformStudioTokensToSD(deprecatedTokens);
      
      if (type === 'base') {
        generateBaseTokens(deprecatedTokens, 'deprecated');
      } else {
        generatePlatformFiles(type, deprecatedTokens, true);
      }
    }
  });
})();
