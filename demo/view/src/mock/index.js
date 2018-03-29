import api from '../services/api'
import data from './views'
import mock2apply from './mock'

// 调用此方法mock2apply('请求地址'，'返回假数据')自动拦截原始api请求

// 首页 =>GetName
mock2apply(api.GetName, data.GetName)
