import { createApp } from 'vue'
import App from './App.vue'
// importando axios
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(VueAxios, axios).mount('#app')