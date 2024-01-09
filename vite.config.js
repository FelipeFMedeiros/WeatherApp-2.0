import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /*server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5173', // substitua por sua URL de API
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }*/
})