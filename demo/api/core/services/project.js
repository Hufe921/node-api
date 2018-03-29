const generic = require('../../utils/generic')
const model = require('../models/index')
const Project = model.Project

// 获取所有课程
async function getAllProject() {
    return await User.findAll();
}

// 上传课程
async function postProject(otherData,fileName) {
    return await Project.create({
        name: otherData.name,
        remark: otherData.remark,
        cover: fileName,
        isActive: true
    })
}

module.exports = {
    getAllProject,
    postProject
}