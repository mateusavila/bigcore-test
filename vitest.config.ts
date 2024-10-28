// vitest.config.ts
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      provider: 'v8' // or 'v8'
    },
    server: {
      deps: {
        inline: ['vuetify'],
      },
    },
  },
})