const logUtil = require('../log/util')
const projectServices = require('../core/services/project')
const APIError = require('../rest').APIError;
const uploadFile = require('../controller')

module.exports = {
    // 获取所有课程
    'GET /api/getAllProject': async (ctx, next) => {
        const start = new Date();
        var ms;
        try {
            const result = await projectServices.getAllProject()
            ctx.rest(result)
        } catch (error) {
            ms = new Date() - start;
            logUtil.logError(ctx, error, ms)
        }
    },
    // 上传课程
    'POST /api/postProject': [uploadFile.addUploadFile().single('file'), async (ctx, next) => {
        const start = new Date();
        var ms;
        try {
            var otherData = ctx.req.body;
            var fileName = ctx.req.file.filename;
            const result = await projectServices.postProject(otherData, fileName)
            ctx.rest(result)
        } catch (error) {
            ms = new Date() - start;
            logUtil.logError(ctx, error, ms)
        }
    }]
};