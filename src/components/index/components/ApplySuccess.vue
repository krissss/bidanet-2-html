<template>
  <div>
    <app-message :type=messageObj.type :message=messageObj.message :buttons=messageObj.buttons></app-message>
  </div>
</template>

<script>
  import AppMessage from '../../common/components/Message'

  export default {
    data () {
      return {
        message: true,
        messageObj: {
          type: 'success',
          message: '提交成功啦！',
          buttons: [
            { href: '/', color: 'default', text: '返回 重新认证' }
          ]
        }
      }
    },
    components: {
      AppMessage
    }
  }
</script>