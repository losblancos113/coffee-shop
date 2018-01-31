import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import DashBoard from '@/views/Dashboard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    }, {
      path: '/login',
      component: LoginPage
    }, {
      path: '/dashboard',
      component: DashBoard
    }
  ]
})
