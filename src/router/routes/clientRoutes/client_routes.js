import ClientAccount from '../../../views/Client.vue'
import ProfileClient from '../../../components/clientAccount/ProfileClient'
import ProjectSection from '../../../components/clientAccount/ProjetSection'

const routesClient = [
  {
    path: '/clientAccount',
    component: ClientAccount,
    children: [
      {
        path: '/clientAccount/profile-client',
        name: 'ProfileClient',
        component: ProfileClient
      },
      {
        path: '/clientAccount/projets-client',
        name: 'ProjectSection',
        component: ProjectSection
      }
    ]
  }
]
export default routesClient
