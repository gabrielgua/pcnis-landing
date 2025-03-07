import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/home',
      component: () => import('../views/RootView.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('../views/HomeView.vue'),
        },
        {
          path: '/products',
          name: 'products',
          component: () => import('../views/ProductsView.vue'),
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('../views/ContactView.vue'),
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue'),
        },
      ],
    },
  ],
})

export default router
