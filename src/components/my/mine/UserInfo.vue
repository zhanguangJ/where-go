<template>
  <div
    class="userInfo"
    style="background-image:url(https://images.mafengwo.net/mobile/images/wo/userbg.jpg);"
  >
    <div class="userPhoto">
      <img
        src="https://p4-q.mafengwo.net/s10/M00/14/BC/wKgBZ1iuopqAcVzAAAACtVXwVIQ215.gif?imageMogr2%2Fthumbnail%2F%21150x150r%2Fgravity%2FCenter%2Fcrop%2F%21150x150%2Fquality%2F90"
      >
    </div>
    <div class="userCon1">
      <span class="name">来自北极的一只熊-</span>
      <span class="lv">LV99</span>
      <span class="sex male"></span>
    </div>
    <div class="userCon2">
      <a>6 关注</a>&nbsp;&nbsp;|&nbsp;&nbsp;
      <a>999+ 粉丝</a>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
.userInfo {
  width: 100%;
  height: 135px;
  padding-top: 25px;
  background-size: cover;
  text-align: center;
  .userPhoto {
    width: 50px;
    height: 50px;
    padding: 2px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: -1px 1px 5px #666;
    margin: 0 auto;
    position: relative;
    img {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .userCon1 {
    height: 15px;
    margin-top: 12px;
    .name {
      display: inline-block;
      font-size: 0.48rem;
      color: #fff;
    }
    .lv {
      display: inline-block;
      width: 30px;
      height: 15px;
      border-radius: 8px;
      text-align: center;
      line-height: 15px;
      color: #7c9bc0;
      background-color: #d6d6d6;
      font-size: 0.12rem;
      overflow: hidden;
      margin-left: 6px;
    }
    .sex {
      display: inline-block;
      width: 15px;
      height: 15px;
      margin-left: 6px;
      background: url(../../../assets/sprite3.png) no-repeat;
      background-position: -15px -338px;
      background-size: 30px 525px;
    }
  }
  .userCon2 {
    color: #717a8c;
    margin-top: 12px;
    a {
      color: #babfc9;
    }
  }

}
</style>
