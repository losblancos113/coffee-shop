import * as types from './mutation-type.js'

let actions = {
  toggleLoginStatus ({
    commit
  }, payload) {
    commit(types.TOGGLE_LOGIN_STATUS, payload)
  },
  toggleLeftSideBar ({
    commit
  }, payload) {
    commit(types.TOGGLE_LEFT_SIDEBAR, payload)
  }
}

export default actions
