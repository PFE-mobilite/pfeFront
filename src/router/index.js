import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard'
import recapDisplay from '../components/dashboard/dashboardLayout/recapDisplay'
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
import EditMateriel from '../components/dashboard/materiel/EditMateriel'
import FournisseurChoix from '../components/dashboard/fournisseur/FournisseurChoixContainer'
import FournisseurMList from '../components/dashboard/fournisseur/fournisseurMaterriel/FournisseurListM'
import NewFournisseur from '../components/dashboard/fournisseur/fournisseurMaterriel/NewFournisseurM'
import EditFournisseur from '../components/dashboard/fournisseur/fournisseurMaterriel/EditFournisseurM'
import FournisseurLlist from '../components/dashboard/fournisseur/fournisseurEnLigne/FournisseurHList'
import NewFournisseurL from '../components/dashboard/fournisseur/fournisseurEnLigne/NewFournisseurL'
import EditFournisseurL from '../components/dashboard/fournisseur/fournisseurEnLigne/EditFournisseurH'
import ProjetList from '../components/dashboard/projet/ProjectList'
import ServiceHebergement from '../components/dashboard/ServiceHebergement/ServiceHeberList.vue'
import NewServiceH from '../components/dashboard/ServiceHebergement/NewServiceH'
import EditServiceH from '../components/dashboard/ServiceHebergement/EditServiceH'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    component: Dashboard,
    children: [
      {
        path: '/recapDisplay',
        name: 'display',
        component: recapDisplay
      },
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
      },
      {
        path: '/editmateriel',
        name: 'editmateriels',
        component: EditMateriel
      },
      {
        path: '/fournisseurs',
        name: 'fournisseur',
        component: FournisseurChoix
      },
      {
        path: '/fournisseur-ligne-list',
        name: 'fournisseurL',
        component: FournisseurLlist
      },
      {
        path: '/add-fournisseur-ligne',
        name: 'newfournisseurL',
        component: NewFournisseurL
      },
      {
        path: '/edit-fournisseur-ligne',
        name: 'editfournisseurL',
        component: EditFournisseurL
      },
      {
        path: '/fournisseur-mat-list',
        name: 'fournisseurMateriel',
        component: FournisseurMList
      },
      {
        path: '/newfournisseur',
        name: 'newfournisseur',
        component: NewFournisseur
      },
      {
        path: '/editfournisseur',
        name: 'editfournisseur',
        component: EditFournisseur
      },
      {
        path: '/projets',
        name: 'projets',
        component: ProjetList
      },
      {
        path: '/service-hebergement',
        name: 'servicehebergemenet',
        component: ServiceHebergement
      },
      {
        path: '/new-service-internet',
        name: 'addservicehebergemenet',
        component: NewServiceH
      },
      {
        path: '/edit-service-internet',
        name: 'editservicehebergemenet',
        component: EditServiceH
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
