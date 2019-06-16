import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './registerServiceWorker';
import 'lib-flexible';
import './assets/style/iconfont.css';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper)

//路由守卫
router.beforeEach((to, from, next) => {
  //路由中设置的needLogin字段就在to当中 
  if (window.sessionStorage.data) {
    // console.log(to.path) //每次跳转的路径
    if (to.path === '/login') {
      //登录状态下 访问login.vue页面 会跳到Home.vue
      next({ path: '/home' });
    } else {
      next();
    }
  } else {
    // 如果没有session 
    if (to.path === '/my' ) { // 如果去登录或首页页面的话，直接next()
      next({path:'/login'});
    }else{
      //否则待在首页
      next()
    }
  }
})


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
