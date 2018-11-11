module.exports = {
    // 通用提示类
    Tips: class Tips {
        constructor(state, tip, code = 200) {
            this.state = state;
            this.tip = tip;
            this.code = code;
        }
    },
    // 错误处理类
    Error: class Error {
        constructor(state = false, tip = '请求参数缺失！', code = 404) {
            this.state = state;
            this.tip = tip;
            this.code = code;
        }
    }
}