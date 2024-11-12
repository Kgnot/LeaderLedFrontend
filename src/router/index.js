import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import ProductsView from '../views/Products.vue'
import AboutView from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/Products',
      name: 'ProductsView',
      component: ProductsView,
    },
    {
      path: '/About',
      name: 'AboutView',
      component: AboutView,
    },
  ],
})

export default router
