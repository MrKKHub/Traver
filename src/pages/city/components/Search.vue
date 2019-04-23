<template>
  <div>
    <div class="search">
      <input type="text" placeholder="输入城市名或拼音" class="search-input" v-model="keyworlds">
    </div>
    <div class="search-content" ref="search" v-show="keyworlds">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >{{item.name}}</li>
        <li class="search-item border-bottom" v-show="noData">很遗憾,没有找到匹配城市</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll"
import {mapState,mapMutations} from 'vuex'
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keyworlds: "",
      timer: null,
      list: []
    };
  },
    methods: {
    handleCityClick(city) {
    //   this.$store.commit("changeCity", city)
    this.changeCity(city)
      this.$router.push('/')
    // console.log('111')
    // 链式编程 直接在这添加路由跳转
    },
     ...mapMutations(['changeCity'])
  },
  watch: {
    keyworlds() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyworlds) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          //   console.log(this.cities[i])
          this.cities[i].forEach(item => {
            // console.log(item)
            if (
              item.name.indexOf(this.keyworlds) > -1 ||
              item.spell.indexOf(this.keyworlds) > -1
            ) {
              result.push(item);
            }
          });
        }
        this.list = result;
      }, 16);
    }
  },
  computed: {
    noData() {
      return !this.list.length;
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search);
  },
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background-color: $bgColor;

  .search-input {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    padding: 0 0.2rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }
}

.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #eee;

  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    background-color: #fff;
    color: #666;
  }
}
</style>