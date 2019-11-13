import Vue from 'vue'
import App from './App.vue'
import apolloProvider from './apollo'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

new Vue({
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
