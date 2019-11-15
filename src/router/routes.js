import App from '../App.vue'
import Home from '../components/Home.vue'
import Continents from '../components/Continents.vue'
import store from '../store'

export const routes = [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/continents',
    component: Continents,
    name: 'continents',
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      // The function calls the action from the store and it can use '.then' since the action returns a Promise
      store.dispatch('fetchContinents').then(continents => {
        // It receives 'continents' data as the payload since it's being returned in the action
        routeTo.params.continents = continents // We save the continents data to the route params and with 'props: true' in this route config, the component receives the data as props so it doesn't need to rely on vuex for accessing the store
        next()
      })
    }
  }
]
