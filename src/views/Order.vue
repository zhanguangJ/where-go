<template>
    <div>
        <Header/>
        <Main />
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Header from '../components/order/Header.vue'
import Main from '../components/order/Main.vue'
import axios from 'axios'
export default Vue.extend({
    components:{
        Header,
        Main
    },
})
</script>
