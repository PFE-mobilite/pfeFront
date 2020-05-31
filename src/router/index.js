import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard'
import recapDisplay from '../components/dashboard/dashboardLayout/recapDisplay'
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
import NewFournisseurM from '../components/dashboard/fournisseur/fournisseurMaterriel/NewFournisseurM'
import EditFournisseurM from '../components/dashboard/fournisseur/fournisseurMaterriel/EditFournisseurM'
import FournisseurLlist from '../components/dashboard/fournisseur/fournisseurEnLigne/FournisseurHList'
import NewFournisseurL from '../components/dashboard/fournisseur/fournisseurEnLigne/NewFournisseurL'
import EditFournisseurL from '../components/dashboard/fournisseur/fournisseurEnLigne/EditFournisseurH'
import ProjetList from '../components/dashboard/projet/ProjectList'
import ServiceGeneralList from '../components/dashboard/ServiceGeneral/ServiceGeneralList'
import NewServiceGeneral from '../components/dashboard/ServiceGeneral/NewServiceGeneral'
import ServiceHebergement from '../components/dashboard/ServiceHebergement/ServiceHeberList.vue'
import NewServiceH from '../components/dashboard/ServiceHebergement/NewServiceH'
import EditServiceH from '../components/dashboard/ServiceHebergement/EditServiceH'
import ClientAccount from '../views/Client.vue'
import ProfileClient from '../components/clientAccount/ProfileClient'
import ProjectSection from '../components/clientAccount/ProjetSection'
import Redirection from '../views/Redirectiondefault'
import Employe from '../views/Employe'
import EmployeProfile from '../components/employeAccount/EmployeProfile'
import AchatDemande from '../components/employeAccount/DemandeAchat'
import ListComMateriel from '../components/employeAccount/ListComMateriel'
import EditComMateriel from '../components/employeAccount/EditMateriel'
import ListServiceHebergement from '../components/employeAccount/ListServiceHebergement'
import NewServiceCom from '../components/employeAccount/NewServiceCom'
import EditServiceCom from '../components/employeAccount/EditServiceHebergement'
import NewMatEmp from '../components/employeAccount/NouveauMateriel'
import Welcome from '../views/WelcomeDefault'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'redirection',
    component: Redirection
  },
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
        path: '/services-generaux',
        name: 'S.generaux',
        component: ServiceGeneralList
      },
      {
        path: '/add-service-general',
        name: 'newS.generaux',
        component: NewServiceGeneral
      },
      {
        path: '/fournisseurs',
        component: FournisseurChoix,
        children: [
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
            path: '/new-fournisseur-mat',
            name: 'newfournisseur',
            component: NewFournisseurM
          },
          {
            path: '/edit-fournisseur-mat',
            name: 'editfournisseur',
            component: EditFournisseurM
          }
        ]
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
    component: Welcome
  },
  {
    path: '/Registration',
    name: 'signup',
    component: signup
  },
  {
    path: '/clientAccount',
    component: ClientAccount,
    children: [
      {
        path: '/profile-client',
        name: 'ProfileClient',
        component: ProfileClient
      },
      {
        path: '/projets-client',
        name: 'ProjectSection',
        component: ProjectSection
      }
    ]
  },
  {
    path: '/employeAccount',
    component: Employe,
    children: [
      {
        path: '/profile-employe',
        name: 'EmployeProfile',
        component: EmployeProfile
      },
      {
        path: '/employe-achat-materiel',
        component: AchatDemande,
        children: [
          {
            path: '/employe-achat-materiel-list',
            name: 'ListComMateriel',
            component: ListComMateriel
          },
          {
            path: '/employe-achat-ser-list',
            name: 'ListComservice',
            component: ListServiceHebergement
          },
          {
            path: '/employe-new-mat',
            name: 'newMateriel',
            component: NewMatEmp
          },
          {
            path: '/employe-edit-mat',
            name: 'editMateriel',
            component: EditComMateriel
          },
          {
            path: '/employe-add-serH',
            name: 'newSerH',
            component: NewServiceCom
          },
          {
            path: '/employe-edit-serH',
            name: 'EditSerH',
            component: EditServiceCom
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
