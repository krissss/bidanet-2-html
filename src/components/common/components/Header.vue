<template>
  <div class="header header-bg">
    <div class="user-head">
      <img :src="userHead">
    </div>
    <div class="user-info">
      <div class="name">{{ username }}</div>
      <div class="group">{{ userGroup }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        userHead: '/static/img/default-avator.jpg',
        username: '晓晓',
        userGroup: '新凯旋店-门市A组'
      }
    },
    created () {
      var info = this.$store.state.loginInfo
      if (!info) {
        /** this.$http.post(this.$store.state.hostname + '/login', { params: { userName: '抓客用户A', passwd: '111111', companyName: '测试公司' } }).then((response) => {
          var data = response.retVal
          console.log(data)
          info = this.$store.state.loginInfo
        }, (response) => {
          this.username = this.$store.state.user.username
          console.log(response)
        }) */
      }
      this.userHead = '/static/img/default-avator.jpg'// 用户表中无
      this.username = info.name
      this.userGroup = info.departmentId + info.groupFlag
    }
  }
</script>

<style scoped>
  .header{
    width: 100%;
    color: #fff;
    padding: 20px 0;
    font-size: 20px;
    overflow: hidden;
  }

  .user-head{
    float: left;    
    width: 80px;
    height: 80px;
    margin-left: 20px;
  }

  .user-head img{
    width: 100%;
    border-radius: 50%;
  }

  .user-info{
    margin-left: 110px;
    margin-right: 20px;
  }
  
  .user-info .name{
    padding: 5px 0;
    border-bottom: 1px solid #fff;
  }

  .user-info .group{
    padding-top: 5px;
  }

  .site .name{
    font-size: 30px;
    font-weight: bold;
  }

  .site .version{
    font-size: 24px;
  }

  .title{
    width: 80%;
    margin: 0 auto;
    font-size: 24px;
    padding: 5px 0 40px 0;
  }
</style>