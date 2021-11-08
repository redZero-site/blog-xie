<template>
  <div class="hallPage">
    <HeadCom :isShowHead="isShowHead" />
    <!-- 上下内边距 -->
    <div class="hallContent" :style="{ paddingTop: !isShowHead?'48px':0,paddingBottom:!isShowFooter?'70px':0 }">
      <!-- 左右内边距,滚动元素 -->
      <div class="hallRolling">
        <!-- 容器 -->
        <div class="hallSetw" ref="hallSetw">
          <!-- <div :style="{height: toTopHeitht+'px'}" class="toTopDom"></div> -->
          <router-view />
        </div>
        <HallRight  :isShowHead="isShowHead" />
      </div>
    </div>
    <FooterCom :isShowFooter="isShowFooter" />
    <!-- <div class="toTopBtn" @click="toTop()"></div> -->
    <SuspensionCom @myClick="toTop()" />
  </div>
</template>

<script>
import HeadCom from './headCom.vue'
import FooterCom from './footerCom.vue'
import HallRight from './hallRight.vue'
import SuspensionCom from './suspensionCom.vue'
export default {
  components: {
    HeadCom,
    FooterCom,
    HallRight,
    SuspensionCom
  },
  data() {
    return {
      isShowHead: false,
      isShowFooter: false,
      currentView: 'ArticleList',
    }
  },
  mounted() {
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', this.scrollFunc, false);  
    }
    window.onmousewheel = document.onmousewheel = this.scrollFunc;
  },
  methods: {
    scrollFunc(e) {
      e = e || window.event
      if (e.wheelDelta) {
        //判断浏览器IE，谷歌滑轮事件
        if (e.wheelDelta > 0) {
          //当滑轮向上滚动时
          this.onClickBacktop(false)
        }
        if (e.wheelDelta < 0) {
          //当滑轮向下滚动时
          this.onClickBacktop(true)
        }
      } else if (e.detail) {
        //Firefox滑轮事件
        if (e.detail > 0) {
          //当滑轮向上滚动时
          this.onClickBacktop(false)
        }
        if (e.detail < 0) {
          //当滑轮向下滚动时
          this.onClickBacktop(true)
        }
      }
    },
    onClickBacktop(isShow) {
      this.isShowHead = isShow
      this.isShowFooter = !isShow
    },
    toTop() {
      let hallRolling = document.querySelector('.hallRolling')
      let then = this
      let setIn = setInterval(() => {
        if (hallRolling.scrollTop > 0) {
          if (hallRolling.scrollTop > 640) {
            hallRolling.scrollTop = hallRolling.scrollTop - 32
          } else if (hallRolling.scrollTop > 320) {
            hallRolling.scrollTop = hallRolling.scrollTop - 16
          } else if (hallRolling.scrollTop > 160) {
            hallRolling.scrollTop = hallRolling.scrollTop - 8
          } else if (hallRolling.scrollTop > 80) {
            hallRolling.scrollTop = hallRolling.scrollTop - 4
          } else if (hallRolling.scrollTop > 40) {
            hallRolling.scrollTop = hallRolling.scrollTop - 2
          } else {
            hallRolling.scrollTop = hallRolling.scrollTop - 1
          }
        } else {
          clearInterval(setIn)
          then.onClickBacktop(false)
        }
      }, 1)
    }
  }
}
</script>

<style lang="less" scoped>
.hallPage {
  width: 100vw;
  min-height: 100vh;
  background-color: rgb(246, 246, 246);
  .hallContent {
    width: 100vw;
    height: 100vh;
    transition: all 0.3s;
    box-sizing: border-box;
    .hallRolling {
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      transition: all 0.3s;
      overflow-x: hidden;
      overflow-y: scroll;
      padding: 10px 300px;
      display: flex;
      // position: relative;
      .hallSetw {
        box-sizing: border-box;
        min-height: 100%;
        padding: 0px 5px;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        flex: 1;
        .currentView {
          min-height: 100%;
          background-color: #fff;
        }
      }
    }
  }
}
</style>

<style lang="less">
html {
  overflow-y: scroll;
}

:root {
  overflow-y: auto;
  overflow-x: hidden;
}

:root body {
  position: absolute;
}

body {
  width: 100vw;
  overflow: hidden;
}

::-webkit-scrollbar {
    width: 8px;
    height: 12px;
    background-color: #fff;
}

::-webkit-scrollbar-thumb {
    display: block;
    min-height: 12px;
    min-width: 8px;
    border-radius: 6px;
    background-color: rgb(217, 217, 217);
}

::-webkit-scrollbar-thumb:hover {
    display: block;
    min-height: 12px;
    min-width: 8px;
    border-radius: 6px;
    background-color: rgb(159, 159, 159);
}

li {
  list-style-type: none;
}
</style>
