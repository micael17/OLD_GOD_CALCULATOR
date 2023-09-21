import LayoutMain from '@/layouts/LMain.vue'
import { createRouter, createWebHistory } from 'vue-router'
// import HelloThere from '@/components/HelloThere.vue'
import PHome from '@/pages/PHome.vue'

const routes = [
  {
    path: '/',
    component: LayoutMain,
    children: [
      {
        path: '/',
        component: PHome
      }
    ]
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})