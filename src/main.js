import Vue from 'vue'

import './lib/mui/css/mui.min.css'
//按需导入mint-UI中的组件
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

//导入app根组件
import app from './app.vue'

var vm = new Vue({
  el: '#app',
  data: {},
  render: c => c(app)
})