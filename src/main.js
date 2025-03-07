import { createApp } from 'vue'
import App from './App.vue'

// routes
import router from './router/routes'

createApp(App)
    .use(router)
    .mount('#app')
