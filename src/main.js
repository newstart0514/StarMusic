import Vue from 'vue'
import App from './App.vue'
// 引入路由和store
import router from './router'
// 引入饿了么插件
import ElementUI from 'element-ui';
// 引入仓库store
import store from "@/store";
// 引入插件样式文件
import 'element-ui/lib/theme-chalk/index.css';
// 引入全局样式
import '@/assets/css/global.css'

// 使用插件
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  // 挂载全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
