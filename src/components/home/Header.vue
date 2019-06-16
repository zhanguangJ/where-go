<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon"></div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe60b;</span>
            输入城市/景点/游玩
            </div>
        <router-link to='/city'>
            <div class="header-right">
                {{this.$store.state.city}}
                <span class="iconfont arrow-icon" >&#xe6aa;</span>
            </div>
        </router-link>
    </div>
</template> 
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>

<style lang="scss" scoped>
    .header{
        display: flex;
        line-height: .86rem;
        background: #00bcd4;
        color : #fff;
        .header-left{
            width: .64rem;
            float: left;
            .back-icon{
                text-align: center;
                font-size: .4rem;
            }
        }
        .header-input{
            flex: 1;
            height: .64rem;
            line-height: .64rem;
            margin-top: .12rem;
            padding-left: .2rem;
            background: #fff;
            border-radius: .1rem;
            color: #ccc;
        }
        .header-right{
            float: right;
            text-align: center;
            .arrow-icon{
                font-size: .2rem;
                margin-left: -.04rem;
            }
        }
    }
</style>