const generic = require('../../utils/generic')
const model = require('../models/index')
const User = model.User
const Selection = model.Selection
const Project = model.Project

// 获取项目通过用户id
async function getProjectByUserId(id) {
    let projects = await Project.findAll({
        where: {
            isActive: true
        }
    })
    let selections = await Selection.findAll({
        where: {
            userId: id,
            isActive: true
        }
    })
    let result = [];
    projects.forEach(project => {
        let json = {
            id: project.id,
            name: project.name,
            remark: project.remark,
            cover: project.cover,
            isChoose: false
        }
        selections.forEach(select => {
            if (select.projectId === project.id) {
                json.isChoose = true
            }
        })
        result.push(json);
    });
    return result;
}

// 根据userid，projectid进行项目选择
async function postSelection(data) {
    var result = await Selection.create({
        userId: data.userId,
        projectId: data.projectId,
        isActive: true
    });
    return result
}


// 根据userid，projectid进行项目退选
async function putSelection(data) {
    var result = await Selection.update({
        isActive: false
    }, {
        where: {
            userId: data.userId,
            projectId: data.projectId
        }
    });
    return result;
}

module.exports = {
    getProjectByUserId,
    postSelection,
    putSelection
}