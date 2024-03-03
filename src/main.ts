import { createApp } from 'vue'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import vuetify from './plugins/vuetify'
import App from './App.vue'

loadFonts()

const app = createApp(App)

app.use(vuetify)
app.use(router)

app.mount('#app')
