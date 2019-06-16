<template>
  <div>
    <ul>
      <li class="wallet">
        <a href="/user_wallet/">
          <span class="icon"></span>我的钱包
          <i class="arrow"></i>
        </a>
      </li>
      <li class="collect">
        <a>
          <span class="icon"></span>我的收藏
          <i class="arrow"></i>
        </a>
      </li>
      <li class="order" @click="goto">
        <a>
          <span class="icon"></span>我的订单
          <i class="arrow"></i>
        </a>
      </li>
      <li class="coupon">
        <a>
          <span class="icon"></span>我的优惠券
          <i class="arrow"></i>
        </a>
      </li>

      <li class="dianping">
        <a>
          <span class="icon"></span>我的点评
          <i class="arrow"></i>
        </a>
      </li>
      <li class="youji">
        <a>
          <span class="icon"></span>我的游记
          <i class="arrow"></i>
        </a>
      </li>
      <li class="wenda">
        <a>
          <span class="icon"></span>我的问答
          <i class="arrow"></i>
        </a>
      </li>
      <li class="wengweng">
        <a>
          <span class="icon"></span>我的笔记
          <i class="arrow"></i>
        </a>
      </li>
      <li class="jieban">
        <a>
          <span class="icon"></span>我的结伴
          <i class="arrow"></i>
        </a>
      </li>
      <li class="huodong">
        <a>
          <span class="icon"></span>我的活动
          <i class="arrow"></i>
        </a>
      </li>
      <li class="huodong">
        <a>
          <span class="icon"></span>我的活动
          <i class="arrow"></i>
        </a>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods:{
    goto(){
      this.$router.push({name:"dingdan",query:Date.now()})
    }
  }
});
</script>
<style lang="scss" scoped>
ul {
  list-style: none;
  background: rgb(245, 244, 244);
}
.icon,
.arrow {
  background: url(../../../assets/sprite3.png) no-repeat;
  background-size: 30px 525px;
}
li {
  height: 55px;
  font-size: 0.42rem;
  line-height: 55px;
  border-bottom: 1px solid #e5e5e5;
  background-color: #fff;
  a,
  a:visited {
    display: block;
    height: 100%;
    text-decoration: none;
    color: #666;
  }
  .arrow {
    display: block;
    width: 8px;
    height: 13px;
    background-position: 0 -353px;
    float: right;
    margin: 21px 20px 0 10px;
  }
  .dakaBtn {
    display: block;
    width: auto;
    padding: 0 5px;
    height: 30px;
    border-radius: 2px;
    background-color: #288dd9;
    color: #fff;
    text-align: center;
    line-height: 30px;
    float: right;
    margin: 12px 20px 0 10px;
  }
  .icon {
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    float: left;
    margin: 15px 10px 0 20px;
  }
}
li.wallet,
li.coupon,
li.jieban {
  margin-bottom: 10px;
}
li .shangdian a {
  display: inline-block;
}
.shangdian .icon {
  background-position: 0px 0px;
}
.wallet .icon {
  background-position: 0px -395px;
}
.collect .icon {
  background-position: 0px -467px;
}
.order .icon {
  background-position: 0px -419px;
}
.coupon .icon {
  background-position: 0px -443px;
}
.dianping .icon {
  background-position: 0px -24px;
}
.youji .icon {
  background-position: 0px -48px;
}
.wenda .icon {
  background-position: 0px -72px;
}
.wengweng .icon {
  background-position: 0px -96px;
}
.jieban .icon {
  background-position: 0px -120px;
}
.huodong .icon {
  background-position: 0px -144px;
}
.huodong{
    border: none;
}
</style>
