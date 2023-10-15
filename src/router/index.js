import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArtView from '../views/ArtView.vue'
import GameView from '../views/GameView.vue'
import PhotographyView from '../views/PhotographyView.vue'
import Product_Vue from '../views/Product_Vue.vue'
import Cart_View from '../views/Cart_View.vue'
import Product_Game from '../views/Product_Game.vue'
import Product_Photpgraphy from '../views/Product_Photpgraphy.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import Userinfo from '../views/User_info.vue'
import OrderHistory from '../views/OrderHistory.vue'
import SearchPage from '../views/SearchPage.vue'

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
      path: '/Product_Vue/:id',
      name: 'Product_Vue',
      component: Product_Vue
    },
    {
      path: '/cart_vue',
      name: 'cart_vue',
      component: Cart_View
    },
    {
      path: '/Product_Game/:id',
      name: 'Product_Game',
      component: Product_Game
    },
    {
      path: '/Product_Photpgraphy/:id',
      name: 'Product_Photpgraphy',
      component: Product_Photpgraphy
    },
    {
      path: '/Login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/Register',
      name: 'Register',
      component: RegisterView
    },
    {
      path: '/Userinfo',
      name: 'Userinfo',
      component: Userinfo
    },
    {
      path: '/OrderHistory',
      name: 'OrderHistory',
      component: OrderHistory
    },
    {
      path: '/Seach',
      name: 'SearchPage',
      component: SearchPage
    }
  ]
})

export default router