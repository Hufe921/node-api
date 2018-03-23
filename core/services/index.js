const generic = require('../../utils/generic')
const model = require('../models/index')
const User = model.User

// 查找
async function getUser(name) {
    return await User.findAll({
        where: {
            lastName: name
        }
    });
}

// 增加
async function postUser(data) {
    await User.create(data);
}

// 修改
async function putUserById(id, obj) {
    await generic.update(User, obj, id)
}

// 删除
async function deleteUserById(id) {
    await generic.delete(User, id)
}

module.exports = {
    getUser,
    postUser,
    putUserById,
    deleteUserById
}