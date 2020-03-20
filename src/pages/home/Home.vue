<template>
  <div>
    <home-header :city="city"></home-header>
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

import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      city: {}
    };
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  mounted() {
    this.getHomeInfo();
  },
  methods: {
    getHomeInfo() {
      axios
        .get("/api/index.json")
        .then(res => {
          console.table(res.data.data.hotCities instanceof Array);
          this.city = res.data.data.hotCities[0];
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>