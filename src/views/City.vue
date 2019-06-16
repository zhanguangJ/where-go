<template>
    <div>
        <Header></Header>
        <Search :cities="cities"></Search>
        <List :cities="cities" :hot="hotCities" :letter="letter"></List>
        <Alphabet :cities="cities" @change='handleLetterChange'></Alphabet>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import Header from '../components/city/Header.vue'
import Search from '../components/city/Search.vue'
import List from '../components/city/List.vue'
import Alphabet from '../components/city/Alphabet.vue'
export default Vue.extend({
    components:{
        Header,
        Search,
        List,
        Alphabet
    },
    data(){
        return{
            cities:{},
            hotCities:[],
            letter:''
        }
    },
    methods:{
        getCityInfo(){
            axios.get('https://www.easy-mock.com/mock/5cf5001e6e18ad42e9052ce1/example/WhereGo-Cities')
            .then(this.handelGetCityInfoSucc)
        },
        handelGetCityInfoSucc(res){
            res = res.data;
            // console.log(res);
            const data = res.data;
            this.cities = data.cities;
            this.hotCities = data.hotCities
        },
        handleLetterChange(letter){
            // console.log(letter);
            this.letter = letter
        }
    },
    mounted(){
        this.getCityInfo();
    }
})
</script>
