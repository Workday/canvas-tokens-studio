import {
  combineTokens,
  generateBaseTokens,
  generatePlatformFiles,
  mapObjectContent,
  removeFigmaTokens,
  updateToken,
} from './utils.js';
import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();

export const createExportTokens = (types = ['base', 'brand', 'sys']) => {
  types.forEach(type => {
    ['main', 'deprecated'].forEach(category => {
      const isDeprecated = category === 'deprecated';
      const allFiles = fs.readdirSync(path.join(rootDir, 'tokens'), {recursive: true});

      let tokens = {};

      const typeFolder = type === 'brand' ? 'sys/brand' : type;
      const importPathFolder = isDeprecated ? `deprecated/${typeFolder}` : typeFolder;
      const exportPathFolder = isDeprecated ? `export/deprecated/${type}` : `export/${type}`;

      const importedFiles = allFiles.filter(file => file.startsWith(importPathFolder));

      // If there are no imported files, do not generate any tokens
      if (!importedFiles.length) {
        return;
      } else if (importedFiles.length === 1) {
        // If there is the one imported file, parse it and add it to the tokens object
        const brandJsonPath = path.join(rootDir, 'tokens', importedFiles[0]);
        const originalBaseJson = fs.readFileSync(brandJsonPath, 'utf8');
        tokens = JSON.parse(originalBaseJson);
      } else {
        // If there are folder with tokens, combine them into a single object
        tokens = combineTokens(importPathFolder, type);
      }

      removeFigmaTokens(tokens);
      mapObjectContent(updateToken, tokens);

      if (type === 'base') {
        generateBaseTokens(tokens, exportPathFolder);
      } else {
        generatePlatformFiles(type, tokens, isDeprecated);
      }
    });
  });
};

console.log(createExportTokens());
