import axios from 'axios'
const state = {
  status: '',
  token: localStorage.getItem('token') || '',
  user: {},
  role: '',
  user_id: ''
}
const mutations = {
  'AUTH_REQUEST' (state) {
    state.status = 'loading'
  },
  'AUTH_SUCCESS' (state, token, user) {
    state.status = 'success'
    state.token = token
    state.user = user
  },
  'AUTH_ERROR' (state) {
    state.status = 'error'
  },
  'LOGOUT' (state) {
    state.status = ''
    state.token = ''
  }
}
const actions = {
  login ({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit('AUTH_REQUEST')
      axios({
        url: 'http://localhost:8080/api/login_check',
        data: user,
        method: 'POST'
      })
        .then(resp => {
          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('token', token)
          axios.defaults.headers.common.Authorization = `Bearer ${token}`
          commit('AUTH_SUCCESS', token, user)
          resolve(resp)
        })
        .catch(err => {
          commit('AUTH_ERROR')
          localStorage.removeItem('token')
          reject(err)
        })
    })
  },
  register ({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit('AUTH_REQUEST')
      axios({
        url: 'http://localhost:8080/api/register',
        data: user,
        method: 'POST'
      })
        .then(resp => {
          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('token', token)
          axios.defaults.headers.common.Authorization = token
          commit('AUTH_SUCCESS', token, user)
          resolve(resp)
        })
        .catch(err => {
          commit('AUTH_ERROR', err)
          localStorage.removeItem('token')
          reject(err)
        })
    })
  },
  logout ({ commit }) {
    return new Promise((resolve, reject) => {
      commit('LOGOUT')
      localStorage.removeItem('token')
      resolve()
    })
  }
}

const getters = {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status,
  isRoleUser: state => {
    const jwt = state.token
    const jwtData = jwt.split('.')[1]
    const base64 = jwtData.replace('-', '+').replace('_', '/')
    state.role = (JSON.parse(window.atob(base64))).roles[0]
    return state.role
  },
  getUserId: state => {
    const jwt = state.token
    const jwtData = jwt.split('.')[1]
    const base64 = jwtData.replace('-', '+').replace('_', '/')
    state.user_id = (JSON.parse(window.atob(base64))).id
    return state.user_id
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
