import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Detecta si estamos en GitHub Actions
const isGitHubPages = process.env.GITHUB_PAGES === 'true'

export default defineConfig({
  base: isGitHubPages ? '/FRONT_Kaizen/' : '/',
  plugins: [react()],
})
