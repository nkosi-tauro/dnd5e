import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/races',
    name: 'Races',
    component: () => import('../views/Races.vue')
  },
  {
    path: '/monsters',
    name: 'Monsters',
    component: () => import('../views/Monsters.vue')
  },
  {
    path: '/mechanics',
    name: 'Game Mechanics',
    component: () => import('../views/GameMech.vue')
  },
  {
    path: '/rules',
    name: 'Rules',
    component: () => import('../views/Rules.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
