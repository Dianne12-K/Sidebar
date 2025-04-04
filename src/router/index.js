import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import SignUp from '../views/SignUp.vue';
import Signin from '../views/Signin.vue';

const routes = [
  { path: '/', component: Dashboard },
  { path: '/signup', component: SignUp },
  { path: '/signin', component: Signin },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
