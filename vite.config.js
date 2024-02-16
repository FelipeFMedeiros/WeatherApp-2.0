// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { server as localServer } from './vite.config.local.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: localServer
})
