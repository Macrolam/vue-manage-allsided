import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home2',
      name: 'home2',
      component: resolve =>(['@/component/home/home1'],resolve)
    },
  ]
})
