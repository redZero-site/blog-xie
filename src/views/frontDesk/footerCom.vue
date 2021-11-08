<template>
  <div class="footerCom" :class="{ isShowFooter }">
    <span>系统是由vue+node开发</span>
    <span>张三</span>
    <a>粤ICP备2021127879号</a>
  </div>
</template>

<script>
export default {
  props: ['isShowFooter']
}
</script>

<style lang="less" scoped>
.footerCom {
  box-sizing: border-box;
  width: 100vw;
  height: 70px;
  position: fixed;
  bottom: 0;
  left: 0px;
  // background-color: rgb(246, 246, 246);
  background-color: #fff;
  box-shadow: 0 3px 5px 0px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  span {
    font-size: 12px;
    color: #666;
  }
  a {
    font-size: 12px;
  }
}
.isShowFooter {
  bottom: -70px;
}
</style>