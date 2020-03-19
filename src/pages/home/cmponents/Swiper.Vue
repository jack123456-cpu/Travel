<!-- The ref attr used to find the swiper instance -->
<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.src" alt="12" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      },
      swiperList: [
        {
          id: 1,
          src:
            "//gw.alicdn.com/imgextra/i3/1611785/O1CN01OuRImZ1P3ZZ6zdY9d_!!1611785-0-lubanu.jpg_790x10000Q75.jpg_.webp"
        },
        {
          id: 2,
          src:
            "//gw.alicdn.com/imgextra/i3/1453939/O1CN01tRlyYm1ey6gxpZVa2_!!1453939-0-lubanu.jpg_790x10000Q75.jpg_.webp"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background-color: red;
}

.wrapper {
  background: red;

  .swiper-img {
    width: 100%;
  }
}
</style>