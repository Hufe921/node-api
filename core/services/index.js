const extension = require('../../utils/extension') // 扩展方法
const generic = require('../../utils/generic') // 通用方法

const utilsType = require('../../dtos/utils/index') // 通用类

const Op = require('sequelize').Op
const model = require('../models/index') // orm映射实体

// 实体
// const DataValue = model.DataValue

// 首页信息初始化
async function getMainData() {
    return new utilsType.Tips(true, '连接成功')
}


module.exports = {
    getMainData
}