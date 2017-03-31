/* eslint-disable no-undef */
const assert = require('chai').assert;
import pathparams from '../src/pathparams';

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal('/notes/111', pathparams('/notes/{id}', { id: '111' }));
      assert.equal('/notes/1/0', pathparams('/notes/{page}/{sort}', { page: 1, sort: 0 }));
    });
  });
});
