import fs from 'fs';
import path from 'path';
import kebabCase from 'kebab-case';

const rootDir = process.cwd();

/**
 * Recursively map over a token object and apply a transforming value function to each token.
 * @param {function} fn The transforming value function to apply to each token
 * @param {Record<string, any>} obj The tokens object to transform
 * @returns
 */
export const mapObjectContent = (fn, obj) => {
  if ('value' in obj) {
    return fn(obj);
  }

  Object.keys(obj).forEach(key => {
    mapObjectContent(fn, obj[key]);
  });
};

/**
 * Utility function to determine if a token is a base token.
 * @param {string} ref The token reference, e.g. 'brand.primary.base'
 * @returns {boolean} Result of validation if the token is a base token
 */
export const isBaseToken = ref => {
  const baseJson = fs.readFileSync(path.join(rootDir, 'tokens/base.json'));

  let isMapable = false;
  let content = JSON.parse(baseJson);

  const keys = ref.split('.');

  keys.forEach((key, i) => {
    content = content?.[key];
    if (i + 1 === keys.length && content) {
      isMapable = true;
    }
  });

  return isMapable;
};

/**
 * Utility function to update references to have a token level and kebab cased property names in the inner object of a token value.
 * @param {Record<string, string>} subtoken The inner object of a token value
 * @returns {Record<string, string>} The updated inner object
 */
export const updateInnerObject = subtoken => {
  let updatedSubtoken = {};
  Object.keys(subtoken).forEach(key => {
    updatedSubtoken[kebabCase(key)] = replaceReferences(subtoken[key]);
  });

  return updatedSubtoken;
};

/**
 * Utility function to update string references by adding a token level.
 * @param {string} value The token value to update
 * @returns {string} The updated token value
 */
export const replaceReferences = value => {
  return value.replace(/\{([^}]+)\}/gi, (a, b) => {
    const tokenCategory = b.split('.')[0];
    if (tokenCategory.match(/^(base|brand|sys)$/)) {
      return a;
    }

    const newLevel = isBaseToken(b) ? 'base' : 'sys';

    return a.replace('{', `{${newLevel}.`);
  });
};

/**
 * Utility function to update token references based on the value type.
 * @param {{value: string, type?: string, description?: string}} token The token object to update
 * @returns {{value: string, type?: string, description?: string}|void} The updated token object
 */
export const updateReferences = token => {
  if (!token.value || typeof token.value === 'number') {
    return;
  }

  if (typeof token.value === 'string') {
    token.value = replaceReferences(token.value);
    return token.value;
  }

  if (token.value?.length) {
    token.value.forEach((subToken, i) => {
      token.value[i] = updateInnerObject(subToken);
    });

    return token.value;
  }

  token.value = updateInnerObject(token.value);
  return;
};

export const updateColorObject = token => {
  if (!token.value) {
    return;
  }

  if (token.value?.colorSpace === 'oklch') {
    const lch = token.value.components.join(' ');
    const alpha = token.value.alpha || 1;

    token.value = `oklch(${lch} / ${alpha})`;
    token.fallback = token.value.hex;
  }
};

/**
 * Utility function to replace the description property of a token object with a comment property.
 * @param {{value: string, type?: string, description?: string}} token The token object to update
 */
export const replaceDescriptionByComment = token => {
  const {description} = token;

  if (description) {
    delete token.description;
    const updated = description.replace(/\n+/g, '; ');
    token.comment = updated;
  }
};

/**
 * Utility function to transform token extensions into the correct token value.
 * @param {{value: string, type?: string, description?: string}} token The token object to update
 */
export const transformExtensions = token => {
  if (token['$extensions']) {
    delete token['$extensions'];
  }
};

/**
 * Utility function to filter web tokens from a whole JSON token object.
 * @param {Record<string, any>} tokens The token object to filter web tokens from non-web tokens
 * @returns {Record<string, any>} The filtered JSON token object containing only web tokens
 */
export const filterWebTokens = tokens => {
  if (!tokens.sys) {
    return tokens;
  }

  const webTokens = tokens;

  const {half, x5, x14, ...restSpace} = webTokens.sys.space;
  webTokens.sys.space = restSpace;

  const {x4, x6, ...restShape} = webTokens.sys.shape;
  webTokens.sys.shape = restShape;

  return webTokens;
};

/**
 * Utility function to filter out figma tokens from a whole JSON token object.
 * @param {Record<string, any>} tokens The token object to filter web tokens from non-web tokens
 * @returns {Record<string, any>} The filtered JSON token object containing only web tokens
 */
export const removeFigmaTokens = tokens => {
  delete tokens.sys['More styles'];
  delete tokens.sys['layer-opacity'];
};

/**
 * Update a token object with the correct references, comments and extensions.
 * @param {{value: string, type?: string, description?: string}} token The token object to update
 * @returns {{value: string, type?: string, description?: string}} The updated token object
 */
export const updateToken = token => {
  updateColorObject(token);
  transformExtensions(token);
  updateReferences(token);
  replaceDescriptionByComment(token);

  return token;
};

/**
 * Utility function to generate platform-specific token files from the token object.
 * @param {'base'|'brand'|'sys'} level The level of the tokens to be generated.
 * @param {Record<string, any>} tokens The object containing the tokens.
 */
export const generatePlatformFiles = (level, allTokens) => {
  const platforms = ['web'];

  platforms.forEach(platform => {
    const tokens = platform === 'web' ? filterWebTokens(allTokens) : allTokens;

    fs.mkdirSync(path.join(rootDir, 'export', platform), {recursive: true});
    const exportPath = path.join(rootDir, `export/${platform}/${level}.json`);

    fs.writeFileSync(exportPath, JSON.stringify(tokens, null, 2), 'utf8');
  });
};

/**
 * Utility function to get the list of system token files.
 * @returns {string[]} The list of system token files
 */
export const getSytemTokenFilesList = () => {
  const sysFolderPath = path.join(rootDir, 'tokens/sys');
  const sysJsonFiles = fs.readdirSync(sysFolderPath).filter(file => file.endsWith('.json'));

  return [...sysJsonFiles, 'color/color.json'];
};

/**
 * Utility function to combine all system tokens into a single object.
 * @returns {Record<'sys', Record<string, any>>} The combined system tokens object
 */
export const combineSysTokens = () => {
  const sysFiles = getSytemTokenFilesList();

  const innerToken = sysFiles.reduce((acc, file) => {
    const filePath = path.join(rootDir, 'tokens/sys', file);
    const originalJson = fs.readFileSync(filePath, 'utf8');
    const parsedJson = JSON.parse(originalJson);

    return {
      ...acc,
      ...parsedJson,
    };
  }, {});

  return {sys: innerToken};
};

/**
 * Utility function to get the base tokens object.
 * @returns {Record<'base', Record<string, any>>} The combined system tokens object
 */
export const getBaseTokens = isDeprecated => {
  const path = isDeprecated ? 'tokens/deprecated/base.json' : 'tokens/base.json';
  const content = fs.readFileSync(path.join(rootDir, path), 'utf8');
  const originalBaseTokens = JSON.parse(content);

  let updatedBaseTokens = {
    base: originalBaseTokens,
  };

  // Flat unit property to the base level
  const {unit} = updatedBaseTokens.base.base;
  delete updatedBaseTokens.base.base;
  updatedBaseTokens.base.unit = unit;

  return updatedBaseTokens;
};

/**
 * Utility function to generate the base tokens file.
 * @param {Record<'base', Record<string, any>>} tokens The base tokens object
 */
export const generateBaseTokens = (tokens, folderPath) => {
  fs.mkdirSync(path.join(rootDir, folderPath), {recursive: true});
  const exportPath = path.join(rootDir, folderPath, 'base.json');
  fs.writeFileSync(exportPath, JSON.stringify(tokens, null, 2), 'utf8');
};
