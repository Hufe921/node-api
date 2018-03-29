<template>
<div class="container">
  <h1>首页</h1>
  <section>
    <table border="1">
      <tr><th>课程名称</th><th>课程描述</th><th>图片</th><th>操作</th></tr>
      <tr v-for="(item,index) in projectList" :key="index">
        <td>{{item.name}}</td>
        <td>{{item.remark}}</td>
        <td><img :src="'http://localhost:3001/static/img/'+item.cover"/></td>
        <td>
          <template v-if="item.isChoose">
            <button @click="putChoose(item.id)">退选</button>
          </template>
          <template v-else>
            <button @click="postChoose(item.id)">选择</button>
          </template>
        </td>
      </tr>
    </table>

  </section>
  <the-foot/>
</div>
</template>

<script>
import TheFoot from '../../components/TheFoot'
import { mapState } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      projectList: []
    }
  },
  mounted () {
    this.$_init()
  },
  methods: {
    $_init () {
      const config = {
        url: this.$api.GetProjectByUserId.url + this.userInfo.id,
        method: 'get'
      }
      this.$http(config).then(({data}) => {
        this.projectList = data
      }).catch(error => {
        console.log(error)
      })
    },
    putChoose (id) {
      this.$http(this.$api.PutSelection, {userId: this.userInfo.id, projectId: id}).then(({data}) => {
        console.log(data)
        location.reload()
      }).catch(error => {
        console.log(error)
      })
    },
    postChoose (id) {
      this.$http(this.$api.PostSelection, {userId: this.userInfo.id, projectId: id}).then(({data}) => {
        console.log(data)
        location.reload()
      }).catch(error => {
        console.log(error)
      })
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  components: {
    TheFoot
  }
}
</script>

<style scoped>
section{
  width: 100%;
}
img{
  width: 150px;
  height: 100px;
}
</style>
