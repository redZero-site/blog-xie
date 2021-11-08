<template>
  <ul class="articleList">
    <li class="articleLI" @click="viewDetail" v-for="(item, index) in 50" :key="'lis_'+index">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    viewDetail() {
      this.$router.push('/frontDesk/detailPage')
    }
  }
}
</script>

<style lang="less" scoped>
.articleList {
  .articleLI {
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #eee;
    color: #ddd;
    background-color: #fff;
  }
}
</style>