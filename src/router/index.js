import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard'
import signin from '../components/authentification/signin'
import signup from '../components/authentification/signup'
import EditEmploye from '../components/dashboard/profilUsers/employe/EditEmployeProfilContainer'
import ClientList from '../components/dashboard/profilUsers/clients/ClientsList'
import EmployeList from '../components/dashboard/profilUsers/employe/EmployeList'
import NewEmploye from '../components/dashboard/profilUsers/employe/NewEmployeAccount'
import NewClient from '../components/dashboard/profilUsers/clients/NewClientAccount'
import EditClient from '../components/dashboard/profilUsers/clients/EditClientProfilContainer'
import MaterielsList from '../components/dashboard/materiel/MaterielsList'
import NewMateriel from '../components/dashboard/materiel/NewMateriel'

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
        component: EditEmploye
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
      },
      {
        path: '/materiels',
        name: 'materiels',
        component: MaterielsList
      },
      {
        path: '/newmateriel',
        name: 'addmateriels',
        component: NewMateriel
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
