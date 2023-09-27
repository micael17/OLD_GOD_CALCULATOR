import { createRouter, createWebHistory } from 'vue-router'
// import HelloThere from '@/components/HelloThere.vue'
import PHome from '@/pages/Home/HomePageContainer.vue'

const routes = [
  {
    path: '/',
    component: PHome,
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