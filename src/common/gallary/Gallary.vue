<template>
  <div class="container" @click="handleHiddenPic">
    <div class="wrapper">
        <swiper :options="swiperOption" >
      <swiper-slide >
        <img class="gallary-img" :src="fatherImg[0]" alt>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        fatherImg:Array
    },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        paginationType:'fraction',
        observeParents:true,
        observe:true
      }
    };
  },
  methods:{
      handleHiddenPic(){
          this.$emit('change')
      }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-container{
    overflow inherit
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000;

  .wrapper {
    height: 0;
    width: 100%;
    padding-bottom: 100%;

    .gallary-img {
      width: 100%;
    }
    .swiper-pagination{
        color #fff
        bottom -1rem
    }
  }
}
</style>
