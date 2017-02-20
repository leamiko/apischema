# apischema

## Useage
```
export const getCategorys = schema.get('/api/getcategorys/${page}', {
  page: Number,
  type: Number,
});

getCategorys({ page: 1, type: 1 }).then((json) => {
  log(json);  
});
```
