describe('contact form', () => {
    it('should submit the form', () => {
        cy.visit('http://localhost:5173/about');
        cy.get('[data-cy="contact-input-message"]').type('Hi How are you');
        cy.get('[data-cy="contact-input-name"]').type('Shrinivass');
        cy.get('[data-cy="contact-input-email"]').type('shrinivass@gmail.com');
        cy.get('[data-cy="contact-btn-submit"]')
            .contains('Send Message')
            .and('not.have.attr', 'disabled');
        cy.get('[data-cy="contact-btn-submit"]').as('submitBtn')
        cy.get('@submitBtn').click();
        cy.get('@submitBtn').contains('Sending...');
        cy.get('@submitBtn').should('have.attr', 'disabled');

    });
})
