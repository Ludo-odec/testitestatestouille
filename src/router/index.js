import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'intro',
    component: () => import('../views/Intro.vue')
  },
  {
    path: '/brief',
    name: 'brief',
    component: () => import('../views/Brief.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/selection',
    name: 'selection',
    component: () => import('../views/Selection.vue')
  },
  {
    path: '/story/:id',
    name: 'story',
    component: () => import('../views/Story.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
