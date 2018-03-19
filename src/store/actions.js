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
  },
  pushItemToCart ({
    commit
  }, payload) {
    commit(types.PUSH_ITEM_TO_CART, payload)
  },
  removeItemFromCart ({
    commit
  }, payload) {
    commit(types.REMOVE_ITEM_FROM_CART, payload)
  }
}

export default actions
