<template>
  <div>
    <div class="banner" @click="handleShowPic">
      <img
        class="banner-img"
        :src="bannerImg"
        alt
      >
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
   <fade-animation>
      <common-gallary :fatherImg="bannerImgs"
    v-if="swiperShow"
    @change="handleHiPic"></common-gallary>
   </fade-animation>
  </div>
</template>

<script>
import CommonGallary from "@/common/gallary/Gallary.vue";
import FadeAnimation from '@/common/fade/FadeAnimation.vue'
export default {
  name: "DetailBanner",
  components: {
    CommonGallary,
    FadeAnimation
  },
  props:{
    sightName:String,
    bannerImg:String,
    bannerImgs:Array
  },
  data() {
    return {
      swiperShow:false
    };
  },
  methods:{
      handleShowPic(){
          this.swiperShow = true
      },
      handleHiPic(){
          this.swiperShow = false
      }
  }
};
</script>

<style lang="stylus">
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }

    .banner-number {
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      height: 0.32rem;
      line-height: 0.32rem;
      border-radius: 0.2rem;
      background-color: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;

      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>
