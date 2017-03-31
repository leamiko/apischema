/* eslint-disable no-undef */
import check from '../lib/check';
const assert = require('chai').assert;

describe('check', () => {
  describe('#check()', () => {
    it('should return array', () => {
      assert.throws(() => {
        check({
          appid: { type: String, required: true },
        }, {});
      }, '缺少参数：请添加appid参数');
      assert.throws(() => {
        check({
          appid: { type: String, required: true },
        }, {
          appid: 1,
        });
      }, '类型错误：参数appid类型错误');
      assert.doesNotThrow(() => {
        check({
          appid: { type: Number, required: true },
        }, {
          appid: 0,
        });
      });
      assert.doesNotThrow(() => {
        check({
          appid: { type: String, required: true },
        }, {
          appid: '',
        });
      });
    });
  });
});
