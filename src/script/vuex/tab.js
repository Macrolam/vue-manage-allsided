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
  namespaced: true,// 继承父模块的命名空间,调用此模块的mutation方法,需要带上模块名字的=>tab/addTab才能调用到
  state: {
    num: 0,
    curTabKey: 'table',// 激活的tab key
    tabsArr: [
      {
        "name": "表格",
        "key": "table",
        "closable":true,//不可以关闭
        // title: 'Tab 1',
        // name: '1',
      }, {
        "name": "表单",
        "key": "form",
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
    //开tab-唯一,处理的是state 的 tabsArr curTabKey
    addTab(state,menuIndex){
      console.log(menuIndex,"mutations-addTab-fromCommitNewVal-from-commit-mutations:");
      if(!tools.dataHandle.isHasCurkeyInArrobj(menuIndex,"key",state.tabsArr)){
        state.curTabKey = menuIndex
        state.tabsArr.push({
          "name": menuIndex,
          "key": menuIndex,
        })
      }

    },
    //开tab-无限制开
    addTabUnlimit(state,menuIndex){
      console.log(menuIndex,"mutations-addTab-fromCommitNewVal-from-commit-mutations:");
      if(!tools.dataHandle.isHasCurkeyInArrobj(menuIndex,"key",state.tabsArr)){
        state.curTabKey = menuIndex
        state.tabsArr.push({
          "name": menuIndex,
          "key": menuIndex+'-'+tools.date.getTimestamp(),//加上menuIndex为了路由中定位到它
        })
      }

    },
    //关tab,处理的是state 的 tabsArr curTabKey
    closeTab(state,menuIndex){
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
    //切换tab-处理的是state里的curTabKey
    changeTab(state,curTabObj){
      if(tools.type.isObject(curTabObj)&&curTabObj.name){
        state.curTabKey = curTabObj.name
        curTabObj.$router.push('/'+state.curTabKey)

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
