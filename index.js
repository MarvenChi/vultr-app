const router = require('koa-router')
const Koa = require('koa');
const ejs = require('ejs');
const config = require('./config/prod.js')
const views = require('koa-views');
const app = new Koa();


// app.use(views(path.join(__dirname,'./views'),{
//     extension:'ejs'
// }))

app.use(require('./router/index').routes())

app.listen(config.port)
