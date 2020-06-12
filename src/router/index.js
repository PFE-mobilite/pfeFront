import Vue from 'vue'
import VueRouter from 'vue-router'
import signup from '../components/authentification/signup'
import Welcome from '../views/WelcomeDefault'
import routes1 from './routes/public'
import routes2 from './routes/private'
import routesAdmin from './routes/adminRoutes/admin_routes'
import routesEmploye from './routes/employeRoutes/employes_routes'
import routesClient from './routes/clientRoutes/client_routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'signin',
    component: Welcome
  },
  {
    path: '/Registration',
    name: 'signup',
    component: signup
  }
].concat(routes1, routes2, routesAdmin, routesEmploye, routesClient)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
