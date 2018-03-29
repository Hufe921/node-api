import url from '../services/http/config'
const baseUrl = url.baseUrl
const Mock = require('mockjs')

/**
 * 设置mock
 * @param {object} router 请求路由的object
 * @param  {data}   静态数据，或function需要返回生成值
 * @author hyf update(2018/3/13)
 * */
const mock2apply = function (router, data) {
  const relativeUrl = baseUrl + router.url
  var re = new RegExp('^' + relativeUrl + '(([\\?].*)|($))', 'gi')
  Mock.mock(re, router.method, data)
}

export default mock2apply
