// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import fastclick from 'fastclick'
import '@/common/stylus/index.styl'
import { Indicator, InfiniteScroll, Lazyload, MessageBox, Toast } from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store'
Vue.config.productionTip = false
// 引入http库
Vue.prototype.$axios = axios
// 引入fastclick
// 官方推荐将fastclick绑定到body下，这样在body下的元素都不会有300ms的延迟
fastclick.attach(document.body)

Vue.config.productionTip = false

Vue.use(InfiniteScroll)
Vue.use(Lazyload)
Vue.prototype.loading = Indicator
Vue.prototype.$msg = MessageBox
Vue.prototype.$toast = Toast
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
