import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import JUi from './components'
const app = createApp(App)
app.use(JUi)
app.mount('#app')
