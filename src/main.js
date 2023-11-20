import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import router from './Router'

var app = createApp(App)
app.use(router).mount('#app')

