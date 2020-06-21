import ClientAccount from '../../../views/Client.vue'
import ProfileClient from '../../../components/clientAccount/ProfileClient'
import ProjectSection from '../../../components/clientAccount/ProjetSection'
import ProjectInfo from '../../../components/clientAccount/ProjectInfo'

const routesClient = [
  {
    path: '/clientAccount',
    component: ClientAccount,
    meta: {
      requiresAuth: true,
      roles: 'ROLE_CONTACT'
    },
    children: [
      {
        path: '/clientAccount',
        name: 'ProfileClient',
        component: ProfileClient
      },
      {
        path: '/clientAccount/projets-client',
        name: 'ProjectSection',
        component: ProjectSection
      },
      {
        path: '/clientAccount/projet-info/:id',
        name: 'ProjectSection',
        component: ProjectInfo
      }
    ]
  }
]
export default routesClient
