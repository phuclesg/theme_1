import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base:'/theme_1/',
  plugins: [
    tailwindcss(),
  ],
})