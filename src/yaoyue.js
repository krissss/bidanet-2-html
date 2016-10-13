import Vue from 'vue'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import App from './components/yaoyue/App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App }
})
