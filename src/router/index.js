import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          name: 'Home',
          component: () => import('@/pages/home/Home')
       },
      {
          path: '/city',
          name: 'City',
          component: () => import('@/pages/city/City')
      },
      {
          path: '/detail/:id',
          name: 'Detail',
          component: () => import('@/pages/detail/Detail')
      }
  ],
    //当页面被拖动到下面时 平时切换路由视图 还是会显示在西面，加上这个函数处理右后切换路由会使得页面恢复到顶部
    scrollBehavior (to,from,savedPosition) {
      return { x:0,y:0}
    }
})
