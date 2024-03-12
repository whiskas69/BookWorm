import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  preview: {
    port: 5173,
    strictPort: true,
  },
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    orgin: "http://52.86.167.253:5173",
  },
  
  resolve: {
    alias: {
      '@': '/src'
    }, 
  }
})
