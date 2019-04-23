// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
// 解决移动端300毫秒点击延迟问题
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  store,
  // components: { App },
  // template: '<App/>'
  render: c =>{
      return c(App)
  }
}).$mount('#app')
