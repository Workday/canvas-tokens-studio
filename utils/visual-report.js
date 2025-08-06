import fs from 'fs';

/**
 * Retrieves all Canvas-only JSON filenames from a directory.
 *
 * @param {string} directory - The directory path to scan for files
 * @returns {string[]} Array of file paths that match the criteria:
 *   - Files ending with "base.json"
 *   - Files ending with "canvas.json"
 *   - Files containing "sys/color" in their path
 *   - Files containing "sys/" but not "sys/brand" or "sys/color"
 *   - Excludes files in "deprecated/" directories
 * @example
 * const files = getDirectoryFiles("tokens");
 * // Returns: ["base.json", "sys/brand/canvas.json", "sys/color/color.json", ...]
 */
const getDirectoryFiles = (directory) => {
  return fs.readdirSync(directory, {recursive: true}).filter((file) => {
    // Skip deprecated files
    if (file.includes('deprecated/')) {
      return false;
    }

    const isBase = file.endsWith('base.json');
    const isBrand = file.endsWith('canvas.json');
    const isColor = file.includes('sys/color');
    const isSystem =
      file.includes('sys/') &&
      !file.includes('sys/brand') &&
      !file.includes('sys/color');

    return file.endsWith('.json') && (isBase || isBrand || isColor || isSystem);
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
const getContrastLight = (light) => {
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
 * const tokens = getContent("tokens/base.json");
 * // Returns: { "color": { "primary": { "value": "oklch(0.5,0.1,45,1)" } } }
 */
const getContent = (filename) => {
  const content = fs.readFileSync(`${filename}`, 'utf8');
  if (content) {
    return JSON.parse(content);
  }
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
  return withComma
    ? `oklch(${value.components.join(',')},${value.alpha})`
    : `oklch(${value.components.join(' ')} / ${value.alpha})`;
};

/**
 * Generates change records for new tokens that don't exist in the baseline.
 *
 * @param {Object} tokens - The token object to check
 * @param {string} token - The token name/path
 * @returns {Array} Array of change objects for new tokens
 * @example
 * const changes = generateNewChanges({ value: { colorSpace: "oklch", components: [0.5,0.1,45], alpha: 1 } }, "primary");
 * // Returns: [{ token: "primary", newColor: "oklch(0.5,0.1,45,1)", newColorLabel: "oklch(0.5 0.1 45 / 1)", prevColor: "", prevColorLabel: "" }]
 */
const generateNewChanges = (tokens, tokenName) => {
  if ('value' in tokens) {
    const {value} = tokens;

    if (typeof value === 'object' && value.colorSpace === 'oklch') {
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

  return [];
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
  if (path) {
    return path.split('.').reduce((acc, key) => acc[key], tokens);
  }
};

/**
 * Transforms a token reference string to resolve the actual color value.
 *
 * @param {string} value - The token reference string (e.g., "{color.primary}")
 * @param {string} folder - The folder containing the base tokens file
 * @returns {Object} Object with tokenName and resolved color value
 * @example
 * const result = transformRef("{color.primary}", "tokens");
 * // Returns: { tokenName: "color.primary", color: "oklch(0.5,0.1,45,1)" }
 */
const transformRef = (value, folder) => {
  const baseTokens = getContent(`${folder}/base.json`);
  const tokenName = value.match(/{([^}]+)}/)?.[1];
  const tokenRef = resolvePath(tokenName, baseTokens);
  const alphaRef = resolvePath(
    value.match(/{([^}]+)}/g)?.[1]?.replace(/[{}]/g, ''),
    baseTokens
  );

  if (alphaRef && tokenRef) {
    tokenRef.value.alpha = alphaRef.value;
  }

  return tokenRef
    ? {tokenName, color: getOklchString(tokenRef.value, {withComma: true})}
    : {tokenName: tokenName || value, color: value};
};

/**
 * Compares two string-based color tokens and returns differences if they don't match.
 *
 * @param {Object} newToken - The new token object
 * @param {Object} baselineToken - The baseline token object to compare against
 * @param {string} newToken.value - The new token's color value (can be reference or direct)
 * @param {string} baselineToken.value - The baseline token's color value
 * @returns {Object|null} Difference object with resolved color values or null if colors match
 * @example
 * const diff = checkStringColors(
 *   { value: "{color.primary}" },
 *   { value: "{color.secondary}" }
 * );
 * // Returns: { newColor: "oklch(0.5,0.1,45,1)", newColorLabel: "color.primary", prevColor: "oklch(0.6,0.1,45,1)", prevColorLabel: "color.secondary" }
 */
const checkStringColors = (newToken, baselineToken) => {
  const {value: newValue} = newToken;
  const {value: prevValue} = baselineToken;

  if (newValue !== prevValue) {
    const {tokenName: newColorLabel, color: newColor} = transformRef(
      newValue,
      'tokens'
    );

    const {tokenName: prevColorLabel, color: prevColor} = transformRef(
      prevValue,
      'tokens-base'
    );

    return {newColor, newColorLabel, prevColor, prevColorLabel};
  }
};

/**
 * Recursively compares two token objects and returns an array of differences.
 *
 * @param {Object} newTokens - The new tokens object to compare
 * @param {Object} baselineTokens - The baseline tokens object to compare against
 * @param {string} [token=""] - The current token path being compared
 * @returns {Array} Array of difference objects with token paths and value changes
 * @example
 * const differences = diffTokens(
 *   { color: { primary: { value: "oklch(0.6,0.1,45,1)", type: "color" } } },
 *   { color: { primary: { value: "oklch(0.5,0.1,45,1)", type: "color" } } }
 * );
 * // Returns: [{ token: "color.primary", newColor: "oklch(0.6,0.1,45,1)", newColorLabel: "oklch(0.6 0.1 45 / 1)", prevColor: "oklch(0.5,0.1,45,1)", prevColorLabel: "oklch(0.5 0.1 45 / 1)" }]
 */
const diffTokens = (newTokens, baselineTokens, token = '') => {
  const newTokensKeys = Object.keys(newTokens);

  if ('value' in newTokens) {
    if (newTokens.type === 'color') {
      if (
        typeof newTokens.value === 'object' &&
        newTokens.value.colorSpace === 'oklch'
      ) {
        const checkResult = checkOklchColors(newTokens, baselineTokens);

        if (checkResult) {
          return [{token, ...checkResult}];
        }
      }

      if (typeof newTokens.value === 'string') {
        const checkResult = checkStringColors(newTokens, baselineTokens);

        if (checkResult) {
          return [{token, ...checkResult}];
        }
      }
    } else {
      const newTokensValue = JSON.stringify(newTokens.value);
      const baselineTokensValue = JSON.stringify(baselineTokens.value);

      if (newTokensValue !== baselineTokensValue) {
        return [
          {
            token,
            newValue: newTokensValue,
            prevValue: baselineTokensValue,
          },
        ];
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
          ...diffTokens(newTokens[key], baselineTokens[key], newTokenName),
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
const createComment = (result) => {
  const body = result.reduce((acc, {filename, diff}) => {
    const diffRows = diff.map(
      ({
        token,
        newColor,
        newColorLabel,
        newValue,
        prevColor,
        prevColorLabel,
        prevValue,
      }) =>
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
 * Generates a comprehensive visual comparison report between new tokens and baseline tokens.
 *
 * This function:
 * 1. Scans the tokens directory for relevant JSON files
 * 2. Compares each file with its baseline counterpart in tokens-base
 * 3. Identifies differences in color tokens and other values
 * 4. Generates a markdown report with visual color swatches
 *
 * @returns {string} Complete markdown report with visual comparisons
 * @example
 * const report = generateReport();
 * console.log(report);
 * // Outputs: "## Visual Comparison\n\n### base.json\n\n| Token name | Old value | New value |\n..."
 */
function generateReport() {
  const newTokensFiles = getDirectoryFiles('tokens');

  const result = newTokensFiles.reduce((acc, filename) => {
    const newTokens = getContent(`tokens/${filename}`);
    const baselineTokens = getContent(`tokens-base/${filename}`);

    const diff = diffTokens(newTokens, baselineTokens);

    return diff.length ? [...acc, {filename, diff}] : acc;
  }, []);

  return createComment(result);
}

console.log(generateReport());
