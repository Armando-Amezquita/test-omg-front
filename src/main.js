import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vClickOutside from 'v-click-outside';


import '@/assets/styles.scss'

const app = createApp(App)
app.use(vClickOutside)
app.use(router)
app.mount('#app')
