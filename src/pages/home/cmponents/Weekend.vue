<template>
  <div>
    <div class="recommend-title">周末去哪</div>
    <ul>
      <li class="recommend-item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.src" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "weekend",
  data() {
    return {
      weekendList: [
        {
          id: 1,
          src:
            "//imgs.qunarzz.com/vc/24/36/10/3fc94d042ae62de380581d4c98.jpg_92.jpg",
          title: "杭州野生动物世界杭州野生动物世界杭州野生动物世界",
          desc: "多功能综合性生态公园"
        },
        {
          id: 2,
          src:
            "//img1.qunarzz.com/sight/p0/2003/d8/d89f98d38fa881b0a3.water.jpg_256x160_0d22b850.jpg",
          title: "宁波植物园",
          desc: "园内丰富的植物等你来参观"
        },
        {
          id: 3,
          src:
            "//img1.qunarzz.com/sight/p0/201405/27/8211cadd5d9fefeaa044c5b7eefc695d.jpg_256x160_5d730aee.jpg",
          title: "游《非诚勿扰》拍摄地，感受湿地水乡浪漫",
          desc: "西溪国家湿地公园·周家村"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
@import '~style/ellipsis.styl';

.recommend-title {
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}

.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 32.8%;

  .item-img {
    width: 100%;
  }
}

.item-info {
  flex: 1;
  min-width: 0;
  color: #888;
  padding: 0.1rem;

  .item-title {
    font-size: 0.32rem;
    line-height: 0.54rem;
    ellipsis();
  }

  .item-desc {
    line-height: 0.4rem;
    color: #ccc;
  }
}
</style>