import { faker } from "@faker-js/faker";

describe("template spec", function () {
    before(function () {
      cy.fixture("shipping.json").as("shippingInfos");
      cy.fixture("login.json").as("loginInfos");
    });
  
    beforeEach(function () {
      cy.visit("https://magento.softwaretestingboard.com/customer/account/login");
      cy.get('input[name="login[username]"]').type(this.loginInfos.username);
      cy.get('input[name="login[password]"]').type(this.loginInfos.pwd);
      cy.get("#send2").click();
    });
  

  it("Fills shipping informations", function () {
    cy.visit(Cypress.env("checkoutBaseUrl") + "#shipping");
    // Need to check if cart is empty 
    cy.contains('.shipping-address-item.selected-item', 'SmailSmiley KhamedCovided').then(($el) => {
      if ($el.length === 0) {
      // Address not already registred
      cy.get('input[name="firstname"]').type(this.shippingInfos.firstName);
      cy.get('input[name="lastname"]').type(this.shippingInfos.lastName);
      cy.get('input[name="street[0]"]').type(this.shippingInfos.address1);
      cy.get('input[name="city"]').type(this.shippingInfos.city);
      cy.get('input[name="postcode"]').type(this.shippingInfos.postalCode);
      cy.get('select[name="country_id"]').select(this.shippingInfos.country);
      cy.get('input[name="telephone"]').type(this.shippingInfos.phoneNumber);
    }}); 
    cy.get("button:contains('Next')")
      .click()
      .then(() => {
        cy.url().should("include", "#payment");
        cy.get('button:contains("Place Order")')
          .click()
          .then(() => {
            cy.url().should("include", "#payment");
          });
      });
  });
});
