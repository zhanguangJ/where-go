<template>
    <div>
        <Header></Header>
        <user-info></user-info>
        <Autograph></Autograph>
        <List></List>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Header from './mine/Header.vue'
import UserInfo from './mine/UserInfo.vue'
import Autograph from './mine/Autograph.vue'
import List from './mine/List.vue'
export default Vue.extend({
    components:{
        Header,
        UserInfo,
        Autograph,
        List
    }
})
</script>
<style lang="scss" scoped>

</style>
