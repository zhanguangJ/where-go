<template>
  <header class="MfwHead">
    <div class="LBtn">
      <a
        class="btn back iconfont"
        href="javascript:window.history.back();"
        id="_j_top_history_back"
      >&#xe6bc;</a>
    </div>
    <div class="CBtn">
      <h1>我的订单</h1>
    </div>
    <div class="RBtn"></div>
  </header>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
<style lang="scss" scoped>
.MfwHead {
    background-color: #fff;
    border-bottom: 1px solid #e5e5e5;
    height: 1.33rem;
    position: relative;
}
.MfwHead .LBtn {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
}
.MfwHead a.btn.back {
    font-size: .626rem;
    height: 1.33rem;
    width: 1.33rem;
    text-align: center;
    line-height: 1.33rem;
    color: #f29406;
}
.MfwHead .CBtn {
    text-align: center;
    position: relative;
}
.MfwHead .CBtn h1 {
    font-size: .426rem;
    line-height: 1.33rem;
}

</style>
