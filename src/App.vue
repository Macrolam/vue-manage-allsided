<template>
  <el-container id="app">
    <!--left begin-->
    <el-aside id="leftWrap">
      <!--菜单-->
      <slideLeft></slideLeft>
    </el-aside>
    <!--rigth begin-->
    <el-container id="rightWrap">
      <el-header class="topWrap">
        <!--顶部区域-->
        <headerTop></headerTop>
      </el-header>
      <el-main class="main">
        <!--路由匹配-->
        <router-view/>
      </el-main>
      <!--<el-footer class="footer">-->
        <!--&lt;!&ndash;底部区域&ndash;&gt;-->
        <!--Footer-->
      <!--</el-footer>-->
    </el-container>
  </el-container>
</template>

<script>
  import slideLeft from 'common/home/slideLeft'
  import headerTop from 'common/home/header.vue'
  export default {
    name: 'App',
    components:{slideLeft,headerTop},
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
  #leftWrap{
    width: 200px;
    height: 100%;
    background: lightcyan;
  }
  #rightWrap{
    width:100%;
    height: 100%;
    background: pink;
  }
   #rightWrap .topWrap{
      height: 100px;
      background: lightgoldenrodyellow;
   }
  #rightWrap .footer{
    height: 100px;
    background: cornflowerblue;
  }
</style>
