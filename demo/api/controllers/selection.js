const logUtil = require('../log/util')
const selectionServices = require('../core/services/selection')
const APIError = require('../rest').APIError;
// throw new APIError('auth:selection_not_found', 'selection not found');错误实例

module.exports = {
    // 选择课程
    'POST /api/postSelection': [async (ctx, next) => {
        const start = new Date();
        var ms;
        try {
            const data = ctx.request.body
            const result = await selectionServices.postSelection(data)
            ctx.rest(result)
        } catch (error) {
            ms = new Date() - start;
            logUtil.logError(ctx, error, ms)
        }
    }],
    // 获取所有的课程的信息，包含用户选择信息
    'GET /api/getProjectByUserId/:id': async (ctx, next) => {
        const start = new Date();
        var ms;
        try {
            const id = ctx.params.id;
            const result = await selectionServices.getProjectByUserId(id)
            ctx.rest(result)
        } catch (error) {
            ms = new Date() - start;
            logUtil.logError(ctx, error, ms)
        }
    },
    // 用户退选课程
    'PUT /api/putSelection': async (ctx, next) => {
        const start = new Date();
        var ms;
        try {
            const data = ctx.request.body;
            const result = await selectionServices.putSelection(data)
            ctx.rest(result)
        } catch (error) {
            ms = new Date() - start;
            logUtil.logError(ctx, error, ms)
        }
    }
};