import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

// Agregamos la URL base de nuestra API
//https://coronavirus-19-api.herokuapp.com/countries
//https://coronavirus-19-api.herokuapp.com/countries/colombia
axios.defaults.baseURL = 'https://coronavirus-19-api.herokuapp.com/countries/';

import "chart.js";
import "hchs-vue-charts";
Vue.use(window.VueCharts);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
