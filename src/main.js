// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
import 'element-ui/lib/theme-chalk/index.css'
import Mock from './mock/mock'
Mock.mockData();
Vue.use(ElementUI)


Vue.config.productionTip = false
// 也可以在index.js routes里面配置路由独享的守卫
// 全局前置守卫
router.beforeEach((to, from, next) => {
  // ...
})
// 全局解析守卫
router.beforeResolve((to, from, next) => {
  // ...
})
// 全局后置钩子
router.afterEach((to, from) => {
  // ...
})
// 组件内守卫 beforeRouteEnter，beforeRouteUpdate ，beforeRouteLeave
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
