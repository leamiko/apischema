import { encode } from 'querystring';

export default (url, params) => {
  const query = encode(params);
  const split = url.indexOf('?') === -1 ? '?' : '&';
  return query ? `${url}${split}${query}` : url;
};
