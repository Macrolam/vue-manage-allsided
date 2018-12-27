/*
 * @Author: 麦壳
 * @Date:  2018/12/26
 * @Last Modified by: 麦壳
 * @Last Modified time: 2018/12/26
 * @Duty:vuex-管理tab的；tabsArr 的增删放到全局来处理，以一个全局单例模式管理，保证多个组件可以共同操作这份数据
 */
import Vue from 'vue'
import Vuex from 'Vuex'
Vue.use(Vuex)
let tab = {
  namespaced: true,// 继承父模块的命名空间
  state: {
    num: 0,
    curTabKey: '1',// 激活的tab key
    tabsArr: [
      {
        "name": "导航1.1",
        "key": "home1",
        // title: 'Tab 1',
        // name: '1',
      }, {
        "name": "导航1.1",
        "key": "home2",
        // title: 'Tab 1',
        // name: '1',
      },
    ]
    //=== state end ===
  },
  mutations: {
    add(state){
      state.num++
    },
    addTab(state){
      state.tabsArr.push({})

    },
    //=== mutations end ===
  },
};

// 暴露此模块的api
export default tab;


/*
 tab: new Vuex.Store({
 state:{
 count:0
 },
 mutations:{
 add(state){
 state.count++
 }
 }
 })
 */
