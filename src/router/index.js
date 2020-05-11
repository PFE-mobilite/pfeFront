import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard'
import signin from '../components/authentification/signin'
import signup from '../components/authentification/signup'
import UserProfil from '../components/dashboard/profilUser/UserProfil'
import ClientAdmin from '../components/dashboard/profilUser/ClientAdmin'
import EmployeAdmin from '../components/dashboard/profilUser/EmployeAdmin'
import NewEmploye from '../components/dashboard/profilUser/NewEmployeAccount'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    component: Dashboard,
    children: [
      {
        path: '/clients',
        name: 'clients',
        component: ClientAdmin
      },
      {
        path: '/employes',
        name: 'edit',
        component: EmployeAdmin
      },
      {
        path: '/editemploye',
        name: 'edit',
        component: UserProfil
      },
      {
        path: '/editemploye',
        name: 'edit',
        component: UserProfil
      },
      {
        path: '/newemploye',
        name: 'newAccount',
        component: NewEmploye
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
