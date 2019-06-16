<template>
    <div class="connect">
        <div class="hd"><span>使用第三方帐号登录</span></div>
        <ul class="bd">
            <li><a><i class="weibo"></i><br>新浪微博</a></li>
            <li><a><i class="qq"></i><br>QQ登录</a></li>
        </ul>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>
<style lang="scss" scoped>
ul{
    list-style: none;
}
a{
    text-decoration: none;
}
.connect {
    width: 100%;
    margin-top: 40px;
    padding-bottom: 20px;
    .hd{
        border-top: 1px solid #d8d8d8;
        height: 25px;
        width: 100%;
        position: relative;
        span{
            font-size: 12px;
            color: #CCC;
            display: inline-block;
            background-color: #fff;
            padding: 0 5px;
            top: -8px;
            left: 50%;
            margin-left: -66px;
            position: absolute;

        }
    }
    .bd{
        width: 100%;
        display: table;
        li{
            display: table-cell;
            width: 33%;
        }
        a{
            display: block;
            margin: 0 15px;
            border: 1px solid #e6e5e5;
            background-color: #f3f3f3;
            text-align: center;
            color: #666;
            font-size: 14px;
            line-height: 1.4em;
            padding-bottom: 8px;
            border-radius: 5px;
        }
        i{
            width: 40px;
            height: 38px;
            display: inline-block;
            background: url(../../../assets/connect.png) no-repeat;
            background-size: 130px 30px;
        }
        .weibo{
            background-position: 5px 10px;
        }
        .qq{
            background-position: -43px 10px;
        }
    }
}
</style>
