const model = require('../models/index') // orm映射实体

// 实体
const AccessLog = model.AccessLog


// 用户处理操作日志
async function postAccessLog(msg) {
    await AccessLog.create({
        userNo: msg.query.userNo ? msg.query.userNo : null,
        token: msg.headers['x-token'] ? msg.headers['x-token'] : null,
        api: msg.request.path,
        ip: msg.request.ip,
        query: msg.query ? JSON.stringify(msg.query) : null,
        request: msg.request.body ? JSON.stringify(msg.request.body) : null
    })
}

module.exports = {
    postAccessLog
}