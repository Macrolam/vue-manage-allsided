<template>
  <section class="home">
    home1home1home1home1
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
.home{
  background: #000;
}
</style>
