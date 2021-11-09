<!--
 File Name  : index.vue
 Description: 前台结构
-->
<template>
  <div class="hallPage">
    <HeadCom :isShowHead="isShowHead" />
    <!-- 上下内边距 -->
    <div class="hallContent" :style="{ paddingTop: !isShowHead?'48px':0,paddingBottom:!isShowFooter?'70px':0 }">
      <!-- 左右内边距,滚动元素 -->
      <div class="hallRolling conPadding">
        <!-- 容器 -->
        <router-view class="hallSetw" />
        <HallRight class="HallRight"  :isShowHead="isShowHead" />
        <div class="toTopBtnDom">
          <SuspensionCom @isToTop="toTop()" :isShowToTop="isShowToTop" :isShowRetBtn="isShowRetBtn" />
        </div>
      </div>
    </div>
    <FooterCom :isShowFooter="isShowFooter" />
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
      isShowToTop: false,
      isShowRetBtn: false,
      currentView: 'ArticleList',
    }
  },
  watch: {
    $route: {
      handler(val, oldVal) {
        this.setRetBtn(val)
      },
      // 深度观察监听
      deep: true
    }
  },
  mounted() {
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', this.scrollFunc, false);  
    }
    window.onmousewheel = document.onmousewheel = this.scrollFunc;
    this.setRetBtn(this.$route)
  },
  methods: {
    setRetBtn(val) {
      if (val.meta.isShowRetBtn) {
        this.isShowRetBtn = true
      } else {
        this.isShowRetBtn = false
      }
    },
    scrollFunc(e) {
      e = e || window.event
      if (e.wheelDelta) {
        //判断浏览器IE，谷歌滑轮事件
        if (e.wheelDelta > 0) {
          //当滑轮向上滚动时
          this.isShowHead = false
        }
        if (e.wheelDelta < 0) {
          //当滑轮向下滚动时
          this.isShowHead = true
        }
      } else if (e.detail) {
        //Firefox滑轮事件
        if (e.detail > 0) {
          //当滑轮向上滚动时
          this.isShowHead = false
        }
        if (e.detail < 0) {
          //当滑轮向下滚动时
          this.isShowHead = true
        }
      }
      let RolScrTop = document.querySelector('.hallRolling').scrollTop
      let RolScrHeig = document.querySelector('.hallRolling').offsetHeight
      let SetwHeig = document.querySelector('.hallSetw').scrollHeight
      if ((RolScrTop + RolScrHeig + 100) >= SetwHeig) {
        this.isShowFooter = false
      } else {
        this.isShowFooter = true
      }
      if (RolScrTop >= 200) {
        this.isShowToTop = true
      } else {
        this.isShowToTop = false
      }
    },
    onClickBacktop(isShow) {
      this.isShowHead = isShow
      this.isShowFooter = !isShow
      this.isShowToTop = isShow
    },
    toTop() {
      this.FRONTDESK.toTop('hallRolling', this.onClickBacktop)
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
      justify-content: center;
      position: relative;
      .hallSetw {
        box-sizing: border-box;
        min-height: 100%;
        padding: 0px 5px;
        width: 100%;
        max-width: 900px;
        position: relative;
        flex: 1;
        .currentView {
          min-height: 100%;
          background-color: #fff;
        }
      }
      .toTopBtnDom {
        height: 100%;
        width: 0;
        top: 0;
        position: sticky;
        background-color: rgba(0, 0, 0, 0.1);
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
    background-color: rgb(194, 194, 194);
}

li {
  list-style-type: none;
}

@media screen and (max-width: 1500px) {
    .conPadding {
        padding-left: 200px !important;
        padding-right: 200px !important;
    }
}
@media screen and (max-width: 1300px) {
    .conPadding {
        padding-left: 100px !important;
        padding-right: 100px !important;
    }
}
@media screen and (max-width: 1200px) {
    .conPadding {
        padding-left: 0px !important;
        padding-right: 0px !important;
    }
    .suspensionCom {
      right: 60px !important;
    }
}
@media screen and (max-width: 900px) {
    .conPadding {
        .HallRight {
          display: none;
        }
    }
}
</style>
