import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'intro',
    component: () => import('../views/intro.vue')
  },
  {
    path: '/intro2',
    name: 'intro2',
    component: () => import('../views/intro2.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/selection',
    name: 'selection',
    component: () => import('../views/selection.vue')
  },
  {
    path: '/story/:id',
    name: 'story',
    component: () => import('../views/story.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
