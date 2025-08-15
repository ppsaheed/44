import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/44-digital-business-services/',
  build: {
    outDir: 'dist',
  },
})
