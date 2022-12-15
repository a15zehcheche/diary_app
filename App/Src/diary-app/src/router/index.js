import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../Home.vue'
import CreateDiaryView from '../views/CreateDiaryView.vue'
import LookView from '../views/LookView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/index.html',
      name: 'cordovaDefaultRoute',
      component: HomeView
    },
    {
      path: '/',
      name: 'vueDefaultRoute',
      component: HomeView
    },
    {
      path: '/create',
      name: 'create',
      component: CreateDiaryView
    },
    {
      path: '/look',
      name: 'look',
      component: LookView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
