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
export const mapObjectContent = (fn, obj, key) => {
  if ('value' in obj) {
    return fn(obj, key);
  }

  Object.keys(obj).forEach(key => {
    mapObjectContent(fn, obj[key], key);
  });
};

export const recursivelyCombineTwoObjects = (obj1, obj2) => {
  // Start with all keys from obj1
  const result = {...obj1};

  // Then process all keys from obj2
  Object.keys(obj2).forEach(key => {
    if (result[key]) {
      // Key exists in both objects
      const isObj1Object =
        result[key] && typeof result[key] === 'object' && !Array.isArray(result[key]);
      const isObj2Object = obj2[key] && typeof obj2[key] === 'object' && !Array.isArray(obj2[key]);

      // Check if either is a token object (has a 'value' property) - these should be merged directly, not recursively
      const isObj1Token = isObj1Object && 'value' in result[key];
      const isObj2Token = isObj2Object && 'value' in obj2[key];

      if (isObj1Token || isObj2Token) {
        // At least one is a token object, merge directly (obj2 takes precedence for overlapping properties)
        result[key] = {...result[key], ...obj2[key]};
      } else if (isObj1Object && isObj2Object) {
        // Both are plain objects (not token objects), recurse to merge nested structures
        result[key] = recursivelyCombineTwoObjects(result[key], obj2[key]);
      } else {
        // At least one is not an object, obj2 takes precedence
        result[key] = obj2[key];
      }
    } else {
      // Key only exists in obj2, add it
      result[key] = obj2[key];
    }
  });

  return result;
};

/**
 * Utility function to transform studio tokens to Style Dictionary consumable format.
 * It does
 * - remove figma specific tokens
 * - flatten the base token object to avoid `base.base.*` references
 * - change oklch color object to string
 * - remove studio extensions
 * - replace TS description with SD comment
 * - add level token reference to TS
 * @param {Record<string, any>} tokens The tokens object to transform
 * @returns {Record<string, any>} The transformed tokens object
 */
export const transformStudioTokensToSD = tokens => {
  cleanOutTokens(tokens);
  mapObjectContent(updateToken, tokens, '');
};

/**
 * Utility function to determine if a token is a base token.
 * @param {string} ref The token reference, e.g. 'brand.primary.base'
 * @returns {boolean} Result of validation if the token is a base token
 */
export const isBaseToken = ref => {
  let isMapable = false;
  const baseTokens = combineTokens('base', 'base');
  const deprecatedBaseTokens = combineTokens('deprecated/base', 'base');

  const commbined = recursivelyCombineTwoObjects(baseTokens, deprecatedBaseTokens);
  let content = commbined.base;

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

    const alpha =
      typeof token.value.alpha === 'string' || typeof token.value.alpha === 'number'
        ? token.value.alpha
        : 1;

    token.value = `oklch(${lch} / ${alpha})`;
    token.fallback = token.value.hex;
  }
};

/**
 * Utility function to resolve references in fallback and description fields.
 * @param {{value: string, type?: string, description?: string, fallback?: string, deprecatedComment?: string}} token The token object to update
 */
export const updateFallbackAndDescription = token => {
  // Resolve references in fallback field
  if (token.fallback && typeof token.fallback === 'string') {
    token.fallback = replaceReferences(token.fallback);
  }

  // Resolve references in description field
  if (token.description && typeof token.description === 'string') {
    token.description = replaceReferences(token.description);
  }

  // Resolve references in deprecatedComment field
  if (token.deprecatedComment && typeof token.deprecatedComment === 'string') {
    token.deprecatedComment = replaceReferences(token.deprecatedComment);
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

  if (webTokens.sys.space) {
    const {half, x5, x14, ...restSpace} = webTokens.sys.space;
    webTokens.sys.space = restSpace;
  }

  if (webTokens.sys.shape) {
    const {x4, x6, ...restShape} = webTokens.sys.shape;
    webTokens.sys.shape = restShape;
  }

  return webTokens;
};

/**
 * Utility function to filter out figma tokens from a whole JSON token object.
 * @param {Record<string, any>} tokens The token object to filter web tokens from non-web tokens
 * @returns {Record<string, any>} The filtered JSON token object containing only web tokens
 */
export const cleanOutTokens = tokens => {
  if (tokens.sys) {
    delete tokens.sys['More styles'];
    delete tokens.sys['layer-opacity'];
  }

  if (tokens.base) {
    const {unit} = tokens.base.base || {};
    if (unit) {
      delete tokens.base.base;
      tokens.base.unit = unit;
    }
  }
};

const updateBaseFontSize = (token, key) => {
  if (key === 'fontSize') {
    token.value = `${token.value / 16}rem`;
  }
};

/**
 * Update a token object with the correct references, comments and extensions.
 * @param {{value: string, type?: string, description?: string}} token The token object to update
 * @returns {{value: string, type?: string, description?: string}} The updated token object
 */
export const updateToken = (token, key) => {
  updateBaseFontSize(token, key);
  updateColorObject(token);
  transformExtensions(token);
  updateReferences(token);
  updateFallbackAndDescription(token);
  replaceDescriptionByComment(token);

  return token;
};

/**
 * Utility function to generate platform-specific token files from the token object.
 * @param {'base'|'brand'|'sys'} level The level of the tokens to be generated.
 * @param {Record<string, any>} tokens The object containing the tokens.
 */
export const generatePlatformFiles = (level, allTokens, isDeprecated) => {
  const platforms = ['web'];

  platforms.forEach(platform => {
    const folderPath = isDeprecated ? `deprecated/${platform}` : platform;

    const tokens = platform === 'web' && !isDeprecated ? filterWebTokens(allTokens) : allTokens;
    const exportContent = addComments(tokens, isDeprecated);

    fs.mkdirSync(path.join(rootDir, 'export', folderPath), {recursive: true});
    const exportPath = path.join(rootDir, `export/${folderPath}/${level}.json`);

    fs.writeFileSync(exportPath, JSON.stringify(exportContent, null, 2), 'utf8');
  });
};

/**
 * Utility function to get the list of tokens files.
 * @returns {string[]} The list of token files
 */
export const getTokensFilesList = (folderPath, type) => {
  const allFiles = fs
    .readdirSync(path.join(rootDir, 'tokens'), {recursive: true})
    .filter(
      file =>
        file.startsWith(folderPath) &&
        file.endsWith('.json') &&
        ((type !== 'brand' && !file.includes('brand/')) ||
          (type === 'brand' && file.includes('brand/')))
    );

  return allFiles;
};

/**
 * Utility function to combine all tokens into a single object.
 * @returns {Record<'sys', Record<string, any>>} The combined tokens object
 */
export const combineTokens = (folderPath, type) => {
  const files = getTokensFilesList(folderPath, type);

  const innerToken = files.reduce((acc, file) => {
    const filePath = path.join(rootDir, 'tokens', file);
    const originalJson = fs.readFileSync(filePath, 'utf8');
    const parsedJson = JSON.parse(originalJson);

    const keys = Object.keys(parsedJson);
    const hasTypeWrapper = keys.length === 1 && keys.includes(type);
    const tokens = hasTypeWrapper ? parsedJson[type] : parsedJson;

    return {
      ...acc,
      ...tokens,
    };
  }, {});

  return Object.keys(innerToken).length ? {[type]: innerToken} : innerToken;
};

/**
 * Utility function to generate the base tokens file.
 * @param {Record<'base', Record<string, any>>} tokens The base tokens object
 */
export const generateBaseTokens = (tokens, folder) => {
  const isDeprecated = folder.includes('deprecated');
  const exportContent = addComments(tokens, isDeprecated);

  fs.mkdirSync(path.join(rootDir, 'export', folder), {recursive: true});
  const exportFile = path.join(rootDir, 'export', folder, 'base.json');
  fs.writeFileSync(exportFile, JSON.stringify(exportContent, null, 2), 'utf8');
};

const addComments = (tokens, isDeprecated) => {
  const COMMENT = 'File is auto-generated, do not edit it manually.';
  const DESCRIPTION =
    'File contains deprecated tokens that are no longer supported and will be removed in the future.';

  return isDeprecated
    ? {
        _comment: COMMENT,
        _description: DESCRIPTION,
        ...tokens,
      }
    : {_comment: COMMENT, ...tokens};
};
