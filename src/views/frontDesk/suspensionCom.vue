<template>
  <div class="suspensionCom">
    <div @click="$emit('myClick')" class="returnTopBtn">111</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>

<style lang="less" scoped>
.suspensionCom {
  position: absolute;
  bottom: 20px;
  right: -100px;
  .returnTopBtn {
    background-color: #666;
    height: 50px;
    width: 50px;
    cursor: pointer;
    border-radius: 50%;
  }
}
</style>
