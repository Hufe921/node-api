const logUtil = require('../log/util')
const generic = require('../utils/generic')
const indexService = require('../core/services/index')

module.exports = {
    // 首页数据展示
    'GET /api/getMainData': [generic.dealAccessLog(), async (ctx, next) => {
        const start = new Date();
        let ms;
        try {
            let result = await indexService.getMainData()
            ctx.rest(result)
        } catch (error) {
            ms = new Date() - start;
            logUtil.logError(ctx, error, ms)
        }
    }]
};