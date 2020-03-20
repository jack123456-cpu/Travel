import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import 'style/reset.css'
import 'style/border.css'
import 'style/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'swiper/dist/css/swiper.css'
/* 该css样式用于解决移动端1像素边框问题。问题分析：有些手机的屏幕分辨率较高，是2-3倍屏幕。css样式中border:1px solid red;在2倍屏下，显示的并不是1个物理像素，而是2个物理像素。为了解决这个问题，引入border.css是非常有必要的 */
Vue.config.productionTip = false

fastClick.attach(document.body)
/* eslint-disable no-new */
Vue.use(VueAwesomeSwiper)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
