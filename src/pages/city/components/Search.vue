<template>
  <div>
    <div class="search">
      <input type="text" placeholder="输入城市名称或拼音" class="search-input" v-model="keyword" />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="isLetter">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null,
      isLetter: false
    };
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        this.isLetter = false;
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (const key in this.cities) {
          this.cities[key].forEach(val => {
            if (
              val.spell.includes(this.keyword) ||
              val.name.includes(this.keyword)
            ) {
              result.push(val);
            } else {
              this.isLetter = true;
            }
          });
        }
        this.list = result;
      }, 100);
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search);
  }
};
</script>
<style lang="stylus" scoped>
@import '~style/varibles.styl';
@import '~style/ellipsis.styl';

.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;

  .search-input {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    padding: 0 0.1rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }
}

.search-content {
  position: absolute;
  overflow: hidden;
  z-index: 1;
  top: 1.58rem;
  bottom: 0;
  left: 0;
  right: 0;
  background: #eee;

  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    color: #666;
    background: #fff;
  }
}
</style>