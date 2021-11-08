<template>
  <div class="progressBar">
    <div v-for="(item, index) in 5" class="prBaLi" :class="{ isBefore: active > index, isNow: active === index }">
      <div class="prBaIcon">
        <p class="prBaRound"></p>
      </div>
      <span class="prBaText">发起</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2
    }
  }
}
</script>

<style lang="less" scoped>
.progressBar {
  display: flex;
  width: 500px;
  .prBaLi {
    flex: 1;
    font-size: 14px;
    .prBaIcon {
      width: 100%;
      position: relative;
      height: 20px;
      .prBaRound {
        height: 13px;
        width: 13px;
        box-sizing: border-box;
        background-color: #fff;
        border-radius: 50%;
        border: 2px solid rgb(221, 221, 221);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        z-index: 1;
      }
      &::before {
        content: '';
        height: 3px;
        width: 50%;
        position: absolute;
        left: 0;
        top: 50%;
        background-color: rgb(221, 221, 221);
        transform: translateY(-50%);
      }
      &::after {
        content: '';
        height: 3px;
        width: 50%;
        position: absolute;
        right: 0;
        top: 50%;
        background-color: rgb(221, 221, 221);
        transform: translateY(-50%);
      }
    }
    &:nth-child(1) {
      .prBaIcon {
        .prBaRound {
          border: 0;
          height: 10px;
          width: 10px;
          background-color: rgb(221, 221, 221);
        }
        &::before {
          width: 0;
        }
      }
    }
    &:nth-last-child(1) {
      .prBaIcon {
        .prBaRound {
          border: 0;
          height: 10px;
          width: 10px;
          background-color: rgb(221, 221, 221);
        }
        &::after {
          width: 0;
        }
      }
    }
  }
  .isBefore, .isNow {
    .prBaIcon {
      .prBaRound {
        border-color: rgb(49, 142, 80);
      }
    }
    &:nth-child(1) {
      .prBaIcon {
        .prBaRound {
          background-color: rgb(49, 142, 80);
        }
      }
    }
    &:nth-last-child(1) {
      .prBaIcon {
        .prBaRound {
          background-color: rgb(49, 142, 80);
        }
      }
    }
  }
  .isBefore {
    .prBaIcon {
      &::before {
        background-color: rgb(49, 142, 80);
      }
      &::after {
        background-color: rgb(49, 142, 80);
      }
    }
  }
  .isNow {
    .prBaIcon {
      &::before {
        background-color: rgb(49, 142, 80);
      }
    }
  }
}
</style>
