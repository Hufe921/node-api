const loginModule = {
  // 登录是否允许登录
  IsAllowLogin: {
    url: 'api/isAllowLogin',
    method: 'post'
  },
  // 登录基础类型
  GetUserType: {
    url: 'api/getUserType',
    method: 'get'
  }
}
export default loginModule
