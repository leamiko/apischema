export default (url, params) => url.replace(/\{([a-zA-Z]*)\}/g, ($1, $2) => {
  console.log($1, $2);
  return params[$2];
});
