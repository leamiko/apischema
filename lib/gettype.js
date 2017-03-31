const isArray = require('isarray');

export default (value) => {
  if (typeof value === 'number') return 'number';
  if (typeof value === 'string') return 'string';
  if (typeof value === 'boolean') return 'boolean';
  if (isArray(value)) return 'array';
  return '';
};
