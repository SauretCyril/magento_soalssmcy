describe('E-commerce Site Tests', () => {
    it('should visit the Magento website', () => {
      cy.visit('https://magento.softwaretestingboard.com/');
    });

  it('should log in and add an item to the cart', () => {
    // Cliquer sur le lien de connexion
    cy.get('.authorization-link > a').click();

    // Saisir les informations de connexion
    cy.get('#email').type('your-email@example.com');
    cy.get('#pass').type('your-password');
    cy.get('#send2').click();

    // Vérifier que l'utilisateur est connecté
    cy.contains('Welcome, Your Name');

    // Naviguer vers 'tops'
    cy.get('a[href="https://magento.softwaretestingboard.com/women/tops-women.html"]').click();

    // Sélectionner le premier produit
    cy.get('.product-item-link').first().click();

    // Choisir la taille et la couleur (ajustez les sélecteurs en fonction du produit)
    cy.get('div[option-label="M"]').click();
    cy.get('div[option-label="Red"]').click();

    // Ajouter au panier
    cy.get('#product-addtocart-button').click();

    // Vérifier que le produit a été ajouté au panier
    cy.get('.message-success').should('contain', 'You added');
  });

  it('should modify the quantity of the product in the cart', () => {
    // Aller au panier
    cy.get('.showcart').click();
    cy.get('a.viewcart').click();

    // Modifier la quantité du produit
    cy.get('.input-text.qty').clear().type('2');
    cy.get('button.update').click();

    // Vérifier que la quantité a été mise à jour
    cy.get('.input-text.qty').should('have.value', '2');
  });
});