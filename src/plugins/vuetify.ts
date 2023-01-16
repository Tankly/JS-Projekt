// Styles
import '@mdi/font/css/materialdesignicons.css'
import '@/assets/index.scss'

// Vuetify
import { createVuetify } from 'vuetify'
import type { ThemeDefinition } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#5856D6',
    secondary: '#FFFFFF',
    background: '#F8F8F8',
    surface: '#EFEFF4',
    error: '#F43426',
    info: '#007AFF',
    success: '#4CD964',
    warning: '#FFE200',
    accent_dark_green: '#047C52',
    accent_orange: '#FF9F0A',
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme,
    },
  },
})
