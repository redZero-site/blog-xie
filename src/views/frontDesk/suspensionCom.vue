<template>
  <div class="suspensionCom" :style="`bottom:${domBottom}px;right:${domRight}px;`" @mousedown="domMousedown" @mouseup="domMouseup" @mousemove="domMousemove" @mouseout="domMouseup">
    <div class="draggingPlate"></div>
    <div @click="$emit('myClick')" class="returnTopBtn">111</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      domBottom: 20, // 上下移动距离
      domRight: 200, // 左右移动距离
      isPressThe: false, // 是否按下鼠标
      clientX: null,
      clientY: null,
    }
  },
  methods: {
    domMousedown(ent) {
      this.isPressThe = true
      this.clientX = ent.clientX
      this.clientY = ent.clientY
    },
    domMouseup(ent) {
      this.isPressThe = false
    },
    domMousemove(ent) {
      if (this.isPressThe) {
        this.domBottom = this.clientY - ent.clientY + this.domBottom
        this.domRight = this.clientX - ent.clientX + this.domRight
        this.clientX = ent.clientX
        this.clientY = ent.clientY
      }
    },
  },
}
</script>

<style lang="less" scoped>
.suspensionCom {
  position: fixed;
  bottom: 20px;
  right: 200px;
  .draggingPlate {
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    cursor: move;
    border-radius: 50%;
  }
  .returnTopBtn {
    background-color: #666;
    height: 50px;
    width: 50px;
    margin: 20px;
    cursor: pointer;
    position: relative;
    border-radius: 50%;
  }
}
</style>
