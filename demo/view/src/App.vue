<template>
  <div id="app">
    <router-view @checkLogin="$_check"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    this.$_check()
  },
  methods: {
    $_check () {
      var userInfo = this.$utils.getCookie('userInfo')
      if (userInfo) {
        this.$store.commit('changeUserInfo', JSON.parse(userInfo))
        this.$router.push({name: 'Home'})
      } else {
        this.$router.push({name: 'Login'})
      }
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
