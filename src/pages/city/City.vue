<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :zimu="zimu"></city-list>
    <city-alphabet :cities="cities" @zimuSel="selectZimu"></city-alphabet>
  </div>
</template>
<script>
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
import Axios from "axios";
export default {
  name: "city",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  mounted() {
    this.getCityInfo();
  },
  methods: {
    getCityInfo() {
      Axios.get("/api/index.json").then(this.handleGetCityInfoSucc);
    },
    handleGetCityInfoSucc(res) {
      res = res.data;
      console.log(res);
      if (res.ret && res.data) {
        const data = res.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
    selectZimu(zimu) {
      this.zimu = zimu;
    }
  },
  data() {
    return {
      hotCities: [],
      cities: {},
      zimu: ""
    };
  }
};
</script>
<style lang="stylus" scoped></style>