import pathParams from './src/pathparams';
import combineQuery from './src/combinequery';
import check from './src/check';

export default (config) => {
  const io = config.http;
  // io.get => Promise
  // io.post => Promise
  // io.put => Promise
  // io.delete => Promise
  return {
    combineUrl(method, url, params) {
      // 替换path参数
      let combineUrl = pathParams(url, params);
      if (method === 'get') {
        combineUrl = combineQuery(combineUrl, params);
      }
      return combineUrl;
    },
    define(url, schema = {}, method = 'get') {
      return (params) => {
        // 验证请求参数的合法性
        check(schema, params);
        // 最终发送给接口的参数
        const sendParams = {};
        Object.keys(schema).forEach((param) => {
          // 如果只是用于接口URL中的参数，则不加入进最终发送给接口的参数
          if (!schema[param].urlOnly) {
            sendParams[param] = params[param];
          }
        });
        return io[method](this.combineUrl(method, url, params), sendParams);
      };
    },
    get(url, schema) {
      return this.define(url, schema);
    },
    post(url, schema) {
      return this.define(url, schema, 'post');
    },
    delete(url, schema) {
      return this.define(url, schema, 'delete');
    },
    put(url, schema) {
      return this.define(url, schema, 'put');
    },
  };
};
