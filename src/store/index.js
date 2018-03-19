import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login_status: false,
    show_left_sidebar: false,
    cart: []
  },
  getters,
  mutations,
  actions
})
