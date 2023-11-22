import { setupLayouts } from 'virtual:generated-layouts'
import { ViteSSG } from 'vite-ssg'

import generatedRoutes from '~pages'
import App from './App.vue'
import type { UserModule } from './types'

import '@unocss/reset/normalize.css'
import 'uno.css'
import 'vant/es/toast/style'
import './styles/css-vars.scss'
import './styles/index.scss'
import './styles/main.css'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
  },
)
