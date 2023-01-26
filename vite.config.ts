import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'

import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,ts}'],
        maximumFileSizeToCacheInBytes: 5000000,
        cleanupOutdatedCaches: true,
      },
      manifest: {
        name: 'Shopping list',
        short_name: 'Shopping list',
        description: 'Shopping list',
        start_url: '/',
        theme_color: '#FFFFFF',
        icons: [
          {
            src: 'img/icons/pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'img/icons/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'img/icons/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: '0.0.0.0',
    hmr: {
      clientPort: 3000,
    },
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
})
