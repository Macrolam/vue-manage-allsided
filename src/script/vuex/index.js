/*
 * @Author: 麦壳
 * @Date:  2018/12/26
 * @Last Modified by: 麦壳
 * @Last Modified time: 2018/12/26
 * @Duty:vuex - https://vuex.vuejs.org/zh/guide/
 */
import Vue from 'vue'
import Vuex from 'Vuex'
Vue.use(Vuex)

import tab from '@/script/vuex/tab.js'

const store = new Vuex.Store({
  modules:{
    tab:tab,//子模块-tab部分的状态管理树
  }
})
// 导出
export default store;
