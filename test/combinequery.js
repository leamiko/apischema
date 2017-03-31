/* eslint-disable no-undef */
const assert = require('chai').assert;
import combinequery from '../src/combinequery';

describe('Url', () => {
  describe('#combinequery()', () => {
    it('should return a.com/index.html?a=1&b=2', () => {
      assert.equal('a.com/index.html?a=1&b=2', combinequery('a.com/index.html', { a: '1', b: 2 }));
      assert.equal('a.com/index.html?a=1&b=2', combinequery('a.com/index.html?a=1', { b: 2 }));
    });
  });
});
