import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import PotionsViewVue from '@/views/PotionsView.vue' 
import MainViewVue from '@/views/MainView.vue'
import SpellsViewVue from '@/views/SpellsView.vue'

const routes = [
  {
    path: '',
    component: MainViewVue,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: HomeView
      },
      {
        path: '/potions',
        name: 'potions',
        component: PotionsViewVue
      },
      {
        path: '/spells',
        name: 'spells',
        component: SpellsViewVue
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
