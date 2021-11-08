import Vue from 'vue'
import VueRouter from 'vue-router'
import FrontDesk from './frontDesk.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/frontDesk/index.vue'),
    children: [
        // 首页列表
        {
            path: '/',
            component: () => import('@/views/frontDesk/articleList.vue'),
        }
    ]
  }
].concat(
  FrontDesk
)

const router = new VueRouter({
  routes
})

export default router
