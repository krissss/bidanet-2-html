import user from '../api/user'
import * as types from './mutation-types'

const username = '123'
const password = '234'

export const userLogin = ({ dispatch }, username, password) => {
  user.userLogin(
    username,
    password,
    () => dispatch(types.USER_LOGIN, username, password),
    () => dispatch(types.USER_LOGIN_FAILED)
  )
}