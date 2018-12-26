/*
 * @Author: 麦壳
 * @Date:  2018/12/26
 * @Last Modified by: 麦壳
 * @Last Modified time: 2018/12/26
 * @Duty:vuex-管理tab的；tabsArr 的增删放到全局来处理，以一个全局单例模式管理，保证多个组件可以共同操作这份数据
 */
new Vuex.store({
  state:{
    count:0
  },
  mutations:{
    add(state){
      state.count++
    }
  }
})
