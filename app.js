const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const controller = require('./config/config.controller')
const config = require('./config/config.common')
const rest = require('./config/config.rest')
const staticFiles = require('./config/config.static')
const app = new Koa()

process.env.NODE_ENV = 'development'
const isProduction = process.env.NODE_ENV === 'production'

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
    await next()
})

// 请求头设置
app.use(cors({
    origin: function (ctx) {
        if (!checkOrgin(ctx.request.ip)) {
            return '*'
        }
        return false
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Token']
}))

// 代理公开的静态文件，开发环境静态文件由iis或nginx守护
if (!isProduction) app.use(staticFiles('/public/'))

// parse request body:
app.use(bodyParser())

// bind .rest() for ctx:
app.use(rest.restify())

// add controllers:
app.use(controller.addController())

app.listen(3000)

// 检查来源是否在黑名单中
function checkOrgin(orgin) {
    return config.blacklist.find(item => orgin.search(item) != -1)
}