<template>
    <div class="banner" @click='handleBannerClick'>
        <img :src="bannerImg" class="banner-img">
        <div class="banner-info">
            <div class="banner-title">
                {{this.sightName}}
            </div>
            <div class="banner-number">
                <span class="iconfont banner-icon">&#xe63a;</span>
                {{this.bannerImgs.length}}
            </div>
        </div>
        <Fade>
            <Gallary 
                :imgs="bannerImgs"
                v-show="showGfallary === 1"
                ref="imgs"
                @close="handleGallaryClose"
            ></Gallary>
        </Fade>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Gallary from '../common/Gallary.vue'
import Fade from '../common/Fade.vue'
export default Vue.extend({
    props:{
        sightName: String,
        bannerImg: String,  
        bannerImgs: Array     
    },
    data(){
        return {
            showGfallary : 0,
        }
    },
    methods:{
        handleBannerClick () {
            this.showGfallary  = 1;
        },
        handleGallaryClose () {
            this.showGfallary  = 0;
        }
    },
    components:{
        Gallary,
        Fade
    },
})
</script>
<style lang="scss" scoped>
.banner{
    position: relative;
    overflow:hidden;
    height: 0;
    padding-bottom: 55%;
    .banner-img{
        width: 100%;
    }
    .banner-info{
        display: flex;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        line-height: .6rem;
        color:#fff;
        background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
        .banner-title{
            flex: 1;
            font-size: .32rem;
            padding: 0 .2rem;
        }
        .banner-number{
            height: .32rem;
            line-height: .32rem;
            margin-top: .14rem;
            padding: 0 .4rem;
            border-radius: .2rem;
            background: rgba(0, 0, 0, .8);
            font-size: .24rem;
            .banner-icon{
                font-size: .24rem;
            }
        }
    }
}
</style>
