import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import ErrorPage from '../views/ErrorPageView'

Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movie/:id(\\d+)',
    name: 'movie',
    component: () => import('../views/movie/MovieView.vue'),
    props: true
  },
  {
    path: '/top',
    name: 'top',
    component: () => import('@/components/topMovie.vue'),
  },
  
//  catchall, 404 page
{
  path: '/:catchAll(.*)',
  name: 'NotFound',
  component: ErrorPage
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
