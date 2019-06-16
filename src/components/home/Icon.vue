<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon"
            v-for="item of page"
            :key="item.id"
        >
          <div class="icon-img">
            <img
              :src="item.imgUrl"
              alt
            >
          </div>
          <p v-text="item.desc"></p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    props:{
      list : Array
    },

    computed:{
        pages(){
            const pages = [];
            this.list.forEach((item,index)=>{
                const page = Math.floor(index/8);
                if(!pages[page]){
                    pages[page] = [];
                }
                pages[page].push(item);
            })
            return pages
        }
    }
});
</script>
<style lang="scss" scoped>
.icons .swiper-container {
  height: 0 !important;
  padding-bottom: 50% !important;
}
.icon {
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
  position: relative;
  .icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0.44rem;
    box-sizing: border-box;
    padding: 0.1rem;
    img {
      display: block;
      margin: 0 auto;
      height: 100%;
    }
  }
  p {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.44rem;
    line-height: 0.44rem;
    text-align: center;
    color: #333;
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
  }
}
</style>
