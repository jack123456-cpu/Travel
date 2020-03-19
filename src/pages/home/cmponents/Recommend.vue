<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="recommend-item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.src" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "recommend",
  data() {
    return {
      recommendList: [
        {
          id: 1,
          src:
            "//img1.qunarzz.com/sight/p0/1411/b6/662fc49d1d26a5a7775cf6b7f8b4ecec.water.jpg_256x160_642bd739.jpg",
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
        },
        {
          id: 4,
          src:
            "//img1.qunarzz.com/sight/p0/1609/33/33d5213b34b64fdfa3.img.jpg_256x160_dea59ee0.jpg",
          title: "亲近大自然，放飞心情",
          desc: "千岛湖"
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

.recommend-item {
  display: flex;
  overflow: hidden;
  height: 1.9rem;

  .item-img {
    width: 2.56rem;
    height: 1.6rem;
    padding: 0.1rem;
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

    .item-button {
      margin-top: 0.2rem;
      background: #ff9300;
      padding: 0 0.1rem;
      border-radius: 0.06rem;
      color: #fff;
    }
  }
}
</style>