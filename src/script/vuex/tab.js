/*
 * @Author: 麦壳
 * @Date:  2018/12/26
 * @Last Modified by: 麦壳
 * @Last Modified time: 2018/12/26
 * @Duty:vuex-管理tab的；tabsArr 的增删放到全局来处理，以一个全局单例模式管理，保证多个组件可以共同操作这份数据
 */
import Vue from 'vue'
import Vuex from 'Vuex'
import {tools} from '@/script/tool/tools.js'
Vue.use(Vuex)
let tab = {
  namespaced: true,// 继承父模块的命名空间
  state: {
    num: 0,
    curTabKey: 'home1',// 激活的tab key
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
    addTab(state,menuIndex){
      debugger
      console.log(menuIndex,"mutations-addTab-fromCommitNewVal-from-commit-mutations:");
      if(!tools.dataHandle.isHasCurkeyInArrobj(menuIndex,"key",state.tabsArr)){
        debugger
        state.curTabKey = menuIndex
        state.tabsArr.push({
          "name": menuIndex,
          "key": menuIndex,
        })
      }

    },
    closeTab(state,menuIndex){
      debugger
      let self = this
      let curTabKey = null;
      // 1.0 定位当前要关闭的tab
      state.tabsArr.forEach((item, index)=> {
        if (item.key === menuIndex) curTabKey = index;
      })
      //state.curTabKey = state.tabsArr[curTabKey-1].key

      // 1.1 从tabsArr中删除此项
      state.tabsArr.splice(curTabKey, 1)
    },
    changeTab(state,curTabObj){
      debugger
      if(tools.type.isObject(curTabObj)&&curTabObj.name){
        state.curTabKey = curTabObj.name
      }else{
        state.curTabKey = curTabObj//header.vue computed set ->  this.$store.commit('tab/changeTab', value)
      }
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
