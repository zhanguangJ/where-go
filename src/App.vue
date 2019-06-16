<template>
    <div id="app">
        <router-view></router-view>
        <keep-alive>
            <Footer></Footer>
        </keep-alive>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
// import Home from './components/Home.vue';
import Footer from './components/Footer.vue';
export default Vue.extend({
    components :{
        // Home,
        Footer
    }
})
</script>
<style lang="scss">
*{margin: 0;padding: 0;}
html{
    font-size:28px;
}
a{text-decoration: none;}
ul{list-style:none;}

</style>