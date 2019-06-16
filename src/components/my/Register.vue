<template>
    <div>
        <Header></Header>
        <Main></Main>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Header from './register/Header.vue';
import Main from './register/Main.vue';
export default Vue.extend({
    components :{
        Header,
        Main
    }
})
</script>
