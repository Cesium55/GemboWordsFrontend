import './assets/main.css'
// import "./assets/css/collection.css"

import "./assets/css/colors_excepted.css"
// import "./assets/css/dark_theme_colors.css"

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'


const theme = localStorage.getItem('theme') || 'light';


if (theme === 'light') {
    import('@/assets/css/light_theme_colors.css');
  } else if (theme === 'dark') {
    import('@/assets/css/dark_theme_colors.css');
  }


const app = createApp(App)
app.use(router)
app.mount('#app')
