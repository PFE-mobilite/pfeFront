import DumbClient from '../../data/DumbClient'
const state = {
  client1: {
    societe: '',
    raison_social: '',
    nom: '',
    prenom: '',
    email: ''
  }
}

const mutations = {
  'SET_CLIENT' (state, DumbClient) {
    state.client1 = DumbClient
  },
  'EDIT_CLIENT' (state, client) {
    state.client1 = client
  }
}

const actions = {
  initCLient: ({ commit }) => {
    commit('SET_CLIENT', DumbClient)
  },
  editclient: ({ commit }, client) => {
    commit('EDIT_CLIENT', client)
  }
}

const getters = {
  client: state => {
    return state.client1
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
