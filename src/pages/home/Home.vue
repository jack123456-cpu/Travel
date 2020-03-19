<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "./cmponents/HomeHeader";
import HomeSwiper from "./cmponents/Swiper";
import HomeIcons from "./cmponents/Icon";
import HomeRecommend from "./cmponents/Recommend";
import HomeWeekend from "./cmponents/Weekend";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
};
</script>

<style>
</style>