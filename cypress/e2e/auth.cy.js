describe('tops', () => {

    it('tops', () => {
        cy.visit('https://magento.softwaretestingboard.com/');
        cy.get('#ui-id-4').trigger('mouseover');
        cy.get('#ui-id-9').click();
        cy.url().should('include', '/women/tops-women.html');
        cy.get('h1.page-title').should('contain', 'Tops');
        cy.get('img.product-image-photo').first().click();
        cy.url().should('include', 'breathe-easy-tank.html');
        cy.get('[data-ui-id="page-title-wrapper"]').should('contain', 'Breathe-Easy Tank');
        cy.get('#option-label-size-143-item-166').click();
        cy.get('#option-label-size-143-item-166').should('have.css', 'background-color', 'rgb(255, 255, 255)');
    })
})
