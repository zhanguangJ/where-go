<template>
  <div>
    <div class="mp-group-title image-ready">
      <img
        class="mp-title-img"
        src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"
        alt="猜你喜欢"
      >
      <span class="mp-title">猜你喜欢</span>
    </div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl" alt>

        <div class="mp-like-info">
          <div class="mp-like-title mp-ellipsis">{{item.title}}</div>
          <div class="mp-like-comment">
            <span class="mpf-starlevel" mp-role="star" data-score="4.8">
              <strong
                class="mpg-iconfont mpf-starlevel-gain iconfont"
                mp-role="starWidth"
                style="width: 96%;"
              >&#xe610;&#xe610;&#xe610;&#xe610;&#xe610;</strong>
            </span>
            <span class="mp-comment-num">{{item.desc}}</span>
          </div>
          <div class="mp-like-price">
            <span class="mpg-price">
              ¥
              <em class="mpg-price-num">{{item.price}}</em>
            </span>起
            <span class="mp-like-address">{{item.where}}</span>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    list: Array
  }
});
</script>

<style lang="scss" scoped>
.image-ready {
  background: none !important;
}
.mp-group-title {
  position: relative;
  padding: 0.24rem 0 0.26rem;
  .mp-title-img {
    display: inline-block;
    overflow: hidden;
    width: 0.44rem;
    height: 0.44rem;
    margin-left: 0.2rem;
    vertical-align: top;
  }
  .mp-title {
    display: inline-block;
    margin-left: 0.08rem;
    height: 0.44rem;
    color: #212121;
    font-size: 0.44rem;
    line-height: 0.44rem;
  }
}
.item {
  overflow: hidden;
  display: flex;
  height: 2.3rem;
  .item-img {
    width: 2.3rem;
    height: 2.3rem;
    padding: 0.1rem;
  }
  .mp-like-info {
    flex: 1;
    overflow: hidden;
    padding-left: .22rem;
  }
}
.mp-like-title {
    margin-top: .26rem;
    height: .44rem;
    color: #212121;
    font-size: 0.44rem;
    line-height: .44rem;
}

.mp-ellipsis {
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mp-like-comment {
    margin-top: .14rem;
    height: .44rem;
}
.mp-like-price {
    position: relative;
    margin-top: .22rem;
    color: #616161;
    font-size: 0.32rem;
    line-height: .4rem;
}
.mpf-starlevel {
    display: inline-block;
    position: relative;
    width: 1.5rem;
    height: .28rem;
    line-height: .28rem;
    font-size: .32rem;
    letter-spacing: .02rem;
    -webkit-transform: scale(.83);
    -moz-transform: scale(.83);
    -ms-transform: scale(.83);
    -o-transform: scale(.83);
    transform: scale(.83);
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    -o-transform-origin: 0 0;
    transform-origin: 0 0;
}
.mpf-starlevel-gain {
    z-index: 2;
    color: #ffb436;
}

.mpf-starlevel-gain, .mpf-starlevel-total {
    overflow: hidden;
    position: absolute;
    top: .04rem;
    left: 0;
    height: .28rem;
}
.mpg-iconfont {
    font-size: 10px;
}
.mpf-starlevel-total {
    z-index: 1;
    color: #e0e0e0;
}
.mp-comment-num {
    color: #616161;
    font-size: .32rem;
    line-height: .34rem;
    vertical-align: text-bottom;
}
.mp-like-price {
    position: relative;
    margin-top: .22rem;
    color: #616161;
    font-size: .32rem;
    line-height: .4rem;
}
.mp-like-price {
    position: relative;
    margin-top: .22rem;
    color: #616161;
    font-size: .32rem;
    line-height: .4rem;
}
.mp-like-price .mpg-price-num {
    color: #ffb436;
    font-size: .39rem;
}
.mp-like-address {
    position: absolute;
    right: .24rem;
    bottom: 0;
}
</style>

