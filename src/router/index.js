import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home' //首页
import Category from '../pages/Category/Category' //分类
import Ldentifying from '../pages/Ldentifying/Ldentifying' //识物
import Shopping from '../pages/Shopping/Shopping' //购物车
import Prefile from '../pages/Prefile/Prefile'  //个人
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/ldentifying',
      component: Ldentifying
    },
    {
      path: '/shopping',
      component: Shopping
    },
    {
      path: '/prefile',
      component: Prefile
    },

  ]
})
