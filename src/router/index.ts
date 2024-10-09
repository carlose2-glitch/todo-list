import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/modules/projects/layouts/layoutsPage.vue'),
    },

    {
      path: '/auth',
      redirect: { name: 'login' },
      component: () => import('@/modules/auth/Layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/modules/auth/pages/LoginVue.vue'),
        },
        {
          path: 'sign',
          name: 'sign',
          component: () => import('@/modules/auth/pages/SignVue.vue'),
        },
      ],
    },
  ],
});

export default router;
