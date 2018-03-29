import Axios from 'axios'
import AppConfig from './config'
const baseURL = AppConfig.baseUrl

// 请求时的拦截器
Axios.interceptors.request.use(
  config => {
    // 功能例如：检测登陆状态
    return config
  },
  error => {
    // 请求异常时
    return Promise.reject(error)
  })

// 请求完成时后的拦截器
Axios.interceptors.response.use(
  response => {
    /**
     * 返回响应时
     * @return {object} response
     * @param {object} data  服务器提供的相应
     * @param {number} status  服务器响应的HTTP状态代码
     * @param {string} statusText  服务器响应的HTTP状态消息
     * @param {object} headers  服务器响应头
     * @param {object} config  axios 的配置
     * */
    return response
  },
  error => {
    // 当响应异常时
    return Promise.resolve(error.response)
  }
)

export default (options, data, headers) => {
  /**
   * 从服务端获取数据
   * @param  {object} *options  【必传值】
   * @param  {string}  options.url 模块名称
   * @param  {string}  options.method 请求方法 (post or get)
   * @param  {string}  options.showError 请求错误提示，默认开启
   * @param  {object}  data 请求方法参数 选填有默认值,也可自定义
   * @param  {object}  headers 请求头 选填有默认值,也可自定义
   * @return response
   * */
  // 是否开启错误提示,默认开启(不传showError)
  //  let showError = options.showError === undefined ? true : options.showError
  // 公共参数
  let Public = {
    // 'testParam': " "
  }
  // http默认配置
  let httpDefaultOptions = {
    // 请求协议 (post or get)
    method: options.method,
    // 基础URL前缀
    baseURL,
    // 请求的api地址
    url: options.url,
    // 超时时间(ms)
    timeout: 10000,
    // get 请求时带的参数
    params: Object.assign(Public, data),
    // post 请求的数据
    // Qs数据处理, 配合下面headers里的Content-Type, 转成表单提交, 让后端可以直接用 $_POST 拿到数据
    // data: Qs.stringify(Object.assign(Public, data)),
    data: Object.assign(Public, data),
    // 请求头信息headers
    headers: headers || options.method === 'get' ? {} : {'Content-Type': 'application/json'}
  }
  // 请求协议对应的方法
  if (options.method === 'get') {
    delete httpDefaultOptions.data
  } else {
    delete httpDefaultOptions.params
  }
  // 返回promise对象
  return new Promise((resolve, reject) => {
    Axios(httpDefaultOptions)
      .then((res) => {
        // 服务器请求处理完成其他公共操作异常
        resolve(res)
      })
      .catch((error) => {
        // http请求异常其他公共处理
        reject(error)
      })
  })
}
