<template>
    <div>
        <Mine></Mine>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Login from '../components/my/Login'
import Mine from '../components/my/Mine.vue'
export default Vue.extend({
    components:{
        Login,
        Mine
    }
})
</script>