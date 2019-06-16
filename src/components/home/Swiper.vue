<template>
    <div class="swiper" v-if="list.length">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="item of list" :key="item.id">
                <img :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props:{
        list : Array
    },
    data(){
        return{
            swiperOption: {
                pagination:{
                   el : '.swiper-pagination'
                },                
                autoplay:{
                    disableOnInteraction: false,
                },
                loop : true
            }
        }
    },
    

})
</script>
<style lang="scss" scoped>
.swiper{
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 31%;
}
img{
    width: 100%;
}
</style>
