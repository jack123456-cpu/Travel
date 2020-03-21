<template>
  <div class="container" @click="hiddenBanner">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in imgs" :key="index">
          <img class="swiper-img" :src="item" alt="12" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallary",
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true,
        paginationType: "fraction",
        observeParents: true,
        observer: true
      }
    };
  },
  methods: {
    hiddenBanner() {
      this.$emit("hidden");
    }
  }
};
</script>
<style lang="stylus" scoped>
.container >>> .swiper-container {
  overflow: visible;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000;

  .wrapper {
    background-color: #fff;
    height: 0;
    width: 100%;
    padding-bottom: 100%;

    .swiper-img {
      width: 100%;
    }

    .swiper-pagination {
      color: #FFF;
      bottom: -1rem;
      z-index: 999;
    }
  }
}
</style>