<template>
  <section class="container">
    <el-card style="flex: 1">
      <div slot="header" class="clearfix">
        <span>新規投稿</span>
      </div>
      <el-table :data="showPosts" class="table" style="width: 100%">
        <el-table-column prop="title" label="タイトル" />
        <el-table-column prop="user.id" label="投稿者" width="180" />
        <el-table-column prop="crated_at" label="投稿日時" width="240" />
      </el-table>
    </el-card>
  </section>
</template>

<script>
export default {
  computed: {
    showPosts() {
      return [
        {
          id: '001',
          title: 'How to development Nuxt.js Application',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          created_at: '2020/01/01 10:00:00',
          user: {
            id: 'potato4d'
          }
        },
        {
          id: '002',
          title: 'Deployment Nuxt.js Application to Heroku',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          created_at: '2020/01/01 10:00:00',
          user: {
            id: 'potato4d'
          }
        }
      ]
    }
  }
}
</script>

<style scoped>
.posts-page .el-table__row {
  cursor: pointer;
}
</style>
