// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'//相当于import Vue from 'node_modules/vue/dist/vue.esm.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'//样式文件需要单独引入
import '@/style/css/reset.css'// 重置浏览器默认标签样式
import '@/style/css/base.css'//base 样式
import '@/style/less/index.less'//自定义的样式文件
import App from './App'
import router from '@/script/router'// 引入路由 => @/script/router/index.js
import plugin from '@/script/plugin/plugin.js'//扩展的vue插件（工具方法，实例方法-http库）
//import mock from './mock.js'//可以判断下是开发环境才引入
require('./mock.js')

Vue.config.productionTip = false
//通过全局方法 Vue.use( plugin ) 使用插件。它需要在你调用 new Vue() 启动应用之前完成
Vue.use(ElementUI, {size: 'small', zIndex: 2001})//在引入 Element 时，可以传入一个全局配置对象。该对象目前支持 size 与 zIndex 字段。size 用于改变组件的默认尺寸，zIndex 设置弹框的初始 z-index（默认值：2000）。
Vue.use(plugin)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//记得要通过 router 配置参数注入路由,通过注入路由器，我们可以在任何组件内通过 this.$router 访问路由器
  components: {App},
  template: '<App/>'
})
