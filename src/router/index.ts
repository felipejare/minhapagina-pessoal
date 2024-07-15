import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GostosView from '../views/GostosView.vue'
import ProjetosView from '@/views/ProjetosView.vue'
import ContatoView from '@/views/ContatoView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/melike',
      name: 'melike',
      component: GostosView
    },
    {
      path: '/projetos',
      name: 'projetos',
      component: ProjetosView
    },
    {
      path: '/contato',
      name: 'contato',
      component: ContatoView
    }
  ]
})

export default router
