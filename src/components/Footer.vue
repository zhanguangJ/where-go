<template>
  <div v-if="isShowMfooter" class="_3jvb2nTFcJZaKfGT3jLO-N">
    <div class="_2_zO9X158TTb_XBigSBXaa">
      <!-- 编程式导航 -->
      <a 
        v-for="(t,index) in tabs" 
        :key="index" 
        @click="toggleTab(index,$event,t.url)" 
        :class="{active:active==t.url}"  
        class="vhHLSLSvFKDyfNbVNtOGV _1XFdFVvdIV2Kk5DvkemeIS" >
        <div class="_3qJAJgmwFK8XUy7QH5OT8t iconfont" :class="t.className" v-html="t.icon" ></div>
        <div class="_2q_OgZBvsix_vxRGtxelUo" v-text="t.name"></div>
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data(){
    return {
      current:0,
      active:'home',
      tabs: [
        {
          // 选项卡的名字
          name: '首页',
          // 跳转路由
          url: 'home',
          // 图标
          className: '_2JMxUK2tV5fNkgpziy4SwV',
          icon : '&#xe61a;'
        },
        {
          name: '攻略',
          url: 'order',
          className: '_26drFUnsVh-214x7eRutxe',
          icon : '&#xe60c;'
        },
        {
          name: '我的',
          url: 'my',
          className: 'NofT5VOaEk7jwz6aM-096',
          icon : '&#xe617;'
        },
      ],
    }
  },
  methods:{
    toggleTab(index,e,t){
      
      this.active = t
      // 编程式导航
      // router.push(...)
      this.$router.push({
        name: this.tabs[index].url
      })
    }
  },
  computed:{
    isShowMfooter(){
      // 从仓库获取值到组件
      return this.$store.state.isShowMfooter
    }
  }
})
</script>
<style lang="scss" scoped>
a{
  text-decoration: none;
}
._3jvb2nTFcJZaKfGT3jLO-N {
    background: #fafafa;
    position: fixed;
    z-index: 10;
    left: 0;
    right: 0;
    bottom: 0;
    left: constant(safe-area-inset-left) !important;
    left: env(safe-area-inset-left) !important;
    right: constant(safe-area-inset-right) !important;
    right: env(safe-area-inset-right) !important;
}
._3jvb2nTFcJZaKfGT3jLO-N ._2_zO9X158TTb_XBigSBXaa {
    display: flex;
}
.vhHLSLSvFKDyfNbVNtOGV {
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 49px;
}
._3qJAJgmwFK8XUy7QH5OT8t {
    width: 30px;
    height: 30px;
    margin-top: 2px;
    display: inline-block;
    text-align: center;
    line-height: 30px;
}
._1XFdFVvdIV2Kk5DvkemeIS ._2q_OgZBvsix_vxRGtxelUo {
    color: #333;
}
._2q_OgZBvsix_vxRGtxelUo {
    color: #999;
    margin-bottom: 3px;
    font-size: 12px;
    line-height: 14px;
    transform-origin: 50% 0;
    transform: scale(0.83);
    width: 30px;
    text-align: center;
    display: inline-block;
}
.active{
  color: red;
}
</style>
