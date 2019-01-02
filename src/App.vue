<template>
  <div id="app">
    <router-view/>
    <FooterGuide/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  name: 'App',
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" scoped>
  @import "./commons/stylus/mixins.styl"
#app {
  width 100%;
  height 100%;
  background #f5f5f5;
  position relative;
  font-family: PingFangSC-Light,helvetica,'Heiti SC';
  line-height 1.5
}
</style>
