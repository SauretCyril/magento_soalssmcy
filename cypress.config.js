const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    // variable environnement
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
