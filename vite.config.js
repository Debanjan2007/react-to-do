import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    // Add your allowed hostnames here
    allowedHosts: ['junkyard-nanny-flagman.ngrok-free.dev', 'localhost']
  }
})
