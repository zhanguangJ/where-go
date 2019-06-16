<template>
  <div class="mp-main">
    <router-link class="mpp-product-item" v-for="item of list" :key="item.id" :to="'/detail/' + item.id">
      <div class="mp-productimg-wrapper">
        <img
          :src="item.imgUrl"
        >
      </div>
      <div class="mpp-product-info">
        <p class="product-name">{{item.name}}</p>
        <p class="product-desc">{{item.desc}}</p>
        <div class="mpp-product-price">
          <span class="mpp-product-qunarprice">
            ¥
            <em>{{item.price}}</em>
            <span>
              <span class="mpp-product-pricestart">起</span>
            </span>
          </span>
        </div>
      </div>
      <a
        class="fulllink"
        title="澳门环岛游"
      ></a>
    </router-link>
    <div class="ding"></div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    props:{
        list : Array
    }
});
</script>
<style lang="scss" scoped>
.mpp-product-item:not(:last-child) {
    margin-bottom: .2rem;
}

.mpp-product-item {
    background: #fff;
    position: relative;
    img {
        width: 100%;
    }
    .mpp-product-info {
        position: relative;
        padding: .14rem .2rem .24rem .2rem;
    }
    .product-name {
        overflow: hidden;
        padding-right: 2.2rem;
        color: #212121;
        font-size: .36rem;
        line-height: .54rem;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .product-desc {
        overflow: hidden;
        color: #616161;
        font-size: .26rem;
        line-height: .45rem;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .mpp-product-price {
        position: absolute;
        top: .25rem;
        right: .2rem;
        .mpp-product-qunarprice {
            color: #ff8300;
            font-size: .18rem;
            em {
                font-size: .4rem;
                margin-left: .04rem;
                font-weight: bold;
            }
        }
    }
    
}
.mp-productimg-wrapper {
    overflow: hidden;
    height: 0;
    width: 100%;
    padding-bottom: 43.37288%;
}
.mpp-product-pricestart {
    color: #616161;
    font-size: .22rem;
}
.ding{
    height: .99rem;
}
</style>

