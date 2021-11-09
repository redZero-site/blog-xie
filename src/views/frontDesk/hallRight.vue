<!--
 File Name  : hallRight.vue
 Description: 右侧菜单
-->
<template>
  <div class="hallRight" :class="{ isFlex: !isShowHead }">
    <div class="authorDom"></div>
    <div class=""></div>
    <div class=""></div>
    <div class=""></div>
  </div>
</template>

<script>
export default {
  props: ['isShowHead']
}
</script>

<style lang="less" scoped>
.hallRight {
  width: 300px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  position: sticky;
  top: 0px;
  padding: 0 5px;
  transition: all 0.3s;
  > div {
    border-radius: 4px;
    width: 100%;
    background-color: #fff;
    margin-bottom: 10px;
    min-height: 50px;
  }
  .authorDom {
    height: 200px;
  }
}
</style>
