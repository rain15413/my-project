

import Vue from "vue";
import App from "./App.vue";
import router from "./router/index"
import axios from "axios"
import { Toast } from "vant" // 使用vant还需要在babel.config.js里进行配置
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(Toast); // 全局tost配置
// Toast.setDefaultOptions({
//   overlay: true
// });
Vue.prototype.$axios = axios;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");