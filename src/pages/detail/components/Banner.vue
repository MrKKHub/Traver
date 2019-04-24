<template>
  <div>
    <div class="banner" @click="handleShowPic">
      <img
        class="banner-img"
        src="//img1.qunarzz.com/sight/p0/1501/87/9dcb13572c70d3a2aae83b44121db72b.water.jpg_600x330_bcc57356.jpg"
        alt
      >
      <div class="banner-info">
        <div class="banner-title">大连盛业海洋世界(AAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          39
        </div>
      </div>
    </div>
    <common-gallary :fatherImg="imgs"
    v-if="swiperShow"
    @change="handleHiPic"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from "@/common/gallary/Gallary.vue";
export default {
  name: "DetailBanner",
  components: {
    CommonGallary
  },
  data() {
    return {
      imgs: [
        "http://img1.qunarzz.com/sight/p0/201311/07/accafdcee95b037ec8d65eac.jpg_r_800x800_31a1c48c.jpg"
      ],
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
