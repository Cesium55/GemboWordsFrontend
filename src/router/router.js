import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Login from '@/pages/Login.vue';
import Register from '@/pages/Register.vue';
import LearnRepeat from '@/pages/LearnRepeat.vue';
import Statistics from '@/pages/Statistics.vue';
import Learn from '@/pages/Learn.vue';
import Repeat from '@/pages/Repeat.vue';
import Categories from '@/pages/Categories.vue';
import Category from '@/pages/Category.vue';
import Cookies from 'js-cookie'; // Импортируем js-cookie
import CreateWord from '@/pages/CreateWord.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/stats',
    name: 'statistics',
    component: Statistics,
    meta: { requiresAuth: true }
  },
  {
    path: '/learn',
    name: 'Learn',
    component: Learn,
    meta: { requiresAuth: true }
  },
  {
    path: '/repeat',
    name: 'Repeat',
    component: Repeat,
    meta: { requiresAuth: true }
  },
  // {
  //   path: '/mixed',
  //   name: 'Mixed',
  //   component: LearnRepeat,
  //   meta: { requiresAuth: true }
  // },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories,
    meta: { requiresAuth: true }
  },
  {
    path: '/category/:category_id',
    name: 'Category',
    component: Category,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/add_word/:category_id',
    name: 'CreateWord',
    component: CreateWord,
    props: true,
    meta: { requiresAuth: true }
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes
});

// Глобальный навигационный гвард
router.beforeEach((to, from, next) => {
  // Проверяем, если у маршрута есть поле meta.requiresAuth
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Проверяем наличие токена в куках
    const token = Cookies.get('jwt');
    
    if (token) {
      next() // Токен найден, доступ разрешён
    } else {
      next({ name: 'Login' }) // Токен не найден, редирект на страницу входа
    }
  } else {
    next() // Если страница не требует авторизации, пропускаем
  }
})

export default router;
