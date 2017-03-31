/* eslint-disable no-undef */
const assert = require('chai').assert;
import getType from '../lib/gettype';

describe('getType', () => {
  describe('#getType()', () => {
    it('should return array', () => {
      assert.equal('array', getType([]));
    });
    it('should return string', () => {
      assert.equal('string', getType('aaa'));
    });
    it('should return number', () => {
      assert.equal('number', getType(1));
      assert.equal('number', getType(111.11));
    });
    it('should return boolean', () => {
      assert.equal('boolean', getType(true));
      assert.equal('boolean', getType(false));
    });
  });
});
