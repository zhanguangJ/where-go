<template>
    <div>
        <div class="LBtn" @click="back">
            <p class="iconfont header-abs-back">&#xe6bc;</p>
        </div>
        <div class="CBtn">
            <h1>我的窝</h1>
        </div>
        <div class="RBtn" @click="quit">
            <p class="iconfont setting">&#xe60d;</p>
        </div>
        <div class="setpop" id="_j_topsetting_list" v-show="setting">
            <div class="con">
                <a id="btn_logout" @click="tologin">退出登录</a>
                <a id="btn_changeuser" @click="tologin">切换帐号</a>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    data(){
        return{
            setting:false
        }
    },
    methods:{
        back:function(){
            window.history.length > 1 ? window.history.back() : document.location.href='/home';
        },
        quit:function(){
            this.setting = !this.setting;
        },
        tologin(){
            //清除session
            sessionStorage.clear();
            this.$router.replace('/login');
        }
    }
});
</script>
<style lang="scss" scoped>
a{text-decoration: none;}
.CBtn {
  text-align: center;
  position: relative;
  h1 {
    line-height: 50px;
    font-size: 0.48rem;
    font-weight: normal;
    color: #666;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.header-abs-back {
  color: #f29406;
  font-size: 0.56rem;
  position: absolute;
  left: .42rem;
  top: .38rem;
  z-index: 2;
  width: .64rem;
  height: .64rem;
  text-align:center;
  line-height: .64rem;
}
.setting{
    color: #f29406;
    text-align: right;
    font-size: 0.56rem;
    position: absolute;
    right: .42rem;
    top: .38rem;
    z-index: 2;
    width: .64rem;
    height: .64rem;
    text-align:center;
    line-height: .64rem;  
}
.setpop {
    width: 88px;
    position: absolute;
    top: 46px;
    right: 0;
    background: url(../../../assets/loginbg.png) -213px 0 no-repeat;
    background-size: 275px 165px;
    padding-top: 4px;
    z-index: 9;
    .con {
        padding: 0 4px 2px;
        background-color: #9f9f9f;
        a{
            display: block;
            height: 40px;
            line-height: 40px;
            font-size: 14px;
            color: #fff;
            text-align: center;
        }
    }
}
.setpop .con a:nth-child(1) {
    border-bottom: 1px solid #adadad;
}
</style>
