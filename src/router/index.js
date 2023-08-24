// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { useStorage } from "vue3-storage-secure";
import { nextTick } from 'vue'
import { APP_NAMES } from '@/plugins/dictionary';

const DEFAULT_TITLE = APP_NAMES.capitalize;

const routes = [
  // ? Default routes
  {
    path: '/',
    component: () => import('@/layouts/default-layout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/pages/home.vue'),
        meta: { head: `Home - ${DEFAULT_TITLE}` }
      },
    ],
  },


  // ? No Authentication routes
  {
    path: '/auth',
    component: () => import('@/layouts/auth-layout.vue'),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/pages/login.vue'),
        meta: { head: `Login - ${DEFAULT_TITLE}` }
      },
      {
        path: "/:pathMatch(.*)*",
        name: "Error",
        component: () => import('@/pages/error.vue'),
        meta: { head: `Error - ${DEFAULT_TITLE}` }
      },
    ],
  },
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes,
})


router.beforeEach((to, from, next) => {
  if (to.path === '/') return next({ name: 'Home'})
  else if (to.path === '/auth') return next({ name: 'Login' })

  // does not require auth, make sure to always call next()!
  if (!to.matched.some(record => record.meta.requiresAuth)) return next()

  // go to wherever I'm going
  const tokenAuth = useStorage().getStorageSync("tokenAuth")
  if (tokenAuth) return next()

  // this route requires auth, check if logged in
  // if not, redirect to login page.
  next({ name: 'Login' })
})


router.afterEach((to, from) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  nextTick(() => {
      document.title = to.meta.head || DEFAULT_TITLE;
  });
});

export default router
