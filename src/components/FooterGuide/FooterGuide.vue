<template>
  <footer class="footer_guide">
    <div class="guide-item" @click="goto('/home')" :class="{on: isCurrent('/home')}">
      <span  class="item_icon">
       <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </div>
    <div class="guide-item" @click="goto('/category')" :class="{on: isCurrent('/category')}">
      <span class="item_icon">
        <i class="iconfont icon-category"></i>
      </span>
      <span>分类</span>
    </div>
    <div class="guide-item" @click="goto('/ldentifying')" :class="{on: isCurrent('/ldentifying')}">
      <span class="item_icon">
       <i class="iconfont icon-cubelifangti"></i>
      </span>
      <span>识物</span>
    </div>
    <div class="guide-item" @click="goto('/shopping')" :class="{on: isCurrent('/shopping')}">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </div>
    <div class="guide-item" @click="goto('/prefile')" :class="{on: isCurrent('/prefile')}">
      <span class="item_icon">
       <i class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
    </div>
  </footer>
</template>

<script>
  export default {
    methods: {
      goto(path) {
        this.$router.replace(path)
      },
      isCurrent(path) {
        return this.$router.path === path
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../commons/stylus/mixins.styl"
  .footer_guide {
    top-border-1px(#e4e4e4);
    position fixed;
    left 0;
    bottom 0;
    background #f5f5f5;
    width 100%
    height 0.97rem
    display flex

    .guide-item {
      display flex;
      flex 1;
      text-align center;
      flex-direction column;
      align-items center;
      color #999;
      .item_icon {
        font-size: 0.24rem;
        margin-bottom: 0.02rem;
        .iconfont {
          margin-top: 0.02rem;
          display: block;
          width: 0.56rem;
          height: 0.56rem;
          background-size: cover;

        }
      }
        &.active{
          color: #B4282D !important;
        }
    }
  }



</style>
