<template>
    <div>
        <div>
            <Banner 
                :sightName="sightName"
                :bannerImg="bannerImg"
                :bannerImgs="gallaryImgs"
            ></Banner>
            <Header></Header>
            <div class="content">
                <!-- <detail-list :list="list"></detail-list> -->
                <Main :addr='addr'></Main>
                <Recommend 
                :tj='tuijian'
                :bannerImg="bannerImg"
                ></Recommend>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Banner from '../components/detail/Banner.vue'
import Header from '../components/detail/Header.vue'
import DetailList from '../components/detail/List.vue'
import Main from '../components/detail/Main.vue'
import Recommend from '../components/detail/Recommend.vue'
import axios from 'axios'
export default Vue.extend({
    name:'Detail',
    components :{
        Banner,
        Header,
        DetailList,
        Main,
        Recommend
    },
    data(){
        return {
            sightName : '',
            bannerImg : '',
            addr:'',
            gallaryImgs:[],
            tuijian:[]
        }
    },
    methods:{
        getDetailInfo(){
            axios.get('https://www.easy-mock.com/mock/5cf5001e6e18ad42e9052ce1/example/WhereGo-Detail',{
                params :{
                    id : this.$route.params.id
                }
            }).then(this.handleGetDataSucc)
        },
        handleGetDataSucc(res){
            res = res.data;
            if(res.data){
                const data = res.data;
                var goodsId = this.$route.params.id;
                var name,img,imgs,addr,tj; 
                data.List.find(function(index) {
                    if(index.id == goodsId) {
                        name = index.sightName;
                        img = index.bannerImg;
                        imgs = index.gallaryImgs;
                        addr = index.addr;
                        tj = index.tuijian;
                    }
                })
                this.sightName = name;
                this.bannerImg = img;
                this.gallaryImgs = imgs;
                this.addr = addr;
                this.tuijian = tj;
            }
        }
    },
    created(){
        // detail组件进场通知Mfooter组件删除
        this.$store.state.isShowMfooter = false
    },
    mounted(){
        this.getDetailInfo();
    }
})
</script>
<style lang="scss" scoped>
</style>
