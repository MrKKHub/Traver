<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont icon-fanhui header-back"></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CityHeader"
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
  position: relative;
  overflow: hidden;
  height: $HeaderHeight;
  line-height: $HeaderHeight;
  text-align: center;
  color: #fff;
  background-color: $bgColor;
  font-size: 0.32rem;

  .icon-fanhui:before {
    content: '\e624';
  }

  .header-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    color #fff
  }
}
</style>