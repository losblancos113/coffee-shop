import * as types from './mutation-type.js'
import Vue from 'vue'
import array from 'lodash/array'

let mutations = {
  [types.TOGGLE_LOGIN_STATUS] (state, payload) {
    state.login_status = !state.login_status
  },
  [types.TOGGLE_LEFT_SIDEBAR] (state, payload) {
    state.show_left_sidebar = !state.show_left_sidebar
  },
  [types.PUSH_ITEM_TO_CART] (state, payload) {
    state.cart.push(payload)
  },
  [types.REMOVE_ITEM_FROM_CART] (state, payload) {
    let indexOfItem = array.indexOf(state.cart, payload)
    Vue.delete(state.cart, indexOfItem)
  }
}

export default mutations
