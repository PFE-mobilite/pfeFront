import NewTechnologies from '../../../components/dashboard/technologie/AddTechnologie.vue'
import EditTechnologies from '../../../components/dashboard/technologie/EditTechnologie'
import ChoixSG from '../../../components/dashboard/ServiceGeneral/SgChoix'
import LignesSGList from '../../../components/dashboard/ServiceGeneral/LigneSG/LignesSGList'
import NewLigneSG from '../../../components/dashboard/ServiceGeneral/LigneSG/NewLigneSG'
import EditLigneSG from '../../../components/dashboard/ServiceGeneral/LigneSG/EditLigneSG'
import EditEmploye from '../../../components/dashboard/profilUsers/employe/EditEmployeProfilContainer'
import ClientList from '../../../components/dashboard/profilUsers/clients/ClientsList'
import EmployeList from '../../../components/dashboard/profilUsers/employe/EmployeList'
import EmployeTechno from '../../../components/dashboard/technologie/EmployeTechnologie'
import EmployeChoix from '../../../components/dashboard/profilUsers/employe/EmployeChoix'
import NewEmploye from '../../../components/dashboard/profilUsers/employe/NewEmployeAccount'
import NewClient from '../../../components/dashboard/profilUsers/clients/NewClientAccount'
import EditClient from '../../../components/dashboard/profilUsers/clients/EditClientProfilContainer'
import MaterielsList from '../../../components/dashboard/materiel/MaterielsList'
import NewMateriel from '../../../components/dashboard/materiel/NewMateriel'
import EditMateriel from '../../../components/dashboard/materiel/EditMateriel'
import FournisseurChoix from '../../../components/dashboard/fournisseur/FournisseurChoixContainer'
import FournisseurMList from '../../../components/dashboard/fournisseur/fournisseurMaterriel/FournisseurListM'
import NewFournisseurM from '../../../components/dashboard/fournisseur/fournisseurMaterriel/NewFournisseurM'
import EditFournisseurM from '../../../components/dashboard/fournisseur/fournisseurMaterriel/EditFournisseurM'
import FournisseurLlist from '../../../components/dashboard/fournisseur/fournisseurEnLigne/FournisseurHList'
import NewFournisseurL from '../../../components/dashboard/fournisseur/fournisseurEnLigne/NewFournisseurL'
import EditFournisseurL from '../../../components/dashboard/fournisseur/fournisseurEnLigne/EditFournisseurH'
import ProjetList from '../../../components/dashboard/projet/ProjectList'
import NewProjet from '../../../components/dashboard/projet/NewProjet'
import EditProjet from '../../../components/dashboard/projet/EditProjet'
import ServiceGeneralList from '../../../components/dashboard/ServiceGeneral/ServiceGeneralList'
import NewServiceGeneral from '../../../components/dashboard/ServiceGeneral/NewServiceGeneral'
import EditServiceGeneral from '../../../components/dashboard/ServiceGeneral/EditServiceGeneral'
import ServiceHebergement from '../../../components/dashboard/ServiceHebergement/ServiceHeberList.vue'
import NewServiceH from '../../../components/dashboard/ServiceHebergement/NewServiceH'
import EditServiceH from '../../../components/dashboard/ServiceHebergement/EditServiceH'
import Dashboard from '../../../views/Dashboard'
import recapDisplay from '../../../components/dashboard/dashboardLayout/recapDisplay'

const routesAdmin = [
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
        path: '/employes-choix',
        component: EmployeChoix,
        children: [
          {
            path: '/employes',
            name: 'employeList',
            component: EmployeList
          },
          {
            path: '/employes-technologies',
            name: 'employetechnologie',
            component: EmployeTechno
          }
        ]
      },
      {
        path: '/editemploye/:id',
        name: 'editEmpoloye',
        component: EditEmploye
      },
      {
        path: '/edit-client/:id',
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
        path: '/new-materiel',
        name: 'addmateriels',
        component: NewMateriel
      },
      {
        path: '/edit-materiel/:id',
        name: 'editmateriels',
        component: EditMateriel
      },
      {
        path: '/services-generaux',
        component: ChoixSG,
        children: [
          {
            path: '/services-generaux-details',
            component: ServiceGeneralList
          },
          {
            path: '/lignes-services-generaux',
            component: LignesSGList
          }
        ]
      },
      {
        path: '/add-service-general',
        name: 'newS.generaux',
        component: NewServiceGeneral
      },
      {
        path: '/add-ligneSG',
        name: 'new LS.generaux',
        component: NewLigneSG
      },
      {
        path: '/edit-ligneSG/:id',
        name: 'edit LS.generaux',
        component: EditLigneSG
      },
      {
        path: '/edit-service-general/:id',
        name: 'editS.generaux',
        component: EditServiceGeneral
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
            path: '/edit-fournisseur-ligne/:id',
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
            path: '/edit-fournisseur-mat/:id',
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
        path: '/new-projet',
        name: 'addprojets',
        component: NewProjet
      },
      {
        path: '/edit-projet/:id',
        name: 'editprojets',
        component: EditProjet
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
        path: '/edit-service-internet/:id',
        name: 'editservicehebergemenet',
        component: EditServiceH
      },
      {
        path: '/new-technologie',
        name: 'addtechnologie',
        component: NewTechnologies
      },
      {
        path: '/edit-technologie/:id',
        name: 'edittechnologie',
        component: EditTechnologies
      }
    ]
  }
]
export default routesAdmin
