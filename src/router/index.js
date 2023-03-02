import { createRounter, createWebHistory } from 'vue-router';

const router = createRounter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/About.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../pages/Blog.vue'),
    },
    {
      path: '/get-a-quote',
      name: 'GetAQuote',
      component: () => import('../pages/GetAQuote.vue'),
    },
    {
      path: '/media',
      name: 'Media',
      component: () => import('../pages/Media.vue'),
    },
    {
      path: '/shop',
      name: 'Shop',
      component: () => import('../pages/Shop.vue'),
    },
  ],
});

export default router;
