import * as types from './mutation-type.js'

let actions = {
  toggleLoginStatus ({
    commit
  }, payload) {
    commit(types.TOGGLE_LOGIN_STATUS, payload)
  }
}

export default actions
