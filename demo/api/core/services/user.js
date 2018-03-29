const generic = require('../../utils/generic')
const model = require('../models/index')
const User = model.User
const UserType = model.UserType

// 检测账号的正确性
async function isAllowLogin(data) {
    var result = await User.findAll({
        where: {
            account: data.account,
            password: data.password,
            usertypeId: data.userTypeId
        }
    });
    return result
}

// 获取用户基础类型
async function getUserType() {
    return await UserType.findAll()
}

module.exports = {
    isAllowLogin,
    getUserType
}