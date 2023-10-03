import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import {createPinia} from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'



createApp(App).use(router).use(createPinia()).use(VueAxios, axios).mount('#app')
