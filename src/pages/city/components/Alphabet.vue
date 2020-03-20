<template>
  <ul class="list">
    <li class="item" v-for="(item,name) in cities" :key="name">{{name}}</li>
  </ul>
</template>
<script>
export default {
  name: "city-alphabet",
  props: {
    cities: Object
  }
};
</script>
<style lang="stylus" scoped>
@import '~style/varibles.styl';
@import '~style/ellipsis.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 1.58rem;
  width: 0.4rem;

  .item {
    color: $bgColor;
    padding: 0.1rem 0;
  }
}</style>