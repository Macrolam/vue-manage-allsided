// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'//相当于import Vue from 'node_modules/vue/dist/vue.esm.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'//样式文件需要单独引入
import '@/style/reset.css'// 重置浏览器默认标签样式
import '@/style/base.css'//base 样式
import App from './App'
import router from './router'// 引入路由 => ./router/index.js
import restful from './script/restful/restful.js'// 引入http库

Vue.config.productionTip = false
Vue.use(ElementUI,{size:'small',zIndex:2001})//在引入 Element 时，可以传入一个全局配置对象。该对象目前支持 size 与 zIndex 字段。size 用于改变组件的默认尺寸，zIndex 设置弹框的初始 z-index（默认值：2000）。


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
