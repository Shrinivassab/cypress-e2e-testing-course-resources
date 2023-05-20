describe('template spec', () => {
  it('should render the main page', () => {
    cy.visit('http://localhost:5173/')
    cy.get('.main-header').find('img')
    // cy.get('.main-header img')
  })

  it('should display the page title', () => {
    cy.visit('http://localhost:5173/')
    cy.get('h1').should('have.length', 1)
    cy.get('h1').contains('My Cypress Course Tasks')
  });
})
