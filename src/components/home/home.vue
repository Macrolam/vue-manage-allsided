<template>
  <section class="home">

    <!--右侧-->
    <slideRight></slideRight>
    <!--顶部导航-->
    <!--底部快捷-->
  </section>
</template>

<script>
  import slideRight from 'common/home/slideRight'
  export default {
    name: 'home',
    components:{slideRight},
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
