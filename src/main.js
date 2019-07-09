import Vue from 'vue'
import App from './App.vue'

import "./assets/bootstrap/css/bootstrap.css"
import "./assets/css/index.css"
// 导入axios
import axios from 'axios'
Vue.prototype.axios = axios
// 配置axios的基地址，调用请求方法的时候get（url）,
axios.defaults.baseURL = 'http://localhost:3000/'
// 导入router
import router from './router'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
