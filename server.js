const http = require('http')
const Koa = require('koa')
const Router = require('koa-router')
const renderer = require('vue-server-renderer').createRenderer()
const app = new Koa()
const router = new Router();
router.get('*', async (ctx, next) => {
  ctx.type = 'html'
})

app.use(router.routes(), router.allowedMethods())

http.createServer(app.callback()).listen(8080)


// const createApp = require('/path/to/built-server-bundle.js')
// server.get('*', (req, res) => {
//   const context = {url: req.url}
//   createApp(context).then(app => {
//     renderer.renderToString(app, (err, html) => {
//       if (err) {
//         if (err.code === 404) {
//           res.status(404).end('Page not found')
//         } else {
//           res.status(500).end('Internal Server Error')
//         }
//       } else {
//         res.end(html)
//       }
//     })
//   })
// })