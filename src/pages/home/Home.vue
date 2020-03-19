<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from "./cmponents/HomeHeader";
import HomeSwiper from "./cmponents/Swiper";
import HomeIcons from "./cmponents/Icon";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
};
</script>

<style>
</style>