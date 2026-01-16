import fs from 'fs';

/**
 * Retrieves all Canvas-only JSON filenames from a directory.
 *
 * @param {string} directory - The directory path to scan for files
 * @param {'all' | 'main' | 'deprecated'} [includes='all'] - Controls inclusion of deprecated files:
 *   - 'main': include only non-deprecated files (exclude paths containing "deprecated/").
 *   - 'deprecated': include only files in "deprecated/" directories.
 *   - 'all': include both deprecated and non-deprecated files.
 * @returns {string[]} Array of file paths that match the criteria:
 *   - Files ending with "base.json" or in "base/" folder
 *   - Files ending with "canvas.json"
 *   - Files containing "sys/color" in their path
 *   - Files containing "sys/" but not "sys/brand" or "sys/color"
 *   - Excludes files in "deprecated/" directories
 * @example
 * const files = getDirectoryFiles("tokens");
 * // Returns: ["base/base.json", "sys/brand/canvas.json", "sys/color/color.json", ...]
 */
export const getDirectoryFiles = (directory, includes = 'all') => {
  if (!fs.existsSync(directory)) {
    return [];
  }

  return fs.readdirSync(directory, {recursive: true}).filter(file => {
    // Skip deprecated files
    if (includes === 'main' && file.includes('deprecated/')) {
      return false;
    }

    if (includes === 'deprecated' && !file.includes('deprecated/')) {
      return false;
    }

    // Skip metadata and theme files
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

    return file.endsWith('.json') && (isBase || isBrand || isColor || isSystem);
  });
};
