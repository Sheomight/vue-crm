import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
/* eslint-disable */
export default {
  actions: {
    async login({dispatch, commit}, {email, password}) {
      try {
        const auth = getAuth()
        await signInWithEmailAndPassword(auth, email, password)
      } catch (e) {
       commit('setError', e)
        throw e
      }
    },
    async register({dispatch, commit}, {email, password, name}) {
      try {
        const auth = getAuth()
        await createUserWithEmailAndPassword(auth, email, password)
        const uid = await dispatch('getUid')
        const db = getDatabase()
        set(ref(db, `users/${uid}/info`), {
          bill: 10000,
          name,
          email
        })
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    getUid() {
      const auth = getAuth()
      const user = auth.currentUser
      return user ? user.uid : null
    },
    async logout({commit}) {
      const auth = getAuth()
      await signOut(auth)
      commit('clearInfo')
    }
  }
}