<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hotCities"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>

      <div class="area" v-for="(item,name) in cities" :key="name" :ref="name">
        <div class="title border-topbottom">{{name}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="item02 in item"
            :key="item02.id"
            @click="handleCityClick(item02.name)"
          >{{item02.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import { mapState } from "vuex";
export default {
  name: "CityList",
  props: {
    hotCities: Array,
    cities: Object,
    zimu: String
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
    console.log(this.zimu);
  },
  watch: {
    zimu() {
      if (this.zimu) {
        this.scroll.scrollToElement(this.$refs[this.zimu][0]);
      }
      console.log(this.zimu);
    }
  },
  methods: {
    handleCityClick(name) {
      // alert(name);
      this.$store.dispatch("changeCite", name);
      this.$router.push("/");
    }
  },
  computed: {
    ...mapState(["city"])
  }
};
</script>
<style lang="stylus" scoped>
@import '~style/varibles.styl';
@import '~style/ellipsis.styl';

.border-topbottom:before, .border-topbottom:after {
  border-color: #ccc;
}

.border-bottom:before {
  border-color: #ccc;
}

.list {
  position: absolute;
  overflow: hidden;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;

  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      float: left;
      width: 33.3%;

      .button {
        padding: 0.1rem 0;
        text-align: center;
        margin: 0.1rem;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }

  .item-list {
    .item {
      padding: 0.1rem;
      line-height: 0.76rem;
    }
  }
}
</style>