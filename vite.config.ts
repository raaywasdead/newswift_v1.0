import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/newswift_v1.0/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
