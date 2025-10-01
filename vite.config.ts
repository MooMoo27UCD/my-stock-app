import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config for My Stock App
// - `base` is required for GitHub Pages at https://MooMoo27UCD.github.io/my-stock-app/
export default defineConfig({
  plugins: [react()],
  base: '/my-stock-app/',
})