import {mapObjectContent, updateToken, getBaseTokens, generateBaseTokens} from './utils.js';

export const createExportBaseTokens = () => {
  ['base', 'deprecated'].forEach(type => {
    const isDeprecated = type === 'deprecated';
    // Get updated base tokens
    const updatedBaseTokens = getBaseTokens(isDeprecated);

    // Update base tokens to match a correct structure for Style Dictionary
    mapObjectContent(updateToken, updatedBaseTokens);

    // Generate a file with base tokens
    generateBaseTokens(updatedBaseTokens, isDeprecated ? 'export/deprecated' : 'export');
  });
};
