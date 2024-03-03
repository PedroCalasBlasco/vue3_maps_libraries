import { createRouter, createWebHistory, RouteRecordRaw, Router } from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import GoogleMap from '../components/GoogleMap.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '/default',
    component: HelloWorld
  },
  {
    path: '/googleMap',
    name: '/googleMap',
    component: GoogleMap
  }
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes // short for `routes: routes`
})

export default router
