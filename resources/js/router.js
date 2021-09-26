import Router from 'vue-router'
import Home from './view/Home.vue'
import SignIn from './view/SignIn.vue'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
  ]
});