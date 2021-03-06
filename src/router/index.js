import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
import Registration from '../views/Registration'
import loginPage from '../views/WelcomeDefault'
import routes1 from './routes/public'
import routes2 from './routes/private'
import routesAdmin from './routes/adminRoutes/admin_routes'
import routesEmploye from './routes/employeRoutes/employes_routes'
import routesClient from './routes/clientRoutes/client_routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'signin',
    component: loginPage
  },
  {
    path: '/registration',
    name: 'signup',
    component: Registration
  }
].concat(routes1, routes2, routesAdmin, routesEmploye, routesClient)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      if (to.matched.some(route => {
        return route.meta.roles && !route.meta.roles.includes(store.getters.isRoleUser)
      })
      ) {
        if (store.getters.isRoleUser === 'ROLE_ADMIN') {
          return next('/admin')
        } else if (store.getters.isRoleUser === 'ROLE_CONTACT') {
          return next('/clientAccount')
        } else {
          return next('/employeAccount')
        }
      }
      next()
      return
    }
    next({ path: '/' })
  } else {
    next()
  }
})
export default router
