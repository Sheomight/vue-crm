import { createApp } from 'vue'
import Vuelidate from '@vuelidate/core'
import App from './App.vue'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize'

const app = createApp(App);
app.use(Vuelidate).use(store).use(router).mount('#app');
