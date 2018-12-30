<template>
  <el-row class="header">
    <el-col :span="24">
      <el-row>
        <el-col :span="24">
          <el-tabs v-model="curTabKey" type="border-card" :closable="true" @tab-remove="closeTab" @tab-click="changeTab">
            <el-tab-pane
              :key="item.key"
              v-for="(item, index) in tabsArr"
              :label="item.name"
              :name="item.key"
              :closable="item.closable">
              {{item.key}}-{{item.closable}}
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <!--<el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">-->
        <!--top-4-->
        <!--</el-col>-->
        <!--<el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">top-8</el-col>-->
        <!--<el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">top-8</el-col>-->
        <!--<el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">top-4</el-col>-->
      </el-row>
    </el-col>

  </el-row>

</template>
<script>
  export default {
    /*computed:{
     tabsArr(){//tab区域的数据列表
     return this.$store.state.tab.tabsArr;
     },
     curTabKey(){// 激活的tab key
     return this.$store.state.tab.curTabKey;
     }
     },*/
    computed: {
      tabsArr: {//tab区域的数据列表
        get(){
          return this.$store.state.tab.tabsArr;
        },
        set (value) {
          console.log(value, "commit-to-store-val:tabsArr:");
          this.$store.commit('addTab', value)
        }
      },
      curTabKey: {// 激活的tab key
        get(){
          return this.$store.state.tab.curTabKey;
        },
        set (value) {
          console.log(value,"value:");
          this.$store.commit('tab/changeTab', value)
        }
      }
    },
    data(){
      return {
        tabIndex: 2
      }
    },
    methods: {
      // tab被选中时候触发
      changeTab(curTabObj){
        console.log(curTabObj, "curTabObj:");
        this.$store.commit('tab/changeTab',curTabObj)
      },
      // 关闭tab @name [string] 被删除的标签的name //name 也就是tab的key 要求具有唯一性
      closeTab(key){
        this.$store.commit('tab/closeTab', key)
      },

    },
  }
</script>
<style>

</style>
