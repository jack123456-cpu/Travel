<template>
  <div>
    <detail-banner
      class="banner"
      :galleryImgs="galleryImgs"
      :sightName="sightName"
      :bannerImg="bannerImg"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
import axios from "axios";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      list: [],
      sightName: "",
      galleryImgs: [],
      bannerImg: ""
    };
  },
  mounted() {
    this.getDetailInfo();
  },
  activated() {},
  methods: {
    getDetailInfo() {
      axios
        .get("/api/detail.json", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.handleGetDetailInfoSucc);
    },
    handleGetDetailInfoSucc(res) {
      console.log(res);
      res = res.data;
      // console.log(res);
      if (res.ret && res.data) {
        const data = res.data;
        this.list = data.categoryList;
        this.bannerImg = data.bannerImg;
        this.sightName = data.sightName;
        this.galleryImgs = data.galleryImgs;
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.content {
  height: 50rem;
}</style>