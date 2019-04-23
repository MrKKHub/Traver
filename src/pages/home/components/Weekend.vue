<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1606/44/19689f8a01f5b2.jpg_r_640x214_7959e855.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首站,浪漫的海洋主题乐园"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1606/44/19689f8a01f5b2.jpg_r_640x214_7959e855.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首站,浪漫的海洋主题乐园"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1606/44/19689f8a01f5b2.jpg_r_640x214_7959e855.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首站,浪漫的海洋主题乐园"
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1606/44/19689f8a01f5b2.jpg_r_640x214_7959e855.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首站,浪漫的海洋主题乐园"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background-color: #eee;
  text-indent: 0.4rem;
}

.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 33.9%;

  .item-img {
    width: 100%;
  }
}

.item-info {
  flex: 1;
  padding: 0.1rem;
  min-width: 0;

  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    ellipsis();
  }

  .item-desc {
    line-height: 0.4rem;
    color: #ccc;
    ellipsis();
  } 
}
</style>