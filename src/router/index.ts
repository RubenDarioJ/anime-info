import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import NavBar from '@/components/NavBar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    },
    {
      path: '/test',
      name: 'test',
      component: NavBar
    }
  ]
})

export default router
