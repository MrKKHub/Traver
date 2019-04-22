<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont icon-fanhui"></div>
    </div>
    <div class="header-input">
        <span class="iconfont icon-sousuo"></span>
        输入城市/景点/游玩主题
    </div>
    <div class="header-right">城市
        <span class="iconfont icon-xiajiantou"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader"
};
</script>

<style lang="stylus" scoped>
// 如果需要像引JS文件一样使用@ 来引入css文件 需要在前面加上~
// 通过在webpack.base.config 中 配置styles对应的路径 可以得到和@一样的效果
@import '~styles/varibles.styl';
// 1rem = html font-size = 50px
.header {
  display: flex;
  line-height: 0.86rem;
  background-color: $bgColor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    text-align center
    .icon-fanhui{
        font-size .4rem
    }
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-left: 0.2rem;
    margin-top: 0.12rem;
    padding-left .2rem
    background-color: #fff;
    border-radius: 0.1rem;
    color: #ccc;
  }

  .header-right {
    width: 1.24rem;
    text-align: center;
    span{
        margin-left -.04rem
        font-size .24rem
    }
  }
}
</style>