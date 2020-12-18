import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// define un comportamiento previo o direccion url por defecto para ser concatenada
const base = axios.create({
  // baseURL : 'https://glacial-everglades-74306.herokuapp.com'
  baseURL : 'http://localhost:3000'
})
Vue.prototype.$http = base;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
