import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/page/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home1',
      name: 'home1',
      component: resolve =>require(['@/components/page/home/home1'],resolve)
    }, {
      path: '/home2',
      name: 'home2',
      component: resolve =>require(['@/components/page/home/home1'],resolve)
    },{
      path: '/table',
      name: 'table',
      component: resolve =>require(['@/components/page/table/table'],resolve)
    },{
      path:'/form',
      name:'form',
      component:(res) => {require(['@/components/page/form/form.vue'],res)},
    },
  ]
})
