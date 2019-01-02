<template>
  <div class="header-wrap">
    <header>
      <div>
        <a href="javascript:;" class="headerLogo"></a>
      </div>
      <div class="headerSearch">
        <i class="icon"></i>
        <span class="placeholder">搜索商品, 共19974款好物</span>
      </div>
      <div class="loginBtn">登陆</div>
    </header>
    <ul class="navList">
      <li>
        <a href="javascript:;">推荐</a>
      </li>
      <li>
        <a href="javascript:;">居家</a>
      </li>
      <li>
        <a href="javascript:;">鞋包配饰</a>
      </li>
      <li>
        <a href="javascript:;">服装</a>
      </li>
      <li>
        <a href="javascript:;">电器</a>
      </li>
    </ul>
    <div class="toggle">
      <i class="icon"></i>
    </div>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="javascript:;">
                <img src="./images/96cf611743d7b382c11031f29152fa04.jpg" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:;">
                <img src="./images/089fdc9bfdc75ccfbe9c349d0096804b.jpg" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:;">
                <img src="./images/089fdc9bfdc75ccfbe9c349d0096804b.jpg" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:;">
                <img src="./images/089fdc9bfdc75ccfbe9c349d0096804b.jpg" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:;">
                <img src="./images/089fdc9bfdc75ccfbe9c349d0096804b.jpg" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:;">
                <img src="./images/df6d04118fb06870b7d01b868dac7829.jpg" alt="">
              </a>
            </div>

          </div>
        </div>
  </div>
</template>

<script>
  export default {
    name: "home"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.header-wrap {
  header {
    .headerLogo {
      float left
      width: 1.84rem;
      height: .53333rem;
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
      display: inline-block;
      margin-right: .26667rem;
      background-size: cover;
      background-position: center;
    }
    .headerSearch{
      background #ccc
      display inline-block
      padding 0.1rem
      .icon {
        display: inline-block;
        vertical-align: middle;
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: .37333rem;
        height: .37333rem;
        margin-right: .13333rem;

      }
      .placeholder {
        font-size 0.25rem
        line-height: 1.5;
        color: #333;
        outline: 0;
        font-family: PingFangSC-Light,helvetica,'Heiti SC';
      }
    }
    .loginBtn {
      float right
      width: 0.98667rem;
      height: 0.53333rem;
      line-height: 0.53333rem;
      text-align: center;
      color: #b4282d;
      border: 1px solid #b4282d;
      border-radius: .10667rem;
      margin-left: .21333rem;
      font-size: .32rem;
    }
  }
  .navList {
    z-index 100
    margin-top 0.2rem
    position: relative;
    width: 100%;
    overflow: hidden;

    >li {
      width 100%;
      >a {
        float left;
        font-size 0.3rem
        margin-left: .4rem;
      }

    }
  }
  .swiper-container {
    width 100%
    .swiper-wrapper{
      position relative
      width 100%
      height 4.3rem
      .swiper-slide{
        position absolute
        width 100%
        height 100%
        >img {
          width: 100%;
          height: 100%;

        }
      }
    }
  }
}

</style>
