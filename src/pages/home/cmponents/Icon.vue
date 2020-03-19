<template>
  <div class="icons" :options="swiperOption">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-imgcontent" :src="item.src" />
          </div>
          <p class="icon-txt">{{item.text}}</p>
        </div>
      </swiper-slide>
      <!--       <swiper-slide v-if="icons.length>8">
        <div class="icon" v-for="item of icons.slice(8)" :key="item.id">
          <div class="icon-img">
            <img
              class="icon-imgcontent"
              src="https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png"
              alt
            />
          </div>
          <p class="icon-txt">{{item.text}}</p>
        </div>
      </swiper-slide>-->
    </swiper>
  </div>
</template>
<script>
export default {
  name: "icon",
  data() {
    return {
      icons: [
        {
          id: 1,
          src:
            "https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",
          text: "热门景点景点景点"
        },
        {
          id: 2,
          src:
            "https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",
          text: "热门景点"
        },
        {
          id: 3,
          src:
            "https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",
          text: "热门景点"
        },
        {
          id: 4,
          src:
            "https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",
          text: "热门景点"
        },
        {
          id: 5,
          src:
            "https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",
          text: "热门景点"
        },
        {
          id: 6,
          src:
            "https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",
          text: "热门景点"
        },
        {
          id: 7,
          src:
            "https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",
          text: "热门景点"
        },
        {
          id: 8,
          src:
            "https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",
          text: "热门景点"
        },
        {
          id: 9,
          src:
            "https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",
          text: "热门景点99"
        }
      ],
      swiperOption: {}
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.icons.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~style/varibles.styl';
@import '~style/ellipsis.styl';

.icons >>> .swiper-container {
  height: 0;
  padding-bottom: 50%;
}

.icon {
  position: relative;
  float: left;
  height: 0;
  width: 25%;
  padding-bottom: 25%;

  .icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0.44rem;

    .icon-imgcontent {
      height: 100%;
      display: block;
      margin: 0 auto;
    }
  }
}

.icon-txt {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.44rem;
  line-height: 0.44rem;
  text-align: center;
  font-size: 0.25rem;
  color: $darkText;
  ellipsis();
  width: 0.8rem;
  margin: 0 auto;
}
</style>