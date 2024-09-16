import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    chromeWebSecurity: true,
    testIsolation: true,
    viewportWidth: 1920,
    viewportHeight: 1080,
    env: {
      API_ENDPOINT: 'http://localhost:4000',
      APP_ENDPOINT: 'http://localhost:3000'
    },
    specPattern: 'cypress/e2e/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    fixturesFolder: 'cypress/fixtures',
    setupNodeEvents(on, config) { },
  },
})