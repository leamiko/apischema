import pathParams from './pathparams';
import combineQuery from './combinequery';
import check from './check';

export default (config) => {
  const io = config.http;
  // io.get => Promise
  // io.post => Promise
  // io.put => Promise
  // io.delete => Promise
  return {
    combineUrl(method, url, params, sendParams) {
      // 替换path参数
      let combineUrl = pathParams(url, params);
      // 统一不通http库的get请求参数传递方式
      if (method === 'get') {
        combineUrl = combineQuery(combineUrl, sendParams);
      }
      return combineUrl;
    },
    define(url, schema = {}, method = 'get') {
      return (params, options) => {
        // 验证请求参数的合法性
        check(schema, params);

        const sendParams = Object.assign({}, params);
        Object.keys(schema).forEach((param) => {
          // 如果只是用于接口URL中的参数，则不加入进最终发送给接口的参数
          if (schema[param].urlOnly) {
            delete sendParams[param];
          }
        });
        return method === 'get' || method === 'delete' ?
         io[method](this.combineUrl(method, url, params, sendParams), options) :
         io[method](this.combineUrl(method, url, params, sendParams), sendParams, options);
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
