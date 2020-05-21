import dumbNotifications from '../../data/DumbNotification'
const state = {
  notifications: []
}

const mutations = {
  'SET_NOTIFICATION' (state, dumbNotifications) {
    state.notifications = dumbNotifications
  }
}

const actions = {
  initNotification: ({ commit }) => {
    commit('SET_NOTIFICATION', dumbNotifications)
  }
}

const getters = {
  notifications: state => {
    return state.notifications
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
