<template>
    <div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </div>
 
</template>
<script lang="ts">
import Vue from 'vue';
import Header from './login/Header.vue';
import Main from './login/Main.vue';
import Footer from './three/Footer.vue';
export default Vue.extend({
    components:{
        Header,
        Main,
        Footer
    }
})
</script>

