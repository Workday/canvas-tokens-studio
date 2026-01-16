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

const getTokensList = (filename, folder) => {
  const tokensObj = JSON.parse(fs.readFileSync(path.join(folder, filename), 'utf8'));
  return transformObjectToTokens(tokensObj);
};

const generateReport = (removed, errors) => {
  const isMainMissing = removed.main.length;
  const isDeprecatedMissing = removed.deprecated.length;
  const isReturnedMissing = removed.returned.length;

  const removedMain = removed.main.map(token => `- [ ] \`${token}\``).join('\n');
  const removedDeprecated = removed.deprecated.map(token => `- [ ] \`${token}\``).join('\n');
  const returnedTokens = removed.returned.map(token => `- [ ] \`${token}\``).join('\n');

  const mainReport = isMainMissing
    ? `### Main Tokens\n\n⚠️  The following tokens are removed from the main tokens files:\n\n${removedMain}\n\nThe main tokens shouldn't be removed but deprecated.\n\n`
    : '';

  const deprecatedReport = isDeprecatedMissing
    ? `### Deprecated Tokens\n\n⚠️  The following tokens are removed from the deprecated tokens files:\n\n${removedDeprecated}\n\nDeprecated tokens removal is not restricted, but should be reviewed before merge to identify if the removal is necessary.\n\n`
    : '';

  const returnedReport = isReturnedMissing
    ? `## Returned Tokens\n\n⚠️  The following tokens are returned to the main token file:\n\n${returnedTokens}\n\nCheck if the return was intended.`
    : '';

  const fileIssuesReport = errors.length
    ? `## Tokens Removal Issues\n\n${errors.join('\n\n')}`
    : '';

  const removedTokensReport =
    isMainMissing || isDeprecatedMissing
      ? `## Removed Tokens\n\n${mainReport}${deprecatedReport}`
      : '';

  return fileIssuesReport + '\n\n' + removedTokensReport + returnedReport;
};

const checkRemovals = () => {
  const baseLineTokensFiles = getDirectoryFiles('tokens-base');

  const removed = {main: [], deprecated: [], returned: []};
  const errors = [];

  baseLineTokensFiles.forEach(filename => {
    const type = filename.includes('deprecated/') ? 'deprecated' : 'main';
    const tokens = getTokensList(filename, 'tokens-base');

    if (type === 'main') {
      const newFilesMain = path.join('tokens', filename);
      const newFilesDeprecated = path.join('tokens', 'deprecated', filename);

      if (!fs.existsSync(newFilesMain) && !fs.existsSync(newFilesDeprecated)) {
        errors.push(
          `### \`${filename}\`:\n\n⚠️  The previous token file is removed! The main token file should not be fully removed, but tokens should be moved under deprecated folder instead.\n\n- [ ] Checked if removal is approved.`
        );

        return;
      }

      const notInMain = [];

      if (fs.existsSync(newFilesMain)) {
        const newTokens = getTokensList(filename, 'tokens');
        const missingTokens = tokens.filter(token => !newTokens.includes(token));

        if (!fs.existsSync(newFilesDeprecated)) {
          removed.main.push(...missingTokens);
        } else {
          notInMain.push(...missingTokens);
        }
      }

      if (fs.existsSync(newFilesDeprecated) && notInMain.length) {
        const deprecatedTokens = getTokensList(filename, 'tokens/deprecated');
        const missingTokens = notInMain.filter(token => !deprecatedTokens.includes(token));

        removed.main.push(...missingTokens);
      }
    } else {
      const newFilesDeprecated = path.join('tokens', filename);

      if (!fs.existsSync(newFilesDeprecated)) {
        removed.deprecated.push(...tokens);
      } else {
        const mainTokens = getTokensList(filename.replace('deprecated/', ''), 'tokens');
        const deprecatedTokens = getTokensList(filename, 'tokens');

        const missingTokens = tokens.filter(token => !deprecatedTokens.includes(token));
        const revertedTokens = missingTokens.filter(token => mainTokens.includes(token));
        const notRevertedTokens = missingTokens.filter(token => !mainTokens.includes(token));

        if (revertedTokens.length) {
          removed.returned.push(...revertedTokens);
        }

        removed.deprecated.push(...notRevertedTokens);
      }
    }
  });

  return generateReport(removed, errors);
};

console.log(checkRemovals());
