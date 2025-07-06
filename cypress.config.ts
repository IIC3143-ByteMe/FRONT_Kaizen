const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173', // asegúrate que coincida con tu entorno Vite
    setupNodeEvents(on, config) {
      // puedes dejar esto vacío o configurar logs, screenshots, etc.
    },
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/e2e/**/*.cy.ts',
  },
});