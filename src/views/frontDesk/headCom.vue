<!--
 File Name  : headCom.vue
 Description: 顶部导航
-->
<template>
  <div class="headCom conPadding" :class="{ isShowHead }"></div>
</template>

<script>
export default {
  props: ['isShowHead'],
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.headCom {
  height: 48px;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  box-shadow: 0 3px 5px 0px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
}
.isShowHead {
  top: -52px;
}
</style>