import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'material-icons/iconfont/material-icons.css'
import '@/assets/custom_styles.css'

createApp(App).use(store).use(router).mount('#app')
