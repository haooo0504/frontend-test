import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

const routes = [
  { path: '/', redirect: 'products' },
  {
    path: '/products',
    name: 'products',
    component: () => import('./pages/products.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('./pages/cart.vue')
  }
]

export default createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes
})