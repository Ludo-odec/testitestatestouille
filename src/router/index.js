import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Intro',
    component: () => import('../views/intro.vue')
  },
  {
    path: '/intro2',
    name: 'Intro2',
    component: () => import('../views/intro2.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/selection',
    name: 'Selection',
    component: () => import('../views/selection.vue')
  },
  {
    path: '/story/:id',
    name: 'Story',
    component: () => import('../views/story.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
