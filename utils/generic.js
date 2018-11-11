const path = require('path')
module.exports = {
    /**
     * 实体是否存在满足相应条件的数据
     * @param {Object} T model实体
     * @param {Obejct} condition 筛选条件对象
     * @returns {Array} [boolean,id]
     */
    async isExit(T, condition) {
        let isExit = await T.find({
            where: condition
        })
        if (isExit) {
            return [true, isExit.id]
        } else {
            return [false]
        }
    },
    /**
     * 实体中根据条件查找具体一条信息
     * @param {Object} T model实体
     * @param {Object} O 筛选条件
     */
    async findByCondition(T, O) {
        let result = await T.find({
            where: Object.assign(O, {
                isActive: true
            }),
            raw: true
        })
        if (result) return result
    },
    /**
     * 深度克隆可包含Symbol
     * @param {Object} obj 克隆对象
     */
    deepClone(obj) {
        if (!obj) {
            return obj
        }
        let result = {}
        for (let tmp of Reflect.ownKeys(obj)) {
            if (Object.prototype.toString.call(obj[tmp]) !== '[object Object]') {
                result[tmp] = Object.prototype.toString.call(obj[tmp]) === '[object Array]' ? obj[tmp].slice(0) : obj[tmp]
            } else {
                result[tmp] = this.deepClone(obj[tmp])
            }
        }
        return result
    },
    /**
     * 格式化时间
     * @param {*String} fmt 时间字符串
     * @param {*String} date 格式化字符串（yyyy-MM-dd HH:mm:ss）
     */
    formatTime(fmt, date) {
        const date = new Date(date)
        const o = {
            "M+": date.getMonth() + 1, //月份   
            "d+": date.getDate(), //日   
            "h+": date.getHours(), //小时   
            "m+": date.getMinutes(), //分   
            "s+": date.getSeconds(), //秒   
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
            "S": date.getMilliseconds() //毫秒   
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length))
        for (const k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
        return fmt
    },
    /**
     * 文件上传
     * @param {String} dir static文件夹下文件夹名称
     */
    addUploadFile(dir) {
        const multer = require('koa-multer');
        //配置  
        let storage = multer.diskStorage({
            //文件保存路径  
            destination: function (req, file, cb) {
                cb(null, path.resolve(__dirname, `../static/${dir}/`))
            },
            filename: function (req, file, cb) {
                var fileFormat = (file.originalname).split(".");
                cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
            }
        })
        let upload = multer({
            storage: storage
        });
        return upload;
    },
    /**
     * ip白名单检测
     * @param {Array} ipList ip数组
     */
    dealIP(ipList) {
        return async (ctx, next) => {
            let ip = ipList.find(item => ctx.request.ip.search(item) != -1)
            if (ip) {
                await next()
            } else {
                ctx.rest({
                    state: false,
                    msg: '非法访问！',
                    code: 404
                })
            }
        }
    },
    /**
     * 访问日志
     */
    dealAccessLog() {
        return async (ctx, next) => {
            const commonService = require('../core/services/common')
            await commonService.postAccessLog(ctx)
            await next()
        }
    }
}