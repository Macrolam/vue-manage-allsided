<template>
  <el-row class="slideLeft">
    <el-col :span="24">
      <el-menu
        :router="true"
        background-color="#2b2b2b"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleOpen"><!--handleOpen(params1,params2) =>(`${index}-zero`,`${itemFir.key}`)-->
        <el-submenu :index="`${index}-zero`" :key= 'index' v-for="(item,index) in menuArr">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.name}}</span><!--零级导航名字-->
          </template>
          <el-menu-item :index="`${itemFir.key}`" :key="`${indexFir}-1`" v-for="(itemFir,indexFir) in item.children">
            <i :class="itemFir.icon"></i><!--一级导航名字-->
            {{itemFir.name}}
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
  import Vue from 'vue'
  import api from '@/script/api/api'
  import {restful} from '@/script/restful/restful'
  console.log(api,restful)
  export default {
    name: "slideLeft",
    data(){
      return {
        menuArr:[],
      }
    },
    methods: {
      // 获取菜单
      getMenu(){
        let self = this
        restful.get({
          url:api.getMenuByUserRole,
          callback(res){
            console.log(res.data.defaultSite,"res:")
            self.menuArr = res.data.defaultSite || []
          }
        })
      },
      // 菜单激活的回调
      handleOpen(menuIndex,menuIndexPath){
        let self = this
        console.log(menuIndex)
        console.log(menuIndexPath,"menuIndexPath:")//拿到 el-submenu :index="`${index}-zero`" 和 el-menu-item :index="`${itemFir.key}`"
        /*this.$router.push({//你需要接受路由的参数再跳转
            path: '/home1',
            name: 'home1',
            component: resolve =>require(['@/components/home/home1'],resolve),
        });*/

      },

    },
    created(){
      let self = this
      self.getMenu()
      Vue.globalFn()
    }
  }
</script>
<style>

</style>
