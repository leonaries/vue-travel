// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//click事件延迟300s解决
import fastClick from 'fastclick'
//默认样式重置
import 'styles/reset.css'
//解决一像素变化
import 'styles/border.css'
//引入iconfont
import 'styles/iconfont.css'
Vue.config.productionTip = false
//在body上引用
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
