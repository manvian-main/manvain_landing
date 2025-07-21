import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'; 

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    svgr(),
    react()],
    optimizeDeps: {
    include: ['animejs'] // ✅ Ensures animejs works smoothly with Vite
  }
})
