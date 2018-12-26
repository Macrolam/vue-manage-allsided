<template>
  <el-row class="header">
    <el-col :span="24">
      <el-row>
        <el-col :span="24">
          <el-tabs v-model="curTabKey" type="card" closable @tab-remove="closeTab">
            <el-tab-pane
              :key="item.name"
              v-for="(item, index) in tabsArr"
              :label="item.title"
              :name="item.name">
              {{item.content}}
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
    data(){
      return {
        curTabKey: '2',// 激活的tab name
        tabsArr: [
          {
            title: 'Tab 1',
            name: '1',
            content: 'Tab 1 content'
          }, {
            title: 'Tab 2',
            name: '2',
            content: 'Tab 2 content'
          }
        ],
        tabIndex: 2
      }
    },
    methods: {
      // 关闭tab @name [string] 被删除的标签的name //name 也就是tab的key 要求具有唯一性
      closeTab(name){
        let self = this
        let curTabKey = null;
        // 放到promise中实现只是为了固定下代码结构
        new Promise((resolve, reject)=> {
          // 1.0 定位当前要关闭的tab
          self.tabsArr.forEach((item, index)=> {
            if (item.name === name) curTabKey = index;
          })
          curTabKey != null ? resolve(curTabKey) : reject("未能捕获到当前要关闭tab的index")
        }).then((curTabKeyFromResolve)=> {
          // 1.1 从tabsArr中删除此项
          self.tabsArr.splice(curTabKeyFromResolve, 1)
        }).catch((err)=> {
          console.log(err);
        })
      },

    },
  }
</script>
<style>

</style>
