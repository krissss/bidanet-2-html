<template>
  <div class="menu">
    <router-link v-for="item in menu" :to="item.href" class="item">
      <i class="icon">{{ item.icon }}</i>
      <span class="title">{{ item.title }}</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    props: {
      menu: {
        type: Array,
        default: function () {
          return [
            { href: '#', icon: 'icon-1', title: '下发' },
            { href: '#', icon: 'icon-2', title: '下发1' },
            { href: '#', icon: 'icon-3', title: '下发2' }
          ]
        }
      }
    }
  }
</script>

<style>
	.menu {
		padding: 20px;
	}
	
	.menu .item {
		display: inline-block;
		white-space: nowrap;
		width: 32%;
		margin: 1% 0;
		text-align: center;
	}
	
	.menu .item .icon {
		display: block;
		color: #1983d1;
		font-size: 20px;
		height: 30px;
		line-height: 30px;
	}
	
	.menu .item .title {
		color: #8b8b8b;
	}
</style>