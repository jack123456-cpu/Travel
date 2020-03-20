<template>
  <ul class="list">
    <li
      class="item"
      v-for="item in letter"
      :key="item"
      @click="handleLetterClick"
      @touchstart="handelTouchStart"
      @touchmove="handelTouchMove"
      @touchend="handelTouchEnd"
      :ref="item"
    >{{item}}</li>
  </ul>
</template>
<script>
export default {
  name: "city-alphabet",
  props: {
    cities: Object
  },
  computed: {
    letter() {
      const letters = [];
      for (const i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  },

  methods: {
    handleLetterClick(e) {
      this.$emit("zimuSel", e.target.innerHTML);
    },
    handelTouchStart() {
      this.touchStatus = true;
    },
    handelTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          // console.log(startY);
          const touchY = e.touches[0].clientY - 79; // 距离顶部的距离减去header的距离
          const index = Math.floor((touchY - this.startY) / 24);
          // console.log(index);
          if (index >= 0 && index < this.letter.length) {
            this.$emit("zimuSel", this.letter[index]);
          }
        }, 10);
      }
    },
    handelTouchEnd() {
      this.touchStatus = false;
    }
  },
  data() {
    return {
      touchStatus: false,
      stratY: 0,
      timer: null
    };
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  }
};
</script>
<style lang="stylus" scoped>
@import '~style/varibles.styl';
@import '~style/ellipsis.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 1.58rem;
  width: 0.4rem;

  .item {
    color: $bgColor;
    padding: 0.1rem 0;
  }
}</style>