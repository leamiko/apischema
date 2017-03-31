export default (url, params) => url.replace(/\{([a-zA-Z]*)\}/g, ($1, $2) => params[$2]);
