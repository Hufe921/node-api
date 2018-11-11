module.exports = {
    /**
     * 提取源数据到目标对象
     * @param {Object} F 源数据
     * @param {Object} T 目标对象
     * @param {Object} O 目标对象不存在，但需要从源数据提取的属性
     * @returns {Object}  新对象
     */
    cloneTo: (F, T, O) => {
        let t = new T()
        for (i in F) {
            if (t.hasOwnProperty(i)) {
                t[i] = F[i]
            }
        }
        if (O) {
            for (item in O) {
                t[item] = O[item]
            }
        }
        return t
    },
    /**
     * 删除源数据对象特定的（null，"",[]）属性
     * @param {Object} T 源数据
     * @param {Array} A 不排除字段名称数组
     * @returns {Object} 新对象，旧对象被修改 
     */
    deleteSpecialProperty: (T, A) => {
        for (i in T) {
            if (!(String(T[i]) && T[i] !== null && (T[i] !== "" || T[i].length !== 0))) {
                !(A && A.length && A.find(item => item === i)) && delete T[i];
            }
        }
        return T
    },
    /**
     * 验证对象值是否符合正则规则
     * @param {Object} O 需要验证的对象，例如：{name:'ceshi'}
     * @param {Object} rule 规则对象，例如：{name:'.+'}
     * @returns {Array} 不符合字段数组
     */
    verifyMatchRegular: (O, rule) => {
        let arr = []
        for (const i in O) {
            if (typeof rule[i] !== 'undefined' && !(new RegExp(rule[i]).test(O[i]))) arr.push(`${i}`)
        }
        return arr
    },
    /**
     * 验证源数据属性是否全部匹配指定对象属性
     * @param {Object} F 源数据
     * @param {Object} T 目标对象
     * @returns {Boolean}
     */
    verifyMatchObject: (F, T) => {
        if (!F || !T) return false
        let t = new T(F)
        for (const key in t) {
            if (typeof t[key] === 'undefined') return false
        }
        return true
    },
    /**
     * 对象中属性空字符串转null
     * @param {*Object} T 实体
     * @param {*Array} A 要转换的字段数组
     */
    emptyStringToNull(T, A) {
        A.forEach(i => {
            if (typeof T[i] !== 'undefined' && T[i] === "") T[i] = null
        })
        return T
    }
}