import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import About from '../views/About.vue'
import firebase from "firebase";

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '*',
      redirect: '/login',
    },
    {
        path: '/',
        redirect: '/login',
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('home');
  else next();
});

export default router
