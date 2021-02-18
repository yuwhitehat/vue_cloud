import { createApp } from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import '../theme/index.css'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'

createApp(App).use(ElementUI, { size: 'small', zIndex: 3000})

createApp(App).use(router).mount('#app')
