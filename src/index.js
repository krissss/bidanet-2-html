import Vue from 'vue'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Vuex from 'vuex'
Vue.use(Vuex)

import App from './components/index/App'

import ApplyForm from './components/index/components/ApplyForm'
import ApplySuccess from './components/index/components/ApplySuccess'

const router = new VueRouter({
  routes: [
    { path: '/', component: ApplyForm },
    { path: '/apply-success', component: ApplySuccess }
  ]
})

import store from './vuex/store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App }
})
