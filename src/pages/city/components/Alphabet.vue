<!--字母表组件-->
<template>
    <div>
    <ul class="list">
        <li class="item" v-for="(item,key) of list" :key="key">{{key}}</li>
    </ul>
    </div>
</template>

<script>
export default {
  name: "CityAlphabet",
  props:{
      list:Object
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.list{
    display flex
    flex-direction column
    justify-content center
    position absolute
    right 0
    top 1.58rem
    bottom 0
    width .4rem     
    .item{
        line-height .4rem
        text-align center
        color $bgColor
    }
}
</style>