import isAuthenticatedGuard from '@/guards/is-authenticated.guards';
import isAuthenticatedIdUser from '@/guards/is-authenticatedIdUser.guards';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: [isAuthenticatedGuard],

      component: () => import('@/modules/projects/layouts/layoutsPagehome.vue'),
    },
    {
      path: '/listTask/:id',
      name: 'listTask',
      beforeEnter: [isAuthenticatedIdUser],
      props: (route) => {
        console.log(route);
        return {
          id: route.params.id,
        };
      },
      component: () => import('@/modules/projects/layouts/layoutsPageTaskList.vue'),
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
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('@/modules/projects/layouts/notFound.vue'),
    },
  ],
});

export default router;
