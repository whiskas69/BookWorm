import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

import EditProfile from '../views/EditProfile.vue'
import History from '../views/History.vue'
import ToUpCoin from '../views/ToUpCoin.vue'

import Favorite from '../views/FavoriteView.vue'
import Shelf from '../views/ShelfView.vue'
import Writing from '../views/WritingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/editProfile',
      name: 'EditProfile',
      component: EditProfile
    },
    {
      path: '/history',
      name: 'history',
      component: History
    },
    {
      path: '/toupcoin',
      name: 'toupcoin',
      component: ToUpCoin
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: Favorite
    },
    {
      path: '/shelf',
      name: 'shelf',
      component: Shelf
    },
    {
      path: '/writing',
      name: 'writing',
      component: Writing
    }

  ]
})

export default router
