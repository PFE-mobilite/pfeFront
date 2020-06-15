import Vue from 'vue'
import Vuex from 'vuex'
import ProfilClient from './modules/ProfilClient'
import ProfilEmploye from './modules/ProfilEmploye'
import Notifications from './modules/Notification'
import Authentication from './modules/Authenticate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ProfilClient,
    ProfilEmploye,
    Notifications,
    Authentication
  }
})
