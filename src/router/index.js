import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard'
import signin from '../components/authentification/signin'
import signup from '../components/authentification/signup'
import UserProfil from '../views/UserProfil'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    component: Dashboard,
    children: [
      {
        path: '/editUser',
        name: 'edit',
        component: UserProfil
      }
    ]
  },
  {
    path: '/login',
    name: 'signin',
    component: signin
  },
  {
    path: '/Registration',
    name: 'signup',
    component: signup
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
