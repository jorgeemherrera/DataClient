describe('App', () => {
  it('should display welcome message', () => {
    cy.visit('/');
    cy.get('app-root .content span').should('contain', 'front-data-client app is running!');
  });

  it('should load without browser errors', () => {
    cy.visit('/');
    // Cypress automatically fails on uncaught exceptions from the app
    cy.get('app-root').should('exist');
  });
});
