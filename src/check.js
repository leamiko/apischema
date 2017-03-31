import getType from './gettype';

const schemaTypes = {
  number: Number,
  string: String,
  array: Array,
  boolean: Boolean,
};

export default (schema, params) => {
  Object.keys(schema).forEach((param) => {
    if (schema[param].required &&
      params[param] === void 0) throw new TypeError(`缺少参数：请添加${param}参数`);
    if (schema[param].type !== schemaTypes[getType(params[param])]) {
      throw new TypeError(`类型错误：参数${param}类型错误`);
    }
  });
};
