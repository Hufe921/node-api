const logUtil = require('../log/util')
const indexServices = require('../core/services/index')
const APIError = require('../rest').APIError;
// throw new APIError('auth:user_not_found', 'user not found');错误实例

module.exports = {
    'GET /api/getUser/:name': async (ctx, next) => {
        try {
            //响应开始时间
            const start = new Date();
            //响应间隔时间
            var ms;
            const name = ctx.params.name
            const data = await indexServices.getUser(name)
            ctx.rest(data)
            ms = new Date() - start;
            //记录响应日志
            logUtil.logResponse(ctx, ms);
        } catch (error) {
            ms = new Date() - start;
            //记录异常日志
            logUtil.logError(ctx, error, ms)
        }
    },
    'POST /api/postUser': async (ctx, next) => {
        await indexServices.postUserById(ctx.request.body)
        ctx.rest({
            status: 200
        })
    },
    'PUT /api/putUserById/:id': async (ctx, next) => {
        const id = ctx.params.id
        const data = ctx.request.body
        await indexServices.putUserById(id, data)
        ctx.rest({
            status: 200
        })
    },
    'DELETE /api/deleteUserById/:id': async (ctx, next) => {
        const id = ctx.params.id
        await indexServices.deleteUserById(id)
        ctx.rest({
            status: 200
        })
    }
};