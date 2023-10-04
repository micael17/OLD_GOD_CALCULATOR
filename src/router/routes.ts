import { createRouter, createWebHistory } from 'vue-router'
// import HelloThere from '@/components/HelloThere.vue'
import TaxPage from '@/pages/Tax/TaxPage.vue'
import NhPage from '@/pages/Nh/NhPage.vue'

const routes = [
  {
    path: '/',
    component: TaxPage
  },
  {
    path: '/nh',
    component: NhPage
  }
]

export default createRouter({
  history: createWebHistory(),
  routes,
})