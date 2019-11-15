import Vue from 'vue'
import Vuex from 'vuex'
import { apolloClient } from './apollo'
import { QUERY_CONTINENTS } from './graphql/queries'

Vue.use(Vuex)

const state = {
  continents: []
}

const mutations = {
  fetchContinents(state, continents) {
    state.continents = continents
  }
}

const actions = {
  fetchContinents({ commit }) {
    // The action needs to return a Promise along with the payload so it can be used by the 'beforeEnter' function in routes
    return apolloClient
      .query({
        query: QUERY_CONTINENTS
      })
      .then(res => {
        if (res.data && !res.loading) {
          commit('fetchContinents', res.data.continents)
          return res.data.continents
        }
      })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
