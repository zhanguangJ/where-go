import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city:window.localStorage.city || '广州',
    isShowMfooter:true,
    goodsList:localStorage["goodsList"]?JSON.parse(localStorage["goodsList"]): []  
  },
  actions: {},
});
