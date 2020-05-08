import Vue from 'vue'
//import Vue from "vue/dist/vue.common.js";

//导入路由的包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)

//2.1导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)


//导入mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//按需导入mint-UI中的组件
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)
import { Swipe, SwipeItem } from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

//导入自己的router
import router from './router.js'

//导入app根组件
import app from './app.vue'

var vm = new Vue({
  el: '#app',
  data: {},
  render: c => c(app),
  router  //挂载路由对象
})