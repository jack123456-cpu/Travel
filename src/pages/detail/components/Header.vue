<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont iconfanhui header-abs-back"></div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      景点详情
      <router-link to="/">
        <div class="iconfont iconfanhui icon-fixed-back"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail-header",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  created() {
    // window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    // window.removeEventListener("scroll", this.handleScroll);
  },
  activated() {
    window.addEventListener("scroll", this.handleScroll);
    console.log(123);
  },
  deactivated() {
    window.removeEventListener("scroll", this.handleScroll);
    console.log(123);
  },
  methods: {
    handleScroll() {
      console.log(11);
      const top = document.documentElement.scrollTop;
      if (top > 60) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.showAbs = false;
        this.opacityStyle = {
          opacity
        };
      } else {
        this.showAbs = true;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl';
@import '~style/ellipsis.styl';

.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  hieight: 0.86rem;
  line-height: 0.86rem;
  overflow: hidden;
  text-align: center;
  color: #fff;
  font-size: 0.4rem;
  background-color: $bgColor;

  .icon-fixed-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    color: #fff;
  }
}

.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  border-radius: 0.4rem;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.6);

  .header-abs-back {
    color: #fff;
    font-size: 0.4rem;
  }
}
</style>