import * as types from './mutation-type.js'

let mutations = {
  [types.TOGGLE_LOGIN_STATUS] (state, payload) {
    state.login_status = !state.login_status
  },
  [types.TOGGLE_LEFT_SIDEBAR] (state, payload) {
    state.show_left_sidebar = !state.show_left_sidebar
  }
}

export default mutations
