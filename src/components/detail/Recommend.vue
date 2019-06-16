<template>
    <div class="rec">
        <div class="mp-promote" mp-role="promoteArea">
        <h3 class="mp-ticket-type mpf-border-bottom">去哪儿推荐</h3>
        <div
          class="mp-ticket-item mp-flexbox mp-border-top"
          v-for="(item,key) of tj"
          :key = key
        >
          <div
            class="mp-ticket-main mp-flexbox-layout"
          >
            <div>
              <h6 class="mp-ticket-title mp-ellipsis2">{{item.title}}</h6>
              <ul class="mp-ticket-light">
                <span class="mp-ticket-desctag">
                  <img
                    class="mp-ticket-tagicon"
                    src="https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png"
                  >随买随用
                </span>
              </ul>
              <ul class="mp-ticket-labelcon">
                <span class="mp-ticket-label mp-border mp-label14">条件退</span>
              </ul>
              <div class="mp-ticket-supplier">
                <span>汇昊龙</span>
                <span class="mp-ticket-infobtn mp-border-left">
                  预订须知
                  <span class="mpg-iconfont">F</span>
                </span>
              </div>
              <div
                class="mp-ticket-detail"
              ></div>
            </div>
          </div>
          <div class="mp-ticket-side mp-flexbox-layout">
            <a
              class="mp-ticket-link"
            >
              <strong class="mp-ticket-sale mp-price">
                ¥
                <em class="mp-price-num">{{item.price}}</em>
              </strong>
              <em mp-role="downloadAppBtn" class="mp-ticket-btn mp-promote-ablebtn" @click="yuding(item.title,item.price)">预订</em>
            </a>
          </div>
        </div>
      </div>
    </div>
  
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props:{
    tj:Array,
    bannerImg: String
  },
  data(){
    return{
      addSuccess:false
    }
  },
  methods:{
    yuding(title,price){
      var carList = this.$store.state.goodsList;
      var id = this.$route.params.id;
      // console.log(this.bannerImg)
      var idExist = carList.find(item=>{
        return item.title == title;
      })
      if(!idExist){
        var data = {
          url : this.bannerImg,
          title:title,
          price : price,
          number : 1,
          id : id
        }
        this.$store.state.goodsList.push(data)
        localStorage.setItem('goodsinfo', JSON.stringify(this.$store.state.goodsList));
        this.$message({
          message:'成功预定'
        })
      }else{
        this.$message({
          message:'已成功预定'
        })
      }

    }
  }
});
</script>
<style lang="scss" scoped>
.rec{
    background: #9e9c9c;
    margin-top: .25rem;
}
.mp-promote {
    position: relative;
    background: #fff;
    margin-bottom: .2rem;
    padding-left: .2rem;
    
}
.mp-promote .mp-ticket-type {
    text-indent: .36rem;
}
.mp-promote .mp-ticket-item {
    padding: .2rem .2rem .24rem 0;
    height: 3rem;
    border-bottom: 0.025rem solid #cfcbcb;
}
.mp-ticket-item {
    box-sizing: border-box;
    padding: .2rem;
}
.mp-flexbox {
    display: flex;
    width: 100%;
}
.mp-ticket-item.mp-border-top::before {
    z-index: 1;
    border-color: #dadada;
}
.mp-ticket-main {
    box-flex: 2.92;
    flex: 2.92;
}
.mp-ticket-main, .mp-ticket-side {
    display: flex;
    align-items: center;
}
.mp-promote .mp-ticket-title, .mp-promote .mp-ticket-onedaytitle {
    margin-right: .1rem;
    line-height: .52rem;
    padding: 0;
    font-size: .38rem;
}
.mp-ticket-title, .mp-ticket-onedaytitle {
    color: #616161;
    font-size: .32rem;
    line-height: .4rem;
}
.mp-ticket-type {
    overflow: hidden;
    position: relative;
    font-weight: normal;
    z-index: 4;
    margin-bottom: -.02rem;
    padding: 0 .2rem;
    height: .88rem;
    background: #fff;
    color: #333;
    font-size: .42rem;
    line-height: .88rem;
    text-indent: .4rem;
}

.mp-ellipsis2 {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
}
.mp-promote .mp-ticket-light {
    overflow: hidden;
}
.mp-ticket-desctag {
    display: inline-block;
    height: .32rem;
    color: #616161;
    font-size: .32rem;
    line-height: .32rem;
    white-space: nowrap;
}
.mp-ticket-desctag .mp-ticket-tagicon, .mp-ticket-label .mp-ticket-tagicon {
    display: inline-block;
    width: .2rem;
    max-height: .32rem;
    margin-right: .04rem;
    vertical-align: 0;
}
.mp-ticket-labelcon {
    font-size: 0;
}
.mp-ticket-label {
    display: inline-block;
    margin-top: .08rem;
    padding: 0 .04rem;
    height: .32rem;
    color: #00afc7;
    font-size: .30rem;
    line-height: .32rem;
    white-space: nowrap;
}
.mp-border, .mp-border-top, .mp-border-right, .mp-border-bottom, .mp-border-left, .mp-border-topbottom, .mp-border-rightleft, .mp-border-topleft, .mp-border-rightbottom, .mp-border-topright, .mp-border-bottomleft {
    position: relative;
}
.mp-ticket-label.mp-border::before {
    border-color: #a5e4ec;
    border-radius: .08rem;
}
.mp-promote .mp-ticket-onedayitem, .mp-promote .mp-ticket-supplier {
    display: none;
}

.mp-ticket-supplier {
    margin-top: .08rem;
    color: #616161;
    font-size: .32rem;
    line-height: .34rem;
}
.mp-ticket-supplier .mp-ticket-infobtn {
    margin-left: .06rem;
    padding-left: .1rem;
}
.mp-ticket-infobtn .mpg-iconfont {
    display: inline-block;
    color: #616161;
    font-size: .32rem;
    vertical-align: -.02rem;
    transform: scale(.6);
}
.mp-ticket-main, .mp-ticket-side {
    display: flex;
    align-items: center;
}
.mp-ticket-link {
    box-sizing: border-box;
    display: block;
    width: 100%;
    padding-left: .2rem;
}
a {
    color: #00afc7;
    text-decoration: none;
}
.mp-ticket-sale, .mp-ticket-provide {
    color: #ff9800;
}
.mp-ticket-sale {
    height: .4rem;
}

.mp-ticket-sale, .mp-ticket-cost, .mp-ticket-btn, .mp-ticket-provide {
    display: block;
    overflow: hidden;
    height: .43rem;
    font-size: .32rem;
    line-height: .28rem;
    text-align: center;
}
.mp-price {
    font: .24rem "Microsoft yahei","Hiragino sans gb",Arial,sans-serif;
}
.mp-ticket-sale .mp-price-num {
    margin-left: .04rem;
    font-size: .48rem;
    line-height: .4rem;
}

.mp-price-num {
    font: .28rem Tahoma,Helvetica,sans-serif;
}
.mp-ticket-btn {
    height: .6rem;
    color: #fff;
    font-size: .28rem;
    line-height: .6rem;
    border-radius: .08rem;
    background-image: linear-gradient(130deg,#ffab1e 37%,#ff8c12 100%);
}

</style>
