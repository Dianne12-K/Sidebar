import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import SignUp from '../views/SignUp.vue';
import Signin from '../views/Signin.vue';
import Terms from '../components/Terms.vue';

const routes = [
  { path: '/', component: Dashboard },
  { path: '/signup', component: SignUp },
  { path: '/signin', component: Signin },
  { path: '/terms', component: Terms },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
