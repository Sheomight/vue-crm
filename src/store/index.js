import { createStore } from 'vuex'
import auth from './auth'
import info from './info'
/* eslint-disable */
export default createStore({
  state: {
    error: null
  },
  getters: {
    error (s) {
      return s.error
    } 
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  actions: {
  },
  modules: {
    auth,
    info
  }
})
