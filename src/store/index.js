import Vue from 'vue'
import Vuex from 'vuex'
import ProfilClient from './modules/ProfilClient'
import ProfilEmploye from './modules/ProfilEmploye'
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
    ProfilEmploye
  }
})
