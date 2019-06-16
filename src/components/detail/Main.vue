<template>
  <div>
    <div class="mp-baseinfo">
      <div class="mpg-flexbox mp-flex-card">
        <div class="mpg-flexbox-item mp-flexlink-con">
          <a
            class="mp-card-link"
          ></a>
          <div>
            <span class="mp-commentcard-score">5.0</span>
            <span class="mp-commentcard-text">分</span>
            <span class="mp-commentcard-desc">超赞</span>
          </div>
          <div>
            <span class="mp-totalcommentnum">111455条评论</span>
            <span class="mp-totalcommentnum">26条攻略</span>
            <span class="iconfont mp-rightarrow">&#xe6bc;</span>
          </div>
        </div>
        <div class="mpg-flexbox-item mp-border-left mp-flexlink-con">
          <a
            class="mp-card-link"
          ></a>
          <div>
            <span class="mp-sightcard-title">景点简介</span>
          </div>
          <div>
            <span class="mp-sightcard-text">开放时间、贴士</span>
            <span class="iconfont mp-rightarrow" style="right: 0;">&#xe6bc;</span>
          </div>
        </div>
      </div>
      <div class="mp-baseinfo-address mp-border-top" id="card-adress">
        <p class="mp-baseinfo-address-txt">
          <span class="iconfont mp-baseinfo-address-icon">&#xe64e;</span>{{addr}}
          <span class="iconfont mp-baseinfo-address-arrow">&#xe6bc;</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props:{
    addr : String
  }
});
</script>
<style lang="scss" scoped>
.mp-baseinfo {
    position: relative;
    top: -.1rem;
    padding: .1rem .2rem 0 .2rem;
    margin-bottom: .1rem;
    background: #fff;
    border-radius: .1rem .1rem 0 0;
}
.mp-flex-card {
    padding-top: .1rem;
    padding-bottom: .2rem;
}
.mpg-flexbox {
    display: flex;
    width: 100%;
}
.mp-flexlink-con {
    position: relative;
}
.mpg-flexbox-item, .mpg-flexbox-layout {
    flex: 1;
}
.mp-card-link {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
a {
    color: #00afc7;
    text-decoration: none;
}
.mp-commentcard-score {
    font-size: .52rem;
    color: #ff8300;
    line-height: .52rem;
}
.mp-commentcard-text {
    font-size: .34rem;
    color: #ff8300;
    line-height: .48rem;
}
.mp-commentcard-desc {
    font-size: .34rem;
    color: #ff8300;
    line-height: .48rem;
    margin-left: .2rem;
}
.mp-totalcommentnum {
    font-size: .32rem;
    color: #9e9e9e;
    line-height: .32rem;
    margin-right: .2rem;
}
.mp-totalcommentnum {
    font-size: .32rem;
    color: #9e9e9e;
    line-height: .32rem;
    margin-right: .2rem;
}
.mp-flexlink-con .mp-rightarrow {
    position: absolute;
    top: .3rem;
    right: .2rem;
    color: #9e9e9e;
    font-size: .32rem;
}
.mp-flexlink-con {
    position: relative;
}
.mp-sightcard-title {
    font-size: .34rem;
    color: #212121;
    line-height: .48rem;
    padding-left: .3rem;
}
.mp-sightcard-text {
    color: #9e9e9e;
    font-size: .32rem;
    padding-left: .3rem;
}
.mp-flexlink-con .mp-rightarrow {
    position: absolute;
    top: .3rem;
    right: .2rem;
    color: #9e9e9e;
    font-size: .32rem;
}
.mp-baseinfo-address {
    display: block;
    position: relative;
    padding: .2rem 0;
    line-height: .36rem;
    color: #212121;
}
.mp-baseinfo-address-txt {
    padding-right: .56rem;
    position: relative;
    padding-left: .56rem;
    font-size: .42rem;
}
.mp-baseinfo-address-icon {
    display: block;
    height: 100%;
    line-height: 100%;
    position: absolute;
    left: 0;
    top: .16rem;
    margin-top: -.16rem;
    margin-right: .2rem;
    color: #9e9e9e;
    font-size: .42rem;
}
.mp-baseinfo-address-arrow {
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -.14rem;
    color: #9e9e9e;
    font-size: .34rem;
}
</style>
