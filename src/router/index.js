import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/Home';
import HelloWorld from '../components/HelloWorld';
import WebAuth from '../components/WebAuth';

const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/hello',
      component: HelloWorld,
      meta: {
        title: 'Hello World',
      },
    },
    {
      path: '/webauth',
      component: WebAuth,
      meta: {
        title: 'Login',
      }
    },
    {path: '*', redirect: '/home'},
  ],
});

router.replace('/home');

module.exports = router;
