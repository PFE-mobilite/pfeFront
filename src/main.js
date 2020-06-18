import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = Axios

const token = localStorage.getItem('token')
if (token) {
  console.log(store.getters.isRoleUser)
  Vue.prototype.$http.defaults.headers.common.Authorization = `Bearer ${token}`
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
