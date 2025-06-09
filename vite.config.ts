import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'FRONT_Kaizen', // 👈 reemplaza por el nombre real del repo
})