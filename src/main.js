// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper' //轮播插件
import store from './store'
//click事件延迟300s解决
import fastClick from 'fastclick'
//默认样式重置
import 'styles/reset.css'
//解决一像素变化
import 'styles/border.css'
//引入iconfont
import 'styles/iconfont.css'
// 轮播插件 require styles
import 'swiper/dist/css/swiper.css'
//兼容ES6
import 'babel-polyfill'
Vue.config.productionTip = false
//在body上引用
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
