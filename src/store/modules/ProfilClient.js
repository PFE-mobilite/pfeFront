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
  'SET_CLIENT' (state) {
    state.client1.societe = ''
    state.client1.raison_social = ''
    state.client1.nom = ''
    state.client1.prenom = ''
    state.client1.email = ''
  },
  'EDIT_CLIENT' (state, client) {
    state.client1 = client
  }
}

const actions = {
  setclient: ({ commit }) => {
    commit('SET_CLIENT')
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
