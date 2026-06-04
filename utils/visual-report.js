import fs from 'fs';
import path from 'path';

/**
 * Retrieves all Canvas-only JSON filenames from a directory.
 *
 * @param {string} directory - The directory path to scan for files
 * @returns {string[]} Array of file paths that match the criteria:
 *   - Files ending with "base.json" or in "base/" folder
 *   - Files ending with "canvas.json"
 *   - Files containing "sys/color" in their path
 *   - Files containing "sys/" but not "sys/brand" or "sys/color"
 *   - Files in "theme/" folder
 *   - Excludes files in "deprecated/" directories
 * @example
 * const files = getDirectoryFiles("tokens");
 * // Returns: ["base/base.json", "sys/brand/canvas.json", "sys/color/color.json", "theme/sana.json", ...]
 */
const getDirectoryFiles = directory => {
  if (!fs.existsSync(directory)) {
    return [];
  }

  return fs.readdirSync(directory, {recursive: true}).filter(file => {
    // Skip Tokens Studio metadata files
    if (file === '$metadata.json' || file === '$themes.json') {
      return false;
    }

    // Check if file is in base folder or ends with base.json
    const isBase =
      file.includes('/base/') || file.endsWith('base.json') || file.startsWith('base/');
    // Check if file ends with canvas.json
    const isBrand = file.endsWith('canvas.json');
    // Check if file is in sys/color folder
    const isColor = file.includes('sys/color');
    // Check if file is in sys/ folder but not sys/brand or sys/color
    const isSystem =
      file.includes('sys/') && !file.includes('sys/brand') && !file.includes('sys/color');
    // Check if file is in theme folder
    const isTheme = file.includes('theme/') || file.startsWith('theme/');

    return file.endsWith('.json') && (isBase || isBrand || isColor || isSystem || isTheme);
  });
};

/**
 * Calculates a contrasting lightness value for text readability over a background color.
 *
 * @param {number} light - The lightness value (0-1) from an OKLCH color
 * @returns {number} Adjusted lightness value (0-1) that provides good contrast
 * @example
 * const contrastLight = getContrastLight(0.3); // Returns ~0.7
 */
const getContrastLight = light => {
  const newLight =
    light < 0.4 && light > 0.2
      ? 1 - light + 0.3
      : light > 0.6 && light < 0.7
        ? 1 - light - 0.3
        : light >= 0.4 && light <= 0.6
          ? 1 - light + 0.4
          : 1 - light;

  return newLight > 1 ? 1 : newLight < 0 ? 0 : newLight;
};

/**
 * Generates an HTML img tag for a color swatch using the md-color-swatches service to render a color swatch in markdown.
 *
 * @param {string} token - The token name for the alt text
 * @param {string} color - The OKLCH color value (e.g., "oklch(0.5,0.1,45,1)")
 * @param {string} colorLabel - The label to display on the swatch
 * @returns {string} HTML img tag with the color swatch
 * @example
 * const swatch = fillMdSwatch("primary", "oklch(0.5,0.1,45,1)", "Primary Color");
 * // Returns: <img valign='middle' alt='primary color swatch' src='https://md-color-swatches.vercel.app/oklch(0.5,0.1,45,1)?top=24&left=48&text=Primary%20Color&tc=oklch(0.7,0,0,1)&style=round'/>
 */
const fillMdSwatch = (token, color, colorLabel) => {
  const match = color.match(/[-+]?\d*\.?\d+/);
  const alpha = parseFloat(color.split(',')[3]);

  const light = match ? parseFloat(match[0]) : 0;
  const newLight = getContrastLight(light);

  const textColor =
    alpha < 0.4
      ? 'oklch(0,0,0,1)'
      : light
        ? color.replace(light, newLight).replace(`,${alpha})`, `,1)`)
        : 'oklch(1,0,0,1)';

  const label = colorLabel.replaceAll(' ', '%20');
  return `<img valign='middle' alt='${token} color swatch' src='https://md-color-swatches.vercel.app/${color}?top=24&left=48&text=${label}&tc=${textColor}&style=round'/>`;
};

/**
 * Reads and parses a JSON file from the filesystem.
 *
 * @param {string} filename - The path to the JSON file to read
 * @returns {Object|undefined} Parsed JSON object or undefined if file is empty
 * @example
 * const tokens = getContent("tokens/base/base.json");
 * // Returns: { "color": { "primary": { "value": "oklch(0.5,0.1,45,1)" } } }
 */
const getContent = filename => {
  const filePath = path.isAbsolute(filename) ? filename : path.resolve(process.cwd(), filename);
  const checkFile = fs.existsSync(filePath);
  if (checkFile) {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content) {
      return JSON.parse(content);
    }
  }

  return {};
};

/**
 * Converts an OKLCH color object to a string representation.
 *
 * @param {Object} value - The OKLCH color object with components and alpha properties
 * @param {number[]} value.components - Array of [L, C, H] values
 * @param {number} value.alpha - Alpha value (0-1)
 * @param {Object} options - Formatting options
 * @param {boolean} [options.withComma=false] - Whether to use comma-separated format
 * @returns {string} Formatted OKLCH color string
 * @example
 * const colorObj = { components: [0.5, 0.1, 45], alpha: 1 };
 * getOklchString(colorObj); // Returns: "oklch(0.5 0.1 45 / 1)"
 * getOklchString(colorObj, { withComma: true }); // Returns: "oklch(0.5,0.1,45,1)"
 */
const getOklchString = (value, {withComma = false} = {}) => {
  if (value?.components) {
    return withComma
      ? `oklch(${value.components.join(',')},${value.alpha})`
      : `oklch(${value.components.join(' ')} / ${value.alpha})`;
  }

  return value;
};

/**
 * Generates change records for new tokens that don't exist in the baseline.
 * Recursively walks nested namespaces so newly-added branches (e.g. a brand new
 * theme file with no baseline counterpart) report every leaf as a new token.
 *
 * @param {Object} tokens - The token object to check (leaf or nested namespace)
 * @param {string} tokenName - The token name/path
 * @returns {Array} Array of change objects for new tokens
 * @example
 * const changes = generateNewChanges({ value: { colorSpace: "oklch", components: [0.5,0.1,45], alpha: 1 } }, "primary");
 * // Returns: [{ token: "primary", newColor: "oklch(0.5,0.1,45,1)", newColorLabel: "oklch(0.5 0.1 45 / 1)", prevColor: "", prevColorLabel: "" }]
 */
const generateNewChanges = (tokens, tokenName) => {
  if (!tokens || typeof tokens !== 'object') {
    return [];
  }

  if ('value' in tokens) {
    const {value} = tokens;

    if (typeof value === 'object' && value !== null && value.colorSpace === 'oklch') {
      return [
        {
          token: tokenName,
          newColor: getOklchString(value, {withComma: true}),
          newColorLabel: getOklchString(value),
          prevColor: '',
          prevColorLabel: '',
        },
      ];
    } else {
      return [
        {
          token: tokenName,
          newValue: value,
          prevValue: '',
        },
      ];
    }
  }

  // Nested namespace - recurse into each child to collect new leaves
  return Object.keys(tokens).reduce((acc, key) => {
    const childPath = tokenName ? `${tokenName}.${key}` : key;
    return [...acc, ...generateNewChanges(tokens[key], childPath)];
  }, []);
};

/**
 * Compares two OKLCH color tokens and returns differences if they don't match.
 *
 * @param {Object} newToken - The new token object
 * @param {Object} baselineToken - The baseline token object to compare against
 * @param {Object} newToken.value - The new token's OKLCH color value
 * @param {Object} baselineToken.value - The baseline token's OKLCH color value
 * @returns {Object|null} Difference object with color values or null if colors match
 * @example
 * const diff = checkOklchColors(
 *   { value: { components: [0.6,0.1,45], alpha: 1 } },
 *   { value: { components: [0.5,0.1,45], alpha: 1 } }
 * );
 * // Returns: { newColor: "oklch(0.6,0.1,45,1)", newColorLabel: "oklch(0.6 0.1 45 / 1)", prevColor: "oklch(0.5,0.1,45,1)", prevColorLabel: "oklch(0.5 0.1 45 / 1)" }
 */
const checkOklchColors = (newToken, baselineToken) => {
  // If baseline token doesn't exist or doesn't have a value, treat as new token
  if (!baselineToken || !baselineToken.value) {
    return {
      newColor: getOklchString(newToken.value, {withComma: true}),
      newColorLabel: getOklchString(newToken.value),
      prevColor: '',
      prevColorLabel: '',
    };
  }

  const newColor = getOklchString(newToken.value);
  const prevColor = getOklchString(baselineToken.value);

  if (newColor !== prevColor) {
    return {
      newColor: getOklchString(newToken.value, {withComma: true}),
      newColorLabel: getOklchString(newToken.value),
      prevColor: getOklchString(baselineToken.value, {withComma: true}),
      prevColorLabel: getOklchString(baselineToken.value),
    };
  }
};

/**
 * Resolves a dot-notation path to get a nested value from an object.
 *
 * @param {string} path - Dot-notation path (e.g., "color.primary.value")
 * @param {Object} tokens - The object to traverse
 * @returns {*} The value at the specified path or undefined if not found
 * @example
 * const value = resolvePath("color.primary", { color: { primary: { value: "oklch(0.5,0.1,45,1)" } } });
 * // Returns: { value: "oklch(0.5,0.1,45,1)" }
 */
const resolvePath = (path, tokens) => {
  if (!path || !tokens) {
    return null;
  }
  const result = path.split('.').reduce((acc, key) => {
    if (acc && typeof acc === 'object' && key in acc) {
      return acc[key];
    }
    return null;
  }, tokens);
  return result || null;
};

/**
 * Recursively resolves a token reference to its actual value.
 * Handles nested references like {palette.blue.600} -> actual OKLCH color.
 *
 * @param {string} tokenName - Dot-notation reference path (e.g., "palette.blue.600")
 * @param {Object} tokens - The tokens object used as the resolution context
 * @param {Set<string>} [visited] - Set of already-visited tokens used to short-circuit cycles
 * @returns {Object|string|null} Resolved OKLCH object, raw string value, or null when unresolved
 */
const resolveTokenValue = (tokenName, tokens, visited = new Set()) => {
  if (!tokenName || visited.has(tokenName)) {
    return null;
  }

  visited.add(tokenName);

  // Try different path variations
  const pathVariations = [
    tokenName, // Original path
    tokenName.startsWith('base.') ? tokenName.substring(5) : null, // Without base. prefix
    tokenName.startsWith('base.') ? null : `base.${tokenName}`, // With base. prefix
  ].filter(Boolean);

  let tokenRef = null;
  for (const path of pathVariations) {
    tokenRef = resolvePath(path, tokens);
    // Check if we found a valid token object with a value property
    if (tokenRef && typeof tokenRef === 'object' && tokenRef !== null && 'value' in tokenRef) {
      break;
    }
    tokenRef = null;
  }

  if (!tokenRef || typeof tokenRef !== 'object' || !('value' in tokenRef)) {
    return null;
  }

  // If it's an OKLCH color object, return it
  if (
    typeof tokenRef.value === 'object' &&
    tokenRef.value !== null &&
    tokenRef.value.colorSpace === 'oklch'
  ) {
    return tokenRef.value;
  }

  // If it's a string reference, try to resolve it recursively
  if (
    typeof tokenRef.value === 'string' &&
    tokenRef.value.startsWith('{') &&
    tokenRef.value.endsWith('}')
  ) {
    const nestedTokenName = tokenRef.value.match(/{([^}]+)}/)?.[1];
    if (nestedTokenName) {
      const resolved = resolveTokenValue(nestedTokenName, tokens, visited);
      if (resolved) {
        return resolved;
      }
    }
  }

  return tokenRef.value;
};

/**
 * Recursively deep-merges a source object into a target object, preserving nested
 * structures and treating token leaves (objects with `value` or `type`) as atoms.
 *
 * @param {Object} target - The target object to merge into
 * @param {Object} source - The source object to merge from
 * @returns {Object} The mutated target object
 */
const deepMerge = (target, source) => {
  if (!source || typeof source !== 'object' || Array.isArray(source)) {
    return target;
  }
  for (const key in source) {
    const sourceValue = source[key];
    if (
      sourceValue &&
      typeof sourceValue === 'object' &&
      !Array.isArray(sourceValue) &&
      !('value' in sourceValue) &&
      !('type' in sourceValue)
    ) {
      // It's a nested object (like palette.blue), merge recursively
      target[key] = target[key] || {};
      deepMerge(target[key], sourceValue);
    } else {
      // It's a leaf value or token object (has value/type), assign directly
      target[key] = sourceValue;
    }
  }
  return target;
};

/**
 * Loads and merges all token JSON files from a folder into a single tokens object
 * suitable for resolving references. Files in `base/` are also exposed under a
 * `base` wrapper so both prefixed and unprefixed references resolve.
 * Theme files (under `theme/`) are skipped here because they are self-contained
 * and would otherwise pollute the shared reference space.
 *
 * @param {string} folder - The folder path to load tokens from
 * @returns {Object} Merged tokens object used for reference resolution
 * @example
 * const tokens = loadTokensFromFolder("tokens");
 * // Returns: { palette: {...}, base: { palette: {...} }, color: {...}, ... }
 */
const loadTokensFromFolder = folder => {
  const folderPath = path.isAbsolute(folder) ? folder : path.resolve(process.cwd(), folder);

  if (!fs.existsSync(folderPath)) {
    return {};
  }

  const baseDir = fs.readdirSync(folderPath, {recursive: true}).filter(
    file =>
      file.endsWith('.json') &&
      file !== '$metadata.json' &&
      file !== '$themes.json' &&
      // Theme files are self-contained and resolved against their own content
      !file.includes('theme/')
  );

  return baseDir.reduce((acc, file) => {
    const filePath = path.join(folderPath, file);
    const content = getContent(filePath);
    if (!content || Object.keys(content).length === 0) {
      return acc;
    }

    // Check if content has a single top-level key (wrapper)
    const contentKeys = Object.keys(content);
    const hasWrapper = contentKeys.length === 1 && !('value' in content) && !('type' in content);

    if (hasWrapper) {
      // Preserve the wrapper key structure (e.g., {"palette": {...}} stays as {"palette": {...}})
      const wrapperKey = contentKeys[0];
      const unwrapped = content[wrapperKey];

      // Merge at root level with wrapper key preserved
      if (!acc[wrapperKey]) {
        acc[wrapperKey] = {};
      }
      deepMerge(acc[wrapperKey], unwrapped);

      // If file is in base/ folder, also add it under "base" key for base.* references
      if (file.startsWith('base/')) {
        if (!acc.base) {
          acc.base = {};
        }
        if (!acc.base[wrapperKey]) {
          acc.base[wrapperKey] = {};
        }
        deepMerge(acc.base[wrapperKey], unwrapped);
      }
    } else {
      // No wrapper, merge directly (already unwrapped or flat structure)
      const unwrapped = unwrapTokens(content);
      if (unwrapped && Object.keys(unwrapped).length > 0) {
        deepMerge(acc, unwrapped);

        if (file.startsWith('base/')) {
          if (!acc.base) {
            acc.base = {};
          }
          deepMerge(acc.base, unwrapped);
        }
      }
    }

    return acc;
  }, {});
};

/**
 * Resolves a token reference string to its actual color value using a pre-loaded tokens object.
 *
 * @param {string} value - The token reference string (e.g., "{color.primary}")
 * @param {Object} refTokens - Pre-loaded tokens used as the resolution context
 * @returns {Object} Object with tokenName and resolved color value
 * @example
 * const result = transformRef("{color.primary}", baseTokens);
 * // Returns: { tokenName: "color.primary", color: "oklch(0.5,0.1,45,1)" }
 */
const transformRef = (value, refTokens) => {
  if (!refTokens || Object.keys(refTokens).length === 0) {
    return {tokenName: value.match(/{([^}]+)}/)?.[1] || value, color: value};
  }

  const tokenName = value.match(/{([^}]+)}/)?.[1];

  // Resolve the token value recursively
  const resolvedValue = resolveTokenValue(tokenName, refTokens);

  // Handle alpha references (e.g., oklch({base.palette.neutral.1000} / {opacity.0}))
  const alphaMatch = value.match(/{([^}]+)}/g);
  if (alphaMatch && alphaMatch.length > 1) {
    const alphaTokenName = alphaMatch[1]?.replace(/[{}]/g, '');
    const alphaValue = resolveTokenValue(alphaTokenName, refTokens);
    if (
      alphaValue &&
      resolvedValue &&
      typeof resolvedValue === 'object' &&
      resolvedValue.alpha !== undefined
    ) {
      resolvedValue.alpha =
        typeof alphaValue === 'object' && alphaValue.value !== undefined
          ? alphaValue.value
          : alphaValue;
    }
  }

  if (resolvedValue) {
    // If it's an OKLCH color object, convert it
    if (typeof resolvedValue === 'object' && resolvedValue.colorSpace === 'oklch') {
      return {
        tokenName,
        color: getOklchString(resolvedValue, {withComma: true}),
      };
    }
    // If it's still a string reference we couldn't resolve, return it
    if (typeof resolvedValue === 'string') {
      return {tokenName, color: resolvedValue};
    }
  }

  return {tokenName: tokenName || value, color: value};
};

/**
 * Normalizes token references by removing common prefixes that don't change the semantic meaning.
 * Examples:
 * - "base.palette.blue.100" -> "palette.blue.100"
 * - "system.shape.xs" -> "shape.xs"
 * - "sys.shape.xs" -> "shape.xs"
 *
 * @param {string} value - The token reference string or value
 * @returns {string} Normalized value with prefixes removed
 * @example
 * normalizeTokenRef("{base.palette.blue.100}"); // Returns: "{palette.blue.100}"
 * normalizeTokenRef("system.shape.xs"); // Returns: "shape.xs"
 */
const normalizeTokenRef = value => {
  if (typeof value !== 'string') {
    return value;
  }

  // Normalize references within curly braces: {base.palette.blue.100} -> {palette.blue.100}
  // Also handle complex strings like: oklch({base.palette.neutral.1000} / {opacity.0})
  return value.replace(/{([^}]+)}/g, (match, ref) => {
    // Remove common prefixes: base., system., sys.
    let normalized = ref.replace(/^(base\.|brand\.|system\.|sys\.)/, '');
    return `{${normalized}}`;
  });
};

/**
 * Compares two string-based color tokens and returns differences if they don't match.
 * Ignores differences that are only due to reference prefix variations (e.g., base.palette vs palette).
 *
 * @param {Object} newToken - The new token object
 * @param {Object} baselineToken - The baseline token object to compare against
 * @param {string} newToken.value - The new token's color value (can be reference or direct)
 * @param {string} baselineToken.value - The baseline token's color value
 * @param {Object} newRefTokens - Pre-loaded tokens used to resolve references in the new token
 * @param {Object} baselineRefTokens - Pre-loaded tokens used to resolve references in the baseline token
 * @returns {Object|null} Difference object with resolved color values or null if colors match
 * @example
 * const diff = checkStringColors(
 *   { value: "{color.primary}" },
 *   { value: "{color.secondary}" },
 *   newRefTokens,
 *   baselineRefTokens
 * );
 * // Returns: { newColor: "oklch(0.5,0.1,45,1)", newColorLabel: "color.primary", prevColor: "oklch(0.6,0.1,45,1)", prevColorLabel: "color.secondary" }
 */
const checkStringColors = (newToken, baselineToken, newRefTokens, baselineRefTokens) => {
  const {value: newValue} = newToken;

  // If baseline token doesn't exist or doesn't have a value, treat as new token
  if (!baselineToken || !baselineToken.value) {
    const {tokenName: newColorLabel, color: newColor} = transformRef(newValue, newRefTokens);
    return {newColor, newColorLabel, prevColor: '', prevColorLabel: ''};
  }

  const {value: prevValue} = baselineToken;

  // Normalize both values to ignore prefix differences
  const normalizedNewValue = normalizeTokenRef(newValue);
  const normalizedPrevValue = normalizeTokenRef(prevValue);

  // If normalized values are the same, they're equivalent - no difference
  if (normalizedNewValue === normalizedPrevValue) {
    return null;
  }

  // Values are different even after normalization, so show the difference
  const {tokenName: newColorLabel, color: newColor} = transformRef(newValue, newRefTokens);
  const {tokenName: prevColorLabel, color: prevColor} = transformRef(prevValue, baselineRefTokens);

  return {newColor, newColorLabel, prevColor, prevColorLabel};
};

/**
 * Recursively compares two token objects and returns an array of differences.
 *
 * @param {Object} newTokens - The new tokens object to compare
 * @param {Object} baselineTokens - The baseline tokens object to compare against
 * @param {string} [token=""] - The current token path being compared
 * @param {Object} [newRefTokens={}] - Pre-loaded tokens used to resolve references for new values
 * @param {Object} [baselineRefTokens={}] - Pre-loaded tokens used to resolve references for baseline values
 * @returns {Array} Array of difference objects with token paths and value changes
 * @example
 * const differences = diffTokens(
 *   { color: { primary: { value: "oklch(0.6,0.1,45,1)", type: "color" } } },
 *   { color: { primary: { value: "oklch(0.5,0.1,45,1)", type: "color" } } }
 * );
 * // Returns: [{ token: "color.primary", newColor: "oklch(0.6,0.1,45,1)", newColorLabel: "oklch(0.6 0.1 45 / 1)", prevColor: "oklch(0.5,0.1,45,1)", prevColorLabel: "oklch(0.5 0.1 45 / 1)" }]
 */
const diffTokens = (
  newTokens,
  baselineTokens,
  token = '',
  newRefTokens = {},
  baselineRefTokens = {}
) => {
  const newTokensKeys = Object.keys(newTokens);

  if ('value' in newTokens) {
    // If baseline token doesn't exist, treat as new token
    if (!baselineTokens || !('value' in baselineTokens)) {
      return generateNewChanges(newTokens, token);
    }

    if (newTokens.type === 'color') {
      if (typeof newTokens.value === 'object' && newTokens.value.colorSpace === 'oklch') {
        const checkResult = checkOklchColors(newTokens, baselineTokens);

        if (checkResult) {
          return [{token, ...checkResult}];
        }
      }

      if (typeof newTokens.value === 'string') {
        const checkResult = checkStringColors(
          newTokens,
          baselineTokens,
          newRefTokens,
          baselineRefTokens
        );

        if (checkResult) {
          return [{token, ...checkResult}];
        }
      }
    } else {
      // For non-color values, normalize string references before comparing
      let newTokensValue = newTokens.value;
      let baselineTokensValue = baselineTokens.value || '';

      // If values are strings, normalize them to ignore prefix differences
      if (typeof newTokensValue === 'string' && typeof baselineTokensValue === 'string') {
        const normalizedNew = normalizeTokenRef(newTokensValue);
        const normalizedPrev = normalizeTokenRef(baselineTokensValue);

        // If normalized values are the same, they're equivalent - no difference
        if (normalizedNew === normalizedPrev) {
          return [];
        }
      }

      // Values are different, show the difference
      const newTokensValueStr = JSON.stringify(newTokensValue);
      const baselineTokensValueStr = JSON.stringify(baselineTokensValue);

      if (newTokensValueStr !== baselineTokensValueStr) {
        return [{token, newValue: newTokensValueStr, prevValue: baselineTokensValueStr}];
      }
    }

    return [];
  }

  return newTokensKeys
    .reduce((acc, key) => {
      const newTokenName = token ? `${token}.${key}` : key;
      if (baselineTokens[key]) {
        return [
          ...acc,
          ...diffTokens(
            newTokens[key],
            baselineTokens[key],
            newTokenName,
            newRefTokens,
            baselineRefTokens
          ),
        ];
      } else {
        return [...acc, ...generateNewChanges(newTokens[key], newTokenName)];
      }
    }, [])
    .flat();
};

/**
 * Creates a markdown comment with a visual comparison table from the diff results.
 *
 * @param {Array} result - Array of file comparison results
 * @param {string} result[].filename - The filename being compared
 * @param {Array} result[].diff - Array of token differences for the file
 * @returns {string} Formatted markdown string with comparison tables
 * @example
 * const report = createComment([
 *   {
 *     filename: "base.json",
 *     diff: [{ token: "color.primary", newColor: "oklch(0.6,0.1,45,1)", newColorLabel: "Primary", prevColor: "oklch(0.5,0.1,45,1)", prevColorLabel: "Primary" }]
 *   }
 * ]);
 * // Returns: "## Visual Comparison\n\n### base.json\n\n| Token name | Old value | New value |\n| --- | :---: | :---: |\n| `color.primary` | [color swatch] | [color swatch] |"
 */
const createComment = result => {
  const body = result.reduce((acc, {filename, diff}) => {
    const diffRows = diff.map(
      ({token, newColor, newColorLabel, newValue, prevColor, prevColorLabel, prevValue}) =>
        `| \`${token}\` | ${
          prevColor
            ? fillMdSwatch(token, prevColor, prevColorLabel)
            : prevValue
              ? `\`${prevValue}\``
              : 'none'
        } | ${
          newColor
            ? fillMdSwatch(token, newColor, newColorLabel)
            : newValue
              ? `\`${newValue}\``
              : 'none'
        } |`
    );

    return diff.length
      ? `${acc}\n\n### ${filename}\n\n` +
          '| Token name | Old value | New value |\n' +
          '| --- | :---: | :---: |\n' +
          diffRows.join('\n')
      : acc;
  }, '');

  return body ? `## Visual Comparison${body}` : '';
};

/**
 * Unwraps the top-level key from a token file object.
 * Token files have a structure like {"base": {...}} or {"color": {...}}.
 * This function extracts the inner object.
 *
 * @param {Object} tokens - The token object with a top-level wrapper key
 * @returns {Object} The unwrapped token object
 * @example
 * const unwrapped = unwrapTokens({base: {fontSize: {value: "16"}}});
 * // Returns: {fontSize: {value: "16"}}
 */
const unwrapTokens = tokens => {
  if (!tokens || typeof tokens !== 'object') {
    return {};
  }

  const keys = Object.keys(tokens);
  // If there's a single top-level key and it's not a token structure (doesn't have 'value' property),
  // unwrap it. Common wrapper keys: base, color, palette, sys, etc.
  if (keys.length === 1 && !('value' in tokens) && !('type' in tokens)) {
    return tokens[keys[0]];
  }

  return tokens;
};

/**
 * Generates a comprehensive visual comparison report between new tokens and baseline tokens.
 *
 * This function:
 * 1. Scans the tokens directory for relevant JSON files
 * 2. Compares each file with its baseline counterpart in tokens-base
 * 3. Identifies differences in color tokens and other values
 * 4. Generates a markdown report with visual color swatches
 *
 * @param {string} [newTokensDir='tokens'] - Directory path for new tokens
 * @param {string} [baselineTokensDir='tokens-base'] - Directory path for baseline tokens
 * @returns {string} Complete markdown report with visual comparisons
 * @example
 * const report = generateReport();
 * console.log(report);
 * // Outputs: "## Visual Comparison\n\n### base/base.json\n\n| Token name | Old value | New value |\n..."
 */
function generateReport(newTokensDir = 'tokens', baselineTokensDir = 'tokens-base') {
  // Resolve paths relative to current working directory
  const newTokensPath = path.isAbsolute(newTokensDir)
    ? newTokensDir
    : path.resolve(process.cwd(), newTokensDir);

  const baselineTokensPath = path.isAbsolute(baselineTokensDir)
    ? baselineTokensDir
    : path.resolve(process.cwd(), baselineTokensDir);

  const newTokensFiles = getDirectoryFiles(newTokensPath);

  // Pre-load base/system tokens once for reference resolution across non-theme files
  const baseNewRefTokens = loadTokensFromFolder(newTokensPath);
  const baseBaselineRefTokens = loadTokensFromFolder(baselineTokensPath);

  const result = newTokensFiles.reduce((acc, filename) => {
    const newTokensFilePath = path.join(newTokensPath, filename);
    const baselineTokensFilePath = path.join(baselineTokensPath, filename);

    const newTokensRaw = getContent(newTokensFilePath);
    const baselineTokensRaw = getContent(baselineTokensFilePath);

    // Theme files are self-contained: references like {base.palette.*}, {brand.*}, {sys.*}
    // resolve within the theme file itself rather than the shared base tokens.
    const isThemeFile = filename.startsWith('theme/') || filename.includes('/theme/');
    const newRefTokens = isThemeFile ? newTokensRaw : baseNewRefTokens;
    const baselineRefTokens = isThemeFile ? baselineTokensRaw : baseBaselineRefTokens;

    // Unwrap the top-level key from both token files.
    // Theme files have multiple top-level keys (base, brand, sys) so they remain unwrapped.
    const newTokens = unwrapTokens(newTokensRaw);
    const baselineTokens = unwrapTokens(baselineTokensRaw);

    const diff = diffTokens(newTokens, baselineTokens, '', newRefTokens, baselineRefTokens);

    return diff.length ? [...acc, {filename, diff}] : acc;
  }, []);

  return createComment(result);
}

console.log(generateReport());
