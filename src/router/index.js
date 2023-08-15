// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { useStorage } from "vue3-storage-secure";
import { nextTick } from 'vue'

const DEFAULT_TITLE = 'Vue3 detextre4';

const routes = [
  // ? Default routes
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: { title: `Home - ${DEFAULT_TITLE}` }
      },
    ],
  },

  // ? Authentication routes
  {
    path: '/auth',
    component: () => import('@/layouts/AuthLayout.vue'),
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login.vue'),
        meta: { title: `Login - ${DEFAULT_TITLE}` }
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})


router.beforeEach((to, from, next) => {
  // does not require auth, make sure to always call next()!
  if (!to.matched.some(record => record.meta.requiresAuth)) return next()

  const tokenAuth = useStorage().getStorageSync("tokenAuth")

  // go to wherever I'm going
  if (tokenAuth) return next()

  // this route requires auth, check if logged in
  // if not, redirect to login page.
  next({ name: 'Login' })
})


router.afterEach((to, from) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  nextTick(() => {
      document.title = to.meta.title || DEFAULT_TITLE;
  });
});

export default router
