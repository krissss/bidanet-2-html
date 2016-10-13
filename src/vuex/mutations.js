import { set } from 'vue'
import * as types from './mutation-types'
import { STORAGE_KEY_LOGIN_INFO } from './store'

export default {
  [types.USER_LOGIN] (state, username, password) {
    // TODO 请求 http 接口获取
    

    window.localStorage.setItem(STORAGE_KEY_LOGIN_INFO, loginInfo)
    state.loginInfo = loginInfo
  }
}