<template>
    <div>
        <Header :name="name"></Header>
        <Main :list='MainList'></Main>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Header from '../components/list/Header.vue'
import Main from '../components/list/Main.vue'
import axios from 'axios'
export default Vue.extend({
    components:{
        Header,
        Main
    },
    data(){
        return{
            MainList:[],
            name : ''
        }
    },
    methods:{
        getMainInfo(){
            axios.get('https://www.easy-mock.com/mock/5cf5001e6e18ad42e9052ce1/example/where-go-list')
            .then(this.getMainInfoSucc)
        },
        getMainInfoSucc(res){
            res = res.data;
            var goodsId = this.$route.params.id;
            var mL,name;
            if(res.List){
                const data = res.List;
                data.find(function(index){
                    if(index.id == goodsId){
                        name = index.name;
                        mL = index.List;
                    }
                })
                this.MainList = mL;
                this.name = name;
            }
        }
    },
    mounted(){
        this.getMainInfo();
    }
})
</script>
<style lang="scss" scoped>

</style>