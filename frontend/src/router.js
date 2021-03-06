import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('./views/Form.vue')
    },
    {
      path: '/prediction',
      name: 'prediction',
      component: () => import('./views/Prediction.vue')
    }
  ]
})
