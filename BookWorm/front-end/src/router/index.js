import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

import MyProfile from '../views/MyProfile.vue'
import EditProfile from '../views/EditProfile.vue'
import History from '../views/History.vue'
import ToUpCoin from '../views/ToUpCoin.vue'

import Favorite from '../views/FavoriteView.vue'
import Shelf from '../views/ShelfView.vue'
import Writing from '../views/WritingView.vue'

import Detail from '../views/DetailView.vue'
import Upload from '../views/UploadView.vue'
import Incategory from '../views/InCategoryView.vue'
import Bestselling from '../views/BestsellingView.vue'
import Catrgory from '../views/CategoryView.vue'

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
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/book/detail/:id',
      name: 'detailid',
      component: Detail
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    },
    {
      path: '/incategory',
      name: 'incategory',
      component: Incategory
    },
    {
      path: '/bestselling',
      name: 'bestselling',
      component: Bestselling
    },
    {
      path: '/catrgory',
      name: 'catrgory',
      component: Catrgory
    }

  ]
})

export default router
