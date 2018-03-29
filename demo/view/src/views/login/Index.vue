<template>
<div class="container">
  <h1>登录</h1>
  <section>
    <input type="text" v-model="login.account" placeholder="账号"/><br/>
    <input type="text" v-model="login.password" placeholder="密码"><br/>
    <section class="radio-container" v-for="(item,index) in userType" :key="index">
      <input type="radio" name="userTypeId" :id="'user'+item.id" v-model="login.userTypeId" :value="item.id"/><label :for="'user'+item.id">{{item.name}}</label>
    </section>
    <br/>
    <button @click="$_login"> 登录</button>
  </section>
  <the-foot/>
</div>
</template>

<script>
import TheFoot from '../../components/TheFoot'

export default {
  name: 'home',
  data () {
    return {
      login: {
        account: '',
        password: '',
        userTypeId: 1
      },
      userType: ''
    }
  },
  mounted () {
    this.$_init()
  },
  methods: {
    $_init () {
      this.$http(this.$api.GetUserType).then(({data}) => {
        this.userType = data
      }).catch(error => {
        console.log(error)
      })
    },
    $_login () {
      this.$http(this.$api.IsAllowLogin, this.login).then(({data}) => {
        if (data.length) {
          this.$utils.setCookie('userInfo', JSON.stringify(data[0]), 1)
          this.$store.commit('changeUserInfo', data[0])
          this.$router.push({name: 'Home'})
        } else {
          alert('登陆失败！')
        }
      }).catch(error => {
        console.log(error)
      })
    }
  },
  components: {
    TheFoot
  }
}
</script>

<style scoped>
.radio-container{
  display: inline-block;
}
</style>
