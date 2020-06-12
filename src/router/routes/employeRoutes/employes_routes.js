import EmployeProfile from '../../../components/employeAccount/EmployeProfile'
import AchatDemande from '../../../components/employeAccount/DemandeAchat'
import ListComMateriel from '../../../components/employeAccount/materiel/ListComMateriel'
import EditComMateriel from '../../../components/employeAccount/materiel/EditMateriel'
import ListServiceHebergement from '../../../components/employeAccount/serviceHebergement/ListServiceHebergement'
import NewServiceCom from '../../../components/employeAccount/serviceHebergement/NewServiceCom'
import EditServiceCom from '../../../components/employeAccount/serviceHebergement/EditServiceHebergement'
import NewMatEmp from '../../../components/employeAccount/materiel/NouveauMateriel'
import Employe from '../../../views/Employe'

const routesEmploye = [
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
            path: '/employe-edit-mat/:id',
            name: 'editMateriel',
            component: EditComMateriel
          },
          {
            path: '/employe-add-serH',
            name: 'newSerH',
            component: NewServiceCom
          },
          {
            path: '/employe-edit-serH/:id',
            name: 'EditSerH',
            component: EditServiceCom
          }
        ]
      }
    ]
  }
]
export default routesEmploye
