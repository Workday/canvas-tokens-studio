import fs from 'fs';
import path from 'path';

const checkDeprecated = () => {
  const errors = [];
  const deprecatedFiles = fs
    .readdirSync('tokens/deprecated', {recursive: true})
    .filter(file => file.endsWith('.json'));

  const mainFiles = fs
    .readdirSync('tokens', {recursive: true})
    .filter(file => file.endsWith('.json') && !file.includes('deprecated/'));

  if (!deprecatedFiles.every(file => mainFiles.includes(file))) {
    errors.push('⚠️ Deprecated folder structure does not match main tokens.');
  }

  const isDeprecatedInMain = mainFiles.some(file => {
    const fileContent = fs.readFileSync(path.join('tokens', file), 'utf8');
    return fileContent.includes('"deprecated": true');
  });

  if (isDeprecatedInMain) {
    errors.push('⚠️ Deprecated tokens found in main tokens.');
  }

  return errors.join('\n');
};

console.log(checkDeprecated());
