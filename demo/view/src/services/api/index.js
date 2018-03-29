import homeModule from './home'
import loginModule from './login'
import adminModule from './admin'

// 所有api汇总展开
export default {
  ...homeModule,
  ...loginModule,
  ...adminModule
}
