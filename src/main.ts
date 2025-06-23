import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

// Naive UI
import {
  // create naive ui
  create,
  // component
  NButton,
  NCard,
  NConfigProvider,
  NMessageProvider,
  NGrid,
  NGridItem,
  NSpace,
  NStatistic,
  NDataTable,
  NTag
} from 'naive-ui'

const naive = create({
  components: [
    NButton,
    NCard,
    NConfigProvider,
    NMessageProvider,
    NGrid,
    NGridItem,
    NSpace,
    NStatistic,
    NDataTable,
    NTag
  ]
})

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(naive)
app.mount('#app')
