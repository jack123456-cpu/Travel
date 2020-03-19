<template>
  <div>
    <home-header></home-header>
    <HomeSwiper></HomeSwiper>
  </div>
</template>

<script>
import HomeHeader from "./cmponents/HomeHeader";
import HomeSwiper from "./cmponents/Swiper";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper
  }
};
</script>

<style>
</style>