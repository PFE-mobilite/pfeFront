import DumbEmployeInfo from '../../data/DumbEmployeInfo'
const state = {
  employe: {
    nom: '',
    prenom: '',
    email: '',
    poste: '',
    service: '',
    diplome: '',
    date_recrutement: '',
    valeur_HJ: ''
  }
}

const mutations = {
  'SET_EMPLOYE' (state, DumbEmployeInfo) {
    state.employe = DumbEmployeInfo
  },
  'EDIT_EMPLOYE' (state, employe) {
    state.employe = employe
  }
}

const actions = {
  initEmploye: ({ commit }) => {
    commit('SET_EMPLOYE', DumbEmployeInfo)
  },
  editEmploye: ({ commit }, employe) => {
    commit('EDIT_EMPLOYE', employe)
  }
}

const getters = {
  employe: state => {
    return state.employe
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
