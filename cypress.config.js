const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    // variable environnement
    checkoutBaseUrl : "https://magento.softwaretestingboard.com/checkout/"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
