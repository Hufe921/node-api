<template>
<section>
  <form id="form" ref="form" action="http://localhost:3001/api/postProject" enctype="multipart/form-data" method="post">
    <input type="text" name="name" id="name" placeholder="名称" /><br/>
    <input type="text" name="remark" id="remark" placeholder="备注" /><br/>
    <input type="file" name="file" id="file" placeholder="封面" /><br/>
    <input type="submit" value="上传" /><br/>
  </form>
</section>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>

</style>
