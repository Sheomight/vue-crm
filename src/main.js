import { createApp } from 'vue'
import Vuelidate from '@vuelidate/core'
import App from './App.vue'
import router from './router'
import store from './store'
import messagePlugin from './common/message.plugin'
import 'materialize-css/dist/js/materialize'

import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import 'firebase/firestore'

const firebaseApp = initializeApp({
  apiKey: "AIzaSyC3FWtIaxFX1GEQezxsC89ze08oZp_UNA8",
  authDomain: "vue-crm-ec5fb.firebaseapp.com",
  projectId: "vue-crm-ec5fb",
  storageBucket: "vue-crm-ec5fb.appspot.com",
  messagingSenderId: "1099222079334",
  appId: "1:1099222079334:web:ee10b944c4a9fa90549aa7",
  databaseURL: 'vue-crm-ec5fb-default-rtdb.europe-west1.firebasedatabase.app/'
})

let app

const auth = getAuth();
onAuthStateChanged(auth, () => {
  if(!app) {
    app = createApp(App);
    
    app
      .use(Vuelidate)
      .use(store)
      .use(router)
      .use(messagePlugin)
      .use(firebaseApp)
      .mount('#app');
  }
})



