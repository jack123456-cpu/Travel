<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="this.bannerImg" alt="picture" />
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">{{this.galleryImgs.length}}</div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs="galleryImgs" v-show="showGallary" @hidden="handleBannerHidden"></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from "common/gallary/Gallary";
import FadeAnimation from "common/fade/FadeAnimation";
export default {
  name: "Banner",
  props: {
    sightName: String,
    bannerImg: String,
    galleryImgs: Array
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  data() {
    return {
      imgs: [
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=31118306,972739979&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=31118306,972739979&fm=26&gp=0.jpg"
      ],
      showGallary: false
    };
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    handleBannerHidden() {
      this.showGallary = false;
    }
  }
};
</script>
<style lang="stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  padding-bottom: 55%;
  height: 0;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
    line-height: 0.6rem;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  }

  .banner-title {
    font-size: 0.32rem;
    padding: 0 0.2rem;
    flex: 1;
    vertical-align: middle;
  }

  .banner-number {
    padding: 0 0.4rem;
    margin-top: 0.14rem;
    height: 0.32rem;
    line-height: 0.32rem;
    border-radius: 0.2rem;
    background: rgba(0, 0, 0, 0.8);
    font-size: 0.24rem;
    color: #fff;
  }
}
</style>