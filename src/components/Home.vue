<template>
    <div>
        <Header></Header>
        <Swiper :list='swiperList'></Swiper>
        <Icon :list='iconList'></Icon>
        <Recommend :list='recommendList'></Recommend>
        <Weekend :list="weekendList"></Weekend>
        <Footer></Footer>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Header from './home/Header.vue';
import Swiper from './home/Swiper.vue';
import Icon from './home/Icon.vue';
import Weekend from './home/Weekend.vue';
import Recommend from './home/Recommend.vue';
import axios from 'axios' 
import {mapState} from 'vuex'

export default Vue.extend({
    components : {
        Header,
        Swiper,
        Icon,
        Recommend,
        Weekend,
    },
    data () {
        return{
            swiperList : [],
            iconList : [],
            recommendList : [],
            weekendList : []
        }
    },
    computed : {
        ...mapState(['city'])
    },
    methods:{
        getHomeInfo(){
            axios.get('https://www.easy-mock.com/mock/5cf5001e6e18ad42e9052ce1/example/wherego-home?city='+this.city)
            .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
            res = res.data;
            if(res.data){
                const data = res.data;
                this.swiperList = data.swiperList;
                this.iconList = data.iconList;
                this.recommendList = data.recommendList;
                this.weekendList = data.weekendList
            }
        }
    },
    created(){
        // detail组件进场通知Mfooter组件删除
        this.$store.state.isShowMfooter = true
    },
    mounted(){
        this.getHomeInfo();
    },
    activated(){
        if(this.lastCity !== this.city){
            this.lastCity = this.city
            this.getHomeInfo()
        }
    }
})
</script>

