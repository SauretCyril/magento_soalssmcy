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
