import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArtView from '../views/ArtView.vue'
import GameView from '../views/GameView.vue'
import PhotographyView from '../views/PhotographyView.vue'
import Product_Vue from '../views/Product_Vue.vue'
import cart_vue from '../views/Cart_Vue.vue'
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
    {
      path: '/Product_Vue',
      name: 'Product_Vue',
      component: Product_Vue
    },
    {
      path: '/cart_vue',
      name: 'cart_vue',
      component: cart_vue
    },
  ]
})

export default router
