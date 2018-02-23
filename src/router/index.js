import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import DashBoard from '@/views/Dashboard.vue'
import ProductList from '@/views/ProductList.vue'
import CategoryList from '@/views/CategoryList.vue'
import CategoryDetail from '@/views/CategoryDetail.vue'
import Category from '@/views/Category.vue'
import Product from '@/views/Product.vue'
import ProductDetail from '@/views/ProductDetail.vue'
import Order from '@/views/Order.vue'
import OrderDetail from '@/views/OrderDetail.vue'

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
          component: Product,
          children: [
            {
              path: '',
              component: ProductList
            },
            {
              path: 'create',
              name: 'createProduct',
              component: ProductDetail
            },
            {
              path: 'edit',
              name: 'editProduct',
              component: ProductDetail,
              props: true
            }
          ]
        }, {
          path: 'category',
          component: Category,
          children: [
            {
              path: '',
              component: CategoryList
            },
            {
              path: 'create',
              name: 'createCategory',
              component: CategoryDetail,
              props: true
            },
            {
              path: 'edit',
              name: 'editCategory',
              component: CategoryDetail,
              props: true
            }
          ]
        }, {
          path: 'order',
          component: Order,
          children: [
            {
              path: 'create',
              name: 'createOrder',
              component: OrderDetail,
              props: true
            }
          ]
        }
      ]
    }
  ]
})
