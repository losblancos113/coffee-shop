// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import index from './store/index.js'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import 'animate.css/animate.min.css'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faTag, faUtensils, faShoppingCart } from '@fortawesome/fontawesome-free-solid'
import { faImage } from '@fortawesome/fontawesome-free-regular'

Vue.config.productionTip = false
fontawesome.library.add(brands, faTag, faUtensils, faShoppingCart, faImage)

// Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: index,
  components: { App },
  template: '<App/>'
})
