import * as types from './mutation-types.js'

let mutations = {
    [types.TOGGLE_LOGIN_STATUS](state, payload) {
        state.login_status = !state.login_status;
    }
}

export default mutations
