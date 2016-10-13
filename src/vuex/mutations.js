import { set } from 'vue'
import * as types from './mutation-types'
import { STORAGE_KEY_LOGIN_INFO } from './store'

export default {
  [types.USER_LOGIN] (state, loginInfo) {
    window.localStorage.setItem(STORAGE_KEY_LOGIN_INFO, loginInfo)
    state.loginInfo = loginInfo
  }
}