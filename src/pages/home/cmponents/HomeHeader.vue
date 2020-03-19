<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont iconfanhui"></i>
    </div>
    <div class="header-input">
      <i class="iconfont iconsousuo"></i> 输入城市游玩景点
    </div>
    <div class="header-right">
      城市
      <i class="iconfont iconjiantouxia"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="stylus" scoped>
/* 第一步优化 公共的部分 */
@import '~style/varibles.styl';

.header {
  box-sizing: border-box;
  display: flex;
  line-height: 0.86rem;
  background-color: $bgColor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;

    .iconfanhui {
      display: block;
      text-align: center;
    }
  }

  .header-input {
    flex: 1;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    height: 0.62rem;
    line-height: 0.62rem;
    background: #ffffff;
    border-radius: 0.05rem;
    color: #ccc;
  }

  .header-right {
    display: flex;
    width: 1.24rem;
    justify-content: center;

    .iconjiantouxia {
      padding-left: 0.05rem;
      font-size: 0.24rem;
    }
  }
}
</style>