import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
import { createPinia } from 'pinia'
import PortalVue from 'portal-vue'
loadFonts()

const app = createApp(App)

app.use(PortalVue)
app.use(router)
app.use(vuetify)
app.use(createPinia())
app.mount('#app')
