import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/sort': 'http://localhost:5000',
      '/algorithms': 'http://localhost:5000',
    },
  },
})
