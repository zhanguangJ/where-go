<template>
    <div>
        <Header></Header>
        <Main></Main>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Header from '../components/dingdan/Header.vue'
import Main from '../components/dingdan/Main.vue'
export default Vue.extend({
    components:{
        Header,
        Main
    }
})
</script>
<style lang="scss" scoped>

</style>
