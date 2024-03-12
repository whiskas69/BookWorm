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
    orgin: "http://3.93.61.199:5173",
  },
  
  resolve: {
    alias: {
      '@': '/src'
    }, 
  }
})
