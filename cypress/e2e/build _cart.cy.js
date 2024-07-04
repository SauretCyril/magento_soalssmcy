describe('access to woman top products', () => {
    
    beforeEach('passes', () => {
        cy.visit("https://magento.softwaretestingboard.com/").then(() => {
            cy.url().should('contain', 'softwaretestingboard.com')
          })
    })
  it('open liste menu top woman', () => {
    cy.get('#ui-id-4 > :nth-child(2)').trigger("mouseover");
    cy.get("#ui-id-9").should('be.visible').click(); 
    //cy.get(
  });
  
  
  
  
  })
   
  describe('select produc', () => {
    beforeEach('passes', () => {
      cy.visit("https://magento.softwaretestingboard.com/women/tops-women.html");
    });
  it('select product', () => {
    cy.get(':nth-child(1) >.product-item-info >.photo >.product-image-container >.product-image-wrapper >.product-image-photo').click();
    cy.get('#option-label-size-143-item-166').click();
    cy.get('#option-label-color-93-item-57').click();
  
  });
  
  it('add to cart', () => {
    cy.get('#product-addtocart-button');
  });
  });