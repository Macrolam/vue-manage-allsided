/*
 * @Author: 麦壳
 * @Date:  2018/12/26
 * @Last Modified by: 麦壳
 * @Last Modified time: 2018/12/26
 * @Duty:Vue原型上的扩展 方法全局可用 https://cn.vuejs.org/v2/guide/plugins.html
 */
import {restful} from '@/script/restful/restful.js'//通用的请求方法封装

export default {
  //Vue.js 的插件扩展有一个公开方法 install。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象
  //当外界在 use 这个组件的时候，就会调用本身的 install 方法，同时传一个 Vue 这个类的参数
  //通过全局方法 Vue.use() 使用插件。它需要在你调用 new Vue() 启动应用之前完成
  install(Vue,options){
    // 添加实例方法-网络请求对象
    Vue.prototype.$sendReq = restful,
    // 添加全局方法-globalFn
    Vue.globalFn = function () {
    console.log("I am Vue global fn");
    },
    // 添加指令
    Vue.directive('my-directive', {
      bind (el, binding, vnode, oldVnode) {
        // 逻辑...
      }

    }),
    // 混入-作用的是每个vue组件
    Vue.mixin({
      created(){
        // 逻辑...
      }
    })
  }
}
