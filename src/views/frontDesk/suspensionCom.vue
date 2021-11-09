<template>
  <div class="suspensionCom">
    <div @click="$emit('isToTop')" class="returnTopBtn" v-show="isShowToTop">111</div>
    <div @click="toPrevious" class="returnPageBtn" v-show="isShowRetBtn">222</div>
  </div>
</template>

<script>
export default {
  props: ['isShowToTop', 'isShowRetBtn'],
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
    toPrevious() {
      if (window.history.length <= 1) {
        this.$router.push({ path: '/'})
      } else {
        this.$router.go(-1)
      }
    }
  },
}
</script>

<style lang="less" scoped>
.suspensionCom {
  position: absolute;
  bottom: 20px;
  right: -60px;
  .returnTopBtn, .returnPageBtn {
    background-color: #fff;
    height: 50px;
    width: 50px;
    cursor: pointer;
    border-radius: 50%;
    margin-bottom: 10px;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.03);
  }
}
</style>
