import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

import MyProfile from '../views/MyProfile.vue'
import EditProfile from '../views/EditProfile.vue'
import History from '../views/History.vue'
import ToUpCoin from '../views/ToUpCoin.vue'

import Favorite from '../views/FavoriteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
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
      path: '/myprofile',
      name: 'MyProfile',
      component: MyProfile
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
      path: '/fav',
      name: 'favorite',
      component: Favorite
    }

  ]
})

export default router
