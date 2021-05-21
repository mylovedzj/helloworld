import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';
import VueAxios from 'vue-axios';
import {registryToast} from './components/toast/index';
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import seamComponent  from './components/seamless/index';
console.log(seamComponent);
Vue.use(seamComponent);
Vue.prototype.$echarts = echarts;
Vue.use(VueAxios,axios);
Vue.use(registryToast);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");