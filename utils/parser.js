import {createExportTokens} from './files/createExportTokens.js';

const {CHANGED} = process.env;

const getTypes = changed => {
  if (changed === 'all') {
    return ['base', 'brand', 'sys'];
  }

  if (changed.includes('base.json')) {
    return ['base'];
  }

  if (changed.includes('brand/canvas.json')) {
    return ['brand'];
  }

  if (changed.includes('tokens/sys')) {
    return ['sys'];
  }

  return [];
};

if (CHANGED) {
  const types = getTypes(CHANGED);
  createExportTokens(types);
}
