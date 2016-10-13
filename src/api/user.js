const _userInfo = {
  username: '123'
}

const username = '123'
const password = '234'

export default {
  userLogin (cb) {
    setTimeout(() => cb(username, password), 100)
  }
}