import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Test from './views/TestFront.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'test',
      component: Test
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/add-property',
      name: 'add-property',
      component: () => import('./views/AddProperty.vue')
    },
    {
      path: '/borrowable-list',
      name: 'borrowable-list',
      component: () => import('./views/BorrowableList.vue')
    },
    {
      path: '/borrowing-list',
      name: 'add-property',
      component: () => import('./views/BorrowingList.vue')
    },
    {
      path: '/chose-borrowing',
      name: 'chose-borrowing',
      component: () => import('./views/ChoseBorrowing.vue')
    },
    {
      path: '/login',
      name: 'login-user',
      component: () => import('./views/LoginUser.vue')
    },
    {
      path: '/register',
      name: 'register-new-user',
      component: () => import('./views/RegisterNewUser.vue')
    }
  ]
})
