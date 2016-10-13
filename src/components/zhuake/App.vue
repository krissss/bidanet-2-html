<template>
  <div>
    <app-header></app-header>
    <app-menu :menu=menu></app-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import AppHeader from '../common/components/Header'
  import AppMenu from '../common/components/Menu'
  
  export default {
    data () {
      return {
        menu: [
          { href: '/add', icon: 'icon-1', title: '新增' },
          { href: '/list', icon: 'icon-2', title: '列表' },
          { href: '/mine', icon: 'icon-3', title: '我的' }
        ]
      }
    },
    components: {
      AppHeader,
      AppMenu
    }
  }
</script>