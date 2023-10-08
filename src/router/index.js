import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArtView from '../views/ArtView.vue'
import GameView from '../views/GameView.vue'
import PhotographyView from '../views/PhotographyView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ArtView',
      name: 'ArtView',
      component: ArtView
    },
    {
      path: '/GameView',
      name: 'GameView',
      component: GameView
    },
    {
      path: '/PhotographyView',
      name: 'PhotographyView',
      component: PhotographyView
    },
  ]
})

export default router
