const homeModule = {
  // 首页根据用户id获取课程
  GetProjectByUserId: {
    url: 'api/getProjectByUserId/',
    method: 'get'
  },
  // 选择课程
  PostSelection: {
    url: 'api/postSelection',
    method: 'post'
  },
  PutSelection: {
    url: 'api/putSelection',
    method: 'put'
  }
}
export default homeModule
