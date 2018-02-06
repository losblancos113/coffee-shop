import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import DashBoard from '@/views/Dashboard.vue'
import ProductList from '@/views/ProductList.vue'
import CategoryDetail from '@/views/CategoryDetail.vue'

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
      component: DashBoard,
      children: [
        {
          path: 'products',
          component: ProductList
        },
        {
          path: 'category/create',
          component: CategoryDetail
        }
      ]
    }
  ]
})
