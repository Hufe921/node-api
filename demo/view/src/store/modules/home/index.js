// 实例，请结合实际修改
export default {
  namespaced: true,
  state: {
    screen: 'Hufe',
    msg: 'Copyright © 2018. Vue-Frame'
  },
  getters: {
    getterMsg (state) {
      return state.msg
    }
  },
  mutations: {
    updateScreenByMutation (state, payload) {
      state.screen = payload
    }
  },
  actions: {
    updateScreenByAction ({commit}, payload) {
      setTimeout(() => {
        commit('updateScreenByMutation', payload)
      }, 5000)
    }
  }
}
