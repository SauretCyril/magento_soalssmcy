describe('selected tops', () => {
  it('select', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('#ui-id-4').trigger('mouseover')
    cy.get(".level1").first().click()
    cy.url().should("include","women/tops-women.html")
    cy.get(".page-title").should("contain", "Tops")
    cy.get(".product-image-photo").first().click()
    cy.url().should("include", "breathe-easy-tank.html")
    cy.get(".page-title").should("contain", "Breathe-Easy Tank")
    cy.wait(6000)
    cy.get("#option-label-size-143-item-166").click().should("have.css","backgroundColor","rgb(255, 255, 255)")
    
  
  })
})
