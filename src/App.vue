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
  import slideLeft from '@/components/common/home/slideLeft'
  import headerTop from '@/components/common/home/header.vue'
  export default {
    name: 'App',
    components: {slideLeft, headerTop},
    computed:{
      num(){
         return this.$store.state.tab.num
      }
    },
    data(){
      return{

      }
    },
    created(){
    },
    mounted(){
      //document.write(this.num)
      //console.log(this.$store.state.tab.num,"read state");
    }
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

  #leftWrap {
    width: 200px;
    height: 100%;
    background: rgb(43, 43, 43);
  }

  #rightWrap {
    width: 100%;
    height: 100%;
    background: #fff;
  }

  #rightWrap .topWrap {
    height: 100px;
    background: lightgoldenrodyellow;
    overflow: hidden;
    padding: 0;
  }
 #rightWrap .main{
   background: #fff;
   padding: 0;
   padding-left: 20px;
 }
  #rightWrap .footer {
    height: 100px;
    background: cornflowerblue;
  }
</style>
