import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Login from '@/pages/Login.vue';
import Register from '@/pages/Register.vue';
import LearnRepeat from '@/pages/LearnRepeat.vue';
import Statistics from '@/pages/Statistics.vue';
import Learn from '@/pages/Learn.vue';
import Repeat from '@/pages/Repeat.vue';
import Categories from '@/pages/Categories.vue';


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
    component: Statistics
  },
  {
    path: '/learn',
    name: 'Learn',
    component: Learn
  },
  {
    path: '/repeat',
    name: 'Repeat',
    component: Repeat
  },
  {
    path: '/mixed',
    name: 'Mixed',
    component: LearnRepeat
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes
});

export default router