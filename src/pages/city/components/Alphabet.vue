<!--字母表组件-->
<template>
  <div>
    <ul class="list">
      <li
        class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart="handlestart"
        @touchmove="handlemove"
        @touchend="handleend"
        @click="handleChange"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CityAlphabet",
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  props: {
    list: Object
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.list) {
        letters.push(i);
      }
      return letters;
    }
  },
  updated() {
    const startY = this.$refs.A[0].offsetTop;
    //   console.log(startY)  得到字母A到顶部的距离
    // 同时让该组件发生变化时直接执行该生命周期函数
  },
  methods: {
    handleChange(e) {
      //   console.log(e.toElement.innerHTML)
      this.$emit("handleChange", e.toElement.innerHTML);
    },
    handlestart() {
      this.touchStatus = true;
    },
    handlemove(e) {
      if (this.touchStatus) {
          // 让事件延迟16毫秒之后执行 假如在这16毫秒内再次去触发这个函数
          // 那么就清除上一次未做完的函数 直接执行当前要做的事情
          // 通过函数节流的方式 减少它执行的频率 提高性能
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79;
          //    console.log(touchY)  得到手指按下屏幕时离字母A的距离
          const index = Math.floor((touchY - this.startY) / 20);
          // console.log(index)   得到按在哪个字母的索引
          if (index >= 0 && index < this.letters.length) {
            this.$emit("handleChange", this.letters[index]);
          }
        }, 16);
      }
    },
    handleend() {
      this.touchStatus = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 1.58rem;
  bottom: 0;
  width: 0.4rem;

  .item {
    line-height: 0.4rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>