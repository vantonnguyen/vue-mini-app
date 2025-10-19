import { createRouter, createWebHistory } from 'vue-router'
import TrangChu from '../views/trang_chu.vue'

const routes = [
  {
    path: '/',
    name: 'TrangChu',
    component: TrangChu
  }
]

const router = createRouter({
  history: createWebHistory(), // thay cho mode: 'history'
  routes
})

export default router