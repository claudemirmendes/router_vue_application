import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Home from '@/components/Home'
import Schedule from '@/components/Schedule'
import Patients from '@/components/Patients'
import { store } from '../store/store'
import { router } from 'sw-toolbox';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        next()
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      beforeEnter: (to, from, next) => {
        if (store.getters.token) {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path:'/agenda',
      name: 'Schedule',
      component: Schedule,
      beforeEnter: (to, from, next) =>{
        if (store.getters.token) {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path:'/pacientes',
      name: 'Patients',
      component: Patients,
      beforeEnter: (to, from, next) =>{
        if (store.getters.token) {
          next()
        } else {
          next('/login')
        }
      }
    }
  ],
});
