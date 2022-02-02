'use strict';

const Koa = require('koa');
const app = new Koa();
let port = process.env.PORT || 8001

app.use(ctx => {
  ctx.body = 'Hello World';
});

app.listen(port);

console.log(`Listening on port ${port}`)