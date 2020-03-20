<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont iconfanhui"></div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "CityHeader"
};
</script>
<style lang="stylus" scoped>
@import '~style/varibles.styl';
@import '~style/ellipsis.styl';

.header {
  position: relative;
  hieight: 0.86rem;
  line-height: 0.86rem;
  overflow: hidden;
  text-align: center;
  color: #fff;
  font-size: 0.4rem;
  background-color: $bgColor;

  .iconfanhui {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    color: #fff;
  }
}
</style>