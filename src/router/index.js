import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: () => import ('../views/CadastroView.vue')
    },
    {
      path: '/susTerror',
      name: 'susTerror',
      component: () => import ('../views/livrosSuspTerr.vue')
    },
    {
      path: '/aventura',
      name: 'aventura',
      component: () => import ('../views/livrosAventura.vue')
    },
    {
      path: '/diversos',
      name: 'diversos',
      component: () => import ('../views/livrosDiversos.vue')
    },
    {
      path: '/romance',
      name: 'romance',
      component: () => import ('../views/livrosRomance.vue')
    }
  ]
})


export default router
