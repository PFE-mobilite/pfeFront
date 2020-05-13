import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard'
import signin from '../components/authentification/signin'
import signup from '../components/authentification/signup'
import UserProfil from '../components/dashboard/profilUsers/employe/EditEmployeProfil'
import ClientList from '../components/dashboard/profilUsers/clients/ClientsList'
import EmployeList from '../components/dashboard/profilUsers/employe/EmployesAdmin'
import NewEmploye from '../components/dashboard/profilUsers/employe/NewEmployeAccount'
import NewClient from '../components/dashboard/profilUsers/clients/NewClientAccount'
import EditClient from '../components/dashboard/profilUsers/clients/EditClientProfilContainer'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    component: Dashboard,
    children: [
      {
        path: '/clients',
        name: 'clientslist',
        component: ClientList
      },
      {
        path: '/employes',
        name: 'employeList',
        component: EmployeList
      },
      {
        path: '/editemploye',
        name: 'editclient',
        component: UserProfil
      },
      {
        path: '/editclient',
        name: 'edit',
        component: EditClient
      },
      {
        path: '/newemploye',
        name: 'newAccount',
        component: NewEmploye
      },
      {
        path: '/newclient',
        name: 'newClient',
        component: NewClient
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
