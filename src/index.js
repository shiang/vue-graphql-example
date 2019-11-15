import Vue from 'vue'
import App from './App.vue'
import apolloProvider from './apollo'
import store from './store'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import router from './router'
import 'nprogress/nprogress.css'

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
