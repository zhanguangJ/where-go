<template>
    <ul class="list">
        <li 
            class="item"
            v-for="item of letters"
            :key="item"
            :ref="item"
            @click="handleLetterClick"

        >{{item}}</li>
    </ul>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props:{
        cities : Object
    },
    computed:{
        letters () {
            const letters = []
            for (let i in this.cities) {
                letters.push(i)
            }
            return letters
        }
    },
    data(){
        return {
            touchStatus : false
        }
    },
    methods:{
        handleLetterClick(e){
            // console.log(e.target.innerText);
            this.$emit('change',e.target.innerText)
        },

    }
})
</script>
<style lang="scss" scoped>
    ul{
        li{
            list-style: none;
        }
    }
    .list{
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        top: 1.58rem;
        right: 0;
        bottom: 0;
        width: .4rem;
        .item{
            line-height: .4rem;
            text-align: center;
            color: #00bcd4;
        }
    }
</style>
