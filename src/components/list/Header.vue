<template>
  <div>
    <div class="mp-header">
      <a class="mp-header-left mp-iconfont iconfont" href="javascript:window.history.back();" id="msgoback">&#xe6bc;</a>
      <h1 class="mp-header-title">{{name}}</h1>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props:{
    name:String
  }
});
</script>
<style lang="scss" scoped>
a{text-decoration: none;}
.mp-header {
    position: relative;
    height: .88rem;
    background: #00bcd4;
    z-index: 91;
}
.mp-header-left {
    left: 0;
    top: 0;
    width: .8rem;
    height: .88rem;
    line-height: .88rem;
}
.mp-header-left, .mp-header-back {
    position: absolute;
    font-size: .36rem;
    color: #fff;
    text-align: center;
}
.mp-iconfont {
    line-height:.88rem; 
}
.mp-header-title {
    overflow: hidden;
    margin: 0 1rem;
    line-height: .88rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .32rem;
    text-align: center;
    color: #fff;
}
</style>
