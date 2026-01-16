import fs from 'fs';
import path from 'path';
import {getDirectoryFiles} from './getDirectoryFiles.js';

const transformObjectToTokens = (tokensObj, tokensList = [], prefix = '') => {
  if (tokensObj && typeof tokensObj === 'object' && !Array.isArray(tokensObj)) {
    Object.keys(tokensObj).forEach(key => {
      const path = prefix ? `${prefix}.${key}` : key;
      if (
        tokensObj[key] &&
        typeof tokensObj[key] === 'object' &&
        !Array.isArray(tokensObj[key]) &&
        !('value' in tokensObj[key])
      ) {
        // Recurse into nested object
        transformObjectToTokens(tokensObj[key], tokensList, path);
      } else {
        tokensList.push(path);
      }
    });
  }
  return tokensList;
};

const getTokensList = (file, folder) => {
  const tokensObj = JSON.parse(fs.readFileSync(path.join(folder, file), 'utf8'));
  return transformObjectToTokens(tokensObj);
};

const generateReport = (removed, errors) => {
  const isMainMissing = removed.main.length;
  const isDeprecatedMissing = removed.deprecated.length;

  const removedMain = removed.main.map(token => `-[ ] \`${token}\``).join('\n');
  const removedDeprecated = removed.deprecated.map(token => `-[ ] \`${token}\``).join('\n');

  const mainReport = isMainMissing
    ? `### Main Tokens\n\n⚠️ The following tokens are removed from the main tokens files:\n\n${removedMain}\n\nThe main tokens shouldn't be removed but deprecated.\n\n`
    : '';

  const deprecatedReport = isDeprecatedMissing
    ? `### Deprecated Tokens\n\n⚠️ The following tokens are removed from the deprecated tokens files:\n\n${removedDeprecated}\n\n. Deprecated tokens removal is not restricted, but should be reviewed before merge to identify if the removal is necessary.`
    : '';

  const fileIssuesReport = errors.length ? `## File Issues\n\n${errors.join('\n\n')}` : '';
  const removedTokensReport =
    isMainMissing || isDeprecatedMissing
      ? `## Removed Tokens\n\n${mainReport}${deprecatedReport}`
      : '';

  return fileIssuesReport + '\n\n' + removedTokensReport;
};

const checkRemovals = () => {
  const baseLineTokensFiles = getDirectoryFiles('tokens-base');
  const mainTokensFiles = getDirectoryFiles('tokens');

  const removed = {main: [], deprecated: []};
  const errors = [];

  baseLineTokensFiles.forEach(file => {
    const type = file.includes('/deprecated/') ? 'deprecated' : 'main';
    const tokens = getTokensList(file, 'tokens-base');

    if (type === 'main') {
      const newFilesMain = path.join('tokens', file);
      const newFilesDeprecated = path.join('tokens', 'deprecated', file);

      const notInMain = [];

      if (!fs.existsSync(newFilesMain) && !fs.existsSync(newFilesDeprecated)) {
        errors.push(
          `### \`${file}\`:\n\n⚠️ The previous token file is removed! The main token file should not be fully removed, but tokens should be moved under deprecated folder instead.\n\n-[ ] Checked if removal is approved.`
        );

        return;
      }

      if (fs.existsSync(newFilesMain)) {
        const newTokens = getTokensList(file, 'tokens');
        const notPresentedTokens = tokens.filter(token => !newTokens.includes(token));

        notInMain.push(...notPresentedTokens);

        if (!fs.existsSync(newFilesDeprecated)) {
          removed.main.push(...notPresentedTokens);
        }
      }

      if (fs.existsSync(newFilesDeprecated) && !notInMain.length) {
        const deprecatedTokens = getTokensList(file, 'tokens/deprecated');
        const notPresentedTokens = notInMain.filter(token => !deprecatedTokens.includes(token));

        if (!fs.existsSync(newFilesMain)) {
          removed.main.push(...notPresentedTokens);
        }
      }
    } else {
      const newFilesDeprecated = path.join('tokens', 'deprecated', file);

      if (!fs.existsSync(newFilesDeprecated)) {
        removed.deprecated.push(...tokens);
      } else {
        const deprecatedTokens = getTokensList(file, 'tokens/deprecated');
        const notPresentedTokens = tokens.filter(token => !deprecatedTokens.includes(token));

        removed.deprecated.push(...notPresentedTokens);
      }
    }
  });

  return generateReport(removed, errors);
};

console.log(checkRemovals());
