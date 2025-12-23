import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/shadowlabs/',
  server: {
    port: 3000,
    strictPort: true,
  },
})
