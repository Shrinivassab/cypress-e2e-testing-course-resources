describe('tasks managements', () => {
    it('should open and close new task model', () => {
        cy.visit('http://localhost:5173/')
        cy.contains('Add Task').click()
        cy.get('.backdrop').click({force: true})
        cy.get('.backdrop').should('not.exist')
        cy.get('.modal').should('not.exist')
        // With cancel button
        cy.contains('Add Task').click()
        cy.contains('Cancel').click()
        cy.get('.backdrop').should('not.exist')
        cy.get('.modal').should('not.exist')
    });
})
