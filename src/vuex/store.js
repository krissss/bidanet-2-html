import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const STORAGE_KEY_LOGIN_INFO = 'login-info'

const test = true
const localStorage = window.localStorage
if (test) {
  localStorage.clear()
}

const state = {
  hostname: 'http://183.240.86.109/wxy/inf',
  loginInfo: localStorage.getItem(STORAGE_KEY_LOGIN_INFO) || {}
}

const mutations = {
  userLogin: (state, loginInfo) => {
    localStorage.setItem(STORAGE_KEY_LOGIN_INFO, loginInfo)
    state.loginInfo = loginInfo
  }
}

const getters = {
  token: state => {
    return state.loginInfo.token
  },
  loginInfo: state => {
    return state.loginInfo
  }
}

const actions = {
  login (context) {
    context.commit('userLogin')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
