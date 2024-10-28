import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import 'vuetify/styles/main.sass'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// Vuetify
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { pt } from 'vuetify/locale'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const vuetify = createVuetify({
  components,
  directives,
  locale: {
    locale: 'pt',
    messages: { pt }
  },
  date: {
    locale: {
      pt: 'pt-BR'
    }
  }
})

createApp(App).use(vuetify).use(pinia).mount('#app')
