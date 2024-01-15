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
        const uid = await dispatch('getUid')
        const db = getDatabase()
        set(ref(db, `users/${uid}/info`), {
          bill: 10000,
          name
        })
        await createUserWithEmailAndPassword(auth, email, password)
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
    async logout() {
      const auth = getAuth()
      await signOut(auth)
    }
  }
}