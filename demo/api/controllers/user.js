const logUtil = require('../log/util')
const userServices = require('../core/services/user')
const APIError = require('../rest').APIError;
// throw new APIError('auth:user_not_found', 'user not found');错误实例

module.exports = {
    // 检测用户登录信息
    'POST /api/isAllowLogin': [async (ctx, next) => {
        const start = new Date();
        var ms;
        try {
            const data = ctx.request.body
            const result = await userServices.isAllowLogin(data)
            ctx.rest(result)
        } catch (error) {
            ms = new Date() - start;
            logUtil.logError(ctx, error, ms)
        }
    }],
    // 获取用户类型
    'GET /api/getUserType': async (ctx, next) => {
        const start = new Date();
        var ms;
        try {
            const result = await userServices.getUserType()
            ctx.rest(result)
        } catch (error) {
            ms = new Date() - start;
            logUtil.logError(ctx, error, ms)
        }
    }
};