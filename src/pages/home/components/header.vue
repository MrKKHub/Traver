<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont icon-fanhui"></div>
    </div>
    <div class="header-input">
      <span class="iconfont icon-sousuo"></span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont icon-xiajiantou"></span>
      </div>
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "HomeHeader",
  computed:{
    // mapState 是指把vuex里的数据映射到组件里名字叫做city的计算属性中
    ...mapState(['city'])
  }
};
</script>

<style lang="stylus" scoped>
// 如果需要像引JS文件一样使用@ 来引入css文件 需要在前面加上~
// 通过在webpack.base.config 中 配置styles对应的路径 可以得到和@一样的效果
@import '~styles/varibles.styl';

// 1rem = html font-size = 50px
.header {
  display: flex;
  line-height: $HeaderHeight;
  background-color: $bgColor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    text-align: center;

    .icon-fanhui {
      font-size: 0.4rem;
    }
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-left: 0.2rem;
    margin-top: 0.12rem;
    padding-left: 0.2rem;
    background-color: #fff;
    border-radius: 0.1rem;
    color: #ccc;
  }

  .header-right {
    min-width: 1.04rem;
    padding 0 .1rem
    text-align: center;
    color #fff;

    span {
      margin-left: -0.04rem;
      font-size: 0.24rem;
    }
  }
}
</style>