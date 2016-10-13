<template>
  <div class="panel" :class="'panel-'+type">
    <div class="message">
      {{ message }}
    </div>
    <div class="buttons">
      <router-link v-for="button in buttons" :to="button.href" class="btn" :class="'btn-'+(button.color?button.color:'default')">{{ button.text }}</router-link >
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'success'
      },
      message: {
        type: String,
        default: '提交已成功啦!'
      },
      buttons: {
        type: Array,
        default: function () {
          return [
            { href: '/aa', color: 'default', text: '返回' },
            { href: '/a2', color: 'default', text: '返回' }
          ]
        }
      }
    }
  }
</script>

<style scoped>
  .panel {
    padding: 20px;
  }
  .message{
    color: #fff;
    font-size: 24px;
  }
  .buttons{
    margin-top: 20px;
  }
</style>