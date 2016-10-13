import Vue from 'vue'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from './components/zhuake/App'

import ActionAdd from './components/zhuake/components/Add'
import ActionList from './components/zhuake/components/List'
import ActionMine from './components/zhuake/components/Mine'

const router = new VueRouter({
  routes: [
    { path: '/add', component: ActionAdd, alias: '/' },
    { path: '/list', component: ActionList },
    { path: '/mine', component: ActionMine }
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
